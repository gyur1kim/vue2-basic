우리는 Vue2 버전을 사용함!

**공식 사이트**

[Vue.js](https://v2.vuejs.org/)

Vue를 쓰려면 CDN 가져오기!

`<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>`

# Vue의 Pattern

### MVVM Pattern

- **Model (DOM)**
  
    우리 눈에 보이는 부분 = DOM

- **View (JSON)**
  
    실제 데이터 = JSON

- **View Model (Vue)**
  
  - view를 위한 model
  - view와 연결되어 Action을 주고받는다
  - Model이 변경되면 view model도 변경되고, 바인딩된 view도 변경됨
  - view에서 사용자가 데이터를 변경하면 view model의 데이터가 변경되고 바인딩된 다른 view도 변경됨

# Vue로 코드 작성하기

```jsx
<div id="app">
  <p id="name">내용 : {{ message }}</p>
  <input type="text" v-model="message">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data:{
      message: '안녕하세연',
    },
    methods:{
      print: function(){
        console.log(this.message);
      }
    }
  })
```

- `new Vue()`
  
  - **vue instance**를 **생성**한다
  - 객체를 생성자 함수의 인자로 넣는다

- `el`
  
  - **vue instance**와 **DOM**을 **연결**하는 옵션(View와 Model을 연결)
  
  - HTML id 혹은 class와 연결한다.
    
    ⇒ 연결되지 않은 DOM 외부는 Vue의 영향을 받지 않음

- `data`
  
  - **vue instance**의 **데이터 객체** 혹은 인스턴스 **속성**
  - 데이터 객체는 반드시 **기본 객체** `{}`
  - 정의된 속성은 **interpolation** `{{}}` 을 통해 **view에 렌더링** 가능
  - 객체들의 값은 `**this**.dataName` 형태로 객체 내부에서 접근할 수 있음

- `methods`
  
  - **vue instance**의 **method**들을 **정의**하는 곳
  
  - method를 호출하여 data 변경 가능함(`**this.data**` 방식으로 접근)
  
  - **주의사항! Arrow Function 사용하지 말 것**
    
      메서드 안에 쓴 **일반 함수** : this는 해당 메서드를 호출한 객체로 바인딩됨
    
      **화살표 함수** : this는 함수가 선언될 때 상위 스코프 == window 객체!

## template syntax

> **렌더링 된 DOM**(=브라우저에 의해 보기 좋게 그려질 HTML 코드) 을 기본 Vue instance의 **data**에 **선언적으로 바인딩**(=Vue instance와 DOM을 **연결**)할 수 있는 HTML 기반 template syntax(=**HTML 코드에 직접 작성**할 수 있는 문법 제공)

- v-접두사가 있는 특수 속성에는 **JS 표현식**을 작성해 값을 할당할 수 있음
- 표현식의 값이 변경될 때 반응적으로 DOM에 적용

### v-text

- 가장 기본적인 바인딩
- `{{}}` 와 동일한 역할 (정확히 동일하진 않음)

### v-html

- HTML을 일반 텍스트로 표현함

- 사용자가 입력하거나 제공하는 컨텐츠에는 절대 사용 금지!!! (XSS공격)
  
  ```jsx
  <div id="app">
    <p>이 글씨의 색깔은? <span v-html="rawHTML"></span></p>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        rawHTML: '<span style="color: red;">빨간글씨랍니다</span>'
      }
    })
  </script>
  ```

### v-show

- 표현식에 작성된 값이 true이면 보여주고 false면 보여주지 않음
- display 속성은 **기본 속성**과 **none** ⇒ **요소 자체**는 **DOM**에 **항상 렌더링**됨

### v-if (v-else-if / v-else)

- `v-show` 와 사용 방법은 동일, true이면 보여주고 false면 보여주지 않음
- 값이 **false**면 **DOM에서 사라짐**

### v-for

- `for … in …` 형식으로 작성
- 반복한 데이터 타입에 모두 사용 가능 **(val, idx)**
- v-for 사용 시 반드시 **key 속성을 각 요소에 작성**할 것! (다른 데이터와 구분하기 위해 고유의 키값이 필요하다)

### v-on (`@`)

- addEventListner의 첫번째 인자와 동일한 값들로 구성

- 대기하고 있던 이벤트가 발생하면 **할당된 표현식 실행(data든, methods든…)**

- `@` shorcut 제공! `v-on:keyup.click` **==** `@keyup.click`
  
  ```jsx
  <div id="app">
    <p>아이스크림이 죽었다. 그 이유는?</p>
    <div>
      <button v-on:click="clickBtn">답 보기</button> : 
      <span v-show="isActive">차가와서</span>
    </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        isActive: false,
      },
      methods: {
        clickBtn: function(){
          this.isActive = !this.isActive;
        }
      }
    })
  </script>
  ```

### v-bind

- HTML **기본 속성**에 **Vue data를 연결**한다

- **조건부 바인딩**
  
  - {’class Name’ : ‘조건 표현식’}
  - 삼항 연산자도 가능

- **다중 바인딩**
  
  - [’JS표현식’, ’JS표현식’, …]

- `:` shortcut 제공! `v-bind:class` **==** `:class`
  
  ```jsx
  <div id="app2">
    <a v-bind:href="url">구글로 가기</a>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app2 = new Vue({
      el: '#app2',
      data: {
        url: 'https://www.google.com/'
      }
    })
  </script>
  ```

### v-model

- **Vue instance**와 **DOM**의 **양방향 바인딩**
- **Vue data가 변경**되면 **v-model로 연결**된 사용자 입력 **element에도 적용**됨

## Vue advanced - Vue instance의 options

### computed

- computed 객체에 **정의한 함수**를 페이지가 **최초**로 렌더링 될 때 **호출**하여 **계산**

- 함수의 **종속 대상**의 **변화**에 따라 **계산 여부**가 결정

- 종속 대상이 변하지 않으면 **저장된 값을 반환**, **함수를 재호출하는 것이 아님**
  
  ```jsx
  <div id="app">
    <div v-for="num in oddNums">
      <p>{{ num }}</p>
    </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        nums : [1, 2, 3, 4, 5, 6]
      },
      computed: {
        oddNums: function(){
          return this.nums.filter(num => num%2)
        }
      }
    })
  </script>
  ```

### watch

- 특정 데이터의 변화를 감지한다
  
  1. watch 객체를 정의
  2. 감시할 **대상 data**를 지정
  3. data가 변할 시 **실행할 함수**를 정의
  4. 함수의 첫번째 인자는 **변동 후 data**, 두 번째 인자는 **변동 전 data**

- 실행 함수를 vue method로 대체 가능 | `handler: ‘method이름’`

- Array, Object의 내부 요소 변경을 감지하기 위해선 deep 속성 추가 필요 | `deep: true`
  
  ```jsx
  <div id="app">
    <h1>{{ num }}</h1>
    <button @click="increaseNum">누르면 증가함</button>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        num: 0
      },
      methods: {
        increaseNum: function(){
          this.num++;
        }
      },
      watch: {
        num: function(newVal, oldVal){
          console.log(newVal, oldVal);
        }
      }
    })
  </script>
  ```

### filters

- 텍스트 형식화를 적용할 수 있는 필터, **함수를 정의**
- interpolation(`{{}}`) 혹은 `v-bind`를 이용할 때 사용 가능
- 자바스크립트 표현식 마지막에 파이프 `|` 와 함께 추가되어야 함