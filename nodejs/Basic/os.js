/**
 * os.js 
 */

var os = require('os');

console.log("CPU 아키텍처 :",os.arch());
console.log("CPU 정보 -------------------------------");
console.log(os.cpus());
console.log("총 메모리 양 :",os.totalmem());
console.log("여유 메모리 양 :",os.freemem());
console.log("호스트 이름 :",os.hostname());
console.log("네트워크 인터페이스 -------------------------------");
console.log(os.networkInterfaces());
console.log("실행 플랫폼 :", os.platform());
console.log("버전 :", os.release());
console.log("임시폴더 :", os.tmpdir());
console.log("실행 OS 이름 :", os.type());
console.log("OS 동작 시간 :", os.uptime(),"초");
console.log("사용자 정보 -------------------------------");
console.log(os.userInfo());