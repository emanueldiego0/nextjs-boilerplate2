(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{476:function(module,exports,__webpack_require__){__webpack_require__(477),__webpack_require__(635),__webpack_require__(636),__webpack_require__(842),__webpack_require__(843),__webpack_require__(851),__webpack_require__(852),__webpack_require__(847),__webpack_require__(844),__webpack_require__(853),__webpack_require__(845),__webpack_require__(846),__webpack_require__(848),module.exports=__webpack_require__(840)},544:function(module,exports){},636:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(338)},840:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(338).configure)([__webpack_require__(841)],module,!1)}).call(this,__webpack_require__(192)(module))},841:function(module,exports,__webpack_require__){var map={"./Button/stories.tsx":849,"./Main/stories.tsx":850};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=841},848:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(49),__webpack_require__(423),__webpack_require__(835),__webpack_require__(46),__webpack_require__(836),__webpack_require__(837),__webpack_require__(422);var client_api=__webpack_require__(860),esm=__webpack_require__(4),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(72),global=Object(styled_components_browser_esm.a)(["*{margin:0px;padding:0px;box-sizing:border-box;}html{font-size:62.5%;}html,body,#__next{height:100%;}body{font-family:--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]),jsx_runtime=__webpack_require__(33),parameters=(react_default.a.createElement,{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}),decorators=[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(global,{}),Object(jsx_runtime.jsx)(Story,{})]})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},849:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return stories_Basic}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(13),__webpack_require__(72)),Container=styled_components_browser_esm.b.button.withConfig({displayName:"styles__Container",componentId:"sc-1uhrap9-0"})(["background-color:",";min-width:100px;height:40px;display:flex;padding:0px 20px;justify-content:center;align-items:center;border-radius:4px;border-width:0px;cursor:pointer;border-color:",";border-width:",";border-style:solid;filter:transition 0.2s;&:hover{filter:brightness(0.9);}div{display:flex;justify-content:center;align-items:center;margin-right:",";margin-left:",";}"],(function(props){return null!=props.background?props.background:"#fff"}),(function(props){return null!=props.outlineColor?props.outlineColor:"#fff"}),(function(props){return props.outline&&"1px"}),(function(props){return"left"==props.iconPosition?"10px":0}),(function(props){return"right"==props.iconPosition?"10px":0})),Title=(styled_components_browser_esm.b.div.withConfig({displayName:"styles__IconContainer",componentId:"sc-1uhrap9-1"})([""]),styled_components_browser_esm.b.p.withConfig({displayName:"styles__Title",componentId:"sc-1uhrap9-2"})(["color:",";;"],(function(props){return null!=props.color?props.color:"#fff"}))),index_esm=__webpack_require__(291),jsx_runtime=__webpack_require__(33);react_default.a.createElement;function Button(_ref){var background=_ref.background,contentColor=_ref.contentColor,title=_ref.title,hasIcon=_ref.hasIcon,iconPosition=_ref.iconPosition,outline=_ref.outline;return Object(jsx_runtime.jsxs)(Container,{background:background,iconPosition:iconPosition,outline:outline,outlineColor:contentColor,children:[hasIcon&&"left"===iconPosition&&Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)(index_esm.a,{color:contentColor,size:16})}),Object(jsx_runtime.jsx)(Title,{color:contentColor,children:title}),hasIcon&&"right"===iconPosition&&Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)(index_esm.a,{color:contentColor,size:16})})]})}Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"string"}},contentColor:{defaultValue:null,description:"",name:"contentColor",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!0,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!0,type:{name:"string"}},outline:{defaultValue:null,description:"",name:"outline",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Button",component:Button,args:{title:"Title",background:"#e9ad07",contentColor:"#fff",hasIcon:!0,iconPosition:"left"}};var stories_Basic=function Basic(args){return Object(jsx_runtime.jsx)(Button,Object.assign({},args))};stories_Basic.displayName="Basic"},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return stories_Basic})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return stories_Secondary}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(13),__webpack_require__(5),__webpack_require__(8),__webpack_require__(72)),Wrapper=styled_components_browser_esm.b.main.withConfig({displayName:"styles__Wrapper",componentId:"sc-dzx1ao-0"})(["background-color:#06092b;color:#fff;width:100%;height:100%;text-align:center;align-items:center;justify-content:center;display:flex;flex-direction:column;padding:3rem;"]),Logo=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Logo",componentId:"sc-dzx1ao-1"})(["width:25rem;margin-bottom:2rem;"]),Title=styled_components_browser_esm.b.h1.withConfig({displayName:"styles__Title",componentId:"sc-dzx1ao-2"})(["font-size:2.5rem;"]),Description=styled_components_browser_esm.b.h2.withConfig({displayName:"styles__Description",componentId:"sc-dzx1ao-3"})(["font-size:2rem;font-weight:400;"]),Illustration=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Illustration",componentId:"sc-dzx1ao-4"})(["margin-top:3rem;width:min(30rem,100%);"]),jsx_runtime=__webpack_require__(33);react_default.a.createElement;function Main(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"React Avançado":_ref$title,_ref$description=_ref.description,description=void 0===_ref$description?"Typescript, ReactJS, NextJS e Styled Components":_ref$description;return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)(Logo,{src:"/img/logo.svg",alt:"logo"}),Object(jsx_runtime.jsx)(Title,{children:title}),Object(jsx_runtime.jsx)(Description,{children:description}),Object(jsx_runtime.jsx)(Illustration,{src:"/img/hero-illustration.svg",alt:"hero"})]})}Main.displayName="Main";try{Main.displayName="Main",Main.__docgenInfo={description:"",displayName:"Main",props:{title:{defaultValue:{value:"React Avançado"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"Typescript, ReactJS, NextJS e Styled Components"},description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Main/index.tsx#Main"]={docgenInfo:Main.__docgenInfo,name:"Main",path:"src/components/Main/index.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Main",component:Main,args:{title:"default title",description:"default description"}};var stories_Basic=function Basic(args){return Object(jsx_runtime.jsx)(Main,Object.assign({},args))};stories_Basic.displayName="Basic";var stories_Secondary=function Secondary(args){return Object(jsx_runtime.jsx)(Main,Object.assign({},args))};stories_Secondary.displayName="Secondary",stories_Secondary.args={title:"labasd",description:"xcxccdc"}}},[[476,2,3]]]);