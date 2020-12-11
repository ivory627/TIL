## :book: Guest book 간단 실습

- 로그인 후 방명록 확인/글쓰기
- 데이터베이스 (mysql) 기본

```javascript
// mysql 모듈 생성
var mysql = require("mysql");

// 데이터베이스 접속을 위해 접속정보를 가지고있는 객체를 만듦
var conn_info = {
	host : "localhost", //접속주소
	port : 3306, //포트번호
	user : "root", //아이디
	password : "0000", //비밀번호
	database : "TestDB" //데이터베이스 이름
};

// 데이터베이스에 접속
var conn = mysql.createConnection(conn_info);
conn.connect(function(err) {
	if (err) {
		console.log("접속오류");
	} else {
		console.log("접속성공");
		
		//insert
		var sql = "insert into TestTable (int_data, str_data) values (?, ?)";
		var input_data1 = [100, "문자열1"];
		conn.query(sql,input_data1,function(err){
			console.log("저장완료1");
		});
		
		var input_data2 = [200, "문자열2"];
		conn.query(sql, input_data2,function(err){
			console.log("저장완료2");
		});
		
		var input_data3 = [300, "문자열3"];
		conn.query(sql, input_data3,function(err){
			console.log("저장완료3");
		});
		
		//update
		var sql2 = "update TestTable set str_data=? where int_data=?";
		var update_data = ["문자열100", 100];
		conn.query(sql,update_data,function(err){
			console.log("수정완료");
		});
		
		//delete
		var sql3 = "delete from TestTable where int_data=?";
		var delete_data = [100];
		conn.query(sql,delete_data,function(err){
			console.log("삭제완료");
		});
		
		//select
		var sql4 = "select int_data, str_data from TestTable";
		conn.query(sql2,function(err,rows){
			for(var obj of rows){
				console.log("int_data :", obj.int_data);
				console.log("str_data :", obj.str_data);
			}
		});
		
		//접속종료
		conn.end();
	}
});
```