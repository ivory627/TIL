# Hashing

#### Hash Table

- 해쉬 테이블은 dynamic set을 구현하는 효과적인 방법중 하나
  - 적절한 가정하에서 평균 탐색, 삽입, 삭제시간 O(1)
  - 보통 최악의 경우 θ(n)
- 해쉬 함수(hash function) h를 사용하여 키 k를 T[h(k)]에 저장
  - h : U - > {0,1,...,m-1}
    여기서 m은 테이블의크기 , U는 모든 가능한 키들의 집합
  - 키 k가 h(k)로 해슁되었다고 말한다
  - ![image-20200506015239186](https://user-images.githubusercontent.com/58761162/81093544-39940380-8f3d-11ea-9e20-9e5fc6256b9b.png)



#### 해쉬 함수의 예

- 모든 키들을 자연수라고 가정 -> 어떤 데이터든지 자연수로 해석하는 것이 가능
  - 예 : 문자열
    - ASCII 코드 : C=67, L=76, R=82, S=83
    - 문자열 CLRS는
      (67x128^3)+(76x128^2)+(82x128^1)+(83x128^0)=141,764,947 이란 자연수
- 해쉬 함수의 간단한 예
  - h(k) = k % m
    즉 key를 하나의 자연수로 해석한 후 테이블의 크기 m으로 나눈 나머지
  - 항상 0~m-1사이의 정수가 됨



#### :collision:충돌(collision)

- ![image-20200506015317482](https://user-images.githubusercontent.com/58761162/81093588-4d3f6a00-8f3d-11ea-9c1b-227518f5ff8d.png)
- 두 개 이상의 키가 동일한 위치로 해슁되는 경우
- 즉, 서로 다른 두 키 k1과 k2에 대해서 h(k1)=h(k2)인 상황
- 일반적으로 |U|>>m이므로 항상 발생 가능 (즉 단사함수가 아님)
- 만약 |K|>m이라면 당연히 발생, 여기서 k는 실제로 저장된 키들의 집합
- 대표적인 두 가지 충돌 해경 방법
  - **chaining**과 **open addressing**



#### Chaining에 의한 충돌 해결

![image-20200424014913266](https://user-images.githubusercontent.com/58761162/81093606-53354b00-8f3d-11ea-8384-933d3c1e10f3.png)

- 동일한 장소로 해슁된 모든 키들을 하나의 연결리스트(Linked List)로 저장
- 키의 삽입(Insertion)
  - 키 k를 리스트 T[h(k)]의 맨 앞에 삽입 : 시간 복잡도 O(1)
  - 중복된 키가 들어올 수 있고 중복저장이 허용되지 않는다면
    삽입시 리스트를 검색해야하므로 시간복잡도는 **리스트의 길이에 비례**
- 키의 검색(Search)
  - 리스트 T[h(k)]에서 순차검색
  - 시간복잡도는 키가 저장된 **리스트의 길이에 비례**
- 키의 삭제(Deletion)
  - 리스트T[h(k)]로부터 키를 검색 후 삭제
  - 일단 키를 검색해서 찾은 후에는 O(1)시간에 삭제 가능
- 최악의 경우는 모든 키가 하나의 슬롯으로 해슁되는 경우
  - 길이가 n인 하나의 연결리스트가 만들어짐
  - 따라서 최악의 경우 탐색시간은 θ(n)+해쉬함수 계산시간
- 평균시간복잡도는 키들이 여러 슬롯에 얼마나 잘 분배되느냐에 의해서 결정



#### SUHA(Simple Uniform Hashing Assumption)

- 각각의 키가 모든 슬롯들에 균등한 확률로 독립적으로 해슁된다는 가정
  - 성능 분석을 위해서 주로 하는 가정
  - hash함수는 deterministic(결정론적)이므로 현실에서는 불가능
    - 결정론적 알고리즘은 예측한 그대로 동작하는 알고리즘이다.
      어떤 특정한 입력이 들어오면 언제나 똑같은 과정을 거쳐서 언제나 똑같은 결과를 내놓는다.
- Load factor α = n/m
  - n : 테이블에 저장될 키의 개수
  - m : 해쉬테이블의 크기, 즉 연결리스트의 개수
  - 각 슬롯에 저장된 키의 평균 개수
- 연결리스트 T[j]의 길이를 nj라고 하면 E[nj] = α
- 만약  n = O(m)이면 평균 검색시간은 O(1)



#### Open Addressing에 의한 충돌 해결

- 모든 키를 해쉬 테이블 자체에 저장
- 테이블의 각 칸(slot)에는 1개의 키만 저장
- 충돌 해결 기법
  - Linear probing
    - ![image-20200506004607548](https://user-images.githubusercontent.com/58761162/81093624-57f9ff00-8f3d-11ea-98aa-a881993eb282.png)
    - h(k), h(k)+1, h(k)+2,...순서로 검사하여 처음으로 빈 슬롯에 저장.
      테이블의 끝에 도달하면 다시 처음으로 circular하게 돌아간다
    - 단점
      - primary cluster : 키에 의해서 채워진 연속된 슬롯들을 의미
      - 이런 cluster가 생성되면 이 cluster는 점점 더 커지는 경향이 생김
  - Quadratic probing
    - 충돌 발생시 h(k), h(k)+1^2, h(k)+2^2, h(k)+3^2,...순서로 시도
  - Double hashing
    - 서로 다른 두 해쉬 함수 h1과 h2를 이용하여
      h(k,i) = (h1(k) + i x h2(k)) mod m (테이블 size)
    - ![image-20200506010138350](https://user-images.githubusercontent.com/58761162/81093638-5b8d8600-8f3d-11ea-8687-38b9733dad17.png)
- 단순히 키를 삭제할 경우 문제가 발생
  - 가령 A2, B2, C2가 순서대로 모두 동일한 해쉬함수값을 가져서 linear probing으로 충돌해결 후
  - B2를 삭제한 후 C2를 검색할때 문제가 발생한다
  - ![image-20200506010414479](https://user-images.githubusercontent.com/58761162/81093648-5defe000-8f3d-11ea-9323-3398cc35c8a2.png)



#### 좋은 해쉬 함수란 :grey_question:

- 현실에서는 키들이 랜덤하지 않음
- 만약 키들의 통계적 분포에 대해 알고있다면
  이를 이용해서 해쉬 함수를 고안하는 것이 가능하겠지만 현실적으로 어려움
- 키들이 어떤 특정한 패턴을 가지더라도 해쉬함수값이 불규칙적이 되도록 하는게 바람직
  - 해쉬함수값이 키의 특정 부분에 의해서만 결정되지 않아야한다.
- Division 기법
  - h(k) = k mod m
  - 예 : m=20 and k=91 -> h(k) = 11
  - 장점 : 한번의 mod연산으로 계산이 빠르다.
  - 단점 : 어떤 m값에 대해서는 해쉬 함수값이 키값의 특정 부분에 의해서 결정되는 경우가 있음.
    가령 m=2^p이면 키의 하위 p비트가 해쉬 함수값이 됨
- Multiplication 기법
  - 0에서 1사이의 상수 A를 선택 0<A<1 (소수)
  - kA의 소수부분만을 택한다
  - 소수 부분에 m을 곱한 후 소수점 아래를 버린다.
  - ex) m=8, word size=w=5, k=21
    - A = 13/32를 선택
    - kA = 21x13/32 = 273/32 = 8 + 17/32
    - m(kA mod 1) = 8 x 17/32 = 17/4 = 4.xxx..
    - 즉 h(21) = 4



#### Hash Code in Java

- Java의 Object 클래스는 hashCode()메서드를 가진다.
  따라서 모든 클래스는 hashCode()메서드를 상속받는다. 이 메서드는 하나의 32비트 정수를 반환한다.
- 만약 x.equals(y)이면 x.hashCode()==y.hashCode()이다.
  하지만 역은 성립하지 않는다.
- Object클래스의 hashCode()메서드는 객체의 메모리 주소를 반환하는 것으로 알려져 있다.
- 필요에 따라 각 클래스마다 이 메서드를 Override하여 사용한다.
  - 예 : Integer 클래스는 정수값을 hashCode로 사용



#### hashCode와 hash함수

- Hash code : -2^31에서 2^31사이의 정수

- Hash 함수 : 0에서 M-1까지의 정수 (배열 인덱스)

  ```java
  private int hash(key key)
  {
      return (key.hashCode() & 0x7fffffff) % M;
  }
  ```

  

#### HashMap in Java

- 4장에서 다룬 TreeMap 클래스와 유사한 인터페이스를 제공 ( 둘다 java.util.Map 인터페이스를 구현)
- 내부적으로 하나의 배열을 해쉬 테이블로 사용
- chaining으로 충돌 해결
- load factor를 지정할 수 있음(0~1사이의 실수)
- 저장된 키의 개수가 load factor를 초과하면 더 큰 배열을 할당하고 저장된 키들을 재배치(re-hashing)



#### HashSet in Java

- Set = 집합
- add, remove, contains

```java
HashSet<MyKey> set = new HashSet<MyKey>();
set.add(Mykey);
if(set.contains(theKey))
    ...
int k = set.size();
set.remove(theKey);

Iterator<MyKey> it = set.iterator();

while(it.hasNext()){
    MyKey key = it.next();
    if(key.equals(aKey))
        it.remove();
}
```

