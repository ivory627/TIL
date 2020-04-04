# 순환 (Recursion) 알고리즘

1. 개념

   : 자기 자신을 호출하는 함수

   ```java
   public class Code01 {
       public static void main(String[] args){
           func();
       }
       
       public void func(){
           System.out.println("Hello");
           func();
       }
   }
   ```

   => *무한루프*에 빠질 수 있다.

   무한루프에 빠지지 않게 하려면 ?

   ```java
   public class Code02 {
       public static void main(String[] args){
           int n = 4;
           func(n);
       }
       
       public void func(int k){
           if(k<=0) return; //Base case
           else {
               System.out.println("Hello");
               func(k-1); //Recursive case
           }
       }
   }
   ```

   - Base case : 적어도 하나의 recursion에 빠지지 않고 종료 되는 경우가 존재해야한다.
   - Recursive case : recursion을 반복하다보면 결국 base case로 수렴해야 한다.

   

2. 기본 예제

   - 1~n 까지의 합

     ```java
     public class Sum {
         public static void main(String[] args){
             int result = func(4);
         }
         
         public int func(int n){
             if(n==0)
                 retrun 0;
             else
                 return n + func(n-1);
         }
     }
     ```

   - Factorial : n!

     > 0! = 1
     >
     > n! = nx(n-1)!  단, n>0

     ```java
     public int factorial(int n){
         if(n==0)
             return 1;
         else
             return n*factorial(n-1);
     }
     ```

   - x^n

     > x^0 = 1
     >
     > x^n = x*x^n-1 단, n>0

     ```java
     public double power(double x, int n){
         if(n==0)
             return 1;
         else
             return x*power(x,n-1);
     }
     ```

   - Fibonacci Number

     > f0 = 0
     >
     > f1 = 1
     >
     > fn = fn-1 + fn-2  단, n>1

     ```java
     public int fibonacci(int n){
         if(n<2)
             return n;
         else
             return fibonacci(n-1) + fibonacci(n-2);
     }
     ```

   - 최대 공약수 : Euclid method

     > m>=n인 두 양의 정수 m과 n에 대해서 m이 n의 배수이면 gcd(m,n)=n이고,
     >
     > 그렇지 않으면 gcd(m,n) = gcd(n, m%n)이다.

     ```java
     public double gcd(int m, int n){
         if(m<n){
             //swap m and n
             int tmp = m;
             m = n;
             n = tmp;
         }
         if(m%n==0)
             return n;
         else
             return gcd(n, m%n);
     }
     ```

   - 문자열의 길이 계산

     ```java
     public int length(String str){
         if(str.equals(""))
             return 0;
         else
             return 1 + length(str.substring(1));
         	//첫번째 문자 제외한 문자열의 길이 + 1
     }
     ```

   - 문자열 프린트

     ```java
     public void printChars(String str){
         if(str.length()==0)
             return;
         else {
             System.out.print(str.charAt(0));
             printChars(str.substring(1));
         }
     }
     ```

   - 문자열 거꾸로 프린트

     ```java
     public void printCharsReverse(String str){
         if(str.length()==0)
             return;
         else {
             //위의 코드와 순서만 바꾸어준다
             printCharsReverse(str.substring(1));
             System.out.print(str.charAt(0));
         }
     }
     ```

   - 2진수로 변환하여 출력

     ```java
     public void printInBinary(int n){//n은 음이 아닌 정수
         if(n<2)//0,1은 2진수 그 자체
             System.out.print(n);
         else {
             printInBinary(n/2);//n을 2로 나눈 몫을 먼저 2진수로 변환하여 인쇄
             System.out.print(n%2);//n을 2로 나눈 나머지를 인쇄
         }
     }
     ```

   - 배열의 합 (data[0]~data[n-1]까지의 합)

     ```java
     public int sum(int n, int[] data){
         if(n<=0)
             return 0;
         else
             return sum(n-1,data) + data[n-1];
     }
     ```



3. Recursion vs. Iteration(반복문)

   - 모든 순환함수는 반복문으로 변경 가능
   - 그 역도 성립. 즉 **모든 반복문은 recursion으로 표현 가능**
   - 순환함수는 복잡한 알고리즘을 단순하고 알기쉽게 표현하는 것을 가능하게 함
   - 하지만 함수 호출에 따른 오버헤드가 있음
     (매개변수 전달, 액티베이션 프레임 생성 등)

   

4. 순환적 알고리즘 설계

   - 적어도 하나의 base case, 즉 순환되지 않고 종료되는 case가 있어야 함
   - 모든 case는 결국 base case로 수렴해야 함
   - 암시적(implicit)매개변수를 명시적(explicit)매개변수로 바꾸어라

