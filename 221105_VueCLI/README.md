# Vue CLI

> Vue 개발을 위한 표준 도구

**프로젝트의 구성**을 도와주는 역할

node.js → vue 프로젝트를 생성 (서버 사이드)

### Vue CLI 프로젝트 생성

1. vue CLI 설치(최초 1회) `npm install -g @vue/cli`

2. 프로젝트 생성 `**vue create {프로젝트 이름}**`
   
   vscode의 terminal에서 진행하는 것을 추천, version을 선택하기 쉽기 때문.

3. 디렉토리 이동 `cd vue-cli`

4. **서버 실행 `npm run serve`**

### Git에 올릴 땐?

1. **git push**
   
   자동으로 `git init` 이 되고, `.gitignore` 파일이 생성된다. 따라서 그냥 push하면 됨

2. **git pull**
   
   node_modules가 .gitignore에 들어가서 올라가지가 않음!
   
   하지만 package.json에 필요한 모듈 정보가 다 들어있기 때문에 그냥 `npm install` 하면 됨

# Vue CLI 프로젝트 구조

## node_modules

- python의 venv와 비슷한 역, **모듈**이 들어있음
- 모듈은 서로 **의존성**이 강해서 패키지를 함부로 지우면 안된다
- 모듈이 매우 많이 들어있어서 용량이 큼 → 원격 저장소에 올리지 않음, .gitignore

### Bable

- 자바스크립트의 **최신 문법**이 **브라우저 버전 별**로 **동작하지 않는 상황** 발생
- 자바스크립트 **ES6+**코드를 **구버전**으로 **번역/변환**해주는 도구

### 모듈의 의존성

- 개발하는 애플리케이션이 커지면서 파일 하나에 모든 기능을 담기 어려워짐
- 파일을 **기능 단위로 분리**해서 관리, 분리된 파일이 바로 **모듈**
- 모듈의 수 증가 → 모듈간의 의존성이 깊어짐 → 어느 모듈의 문제인지 파악하기 어려워짐

⇒ **번들러** 등장

**번들러**

- 모듈 의존성 문제를 해결해주는 작업이 **bundling**
- 이러한 일을 해주는 도구가 **bundler**
- 모듈들을 하나로 묶어줌, 번들링된 결과물은 개별 모듈의 실행 순서에 영향을 받지 않고 동작

**webpack**

- 다양한 bundler 중 하나
- 모듈 간의 **의존성 문제**를 **해결**하기 위한 도구
- 프로젝트에 필요한 모든 모듈을 매핑, 내부적으로 종속성 그래프를 빌드

## package-lock.json

- python의 `requirements.txt` 역할
- node_modules에 **설치되는 모듈**과 관련된 모든 **의존성**을 **설정** 및 **관리**
- 협업 및 배포 환경에서 **정확히 동일한 종속성**을 설치하도록 보장하는 표현
- 사용할 패키지의 **버전을 고정**, 개발 과정 간의 의존성 패키지 충돌 방지

## public, src

- 우리가 진짜 건드는 폴더

### public/index.html

- Vue 앱의 뼈대가 되는 html파일
- Vue 앱과 연결될 요소가 있음

### src/

- `assets` : 정적 파일을 저장하는 디렉토리
- `components` : 하위 컴포넌트들이 위치
- `App.vue` : 최상위 컴포넌트, public.html과 연결됨
- `main.js` : webpack이 빌드를 시작할 때 가장 먼저 불러오는 entry point **index.html**과 **App.vue**를 **연결**시키는 작업이 이루어지는 곳

# SFC

> **Single File Component**
> 
> 하나의 **.vue 파일**이 하나의 **Vue instance**이고, 하나의 **컴포넌트**
> 
> Vue instance에서 **HTML, CSS, javascript** 코드를 **한 번에 관리**함(기능 단위로 나눴으니까!)

## Component

- UI를 독립적이고 **재사용 가능한 조각**들로 나눈 것(=**기능별**로 **분화**한 **코드 조각**)
- 재사용과 유지보수 → 확장 가능, 독립적
- **이름**이 있는 **재사용** 가능한 **Vue Instance**, **`new Vue()`로 만든 인스턴스**

📢 컴포넌트들이 **tree구조, root**에 해당하는 것이 **App.vue**

       App.vue가 **index.html**과 연결된다, 결국 이 **index.html만 렌더링**하는 것임

# Vue CLI 실습

## Component 생성하기

1. `src/components/` 내부에 **vue파일 생성**
   
   이 때, vue component는 PascalCase로 작성할 것

2. **script**에 **이름 등록**
   
   `name: ‘파일 이름’`

3. **template**에 **요소 추가**
   
   이때, 반드시 **root 태그**가 한 개만 존재해야 한다.

```jsx
<template>
  <!-- 템플릿에 요소 추가 -->
  <div>
    <h1>이것은 MyComponent입니다.</h1>
  </div>
</template>

<script>
export default {
  // script에 이름 등록
  name: 'MyComponent'
}
</script>

<style>
</style>
```

## Component 등록하기

1. **불러오기**
   
   상위 component의 script 내부에 **import**해야 함.
   
   `import {instance name} from {위치}`
   
   - 상대경로 `.` 을 절대경로 `@` 로 적을 수 있음(shortcut)
   - 파일 이름의 `.vue` 생략 가능

2. **등록**하기

3. 보여주기
   
   태그의 이름처럼 사용할 수 있음

