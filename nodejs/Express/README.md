# node.js Express module

### :heavy_check_mark: 외부 모듈 사용하기

- node.js에서 제공하는 기본 모듈만으로 개발하기 충분하지 않음
- node.js는 오픈 소스 플랫폼으로 소스가 공개되어 있어 전 세계 개발자들이 다양하게 모듈을 만들 수 있음
- 이를 통해 수많은 외부 모듈이 제작되고 있고, node.js 프로그래밍은 좀 더 쉽고 강력해지고 있음
- 명령어 `npm install [모듈이름]`으로 설치해서 사용
- 외부모듈정보사이트 : https://www.npmjs.com/
- `package.json`파일은 node.js 프로그램 개발시 사용하는 외부모듈들을 기록하고 한번에 설치할 수 있도록 관리하는 파일
- 이 파일을 이클립스 프로젝트에 만들어서 사용하면 외부 모듈 사용 가능
- `package.json`파일 생성하기 : 프로젝트 우클릭 - new - other - npm Init

**Example**

```json
{
  "name": "Express",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "arraylist": "*"
  }
}
```

- 버전을 명시하는 대신 '*'을 사용하면 최신 버전이 다운로드됨
- 설치하기 : Run as - npm install

<br/>

### :pencil: express 모듈 기본 사용법

- 웹 애플리케이션을 개발할 때 가장 많이 사용되고 있는 외부모듈
- http모듈에 비해 많은 기능을 갖추고 있어 보다 쉽게 웹 애플리케이션을 개발 가능
- `jade`,`ejs` 등과 같은 동적 웹 페이지 파일을 지원하고 있어 쉽게 애플리케이션 개발 가능
- `express` : express 모듈에서 제공하는 기능을 사용할 수 있는 객체를 반환하는 함수
- `get` : get방식으로 요청이 발생했을 때 호출될 함수 등록
- `post` : post방식으로 요청이 발생했을 때 호출될 함수 등록
- `listen` : 서버 가동

<br/>

#### 라우팅

- 사용자 요청에 따라 응답결과를 달리 전달하는 것을 라우팅이라 함

  ```javascript
  app.get("/",function(req,res){
  	res.send("ROOT");
  });
  
  app.get("/test",function(req,res){
  	res.send("TEST");
  });
  ```

- 웹 개발시 이러한 작업을 하나의 파일에 다 작성하면 유지보수가 어려움

- js 파일을 만들어 작성하면 파일을 분리할 수 있어 관리가 용이함

**controller1.js**

```javascript
module.exports = function(app){
	app.get("/",function(req,res){
		res.send("ROOT");
	});
};
```

**controller2.js**

```javascript
module.exports = function(app){
	app.get("/test",function(req,res){
		res.send("TEST");
	});
};
```

**main.js**

```javascript
var express = require("express");
var app = express();

var controller1 = require("./router/controller1")(app);
var controller2 = require("./router/controller2")(app);

var server = app.listen(2000,function(){
	console.log("서버가동");
});
```

<br/>

#### html 렌더링

- 클라이언트의 요청을 `send`함수를 이용해 응답결과를 전달하는데, 많은 양의 html코드를 담는다면 개발에 어려움이 있음
- express 모듈은 외부파일의 데이터를 읽어와 html 코드로 만든 다음 클라이언트에게 전달하는 기능인 렌더링을 제공
- express에서 렌더링을 위해 다른 모듈인 `jade`혹은`ejs`모듈을 사용
- `jade`는 html코드를 다시 `jade`코드로 바꿔야하는 번거로움이 있음

**:bulb: ejs 모듈 사용하기**

**main.js**

```javascript
var express = require("express");
//ejs 모듈객체 생성
var ejs = require("ejs");
var app = express();

//html파일 폴더 지정
app.set("views",__dirname + "/views");
//렌더링에 사용할 모듈 지정
app.set("view engine","ejs");
//html일 경우 사용할 ejs모듈 지정
app.engine("html",ejs.renderFile);
```

**controller.js**

