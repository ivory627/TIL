# 퀵 정렬(Quick Sort)

#### 분할 정복법

> 합병 정렬과 퀵 정렬은 분할 정복법을 따른다.

- 과정

  - 분할 : 배열을 다음과 같은 조건이 만족되도록 두 부분으로 나눈다.
    - 기준(pivot)을 선택 후
    - elements in lower parts <= elements in upper parts
  - 정복 : 각 부분을 순환적으로 정렬한다.
  - 합병 : nothing to do

- 퀵 정렬 코드

  ```java
  public void quickSort(int arr[], int left, int right){//arr[left~right]를 정렬한다.
      int pivot = 0;
      if(left<right){
          pivot = partition(arr,left,rigth); //기준점으로 분할 (분할 단계)
          quickSort(arr,left,pivot-1); //왼쪽 부분배열 정렬 (정복 단계)
          quickSort(arr,pivot+1,right); //오른쪽 부분배열 정렬 (정복 단계)
      }
  }
  ```

- partition 코드

  배열 arr[left~right]의 원소들을 A[right]을 기준으로 양쪽으로 재배치하고
  A[right]이 자리한 위치를 return한다. => **pivot**

  ```java
  public int partition(int arr[], int left, int right){
      int pivot = arr[right];
      int i = left-1; //pivot보다 작은 값들 중 마지막 값을 나타내는 배열 인덱스
      int tmp = 0;
      //배열의 왼쪽에서부터 피봇과 비교하여 작은값을 왼쪽으로 보내준다.
      for(int j=left; j<=right-1 j++){
          if(arr[j]<=pivot){
              i ++;
              tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
          }
      }
      //피봇보다 작은 부분과 피봇보다 큰부분으로 나누기위해
      //피봇보다 작은부분중 가장 큰값 + 1 의 배열과 피봇과 위치를 바꿔준다.
      tmp = arr[i+1];
      arr[i+1] = arr[right];
      arr[right] = tmp;
      
      return i+1;
  }
  ```
  
- 시간 복잡도

  - 최선의 경우 : 항상 절반으로 분할되는 경우 T(n) = O(nlog₂n)
  - 최악의 경우 : 항상 불균형하게 배열이 나눠지는 경우 (혹은 이미 정렬된 배열일때) T(n) = O(n^2)
  - 평균 : T(n) = O(nlog₂n)

- Pivot의 선택

  - 첫번째 값이나 마지막 값을 피봇으로 선택
    - 이미  정렬된 데이터 혹은 거꾸로 정렬된 데이터가 최악의 경우
    - 현실의 데이터는 랜덤하지 않으므로 (거꾸로) 정렬된 데이터가 입력으로 들어올 가능성은 매우 높음
    - 따라서 좋은 방법이라고 할 수 없다
  - "Median of Three"
    - 첫번째 값과 마지막 값, 그리고 가운데 값 중에서 중간값(median)을 피봇으로 선택
    - 최악의 경우 시간복잡도가 달라지지는 않음
  - Randomized Quicksort
    - 피봇을 랜덤하게 선택
    - no worst case instance, but worst case execution
    - 평균 시간 복잡도 O(nlog₂n)