1. docker도 github와 비슷하게 운영된다.
   1. github에서 local환경의 소스코드를 remote에 보내려면 `git push`를 사용하고 local환경으로 불러오려면 `git clone 이후 git pull`명령어를 사용하는 것처럼
   2. docker에서는 `docker pull 또는 dockerfile내에 'FROM'이라는 명령어`를 사용한다.gitpush와 비슷하게 docker에서도 `docker push`로 remote상으로 보낼 수 있다.

```js
//컴퓨터의 가상화를 통해서 통일화된 환경을 구축 하는 순서
# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 깔려있는 컴퓨터 다운로드 하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder //myfolder 생성
COPY ./index.js /index.js

# 3. 도커안에서 index.js 실행시키
RUN node index.js
```

위와 같은 가상화 컴퓨터를 만들었다는 것을 저장 및 최적화하는데 이를 `docker bulid` 한다고 한다.
이렇게 되면 하나의 파일이 만들어 지는데 이를 `docker image`라 한다.
