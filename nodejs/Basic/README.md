# node.js basic module

### :pencil:기본 작성법

`console.log` 는 node.js의 기본 출력문

```javascript
console.log("Hello World");

var a1 = 100;
console.log("a1: %d", a1);

console.log("a1:", a1);

var a2 = 200;
console.log("a1:",a1,"a2:",a2);
```

<br/>

### :heavy_check_mark: 모듈 사용하기

- node.js에서 자주 사용하는 함수의 경우 별도의 js파일에 만들어주면 되는데 이 때, 모듈이라는 개념을 사용한다.

- node.js에서는 js파일이 하나의 모듈이 되며 이는 하나의 객체 단위로 생각하면 된다.

- `exports`객체에 필요한 함수를 추가

  ```javascript
  exports.f2 = function(){
      console.log("f2 함수 호출");
  }
  ```

- `require`함수를 이용해 모듈 객체 생성, 함수 호출

  ```javascript
  var test = require("./second.js");
  test.f2();
  ```

<br/>

#### Assert 모듈

```javascript
var assert = require('assert');
```

- 개발자가 만든 코드가 동작하기 전에 데이터나 수식에 대한 검사를 할 수 있는 모듈
- Assert모듈에서 제공하고 있는 함수들을 이용하여 검사할 때 위배가 될 경우 오류가 발생하고 프로그램이 중지됨
- `assert` : 주어진 변수가 수식의 값이 0이거나 false인 경우 오류발생
- `equal` : 주어진 두 변수나 수식의 결과 값이 다를 경우 오류 발생. 값의 타입은 무시한다.
- `strictEqual` : 주어진 두 변수나 수식의 결과 값이 다를 경우 오류 발생. 값의 타입도 검사한다.
- `notEqual` : 주어진 두 변수나 수식의 결과 값이 같을 경우 오류 발생. 값의 타입은 무시한다.
- `notStrictEqual` : 주어진 두 변수나 수식의 결과 값이 같을 경우 오류 발생. 값의 타입도 검사한다.
- `deepEqual` : 두 객체의 멤버가 동일하지 않을 경우 오류발생. 값의 타입은 무시한다.
- `deepStrictEqual` : 두 객체의 멤버가 동일하지 않을 경우 오류발생. 값의 타입도 검사한다.
- `notDeepEqual` : 두 객체의 멤버가 동일할 경우 오류발생. 값의 타입은 무시한다.
- `notDeepStrictEqaul` : 두 객체의 멤버가 동일할 경우 오류발생. 값의 타입도 검사한다.

<br/>

#### Buffer 모듈

- 기억공간을 동적으로 만들 때 사용
- JavaScript는 자료형이 따로 존재하지 않으며 브라우저에 의해 탄력적으로 관리됨
- 만약 원하는 사이즈의 메모리 공간을 사용하고자 한다면 Buffer모듈을 이용해 동적으로 기억공간을 만들어 사용
- Buffer모듈은 모듈 생성 없이 사용
- Buffer모듈은 데이터를 1바이트씩 분리해 저장
- `alloc` : 지정된 바이트만큼 기억공간이 만들어지고 0으로 초기화
- `allocUnsafe` : 지정된 바이트만큼 기억공간이 만들어지고 0으로 초기화 되지 않음. alloc에 비해 속도가 빠름
- `byteLength` : 버퍼의 용량(바이트)을 반환
- `length` : 버퍼의 용량(바이트)을 반환
- `from` : 지정된 값을 관리하는 기억공간을 만듦
- `compare` : 두 기억공간을 비교
  - buf1 == buf2  : 0
  - buf1 > buf2  : 1
  - buf1 < buf2 : -1
- `concat` : 배열안에 있는 모든 버퍼를 하나로 합쳐 새로운 버퍼를 만듦
- `copy` : 버퍼의 내용을 다른 버퍼에 복사
- `entries` : 버퍼의 내용을 [인덱스,값]형태의 객체로 만들어 가지고 있는 배열을 반환
- `equals` : 두 버퍼의 내용이 같은지 비교
- `fill` : 버퍼에 지정된 값을 채움
- `includes` : 버퍼에 지정된 값이 있는지 확인
- `indexOf` : 버퍼에 지정된 값의 위치를 반환. 값이 없으면 -1반환
- `lastIndexOf` : 버퍼에 지정된 값의 위치를 뒤에서부터 검사하여 반환. 값이 없으면 -1반환
- `isBuffer` : 지정된 객체가 버퍼객체인지 확인
- `keys` : 버퍼에 저장된 객체의 인덱스를 가져옴
- `toString` : 버퍼에 저장된 값을 문자열로 가져옴

<br/>

#### Cluster 모듈

```javascript
var cluster = require('cluster');
```

- node.js에서 병렬처리를 위해 제공되는 모듈
- 작업 하나의 단위를 `worker`라고 부름, 처음 실행시 `master`생성
- cluster모듈 생성 후 `fork`메서드를 호출하면 worker하나가 생성되며 필요한만큼 worker를 생성해 병렬처리를 하면됨
- 보통 cpu코어의 갯수만큼 worker를 발생시켜 병렬처리
- 스케줄링 방식
  - OS에게 맡기는 스케줄링
    `cluster.schedualingPolicy = cluster.SCHED.NONE;`
  - Round Robin방식 스케줄링
    `cluster.schedualingPolicy = cluster.SCHED_RR;`
  - OS에 맡기는 방식은 특정 워커에 작업이 몰리는 경우가 많아서 워커들에게 작업을 순차적으로 배분하는 라운드로빈방식을 사용

