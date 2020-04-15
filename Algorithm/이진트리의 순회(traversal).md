# 이진트리의 순회(traversal)

- 순회 : 이진트리의 모든 노드를 방문하는 일

  - 중순위(inorder)

    - ![image-20200415020819001](https://user-images.githubusercontent.com/58761162/79368435-55ce0180-7f8a-11ea-9111-ed3e02f22304.png)

      1. 먼저 왼쪽부트리를 inorder로 순회
      2. 루트를 순회
      3. 오른쪽 부트리를 inorder로 순회

    - 의사코드

      ```java
      INORDER(x){//x를 루트로 하는 트리
          if x != null
              then INORDER(left[x])
              	 print key[x]//node[x]에 저장된 데이터 출력
              	 INORDER(right[x])
      }
      ```

    - 시간복잡도 : O(n)

  - 선순위(preorder)

    - inorder와 순서만 다르다

    - 루트를 먼저 방문후 왼쪽부트리, 오른쪽부트리를 순회하는데 각각 preorder로 순회한다.

    - 의사코드

      ```java
      PREORDER(x){//x를 루트로 하는 트리
          if x != null
              then print key[x]//node[x]에 저장된 데이터 출력
              	 PREORDER(left[x])
              	 PREORDER(right[x])
      }
      ```

  - 후순위(postorder)

    - 왼쪽부트리 - 오른쪽부트리 - 마지막으로 루트를 방문하는 순서로 각각 postorder로 순회한다.

    - 의사코드

      ```java
      POSTORDER(x){//x를 루트로 하는 트리
          if x != null
              then POSTORDER(left[x])
              	 POSTORDER(right[x])
              	 print key[x]//node[x]에 저장된 데이터 출력
      }
      ```

      

  - 레벨오더(level-order)

    - ![image-20200415022858838](https://user-images.githubusercontent.com/58761162/79368468-69796800-7f8a-11ea-8f3b-d81d93cc77ae.png)

    - 레벨 순으로 방문, 동일 레벨에서는 왼쪽에서 오른쪽 순서로 방문

    - 큐(queue)를 이용하여 구현

    - 의사코드

      ```java
      LEVELORDER(){
          visit the root;
          Q = root; //Q = queue 큐에 루트를 넣어서 시작
          while Q != null //큐가 비워질때까지 반복
              v = dequeue(Q); //큐를 하나 비운 후 v에 대입
          	visit children of v; //자식을 방문
          	enqueue children of v into Q; //자식을 큐에 넣는다.
      }
      ```

      

- Expression Tree

  ![image-20200415022538962](https://user-images.githubusercontent.com/58761162/79368504-7d24ce80-7f8a-11ea-8f90-289ada7f106c.png)

  - inorder순회 : x + y * a + b / c
  - 각 부트리를 순회할 때 시작과 종료시에 괄호를 추가하면 올바른 수식이 출력 된다
    : (x+y) * ((a+b)/c)
  - postorder순회 : 후위표기식 출력 => x y + a b + c / *

