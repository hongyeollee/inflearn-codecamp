docker의 명령순서는 위에서 아래로 흐르기 때문에 가장 큰 범위부터 위에서 세부적인 내용으로는 아래로 흘러내려간다.
그렇기 때문에 cashe가 작동되어 설치를 빠르게 할 수 있고 도커의 무게(?)도 덜 무겁게 된다.
이런 점을 꼭 생각하고 docker를 build해야 docker를 효율적으로 설계할 수 있다.

이런 내용의 예시는 package.json을 예로 들 수 있다.
package.json의 모듈들을 활용하기 위해서는 npm install 또는 yarn install 등을 사용하는데,
이때 모듈들을 사용하기 위한 `node_modules`가 생성된다 이는 용량도 내용도 많기 때문에 github에서도 대부분 git을 push
할때에 node_modules를 .gitignore에 포함시키기 때문이다. 그리하여 docker에도 `.dockerignore`가 있다.

그러하여 위의 예시를 통해서 docker 설계에서도 유동적으로 잘 활용할 수 있도록 해야한다.

1. docker container 삭제 방법

   1. `$ docker ps -a`로 현재 컨테이너에 대한 현황을 확인한다.
      (여기서 `$ docker ps -a -q`를 cmd하면 컨테이너에 대한 ID만 뽑아낼 수 있다.)
   2. '$ docker rm `docker ps -a -q`'로 입력하면 현재 작동중인 컨테이너를 제외하는 비작동 컨테이너에 대해서 삭제할 수 있다. ` docker ps -a -q에 백틱(``) `을 사용하면 백틱 안의 내용을 먼저 실행하게 되어 우선적으로 삭제를 하기 위한 리스트를 만들기 위해 백틱을 사용하게 된 것이다. 이는 리눅스의 cli cmd 기능이다.
      (사실 여기서 -a -q가 아닌 docker -q로만 해도 컨테이너 ID를 가져올 수 있다. 절차상 모든걸 표현하기 위해 명령어를 전체적으로 작성했다.)

2. docker image 삭제 방법
   1. `docker images`로 현재 image에 대한 정보를 확인한다.
      1. `docker image -a`는 docker의 image 전체정보를 확인할 수 있다(위 docker images와 같은 명령어
   2. `docker image -q`는 docker의 image ID 정보만 확인할 수 있다.
      1. '$ docker rmi`docker images -a -q`' 명령어로 docker의 이미지를 삭제할 수 있다.(rmi->remove image)

하지만 여기서 cashe의 정보는 삭제되지 않았다. docker의 image와 container cashe등 docker의 안 이미지를 전부 삭제하는 명령어도 있다.

3. docker 정보를 한번에 삭제하는 방법
   1. `docker system prune -a`을 입력한다.
   2. 어떤 것들이 지워지는지 cli에 나타내주고 삭제 여부를 물으면 y/n로 실행하면 된다.

> 이때, 위의 1,2,3 번 항목에 대해서 삭제시에 작동중인 이미지, 컨테이너 관련내용은 삭제되지 않는점 꼭 참고 !