<br/>

#### Crypto 모듈

```javascript
var crypto = require('crypto');
```

- node.js에서 데이터 암호화기능을 제공하는 모듈
- 현존하는 대부분의 암호화 알고리즘 지원
- `getCiphers` : 지원하는 암호화 알고리즘 이름들을 반환
- `createCipher` : 암호화용 객체 생성
- `createDecipher` : 복호화용 객체 생성
- `update` : 데이터를 암호화하거나 복호화
- `final` : 암호화된 데이터에 마지막 종료 블럭을 추가

createCipher와 createDecipher를 사용하니 deprecated경고가 떴다.

대체로 `createCipheriv, createDecipheriv`사용을 권장하는듯.

<br/>

#### dns 모듈

```javascript
var dns = require('dns');
```

- 지정된 도메인의 dns정보를 알아올 수 있는 모듈
- 지정된 도메인의 ip주소 등 정보를 파악할 수 있음
- [dns모듈이 제공하는 정보](https://nodejs.org/dist/latest-v6.x/docs/api/dns.html)
- `lookup` : 지정된 도메인의 정보를 가져옴

<br/>

#### fs 모듈

```javascript
var fs = require('fs');
```

- 파일에 데이터를 쓰고 읽어 올 수 있는 기능을 제공하는 모듈
- `writeFile` : 비동기식으로 파일에 데이터를 씀. 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터를 삭제하고 씀
- `appendFile` : 비동기식으로 파일에 데이터를 씀. 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터 뒤에 추가로 씀
- `readFile` : 비동기식으로 파일의 데이터를 읽어옴
- `writeFileSync` : 동기식으로 파일에 데이터를 씀. 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터를 삭제하고 씀
- `appendFileSync` : 동기식으로 파일에 데이터를 씀. 파일이 없으면 새롭게 만들며 파일이 있으면 기존 데이터 뒤에 추가로 씀
- `readFileSync` : 동기식으로 파일의 데이터를 읽어옴

<br/>

#### Global 모듈

- node.js에서 모듈을 생성하지않고 사용할 수 있는것을을 가지고 있는 모듈 객체
- Global 모듈 객체는 프로그램 시작과 동시에 생성이 되며 어디서든 사용이 가능
- `Buffer` : 메모리를 동적할당 할 수 있는 모듈
- `__dirname` : 현재 실행중인 파일의 경로
- `__filename` : 현재 실행중인 파일의 경로와 파일명
- `setImmediate` : 하나의 사건처리가 끝나면 동작할 코드 등록
- `clearImmediate` : 등록된 Immediate를 제거
- `setInterval` : 주어진 함수를 주어진 시간마다 계속 호출
- `clearInterval` : 등록된 Interval 제거
- `setTimeout` : 주어진 함수를 주어진 시간 후에 한 번 호출
- `clearTimeout` : 등록된 Timeout 제거
- `console` : 화면 출력 객체
- `exports` : 개발자가 모듈을 만들때 사용하는 객체
- `require` : 모듈 객체를 만드는 함수

<br/>

#### OS 모듈

```javascript
var os = require('os');
```

- node.js 프로그램이 실행되고 있는 서버 컴퓨터와 관련된 정보를 제공
- `arch` : CPU 아키텍처 정보
- `cpus` : 컴퓨터의 CPU 정보
- `totalmem` : 총 메모리의 양
- `freemem` : 여유 메모리 양
- `hostname` : 컴퓨터의 호스트 이름
- `networkInterfaces` : 컴퓨터에 장착된 통신 장비들의 정보
- `platform` : 실행 플랫폼의 정보
- `release` : 버전 정보
- `temdir` : 컴퓨터의 임시폴더 경로
- `type` : OS 이름
- `uptime` : OS 동작 시간
- `userInfo` : 사용자 정보

<br/>

#### path 모듈

```javascript
var path = require('path');
```

- 경로에 관련된 기능 제공
- 경로에 대해 여러 작업이 필요할 경우 사용
- `basename` : 경로에서 파일이름만 가져옴
- `dirname` : 경로만 가져옴
- `extname` : 확장자만 가져옴
- `isAbsolute` : 절대경로인지 확인해줌
- `join` : 주어진 경로를 합쳐줌
- `normalize` : 주어진 경로를 정리해줌

<br/>

#### http 모듈

```javascript
var http = require('http');
var url = require('url');
```

- 웹 어플리케이션을 개발할 수 있도록 제공되는 모듈
- 일반적인 웹서버와 동일하게 동작
- 웹 서버의 기능을 할 수 있는 모듈
- `createServer` : 웹 서버 객체를 만듦
- `listen` : 웹 서버를 동작시킴
- 클라이언트가 전달하는 파라미터는 url모듈을 이용하면 코드로 받아낼 수 있음