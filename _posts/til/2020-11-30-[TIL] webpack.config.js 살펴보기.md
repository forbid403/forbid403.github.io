---
title: "[TIL] webpack.config.js 살펴보기"
date: 2020-11-30
categories: til
---

React 개발 환경 설정 시 CRA로만 진행했었다. 멘토님께서 CRA는 불필요한 것들이 많으니 직접 customizing을 해 가는게 좋다고 해주셨다. React 공식 documentation에 나와있는 해당 [article](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)을 보며 React 개발 환경을 기초부터 진행 해 봤다. 이 과정에서 webpack.config.js에 있는 환경변수들의 의미를 살필 수 있었다.


### webpack.config.js
```js
const path = require("path");
const webpack = require("webpack");

module.exports = {
    // Where to start bundling
    // 번들링을 시작하는 entry
    entry: "./src/index.js", 
    mode: "development",
    // Define how exported js modules are transformed (defined in rules list)
    // exported된 js 모듈들을 어떻게 변환시킬지 정의한다. (rules 리스트에 작성)
    module: {
        rules: [
            {
                // conditions to match file
                test: /\.(js|jsx)$/,
                // match anything outside of node_modules and bower_components
                // node_modules와 bower_components 이외의 파일들을 matching 한다
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    
    // specify which extensions Webpack will resolve
    // 웹팩이 어떤 extension들을 resolve 할 것인지 정의
    resolve: { extensions: ["*", ".js", ".jsx"] },


    // ** notice **
    // output.publicPath and devServer.publicPath are different!
    // output.publicPath와 devServer.publicPath는 다르다

    // Where to put bundled code
    // 번들링된 코드를 어디에 둘 것인지 정의
    output: {
        // what directory bundle should go in
        // webpack-dev-server serve files from here
        // bundle된 것이 어디에 저장 될 것인지 정의
        // webpack-dev-server가 여기에서 파일들을 serve한다.
        path: path.resolve(__dirname, "dist/"),
        // specifies the public URL of the directory for dev-server
        // if thie set is wrong, will retrun 404
        // dev-server이 접근할 public URL을 정의한다.
        // 잘못 정의할 시 404 코드를 리턴한다.
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    
    // For dev server
    devServer: {
        // location where the static files exist
        // static 파일들이 어디에 위치해야 하는지
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        // tell server where our bundled code is located
        // Dev server에게 번들링된 코드라 어디에 존재하는지 알려줌
        publicPath: "http://localhost:3000/dist/",
        // Hot Module Replacement
        // module will updated at runtime without fully refreshing
        // HMR을 이용할 시 refresh하지 않고도 module이 업데이트 된다.
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

```

Article을 보면 좀 더 풀어서 설명되어 있으니 참고하길 바란다.