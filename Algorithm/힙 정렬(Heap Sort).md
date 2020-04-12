# 힙 정렬(Heap Sort)

> **complete binary tree**이면서 **heap property**를 만족해야한다.

- 특징

  - 최악의 경우 시간복잡도 O(nlogn)

  - 하나의 배열 안에서 정렬하므로 추가 배열 불필요

  - 이진 힙(binary heap) 자료구조를 사용

  - 동일한 데이터를 가진 서로 다른 힙이 있을 수 있음
    즉, 힙은 유일하지 않음

  - 힙은 일차원 배열로 표현이 가능하다  A[1..n] (n은 노드의 갯수)

    - 루트노드 A[1]

    - A[i]의 부모 = A[i/2]

    - A[i]의 왼쪽 자식 = A[2i]

    - A[i]의 오른쪽 자식 = A[2i+1]

    - ![image-20200408032916481](C:\Users\박상아\AppData\Roaming\Typora\typora-user-images\image-20200408032916481.png)

      

#### :hand: 여기서 잠깐 !

- complete binary tree란?

  - ![image-20200408031655023](C:\Users\박상아\AppData\Roaming\Typora\typora-user-images\image-20200408031655023.png)
  - tree란 위 그림처럼 계층적 구조를 나타내는 것이다.
  - 위에서부터 아래까지 차례로 레벨 1, 레벨 2, 레벨 3, 레벨 4 이다.
  - 위와 아래에 두 개의 노드에 대해서 위의 노드가 부모, 아래 노드가 자식이라 한다.
  - 가장 최상위의 부모가 없는 노드를 root라고 한다.
  - 자식이 없는 노드를 leaf라고 한다.
  - 이진트리란 각각의 노드가 최대 2개의 자식노드를 갖는 트리이다.
  - 자식노드가 한 개의 경우 왼쪽 자식과 오른쪽 자식으로 구분된다.
  - full binary tree는 complete binary tree이기도 하다. 하지만 역은 성립하지 않는다.

- heap property란?

  - ![image-20200408031106389](C:\Users\박상아\AppData\Roaming\Typora\typora-user-images\image-20200408031106389.png)

  - max heap property : 부모는 자식보다 크거나 같다

  - min heap property : 부모는 자식보다 작거나 같다

    ** 위 그림에서는 max heap을 나타내고 있다

---

#### 기본 연산 : MAX-HEAPIFY

> 전체를 힙으로 만들어라 !

EX ) 유일하게 루트만이 heap property를 만족하지 않을 때

- 전제조건
  - 트리의 전체 모양은 complete binary tree 이다.
  - 왼쪽, 오른쪽 서브트리는 그 자체로 heap이다.

![image-20200408033613054](C:\Users\박상아\AppData\Roaming\Typora\typora-user-images\image-20200408033613054.png)



- 순환 알고리즘을 이용한 코드

  ```java
  public void MAX-HEAPIFY(int heap[], int i){
      int k = 0;
      //자식노드가 없다면 종료
      if(heap[i].length()==0){
          return;
      }
      //heap[i]의 자식중 더 큰쪽을 k에 복사 (배열 인덱스가 0부터이므로 i+1씩 해준다.)
      if(heap[2i+1]>heap[2i+2]){
          k = heap[2i+1];
      }else{
          k = heap[2i+2];
      }
      //heap[i]와 heap[k]를 비교하여 종료하거나 위치를 바꾸어준다.
      if(heap[i]>=heap[k]){
          return;
      }else{
          int tmp = 0;
          tmp = heap[i];
          heap[i] = heap[k];
          heap[k] = heap[i];
          MAX-HEAPIFY(heap,k);
      }
  }
  ```

  