```jsx
<template>
  <div id="app">
      <!-- 컴포넌트 보여주기 -->
    <MyComponent />
  </div>
</template>

<script>
// 아래 둘은 같은 내용이다
import MyComponent from './components/MyComponent.vue';
import MyComponent from '@/components/MyComponent';

export default {
  name: 'App',
  components: {
        // 컴포넌트 등록하기
    MyComponent,
  }
}
</script>

<style>
</style>
```

## Component들의 데이터 교환

component들은 독립적인데 **어떻게 같은 데이터**를 공유하는가?

⇒ 컴포넌트들끼리 데이터를 주고받자!

- **부모 → 자식** : `pass props`
- **자식 → 부모** : `emit event`

### pass props

- 요소의 **속성(property)**을 사용하여 데이터 전달, 요소에 속성을 작성하듯이 사용 가능

- 자식은 **props 옵션을 사용**하여 수신하는 **props를 명시적으로 선언**해야 한다
1. **정적인 데이터, static props**
   
   - `prop-data-name=”value”` 형태로 데이터 전달(**kebab-case**)
   - 자식은 **camelCase**로 props를 전달받는다, **type을 명시**해야 한다
   
   ```jsx
   // 부모 vue : 속성을 작성하듯 데이터를 작성한다.
   <template>
    <div id="myComponent">
      <MyComponentChild parent-static-data="부모->자식 정적데이터" />
    </div>
   </template>
   
   // 자식 vue : props에 등록 후 사용
   <template>
    <div id="myComponentChild">
      <p>{{ parentStaticData }}</p>
    </div>
   </template>
   
   <script>
   export default {
    props: {
      parentStaticData: String,
    }
   }
   </script>
   ```

2. **동적인 데이터, dynamic props**
   
   - `v-bind directive` 를 사용해 데이터를 동적으로 바인딩
   
   ```jsx
   // 부모 vue : 데이터를 v-bind(**:**)를 이용해 전달
   <template>
    <div id="myComponent">
      <MyComponentChild :parent-dynamic-data="parentDynamicData" />
    </div>
   </template>
   
   <script>
   export default {
      data(){
        return{
          parentDynamicData: "부모->자식 동적데이터"
        }
      }
   }
   </script>
   
   // 자식 vue : props에 등록 후 사용
   <template>
    <div id="myComponentChild">
      <p>동적 데이터 : {{ parentDynamicData }}</p>
    </div>
   </template>
   
   <script>
   export default {
    props: {
      parentDynamicData: String,
    }
   }
   </script>
   ```

**참조) data를 왜 return 안에 넣는거야?**

⇒ 각 vue 인스턴스는 **같은 data 객체를 공유**하므로, **새로운 data 객체를 반환**하여 사용해야 한다.

### emit event

- **이벤트를 발생**시키자!!
  
  ⇒ 자식의 **데이터**를 **이벤트 리스너**의 **콜백함수의 인자**로 전달
  
  ⇒ 상위 컴포넌트는 해당 이벤트를 통해 **데이터를 받음**

- `$emit`
  
  - `$emit 메서드`를 통해 부모 컴포넌트에 **이벤트를 발생시킨다**
  - `$emit('event-name')` 형식으로 사용
  - 부모 컴포넌트에 `event-name` 이벤트가 발생했다는 것을 알림
1. **정적인 데이터, static data**
   
   - **자식 컴포넌트**의 methods에서 `$emit('이벤트 이름', '데이터')` 를 통해 **이벤트를 발생**시킨다.
   - 부모 컴포넌트에서 **해당하는 이름의 이벤트**가 발생하면( `v-on` ) **메서드를 실행**한다
   - 메서드의 매개변수로 **데이터**를 받는다.
   
   ```javascript
   // 자식 vue : 이벤트 발생시킴
   <template>
    <div id="myComponentChild">
     <button @click="childToParent">부모에게 이벤트 발생시키기</button>
    </div>
   </template>
   
   <script>
   export default {
    methods: {
      childToParent(){
        this.$emit('child-to-parent', '자식->부모 정적 데이터');
      }
    }
   }
   </script>
   
   // 부모 vue : 이벤트가 발생하면 데이터를 가지고 메서드 실행
   <template>
    <div id="myComponent">
     <MyComponentChild @child-to-parent="parentGetStaticData" />
    </div>
   </template>
   
   <script>
   export default {
    methods: {
      parentGetStaticData(data){
        const staticData = document.createElement('div');
        staticData.innerText = data;
        document.querySelector('#myComponent').appendChild(staticData);
      }
    }
   }
   </script>
   ```

2. **동적인 데이터, dynamic props**
   
   - 위의 과정과 동일, 데이터를 동적으로 관리할 뿐
   
   ```javascript
   // 자식 vue : 이벤트 발생시킴
   <template>
    <div id="myComponentChild">
     <button @click="childToParentDynamic">부모에게 동적 이벤트 발생시키기</button>
    </div>
   </template>
   
   <script>
   export default {
    data(){
      return{
        num: 0,
      }
    },
    methods: {
      childToParentDynamic(){
        this.$emit('child-to-parent-dynamic', this.num++);
      }
    }
   }
   </script>
   
   // 부모 vue : 이벤트가 발생하면 데이터를 가지고 메서드 실행
   <template>
    <div id="myComponent">
     <MyComponentChild @child-to-parent-dynamic="parentGetDynamicData" />
    </div>
   </template>
   
   <script>
   export default {
    methods: {
      parentGetDynamicData(data){
        const dynamicData = document.createElement('div');
        dynamicData.innerText = data;
        document.querySelector('#myComponent').appendChild(dynamicData);
      }
    }
   }
   </script>
   ```
