(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={Section:"Section_Section__2SNn4",Section__Title:"Section_Section__Title__3rndl"}},,function(e,t,n){e.exports={MainContainer:"MainContainer_MainContainer__2QkE0"}},function(e,t,n){e.exports={PageHeader:"PageHeader_PageHeader__bYcxP"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(9),c=n.n(i),s=(n(18),n(19),n(13)),o=n(6),u=n(2),l=n(3),b=n(5),j=n(4),h=n(23),d=n(10),m=n.n(d),p=n(0),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:m.a.MainContainer,children:this.props.children})}}]),n}(a.Component);O.defaultProps={children:Object(p.jsx)(p.Fragment,{})};var f=O,x=n(11),v=n.n(x),C=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:v.a.PageHeader,children:this.props.title})}}]),n}(a.Component);C.defaultProps={title:"Where is your title?",children:Object(p.jsx)(p.Fragment,{})};var g=C,S=n(8),y=n.n(S),_=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:y.a.Section,children:[Object(p.jsx)("h2",{className:y.a.Section__Title,children:this.props.title}),this.props.children]})})}}]),n}(a.Component);_.defaultProps={title:"Where is your title?",children:Object(p.jsx)(p.Fragment,{})};var w=_,A=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.whenSubmit(e.state),e.formReset()},e.formReset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Name: ",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Number: ",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Add Contact"})]})})}}]),n}(a.Component),k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{children:["Find by Name: ",Object(p.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.props.filterValue,onChange:this.props.whenChange})]})})}}]),n}(a.Component),N=n(12),P=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:N,filter:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.whenSubmit=function(t){var n=t.name,a=t.number;e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[{id:Object(h.a)(),name:n,number:a}])}}))},e.formReset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}));return Object(p.jsxs)(f,{children:[Object(p.jsx)(g,{title:"React Homework 02. Phonebook"}),Object(p.jsx)(w,{title:"Add Contact",children:Object(p.jsx)(A,{whenSubmit:this.whenSubmit})}),Object(p.jsxs)(w,{title:"Contacts",children:[Object(p.jsx)(k,{filterValue:this.state.filter,whenChange:this.handleChange}),Object(p.jsx)("br",{}),Object(p.jsx)("ul",{children:t.map((function(e){return Object(p.jsxs)("li",{children:[e.name,": ",e.number]},e.id)}))})]})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a20d9646.chunk.js.map