# Electron-Study

- 웹 서비스 상의 어플리케이션보다 운영체제 레벨의 접근 및 보안 규제에서 `자유롭다.`

- Node.js + Chrominum (런타임은 크로미엄 브라우저로 진행되므로 크로스 브라우징 이슈로부터 `자유롭다.`)

## Installation

```
    npm install electron electron-builder webpack webpack-cli webpack-dev-server -D
```

```
    npm install electron-is-dev concurrently wait-on cross-env -D
```

```
    npm install babel-loader @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react -D
```

```
    npm install html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin style-loader css-loader node-sass sass-loader postcss-loader -D
```

```
    npm install react react-dom redux react-redux redux-saga redux-thunk react-router-dom styled-components --save
```

```
    npm install whatever module you need.
```

## Commands

1. npm install

   > package.json에 기록된 모듈을 전부 설치합니다.

2. npm run dev

   > Hot Module Replacement가 적용된 Webpack-Dev-Server를 실행하여 클라이언트 리액트 앱 개발을 진행할 수 있습니다.

3. npm run build

   > 개발된 내용을 dist/ 하위 경로에 번들링 하여 생산합니다.

4. npm run start

   > dist/index.html 파일을 읽어 일렉트론이 앱의 GUI로 활용할 수 있게 합니다.

## 일렉트론의 구조
