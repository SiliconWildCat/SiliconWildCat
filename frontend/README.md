# nextjs-boilerplate

- 참고 블로그

'https://qnrjs42.github.io/react/redux/next_redux_toolkit/#pages_apptsx'
'https://xploitdev.com/dev/next-redux-toolkit/'

## 구성

- nextjs + typescript + redux-toolkit + styled-components

## 최초 세팅

> next 설정

    yarn create next-app .

> typescript 설정

    touch ./next-env.d.ts
    yarn add --dev typescript @types/react @types/node

## styled-components

> `.babelrc`

    touch .babelrc

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

> `webpack`

    code ./next.config.js

## redux-toolkit

- hydrate : HYDRATE는 next에서 서버사이드 렌더링을 할때 서버의 스토어와 클라이언트의 스토어를 합쳐주는 역할을 합니다. HYDRATE 액션이 호출될 때 처리하도록 구현합니다.
