# docker
## 유용한 docker 명령어 정리

1. docker-compose 컨테이너 실행
- 모두 실행
```
docker-compose up -d
```

- 특정 컨테이너만 실행

```
docker-compose up -d 컨테이너이름
ex ) docker-compose up -d backend
```

2. 컨테이너 목록 확인
```
docker ps -a
```

3. 이미지 목록 확인
```
docker images
```

4. 특정 컨테이너에 접속
```
docker exec -it 컨테이너이름 /bin/bash
ex) docker exec -it docker_backend /bin/bash
```

5. docker-compose 로그 확인
```
docker-compose logs
```

6. docker-compose 컨테이너 종료 후 삭제
```
docker-compose down
```

7. docker image 삭제
```
docker rmi 이미지이름
ex ) docker rmi docker_backend
```