```javascript
module.exports = function(app){
	app.get("/",function(req,res){
		res.render("index.html");
	});
};
```

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>index.html</h1>
</body>
</html>
```

:bulb: **정적 파일 사용하기**

- html 문서에서 `css`, `js`, `image`, `동영상`, `사운드` 등의 파일들을 사용할 땐 정적파일이 위치하는 폴더를 지정하여 사용

```javascript
//public이라는 정적파일이 위치한 폴더 지정
app.use(express.static("public"));
```

<br/>

#### 동적 웹 페이지

- express에서 렌더링 모듈을 사용하면 동적 웹페이지를 만들 수 있음
- 렌더링 모듈은 `jade`, `ejs` 등 다양하게 존재하지만 편의를 위해 `ejs`를 사용
- `ejs`모듈은 `jsp`코드와 흡사
- 렌더링 엔진을 `ejs`로 설정

```javascript
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.engine("ejs",ejs.renderFile);
```

- views 폴더에 필요한 만큼의 ejs 파일을 만듦

<br/>

#### 파라미터,쿠키,세션

**요청방식**

- 클라이언트가 서버에 요청할 때 `get`방식과 `post`방식이 있음
- `get`방식은 데이터가 주소창에 모두 나타나며, `post`는 숨겨져서 전달
- `form`태그에서 method를 `post`로 줄 때를 제외한 나머지의 경우는 `get`방식

<br/>

**파라미터**

- 클라이언트가 서버에 요청할 때 전달하는 데이터를 의미
- `request`객체를 통해 파라미터 추출 가능
- `get`방식의 경우 `query`라는 객체안에 모두 들어있음
- `post`방식의 경우 `bodyParser`모듈을 이용해야 파라미터 추출 가능

**controller.js**

```javascript
//post방식 : bodyParser모듈 객체 생성
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = function(app){
	
	app.get("/",function(req,res){
		res.render("data-test.ejs");
	});
	
    //get방식 parameter처리
	app.get("/parameter",function(req,res){
		
		var render_data = {
				data1 : req.query.data1,
				data2 : req.query.data2
		};
		
		res.render("parameter.ejs",render_data);
		
	});
	
    //post방식 parameter처리
	app.post("/parameter",urlencodedParser,function(req,res){
		var render_data = {
				data1 : req.body.data1,
				data2 : req.body.data2
		};
		res.render("parameter.ejs",render_data);
	});
	
};
```

**form태그 작성법**

```html
	<!-- get방식 -->
	<form action="parameter" method="get">
		data1 : <input type="text" name="data1"/><br/>
		data2 : <input type="text" name="data2"/><br/>
		<button type="submit">확인</button>		
	</form>
	<hr/>
	<!-- post방식 -->
	<form action="parameter" method="post">
		data1 : <input type="text" name="data1"/><br/>
		data2 : <input type="text" name="data2"/><br/>
		<button type="submit">확인</button>		
	</form>
```

<br/>

**쿠키**

- 클라이언트 측에 저장되는 데이터
- 클라이언트가 서버에 요청할 때 쿠키정보를 전부 전달, 이를 통해 서버에서 사용자 컴퓨터에 저장된 쿠키정보를 사용할 수 있음
- 쿠키는 사용자 컴퓨터에 저장되므로 브라우저를 닫아도 데이터가 유지
- express에서 쿠키를 관리할때는 `cookie-parser`모듈 사용

**main.js**에 추가

```javascript
var cookieParser = require("cookie-parser");
app.use(cookieParser());
```

**controller.js**에 추가

```javascript
	app.get("/save-cookie",function(req,res){
		var op = {
            	//쿠키가 살아있는 시간
				maxAge : 365 * 24 * 60 * 60
		};
		//쿠키저장
		res.cookie("cookie1","aaaaa",op);
		res.render("save-cookie.ejs");
	});
	
	app.get("/load-cookie",function(req,res){
		var render_data = {
				cookie1 : req.cookies.cookie1
		};
		res.render("load-cookie.ejs",render_data);
	});
```

<br/>

**세션**

- 서버 메모리에 데이터를 저장하는 방식으로 브라우저 하나당 하나의 공간 할당
- 브라우저를 닫으면 세션은 삭제됨
- express에서 세션을 관리할때는 `express-session`모듈 사용

**main.js**에 추가

```javascript
var session = require("express-session");
app.use(session({
	secret : "abcdefg",
	resave : false,
	saveUninitalized : true
}));
//secret : 암호화 key값
//resave : 세션정보 재저장 여부
//saveUninitlized : 초기화값 저장여부
```

**controller.js**에 추가

```javascript
	app.get("/save-session",function(req,res){
		
		req.session.data1 = 100;
		req.session.data2 = "안녕~";
		
		res.render("save-session.ejs");
	});
	
	app.get("/load-session",function(req,res){
		var render_data = {
				data1 : req.session.data1,
				data2 : req.session.data2
		};
		res.render("load-session.ejs",render_data);
	});
```

