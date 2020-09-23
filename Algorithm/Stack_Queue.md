# 스택(Stack)

> '쌓다'는 의미로 바닥이 막혀있는 어떤 통을 생각하면 쉽다.
>
> 차곡차곡 물건을 쌓다가 다시 뺄때는
>
> 가장 위에서부터 뺄 수 있으므로 후입선출 LIFO(Last in First out)구조이다.
>
> 즉, 한 쪽 끝에서만 데이터를 넣고 뺄 수 있는 형식의 자료구조이다.

- 데이터의 조회(peek), 추가(push), 삭제(pop) 모두 가장 위에 있는 최근 값에서 이루어진다.
- 가장 상단에 있는 데이터를 Top이라고 한다.



### Java의 Stack 클래스

```java
//생성
Stack<Element> st = new Stack<>();

//추가
Element push(Element e);

//삭제
Element pop();

//조회
Element peek();

//stack이 비었는지 확인
//비었으면 true, 아니면 false
boolean empty();

//인자값으로 받은 데이터의 위치 반환
//인덱스 값이 아닌 스택구조에서 몇번째에있는지 반환 (깊이)
//0이아닌 1부터 시작, 찾지 못하면 -1 반환
int search(Object o);
```

Stack의 특성상 마지막 데이터를 쉽게 빼낼 수 있어 마지막 기록, 최근 기록 등을 저장할 경우만 사용하고 조회에 강점을 가지는 다른 자료구조들이 많기 때문에 stack사용을 회피한다.

=> **주로 LinkedList를 사용하여 구현**



# 큐(Queue)

> Queue란 길게 늘어진 통로를 생각하면 쉽다. 
>
> 예를 들어 은행 창구처럼 먼저 온 사람 순서대로 업무를 볼 수 있는 선입선출(FIFO)구조이다.
>
> 즉, 선형 메모리 공간에 데이터를 저장하면서
>
> 가장 먼저 저장된 데이터가 가장 먼저 인출되는 자료구조이다.

- 조회,삭제할땐 큐에 맨 앞 (제일 먼저 저장된) 요소를 반환
- 추가할땐 큐에 맨 뒤에 요소를 추가

### Java의 Queue인터페이스

클래스로 구현된 스택과 달리 자바에서 큐 메모리 구조는 별도의 인터페이스 형태로 제공된다.

Queue인터페이스를 상속받는 하위 인터페이스

1. Deque
2. BlockingDeque
3. BlockingQueue
4. TransferQueue

Queue인터페이스를 직간접적으로 구현한 클래스는 상당히 많은데,

그중에서도 Deque인터페이스를 구현한 LinkedList클래스가 가장 많이 사용된다.

```java
//생성
Queue<Element> q = new LinkedList<>();

//추가
//삽입 성공시 true, 큐에 여유공간이 없어 삽입에 실패하면
//IllegalStateException을 발생시킨다.
boolean add(Element e);

//조회
//맨 앞 요소 반환
Element element();

//조회
//맨 앞 요소를 반환하고 큐가 비어있다면 null을 반환
Element peek();

//추가
boolean offer(Element e);

//삭제
//맨 앞 요소를 반환하고 해당 요소를 큐에서 제거
//큐가 비어있다면 null반환
Element poll();

//삭제
//맨 앞 요소 제거
Element remove();
```



### PriorityQueue

>  Queue의 인터페이스 구현체 중 하나인 우선순위 큐이다.

- 저장한 순서에 관계없이 우선순위가 높은 것부터 꺼낸다.
- null을 저장하면 NullPointerException발생한다.
- 저장공간으로 배열을 사용하고 heap이라는 자료구조 형태로 저장한다.

ex) 2, 3, 5, 1, 4 순서로 데이터를 추가하고 다시 데이터를 꺼낼 시 1, 2, 3, 4, 5 로 나온다.

*여기서 실제 큐를 출력하면 추가한 순서와 다르게 저장되어있을 수 있는데,

**heap**구조의 형태로 저장되어서 그렇다.



### Deque

> Queue의 변형으로 한쪽으로만 추가/삭제할 수 있는 큐와 달리
>
> Deque는 양쪽 끝에서 추가/삭제가 가능하다.

- ArrayDeque와 LinkedList등으로 구현할 수 있다.
- Deque는 Stack과 Queue를 하나로 합쳐놓은 것과 같기때문에
  Stack, Queue로 둘다 사용가능하다.