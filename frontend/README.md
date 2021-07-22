# Frontend

## 목차

- [Frontend](#frontend)
  - [목차](#목차)
  - [Usage Library/Framework](#usage-libraryframework)
      - [Next.js](#nextjs)
    - [styled-components](#styled-components)
    - [Typescript](#typescript)
    - [Redux-toolkit](#redux-toolkit)
    - [Redux-Saga](#redux-saga)
  - [구조](#구조)
    - [components](#components)
    - [hooks](#hooks)
    - [interface](#interface)
    - [lib](#lib)
    - [modules](#modules)
    - [pages](#pages)

## Usage Library/Framework

#### Next.js

    - 서버 사이드 렌더링 도입
    - 사용자 이탈율과 페이지 렌더링 속도 개선
    - 크롤링의 정보 수집율 up
    - 서버에서 받아올 이미지(앨범아트)에 대한 `prerender`

### styled-components

- `css-in-js` 장점을 극대화

### Typescript

- 팀원과의 협업 코드 이해도 up

### Redux-toolkit

- `createSlice`를 이용한 쉬운 코드 작성
- `dev` 모드에서의 `devTools`로 직관적인 로직 확인

### Redux-Saga

- `generator` 문법을 이용한 직관적인 `success` `fail` 구성

## 구조

### components

- `styled-components`를 이용한 `css-in-js`로 관리 파일 down
- `hook`을 이용한 효과적인 로직 분리

### hooks

- 반복적인 코드를 줄이기 위한 사용자 편의 함수들 작성

### interface

- `Typescript` 사용 -> `interface`들 한곳에 모아서 관리하게 편하게

### lib

- 사용자 편의 기능들
- `api` -> `baseURL` -> `axios`를 효과적으로 사용

### modules

- `redux` 관련 코드들 집합
- `index.js` 에서 모든 `rootReducer`, `rootReducer`를 이용한 `reducer`, `thunk` 함수들 집합

### pages

- `Next.js` 도입으로 `Framework` 성격을 지니므로 규칙 적용

```bash
📦frontend
┣ 📂.vscode
┃ ┗ 📜settings.json
┣ 📂components
┃ ┣ 📜Counter.tsx
┃ ┗ 📜Tts.tsx
┣ 📂hooks
┃ ┣ 📜createRequestSaga.ts
┃ ┗ 📜useSelector.tsx
┣ 📂interface
┃ ┣ 📜counter.ts
┃ ┣ 📜loading.ts
┃ ┗ 📜tts.ts
┣ 📂lib
┃ ┗ 📂api
┃ ┃ ┣ 📜api.ts
┃ ┃ ┗ 📜client.ts
┣ 📂modules
┃ ┣ 📜counter.ts
┃ ┣ 📜index.ts
┃ ┣ 📜loading.ts
┃ ┗ 📜tts.ts
┣ 📂pages
┃ ┣ 📜_app.tsx
┃ ┣ 📜_document.tsx
┃ ┗ 📜index.tsx
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┗ 📜vercel.svg
┣ 📂styles
┣ 📜.DS_Store
┣ 📜.babelrc
┣ 📜.eslintrc
┣ 📜.gitignore
┣ 📜Dockerfile
┣ 📜README.md
┣ 📜next-env.d.ts
┣ 📜next.config.js
┣ 📜package.json
┣ 📜store.ts
┣ 📜tsconfig.json
┗ 📜yarn.lock
```
