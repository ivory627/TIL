/**
 * assert.js
 */
var assert = require("assert");

//////////////////// 변수 검사

var v1 = 10;
var v2 = 10;
var v3 = 20;
var v4 = '10';

assert(v1 < v3);
console.log("v1은 v3보다 작습니다.");
//v1은 v3보다 작습니다.

//assert(v1 == v3);
//console.log("v1은 v3과 같습니다.");
//false : 오류발생

assert(v1 == v2);
console.log("v1과 v2는 같습니다.");
//v1과 v2는 같습니다.

//assert(v1 - v2);
//console.log("v1 - v2는 0이 아닙니다.");
//결과값이 0이면 오류 발생

assert(v1 - v3);
console.log("v1 - v3은 0이 아닙니다.")
//v1 - v3은 0이 아닙니다.

assert.equal(v1,v2);
console.log("v1과 v2는 같습니다.")
//v1과 v2는 같습니다.

//assert.equal(v1,v3);
//console.log("v1과 v3는 같습니다.")
//false : 오류발생

assert.equal(v1,v4);
console.log("v1과 v4는 같습니다.")
//타입 무시
//v1과 v4는 같습니다.

//assert.strictEqual(v1, v4);
//console.log("v1과 v4는 같습니다.");
//타입 체크 : 타입이 다르므로 오류발생

//assert.notEqual(v1, v2);
//console.log("v1과 v2는 다릅니다.");
//false : 오류발생

assert.notEqual(v1, v3);
console.log("v1과 v3는 다릅니다.");
//v1과 v3는 다릅니다.

//assert.notEqual(v1, v4);
//console.log("v1과 v4는 다릅니다.");
//타입 무시 : 두 값이 같다고 판단하여 오류발생

assert.notStrictEqual(v1, v4);
console.log("v1과 v4는 다릅니다.");
//타입 체크 : 값은 같지만 타입이 다르므로 정상출력
//v1과 v4는 다릅니다.


//////////////////// 객체 검사

var obj1 = {
		a1 : 10,
		a2 : 20
};

var obj2 = {
		a1 : 10,
		a2 : 20
};

var obj3 = {
		a1 : 10,
		a2 : 30
};

var obj4 = {
		a1 : 10,
		a2 : '20'
};

assert.deepEqual(obj1, obj2);
console.log("obj1과 obj2는 같습니다.");
//obj1과 obj2는 같습니다.

//assert.deepEqual(obj1, obj3);
//console.log("obj1과 obj3은 같습니다.");
//false : 오류발생

assert.deepEqual(obj1, obj4);
console.log("obj1과 obj4는 같습니다.");
//타입무시
//obj1과 obj4는 같습니다.

//assert.deepStrictEqaul(obj1, obj4);
//console.log("obj1과 obj4는 같습니다.");
//타입체크 : 타입이 다르므로 오류발생

//assert.notDeepEqual(obj1, obj2);
//console.log("obj1과 obj2는 다릅니다.");
//false : 오류발생

assert.notDeepEqual(obj1, obj3);
console.log("obj1과 obj3은 다릅니다.");
//obj1과 obj3은 다릅니다.

//assert.notDeepEqual(obj1, obj4);
//console.log("obj1과 obj4는 다릅니다.");
//타입무시 : 두 객체가 같다고 판단하여 오류발생

assert.notDeepStrictEqual(obj1, obj4);
console.log("obj1과 obj4는 다릅니다.");
//타입체크 : 두 객체의 타입이 다르므로 정상출력
//obj1과 obj4는 다릅니다.
