import { Dispatch } from "@reduxjs/toolkit";
import { setFetched } from "./slice";

const url = "http://localhost:8000";

function setTokenCookie(
  token: string,
  name: string = "auth_token",
  days: number = 7
): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${token};${expires};path=/;Secure;SameSite=Lax`;
}

export const getTokenCookie = (
  name: string = "auth_token"
): string | undefined => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return tokenCookie?.split("=")[1];
};

const token: string | undefined = getTokenCookie();

const user = {
  email: "petro@gmail.com",
  name: "Petrov Petro",
  password: "super-password",
  confirmPassword: "super-password",
};

export const createUser = async (user: {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(url + "/api/v1/users", requestOptions);
    const result_1 = await response.json();
    console.log(result_1.token);
    setTokenCookie(result_1.token);
    console.log(result_1.token, "set");
    //setAuthTokenWithJsCookie(result_1.token, 5);
    //console.log("from cookies", getAuthTokenWithJsCookie());
  } catch (error) {
    return console.log("error", error);
  }
};

export const createSession = async (user: {
  email: string;
  password: string;
}) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(url + "/api/v1/sessions", requestOptions);
    const result_1 = await response.json();
    setTokenCookie(result_1.token);
    console.log(result_1.token, "set");
  } catch (error) {
    return console.log("error", error);
  }
};

export const getMoviesList = async (dispatch: Dispatch<any>) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token as string);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const params = `sort=${"title"}&limit=10&order=${"DESC"}&offset=0`;

  try {
    const response = await fetch(
      url + "/api/v1/movies?" + params,
      requestOptions
    );
    const result_1 = await response.json();
    console.log(result_1);
    if (Array.isArray(result_1.data)) {
      // Отримаємо додаткову інформацію для кожного фільму
      const moviesWithInfo = await Promise.all(
        result_1.data.map(
          (movie: {
            createdAt: string;
            format: string;
            id: number;
            title: string;
            updatedAt: string;
            year: number;
          }) => getMovieInfo(movie.id)
        )
      );

      // Замінюємо data на масив з деталями
      result_1.data = moviesWithInfo;
      console.log(result_1.data);
    }
    dispatch(setFetched(result_1));
  } catch (error) {
    return console.log("error", error);
  }
};

export const getMovieInfo = async (id: number) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(url + "/api/v1/movies/" + id, requestOptions);
    const result_1 = await response.json();
    return result_1.data;
  } catch (error) {
    return console.log("error", error);
  }
};

const movie = {
  title: "blanc",
  year: 1942,
  format: "DVD",
  actors: ["Humphrey Bogartt", "Ingrid Bergman", "Claude Rains", "Peter Lorre"],
};

export const createMovie = async (movie: {
  title: string;
  year: number;
  format: string;
  actors: string[];
}) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY"
  );

  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(movie),
  };

  try {
    const response = await fetch(url + "/api/v1/movies", requestOptions);
    const result_1 = await response.json();
    console.log(JSON.stringify(result_1.data));
  } catch (error) {
    return console.log("error", error);
  }
};

export const deleteMovie = async (id: number) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY"
  );

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  try {
    const response = await fetch(url + "/api/v1/movies/" + id, requestOptions);
    const result_1 = await response.json();
    console.log(result_1);
  } catch (error) {
    return console.log("error", error);
  }
};

export const importMovies = async (movies: File) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY"
  );

  var formdata = new FormData();
  formdata.append("movies", movies, "movies.txt");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  };

  try {
    const response = await fetch(url + "/api/v1/movies/import", requestOptions);
    const result_1 = await response.json();
    console.log(JSON.stringify(result_1.data));
  } catch (error) {
    return console.log("error", error);
  }
};
