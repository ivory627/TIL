

# 완전 탐색

> 가능한 모든 경우의 수를 일일히 나열하여 답을 찾는 방법.
>
> 즉, 가능한 방법을 전부 만들어 보는 알고리즘



- 완전탐색 방법
  - Brute Force : for문과 if문을 이용하여 처음부터 끝까지 탐색하는 방법
  - 비트마스크
  - 순열
  - 백트래킹
  - BFS



#### 순열(permutation)

순열이란 n개의 값 중에서 r개의 숫자를 모든 순서대로 뽑는 경우

ex) 배열 [1, 2, 3]에서 2개의 숫자를 뽑는 경우

- [1,2]
- [1,3]
- [2,1]
- [2,3]
- [3,1]
- [3,2]

1. **Swap**을 이용한 순열 (순서 유지 X)

![perm](https://user-images.githubusercontent.com/58761162/92065577-f0649b00-edda-11ea-915f-05227b3eb725.png)



```java
int[] data = {1,2,3}; //순열을 적용시킬 배열
int n = 3;//총 배열안에 들어있는 숫자
int r = 3;//몇개를 뽑아내서 순열을 만들 것인지
int depth = 0;//현재 트리구조에서 어떤 깊이에서 교환작업을 하고 있는지에 대한 변수.
			  //프로그램 시작점에서는 0으로 넣어주어야한다.

public static void perm(int[] data, int depth, int n, int r) {
    if(depth==r){ //한번 depth가 r로 도달하면 사이클이 돌았으므로 출력한다.
        print(data,r);
        return;
    }
    
    for(int i=depth; i<n; i++){
        swap(data, depth, i);
        perm(data, depth+1, n, r);
        swap(data, depth, i);
    }
    
}

public static void swap(int[] data, int depth, int i){
    int tmp = data[depth];
    data[depth] = data[i];
    data[i] = tmp;
}

public static void print(int[] arr, int r){
    for(int i=0; i<r; i++){
        System.out.print(arr[i]);
    }
    System.out.println();
}
```

```
123
132
213
231
321
312
```



2. **Visited배열**을 이용한 순열 (순서 유지 O)

DFS(깊이우선탐색)을 통하여 모든 인덱스를 방문해 배열 output에 값을 넣고

이미 들어간 값은 visited 값을 true로 바꾸어 중복해서 넣지 않도록한다.

![perm_visited](https://user-images.githubusercontent.com/58761162/92065617-05d9c500-eddb-11ea-8856-8e2e3a70f7a5.png)



```java
int[] data = {1, 2, 3};//순열을 적용시킬 배열
int n = 3;//총 배열안에 들어있는 숫자
int r = 3;//몇개를 뽑아내서 순열을 만들 것인지
int depth = 0;//현재 트리구조에서 어떤 깊이에서 교환작업을 하고 있는지에 대한 변수.
			  //프로그램 시작점에서는 0으로 넣어주어야한다.
int[] output = new int[n];//뽑힌 r개의 값
boolean[] visited = new boolean[n];//중복해서 뽑지 않기 위해 체크하는 값

public static void perm(int[] data, int[] output, boolean[] visited, int depth, int n, int r) {
    if (depth == r) {
        print(output, r);
        return;
    }
 
    for (int i=0; i<n; i++) {
        if (visited[i] != true) {
            visited[i] = true;
            output[depth] = data[i];
            perm(data, output, visited, depth + 1, n, r);       
            visited[i] = false;
        }
    }
}

public static void print(int[] arr, int r){
    for(int i=0; i<r; i++){
        System.out.print(arr[i]);
    }
    System.out.println();
}
```

```
123
132
213
231
312
321
```





#### 참고 사이트

https://gorakgarak.tistory.com/522

https://bcp0109.tistory.com/14