- 반복문을 이용한 코드

  ```java
  public void MAX-HEAPIFY(int heap[],int i){
      int k = 0;
      while(heap[i].length()!=0){//자식 노드가 있어야 실행
          //heap[i]의 자식중 더 큰쪽을 k에 복사 (배열 인덱스가 0부터이므로 i+1씩 해준다.)
          if(heap[2i+1]>heap[2i+2]){
              k = heap[2i+1];
          }else{
              k = heap[2i+2];
          }
          //heap[i]와 heap[k]를 비교하여 종료하거나 위치를 바꾸어준다.
          if(heap[i]>=heap[k]){
              return;
          }else{
              int tmp = 0;
              tmp = heap[i];
              heap[i] = heap[k];
              heap[k] = heap[i];
              i = k;
          }
      }
  }
  ```


### Heap

> 정렬할 배열을 힙으로 만들기 !

- 의사코드

  BUILD-MAX-HEAP(A)

  1. heap-size[A] <- length[A] (정렬할 데이터의 개수)
  2. for i <- length[A]/2 downto 1
  3. ​       do MAX-HEAPIFY(A,i)

- 시간복잡도 : O(n)

### Heap Sort

> 진짜 힙 정렬을 해보자 !

1. 주어진 데이터를 **힙**으로 만든다.
2. 힙에서 최대값(루트)을 가장 마지막 값과 바꾼다.
3. 힙의 크기가 1 줄어든 것으로 간주한다. 즉, 가장 마지막 값은 힙의 일부가 아닌 것으로 간주한다.
4. 루트노드에 대해서 **HEAPIFY(1)**한다.
5. 2~4번을 반복한다.

### HeapSort와 시간 복잡도

- 의사코드

  HEAPSORT(A)

  1. BUILD-MAX-HEAP(A)                   //O(n)
  2. for i(heap-size) down 2 do         //n-1 times
  3. ​      exchange A[1] <-> A[i]           //O(1)
  4. ​      heap_size <- heap_size - 1    //O(1)
  5. ​      MAX-HEAPIFY(A,1)                  //O(logn)

- 시간복잡도
  힙 트리의 전체 높이가 거의 log₂n(완전 이진 트리이므로)이므로
  하나의 요소를 힙에 삽입하거나 삭제할 때 힙을 재정비하는 시간이 log₂n만큼 소요된다.
  요소의 개수가 n개 이므로 전체적으로 O(nlog₂n)의 시간이 걸린다.
  T(n) = O(nlog₂n)

---

### Heap의 응용 : 우선순위 큐

- 최대 우선순위 큐는 다음의 두 가지 연산을  지원하는 자료구조
  - INSERT(x) : 새로운 원소 x를 삽입
  - EXTRACT_MAX() : 최대값을 삭제하고 반환
- 최소 우선순위 큐는 EXTRACT-MAX 대신 EXTRACT-MIN을 지원하는 자료구조
- MAX HEAP을 이용하여 최대 우선순위 큐를 구현

### INSERT

- 의사코드

  ```java
  MAX-HEAP-INSERT(heap,x){ //x : 새로 insert할 값
  	heap_size = heap_size+1;
  	heap[heap_size] = x;
  	i = heap_size; //문제 노드
      //루트노드보다 크고 부모노드보다 클때 반복
  	while(i>1 and heap[parent(i)] < heap[i]){
      //문제노드와 부모노드를 교환
  	exchange heap[i] and heap[parent(i)];
  	//문제노드는 부모노드가 된다
      i = parent(i);
  	}
  }
  ```

- 시간 복잡도 : O(log₂n)

### EXTRACT-MAX

- 의사코드

  ```java
  HEAP-EXTRACT-MAX(heap){
      if heap_size < 1
          then error "heap underflow"
      //최댓값(루트노드)을 max에 저장
      max = heap[1];
      //루트노드에 heap의 마지막값을 넣는다
      heap[1] = heap[heap_size];
      //힙의 사이즈를 하나 줄여준다
      heap_size = heap_size-1
      //heapify연산을 해준다
      MAX-HEAPIFY(heap,1);
      return max;
  }
  ```

- 시간 복잡도 : O(log₂n)

---

