import { Dispatch } from "@reduxjs/toolkit";
import { append, setFetched, setTotal } from "./slice";

const url = (window as any)._env_?.REACT_APP_API_URL;

function setTokenCookie(
  token: string,
  name: string = "auth_token",
  days: number = 1
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
    const response = await fetch(url + "/users", requestOptions);
    const result_1 = await response.json();
    setTokenCookie(result_1.token);
    if (result_1.status) return result_1.status;
    else return result_1.error.code;
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
    const response = await fetch(url + "/sessions", requestOptions);
    const result_1 = await response.json();
    setTokenCookie(result_1.token);

    if (result_1.status) return result_1.status;
    else return result_1.error.code;
  } catch (error) {
    return console.log("error", error);
  }
};

export const getMoviesList = async (
  dispatch: Dispatch<any>,
  params: {
    offset: number;
    sort: string;
    order: string;
    actor: string;
    title: string;
    search: string;
  }
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token as string);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const req = new URLSearchParams({ limit: "10" });

  if (params.actor) req.append("actor", params.actor);
  if (params.title) req.append("title", params.title);
  if (params.search) req.append("search", params.search);
  if (params.order) req.append("order", params.order);
  if (params.sort) req.append("sort", params.sort);
  if (params.offset !== undefined) req.append("offset", String(params.offset));

  try {
    const response = await fetch(
      url + "/movies?" + req.toString(),
      requestOptions
    );
    const result_1 = await response.json();
    if (Array.isArray(result_1.data)) {
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

      result_1.data = moviesWithInfo;
    }
    if (params.offset == 0) {
      dispatch(setFetched(result_1.data));
      dispatch(setTotal(result_1.meta.total));
    } else {
      dispatch(append(result_1.data));
    }
  } catch (error) {
    return console.log("error", error);
  }
};

export const getMovieInfo = async (id: number) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token as string);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(url + "/movies/" + id, requestOptions);
    const result_1 = await response.json();
    return result_1.data;
  } catch (error) {
    return console.log("error", error);
  }
};

export const createMovie = async (movie: {
  title: string;
  year: number;
  format: string;
  actors: string[];
}) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token as string);

  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(movie),
  };

  try {
    const response = await fetch(url + "/movies", requestOptions);
    const result_1 = await response.json();
    if (result_1.status) return result_1.status;
    else return result_1.error.code;
  } catch (error) {
    return console.log("error", error);
  }
};

export const deleteMovie = async (id: number) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token as string);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  try {
    const response = await fetch(url + "/movies/" + id, requestOptions);
    const result_1 = await response.json();
  } catch (error) {
    return console.log("error", error);
  }
};

export const importMovies = async (movies: File) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", token as string);

  var formdata = new FormData();
  formdata.append("movies", movies, "movies.txt");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  };

  try {
    const response = await fetch(url + "/movies/import", requestOptions);
    const result_1 = await response.json();
    if (result_1.status) return result_1.status;
    else return result_1.error.code;
  } catch (error) {
    return console.log("error", error);
  }
};
