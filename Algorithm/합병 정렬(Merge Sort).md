# 합병 정렬(Merge Sort)

#### 분할 정복법

> 합병 정렬과 퀵 정렬은 분할 정복법을 따른다.

- 과정
  - 분할 : 해결하고자 하는 문제를 작은 크기의 동일한 문데들로 분할
  - 정복 : 각각의 작은 문제를 순환적으로 해결
  - 합병 : 작은 문제의 해를 합하여(merge) 원래 문제에 대한 해를  구함

#### 합병 정렬

- 과정

  - 데이터가 저장된 배열을 절반으로 나눔
  - 각각을 순환적으로 정렬
  - 정렬된 두 개의 배열을 합쳐 전체를 정렬

- 합병 정렬 코드

  ```java
  public void mergeSort(int arr[],int left,int right){ //arr[left~right]을 정렬한다
      int mid = 0;
      if(left<right){
          mid = (left+right)/2; //중간지점 계산 (분할단계)
          mergeSort(arr,left,mid); //전반부 정렬 (정복단계)
          mergeSort(arr,mid+1,right); //후반부 정렬 (정복 단계)
          merge(arr,left,mid,right); //2개의 정렬된 배열 합병 (합병 단계)
      }
  }
  ```

- merge 코드

  정렬되어 있는 두 배열 arr[left..mid]와 arr[mid+1..right]을 합하여
  정렬된 하나의 배열 arr[left..right]을 만든다.

  ```java
  public void merge(int arr[], int left, int mid, int right){
      int i=left; //정렬된 왼쪽 배열의 인덱스
      int j=mid+1; //정렬된 오른쪽 배열의 인덱스
      int k=left; //새로운 배열 인덱스
      int tmp[A.length()]; //정렬을 위한 새로운 배열
      while(i<=q && j<=r) {//반으로 쪼갠 리스트 중 하나를 정렬
          if(A[i]<=A[j])
              tmp[k++]=A[i++];
          else
              tmp[k++]=A[j++];
      }
      while (i<=q){ //왼쪽 리스트가 남아있을때 그대로 A배열의 데이터를 tmp배열로 복사
          tmp[k++]=A[i++];
      }
      while (j<=r){//오른쪽 리스트가 남아있을때 그대로 A배열의 데이터를 tmp배열로 복사
          tmp[k++]=A[j++];
      }
      //tmp에 정렬된 데이터를 원래의 A배열로 옮겨준다
      for(int i=p; i<=r; i++){
          A[i]=tmp[i];
      }
  }
  ```

- 시간 복잡도

  T(n) = nlog₂n(비교횟수) + 2nlog₂n(이동횟수) = 3nlog₂n = O(nlog₂n)
