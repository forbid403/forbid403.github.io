var store = [{
        "title": "1227 TIL",
        "excerpt":"Created By: forbid403 Last Edited: Dec 27, 2019 11:38 PM MVP 패턴 (Model-View-Presenter) → View와 Model이 독립적임 Model ← Notify - Presenter ← getter, setter 제공 - View → View는 일종의 VO → interaction은 Presenter가 담당. Model 비즈니스 로직과 어플리케이션 데이터 (인증, 가계 정보) View 이벤트를 프리젠터에 전달 (로그인 버튼을...","categories": ["til"],
        "tags": [],
        "url": "/til/1227-TIL/",
        "teaser": null
      },{
        "title": "1228 TIL",
        "excerpt":"Created By: forbid403 Last Edited: Dec 29, 2019 12:27 AM try-catch-finally throw (발생시키다) 예외를 알린다 if (x &lt; 0) { throw new Error('x는 음수가 아니어야 합니다.') } catch (잡아내다) 예외를 처리한다 finally 항상 실행이 보장되어야 함 try 블록이 일부라도 실행 되면 finally 블록의 실행은 보장 도커란? 여러 서버를 사용 하면...","categories": ["til"],
        "tags": [],
        "url": "/til/1228-TIL/",
        "teaser": null
      },{
        "title": "1229 TIL",
        "excerpt":"Created By: forbid403 Last Edited: Dec 29, 2019 2:50 PM Docker + Node.js 이미지 생성 Dockerfile 사용 이미지 빌드 docker build –tag 태그명:버젼명 Dockerfile경로 ex) docker build –tag node_server:0.0.1 . Dockerfile이 같은 디렉토리라면 . docker images로 이미지들 확인 가능 컨테이너 생성 docker create –name 서버이름 -p 외부포트:내부포트 이미지명:버전명 ex) docker...","categories": ["til"],
        "tags": [],
        "url": "/til/1229-TIL/",
        "teaser": null
      },{
        "title": "1230 TIL",
        "excerpt":"1230 TIL Created By: 성희 배 Last Edited: Dec 30, 2019 10:50 PM ES6 : Arrow Function function 사용 안함 (인자) ⇒ short-hand syntax arrow function은 자신의 this, arguments, super, new.target을 바인딩 하지 않는다. const event = { name : 'Birthday Party', guestList :['Andrew', 'Sonia', 'Mike'], printGuestList(){ console.log('Guest list for...","categories": ["til"],
        "tags": [],
        "url": "/til/1230-TIL/",
        "teaser": null
      },{
        "title": "1231 TIL",
        "excerpt":"1231 TIL   Created By: 성희 배 Last Edited: Dec 31, 2019 12:53 PM   Disjoint Set (서로소 집합, 상호 배타 집합)      union(x, y) → x, y 같은 집합 만들기   find(x) → x와 y가 같은 집합에 속하면 같은 값   make_set(x) → 새로운 집합 만들기  ","categories": ["til"],
        "tags": [],
        "url": "/til/1231-TIL/",
        "teaser": null
      },{
        "title": "0102 TIL",
        "excerpt":"0102 TIL Created By: 성희 배 Last Edited: Jan 03, 2020 1:49 AM Tags: til Server → API (interface) : 상호 작용을 하는 프로그램 Protocol → HTTP 서버/클라이언트간 통신 약속 → 이런 문법대로 써야 알아먹는다. request/response client가 얘기하면 서버가 응답 → 서버는 응답밖에 못함 method : get/post → web socket...","categories": ["til"],
        "tags": [],
        "url": "/til/0102-TIL/",
        "teaser": null
      },{
        "title": "[React] Scrollbar 없애기",
        "excerpt":"React Scrollbar 없애기    RawBlock: { //원하는 class      \t//스크롤바 없애기     '&amp;::-webkit-scrollbar' : { \t\tdisplay : 'none'     }      }  ","categories": ["react"],
        "tags": [],
        "url": "/react/React-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%B0%94-%EC%97%86%EC%95%A0%EA%B8%B0/",
        "teaser": null
      },{
        "title": "0103 TIL",
        "excerpt":"0103 TIL Created By: 성희 배 Last Edited: Jan 04, 2020 2:30 AM Tags: til Express.js node.js 상에서 동작하는 웹 프레임 워크 가볍고 유연하게 웹 프레임워크를 구성할 수 있음 → Middleware 구조 때문임 body-parser : POST 요청의 바디 데이터에 접근하기 위함 Socket 통신 TCP/IP를 이용하는 창구 역할 응용 프로그램과 소켓...","categories": ["til"],
        "tags": [],
        "url": "/til/0103-TIL/",
        "teaser": null
      },{
        "title": "[leetcode] Combination Sum",
        "excerpt":"Combination Sum Algorithm: 재귀 Created: Jan 04, 2020 10:25 AM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/combination-sum/ Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target. The same repeated number may be chosen from candidates unlimited number of times. Note: All numbers...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Combination-Sum/",
        "teaser": null
      },{
        "title": "0104 TIL",
        "excerpt":"0104 TIL Created By: 성희 배 Last Edited: Jan 04, 2020 2:52 PM Routing 애플리케이션 엔드 포인트 (URI) 의 정의 URI가 클라이언트 요청에 응답하는 방식의 정의 라우터 HTTP 메소드 중 하나로부터 파생 → get, post, head, delete… app.route() 라우트 경로에 대하여 체인 가능한 라우트 핸들러 작성 가능 GET vs POST...","categories": ["til"],
        "tags": [],
        "url": "/til/0104-TIL/",
        "teaser": null
      },{
        "title": "0109 TIL",
        "excerpt":"Created By: 성희 배 Last Edited: Jan 09, 2020 4:31 PM Tags: design, til CTA (CALL TO ACTION) 사용자의 반응을 유도하는 반응 및 행위 Trigger word(수단) → CTA(목적) 액션(Action)=모션(Motion) Label이 방향성을 가져야 함 동사 사용 다음 단계 설명 버튼의 라벨을 정할 때 다음 화면의 타이틀과 일치 미스터리를 만들지 말라 버튼의...","categories": ["til"],
        "tags": [],
        "url": "/til/0109-TIL/",
        "teaser": null
      },{
        "title": "[leetcode] Populating Next Right Pointers in Each Node II",
        "excerpt":"Populating Next Right Pointers in Each Node II Algorithm: 트리 level: 2 link: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/ Given a binary tree struct Node { int val; Node *left; Node *right; Node *next; } Populate each next pointer to point to its next right node. If there is no next right node, the next...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Populating-Next-Right-Pointers-in-Each-Node-II/",
        "teaser": null
      },{
        "title": "[os] ch.1",
        "excerpt":"Chapter 1. Introduction Created By: 성희 배 Last Edited: Jan 26, 2020 12:12 AM Tags: OS OS Manages the computer hardware Provides a basis for application programs Intermediary between the computer and hardware What OS do? hardware, os, application programs, users Hardware : cpu, memory, i/o device Application Programs :...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch.1/",
        "teaser": null
      },{
        "title": "[React] React 특정 Table Row highlighting",
        "excerpt":"React 특정 Table Row highlighting Created By: 성희 배 Last Edited: Jan 27, 2020 6:30 PM Tags: dev 전체 뷰 Youtube 동영상 밑에 있는 Table의 Row를 클릭 시에 Highlighting 하는 기능을 설명한다. 다른 Row 클릭 시 클릭된 Row만 highlighting 된다. Table 선언 Translate.js import RawItem from '../components/RawItem' &lt;Table&gt; &lt;TableBody&gt; &lt;TableRow&gt;...","categories": ["react"],
        "tags": [],
        "url": "/react/React-React-%ED%8A%B9%EC%A0%95-Table-Row-highlighting/",
        "teaser": null
      },{
        "title": "[백준][1759] 암호 만들기",
        "excerpt":"[1759] 암호 만들기 Algorithm: 문자열, 백트래킹 Created: Jan 28, 2020 5:29 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/1759 문제 바로 어제 최백준 조교가 방 열쇠를 주머니에 넣은 채 깜빡하고 서울로 가 버리는 황당한 상황에 직면한 조교들은, 702호에 새로운 보안 시스템을 설치하기로 하였다. 이 보안 시스템은 열쇠가 아닌 암호로 동작하게 되어...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1759-%EC%95%94%ED%98%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[백준][2580] 스도쿠",
        "excerpt":"[2580] 스도쿠 Algorithm: 백트래킹 Created: Jan 28, 2020 5:42 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/2580 문제 스도쿠는 18세기 스위스 수학자가 만든 ‘라틴 사각형’이랑 퍼즐에서 유래한 것으로 현재 많은 인기를 누리고 있다. 이 게임은 아래 그림과 같이 가로, 세로 각각 9개씩 총 81개의 작은 칸으로 이루어진 정사각형 판 위에서 이뤄지는데,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2580-%EC%8A%A4%EB%8F%84%EC%BF%A0/",
        "teaser": null
      },{
        "title": "[백준][9095] 1, 2, 3 더하기",
        "excerpt":"[9095] 1, 2, 3 더하기 Algorithm: 백트래킹 Created: Jan 27, 2020 6:35 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/9095 문제 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다. 1+1+1+1 1+1+2 1+2+1 2+1+1 2+2 1+3 3+1 정수 n이 주어졌을 때,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-9095-1,2,3-%EB%8D%94%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[백준][9663] N-Queen",
        "excerpt":"[9663] N-Queen Algorithm: 백트래킹 Created: Jan 28, 2020 5:29 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/9663 문제 N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다. N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오. 입력 첫째 줄에 N이 주어진다. (1 ≤ N &lt; 15)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-9663-N-Queen/",
        "teaser": null
      },{
        "title": "[leetcode] Valid Parentheses",
        "excerpt":"Valid Parentheses 문제링크 First Solution class Solution { public: stack &lt;char&gt; st; bool isValid(string s) { for(int i=0; i&lt;s.length(); i++){ char c = s[i]; if(c == ')'){ if(!st.empty() &amp;&amp;st.top() == '(') { st.pop(); continue; }else return false; }else if(c == '}'){ if(!st.empty() &amp;&amp;st.top() == '{'){ st.pop(); continue; }else return false;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Valid-Parentheses/",
        "teaser": null
      },{
        "title": "몰입캠프 후기",
        "excerpt":"몰입캠프 회고록 Created By: 성희 배 Last Edited: Jan 30, 2020 3:13 AM 한 달간의 몰입 캠프가 끝났다. 비트 고급반을 할 때는 거의 매일 밤을 샜다. 이른 새벽 4시까지 코딩을 하고, 컴퓨터를 끈 후 강의실에 둔 침낭에 누워 팀원들과 도란도란 얘기를 나누며 잠에 들었다. 아침에 일어나 기숙사에서 씻고만 나와 다시...","categories": ["til"],
        "tags": [],
        "url": "/til/%EB%AA%B0%EC%9E%85%EC%BA%A0%ED%94%84-%ED%9B%84%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[os] ch2",
        "excerpt":"Chapter 2. System Structure Created By: 성희 배 Last Edited: Jan 30, 2020 11:36 PM Tags: OS 운영체제 서비스 사용자 인터페이스 CLI, GUI, batch interface 프로그램 수행 입출력 연산 파일 시스템 조작 통신 프로세스 간 통신 (공유 메모리, 메시지 전달) 오류 탐지 자원 할당 회계 보호, 보안 시스템 호출 (System...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch2/",
        "teaser": null
      },{
        "title": "[os] ch.3 프로세스",
        "excerpt":"프로세스 프로세스 job이라고도 부른다. 실행 중인 프로그램 시분할 시스템에서의 작업의 단위 프로그램 명령어 리스트를 내용으로 가진 수동적인 (passive) 존재 cf) 프로세스는 다음에 실행할 명령어를 지정하는 Program Counter, 관련 자원의 집합을 가진 능동적인 (active) 존재이다. 프로세스는 독립적이다. 텍스트 세션은 같을지라도 data, heap, stack은 다를 수 있다. ex) chrome 탭은 프로세스인가 스레드인가?...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch.3-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4/",
        "teaser": null
      },{
        "title": "[leetcode] 3 Sum",
        "excerpt":"3Sum Algorithm: 투포인터 Created: Nov 24, 2019 7:53 PM DoubleChk: Yes Type: LeetCode level: 2 link: https://leetcode.com/problems/3sum/ Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. Note: The solution set must not contain duplicate triplets. Example: Given array...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-3-Sum/",
        "teaser": null
      },{
        "title": "[leetcode] Remove Nth Node From End of List",
        "excerpt":"Remove Nth Node From End of List Algorithm: 리스트 Created: Nov 25, 2019 3:23 PM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/ Given a linked list, remove the n-th node from the end of list and return its head. Example: Given linked list: 1-&gt;2-&gt;3-&gt;4-&gt;5, and n = 2. After removing...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Remove-Nth-Node-From-End-of-List/",
        "teaser": null
      },{
        "title": "[1697] 숨바꼭질",
        "excerpt":"[1697] 숨바꼭질 Algorithm: bfs Created: Feb 02, 2020 11:04 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/1697 문제 수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다. 수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1697-%EC%88%A8%EB%B0%94%EA%BC%AD%EC%A7%88/",
        "teaser": null
      },{
        "title": "[2178] 미로 탐색",
        "excerpt":"[2178] 미로 탐색 Algorithm: bfs Created: Feb 02, 2020 11:08 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/submit/2178/17257041 문제 N×M크기의 배열로 표현되는 미로가 있다. Untitled 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2178-%EB%AF%B8%EB%A1%9C-%ED%83%90%EC%83%89/",
        "teaser": null
      },{
        "title": "[2573] 빙산",
        "excerpt":"[2573] 빙산 Algorithm: bfs Created: Feb 02, 2020 11:10 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/2573 문제 지구 온난화로 인하여 북극의 빙산이 녹고 있다. 빙산을 그림 1과 같이 2차원 배열에 표시한다고 하자. 빙산의 각 부분별 높이 정보는 배열의 각 칸에 양의 정수로 저장된다. 빙산 이외의 바다에 해당되는 칸에는 0이 저장된다....","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2573-%EB%B9%99%EC%82%B0/",
        "teaser": null
      },{
        "title": "[3187] 양치기 꿍",
        "excerpt":"[3187] 양치기 꿍 Algorithm: bfs Created: Feb 02, 2020 11:13 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/3187 문제 양치기 꿍은 맨날 늑대가 나타났다고 마을 사람들을 속였지만 이젠 더이상 마을 사람들이 속지 않는다. 화가 난 꿍은 복수심에 불타 아예 늑대들을 양들이 있는 울타리안에 마구 집어넣어 양들을 잡아먹게 했다. 하지만 양들은 보통...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3187-%EC%96%91%EC%B9%98%EA%B8%B0-%EA%BF%8D/",
        "teaser": null
      },{
        "title": "[leetcode] Unique Paths",
        "excerpt":"Unique Paths Algorithm: DP Created: Jan 28, 2020 6:16 PM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/unique-paths/ A robot is located at the top-left corner of a m x n grid (marked ‘Start’ in the diagram below). The robot can only move either down or right at any point in time. The robot...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Unique-Paths/",
        "teaser": null
      },{
        "title": "[leetcode] Sort Characters By Frequency",
        "excerpt":"Sort Characters By Frequency Algorithm: 해쉬 DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/sort-characters-by-frequency/ Given a string, sort it in decreasing order based on the frequency of characters. Example 1: Input: \"tree\" Output: \"eert\" Explanation: 'e' appears twice while 'r' and 't' both appear once. So 'e' must appear before...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Sort-Characters-By-Frequency/",
        "teaser": null
      },{
        "title": "[leetcode] Top K Frequent Words",
        "excerpt":"Top K Frequent Words Algorithm: 정렬, 해쉬 Created: Feb 08, 2020 11:25 PM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/top-k-frequent-words/ Given a non-empty list of words, return the k most frequent elements. Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Top-K-Frequent-Words/",
        "teaser": null
      },{
        "title": "[leetcode] Longest Palindrome",
        "excerpt":"409. Longest Palindrome Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters. This is case sensitive, for example “Aa” is not considered a palindrome here. Note: Assume the length of given string will not exceed...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Longest-Palindrome/",
        "teaser": null
      },{
        "title": "[leetcode] Map Sum Pairs",
        "excerpt":"Implement a MapSum class with insert, and sum methods. For the method insert, you’ll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one. For...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Map-Sum-Pairs/",
        "teaser": null
      },{
        "title": "[leetcode] Validate Binary Tree Nodes",
        "excerpt":"Validate Binary Tree Nodes Algorithm: bfs Created: Feb 23, 2020 1:59 PM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/validate-binary-tree-nodes/ You have n binary tree nodes numbered from 0 to n - 1 where node i has two children leftChild[i] and rightChild[i], return true if and only if all the given nodes form exactly one valid binary tree. If node i has no left child then leftChild[i] will equal -1, similarly for the...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Validate-Binary-Tree-Nodes/",
        "teaser": null
      },{
        "title": "[백준 1890] 점프",
        "excerpt":"점프 Algorithm: DP Created: Feb 24, 2020 11:43 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/1890 문제 N×N 게임판에 수가 적혀져 있다. 이 게임의 목표는 가장 왼쪽 위 칸에서 가장 오른쪽 아래 칸으로 규칙에 맞게 점프를 해서 가는 것이다. 각 칸에 적혀있는 수는 현재 칸에서 갈 수 있는 거리를 의미한다. 반드시...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1890-%EC%A0%90%ED%94%84/",
        "teaser": null
      },{
        "title": "[leetcode] Closest Divisors",
        "excerpt":"Closest Divisors Algorithm: 수학 Created: Feb 27, 2020 11:35 PM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/closest-divisors/ Given an integer num, find the closest two integers in absolute difference whose product equals num + 1 or num + 2. Return the two integers in any order. Example 1: Input: num = 8 Output:...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Closest-Divisors/",
        "teaser": null
      },{
        "title": "[leetcode] Minimum Cost to Make at Least One Valid Path in a Grid",
        "excerpt":"Minimum Cost to Make at Least One Valid Path in a Grid Algorithm: bfs Created: Mar 04, 2020 4:35 PM DoubleChk: No Type: LeetCode level: 3 link: https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/ Given a mxn grid. Each cell of the grid has a sign pointing to the next cell you should visit if you...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Minimum-Cost-to-Make-at-Least-One-Valid-Path-in-a-Grid/",
        "teaser": null
      },{
        "title": "[leetcode] Rank Teams by Votes",
        "excerpt":"Rank Teams by Votes Algorithm: 배열, 정렬 Created: Mar 04, 2020 3:09 PM DoubleChk: No Type: LeetCode level: 2 link: https://leetcode.com/problems/rank-teams-by-votes/ In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition. The ordering of teams is decided by who received...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Rank-Teams-by-Votes/",
        "teaser": null
      },{
        "title": "[TIL] Promise, Async/await",
        "excerpt":"0312 TIL Created By: 성희 배 Last Edited: Mar 12, 2020 11:29 PM 데이터를 받아올 때, 두 개를 한번에 받아오다 보니 동기화가 안돼서 한개만 받아와지는 경우가 있었다. 기존 코드 Restriction.countDocuments({state : 0}, (err, cnt)=&gt;{ ret.prohibitions = cnt }).then(Restriction.countDocuments({state : 1}, (err, cnt)=&gt;{ ret.restrictions = cnt })).then(()=&gt; res.send(ret)) .then()으로 감싸다 보니...","categories": ["til"],
        "tags": [],
        "url": "/til/til-0312TIL/",
        "teaser": null
      },{
        "title": "[TIL] window.location, document.location 차이점, 유동 포워딩, 고정 포워딩",
        "excerpt":"Created By: 성희 배 Last Edited: Mar 23, 2020 1:00 AM window.location과 document.location의 차이 window.location 현재 위치를 object 값으로 가져옴 document.location 현재 URL 값을 string으로 변환해서 가져옴 ⇒ 웹사이트 호환성 때문에 document.location보다는 window.location을 추천한다. ⇒ document.location은 document.URL로 직관적이게 바뀌었다. 유동 포워딩, 고정 포워딩 유동 포워딩 접속 하는 URL로 주소창에 표기...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-window.location,-document.location-%EC%B0%A8%EC%9D%B4%EC%A0%90,-%EC%9C%A0%EB%8F%99-%ED%8F%AC%EC%9B%8C%EB%94%A9,-%EA%B3%A0%EC%A0%95-%ED%8F%AC%EC%9B%8C%EB%94%A9/",
        "teaser": null
      },{
        "title": "[백준 13460] 구슬 탈출 2",
        "excerpt":"Algorithm: bfs Created: Mar 23, 2020 4:39 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/13460 문제 스타트링크에서 판매하는 어린이용 장난감 중에서 가장 인기가 많은 제품은 구슬 탈출이다. 구슬 탈출은 직사각형 보드에 빨간 구슬과 파란 구슬을 하나씩 넣은 다음, 빨간 구슬을 구멍을 통해 빼내는 게임이다. 보드의 세로 크기는 N, 가로 크기는 M이고,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-13460-%EA%B5%AC%EC%8A%AC-%ED%83%88%EC%B6%9C-2/",
        "teaser": null
      },{
        "title": "[백준 16234] 인구 이동",
        "excerpt":"[16234] 인구 이동 Algorithm: bfs Created: Mar 28, 2020 9:12 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/16234 문제 N×N크기의 땅이 있고, 땅은 1×1개의 칸으로 나누어져 있다. 각각의 땅에는 나라가 하나씩 존재하며, r행 c열에 있는 나라에는 A[r][c]명이 살고 있다. 인접한 나라 사이에는 국경선이 존재한다. 모든 나라는 1×1 크기이기 때문에, 모든 국경선은...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-16234-%EC%9D%B8%EA%B5%AC-%EC%9D%B4%EB%8F%99/",
        "teaser": null
      },{
        "title": "[백준 3190] 뱀",
        "excerpt":"[3190] 뱀 Algorithm: 시뮬레이션 Created: Mar 29, 2020 8:19 PM DoubleChk: Yes Type: 백준 link: https://www.acmicpc.net/problem/3190 문제 ‘Dummy’ 라는 도스게임이 있다. 이 게임에는 뱀이 나와서 기어다니는데, 사과를 먹으면 뱀 길이가 늘어난다. 뱀이 이리저리 기어다니다가 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다. 게임은 NxN 정사각 보드위에서 진행되고, 몇몇 칸에는 사과가 놓여져 있다. 보드의...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3190-%EB%B1%80/",
        "teaser": null
      },{
        "title": "[백준 12100] 2048 (Easy)",
        "excerpt":"[12100] 2048 (Easy) Algorithm: dfs Type: 백준 link: https://www.acmicpc.net/problem/12100 문제 2048 게임은 4×4 크기의 보드에서 혼자 즐기는 재미있는 게임이다. 이 링크를 누르면 게임을 해볼 수 있다. 이 게임에서 한 번의 이동은 보드 위에 있는 전체 블록을 상하좌우 네 방향 중 하나로 이동시키는 것이다. 이때, 같은 값을 갖는 두 블록이 충돌하면 두...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-12100-2048-(Easy)/",
        "teaser": null
      },{
        "title": "[백준 14499] 주사위 굴리기",
        "excerpt":"[14499] 주사위 굴리기 Algorithm: 시뮬레이션 Created: Apr 03, 2020 3:41 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/14499 문제 크기가 N×M인 지도가 존재한다. 지도의 오른쪽은 동쪽, 위쪽은 북쪽이다. 이 지도의 위에 주사위가 하나 놓여져 있으며, 주사위의 전개도는 아래와 같다. 지도의 좌표는 (r, c)로 나타내며, r는 북쪽으로부터 떨어진 칸의 개수, c는 서쪽으로부터...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-14499-%EC%A3%BC%EC%82%AC%EC%9C%84-%EA%B5%B4%EB%A6%AC%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[TIL] 네이버 D2 PWA 세미나 요약",
        "excerpt":"네이버 D2 PWA 세미나 요약 PWA Progressive Web App Reliable 빠른 로딩 오프라인 작동 불안정한 네트워크에서도 작동 Fast 빠른 반응 어떤 input, Event에도 반응 재방문시에도 빠른 반응 Engaging 홈 화면에 추가 가능 full screen ui 유지 push 알림 OFFLINE 서비스워커 사용 PWA의 기본적인 조건은? https상에서 작동 태블릿, 모바일 상에서 반응형으로...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-%EB%84%A4%EC%9D%B4%EB%B2%84-D2-PWA-%EC%84%B8%EB%AF%B8%EB%82%98-%EC%9A%94%EC%95%BD/",
        "teaser": null
      },{
        "title": "[백준 14503] 로봇 청소기",
        "excerpt":"[14503] 로봇 청소기 Algorithm: 시뮬레이션 Created: Apr 04, 2020 4:52 AM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/14503 문제 로봇 청소기가 주어졌을 때, 청소하는 영역의 개수를 구하는 프로그램을 작성하시오. 로봇 청소기가 있는 장소는 N×M 크기의 직사각형으로 나타낼 수 있으며, 1×1크기의 정사각형 칸으로 나누어져 있다. 각각의 칸은 벽 또는 빈 칸이다. 청소기는...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-14503-%EB%A1%9C%EB%B4%87-%EC%B2%AD%EC%86%8C%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[백준 14889] 스타트와 링크",
        "excerpt":"[14889] 스타트와 링크 Algorithm: 백트래킹 Created: Apr 04, 2020 8:45 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/14889 문제 오늘은 스타트링크에 다니는 사람들이 모여서 축구를 해보려고 한다. 축구는 평일 오후에 하고 의무 참석도 아니다. 축구를 하기 위해 모인 사람은 총 N명이고 신기하게도 N은 짝수이다. 이제 N/2명으로 이루어진 스타트 팀과 링크 팀으로 사람들을 나눠야...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-14889-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%99%80-%EB%A7%81%ED%81%AC/",
        "teaser": null
      },{
        "title": "[프로그래머스] 도둑질",
        "excerpt":"도둑질 Algorithm: DP Created: Apr 06, 2020 7:47 PM DoubleChk: No Type: 프로그래머스 level: 4 link: https://programmers.co.kr/learn/courses/30/lessons/42897 문제 설명 도둑이 어느 마을을 털 계획을 하고 있습니다. 이 마을의 모든 집들은 아래 그림과 같이 동그랗게 배치되어 있습니다. 각 집들은 서로 인접한 집들과 방범장치가 연결되어 있기 때문에 인접한 두 집을 털면 경보가...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8F%84%EB%91%91%EC%A7%88/",
        "teaser": null
      },{
        "title": "[프로그래머스] 기능개발",
        "excerpt":"기능개발 Created: Apr 07, 2020 10:49 PM DoubleChk: No Type: 프로그래머스 link: https://programmers.co.kr/learn/courses/30/lessons/42586 문제 설명 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다. 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C/",
        "teaser": null
      },{
        "title": "[백준 16236] 아기 상어",
        "excerpt":"[ 백준 16236 ] 아기 상어 Algorithm: bfs Created: Apr 08, 2020 8:41 PM DoubleChk: Yes Type: 백준 link: https://www.acmicpc.net/problem/16236 문제 N×N 크기의 공간에 물고기 M마리와 아기 상어 1마리가 있다. 공간은 1×1 크기의 정사각형 칸으로 나누어져 있다. 한 칸에는 물고기가 최대 1마리 존재한다. 아기 상어와 물고기는 모두 크기를 가지고 있고,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-16236-%EC%95%84%EA%B8%B0-%EC%83%81%EC%96%B4/",
        "teaser": null
      },{
        "title": "[프로그래머스] 단어 변환",
        "excerpt":"단어 변환 Algorithm: dfs Created: Apr 08, 2020 1:21 AM DoubleChk: No Type: 프로그래머스 link: https://programmers.co.kr/learn/courses/30/lessons/43163 문제 설명 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다. `1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다. words에...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98/",
        "teaser": null
      },{
        "title": "[프로그래머스] 큰 수 만들기",
        "excerpt":"큰 수 만들기 Algorithm: 그리디 Created: Apr 10, 2020 7:04 PM DoubleChk: No Type: 프로그래머스 link: https://programmers.co.kr/learn/courses/30/lessons/42883 문제 설명 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다. 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%81%B0-%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[프로그래머스] 구명보트",
        "excerpt":"구명보트 Algorithm: 그리디 Created: Apr 12, 2020 6:59 PM DoubleChk: No Type: 프로그래머스 level: 2 link: https://programmers.co.kr/learn/courses/30/lessons/42885# 문제 설명 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다. 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8/",
        "teaser": null
      },{
        "title": "[프로그래머스] 저울",
        "excerpt":"저울 Algorithm: 그리디 Created: Apr 13, 2020 5:18 PM DoubleChk: No Type: 프로그래머스 level: 3 link: https://programmers.co.kr/learn/courses/30/lessons/42886 문제 설명 하나의 양팔 저울을 이용하여 물건의 무게를 측정하려고 합니다. 이 저울의 양팔의 끝에는 물건이나 추를 올려놓는 접시가 달려 있고, 양팔의 길이는 같습니다. 또한, 저울의 한쪽에는 저울추들만 놓을 수 있고, 다른 쪽에는 무게를...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%80%EC%9A%B8/",
        "teaser": null
      },{
        "title": "[프로그래머스] 더 맵게",
        "excerpt":"더 맵게 Algorithm: 힙 Created: Apr 15, 2020 1:10 AM DoubleChk: No Type: 프로그래머스 level: 2 link: https://programmers.co.kr/learn/courses/30/lessons/42626 문제 설명 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8D%94-%EB%A7%B5%EA%B2%8C/",
        "teaser": null
      },{
        "title": "[프로그래머스] 라면공장",
        "excerpt":"라면공장 Created: Apr 16, 2020 1:12 AM DoubleChk: No 문제 설명 라면 공장에서는 하루에 밀가루를 1톤씩 사용합니다. 원래 밀가루를 공급받던 공장의 고장으로 앞으로 k일 이후에야 밀가루를 공급받을 수 있기 때문에 해외 공장에서 밀가루를 수입해야 합니다. 해외 공장에서는 향후 밀가루를 공급할 수 있는 날짜와 수량을 알려주었고, 라면 공장에서는 운송비를 줄이기 위해...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%9D%BC%EB%A9%B4%EA%B3%B5%EC%9E%A5/",
        "teaser": null
      },{
        "title": "[프로그래머스] 이중우선순위큐",
        "excerpt":"이중우선순위큐 Algorithm: 힙 Created: Apr 16, 2020 1:06 AM DoubleChk: No Type: 프로그래머스 level: 3 link: https://programmers.co.kr/learn/courses/30/lessons/42628 문제 설명 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다. Untitled 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9D%B4%EC%A4%91%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84%ED%81%90/",
        "teaser": null
      },{
        "title": "[백준 17837] 새로운 게임 2",
        "excerpt":"새로운 게임 2 Algorithm: 시뮬레이션 Created: Apr 18, 2020 7:47 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/17837 문제 재현이는 주변을 살펴보던 중 체스판과 말을 이용해서 새로운 게임을 만들기로 했다. 새로운 게임은 크기가 N×N인 체스판에서 진행되고, 사용하는 말의 개수는 K개이다. 말은 원판모양이고, 하나의 말 위에 다른 말을 올릴 수 있다. 체스판의 각...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-17837-%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B2%8C%EC%9E%84-2/",
        "teaser": null
      },{
        "title": "[leetcode] Jump Game",
        "excerpt":"Jump Game Algorithm: 그리디 Created: Apr 18, 2020 9:36 PM DoubleChk: Yes Type: LeetCode level: 2 link: https://leetcode.com/problems/jump-game/ Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Jump-Game/",
        "teaser": null
      },{
        "title": "[프로그래머스] 크레인 인형뽑기 게임",
        "excerpt":"크레인 인형뽑기 게임 Algorithm: 스택 Created: Apr 19, 2020 2:14 PM DoubleChk: No Type: 프로그래머스 link: https://programmers.co.kr/learn/courses/30/lessons/64061 문제 설명 게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다. 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%81%AC%EB%A0%88%EC%9D%B8-%EC%9D%B8%ED%98%95%EB%BD%91%EA%B8%B0-%EA%B2%8C%EC%9E%84/",
        "teaser": null
      },{
        "title": "[백준 17825] 주사위 윷놀이",
        "excerpt":"주사위 윷놀이 Algorithm: dfs, 시뮬레이션 Created: Apr 21, 2020 3:11 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/17825 문제 주사위 윷놀이는 다음과 같은 게임판에서 하는 게임이다. https://upload.acmicpc.net/43409ac6-54bf-4a21-b542-e01a8211e59f/-/preview/ 처음에는 시작 칸에 말 4개가 있다. 말은 게임판에 그려진 화살표의 방향대로만 이동할 수 있다. 말이 파란색 칸에서 이동을 시작하면 파란색 화살표를 타야 하고, 이동하는...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-17825-%EC%A3%BC%EC%82%AC%EC%9C%84-%EC%9C%B7%EB%86%80%EC%9D%B4/",
        "teaser": null
      },{
        "title": "[프로그래머스] 튜플",
        "excerpt":"튜플 Algorithm: 배열 Created: Apr 21, 2020 4:16 PM DoubleChk: No Type: 프로그래머스 link: https://programmers.co.kr/learn/courses/30/lessons/64065 문제 설명 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다. n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다. (a1, a2, a3, …, an) 튜플은 다음과 같은 성질을 가지고...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%8A%9C%ED%94%8C/",
        "teaser": null
      },{
        "title": "[프로그래머스] 불량 사용자",
        "excerpt":"불량 사용자 Algorithm: dfs Created: Apr 22, 2020 2:46 PM DoubleChk: No Type: 프로그래머스 level: 3 link: https://programmers.co.kr/learn/courses/30/lessons/64064 문제 설명 개발팀 내에서 이벤트 개발을 담당하고 있는 무지는 최근 진행된 카카오이모티콘 이벤트에 비정상적인 방법으로 당첨을 시도한 응모자들을 발견하였습니다. 이런 응모자들을 따로 모아 불량 사용자라는 이름으로 목록을 만들어서 당첨 처리 시 제외하도록 이벤트 당첨자...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B6%88%EB%9F%89-%EC%82%AC%EC%9A%A9%EC%9E%90/",
        "teaser": null
      },{
        "title": "[React] useContext 배열 예제",
        "excerpt":"React CreateContext Created By: 성희 배 Last Edited: Apr 23, 2020 7:28 PM 호텔 사이트 클론 프로젝트 진행중에, 호텔을 클릭 시 위쪽 컴포넌트에 클릭한 호텔의 이름을 삽입하는 기능을 구현하고자 했다. 두 개는 독립된 컴포넌트라서 콜백으로 진행하기는 어려울 것 같아, 따로 js파일을 만들어 전역 변수로 배열을 두고 queue 기능을 구현 하였다....","categories": ["react"],
        "tags": [],
        "url": "/react/React-useContext-%EB%B0%B0%EC%97%B4-%EC%98%88%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[TIL] 이벤트 버블링, 이벤트 캡쳐링, 해결 방법",
        "excerpt":"Created By: 성희 배 Last Edited: Apr 24, 2020 6:58 PM Tags: cs 호텔 클로닝 사이드 프로젝트에서 발생한 문제이다. 자식 버튼을 누를 시에 부모의 이벤트가 호출되는 현상이 나타났다. 문제는 이벤트 버블링 때문이었다. 이벤트 버블링 하위 엘리먼트에 이벤트 발생 시 그 엘리먼트부터 상위 요소까지 이벤트가 전달되는 방식 위와 같은 형식이 있을...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81,-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BA%A1%EC%B3%90%EB%A7%81,-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[프로그래머스] 징검다리 건너기",
        "excerpt":"징검다리 건너기 Algorithm: 이분탐색 Created: Apr 27, 2020 7:53 PM DoubleChk: No Type: 프로그래머스 level: 3 link: https://programmers.co.kr/learn/courses/30/lessons/64062 문제 설명 [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.] 카카오 초등학교의 니니즈 친구들이 라이언 선생님과 함께 가을 소풍을 가는 중에 징검다리가 있는 개울을 만나서 건너편으로 건너려고 합니다. 라이언 선생님은 니니즈 친구들이 무사히 징검다리를 건널 수 있도록 다음과...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A7%95%EA%B2%80%EB%8B%A4%EB%A6%AC-%EA%B1%B4%EB%84%88%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[GraphQL] graphql의 개념과 특징",
        "excerpt":"GraphQL과 SQL SQL Structed Query Language 엔드 포인트가 여러 개 ex) /content, /api… GQL 한 개의 엔드포인트 데이터 스키마에 따라 쿼리 변경 GraphQL의 특징 위계적 필드가 중첩 가능 쿼리와 반환 데이터가 같다. 제품 중심적 client가 요구하는 데이터, 지원하는 언어 및 런타임에 맞춰 동작한다. 엄격한 타입 제한 서버에서 타입 유효성을 검사한다....","categories": ["graphql"],
        "tags": [],
        "url": "/graphql/GQL-graphql_01/",
        "teaser": null
      },{
        "title": "[백준 17779] 게리맨더링 2",
        "excerpt":"[백준 17779] 게리맨더링 2 Algorithm: 시뮬레이션 Created: Apr 30, 2020 10:36 PM DoubleChk: No link: https://www.acmicpc.net/problem/17779 문제 재현시의 시장 구재현은 지난 몇 년간 게리맨더링을 통해서 자신의 당에게 유리하게 선거구를 획정했다. 견제할 권력이 없어진 구재현은 권력을 매우 부당하게 행사했고, 심지어는 시의 이름도 재현시로 변경했다. 이번 선거에서는 최대한 공평하게 선거구를 획정하려고 한다. 재현시는...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-17779-%EA%B2%8C%EB%A6%AC%EB%A7%A8%EB%8D%94%EB%A7%81-2/",
        "teaser": null
      },{
        "title": "[프로그래머스] 방금 그곡",
        "excerpt":"[프로그래머스] 방금 그곡 Algorithm: 시뮬레이션 Created: Apr 30, 2020 7:27 PM DoubleChk: No link: https://programmers.co.kr/learn/courses/30/lessons/17683# #include &lt;iostream&gt; #include &lt;vector&gt; #include &lt;string&gt; #include &lt;algorithm&gt; #include &lt;map&gt; #include &lt;sstream&gt; using namespace std; typedef struct { int time; string name; string music; } info; vector&lt;info&gt; infos; int getTime(string start, string end) { vector&lt;int&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B0%A9%EA%B8%88-%EA%B7%B8%EA%B3%A1/",
        "teaser": null
      },{
        "title": "[프로그래머스] 호텔 방 배정",
        "excerpt":"[프로그래머스] 호텔 방 배정 Algorithm: 유니온파인드 Created: Apr 30, 2020 4:31 PM DoubleChk: No link: https://programmers.co.kr/learn/courses/30/lessons/64063 문제 설명 [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.] 스노우타운에서 호텔을 운영하고 있는 스카피는 호텔에 투숙하려는 고객들에게 방을 배정하려 합니다. 호텔에는 방이 총 k개 있으며, 각각의 방은 1번부터 k번까지 번호로 구분하고 있습니다. 처음에는...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%98%B8%ED%85%94-%EB%B0%A9-%EB%B0%B0%EC%A0%95/",
        "teaser": null
      },{
        "title": "[TIL] 자바스크립트 클로저",
        "excerpt":"클로저 함수와 함수가 선언된 어휘적 환경의 조합 function myClosure(){ var name = \"Sonia\"; function displayName(){ alert(name); } return displayName; } var myFunc = myClosure(); //유효범위의 어휘적 환경을 유지 myFunc(); // 리턴된 displayName 함수 실행 클로저는 외부 함수가 끝난 이후에도 자유함수의 인자, 지역 변수 등에 접근 가능하다. =&gt; 자유 변수 (free...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%81%B4%EB%A1%9C%EC%A0%80/",
        "teaser": null
      },{
        "title": "[프로그래머스] 뉴스 클러스터링",
        "excerpt":"#include &lt;string&gt; #include &lt;map&gt; #include &lt;vector&gt; using namespace std; int solution(string str1, string str2) { int answer = 0; string clean_str1 = \"\"; string clean_str2 = \"\"; //둘 다 소문자로 바꾸고 for (char c : str1) clean_str1 += tolower(c); for (char c : str2) clean_str2 += tolower(c); //비교 map&lt;string, int&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%89%B4%EC%8A%A4-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81/",
        "teaser": null
      },{
        "title": "[백준 15686] 치킨 배달",
        "excerpt":"[백준 15686] 치킨 배달 Algorithm: dfs, 시뮬레이션 Created: Apr 30, 2020 10:50 PM DoubleChk: No Type: 백준 link: https://www.acmicpc.net/problem/15686 문제 크기가 N×N인 도시가 있다. 도시는 1×1크기의 칸으로 나누어져 있다. 도시의 각 칸은 빈 칸, 치킨집, 집 중 하나이다. 도시의 칸은 (r, c)와 같은 형태로 나타내고, r행 c열 또는 위에서부터 r번째...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-15686-%EC%B9%98%ED%82%A8-%EB%B0%B0%EB%8B%AC/",
        "teaser": null
      },{
        "title": "[프로그래머스] 오픈채팅방",
        "excerpt":"기존 코드 #include &lt;string&gt; #include &lt;vector&gt; #include &lt;map&gt; #include &lt;sstream&gt; using namespace std; vector&lt;string&gt; solution(vector&lt;string&gt; record) { vector&lt;string&gt; answer; vector&lt;vector &lt;string&gt;&gt;order; for(string cur : record){ istringstream ss(cur); string buffer = \"\"; vector &lt;string&gt; save; while (getline(ss, buffer, ' ')){ save.push_back(buffer); } order.push_back(save); } map &lt;string, string&gt; chat; //uid, 닉네임 for(vector...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%98%A4%ED%94%88%EC%B1%84%ED%8C%85%EB%B0%A9/",
        "teaser": null
      },{
        "title": "[백준 3055] 탈출",
        "excerpt":"[백준 3055] 탈출 문제 링크 #include \"header.h\" using namespace std; int r, c; char board[51][51]; int water_day[51][51]; int days[51][51]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; queue&lt;pair&lt;int, int&gt;&gt; water_q; queue&lt;pair&lt;int, int&gt;&gt; q; pair&lt;int, int&gt; bieber; void input() { cin &gt;&gt; r &gt;&gt; c;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3055-%ED%83%88%EC%B6%9C/",
        "teaser": null
      },{
        "title": "[백준 17144] 미세먼지 안녕!",
        "excerpt":"[백준 17144] 미세먼지 안녕! 문제 링크 #include \"header.h\" using namespace std; //1.5h int r, c, T; int room[51][51]; int temp_room[51][51]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; queue&lt;pair&lt;int, int&gt;&gt; dust; vector&lt;pair&lt;int, int&gt;&gt; robot; void input() { cin &gt;&gt; r &gt;&gt; c &gt;&gt; T;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80-%EC%95%88%EB%85%95!/",
        "teaser": null
      },{
        "title": "[TIL] ECMA Script와 Babel",
        "excerpt":"ES5, ES6 이런 용어들을 많이 봤는데, 실제로 무슨 의미인지 알지 못해서 정리한다. ECMA Script ECMA라는 정보 표준 제정 비영리기구가 있다. Script 언어란 이렇게 돼야 해요, 라는 것을 지정한 것이다. JavaScript ECMA가 지정해놓은 표준에 따른 스크립트 언어이다. JS엔진 Javascript를 이해하고 실행하는 프로그램, 또는 인터프리터 비교 performance (속도) 호환성 (ECMA를 얼마나 지원하는지)...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-ECMA-Script%EC%99%80-Babel/",
        "teaser": null
      },{
        "title": "[TIL] 스로틀과 디바운스",
        "excerpt":"스로틀과 디바운싱 my real hotel 사이드 프로젝트 중 스로틀과 디바운싱에 대해서 공부하게 되었다. 스로틀과 디바운싱은 둘다 Javascript에서 양이 많은 이벤트를 제어하는 방법이다. 스크롤링과 같은 이벤트는 호출이 매우 많다. 한번 휠을 돌리는 것만으로도 20번 이상의 이벤트가 호출 될 수 있다. 이벤트 핸들러 내부의 기능이 중복적으로, 여러번 호출 될 수가 있다. 유료...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-%EC%8A%A4%EB%A1%9C%ED%8B%80%EA%B3%BC-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1/",
        "teaser": null
      },{
        "title": "[백준 16235]나무 재테크",
        "excerpt":"[백준 16235]나무 재테크 문제 링크 #include \"header.h\" using namespace std; int n, m, k, ans; int nutrition[12][12]; int forest[12][12]; typedef struct { int x; //위치 int y; int z; //나이 } Tree; deque&lt;Tree&gt; tree[12][12]; void input() { cin &gt;&gt; n &gt;&gt; m &gt;&gt; k; for (int i = 1; i...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-16235-%EB%82%98%EB%AC%B4-%EC%9E%AC%ED%85%8C%ED%81%AC/",
        "teaser": null
      },{
        "title": "[백준 14891]톱니바퀴",
        "excerpt":"[백준 14891]톱니바퀴 문제 링크 #include \"header.h\" using namespace std; int k; vector &lt;pair&lt;int, int&gt;&gt; order; //톱니바퀴 번호, 방향 int gear[4][8]; int temp_gear[4][8]; void input(){ for(int i=0; i&lt;4; i++){ for(int j=0; j&lt;8; j++){ scanf(\"%1d\", &amp;gear[i][j]); } } cin &gt;&gt; k; for(int i=0; i&lt;k; i++){ int x, y; cin &gt;&gt; x; cin...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-14891-%ED%86%B1%EB%8B%88%EB%B0%94%ED%80%B4/",
        "teaser": null
      },{
        "title": "[프로그래머스] 모의고사",
        "excerpt":"[프로그래머스] 모의고사 문제 링크 #include \"header.h\" using namespace std; vector &lt;vector&lt;int&gt;&gt; supo = {{1, 2, 3, 4, 5}, {2, 1, 2, 3, 2, 4, 2, 5}, {3, 3, 1, 1, 2, 2, 4, 4, 5, 5}}; int sz[3] = {5, 8, 10}; vector&lt;int&gt; solution(vector&lt;int&gt; answers) { vector&lt;int&gt; answer; vector &lt;int&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC/",
        "teaser": null
      },{
        "title": "[TIL] 프로세스와 스레드",
        "excerpt":"프로세스 운영체제로부터 할당 받은 자원을 사용하는 작업의 단위 실행되는 프로그램 자체와 그 주변환경을 뜻함. 사용중인 파일, 데이터, 메모리 주소공간 등 프로세스는 서로 독립적이다. 한 프로세스가 다른 프로세스의 자원에 접근하려면 파이프 통신, 소켓 통신 등을 사용해야 한다. 스레드 프로세스가 할당 받은 자원을 사용하는 실행의 단위 스레드는 프로세스 내에서 stack만 할당 받고,...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4%EC%99%80-%EC%8A%A4%EB%A0%88%EB%93%9C/",
        "teaser": null
      },{
        "title": "[백준 6064]카잉 달력",
        "excerpt":"[백준 6064]카잉 달력 문제 링크 #include \"header.h\" using namespace std; int T; int gcd(int a, int b){ if(a % b == 0) return b; return gcd(b, a % b); } int lcm(int a, int b){ return a * b / gcd(a, b); } int main(){ cin &gt;&gt; T; for(int i=0;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-6064-%EC%B9%B4%EC%9E%89-%EB%8B%AC%EB%A0%A5/",
        "teaser": null
      },{
        "title": "[백준 1107] 리모컨",
        "excerpt":"[백준 1107] 리모컨 문제 링크 #include \"header.h\" using namespace std; int N, M; int broken[10]; int check(int num){ int cnt = 0; //맨 처음, 0이 고장 났다면 0, 고장나지 않았다면 1 if(num == 0) { if(broken[0]){ return 0; }else{ return 1; } } while(num){ int n = num % 10;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1107-%EB%A6%AC%EB%AA%A8%EC%BB%A8/",
        "teaser": null
      },{
        "title": "[프로그래머스] 단속카메라",
        "excerpt":"[프로그래머스] 단속카메라 문제 링크 #include &lt;string&gt; #include &lt;algorithm&gt; #include &lt;vector&gt; using namespace std; int solution(vector&lt;vector&lt;int&gt;&gt; routes) { int answer = 1; sort(routes.begin(), routes.end()); int n = routes.size(); int start = routes[0][0]; int end = routes[0][1]; for(int i=1; i&lt;n; i++){ if(start &lt;= routes[i][0] &amp;&amp; routes[i][0] &lt;= end){ start = max(start, routes[i][0]);...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%86%8D%EC%B9%B4%EB%A9%94%EB%9D%BC/",
        "teaser": null
      },{
        "title": "[프로그래머스] 배달",
        "excerpt":"[프로그래머스] 배달 문제 링크 #include &lt;iostream&gt; #include &lt;vector&gt; #include &lt;queue&gt; #define INF 987654321 using namespace std; vector&lt;pair&lt;int, int&gt;&gt; edge[51]; int result[51]; void dijkstra(int start){ result[start] = 0; //min_heap -&gt; 거리가 가까운 순서대로 정렬됨 priority_queue&lt;pair&lt;int, int&gt;, vector&lt;pair&lt;int, int&gt;&gt;, greater&lt;pair&lt;int, int&gt;&gt;&gt; pq; pq.push(make_pair(0, start)); while(!pq.empty()){ int here = pq.top().second; int cost =...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B0%B0%EB%8B%AC/",
        "teaser": null
      },{
        "title": "[TIL] 스크롤 시 이미지 로딩",
        "excerpt":"[TIL] 스크롤 시 이미지 로딩 Javascript 30에서 자주 쓸 것 같은 기능이 있길래 따로 포스팅 한다. JS 코드 function checkSlide(e) { sliderImages.forEach((img) =&gt; { //window.scrollY + window.innerHeight =&gt; 현재 화면 제일 밑 const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2; // img.offsetTop =&gt; 화면의 맨 위에서 이미지의 최상단까지의...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%8B%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A1%9C%EB%94%A9/",
        "teaser": null
      },{
        "title": "[프로그래머스] 멀쩡한 사각형",
        "excerpt":"[프로그래머스] 멀쩡한 사각형 문제 링크 #include &lt;algorithm&gt; using namespace std; long long GCD(long long a, long long b){ if(a % b == 0) return b; return GCD(b, a % b); } long long solution(int w, int h) { long long new_w = w; long long new_h = h; long long...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%A9%80%EC%A9%A1%ED%95%9C-%EC%82%AC%EA%B0%81%ED%98%95/",
        "teaser": null
      },{
        "title": "[프로그래머스] 스킬트리",
        "excerpt":"[프로그래머스] 스킬트리 문제 링크 #include \"header.h\" using namespace std; map &lt;char, int&gt; m; int solution(string skill, vector&lt;string&gt; skill_trees) { int answer = 0; int idx = 0; for(int i=0; i&lt;skill.size(); i++) { skill[i] = toupper(skill[i]); m[skill[i]]++; } for(int i=0; i&lt;skill_trees.size(); i++){ idx = 0; int flag = 1; for(int j=0;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%8A%A4%ED%82%AC%ED%8A%B8%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[TIL] resolve in programming",
        "excerpt":"[TIL] resolve in programming resolver, resolve packages 등 resolve라는 단어가 자주 나오는데, 어떤 의미인지 명확하게 몰라서 구글링을 해 봤다. Transforming represent something in another format 어떤 것을 다른 형식으로 표현하는 것이다. ex) 10진수 -&gt; 6진수 정해진 rule에 따라 변환 Resolving Resolve를 사전에 검색 해 보면, find a answer or a...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-resolve-in-programming/",
        "teaser": null
      },{
        "title": "[백준 3184] 양",
        "excerpt":"[백준 3184] 양 문제 링크 #include \"header.h\" using namespace std; int R, C; //'.' 빈 필드 //'#' 울타리 //'o' 양 //'v' 늑대 int ans_wolf, ans_sheep; char fence[251][251]; int visit[251][251]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; void input(){ cin &gt;&gt; R &gt;&gt; C;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3184-%EC%96%91/",
        "teaser": null
      },{
        "title": "[백준 1726] 로봇",
        "excerpt":"[백준 1726] 로봇 문제 링크 #include \"header.h\" using namespace std; int N, M; int room[101][101]; int visit[101][101][5]; //1동 2서 3남 4북 int dx[5] = {0, 0, 0, 1, -1}; int dy[5] = {0, 1, -1, 0, 0}; typedef struct{ int x; int y; int d; int cnt; }st; st robot;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1726-%EB%A1%9C%EB%B4%87/",
        "teaser": null
      },{
        "title": "[프로그래머스] 종이접기",
        "excerpt":"[프로그래머스] 종이접기 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; using namespace std; vector&lt;int&gt; solution(int n) { vector&lt;int&gt; answer; answer.push_back(0); //초기값 for(int i=2; i&lt;=n; i++){ vector &lt;int&gt; save = answer; answer.push_back(0); int idx = save.size() / 2; for(int j=0; j&lt;save.size(); j++){ if(j == idx){ answer.push_back(!save[j]); continue; }else answer.push_back(save[j]); } } return answer;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A2%85%EC%9D%B4%EC%A0%91%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[프로그래머스] 여행경로",
        "excerpt":"[프로그래머스] 여행경로 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; #include &lt;algorithm&gt; using namespace std; int visited[1001]; void solve(vector &lt;vector&lt;string&gt;&gt;&amp; candidates, vector&lt;string&gt;&amp; temp, vector&lt;vector&lt;string&gt;&gt;&amp; tickets, string target){ if(temp.size() == tickets.size() + 1){ candidates.push_back(temp); return; } //갈 수 있는 한 깊은 곳 까지 가자 for(int i=0; i&lt;tickets.size(); i++){ if(!visited[i] &amp;&amp; target == tickets[i][0]){...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C/",
        "teaser": null
      },{
        "title": "[프로그래머스] 입국심사",
        "excerpt":"[프로그래머스] 입국심사 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; #include &lt;algorithm&gt; using namespace std; long long solution(int n, vector&lt;int&gt; times) { sort(times.begin(), times.end()); // 안해도 됨(입력에서 이미 정렬되어 있는듯) long long N = n; long long left = 0; long long right = times[times.size()-1] * N; long long answer = 0;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC/",
        "teaser": null
      },{
        "title": "[TIL] Javascript splice",
        "excerpt":"Javascript splice 기존의 배열 요소를 변경한다. array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) start : 변경 시작 인덱스 deleteCount : 제거할 요소의 수 (optional) item... : 추가할 요소 ex) // 하나도 지우지 않고, 2번째에 drum 추가 var removed = myFish.splice(2, 0, 'drum'); // 3번 인덱스에서 1개 제거 var removed = myFish.splice(3, 1);...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-Javascript-Splice/",
        "teaser": null
      },{
        "title": "[백준 1717] 집합의 표현",
        "excerpt":"[백준 1717] 집합의 표현 문제 링크 #include &lt;stdio.h&gt; #include &lt;iostream&gt; using namespace std; int n, m; int parent[1000001]; int find(int x){ if(parent[x] == x) return x; return parent[x] = find(parent[x]); } void merge(int a, int b){ a = find(a); b = find(b); if(a == b) return; parent[b] = a; }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1717-%EC%A7%91%ED%95%A9%EC%9D%98-%ED%91%9C%ED%98%84/",
        "teaser": null
      },{
        "title": "[백준 1753] 최단경로",
        "excerpt":"[백준 1753] 최단경로 문제 링크 #include \"header.h\" #define INF 987654321 using namespace std; int v, e, start; vector &lt;pair&lt;int, int&gt;&gt; vec[20001]; int dist[300001]; void input(){ cin &gt;&gt; v &gt;&gt; e &gt;&gt; start; for(int i=0; i&lt;e; i++){ int from, to, cost; cin &gt;&gt; from &gt;&gt; to &gt;&gt; cost; vec[from].push_back({to, cost}); }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1753-%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C/",
        "teaser": null
      },{
        "title": "[프로그래머스] 자물쇠와 열쇠",
        "excerpt":"[프로그래머스] 자물쇠와 열쇠 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; using namespace std; int keysize; int locksize; int boardsize; void turn(vector&lt;vector&lt;int&gt;&gt; &amp;key) { vector&lt;vector&lt;int&gt;&gt; temp(key.size(), vector&lt;int&gt;(keysize)); for (int i = 0; i &lt; key.size(); i++){ int idx = keysize - 1; for (int j = 0; j &lt; keysize; j++){ temp[i][idx--]...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9E%90%EB%AC%BC%EC%87%A0%EC%99%80-%EC%97%B4%EC%87%A0/",
        "teaser": null
      },{
        "title": "[백준 3109] 빵집",
        "excerpt":"[백준 3109] 빵집 문제 링크 #include \"header.h\" using namespace std; int R, C, answer; // 오른쪽 위 대각선, 오른쪽, 오른쪽 아래 대각선 int dx[3] = { -1, 0, 1 }; int dy[3] = { 1, 1, 1, }; char market[10001][501]; int visit[10001][501]; bool ans; //'.'는 빈 칸이고, 'x'는 건물 void...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3109-%EB%B9%B5%EC%A7%91/",
        "teaser": null
      },{
        "title": "[프로그래머스] 디스크 컨트롤러",
        "excerpt":"[프로그래머스] 디스크 컨트롤러 문제 링크 #include \"header.h\" using namespace std; int visit[1001]; priority_queue &lt;pair&lt;int, int&gt;, vector&lt;pair&lt;int, int&gt;&gt;, greater&lt;pair&lt;int, int&gt;&gt;&gt; pq; bool cmp(vector&lt;int&gt; a, vector&lt;int&gt;b){ if(a[0] &gt;= b[0]){ if(a[0] == b[0]){ if(a[1] &lt; b[1]){ return true; } return false; } return false; } return true; } int solution(vector&lt;vector&lt;int&gt;&gt; jobs) { int...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%94%94%EC%8A%A4%ED%81%AC-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC/",
        "teaser": null
      },{
        "title": "[백준 9328] 열쇠",
        "excerpt":"[백준 9328] 열쇠 문제 링크 #include \"header\" using namespace std; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; int visit[101][101]; char maze[101][101]; int keys[130]; //97~122 소문자 알파벳 int t, ans, h, w; vector&lt;pair&lt;int, int&gt;&gt; v; void bfs() { int j = 0; for (j...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-9328-%EC%97%B4%EC%87%A0/",
        "teaser": null
      },{
        "title": "[프로그래머스] 베스트앨범",
        "excerpt":"[프로그래머스] 베스트앨범 문제 링크 #include \"header.h\" using namespace std; map &lt;string, vector&lt;pair&lt;int, int&gt;&gt;&gt; songs; map &lt;string, int&gt; total; int desc(pair&lt;int, int&gt; a, pair&lt;int, int&gt; b){ return a.first &gt; b.first; } int cmp(pair&lt;string, int&gt;a, pair&lt;string, int&gt;b){ return a.second &gt; b.second; } vector&lt;int&gt; solution(vector&lt;string&gt; genres, vector&lt;int&gt; plays) { vector&lt;int&gt; answer; for(int i=0;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%95%A8%EB%B2%94/",
        "teaser": null
      },{
        "title": "[프로그래머스] 예산",
        "excerpt":"[프로그래머스] 예산 문제 링크 #include \"header.h\" #define MAX 1000000001 using namespace std; long long check(vector&lt;int&gt; &amp; budgets, int mid){ // mid = 상한선! long long total = 0; for(int i=0; i&lt;budgets.size(); i++){ if(mid &gt;= budgets[i]){ total += budgets[i]; }else{ total += mid; } } return total; } int solution(vector&lt;int&gt; budgets,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%98%88%EC%82%B0/",
        "teaser": null
      },{
        "title": "[백준 3197] 백조의 호수",
        "excerpt":"[백준 3197] 백조의 호수 문제 링크 #include \"header.h\" using namespace std; int R, C, day; char pond[1501][1501]; int visit[1501][1501]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; vector&lt;pair&lt;int, int&gt;&gt; swan; //백조 위치 저장 queue&lt;pair&lt;int, int&gt;&gt; q; queue&lt;pair&lt;int, int&gt;&gt; water; void input() { cin &gt;&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3197-%EB%B0%B1%EC%A1%B0%EC%9D%98-%ED%98%B8%EC%88%98/",
        "teaser": null
      },{
        "title": "[백준 17471] 게리맨더링",
        "excerpt":"[백준 17471] 게리맨더링 문제 링크 using namespace std; int N; int people[21]; int adjacent[21][21]; int check[21]; int ans = 987654321; void input() { cin &gt;&gt; N; for (int i = 1; i &lt;= N; i++) { cin &gt;&gt; people[i]; //인구의 수 } for (int i = 1; i &lt;= N;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-17471-%EA%B2%8C%EB%A6%AC%EB%A7%A8%EB%8D%94%EB%A7%81/",
        "teaser": null
      },{
        "title": "[OS] Chap3. 프로세스 연습문제",
        "excerpt":"1. 단기, 중기, 장기 스케쥴링의 차이점을 설명하시오. 장기 스케쥴링 장기 스케쥴링은 디스크와 메모리 사이의 스케쥴링을 담당한다. Job Queue에서 프로세스를 가져와 Ready State로 변경한다. 어떤 프로세스가 Ready State로 변경될 것인지를 결정한다. 장기 스케쥴러는 I/O Bound Process (I/O burst가 큰 프로세스)와 CPU Bound Process (CPU burst가 큰 프로세스) 사이의 균형을 맞춰야 한다....","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch3.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[백준 13023] ABCDE",
        "excerpt":"[백준 13023] ABCDE 문제 링크 #include \"header.h\" using namespace std; int N, M; int visit[2001]; int answer; vector &lt;int&gt; v[2001]; void input(){ cin &gt;&gt; N &gt;&gt; M; for(int i=0; i&lt;M; i++){ int a = 0; int b = 0; cin &gt;&gt; a &gt;&gt; b; //그래프 생성 v[a].push_back(b); v[b].push_back(a); } }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-13023-ABCDE/",
        "teaser": null
      },{
        "title": "[백준 14500] 테트로미노",
        "excerpt":"[백준 14500] 테트로미노 문제 링크 #include \"header.h\" using namespace std; int N, M; int paper[504][504]; void solve() { vector&lt;vector&lt;vector&lt;pair&lt;int, int&gt;&gt;&gt;&gt; poly = { {{{0, 0}, {0, 1}, {1, 0}, {1, 1}}}, //정사각형 { {{0, 0}, {0, 1}, {0, 2}, {0, 3}}, {{0, 0}, {1, 0}, {2, 0}, {3, 0}} //길쭉...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-14500-%ED%85%8C%ED%8A%B8%EB%A1%9C%EB%AF%B8%EB%85%B8/",
        "teaser": null
      },{
        "title": "[OS] Ch4. 스레드",
        "excerpt":"Thread CPU 이용의 기본 단위이다. 스레드 ID, Program Counter, 레지스터, 스택으로 이루어져 있다. 같은 프로세스에 속한 스레드들은 data, code를 공유한다. 스레드 사용의 동기 기존에는 다중 프로세스를 사용했다. 하지만 프로세스 생성 비용, context switching 등 오버헤드가 너무 많이 생성돼 스레드를 사용하게 됐다. 다중 스레드의 장점 응답성 (Responsibility) 연산을 분산함으로서 사용자 인터렉션...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch4.-%EC%8A%A4%EB%A0%88%EB%93%9C/",
        "teaser": null
      },{
        "title": "[TIL] Javascript Prototype",
        "excerpt":"Javascript Prototype 프로토타입이란? 프로토타입은 “원형”이라는 뜻이다. 원형의 사전적 의미는 다음과 같다. 같거나 비슷한 여러가지가 만들어져 나온 본바탕 ex) 불교 문화의 영향을 받은 이 건축물은 후대 건축물의 원형이 됐다. 따라서 어떤 객체의 프로토타입이란, 그 객체의 ‘원형’을 뜻한다. var object = new Object(); 객체는 함수로 생성된다. 함수가 생성 되면 2가지가 생긴다. 생성자...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-Javascript-prototype/",
        "teaser": null
      },{
        "title": "[TIL] spread와 rest",
        "excerpt":"spread와 rest ES6 문법에 추가가 된 spread, rest를 배웠다. Spread 구문 spread의 사전적 의미는 펼치다이다. 배열, 객체를 펼치는 것을 의미한다. ...변수명으로 사용한다. const food = { vegetable: \"broccoli\" }; const grilledFood = { ...food, cook : \"fire\" }; const grilledDeliciousFood = { ...grilledFood, add: \"meat\" }; console.log(food); console.log(grilledFood); console.log(grilledDeliciousFood); output...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-spread%EC%99%80-rest/",
        "teaser": null
      },{
        "title": "[OS] Ch4. 연습문제",
        "excerpt":"1. 다중 스레드 기법을 사용 했을 때 단일 스레드 기법을 사용했을 때보다 성능이 좋지 않은 프로그래밍 사례 2가지를 제시하시오. 순차적으로 실행하는 프로그램은 다중 스레드 기법에 적합하지 않다. shell 프로그램은 항상 환경변수, 작업 디렉토리 등의 정보를 감시해야 하기 때문에 다중 스레드 기법이 필요하지 않다. (자기 자신을 감독하는 것이기 때문에 굳이 스레드...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch4.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[백준 3678] 카탄의 개척자",
        "excerpt":"[백준 3678] 카탄의 개척자 문제 링크 #include \"header.h\" using namespace std; int c; int katan[10004]; int frequency[6]; int possible[6] = {1, 1, 1, 1, 1, 1}; void solve() { int border = 1; // 테두리가 몇 겹인지 int cur = 1; // 커서 int inner = 1; //안쪽 타일 katan[1]...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-3678-%EC%B9%B4%ED%83%84%EC%9D%98-%EA%B0%9C%EC%B2%99%EC%9E%90/",
        "teaser": null
      },{
        "title": "[프로그래머스] 길 찾기 게임",
        "excerpt":"[프로그래머스] 길 찾기 게임 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; #include &lt;algorithm&gt; using namespace std; typedef struct Node { int num; int val; Node *left; Node *right; } Node; vector &lt;int&gt; pre; vector &lt;int&gt; post; int cmp(vector&lt;int&gt; a, vector&lt;int&gt; b) { if (a[1] &gt;= b[1]) { if (a[1] == b[1])...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B8%B8-%EC%B0%BE%EA%B8%B0-%EA%B2%8C%EC%9E%84/",
        "teaser": null
      },{
        "title": "[백준 1522] 문자열 교환",
        "excerpt":"[백준 1522] 문자열 교환 문제 링크 #include &lt;iostream&gt; #include &lt;algorithm&gt; using namespace std; string str; void solve(){ int n = str.length(); int cnt = 0; for(int i=0; i&lt;n; i++){ if(str[i] == 'a'){ cnt++; } } if(cnt == 0) { cout &lt;&lt; 0 &lt;&lt; endl; return; } int ans = 987654321;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1522-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B5%90%ED%99%98/",
        "teaser": null
      },{
        "title": "[백준 6087] 레이져 통신",
        "excerpt":"[백준 6087] 레이져 통신 문제 링크 #include \"header.h\" using namespace std; int W, H; int ans = 987654321; char map_[101][101]; int dist[101][101]; int visit[101][101]; vector&lt;pair&lt;int, int&gt;&gt; C; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; void input() { cin &gt;&gt; W &gt;&gt; H; for...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-6087-%EB%A0%88%EC%9D%B4%EC%A0%B8-%ED%86%B5%EC%8B%A0/",
        "teaser": null
      },{
        "title": "[백준 2933] 미네랄",
        "excerpt":"[백준 2933] 미네랄 문제 링크 #include \"header.h\" using namespace std; int R, C, N; char map_[101][101]; vector&lt;int&gt; order; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; int visit[101][101]; int cluster_visit[101][101]; void input() { cin &gt;&gt; R &gt;&gt; C; for (int i = 0; i...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2933-%EB%AF%B8%EB%84%A4%EB%9E%84/",
        "teaser": null
      },{
        "title": "[프로그래머스] 전화번호 목록",
        "excerpt":"[프로그래머스] 전화번호 목록 문제 링크 #include \"header.h\" using namespace std; bool cmp(string a, string b){ return a.length() &lt; b.length(); } bool solution(vector&lt;string&gt; phone_book) { sort(phone_book.begin(), phone_book.end(), cmp); for(int i=0; i&lt;phone_book.size()-1; i++){ string target = phone_book[i]; for(int j=i+1; j&lt;phone_book.size(); j++){ string cmp = phone_book[j]; int flag = 1; for(int k=0; k&lt;target.length();...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8-%EB%AA%A9%EB%A1%9D/",
        "teaser": null
      },{
        "title": "[React] 리액트 생명주기",
        "excerpt":"리액트 생명주기 리액트의 생명주기는 크게 마운트, 업데이트, 언마운트로 나뉘어져 있다. 마운트 : 컴포넌트가 페이지에 생성 될 때 실행 업데이트 : 컴포넌트가 리렌더링 될 때 실행 언마운트 : 컴포넌트가 페이지에서 사라질 때 실행 마운트 컴포넌트가 페이지에 생성 될 때 실행된다. constructor getDerivedStateFromProps props를 state로 변경 할 때 사용 render componentDidMount 업데이트...","categories": ["react"],
        "tags": [],
        "url": "/react/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[백준 2589] 보물섬",
        "excerpt":"[백준 2589] 보물섬 문제 링크 #include \"header.h\" using namespace std; char map_[51][51]; int visit[51][51]; int L, W; int ans; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; void input() { cin &gt;&gt; L &gt;&gt; W; for (int i = 0; i &lt; L; i++)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2589-%EB%B3%B4%EB%AC%BC%EC%84%AC/",
        "teaser": null
      },{
        "title": "[백준 1062] 가르침",
        "excerpt":"[백준 1062] 가르침 문제 링크 using namespace std; int N, K, n; int answer; map&lt;char, int&gt; m; vector&lt;string&gt; learn; set&lt;char&gt; s; vector&lt;char&gt; v; void init() { for(char i='a'; i&lt;='z'; i++){ m[i] = 0; } m['a'] = 1; m['n'] = 1; m['t'] = 1; m['i'] = 1; m['c'] = 1; }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1062-%EA%B0%80%EB%A5%B4%EC%B9%A8/",
        "teaser": null
      },{
        "title": "[프로그래머스] 쇠막대기",
        "excerpt":"[프로그래머스] 쇠막대기 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; #include &lt;stack&gt; using namespace std; int solution(string str) { int answer = 0; stack &lt;char&gt; st; int flag = 0; for(int i=0; i&lt;str.length(); i++){ if(str[i] == '('){ st.push('('); flag = 1; }else{ st.pop(); if(flag){ //laser answer += st.size(); }else{ answer += 1;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[백준 4179] 불",
        "excerpt":"[백준 4179] 불 문제 링크 #include \"header.h\" using namespace std; int R, C; char map_[1001][1001]; int visit[1001][1001]; int fire_map[1001][1001]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; pair &lt;int, int&gt; jihoon; queue &lt;pair&lt;int, int&gt;&gt; fire; void input(){ cin &gt;&gt; R &gt;&gt; C; for(int i=0;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-4179-%EB%B6%88/",
        "teaser": null
      },{
        "title": "[백준 1339] 단어 수학",
        "excerpt":"[백준 1339] 단어 수학 문제 링크 #include &lt;header.h&gt; using namespace std; int N; int ans = 0; map&lt;char, int&gt; m; vector&lt;string&gt; words; int visit[11]; set&lt;char&gt; s; vector&lt;char&gt; v; void input() { cin &gt;&gt; N; for (int i = 0; i &lt; N; i++) { string str; cin &gt;&gt; str; words.push_back(str);...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1339-%EB%8B%A8%EC%96%B4-%EC%88%98%ED%95%99/",
        "teaser": null
      },{
        "title": "[백준 14225] 부분수열의 합",
        "excerpt":"[백준 14225] 부분수열의 합 문제 링크 #include \"header.h\" using namespace std; #define MAX 2000005 int N; vector &lt;int&gt; numbers; int visit[24]; int can[MAX]; void input(){ cin &gt;&gt; N; for(int i=0; i&lt;N; i++){ int n; cin &gt;&gt; n; numbers.push_back(n); } } void dfs(int now, int idx){ can[now] = 1; for(int i=idx;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-14225-%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B4%EC%9D%98-%ED%95%A9/",
        "teaser": null
      },{
        "title": "[백준 1941] 소문난 칠공주",
        "excerpt":"[백준 1941] 소문난 칠공주 문제 링크 #include \"header.h\" using namespace std; char classroom[10][10]; int visit[30]; int ans; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; void input() { for (int i = 0; i &lt; 5; i++) { for (int j = 0; j...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1941-%EC%86%8C%EB%AC%B8%EB%82%9C-%EC%B9%A0%EA%B3%B5%EC%A3%BC/",
        "teaser": null
      },{
        "title": "[백준 1939] 중량제한",
        "excerpt":"[백준 1939] 중량제한 문제 링크 #include \"header.h\" #define MAX 1000000000 using namespace std; int N, M; int x, y; int visit[10001]; vector&lt;pair&lt;int, int&gt;&gt; graph[100001]; void input() { cin &gt;&gt; N &gt;&gt; M; int a, b, c; for (int i = 0; i &lt; M; i++) { cin &gt;&gt; a &gt;&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1939-%EC%A4%91%EB%9F%89%EC%A0%9C%ED%95%9C/",
        "teaser": null
      },{
        "title": "[TIL] javascript split()",
        "excerpt":"String.prototype.split() 문자열을 배열로 변환시킨다. str.split([seperator[, limit]]); seperator : 문자열을 쪼개는 단위. string이나 regex limit : 리턴되는 배열의 갯수 제한. 단, 유니코드에선 제대로 동작하지 않을 수 있다. const ret = '𝟘𝟙𝟚𝟛'.split(''); console.log(ret); //[\"�\", \"�\", \"�\", \"�\", \"�\", \"�\", \"�\", \"�\"] Suggestions! 1. spread syntax 2. Array.from() 3. /u const str =...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-javascript-split()/",
        "teaser": null
      },{
        "title": "[백준 2931] 가스관",
        "excerpt":"[백준 2931] 가스관 문제 링크 #include \"header.h\" using namespace std; int R, C; char board[30][30]; int dir; //상 하 좌 우 int dx[4] = {-1, 1, 0, 0}; int dy[4] = {0, 0, -1, 1}; pair&lt;int, int&gt; start; void input() { cin &gt;&gt; R &gt;&gt; C; for (int i =...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2931-%EA%B0%80%EC%8A%A4%EA%B4%80/",
        "teaser": null
      },{
        "title": "[프로그래머스] 가장 먼 노드",
        "excerpt":"[프로그래머스] 가장 먼 노드 문제 링크 #include &lt;string&gt; #include &lt;vector&gt; #include &lt;queue&gt; using namespace std; vector &lt;int&gt; v[20001]; queue &lt;pair&lt;int, int&gt;&gt; q; int visit[20001]; int solution(int n, vector&lt;vector&lt;int&gt;&gt; edge) { int answer = 0; for(int i=0; i&lt;edge.size(); i++){ int from = edge[i][0]; int to = edge[i][1]; v[from].push_back(to); v[to].push_back(from); } q.push({1,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B0%80%EC%9E%A5-%EB%A8%BC-%EB%85%B8%EB%93%9C/",
        "teaser": null
      },{
        "title": "[백준 1194] 달이 차오른다, 가자.",
        "excerpt":"[백준 1194] 달이 차오른다, 가자. 문제 링크 #include \"header.h\" using namespace std; int N, M; char board[51][51]; int visit[51][51][1 &lt;&lt; 7]; pair &lt;int, int&gt; minsik; typedef struct node { int x; int y; int dis; int key; }node; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1194-%EB%8B%AC%EC%9D%B4-%EC%B0%A8%EC%98%A4%EB%A5%B8%EB%8B%A4,-%EA%B0%80%EC%9E%90/",
        "teaser": null
      },{
        "title": "[TIL] React, Vue, Angular 비교",
        "excerpt":"[TIL] React, Vue, Angular 비교 Angular TS 기반 → 대규모 팀과 협업에 적합 단, 양방향 바인딩 모두 지원 컴포넌트 기반 React JSX 사용 가상 DOM 사용 단방향 데이터 바인딩 컴포넌트 기반 Vue Virtual DOM 사용 Template 사용 단, 양방향 바인딩 모두 지원 컴포넌트 기반 Conclusion - React Vue Angular 언어...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-React,-Vue,-Angular-%EB%B9%84%EA%B5%90/",
        "teaser": null
      },{
        "title": "Priority Queue",
        "excerpt":"파라미터 priority_queue&lt;T, Container, Compare&gt; T : 우선순위 큐에 들어가는 원소들의 타입 명시 Container : T에 선언 된 타입을 담는 형식을 명시, 이 때 순회가 가능 해야 하고, O(1) 시간복잡도로 원소에 접근 가능 해야 한다. ex) vector, deque Compare : 비교 함수 가장 큰 원소가 top인 max heap이 기본값이다. 기본 사용법...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/Priority-Queue/",
        "teaser": null
      },{
        "title": "[백준 1158] 요세푸스 문제",
        "excerpt":"[백준 1158] 요세푸스 문제 문제 링크 #include \"header.h\" using namespace std; int N, K; queue &lt;int&gt; q; vector&lt;int&gt; answer; void print() { cout &lt;&lt; '&lt;'; for(int i=0; i&lt;answer.size()-1; i++){ cout &lt;&lt; answer[i] &lt;&lt; \", \"; } cout &lt;&lt; answer[answer.size()-1] &lt;&lt; '&gt;'; } int main() { cin &gt;&gt; N &gt;&gt; K;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1158-%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[백준 2615] 오목",
        "excerpt":"[백준 2615] 오목 문제 링크 #include \"header.h\" using namespace std; int board[24][24]; int visit[24][24][10]; int dx[4] = {1, 0, 1, 1}; int dy[4] = {0, 1, -1, 1}; queue &lt;pair&lt;int, int&gt;&gt; q; void input() { for(int i=0; i&lt;19; i++){ for(int j=0; j&lt;19; j++) { cin &gt;&gt; board[i][j]; if(board[i][j]) q.push({i, j});...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2615-%EC%98%A4%EB%AA%A9/",
        "teaser": null
      },{
        "title": "[TIL] Async, Await, Promise",
        "excerpt":"Async, Await, Promise의 차이점을 알 수 있다. Async, Await, Promise의 차이점을 알기 전에, 비동기와 동기, 콜백에 대해서 알아 보겠다. 동기, 비동기 동기 (Synchrounous) 함수의 실행과 동시에 값이 반환된다. 하나의 함수 실행이 끝나기 전 까지는 다른 함수가 실행 될 수 없다. 비동기 (Asynchrounous) 함수의 실행과 값이 반환되는 시간이 다르다. (즉시 반환도...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-Async,-Await,-Promise/",
        "teaser": null
      },{
        "title": "[leetcode] Combination Sum III",
        "excerpt":"class Solution { public: void dfs(vector &lt;vector&lt;int&gt;&gt;&amp;ans, vector &lt;int&gt;&amp; chosen, vector &lt;int&gt;&amp;nums, int idx, int target, int k) { if(target &lt; 0) return; if(target == 0 &amp;&amp; k == chosen.size()) { ans.push_back(chosen); return; } for(int i=idx; i&lt;nums.size(); i++) { chosen.push_back(nums[i]); dfs(ans, chosen, nums, i+1, target - nums[i], k); chosen.pop_back(); }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Combination-Sum-III/",
        "teaser": null
      },{
        "title": "순열과 조합",
        "excerpt":"Key Point 중복 허용 X : 방문 처리 필요 (visit 배열 사용) 순서 상관 X : 인덱스 필요 순서 상관 X 라면 AB = BA이다. 따라서 [1, 2], [2, 1]은 같기 때문에 제거 해 주어야 하기 때문에 인덱스가 필요하다. 순서 상관 O 라면 AB ≠ BA이다. 따라서 [1, 2], [2,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9/",
        "teaser": null
      },{
        "title": "[leetcode] Word Search",
        "excerpt":"[leetcode] Word Search 문제 링크 class Solution { public: int flag; int visit[201][201]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; void dfs(vector&lt;vector&lt;char&gt;&gt;&amp; board, int x, int y, string word, int idx) { if(flag) return; if(idx == word.length()) { flag = 1; return; }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Word-Search/",
        "teaser": null
      },{
        "title": "[백준 2636] 치즈",
        "excerpt":"[백준 2636] 치즈 문제 링크 using namespace std; int n, m, day, cheeze; int box[101][101]; int check[101][101]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; void input(){ cin &gt;&gt; n &gt;&gt; m; for(int i=0; i&lt;n; i++) { for(int j=0; j&lt;m; j++) { cin &gt;&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2636-%EC%B9%98%EC%A6%88/",
        "teaser": null
      },{
        "title": "[백준 9251] LCS",
        "excerpt":"[백준 9251] LCS 문제 링크 using namespace std; string text1, text2; int dp[1004][1004]; void solve() { for(int i=1; i&lt;=text1.length(); i++) { for(int j=1; j&lt;=text2.length(); j++) { if(text1[i-1] == text2[j-1]) { dp[i][j] = dp[i-1][j-1] + 1; } else { dp[i][j] = max(dp[i-1][j], dp[i][j-1]); } } } cout &lt;&lt; dp[text1.length()][text2.length()]; } int...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-9251-LCS/",
        "teaser": null
      },{
        "title": "[백준 5212] 지구 온난화",
        "excerpt":"[백준 5212] 지구 온난화 문제 링크 #include \"header.h\" using namespace std; int R, C; char ocean[14][14]; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; queue &lt;pair&lt;int, int&gt;&gt; q; vector &lt;pair&lt;int, int&gt;&gt; v; bool cmp(pair&lt;int, int&gt;&amp;a, pair&lt;int, int&gt;&amp;b) { return a.second &lt; b.second; } void...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-5212-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94/",
        "teaser": null
      },{
        "title": "[leetcode] Palindromic Substrings",
        "excerpt":"[leetcode] Palindromic Substrings 문제 링크 class Solution { public: int dp[1004][1004]; int countSubstrings(string s) { int answer = s.length(); for(int i=0; i&lt;s.length(); i++) { dp[i][i] = 1; } for(int i=0; i&lt;s.length() - 1; i++) { if(s[i] == s[i+1]) { dp[i][i+1] = 1; answer++; } } for(int i=2; i&lt;s.length(); i++) {...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Palindromic-Substrings/",
        "teaser": null
      },{
        "title": "[백준 1938] 통나무 옮기기",
        "excerpt":"[백준 1938] 통나무 옮기기 문제 링크 #include \"header.h\" using namespace std; int N, dir, ans_dir; char land[54][54]; int visit[54][54][2]; vector &lt;pair&lt;int, int&gt;&gt; b; vector &lt;pair&lt;int, int&gt;&gt; e; queue &lt;vector&lt;int&gt;&gt; q; int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; // 범위 벡터 vector &lt;pair&lt;int, int&gt;&gt;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1938-%ED%86%B5%EB%82%98%EB%AC%B4-%EC%98%AE%EA%B8%B0%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[leetcode] Longest Increasing Subsequence",
        "excerpt":"[leetcode] Longest Increasing Subsequence 문제 링크 class Solution { public: int lengthOfLIS(vector&lt;int&gt;&amp; nums) { int ans = 0; int n = nums.size(); int dp[n+1]; memset(dp, 0, sizeof(dp)); for(int i=0; i&lt;n; i++) { dp[i] = 1; for(int j=0; j&lt;i; j++) { if(nums[i] &gt; nums[j] &amp;&amp; dp[i] &lt; dp[j] + 1) {...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Longest-Increasing-Subsequence/",
        "teaser": null
      },{
        "title": "[백준 11055] 가장 큰 증가 부분 수열",
        "excerpt":"[백준 11055] 가장 큰 증가 부분 수열 문제 링크 int N; int dp[1004]; int numbers[1004]; void input() { cin &gt;&gt; N; for(int i=0; i&lt;N; i++) { cin &gt;&gt; numbers[i]; } } void solve() { int answer = 0; for(int i=0; i&lt;N; i++) { dp[i] = numbers[i]; for(int j=0; j&lt;i; j++)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-11055-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%A6%9D%EA%B0%80-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4/",
        "teaser": null
      },{
        "title": "[백준 9252] LCS 2",
        "excerpt":"[백준 9252] LCS 2 문제 링크 using namespace std; string s1, s2; int dp[1004][1004]; string lcs[1004][1004]; void input() { cin &gt;&gt; s1 &gt;&gt; s2; } void solve() { int n = s1.length(); int m = s2.length(); string answer = \"\"; for(int i=1; i&lt;=n; i++) { for(int j=1; j&lt;=m; j++) {...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-9252-LCS-2/",
        "teaser": null
      },{
        "title": "[백준 17281] ⚾",
        "excerpt":"[백준 17281] ⚾ 문제 링크 using namespace std; int N, max_score; int players[51][10]; vector&lt;int&gt; candidates; int visit[9]; int field[4]; void input() { cin &gt;&gt; N; for (int i = 0; i &lt; N; i++) { for (int j = 0; j &lt; 9; j++) { cin &gt;&gt; players[i][j]; } }...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-17281/",
        "teaser": null
      },{
        "title": "[백준 17135] 캐슬 디펜스",
        "excerpt":"[백준 17135] 캐슬 디펜스 문제 링크 using namespace std; int N, M, D, answer; int board[20][20]; int new_board[20][20]; int dx[] = { -1,0,0 }; int dy[] = { 0,-1,1 }; vector&lt;pair&lt;int, int&gt;&gt; able; vector&lt;pair&lt;int, int&gt;&gt; candidates; int visit[20][20]; void input() { cin &gt;&gt; N &gt;&gt; M &gt;&gt; D; // 세로,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-17135-%EC%BA%90%EC%8A%AC-%EB%94%94%ED%8E%9C%EC%8A%A4/",
        "teaser": null
      },{
        "title": "[leetcode] Rotate List",
        "excerpt":"[leetcode] Rotate List 문제 링크 class Solution { public: ListNode* rotateRight(ListNode* head, int k) { if(head == NULL || k == 0) return head; int cnt = 1; ListNode* temp = head; while(temp-&gt;next) cnt++, temp = temp-&gt;next; k %= cnt; ListNode *cur1 = head; ListNode *cur2 = head; ListNode *new_head;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Roatate-List/",
        "teaser": null
      },{
        "title": "[leetcode] Symmetric Tree",
        "excerpt":"[leetcode] Symmetric Tree 문제 링크 class Solution { public: bool isMirror(TreeNode *t1, TreeNode * t2) { if(t1 == NULL &amp;&amp; t2 == NULL) return true; if(t1 == NULL || t2 == NULL) return false; return (t1-&gt;val == t2-&gt;val) &amp;&amp; isMirror(t1-&gt;right, t2-&gt;left) &amp;&amp; isMirror(t1-&gt;left, t2-&gt;right); } bool isSymmetric(TreeNode* root) { return...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Symmetric-Tree/",
        "teaser": null
      },{
        "title": "[leetcode] Wiggle Sort II",
        "excerpt":"[leetcode] Wiggle Sort II 문제 링크 class Solution { public: void wiggleSort(vector&lt;int&gt;&amp; nums) { vector &lt;int&gt; temp = nums; sort(temp.begin(), temp.end()); int left = (temp.size()-1) / 2; int right = temp.size()-1; for(int i=0; i&lt;nums.size(); i++) { if(i % 2 == 0) { nums[i] = temp[left--]; } else { nums[i] =...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Wiggle-Sort-II/",
        "teaser": null
      },{
        "title": "[백준 4195] 친구 네트워크",
        "excerpt":"[백준 4195] 친구 네트워크 문제 링크 using namespace std; int T, F; int parent[2000001]; int num[2000001]; int find(int x) { if(parent[x] == x) return x; return parent[x] = find(parent[x]); } int merge(int x, int y) { x = find(x); y = find(y); if(x != y) { parent[y] = x; num[x]...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-4195-%EC%B9%9C%EA%B5%AC-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/",
        "teaser": null
      },{
        "title": "[leetcode] Find the Duplicate Number",
        "excerpt":"[leetcode] Find the Duplicate Number 문제 링크 class Solution { public: int findDuplicate(vector&lt;int&gt;&amp; nums) { int turtle = nums[0]; int rabbit = nums[0]; do { turtle = nums[turtle]; rabbit = nums[nums[rabbit]]; } while(turtle != rabbit); turtle = nums[0]; while(turtle != rabbit) { turtle = nums[turtle]; rabbit = nums[rabbit]; } return...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Find-the-Duplicate-Number/",
        "teaser": null
      },{
        "title": "[leetcode] Valid Parenthesis String",
        "excerpt":"[leetcode] Valid Parenthesis String 문제 링크 class Solution { public: stack &lt;char&gt; open; stack &lt;char&gt; star; bool checkValidString(string s) { if(!s.length()) return true; for(int i=0; i&lt;s.length(); i++) { if(s[i] == '*') { star.push(i); } else if(s[i] == '('){ open.push(i); } else { if(!open.empty()) open.pop(); else if(!star.empty()) star.pop(); else if(open.empty()) return...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Valid-Parenthesis-String/",
        "teaser": null
      },{
        "title": "[leetcode] Wiggle Subsequence",
        "excerpt":"[leetcode] Wiggle Subsequence 문제 링크 class Solution { public: int wiggleMaxLength(vector&lt;int&gt;&amp; nums) { int n = nums.size(); if(n == 0) return 0; int down[n]; int up[n]; memset(down, 0, sizeof(down)); memset(up, 0, sizeof(up)); up[0] = down[0] = 1; for(int i=1; i&lt;nums.size(); i++) { if(nums[i-1] &lt; nums[i]) { up[i] = down[i-1] +...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Wiggle-Subsequence/",
        "teaser": null
      },{
        "title": "[백준 2631] 줄세우기",
        "excerpt":"[백준 2631] 줄세우기 문제 링크 using namespace std; int N; int numbers[1000004]; int dp[1000004]; int main() { cin &gt;&gt; N; for(int i=0; i&lt;N; i++) cin &gt;&gt; numbers[i]; int ret = 0; for(int i=0; i&lt;N; i++) { dp[i] = 1; for(int j=0; j&lt;i; j++) { if(numbers[i] &gt; numbers[j] &amp;&amp; dp[j] +...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-2631-%EC%A4%84%EC%84%B8%EC%9A%B0%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[백준 7570] 줄세우기",
        "excerpt":"[백준 7570] 줄세우기 문제 링크 int N; int numbers[1000004]; int dp[1000004]; int main() { ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL); cin &gt;&gt; N; int ret = 0; int num; for(int i=1; i&lt;=N; i++) { cin &gt;&gt; num; dp[num] = dp[num - 1] + 1; ret = max(dp[num], ret); } cout &lt;&lt; N - ret...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-7570-%EC%A4%84%EC%84%B8%EC%9A%B0%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[leetcode] House Robber II",
        "excerpt":"[leetcode] House Robber II 문제 링크 class Solution { public: int rob(vector&lt;int&gt;&amp; nums) { int n = nums.size(); if(n &lt; 1) return 0; if(n &lt; 2) return nums[0]; if(n &lt; 3) return max(nums[0], nums[1]); int dp[n+1]; memset(dp, 0, sizeof(dp)); dp[0] = nums[0]; dp[1] = max(nums[0], nums[1]); for(int i=2; i&lt;n; i++)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-House-Robber-II/",
        "teaser": null
      },{
        "title": "[leetcode] Best Time to Buy and Sell Stock with Cooldown",
        "excerpt":"[leetcode] Best Time to Buy and Sell Stock with Cooldown 문제 링크 class Solution { public: int maxProfit(vector&lt;int&gt;&amp; prices) { int n = prices.size(); if(n &lt; 1) return 0; int sold = 0, hold = INT_MIN, rest = 0; for(int i=0; i&lt;n; i++) { int prevSold = sold; sold =...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Best-Time-to-Buy-and-Sell-Stock-with-Cooldown/",
        "teaser": null
      },{
        "title": "[leetcode] Sort List",
        "excerpt":"[leetcode] Sort List 문제 링크 class Solution { public: ListNode* sortList(ListNode* head) { if(!head || !head-&gt;next) return head; ListNode* slow = head; ListNode* fast = head-&gt;next; while(fast &amp;&amp; fast-&gt;next) { slow = slow-&gt;next; fast = fast-&gt;next-&gt;next; } fast = slow-&gt;next; slow-&gt;next = NULL; return merge(sortList(head), sortList(fast)); } ListNode *merge(ListNode *l1,...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Sort-List/",
        "teaser": null
      },{
        "title": "[백준 1969] DNA",
        "excerpt":"[백준 1969] DNA 문제 링크 #include \"header.h\" using namespace std; int N, M; vector &lt;string&gt; str; void input() { cin &gt;&gt; N &gt;&gt; M; for(int i=0; i&lt;N; i++) { string s; cin &gt;&gt; s; str.push_back(s); } } void solve() { int distance = 0; string hamming; for(int i=0; i&lt;M; i++)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EB%B0%B1%EC%A4%80-1969-DNA/",
        "teaser": null
      },{
        "title": "[leetcode] Battleships in a Board",
        "excerpt":"[leetcode] Battleships in a Board 문제 링크 class Solution { public: int dx[4] = {-1, 1, 0, 0}; int dy[4] = {0, 0, -1, 1}; int answer; void dfs(int x, int y, vector&lt;vector&lt;char&gt;&gt;&amp; board) { for(int i=0; i&lt;4; i++) { int nx = x + dx[i]; int ny = y...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Battleships-in-a-Board/",
        "teaser": null
      },{
        "title": "[leetcode] Minimum Domino Rotations For Equal Row",
        "excerpt":"[leetcode] Minimum Domino Rotations For Equal Row 문제 링크 class Solution { public: int minDominoRotations(vector&lt;int&gt;&amp; A, vector&lt;int&gt;&amp; B) { int n = A.size(); int m = B.size(); for(int i=1; i&lt;=6; i++) { int flag = 1; int a_cnt = 0, b_cnt = 0; for(int j=0; j&lt;A.size(); j++) { if(A[j] !=...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Minimum-Domino-Rotations-For-Equal-Row/",
        "teaser": null
      },{
        "title": "[leetcode] Reverse Linked List",
        "excerpt":"[leetcode] Reverse Linked List 문제 링크 Iterative class Solution { public: ListNode* reverseList(ListNode* head) { ListNode *prev = NULL; ListNode *cur = head; while(cur) { ListNode *temp = cur-&gt;next; cur-&gt;next = prev; prev = cur; cur = temp; } return prev; } }; Recursive class Solution { public: ListNode* reverseList(ListNode*...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Reverse-Linked-List/",
        "teaser": null
      },{
        "title": "[leetcode] Coin Change",
        "excerpt":"[leetcode] Coin Change 문제 링크 int coinChange(vector&lt;int&gt;&amp; coins, int amount) { int n = coins.size(); if(!amount) return 0; if(!n) return -1; int dp[amount + 1]; for(int i=0; i&lt;=amount; i++) dp[i] = INT_MAX - 1; dp[0] = 0; for(int i=1; i&lt;=amount; i++) { for(int j=0; j&lt;n; j++) { if(i &gt;= coins[j])...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Coin-Change/",
        "teaser": null
      },{
        "title": "[leetcode] Reorder List",
        "excerpt":"[leetcode] Reorder List 문제 링크 class Solution { public: void reorderList(ListNode* head) { if(!head || !head-&gt;next) return; // find the middle ListNode *cur1 = head; ListNode *cur2 = head-&gt;next; while(cur2 &amp;&amp; cur2-&gt;next) { cur1 = cur1-&gt;next; cur2 = cur2-&gt;next-&gt;next; } cur2 = cur1-&gt;next; cur1-&gt;next = NULL; // reverse second list...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Reorder-List/",
        "teaser": null
      },{
        "title": "[OS] Ch5. CPU 스케쥴링",
        "excerpt":"기본 개념 단일 처리기에서는 오직 하나의 프로세스만이 실행 가능하다. 다중 프로그래밍의 목적은 CPU 사용률 최대화이다. =&gt; 스케쥴링 알고리즘이 중요해짐 CPU 입출력 버스트 사이클 (CPU I/O Burst Cycle) 프로세스 실행은 CPU버스트, I/O 버스트가 번갈아가면서 사이클을 이룬다. CPU 스케쥴러 단기 스케쥴러라고도 한다. 메모리 내의 프로세스를 CPU에 할당한다. 선점 스케쥴링 (Preemptive Scheduling) 중간에...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch5.-CPU-%EC%8A%A4%EC%BC%80%EC%A5%B4%EB%A7%81/",
        "teaser": null
      },{
        "title": "[leetcode] As Far from Land as Possible",
        "excerpt":"[leetcode] As Far from Land as Possible 문제 링크 class Solution { public: int answer = -1; int m, n; void bfs(vector&lt;vector&lt;int&gt;&gt;&amp; grid, queue &lt;pair&lt;int, int&gt;&gt;&amp; q) { int dx[4] = {0, 0, -1, 1}; int dy[4] = {-1, 1, 0, 0}; while(!q.empty()) { int sz = q.size(); answer++; while(sz--)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-As-Far-from-Land-as-Possible/",
        "teaser": null
      },{
        "title": "[leetcode] Remove Linked List Elements",
        "excerpt":"[leetcode] Remove Linked List Elements  문제 링크   class Solution { public:     ListNode* removeElements(ListNode* head, int val) {         ListNode *cur = head;         if(!head) return head;                  while(cur-&gt;next) {             if(cur-&gt;next-&gt;val == val) cur-&gt;next = cur-&gt;next-&gt;next;             else cur = cur-&gt;next;         }                  if(head-&gt;val == val) head = head-&gt;next;                  return head;     } };  ","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Remove-Linked-List-Elements/",
        "teaser": null
      },{
        "title": "[OS] Ch5. 연습문제",
        "excerpt":"1. 스케쥴러가 입출력 중심 프로그램과 CPU 중심 프로그램을 구분하는 것이 중요한 이유는 무엇인가? 입출력 중심 프로그램은 짧은 CPU 버스트를 많이 가지고, CPU 중심 프로그램은 다수의 긴 CPU 버스트를 갖는다. 다중 프로그래밍 환경에서 프로세스의 실행은 입출력과 CPU실행의 사이클을 반복하므로, CPU 스케줄링 결정에 매우 중요할 수 있다. 2. 다음과 같은 두 스케쥴링...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch5.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[leetcode] Add Two Numbers II",
        "excerpt":"[leetcode] Add Two Numbers II 문제 링크 class Solution { public: ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) { stack &lt;ListNode*&gt; st1; stack &lt;ListNode*&gt; st2; ListNode *cur = l1; while(cur) { st1.push(cur); cur = cur-&gt;next; } cur = l2; while(cur) { st2.push(cur); cur = cur-&gt;next; } stack &lt;ListNode *&gt; ret; int flag...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Add-Two-Numbers-II/",
        "teaser": null
      },{
        "title": "[leetcode] Minimum Depth of Binary Tree, Maximum Depth of Binary Tree",
        "excerpt":"[leetcode] Minimum Depth of Binary Tree 문제 링크 class Solution { public: int minDepth(TreeNode* root) { if(!root) return 0; if(!root-&gt;left) return minDepth(root-&gt;right) + 1; if(!root-&gt;right) return minDepth(root-&gt;left) + 1; return min(minDepth(root-&gt;left), minDepth(root-&gt;right)) + 1; } }; [leetcode] Maximum Depth of Binary Tree 문제 링크 class Solution { public: int maxDepth(TreeNode*...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Minimum-Depth-of-Binary-Tree,-Maximum-Depth-of-Binary-Tree/",
        "teaser": null
      },{
        "title": "[OS] Ch6. 연습문제",
        "excerpt":"4. 동기화 프리미티브가 사용자 수준 프로그램에서 사용되는 경우, 단일 처리기 시스템에서 인터럽트 불능을 이용하여 동기화 프리미티브를 구현하는 것이 왜 부적당한지 설명하시오. 만약 사용자 수준에서 인터럽트 불능을 할 수 있다면 문맥 교환을 막거나 타이머 인터럽트를 불능 시킬 수 있기 때문에 다른 프로세스가 실행 되지 않을 수 있다. 5. 다중 처리기 시스템을...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch6.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[OS] Ch6. 프로세스 동기화",
        "excerpt":"임계구역 문제 (The Critical-Section Problem) 각 프로세스는 임계구역이라고 부르는 코드 부분을 포함하고 있고, 그 안에서 다른 프로세스와 공유하는 변수를 변경하거나, 테이블 갱신 등의 작업을 진행한다. 이 시스템의 중요한 특징은 한 프로세스가 자신의 임계 구역에서 수행하는 동안 다른 프로세스들은 그 임계구역에 들어갈 수 없다는 사실이다. 각 프로세스는 임계구역에 진입하려면 진입 허가를...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch6.-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EB%8F%99%EA%B8%B0%ED%99%94/",
        "teaser": null
      },{
        "title": "[leetcode] Remove Duplicate Letters",
        "excerpt":"[leetcode] Remove Duplicate Letters 문제 링크 class Solution { public: string removeDuplicateLetters(string s) { map &lt;char, int&gt; count; for(char c : s) count[c]++; map &lt;char, int&gt; used; string ans = \"\"; for(char c : s) { count[c]--; if(used[c]) continue; while (count[ans.back()] &amp;&amp; ans.back() &gt; c) { used[ans.back()] = 0; ans.pop_back();...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Remove-Duplicate-Letters/",
        "teaser": null
      },{
        "title": "[leetcode] Bag of Tokens",
        "excerpt":"[leetcode] Remove Duplicate Letters 문제 링크 class Solution { public: int bagOfTokensScore(vector&lt;int&gt;&amp; tokens, int P) { sort(tokens.begin(), tokens.end()); int score = 0; int answer = 0; int left = 0; int right = tokens.size() - 1; while(left &lt;= right) { if (P &gt;= tokens[left]) { score++; P -= tokens[left++]; answer...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Bag-Of-Tokens/",
        "teaser": null
      },{
        "title": "[leetcode] Stone Game IV",
        "excerpt":"[leetcode] Stone Game IV 문제 링크 class Solution { public: int dp[100001]; bool winnerSquareGame(int n) { for(int i=1; i&lt;=n; i++) { for(int j=1; j * j &lt;= i; j++) { if(dp[i-j*j] == 0) { dp[i] = 1; break; } } } return dp[n]; } }; dp… GGㅎㅎ Alice, Bob이 게임을...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Stone-Game-IV/",
        "teaser": null
      },{
        "title": "[leetcode] Trapping Rain Water",
        "excerpt":"[leetcode] Trapping Rain Water 문제 링크 class Solution { public: int trap(vector&lt;int&gt;&amp; height) { int n = height.size(); if(!n) return 0; int left = 0; int right = n-1; int max_left = height[left]; int max_right = height[right]; int ans = 0; while(left &lt; right) { if(height[left] &gt; height[right]) { max_right...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Trapping-Rain-Water/",
        "teaser": null
      },{
        "title": "[OS] Ch7. 교착상태",
        "excerpt":"교착상태 대기 중인 프로세스들이 요청한 자원이 이미 점유되고, 그 프로세스들도 대기 상태일 때 그 상태를 변경할 수 없는 상황 교착 상태의 조건 다음의 4가지 조건이 동시에 성립 될 때 발생한다. 상호 배제 (Mutual Exclusion) 최소 한 개 이상의 자원이 비공유 모드로 점유되어야 한다. 비공유 모드에서는 한 번에 하나의 프로세스만이 그...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch7.-%EA%B5%90%EC%B0%A9%EC%83%81%ED%83%9C/",
        "teaser": null
      },{
        "title": "[OS] Ch7. 연습문제",
        "excerpt":"2. 동기화 하기 위해 오직 reader-writer 락만을 사용하는 다중스레드 응용을 가정하자. 교착상태가 발생하기 위한 4가지 조건을 적용할 때, 다중 reader-writer 락이 사용되는 경우에도 여전히 교착상태가 발생할 수 있는가? 발생할 수 있다. 상호 배제는 writer가 공유할 수 없기 때문에 지속된다. 점유 대기는 스레드가 reader/writer 락을 대기하면서 소지할 수 있으므로 일어난다. 락을...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch7.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[OS] Ch8. 메모리 관리 전략",
        "excerpt":"스와핑 프로세스는 실행 중 임시로 예비 저장장치로 내보내어졌다가 다시 메모리로 돌아올 수 있다. 스와핑 시간은 오버헤드이다. 한 프로세스를 스왑 아웃 하고 싶다면 해당 프로세스는 휴지 상태에 있어야 한다. 이중 버퍼링 (운영체제의 버퍼와만 입출력을 함) : 오버헤드 연속 메모리 할당 (Contiguous Memory Allocation) 최초 적합 처음으로 사용 가능한 공간을 할당 최적...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch8.-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-%EC%A0%84%EB%9E%B5/",
        "teaser": null
      },{
        "title": "[leetcode] Champagne Tower",
        "excerpt":"[leetcode] Champagne Tower 문제 링크 class Solution { public: double tower[102][102]; double champagneTower(int poured, int query_row, int query_glass) { tower[0][0] = poured; for(int i=0; i&lt;=query_row; i++) { for(int j=0; j&lt;=i; j++) { if(tower[i][j] &gt;= 1) { tower[i+1][j] += (tower[i][j] - 1) / 2; tower[i+1][j+1] += (tower[i][j] - 1) / 2;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Champagne-Tower/",
        "teaser": null
      },{
        "title": "[leetcode] Intersection of Two Linked Lists",
        "excerpt":"[leetcode] Intersection of Two Linked Lists 문제 링크 class Solution { public: int getLen(ListNode *n) { int cnt = 0; while(n) { cnt++; n = n-&gt;next; } return cnt; } ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) { ListNode *curA = headA; ListNode *curB = headB; int cmp = getLen(headA) - getLen(headB);...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Intersection-of-Two-Linked-Lists/",
        "teaser": null
      },{
        "title": "[OS] Ch8. 연습문제",
        "excerpt":"1. 내부 단편화와 외부 단편화 사이의 차이점을 설명하고, 어떻게 다른지 설명하시오. 내부 단편화 : 프로세스보다 분할 된 공간이 커 잉여 공간이 남는 것 외부 단편화 : 할당된 공간을 모으면 충분히 프로세스가 들어갈 수 있지만 프로세스가 들어갈 공간은 없는 것 5. 다음의 쟁점들을 참고하여 연속적 메모리 할당, 순수 세그멘테이션, 순수 페이징...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch8.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[OS] Ch9. 연습문제",
        "excerpt":"2. 스레드의 상태를 준비 완료(ready),실행(running),봉쇄됨(blocked)으로 간단하게 정의 할 수 있다. 여기서 준비 완료는 실행할 준비가 되어 스케줄 되기를 기다리고 있는 상태이고, 실행은 처리기에서 실행 중인 상태 그리고 입출력 완료를 기다리는 것과 같은 대기 상태가 봉쇄됨이다. 이러한 상태를 도시한 그림이 9.30에 나와 있다. 스레드가 실행상태라고 가정하고 다음 질문에 답하시오. a. 페이지...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch9.-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C/",
        "teaser": null
      },{
        "title": "[OS] Ch9. 가상 메모리",
        "excerpt":"가상 메모리 물리 메모리 개념과 사용자의 논리 메모리 개념을 분리한 것 가상 주소 공간 : 프로세스가 메모리에 저장되는 논리적인 번지 페이지 공유를 통해 파일이나 메모리가 프로세스들에 공유될 수 있는 장점이 있다. 요구 페이징 (Demand Paging) 메모리에 필요한 것들만 적재한다. 필요한 페이지는 swap in, 필요 없으면 swap out 스와핑 기법과 비슷...","categories": ["os"],
        "tags": [],
        "url": "/os/OS-Ch9.%EA%B0%80%EC%83%81-%EB%A9%94%EB%AA%A8%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[leetcode] Number of Longest Increasing Subsequence",
        "excerpt":"[leetcode] Number of Longest Increasing Subsequence 문제 링크 class Solution { public: int findNumberOfLIS(vector&lt;int&gt;&amp; nums) { int n = nums.size(); if(!n) return 0; int dp[n+1]; int cnt[n+1]; for(int i=0; i&lt;n+1; i++) {dp[i] = 1; cnt[i] = 1;} int cur = 0; for(int i=0; i&lt;n; i++) { for(int j=0; j&lt;i; j++)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Number-Of-Longest-Increasing-Subsequence/",
        "teaser": null
      },{
        "title": "[leetcode] Palindrome Partitioning",
        "excerpt":"[leetcode] Palindrome Partitioning 문제 링크 backtracking class Solution { public: int isPalindrome(string s, int l, int r) { int start = l; int end = r; while(start &lt; end) { if(s[start++] != s[end--]) return false; } return true; } void dfs(vector &lt;vector&lt;string&gt;&gt;&amp; ans, vector &lt;string&gt;&amp; candidates, string s, int idx)...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Palindrome-Partitioning/",
        "teaser": null
      },{
        "title": "정렬 알고리즘 정리",
        "excerpt":"안정 정렬 버블 정렬 for(int i=0; i&lt;n; i++) { for(int j=i; j&lt;n-i-1; j++) { if(arr[j] &gt; arr[j+1]) swap(arr[j], arr[j+1]); } } Time Complexity O(n^2) 삽입 정렬 for(int i=1; i&lt;n; i++) { int j = i-1; while(j &gt;= 0 &amp;&amp; arr[j] &gt; arr[j-1]) { swap(arr[j], arr[j-1]); j--; } } Time Complexity...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[leetcode] Palindrome Linked List",
        "excerpt":"[leetcode] Palindrome Linked List 문제 링크 class Solution { public: bool isPalindrome(ListNode* head) { if(!head || !head-&gt;next) return true; ListNode *slow = head; ListNode *fast = head; while(fast &amp;&amp; fast-&gt;next) { slow = slow-&gt;next; fast = fast-&gt;next-&gt;next; } fast = slow; // mid slow = head; ListNode *prev = NULL;...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Palindrome-Linked-List/",
        "teaser": null
      },{
        "title": "[leetcode] Best Time to Buy and Sell Stock",
        "excerpt":"[leetcode] Best Time to Buy and Sell Stock 문제 링크 class Solution { public: int maxProfit(vector&lt;int&gt;&amp; prices) { int n = prices.size(); if(n &lt; 2) return 0; int ans = 0; int minimum = prices[0]; for(int i=1; i&lt;n; i++) { if(minimum &lt; prices[i]) { ans = max(ans, prices[i] - minimum);...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Best-Time-to-Buy-and-Sell-Stock/",
        "teaser": null
      },{
        "title": "[leetcode] Convert Sorted List to Binary Search Tree",
        "excerpt":"[leetcode] Convert Sorted List to Binary Search Tree 문제 링크 class Solution { public: TreeNode* sortedListToBST(ListNode* head) { if(head == NULL) return NULL; if(head-&gt;next == NULL) return new TreeNode(head-&gt;val); // get mid ListNode *slow = head; ListNode *fast = head; ListNode *pre = head; while(fast &amp;&amp; fast-&gt;next) { pre =...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Convert-Sorted-List-to-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "[leetcode] Decode String",
        "excerpt":"[leetcode] Decode String 문제 링크 class Solution { public: string decodeString(string s) { stack &lt;char&gt; st; for(char c: s) { if(c == ']') { string temp; while(!st.empty()) { if(st.top() == '[') { st.pop(); break; } temp += st.top(); st.pop(); } reverse(temp.begin(), temp.end()); string number; while(!st.empty() &amp;&amp; isdigit(st.top())){ number = st.top()...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Decode-String/",
        "teaser": null
      },{
        "title": "[leetcode] Search in Rotated Sorted Array",
        "excerpt":"[leetcode] Search in Rotated Sorted Array 문제 링크 class Solution { public: int search(vector&lt;int&gt;&amp; arr, int target) { int left = 0; int right = arr.size()-1; while(left &lt;= right){ int mid = left + (right - left) / 2; if(arr[mid] == target) return mid; else if(arr[mid] &lt;= arr[right]) { if(arr[mid]...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Search-in-Rotated-Sorted-Array/",
        "teaser": null
      },{
        "title": "[leetcode] Flatten Binary Tree to Linked List",
        "excerpt":"[leetcode] Flatten Binary Tree to Linked List 문제 링크 Recursion class Solution { public: void flatten(TreeNode* root) { if(!root) return; flatten(root-&gt;left); flatten(root-&gt;right); if(root-&gt;left) { TreeNode *right = root-&gt;right; // save right node root-&gt;right = root-&gt;left; root-&gt;left = NULL; while(root-&gt;right) root = root-&gt;right; root-&gt;right = right; flatten(root-&gt;right); } return; } };...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-Flatten-Binary-Tree-to-Linked-List/",
        "teaser": null
      },{
        "title": "[leetcode] House Robber III",
        "excerpt":"[leetcode] House Robber III 문제 링크 Recursive (시간 초과) class Solution { public: int dfs(TreeNode *cur, bool isParentRobbed) { if(cur == NULL) return 0; if(isParentRobbed) { // cannot rob here return dfs(cur-&gt;left, false) + dfs(cur-&gt;right, false); } else { // rob here int rob = cur-&gt;val + dfs(cur-&gt;left, true) +...","categories": ["algorithm"],
        "tags": [],
        "url": "/algorithm/leetcode-House-Robber-III/",
        "teaser": null
      },{
        "title": "[TIL] webpack.config.js 살펴보기",
        "excerpt":"React 개발 환경 설정 시 CRA로만 진행했었다. 멘토님께서 CRA는 불필요한 것들이 많으니 직접 customizing을 해 가는게 좋다고 해주셨다. React 공식 documentation에 나와있는 해당 article을 보며 React 개발 환경을 기초부터 진행 해 봤다. 이 과정에서 webpack.config.js에 있는 환경변수들의 의미를 살필 수 있었다. webpack.config.js const path = require(\"path\"); const webpack = require(\"webpack\");...","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-webpack.config.js-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0/",
        "teaser": null
      }]
