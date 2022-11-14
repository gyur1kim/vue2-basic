# Vue Router

## Routing

- **라우팅**
  
  네트워크 : 경로를 선택하는 프로세스
  
  **웹 서비스** : 유저가 방문한 URL에 대해 적절한 결과를 응답하는 것

- SSR(Server Side Rendering)
  
  **서버**가 모든 라우팅을 통제, URL로 요청이 들어오면 서버가 응답으로 완성된 HTML 제공

- CSR(Client Side Rendering)
  
  - 서버는 하나의 index.html만 제공(SPA) → **하나의 URL만 존재**함
  - 모든 동작은 JavaScript 코드를 활용, 데이터가 필요하면 AJAX 요청을 보낼 수 있는 도구(axios 등)를 사용하여 데이터를 가져옴
  - 유저의 사용성 관점에서는 Routing이 필요함!!!
    - 뒤로가기 불가능
    - 새로고침하면 처음으로 돌아간다
    - 공유하면 항상 처음 화면만 보인다 등…

## Vue Router

- SPA 상에서 라우팅을 쉽게 개발할 수 있는 기능을 제공!

- **routes**에 **컴포넌트**를 **매핑**, **어떤 URL**에서 **렌더링할지** 알려줌

- ⇒ SPA를 MPA처럼 URL을 이동하면서 사용 가능

- `vue add router`
  
  **history mode**
  
  새로고침 없이 URL 이동 기록을 남길 수 있음
  안쓰면 hash 모드를 통해 url을 구분한다궁

### router 폴더

- `index.js`
- 주소에 따른 **컴포넌트 렌더링**이 **매핑**되어있음(장고의 urls.py랑 비슷!)

### views 폴더

- **route**와 **직접적으로 연결**되는 컴포넌트를 작성
- route와 직접적으로 연결되지 않으면? 기존의 components에 작성!
- 컴포넌트의 이름 뒤에 view를 관습적으로 붙인다.

### `router-link`

- a태그와 비슷한 기능 → URL을 이동시킴
- **routes**에 등록된 **컴포넌트**와 **매핑**됨
- **목표 경로**는 **to 속성**으로 지정됨

### `router-view`

- 주어진 **URL**에 대해 **일치하는 컴포넌트**를 **렌더링**
- = 실제 component가 DOM에 부착되어 보이는 자리를 의미

## 주소를 이동하는 2가지 방법

1. **선언적 방식** 내비게이션
   
   - to 속성으로 주소를 전달하기
   - url의 name 을 사용할 수 있음
     - to 속성으로 직접 주소를 작성해도 되고
     - 이름으로 작성해도 됨, 객체로 넣기 `{name: ‘내가 지정한 이름’}` ⇒ **v-bind** 까먹지 말라구
   
   ```jsx
   <router-link :to="{ name: 'home' }">Home</router-link> |
   ```

2. **프로그래밍 방식** 네비게이션
   
   - vue 인스턴스 내부에서 라우터 인스턴스에 `$router` 로 접근할 수 있다
   - `this.$router.push` 를 사용
     - **history stack**에 이동할 URL을 넣는 방식
   
   ```jsx
   this.$router.push({ name: 'home' })
   ```

### Dynamic Route Matching

> **동적 인자 전달**
> 
> url의 **특정 값**을 **변수**처럼 사용할 수 있음 == Django의 variable routing `<int:pk>`

```jsx
path: '/hello/:userName',
```

- **콜론**으로 동적 인자를 전달

- 동적 인자는 `this.$route.params.userName` 로 접근 가능

- `router-link` 를 작성할 때
  
  ```jsx
  <router-link :to="{ name: 'hello', params:{userName:'규리'}}">Hello</router-link>
  ```

- 이렇게 **params에** 객체로 동적 인자를 넘긴다, 인자 이름 맞춰서 넣기

```jsx
<input 
  type="text"
  v-model.trim="inputData"
  @keyup.enter="goToHello"
>

goToHello(){
  if(this.inputData){
    this.$router.push({ name:'hello', params:{userName: this.inputData} })
  }
}

data(){
  return {
    inputData: null,
  }
}
```

## 라우트에 컴포넌트 등록하는 방법

1. 직접 component 작성

2. 화살표 함수를 이용해 컴포넌트 `import()` == 지연 로딩**(lazy loading)**
   
   모든 파일을 한번에 로드하려고 하면 시간이 매우 오래 걸림!
   
   당장 사용하지 않을 컴포넌트는 **먼저 로드하지 말자!**
   
   ```jsx
   component: () => import('../views/AboutView.vue')
   ```

# Navigation Guard

- 사용자가 url로 redirect하거나 **접근하는 것을 막는** 방법!
- **전역 가드** : 애플리케이션 전역에서 동작
- **라우터 가드** : 특정 URL에서만 동작
- **컴포넌트 가드** : 라우터 컴포넌트 안에 정의

## 전역 가드

- 다른 url 주소로 이동할 때 **항상 실행(전체 route)**

- `router/index.js` 폴더 내부 가장 아래 작성, `router.beforeEach()`

- `beforeEach` 메서드의 인자 - `to` , `from` , `next`
  
  **to -**내가 갈 URL 정보가 담긴 Route 객체
  
  **from** - 현재 URL 정보가 담긴 Route 객체
  
  **next()** - 지정한 URL로 이동하기 위해 호출하는 함수 `next({ name: '이동할 페이지 이름' })` , **인자가 없으면** **to로 이동**함
  반드시 한 번만 호출하고, **next()를 호출**해야 **화면이 전환됨**

## 라우터 가드

- **특정 라우트**에 대해서만 가드를 설정
- `router/index.js` 의 routes에서 해당 route에 작성함 , `beforeEnter()`
- 라우트에 **진입**했을 때 실행됨(동일한 컴포넌트 내에서 값이 변경되는 것은 실행X, 다른 경로에서 탐색할 때**만** 실행)
- `beforeEnter` 메서드의 인자는 `to` , `from` , `next`

## 컴포넌트 가드

- 특정 컴포넌트 내에서 가드를 지정하고 싶을 때 사용
- 해당 컴포넌트 내에 `beforeRouteUpdated()` 작성
- 해당 컴포넌트를 **렌더링하는 경로가 변경될 때** 실행
- params는 변하는데 컴포넌트는 그대로여서 **렌더링을 못해줌**



# 404 Not Found

> 사용자가 **요청한 리소스**가 **존재하지 않을 때** 응답코드 **404**

### 요청하지 않는 리소스가 존재하는 경우

1. 기존의 경로가 아닌 **모든 경로**에 대해서 **404 page**로 **redirect** 시키기!
   
   - 기존에 명시한 경로가 아닌 모든 경로가 404 page로 redirect됨
   - routes의 **최하단부**에 작성할 것!
   
   ```jsx
   const routes = [
      ...
      {
          path: '/404',
          name: 'NotFound404',
          component: NotFound404,
      }
      {
          path: '*',
          redirect: '/404',
      }
   ]
   ```

2. **형식은 유효**하지만 **리소스를 찾을 수 없는 경우**
   
   - 데이터가 없음을 명시하고 404 page로 이동해야 함!
   
   - **axios** : `catch()` 에서 404 페이지로 이동시키기!
     
     ```jsx
     catch((error)=>{
        this.$router.push('/404');
     })
     ```
