(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{151:function(e,t,n){e.exports=n(301)},156:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),i=(n(156),n(35)),c=n(42),u=r.a.createContext({isLogin:null,login:function(){},logout:function(){}}),m=n(307);var s=function(){var e=Object(a.useContext)(u);return e.isLogin?r.a.createElement(m.a,{theme:"dark",mode:"horizontal",style:{float:"right",lineHeight:"64px"}},r.a.createElement(m.a.Item,null,r.a.createElement(i.b,{to:"/nearby"},"Nearby")),r.a.createElement(m.a.Item,null,r.a.createElement(i.b,{to:"/preferred"},"preferred Shops")),r.a.createElement(m.a.Item,{onClick:e.logout},"Logout")):r.a.createElement(m.a,{theme:"dark",mode:"horizontal",style:{float:"right",lineHeight:"64px"}},r.a.createElement(m.a.Item,null,r.a.createElement(i.b,{to:"/login"},"Login")),r.a.createElement(m.a.Item,null,r.a.createElement(i.b,{to:"/signup"},"Signup")))},d=n(303),f=n(33),p=n(304),g=n(306),E=n(12),h=n(91);var y=Object(c.g)(p.a.create({name:"authForm"})(function(e){var t={login:["Log in","register now!","/signup"],signup:["Sign up","login now!","/login"]},n=Object(a.useContext)(u),o=Object(a.useState)(!1),l=Object(f.a)(o,2),c=l[0],m=l[1],s=e.form.getFieldDecorator;return r.a.createElement(p.a,{onSubmit:function(t){t.preventDefault(),m(!0),e.form.validateFields(function(t,a){t&&m(!1),fetch("/api/user/"+e.type,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){if(m(!1),!e.ok)throw new Error("Failed to fetch.");return e.json()}).then(function(t){if(m(!1),"ok"===t.status&&(n.login(),e.history.push("/nearby")),"error"===t.status)throw new Error(t.data)}).catch(function(e){m(!1),console.log(e)})})},className:"login-form"},r.a.createElement(p.a.Item,null,s("email",{rules:[{required:!0,message:"Please input your email!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(p.a.Item,null,s("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(g.a,{prefix:r.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(p.a.Item,null,r.a.createElement(h.a,{loading:c,type:"primary",htmlType:"submit",className:"login-form-button"},t[e.type][0]),r.a.createElement("span",{className:"option2"},"Or ",r.a.createElement(i.b,{to:t[e.type][2]},t[e.type][1]))))}));var b=function(e){return r.a.createElement(d.a,{style:{maxWidth:300,marginLeft:"auto",marginRight:"auto",marginTop:20}},r.a.createElement(y,{type:e.type}))},w=n(305),v=n(54),k=n(29);var j=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),o=n[0],l=n[1],i=function(t,n){l(!0),fetch("/api/shops/"+n,{credentials:"include",method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then(function(e){if(l(!1),!e.ok)throw new Error("Failed to fetch.");return e.json()}).then(function(n){if(l(!1),"ok"===n.status&&e.delete(t),"error"===n.status)throw new Error(n.data)}).catch(function(e){l(!1),console.log(e)})};return r.a.createElement(k.a,{lg:6,xs:24,sm:8,md:8},r.a.createElement(d.a,{title:e.name,bordered:!1,cover:r.a.createElement("img",{alt:e.name,src:"/images/"+e.img})},e.nearby&&r.a.createElement("div",null,r.a.createElement(h.a,{type:"danger",loading:o,onClick:function(){return i(e.id,"dislike")}},"dislike"),r.a.createElement(h.a,{type:"primary",loading:o,style:{float:"right"},onClick:function(){return i(e.id,"like")}},"like")),!e.nearby&&r.a.createElement(h.a,{loading:o,type:"danger",onClick:function(){return i(e.id,"remove")}},"remove")))},O=function(e,t){var n=Object(a.useState)([]),r=Object(f.a)(n,2),o=r[0],l=r[1];return Object(a.useEffect)(function(){l([]),fetch("/api/shops/"+e,{credentials:"include"}).then(function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()}).then(function(e){if("ok"===e.status&&l(e.data),"error"===e.status)throw new Error(e.data)}).catch(function(e){console.log(e)})},t),[o,l]};var x=function(e){var t=O(e.type,[e.type]),n=Object(f.a)(t,2),a=n[0],o=n[1],l=function(e){o(a.filter(function(t){return t._id!==e}))},i=w.a.Title,c="nearby"==e.type?"Nearby Shops sorted by Distance":"Preferred Shops",u=a.map(function(t){return r.a.createElement(j,{delete:l,key:t._id,id:t._id,img:t.img,name:t.name,nearby:"nearby"==e.type})});return r.a.createElement("div",null,r.a.createElement(i,{level:2},c),r.a.createElement(v.a,{gutter:16},u))};var S=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),o=n[0],l=n[1];return r.a.createElement(u.Provider,{value:{isLogin:o,login:function(){l(!0)},logout:function(){fetch("/api/user/logout",{method:"post"}).then(function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()}).then(function(e){if("ok"===e.status&&l(!1),"error"===e.status)throw new Error(e.data)}).catch(function(e){console.log(e)})}}},e.children)},C=n(302);n(300);var L=function(){return r.a.createElement(S,null,r.a.createElement(i.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Header,null,r.a.createElement(s,null)),r.a.createElement(C.a.Content,{style:{padding:"20px 50px"}},r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,render:function(){return e.isLogin?r.a.createElement(c.a,{to:"/nearby"}):r.a.createElement(c.a,{to:"/login"})}}),r.a.createElement(c.b,{path:"/preferred",render:function(){return e.isLogin?r.a.createElement(x,{type:"preferred"}):r.a.createElement(c.a,{to:"/login"})}}),r.a.createElement(c.b,{path:"/nearby",render:function(){return e.isLogin?r.a.createElement(x,{type:"nearby"}):r.a.createElement(c.a,{to:"/login"})}}),r.a.createElement(c.b,{path:"/login",render:function(){return r.a.createElement(b,{type:"login"})}}),r.a.createElement(c.b,{path:"/signup",render:function(){return r.a.createElement(b,{type:"signup"})}}),r.a.createElement(c.b,{path:"*",render:function(){return r.a.createElement(b,{type:"login"})}}))})),r.a.createElement(C.a.Footer,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,1,2]]]);
//# sourceMappingURL=main.17bcc988.chunk.js.map