# 크루스칼 알고리즘 (Kruskal Algorithm)

> 최소비용신장트리를 만들기위한 대표적인 알고리즘으로,
>
> 가장 적은 비용으로 모든 노드를 연결하기위해 사용하는 알고리즘이다.



#### 수행순서

1. 그래프 내의 모든 간선을 가중치의 오름차순으로 목록을 만든다.
2. 1번에서 만든 간선의 목록을 차례대로 순회하면서 간선을 최소비용 신장트리에 추가한다.
   단, 이때 추가된 간선으로 인해 트리구조가 망가지면 안된다. (사이클이 생기면 안된다.)

여기서 사이클 발생 여부를 확인하기위해서 [**Union-Find**알고리즘](https://github.com/ivory627/TIL/blob/master/Algorithm/Union-Find.md)이 선행되어야한다.

- Union : 노드 연결

- Find :  cycle이 발생하는지, 즉 같은 부모를 가지는지 확인

  |  i   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |
  | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
  | P[i] |  1   |  2   |  3   |  4   |  5   |  6   |  7   |

  이와 같이 사이클 테이블을 만들어 union-find알고리즘을 활용하면 된다.



#### 소스코드

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Kruskal {

	//부모노드를 찾는 함수
	//재귀함수사용
	public static int getParent(int parent[], int x) {
		if (parent[x] == x) return x; // Base case
		return parent[x] = getParent(parent, parent[x]); // Recursive case
	}

	//두 부모 노드를 합치는 함수(Union)
	//노드 연결
	public static void unionParent(int parent[], int a, int b) {
		a = getParent(parent, a);
		b = getParent(parent, b);

		// 더 작은 값에 합쳐준다
		if (a < b) parent[b] = a;
		else parent[a] = b;
	}
	
	//같은 부모를 가지는지(=같은 그래프에 속하는지)확인 (Find)
	//사이클 여부 확인
	public static boolean findParent(int parent[], int a, int b) {
		a = getParent(parent, a);
		b = getParent(parent, b);

		if (a == b) return true;
		else return false;
	}
	
	//간선 클래스 선언
	static class Edge implements Comparable<Edge> {
		int[] node = new int[2];
		int distance;
		
		public Edge(int a, int b, int distance) {
			this.node[0] = a;
			this.node[1] = b;
			this.distance = distance;
		}
		
		//간선 오름차순 정렬
		@Override
		public int compareTo(Edge e) {
			if(this.distance < e.distance) return -1;
			else if(this.distance > e.distance) return 1;
			return 0;
		}
	}
	
	public static void main(String[] args) {
		//정점의 개수
		int v = 7;
		
		//정점과 간선 목록 나열
		List<Edge> list = new ArrayList<Edge>();
		list.add(new Edge(1, 7, 12));
		list.add(new Edge(1, 4, 28));
		list.add(new Edge(1, 2, 67));
		list.add(new Edge(1, 5, 17));
		list.add(new Edge(2, 4, 24));
		list.add(new Edge(2, 5, 62));
		list.add(new Edge(3, 5, 20));
		list.add(new Edge(3, 6, 37));
		list.add(new Edge(4, 7, 13));
		list.add(new Edge(5, 6, 45));
		list.add(new Edge(5, 7, 73));
		
		//간선 비용으로 오름차순 정렬
		Collections.sort(list);
		
		//각 정점이 포함된 부모가 누구인지 저장
		int[] parent = new int[v];
		//최소 간선의 총 비용
		int sum = 0;
		//부모노드 첫 세팅 -> 자기자신을 가리키도록
		for(int i=0; i<parent.length; i++) {
			parent[i] = i;
		}
		
		for(int i=0; i<parent.length; i++) {
			//같은 부모를 가지지 않는다면 (=사이클이 생기지 않는다면)
			//node배열 값에 -1을 해주는 이유는 parent노드 배열이 0~6값을 가지고 있기때문
			if(!findParent(parent, list.get(i).node[0]-1, list.get(i).node[1]-1)) {
				sum += list.get(i).distance;
				//두 정점 연결
				unionParent(parent, list.get(i).node[0]-1, list.get(i).node[1]-1);
			}
		}
		
		System.out.println("총 비용 : "+sum);
	}
}
```



참고 : [안경잡이 개발자 블로그](https://m.blog.naver.com/PostView.nhn?blogId=ndb796&logNo=221230994142&referrerCode=0&searchKeyword=%ED%81%AC%EB%A3%A8%EC%8A%A4%EC%B9%BC)