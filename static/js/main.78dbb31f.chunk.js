(this.webpackJsonpbunkalog=this.webpackJsonpbunkalog||[]).push([[0],{60:function(e,t,s){},61:function(e,t,s){},97:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(24),o=s.n(c),r=(s(60),s(12)),i=s(13),l=s(15),d=s(14),u=(s(61),s(34),{PROXY_URL:"http://localhost:5000"}),j=s(98),h=s(99),b=s(100),O=s(101),g=s(53),x=s(3),p=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=u.PROXY_URL+"/add-class";return Object(x.jsxs)(j.a,{action:e,children:[Object(x.jsxs)(h.a,{children:[Object(x.jsx)(b.a,{for:"courseName",children:"Course Name"}),Object(x.jsx)(O.a,{type:"text",name:"courseName",id:"courseName"})]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(b.a,{for:"courseCode",children:"Course Code"}),Object(x.jsx)(O.a,{type:"text",name:"courseCode",id:"courseCode"})]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(b.a,{for:"classesAttended",children:"Classes Attended"}),Object(x.jsx)(O.a,{type:"number",name:"classesAttended",id:"classesAttended"})]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(b.a,{for:"totalClasses",children:"Total Classes"}),Object(x.jsx)(O.a,{type:"number",name:"totalClasses",id:"totalClasses"})]}),Object(x.jsx)(g.a,{type:"Submit",children:"Add Class"})]})}}]),s}(a.a.Component),f=s(25),m=s(102),v=s(103),C=s(104),L=s(105),k=s(114),y=s(115),S=s(116),A=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={onLogout:!1},e.onLogout&&(n.state.onLogout=e.onLogout),n}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{color:"light",light:!0,expand:"md",children:[Object(x.jsx)(v.a,{href:"/",children:"bunkalog"}),Object(x.jsxs)(C.a,{children:[Object(x.jsx)(L.a,{children:Object(x.jsxs)(k.a,{nav:!0,inNavbar:!0,children:[Object(x.jsx)(y.a,{nav:!0,caret:!0,children:"Add Class"}),Object(x.jsx)(S.a,{right:!0,children:Object(x.jsx)(p,{})})]})}),Object(x.jsx)(L.a,{children:Object(x.jsx)(f.GoogleLogout,{clientId:"724928841047-qeoov5rpo41njs7e09moms868eknu2fp.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){return e.state.onLogout()}})})]})]})})}}]),s}(a.a.Component),I=s(106),N=s(107),U=s(108),R=s(109),D=s(110),P=s(111),T=s(112),X=s(113),Y=s(22),_=s.n(Y),F=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={name:e.courseCode,loadData:e.reloadData},n}return Object(i.a)(s,[{key:"attendClass",value:function(){var e=this,t=u.PROXY_URL+"/attend-class?courseCode="+this.state.name;_.a.get(t).then((function(t){e.state.loadData()})).catch((function(e){console.log(e)}))}},{key:"bunkClass",value:function(){var e=this,t=u.PROXY_URL+"/bunk-class?courseCode="+this.state.name;_.a.get(t).then((function(t){e.state.loadData()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(e){var t=this;return this.state.name=this.props.courseCode,Object(x.jsx)("div",{children:Object(x.jsxs)(I.a,{children:[Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{tag:"h5",children:this.props.courseName}),Object(x.jsx)(R.a,{tag:"h6",className:"mb-2 text-muted",children:this.props.courseCode}),Object(x.jsxs)(D.a,{children:["Attended ",this.props.classesAttended," out of ",this.props.totalClasses," classes"]})]}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(P.a,{multi:!0,children:[Object(x.jsx)(P.a,{bar:!0,value:this.props.classesAttended,max:this.props.totalClasses}),Object(x.jsx)(P.a,{bar:!0,value:this.props.totalClasses-this.props.classesAttended,color:"danger",max:this.props.totalClasses})]})}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(X.a,{children:Object(x.jsx)(g.a,{onClick:function(){return t.attendClass()},children:"Attend Next Class"})}),Object(x.jsx)(X.a,{children:Object(x.jsx)(g.a,{onClick:function(){return t.bunkClass()},children:"Bunk Next Class"})}),Object(x.jsx)(X.a,{children:Object(x.jsx)(g.a,{children:"Class Cancelled"})})]})})]})})}}]),s}(a.a.Component),B=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={onLoginSuccess:e.onLoginSuccess},n}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{color:"light",light:!0,expand:"md",children:Object(x.jsx)(v.a,{href:"/",children:"bunkalog"})}),Object(x.jsx)(f.GoogleLogin,{clientId:"724928841047-qeoov5rpo41njs7e09moms868eknu2fp.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(t){e.state.onLoginSuccess(t)}})]})}}]),s}(a.a.Component),q=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={data:{data:[{courseName:"Loading",courseCode:"Loading",classesAttended:"Loading",totalClasses:"Loading"}]},isUserLoggedIn:localStorage.getItem("isUserLoggedIn")||!1},n.loadData(),n}return Object(i.a)(s,[{key:"loadData",value:function(){var e=this;_.a.get(u.PROXY_URL+"/").then((function(t){e.setState({data:t})})).catch((function(e){console.log(e)}))}},{key:"loginSucceed",value:function(){this.setState({isUserLoggedIn:!0}),localStorage.setItem("isUserLoggedIn",!0)}},{key:"logoutSucceed",value:function(){this.setState({isUserLoggedIn:!1}),localStorage.setItem("isUserLoggedIn",!1)}},{key:"onLoggedIn",value:function(){var e=this,t=this.state.data.data.map((function(e,t){var s=this;return Object(x.jsx)(X.a,{children:Object(x.jsx)(F,{courseName:e.courseName,courseCode:e.courseCode,classesAttended:e.classesAttended,totalClasses:e.totalClasses,reloadData:function(){return s.loadData()}})})}));return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(A,{onLogout:function(){return e.logoutSucceed()}}),Object(x.jsx)(T.a,{sm:"3",children:t})]})}},{key:"onLoggedOut",value:function(){var e=this;return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(B,{onLoginSuccess:function(){return e.loginSucceed()}})})}},{key:"render",value:function(){var e=this.state.isUserLoggedIn;return console.log(e),e?this.onLoggedIn():this.onLoggedOut()}}]),s}(a.a.Component),w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,117)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root")),w()}},[[97,1,2]]]);
//# sourceMappingURL=main.78dbb31f.chunk.js.map