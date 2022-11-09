# State Management

- 컴포넌트는 독립적, <u>각각의 상태(data)</u>를 가진다.
- 컴포넌트를 조합해 **하나의 App**을 만든다, 따라서 **컴포넌트**들이 <u>모두 같은 상태(data)</u>를 유지해야 함

### 현재의 pass props & emit event 의 문제점?!

- 컴포넌트가 깊어지면 props와 emit을 통해 데이터를 전달하는 과정이 복잡해진다
- 유지보수 비용이 높아짐

⇒ **중앙 저장소**에 데이터를 모아서 **상태를 관리**하자 == `Vuex`

**중앙 저장소를 이용하면…**

1. 컴포넌트의 계층에 상관없이 중앙 저장소에 접근해 데이터를 얻거나 변경 가능!
2. 규모가 크거나 컴포넌트 중첩이 깊은 프로젝트의 관리가 매우 편리

# Vuex

> **state management pattern + library**
> 
> **중앙 저장소**를 통해 **상태 관리**를 할 수 있도록 하는 **라이브러리**

프로젝트 생성 시 vuex를 add해야 함! 플러그인을 추가하는 방식 `vue add vuex`

`src/store/index.js` == **중앙 저장소의 역할**

## State

- vue instance의 **data**에 해당함
- 중앙에서 관리하는 **모든 상태 정보**
- 개별 component는 state에서 데이터를 가져와서 사용함
- `$store.state` 로 state 데이터에 접근함(script 내부에서는 `this.$store.state` )

## Mutations

- 실제로 **state를 변경**하는 유일한 방법
- mutations에서 호출되는 핸들러 함수는 **반드시 동기적**
  - 비동기적인 핸들러 함수로 state를 변경하면 **state의 변화의 시기를 특정할 수 없기 때문**
- 첫 번째 인자로 `state` , 두 번째 인자로 `payload`
- component 혹은 actions에서 `commit('mutations method', payload)` 메서드로 호출

## Actions

- mutations와 비슷하지만 **비동기 작업**을 포함할 수 있음(**api와 통신**하는 역할)

- state를 직접 변경하지 않고 **commit() 메서드**로 **mutations를 호출**해서 **state를 변경**

- 첫 번째 인자는 `context객체` , 두 번째 인자로 `payload`
  
  context 객체를 통해 `index.js`의 모든 속성값에 접근할 수 있음
  
  ⇒ state를 직접 변경할 순 있음… 그래도 굳이..?

- component에서 `dispatch('actions method', payload)` 메서드에 의해 호출됨

## Getters

- state를 활용하여 **계산된 값**을 얻고자 할 때 사용함
- getters의 결과는 캐시되며, 종속된 값이 변경된 경우에만 재계산
- 첫 번째 인자로 `state`, 두 번째 인자로 `getter` (이미 계산된 값을 또 계산할 때)

모든 데이터를 다 vuex 에 넣진 말고….. 적절히 사용하세요

간단한건 `pass props` , `emit event` 를 사용해 관리해도 됨!

♻️ **데이터의 흐름**

1. 데이터를 **조작**하고 싶다!
   
   **component ⇒ (actions) ⇒ mutations ⇒ state**
   
   ```jsx
   // 1. App.vue에서 actions 호출
   this.$store.dispatch('changeMessage', newMessage)
   
   // 2. index.js에서 mutations 호출
   changeMessage(context, newMessage){
    context.commit('CHANGE_MESSAGE', newMessage);
   }
   
   // 3. actions에서 state 변경
   CHANGE_MESSAGE(state, newMessage){
    state.message = newMessage;
   }
   
   // 4. 변경된 값을 component에서 받음
   message(){
    return this.$store.state.message
   }
   ```

2. 데이터를 **사용**하고 싶어!!
   
   **state ⇒ (getters) ⇒ component**
   
   ```jsx
   // component에서 데이터 가져오기
   computed: {
    message(){
      return this.$store.state.message
    },
    messageLength(){
      return this.$store.getters.messageLength;
    }
   }
   
   // getters에서 state의 값 계산
   getters: {
    messageLength(state{, getter}){
      return state.message.length;
    }
   }
   ```

# Lifecycle Hooks

- 각 Vue 인스턴스는 **생성과 소멸**의 과정 중 **단계별** 초기화 과정을 거친다.
- 각 단계가 트리거가 되어 특정 로직을 실행할 수 있음
  (생애의 흐름에 핸들러를 달아놓는 느낌!?)
- `beforeCreate` , `created` , `beforeMount` , `mount` , `beforeUpdate` , `updated` , `beforeDestroy` , `destroyed`

### created

- **data, computed** 등의 설정이 완료된 상태
- 서버에서 받은 **데이터**를 vue instance의 **data에 할당하는 로직**을 구현하기 적합함
- **최초**로 **페이지**가 **실행**될 때 사용하기 좋은 Hooks
- 아직 mount되지는 않음(**=DOM**과 **연결되지 않음**) → 요소에 접근할 수 없음!

### mounted

- vue instance가 요소에 **mount**된 후 호출됨(=**DOM**과 **연결**되었다!)
- mount된 **요소**를 **조작**할 수 있다.

### updated

- 데이터가 변경되어 DOM에 변화를 줄 때 호출됨

## dog API를 이용한 lifecycle hooks

```jsx
methods:{
  getDogImage() {
    const dogImageSearchURL = '<https://dog.ceo/api/breeds/image/random>'
    console.log('get dog image method 실행!');

    axios({
      method: 'get',
      url: dogImageSearchURL
    })
      .then((response) => {
        const imgSrc = response.data.message
        this.imgSrc = imgSrc
      })
      .then(()=>{
        console.log('메서드 실행 완료!');
      })
      .catch((error) => {
        console.log(error)
      })
  }
},
created(){
  console.log('Dog component created!');
  this.getDogImage();
},
mounted(){
  console.log('Dog component mounted!');
},
updated(){
  console.log('Dog component updated!');
}
```

### **실행 결과**

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/094632b2-37b1-4799-bc01-4b27c575e8d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T073234Z&X-Amz-Expires=86400&X-Amz-Signature=47e229998e2d825d9162ba480bcb6ce0fcd1668d6fb78025182cab35f8766b73&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

### 인스턴스의 흐름

1. 인스턴스 생성( `created()` )
   
   `getDogImage()` 메서드 실행

2. `getDogImage()` 실행
   
   axios부터는 비동기이기 때문에 응답을 기다릴 동안 나머지 과정 실행

3. `mounted()` 가 먼저 됐음! 
   
   동시에 axios에서는 응답을 받아 메서드의 `data.imgSrc`를 변경했음
   
   → `updated()` 실행

4. axios 종료!
