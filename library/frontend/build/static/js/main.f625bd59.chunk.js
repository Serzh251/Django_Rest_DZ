(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(t,e,n){},59:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(34),o=n.n(a),s=(n(40),n(23)),i=n(10),j=n(11),l=n(13),u=n(12),h=n(9),d=n.n(h),b=(n.p,n(59),n(0)),p=function(t){var e=t.user;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.username}),Object(b.jsx)("td",{children:e.lastName}),Object(b.jsx)("td",{children:e.email})]})},O=function(t){var e=t.users;return Object(b.jsxs)("table",{children:[Object(b.jsx)("th",{children:"User name"}),Object(b.jsx)("th",{children:"Last Name"}),Object(b.jsx)("th",{children:"Email"}),e.map((function(t){return Object(b.jsx)(p,{user:t})}))]})},x=function(t){var e=t.menu;return Object(b.jsxs)("menu",{children:[Object(b.jsx)("li",{children:e.item1}),Object(b.jsx)("li",{children:e.item2})]})},m=function(t){return t.menu.map((function(t){return Object(b.jsx)(x,{menu:t})}))},f=function(t){t.menu;return"I am a footer"},v=n(4),g=function(t){var e=t.project,n=t.deleteProject;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("td",{children:Object(b.jsx)(v.b,{to:"projectdetail/".concat(e.id),children:e.projectName})})}),Object(b.jsx)("td",{children:e.projectLink}),Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return n(e.id)},type:"button",children:"Delete"})})]})},k=function(t){var e=t.projects,n=t.deleteProject;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("table",{children:[Object(b.jsx)("th",{children:"Project Name"}),Object(b.jsx)("th",{children:"Project Link"}),Object(b.jsx)("th",{children:"Project Author"}),Object(b.jsx)("td",{}),e.map((function(t){return Object(b.jsx)(g,{project:t,deleteProject:n})}))]}),Object(b.jsx)(v.b,{to:"/project/create",children:"Create"})]})},N=function(t){var e=t.todo,n=t.deleteTodo;return console.log(e),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.text}),Object(b.jsx)("td",{children:e.updateDatatime}),Object(b.jsx)("td",{children:e.addDatatime}),Object(b.jsx)("td",{children:e.isActive}),Object(b.jsx)("td",{children:e.author}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return n(e.id)},type:"button",children:"Delete"})})]})},C=function(t){var e=t.todoes,n=t.deleteTodo;return Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Text"}),Object(b.jsx)("th",{children:"updateDatatime"}),Object(b.jsx)("th",{children:"addDatatime"}),Object(b.jsx)("th",{children:"isActive"}),Object(b.jsx)("th",{children:"author"}),Object(b.jsx)("th",{})]}),e.map((function(t){return Object(b.jsx)(N,{todo:t,deleteTodo:n})}))]})},y=n(2),S=function(t){var e=t.project;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.projectName}),Object(b.jsx)("td",{children:e.projectLink}),Object(b.jsx)("td",{children:e.projectAuthor[0].username})]})},_=function(t){var e=t.projects,n=Object(y.g)().id,c=e.filter((function(t){return t.id==n}));return Object(b.jsxs)("table",{children:[Object(b.jsx)("th",{children:"Project Name"}),Object(b.jsx)("th",{children:"Project Link"}),Object(b.jsx)("th",{children:"Project Author"}),c.map((function(t){return Object(b.jsx)(S,{project:t})}))]})},P=function(t){var e=t.project;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.projectName}),Object(b.jsx)("td",{children:e.projectLink}),Object(b.jsx)("td",{children:e.projectAuthor[0].username})]})},L=function(t){var e=t.projects,n=Object(y.g)().id,c=e.filter((function(t){return t.id==n}));return Object(b.jsxs)("table",{children:[Object(b.jsx)("th",{children:"Project Name"}),Object(b.jsx)("th",{children:"Project Link"}),Object(b.jsx)("th",{children:"Project Author"}),c.map((function(t){return Object(b.jsx)(P,{project:t})}))]})},T=n(16),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).state={login:"",password:""},c}return Object(j.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(T.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.props.get_token(this.state.login,this.state.password),t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(b.jsx)("input",{type:"text",name:"login",placeholder:"login",value:this.state.login,onChange:function(e){return t.handleChange(e)}}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}}),Object(b.jsx)("input",{type:"submit",value:"Login"})]})}}]),n}(r.a.Component),D=n(24),w=(n(66),n(67),n(14)),F=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).state={projectName:"",projectAuthor:[],projectLink:""},c.handleChange=c.handleChange.bind(Object(w.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(w.a)(c)),c}return Object(j.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(T.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.props.createProject(this.state.projectName,this.state.projectAuthor,this.state.projectLink),t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"login",children:"projectName"}),Object(b.jsx)("input",{type:"text",className:"form-control",name:"projectName",value:this.state.projectName,onChange:function(e){return t.handleChange(e)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"login",children:"projectAuthor"}),Object(b.jsx)("select",{multiple:!0,name:"projectAuthor",onChange:function(e){return t.handleChange(e)},children:this.props.projects.map((function(t){return Object(b.jsx)("option",{value:t.id,children:t.projectAuthor[0].username})}))})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"projectLink",children:"projectLink"}),Object(b.jsx)("input",{type:"text",className:"form-control",name:"projectLink",value:this.state.projectLink,onChange:function(e){return t.handleChange(e)}})]}),Object(b.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Save"})]})}}]),n}(r.a.Component),I=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).state={text:"",authors:[]},c.handleChange=c.handleChange.bind(Object(w.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(w.a)(c)),c}return Object(j.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(T.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.props.createTodo(this.state.text,this.state.author),t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"login",children:"Todo"}),Object(b.jsx)("input",{type:"text",className:"form-control",name:"text",value:this.state.text,onChange:function(e){return t.handleChange(e)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"login",children:"Author"}),Object(b.jsx)("select",{multiple:!0,name:"authors",onChange:function(e){return t.handleChange(e)},children:this.props.todoes.map((function(t){return Object(b.jsxs)("option",{value:t.id,children:[" ",t.author]})}))})]}),Object(b.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Save"})]})}}]),n}(r.a.Component),B=function(t){var e=t.location;return Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 '",e.pathname,"' \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]})})},E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).state={users:[],menu:[],project:[],todo:[],footer:[],token:[]},c}return Object(j.a)(n,[{key:"load_data",value:function(){var t=this,e=this.get_headers();d.a.get("http://127.0.0.1:8090/api/user/",{headers:e}).then((function(e){var n=e.data.results;t.setState({users:n})})).catch((function(t){return console.log(t)})),d.a.get("http://127.0.0.1:8090/api/project/",{headers:e}).then((function(e){var n=e.data.results;t.setState({project:n})})).catch((function(t){return console.log(t)})),d.a.get("http://127.0.0.1:8090/api/todo/",{headers:e}).then((function(e){var n=e.data.results;t.setState({todo:n})})).catch((function(t){return console.log(t)}))}},{key:"set_token",value:function(t){var e=this;(new D.a).set("token",t),this.setState({token:t},(function(){return e.load_data()}))}},{key:"is_authenticated",value:function(){return!!this.state.token}},{key:"logout",value:function(){this.set_token("")}},{key:"get_token_from_storage",value:function(){var t=this,e=(new D.a).get("token");this.setState({token:e},(function(){return t.load_data()}))}},{key:"get_token",value:function(t,e){var n=this;d.a.post("http://127.0.0.1:8090/api-token-auth/",{username:t,password:e}).then((function(t){n.set_token(t.data.token)})).catch((function(t){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}))}},{key:"get_headers",value:function(){var t={"Content-Type":"application/json"};return this.is_authenticated()&&(t.Authorization="Token "+this.state.token),t}},{key:"deleteProject",value:function(t){var e=this,n=this.get_headers();d.a.delete("http://127.0.0.1:8090/api/project/".concat(t),{headers:n}).then((function(n){e.setState({project:e.state.project.filter((function(e){return e.id!==t}))})})).catch((function(t){return console.log(t)}))}},{key:"deleteTodo",value:function(t){var e=this,n=this.get_headers();d.a.delete("http://127.0.0.1:8090/api/todo/".concat(t),{headers:n}).then((function(n){e.setState({todo:e.state.todo.filter((function(e){return e.id!==t}))})})).catch((function(t){return console.log(t)}))}},{key:"createProject",value:function(t,e,n){var c=this,r=this.get_headers(),a={projectName:t,projectAuthor:e,projectLink:n};d.a.post("http://127.0.0.1:8090/api/project/",a,{headers:r}).then((function(t){var e=t.data,n=c.state.project.filter((function(t){return t.id===e.project}))[0];e.project=n,c.setState({project:[].concat(Object(s.a)(c.state.project),[e])})})).catch((function(t){return console.log(t)}))}},{key:"createTodo",value:function(t,e){var n=this,c=this.get_headers(),r={text:t,author:e};d.a.post("http://127.0.0.1:8090/api/todo/",r,{headers:c}).then((function(t){var e=t.data,c=n.state.project.filter((function(t){return t.id===e.todo}))[0];e.project=c,n.setState({todo:[].concat(Object(s.a)(n.state.todo),[e])})})).catch((function(t){return console.log(t)}))}},{key:"componentDidMount",value:function(){this.get_token_from_storage()}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{menu:this.state.menu}),Object(b.jsxs)(v.a,{children:[Object(b.jsx)("header",{children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"DRF"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/",children:"Users"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/project",children:"Project"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/todo",children:"Todo"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/project/create",children:"Create Project"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(v.b,{className:"nav-link",to:"/todo/create",children:"Create Todo"})}),Object(b.jsx)("li",{className:"nav-item active",children:this.is_authenticated()?Object(b.jsx)("button",{className:"nav-link",onClick:function(){return t.logout()},children:"Logout"}):Object(b.jsx)(v.b,{className:"nav-link",to:"/login",children:"Login"})})]})})]})}),Object(b.jsx)("main",{role:"main",className:"flex-shrink-0",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(y.d,{children:[Object(b.jsx)(y.b,{exact:!0,path:"/",component:function(){return Object(b.jsx)(O,{users:t.state.users})}}),Object(b.jsx)(y.b,{exact:!0,path:"/project/create",component:function(){return Object(b.jsx)(F,{projects:t.state.project,createProject:function(e,n,c){return t.createProject(e,n,c)}})}}),Object(b.jsx)(y.b,{exact:!0,path:"/project",component:function(){return Object(b.jsx)(k,{projects:t.state.project,deleteProject:function(e){return t.deleteProject(e)}})}}),Object(b.jsx)(y.b,{exact:!0,path:"/project",component:function(){return Object(b.jsx)(k,{projects:t.state.project})}}),Object(b.jsx)(y.b,{exact:!0,path:"/todo/create",component:function(){return Object(b.jsx)(I,{todoes:t.state.todo,createTodo:function(e,n){return t.createTodo(e,n)}})}}),Object(b.jsx)(y.b,{exact:!0,path:"/todo",component:function(){return Object(b.jsx)(C,{todoes:t.state.todo,deleteTodo:function(e){return t.deleteTodo(e)}})}}),Object(b.jsx)(y.b,{exact:!0,path:"/todo",component:function(){return Object(b.jsx)(C,{todoes:t.state.todo})}}),Object(b.jsx)(y.b,{exact:!0,path:"/login",component:function(){return Object(b.jsx)(A,{get_token:function(e,n){return t.get_token(e,n)}})}}),Object(b.jsx)(y.b,{path:"/user/:id",children:Object(b.jsx)(_,{projects:this.state.project})}),Object(b.jsx)(y.b,{path:"/projectdetail/:id",children:Object(b.jsx)(L,{projects:this.state.project})}),Object(b.jsx)(y.a,{from:"/users",to:"/"}),Object(b.jsx)(y.b,{component:B})]})})})]}),Object(b.jsx)(f,{footer:this.state.footer})]})}}]),n}(r.a.Component),J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),J()}},[[68,1,2]]]);
//# sourceMappingURL=main.f625bd59.chunk.js.map