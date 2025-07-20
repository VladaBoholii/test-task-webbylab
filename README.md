# Test Task WebbyLab

- `username` — your DockerHub username  
- `http://localhost:8000/api/v1` — API base URL example (specify when running docker image)

---

## Clone repository

```bash
git clone https://github.com/VladaBoholii/test-task-we.git
cd test-task-webbylab
```

## Build Docker image

```bash
docker build -t username/movies .
```

## Run app image with

```bash
docker run --name movies -p 3000:3000 -e REACT_APP_API_URL=http://localhost:8000/api/v1 username/movies
```

## Or run image from [DockerHub holyholi/movies](https://hub.docker.com/r/holyholi/movies)

```bash
docker run --name movies -p 3000:3000 -e REACT_APP_API_URL=http://localhost:8000/api/v1 holyholi/movies
```

### As API URL has been used [DockerHub webbylabhub/movies](https://hub.docker.com/r/webbylabhub/movies)

