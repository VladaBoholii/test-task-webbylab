const url = "http://localhost:8000";

const user = {
  email: "petro@gmail.com",
  //   name: "Petrov Petro",
  password: "super-password",
  // confirmPassword: "super-password",
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
    console.log(result_1.token);
  } catch (error) {
    return console.log("error", error);
  }
};

export const getMoviesList = async () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const params = `sort=${"title"}&order=${"DESC"}&offset=0`;

  try {
    const response = await fetch(
      url + "/api/v1/movies?" + params,
      requestOptions
    );
    const result_1 = await response.json();
    console.log(result_1.data);
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
    console.log(result_1.data);
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
