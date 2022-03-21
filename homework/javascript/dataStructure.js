/**자료구조(Data Structure)
데이터에 편리하게 접근하고 변경하기 위해 데이터를 저장하거나 조직하는 방법.
( + 알고리즘은 그 저장된 데이터를 처리하는 과정이다.)

1) 단순 구조(Primitive Data Structure)
프로그래밍에서 사용되는 기본 데이터 타입
JS의 원시타입에는 string, number, boolean, null, undefined 가 있다.

2) 비단순 구조(Non-Primitive Data Structure)
여러 데이터를 목적에 맞게 효과적으로 저장하는 자료 구조
JS의 참조타입에는 object, array, function 이 있다.

3) 선형 구조(Linear Data Structure)
저장된 자료의 전후 관계가 1:1인 경우

4) 비선형 구조(Non-Linear Data Structure)
데이터 항목 사이의 관계가 1:n인 경우

자바스크립트의 자료구조

배열(Array)
배열은 대부분의 프로그래밍 언어에서, 가장 간단하고 가장 많이 쓰이는 자료구조형이다.
자료들이 메모리 주소(선반)에 순서대로 차곡차곡 정렬되어 있기 때문에
특정 데이터를 순차적으로 iterate해야 하는 경우 배열은 최상의 자료구조형이다.
(참고로 알고리즘 문제 또는 면접에서 string은 배열로 간주해서 풀어도 무방하다.)

스택(Stack) / 큐(Queue)

스택과 큐 모두 Linear한 자료구조형이다. 이 둘은 아주 유사한 자료구조이지만, element가 제거되는 방식에 차이가 있다.
스택과 큐는 자바스크립트에 내장되어 있지 않으므로, 사용을 원하면 스스로 구조를 만들어야 한다.

1) 스택(Stack)
스택은 흔히 아는 자바스크립트 엔진에서의 콜 스택이 제거되는 방식과 동일하다.
마지막으로 삽입된 element가 가장 먼저 제거되는 방식을 취한다. 
LIFO(Last In, First Out)인 것이다. 
따라서 스택은 브라우저 히스토리(이전 페이지, 다음 페이지) 또는 ctrl+z로 이전 작업을 취소하는 등의 동작에 쓰이는 자료구조이다.

구조를 만들 때 : array와 linked list 모두 크게 상관은 없다.
1) array의 장점 : 각 element들이 서로 연관되어 있기 때문에 속도가 더 빠르다.
하지만 메모리 공간이 한정되어 있기 때문에 할당된 메모리를 다 사용하면 현재 배열을 다른 곳에 복사하기 때문에 
메모리를 조금 더 사용하게 될 수도 있다.
2) Linked List의 장점 : 메모리 여기저기에 흩어져있기 때문에 상대적으로 느릴 수 있다. 
하지만 반면 메모리 공간이 한정되어 있지 않고 얼마든지 계속 값을 추가할 수 있다는 장점이 있다.

2) 큐(Queue)
큐는 맛집에 들어가려고 기다리는 대기줄이라고 생각하면 쉽다.
먼저 도착한 사람이 먼저 입장하는 FIFO(First In, First Out) 개념이다.
따라서 레스토랑 앱, 예매 앱, 우버 앱 등에서 큐를 주요한 자료구조로 사용할 것이다.

구조를 만들 때 : array로 만들면 좋지 않다.
Array의 경우 앞에서부터 element를 제거해야 하는데
그 경우 index를 다시 재조정해야 하기 때문에 O(n)이 된다.
따라서 Queue는 반드시 Linked List로 만든다.

장점 : Fast Operation(removing, pushing), Fast Peek, Ordered
단점 : Slow Lookup

해시 테이블(Hash Table)
Hash Table은 Key와 Value가 쌍을 이룬 형태로 데이터가 저장되어 있는 자료구조형을 지칭한다.

객체는 Hash Table이라는 자료구조의 종류 중 하나이다.

배열 내 데이터도 Key와 Value로 이루어져 있기는 하나
배열에서는 Key가 오직 index, 즉 숫자만 가능한 것에 비해
Hash Table에서는 문자열 또한 Key가 될 수 있다.

장점
Fast Search : 배열은 전체를 순회하며 값을 찾아야 하는 반면, 해쉬 테이블은 key를 통해 바로 찾고자 하는 값에 접근이 가능하다.
Fast Insertion and Deletion : 해쉬 테이블은 데이터가 정렬되어 있지 않기 때문에, 바로 값을 추가하고 지울 수 있다.
Fast lookup : 배열과 객체 모두 index 또는 key를 알고 있으면 되므로 lookup도 빠르다.
- 단점 : 무작위 주소 할당으로 인한 문제.

연결 리스트(Linked List)

Linked List는 1) value와 2) pointer가 한 쌍인 노드가 모여있는 자료구조형을 의미한다.
위 사진에서 푸른색 부분은 data를 저장하고 있고, 초록색 부분은 다음 노드를 가리키는 pointer 역할을 하는 address 부분이다.
Linked List에서 가장 앞 쪽 시작부분(위 사진에서는 10을 가지고 있는 노드)을 Head,
가장 마지막 부분(40을 가지고 있는 노드)을 Tail이라고 부른다.
Tail의 pointer는 더 이상 가리킬 노드가 존재하지 않으므로 Null을 가리키게 된다.
장점 : Fast Insertion, Fast Deletion, Ordered, Flexible Size
단점 : Slow lookup, More Memory

트리(Tree)

트리는 우리가 아는 나무를 거꾸로 뒤집어 놓은 형태를 생각하면 쉽다.
가장 위는 뿌리인 Root, 그리고 아래로 가지를 치면서 뻗어 내려온다.

그래프(Graph)

각 노드들이 서로 연결되어 있는 자료 구조형으로, 아주 커다란 자료 구조형의 범위 중 하나이다.
실제로 그래프 자료 구조 안에 Trees 자료구조가 포함되어 있고, Trees 안에는 Linked List가 포함되어 있다.
즉, 그래프는 이들을 모두 포괄하고 있는 자료 구조형인 것이다.
 */