# node.js 시작하기

### :book:개요

- node.js는 구글 크롬 브라우저에서 javaScript코드를 처리하기 위한 엔진인 v8엔진을 사용하는 서버측 프로그램 개발을 위한 플랫폼
- Ryan Dahl이 개발
- 가볍고 효율적인 비동기식으로 이벤트를 처리하여 분산처리가 가능
  - NoSql or 빅데이터 등 대용량 데이터를 처리하는 개발분야에서 많이 사용
- 한번 작성된 프로그램은 다양한 플랫폼에서 동작할 수 있도록 설계되어 있어 Windows, Linux, macOS에서 실행 가능

<br/>

### :books:특징

- 비동기식 이벤트 처리 : 여러가지 작업들을 비동기 방식으로 동시에 처리
- 빠른속도 : 구글 크롬에 탑재된 V8 JavaScript엔진을 이용해 코드처리가 빠름
- 단일 쓰래드이지만 확장성이 용이 : 단일 쓰래딩 방식을 사용함으로써 Apache Tomcat과 같은 기존 서버들 보다 확장성이 용이하고 많은 수의 클라이언트 요청을 처리함
- 버퍼링이 없음 : 데이터 입출력시 버퍼링 방식을 사용하지 않음
- 현재 ebay, GE, GoDaddy, Microsoft, PayPal, Uber, Wikipins, Yahoo, Yammer, facebook, twitter 등에서 사용됨

<br/>

### :gear:개발도구

- [Nodejs다운로드](https://nodejs.org) : LTS 버전으로 기본설정값 그대로 설치
- 이클립스에서 Nodeclipse 플러그인 설치
