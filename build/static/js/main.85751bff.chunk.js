(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(27),i=c.n(n),r=(c(76),c(19)),j=(c(77),c(51)),o=c.n(j),l=(c(78),c(3));var d=function(e){var t=e.active,c=e.text,s=e.Icon;return Object(l.jsxs)("div",{className:"sideBarOptions ".concat(t&&"sideBarOptions--active"),children:[Object(l.jsx)(s,{}),Object(l.jsx)("h2",{children:c})]})},b=c(56),h=c.n(b),x=c(42),O=c.n(x),p=c(57),m=c.n(p),u=c(58),f=c.n(u),v=c(59),g=c.n(v),N=c(60),w=c.n(N),S=c(61),I=c.n(S),_=c(62),y=c.n(_),B=c(109),k=c(25),A=c(43),D=A.a.initializeApp({apiKey:"AIzaSyDKKonc5u574JV6u8ixQGXt2wQjqkxycMo",authDomain:"twitter-clone-a2978.firebaseapp.com",projectId:"twitter-clone-a2978",storageBucket:"twitter-clone-a2978.appspot.com",messagingSenderId:"795393090676",appId:"1:795393090676:web:6f6f8e1fea295c552a9d21",measurementId:"G-MRNV4GSGX6"}).firestore(),C=A.a.auth(),G=new A.a.auth.GoogleAuthProvider;var T=function(){var e=Object(k.a)(C);return Object(r.a)(e,1)[0],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(o.a,{className:"sidebar_twitterIcon",onClick:function(){return C.signOut()}}),Object(l.jsx)(d,{active:!0,Icon:h.a,text:"Home"}),Object(l.jsx)(d,{Icon:O.a,text:"Search"}),Object(l.jsx)(d,{Icon:m.a,text:"Notification"}),Object(l.jsx)(d,{Icon:f.a,text:"Message"}),Object(l.jsx)(d,{Icon:g.a,text:"Bookmark"}),Object(l.jsx)(d,{Icon:w.a,text:"List"}),Object(l.jsx)(d,{Icon:I.a,text:"Profile"}),Object(l.jsx)(d,{Icon:y.a,text:"More"}),Object(l.jsx)(B.a,{variant:"outlined",className:"sidebar_tweet",fullWidth:!0,children:"Tweet"})]})},z=(c(89),c(90),c(91),c(110));var M=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),j=i[0],o=i[1],d=Object(k.a)(C),b=Object(r.a)(d,1)[0];return Object(l.jsx)("div",{className:"tweetBox",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"tweetBox_input",children:[Object(l.jsx)(z.a,{src:b.photoURL}),Object(l.jsx)("input",{onChange:function(e){return a(e.target.value)},value:c,placeholder:"What's happening?",type:"text"})]}),Object(l.jsx)("input",{value:j,className:"tweetBox_imageInput",placeholder:"Enter the image URL",type:"text",onChange:function(e){return o(e.target.value)}}),Object(l.jsxs)(B.a,{onClick:function(e){e.preventDefault(),D.collection("posts").add({timeStamp:(new Date).getTime(),displayName:"abhi",username:"abhishek",verified:!1,text:c,image:j,avatar:"https://pbs.twimg.com/profile_images/1412068853656346625/GnSAUqIc_400x400.jpg"}),a(""),o("")},type:"submit",class:"tweetBox_tweetButton",children:[" ","Tweet"]})]})})},J=(c(92),c(63)),P=c.n(J),U=c(64),R=c.n(U),W=c(65),q=c.n(W),E=c(66),H=c.n(E),K=c(67),L=c.n(K),Q=Object(s.forwardRef)((function(e,t){e.displayName,e.username;var c=e.verified,s=e.text,a=e.image,n=(e.avatar,Object(k.a)(C)),i=Object(r.a)(n,1)[0],j=i.displayName.split(" ");return Object(l.jsxs)("div",{className:"post",ref:t,children:[Object(l.jsx)("div",{className:"post_avatar",children:Object(l.jsx)(z.a,{src:"https://pbs.twimg.com/profile_images/1412068853656346625/GnSAUqIc_400x400.jpg"})}),Object(l.jsxs)("div",{className:"post_body",children:[Object(l.jsxs)("div",{className:"post_header",children:[Object(l.jsx)("div",{className:"post_header_text",children:Object(l.jsxs)("h3",{children:[i.displayName," ",Object(l.jsxs)("span",{className:"post_headerSpecial",children:[c&&Object(l.jsx)(P.a,{className:"post_badge"}),"@",j[0]]})]})}),Object(l.jsx)("div",{className:"post_headerDesc",children:Object(l.jsx)("p",{children:s})})]}),Object(l.jsx)("img",{src:a,alt:""}),Object(l.jsxs)("div",{className:"post_footer",children:[Object(l.jsx)(R.a,{fonstSize:"small",class:"icon comment"}),Object(l.jsx)(q.a,{fonstSize:"small",class:"icon retweet"}),Object(l.jsx)(H.a,{fonstSize:"small",class:"icon like"}),Object(l.jsx)(L.a,{fonstSize:"small",class:"icon share"})]})]})]})})),V=c(68);var X=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){D.collection("posts").orderBy("timeStamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(l.jsxs)("div",{className:"feed",children:[Object(l.jsx)("div",{className:"feed_header",children:Object(l.jsx)("h2",{children:"Home"})}),Object(l.jsx)(M,{}),Object(l.jsx)(V.a,{children:c.map((function(e){return Object(l.jsx)(Q,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,image:e.image,avatar:e.avatar},e.text)}))})]})},F=(c(93),c(69));var Y=function(){return Object(l.jsxs)("div",{className:"widgets",children:[Object(l.jsxs)("div",{className:"widgets_input",children:[Object(l.jsx)(O.a,{className:"widgets_searchIcon"}),Object(l.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(l.jsxs)("div",{className:"widgets_container",children:[Object(l.jsx)("h2",{children:"What's happening"}),Object(l.jsx)(F.a,{tweetId:"1416018610397474823"})]})]})},Z=c.p+"static/media/download.ee316e0d.png";var $=function(){var e=Object(k.a)(C);return Object(r.a)(e,1)[0],Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("img",{src:Z,alt:"photo",className:"photo"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"join-box",children:[Object(l.jsx)("span",{className:"icon bird"}),Object(l.jsx)("h1",{children:"See what's happening in the world right now"}),Object(l.jsx)("h2",{children:"Join Twitter today."}),Object(l.jsx)("div",{className:"signup-login",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),C.signInWithPopup(G).catch((function(e){return alert(e.message)}))},id:"login",children:"Sign Up"})})]})})]}),Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"footer-content",children:[Object(l.jsx)("a",{href:"#",children:"About"}),Object(l.jsx)("a",{href:"#",children:"Help Center"}),Object(l.jsx)("a",{href:"#",children:"Blog"}),Object(l.jsx)("a",{href:"#",children:"Status"}),Object(l.jsx)("a",{href:"#",children:"Jobs"}),Object(l.jsx)("a",{href:"#",children:"Terms"}),Object(l.jsx)("a",{href:"#",children:"Privacy Policy"}),Object(l.jsx)("a",{href:"#",children:"Cookies"}),Object(l.jsx)("a",{href:"#",children:"Ads info"}),Object(l.jsx)("a",{href:"#",children:"Brand"}),Object(l.jsx)("a",{href:"#",children:"Apps"}),Object(l.jsx)("a",{href:"#",children:"Advertise"}),Object(l.jsx)("a",{href:"#",children:"Marketing"}),Object(l.jsx)("a",{href:"#",children:"Businesses"}),Object(l.jsx)("a",{href:"#",children:"Developers"}),Object(l.jsx)("a",{href:"#",children:"Directory"}),Object(l.jsx)("a",{href:"#",children:"Settings"}),Object(l.jsx)("p",{children:"\xa9 2018 Twitter"})]})})]})};var ee=function(){var e=Object(k.a)(C),t=Object(r.a)(e,1)[0];return Object(l.jsx)("div",{className:"app",children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)(X,{}),Object(l.jsx)(Y,{})]}):Object(l.jsx)($,{})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ee,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.85751bff.chunk.js.map