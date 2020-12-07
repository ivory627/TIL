/**
 * cluster.js
 */
var cluster = require("cluster");

//스케줄링을 OS에게 맡김 : 특정 워커에 작업이 몰리는 경우가 많음
//cluster.schedualingPolicy = cluster.SCHED.NONE;

//Round Robin 방식 스케줄링 : 워커들에게 작업을 순차적으로 배분
//-> worker에 균일하게 로드밸런싱이 안되는 문제해결
cluster.schedualingPolicy = cluster.SCHED_RR;

//master - worker
//처음 실행시 기본적으로 마스터가 생성
//마스터는 되도록 워커들을 생성/관리하는 로직만 포함
//cluster.fork로 워커를 생성하는데, 이미 마스터가 있다면 worker가 생성됨

if(cluster.isMaster == true){
	
	//3개의 작업(worker) 병렬처리
	cluster.fork();
	cluster.fork();
	cluster.fork();
	
	//이벤트 발생
	cluster.on('online',function(worker){
		for(var i=0; i<10; i++){
			console.log(worker.process.pid,"동작");
		}
	})
}
/*
20124 동작
20124 동작
20124 동작
20124 동작
20124 동작
20124 동작
20124 동작
20124 동작
20124 동작
20124 동작
6364 동작
6364 동작
6364 동작
6364 동작
6364 동작
6364 동작
6364 동작
6364 동작
6364 동작
6364 동작
10072 동작
10072 동작
10072 동작
10072 동작
10072 동작
10072 동작
10072 동작
10072 동작
10072 동작
10072 동작
*/