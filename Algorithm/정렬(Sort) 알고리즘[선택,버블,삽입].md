# 정렬(Sort) 알고리즘

### 기본적인 정렬 알고리즘

1. 선택 정렬 (Selection Sort)

   - 과정

     각 루프마다
     - 최대 원소를 찾는다
     - 최대 원소와 맨 오른쪽 원소를 교환한다
     - 맨 오른쪽 원소를 제외한다

     하나의 원소만 남을 때까지 위의 루프를 반복한다.

   - 시간 복잡도

     T(n) = (n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)

2. 버블 정렬(Bubble Sort)

   - 과정

     각 루프마다
     - 첫번째 원소와 두번째원소를 비교한다
     - 더 큰 원소를 오른쪽에 둔다
     - 이어서 두번째원소와 세번째원소를 비교한다
     - 마찬가지로 더 큰 원소를 오른쪽에 두고 이미 오른쪽에 있다면 그냥 둔다
     - 최대 원소가 맨 오른쪽에 위치 할때까지 비교하여 반복한다
     - 맨 오른쪽 원소를 제외한다

     하나의 원소만 남을 때까지 위의 루프를 반복한다.

   - 시간 복잡도

     T(n) = (n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)

3. 삽입 정렬(Insertion Sort)

   - 과정

     - 두번째 원소부터 시작하여 첫번째 원소와 비교한다
     - 큰값을 뒤로 미루고 작은 값을 앞에 삽입한다
     - 다음 세번째 원소를 선택하여 적절하게 들어갈 위치에 삽입한다
     - 마지막 원소까지 위의 루프를 반복한다
     - 앞 레코드가 이미 정렬되어 있고 새로운 원소가 뒤에 들어온다면
       그 원소부터 시작하여 비교하고 적절한 위치에 삽입한다

   - 시간 복잡도

     - 최선의 경우

       이동 없이 1번의 비교만 수행되었을때

       Best T(n) = O(n)

     - 최악의 경우(입력 자료가 역순일 경우)
       n(n-1)/2 + 2(n-1) = (n^2+3n-4)/2 = O(n^2)
       Worst T(n) = O(n^2)