"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importMovies = exports.deleteMovie = exports.createMovie = exports.getMovieInfo = exports.getMoviesList = exports.createSession = exports.createUser = void 0;
var url = "http://localhost:8000";
var user = {
    email: "petro@gmail.com",
    //   name: "Petrov Petro",
    password: "super-password",
    // confirmPassword: "super-password",
};
var createUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var requestOptions, response, result_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/users", requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(result_1.token);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, console.log("error", error_1)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var createSession = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var requestOptions, response, result_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/sessions", requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(result_1.token);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                return [2 /*return*/, console.log("error", error_2)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createSession = createSession;
var getMoviesList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var myHeaders, requestOptions, params, response, result_1, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myHeaders = new Headers();
                myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY");
                requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                };
                params = "sort=".concat("title", "&order=").concat("DESC", "&offset=0");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/movies?" + params, requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(result_1.data);
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                return [2 /*return*/, console.log("error", error_3)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getMoviesList = getMoviesList;
var getMovieInfo = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var myHeaders, requestOptions, response, result_1, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myHeaders = new Headers();
                myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY");
                requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/movies/" + id, requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(result_1.data);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                return [2 /*return*/, console.log("error", error_4)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getMovieInfo = getMovieInfo;
var movie = {
    title: "blanc",
    year: 1942,
    format: "DVD",
    actors: ["Humphrey Bogartt", "Ingrid Bergman", "Claude Rains", "Peter Lorre"],
};
var createMovie = function (movie) { return __awaiter(void 0, void 0, void 0, function () {
    var myHeaders, requestOptions, response, result_1, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myHeaders = new Headers();
                myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY");
                myHeaders.append("Content-Type", "application/json");
                requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify(movie),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/movies", requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(JSON.stringify(result_1.data));
                return [3 /*break*/, 5];
            case 4:
                error_5 = _a.sent();
                return [2 /*return*/, console.log("error", error_5)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createMovie = createMovie;
var deleteMovie = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var myHeaders, requestOptions, response, result_1, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myHeaders = new Headers();
                myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY");
                requestOptions = {
                    method: "DELETE",
                    headers: myHeaders,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/movies/" + id, requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(result_1);
                return [3 /*break*/, 5];
            case 4:
                error_6 = _a.sent();
                return [2 /*return*/, console.log("error", error_6)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteMovie = deleteMovie;
var movies = new File([
    "Title: Blazing Saddles Release Year: 1974 Format: VHS Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn  Title: Casa Release Year: 1942 Format: DVD Stars: Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre",
], "movies.txt", { type: "text/plain" });
var importMovies = function (movies) { return __awaiter(void 0, void 0, void 0, function () {
    var myHeaders, formdata, requestOptions, response, result_1, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                myHeaders = new Headers();
                myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wNy0xOFQyMDoxNjozNi4wMDBaIiwiaWF0IjoxNzUyODcyNzk0fQ.JfeDu6MnuGbyS2aRHcO6uMua618BMLpRKeUdDhKW0mY");
                formdata = new FormData();
                formdata.append("movies", movies, "movies.txt");
                requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: formdata,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url + "/api/v1/movies/import", requestOptions)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result_1 = _a.sent();
                console.log(JSON.stringify(result_1.data));
                return [3 /*break*/, 5];
            case 4:
                error_7 = _a.sent();
                return [2 /*return*/, console.log("error", error_7)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.importMovies = importMovies;
(0, exports.importMovies)(movies);
