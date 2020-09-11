# Union-Find(합집합 찾기)

> 대표적인 그래프알고리즘으로서 서로소 집합 (**Disjoint-Set**) 알고리즘이라고도 불린다.
>
> 여러 개의 노드가 존재할 때 두 개의 노드를 선택해서
> 현재 <u>이 두 노드가 서로 같은 그래프에 속하는지 판별</u>하는 알고리즘



#### 수행순서

1. 노드 초기화. 모든 값이 자기 자신을 가리키도록 만든다.
   i = 노드번호
   P[i] = 부모노드 번호

   |  i   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
   | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
   | P[i] |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |

   

2. 노드를 연결한다. 예를들어 1과 2가 연결되었다고 가정한다면 부모를 합칠 땐 일반적으로 더 작은 값 쪽으로 합친다. 이것이 **Union**과정이다.

   |  i   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
   | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
   | P[i] |  1   |  1   |  3   |  4   |  5   |  6   |  7   |  8   |

   

3. 만약 2와 3도 연결되었다면 아래처럼 표현할 수 있다.

   |  i   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
   | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
   | P[i] |  1   |  1   |  2   |  4   |  5   |  6   |  7   |  8   |

   그런데, 1과 2와 연결되어있고 2와 3이 연결되어있으니 결국 1,2,3의 부모노드는 1임을 알 수 있다. 하지만 위와같이 같은 부모를 가리키는지 한번에 파악할 수 없어 재귀함수가 사용된다.

   

4. 재귀함수 수행

   |  i   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
   | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
   | P[i] |  1   |  1   |  1   |  4   |  5   |  6   |  7   |  8   |

   노드 1,2,3의 부모가 1이기 때문에 세 노드는 모두 같은 그래프에 속한다고 할 수 있다.

   **Find알고리즘**은 두 노드의 부모를 확인하여 현재 같은 집합에 속하는지 확인하는 알고리즘이다.



#### 소스코드

```java
public class UnionFind {

	//부모노드를 찾는 메소드
	//재귀함수사용
	public static int getParent(int parent[], int x) {
		if(parent[x] == x) return x; //Base case
		return parent[x] = getParent(parent,parent[x]); //Recursive case
	}
	
	//두 부모 노드를 합치는 메소드(Union)
	public static void unionParent(int parent[], int a, int b) {
		a = getParent(parent, a);
		b = getParent(parent, b);
		
		//더 작은 값에 합쳐준다
		if(a < b) parent[b] = a;
		else parent[a] = b;
	}
	
	//같은 부모를 가지는지(=같은 그래프에 속하는지)확인 (Find)
	public static boolean findParent(int parent[], int a, int b) {
		a = getParent(parent, a);
		b = getParent(parent, b);
	
		if(a == b) return true;
		else return false;
	}
	
	public static void main(String[] args) {
		//초기화
        int[] parent = new int[11];
		for(int i=1; i<=10; i++) {
			parent[i] = i;
		}
		
        //노드 연결(Union)
		unionParent(parent,1,2);
		unionParent(parent,2,3);
		unionParent(parent,3,4);
		unionParent(parent,5,6);
		unionParent(parent,6,7);
		unionParent(parent,7,8);
		
        //Find
		System.out.println("1과 5는 연결되어 있나요?:"+findParent(parent, 1, 5));
		unionParent(parent, 1, 5);
		System.out.println("1과 5는 연결되어 있나요?:"+findParent(parent, 1, 5));
	}
}

```

