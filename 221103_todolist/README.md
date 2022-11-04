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


