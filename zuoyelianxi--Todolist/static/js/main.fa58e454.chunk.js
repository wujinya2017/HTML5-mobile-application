(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var l=a(0),i=a.n(l),n=a(2),s=a.n(n),o=(a(13),a(3)),r=a(4),c=a(6),g=a(5),m=a(7),h={set:function(t,e){localStorage.setItem(t,JSON.stringify(e))},get:function(t){return JSON.parse(localStorage.getItem(t))},remove:function(t){localStorage.removeItem(t)}},d=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(g.a)(e).call(this,t))).addData=function(t){if(13==t.keyCode){var e=a.refs.title.value,l=a.state.list;l.push({title:e,checked:!1}),a.setState({list:l}),a.refs.title.value="",a.state.a++,localStorage.setItem("todolist",JSON.stringify(l)),localStorage.setItem("a",JSON.stringify(a.state.a)),localStorage.setItem("b",JSON.stringify(a.state.b))}},a.checkboxChage1=function(t){var e=a.state.list;e[t].checked=!e[t].checked,a.setState({list:e}),a.state.a--,a.state.b++,localStorage.setItem("todolist",JSON.stringify(e)),localStorage.setItem("a",JSON.stringify(a.state.a)),localStorage.setItem("b",JSON.stringify(a.state.b))},a.checkboxChage2=function(t){var e=a.state.list;e[t].checked=!e[t].checked,a.setState({list:e}),a.state.b--,a.state.a++,localStorage.setItem("todolist",JSON.stringify(e)),localStorage.setItem("a",JSON.stringify(a.state.a)),localStorage.setItem("b",JSON.stringify(a.state.b))},a.removeData1=function(t){var e=a.state.list;e.splice(t,1),a.setState({list:e}),a.state.a--,localStorage.setItem("todolist",JSON.stringify(e)),localStorage.setItem("a",JSON.stringify(a.state.a)),localStorage.setItem("b",JSON.stringify(a.state.b))},a.removeData2=function(t){var e=a.state.list;e.splice(t,1),a.setState({list:e}),a.state.b--,localStorage.setItem("todolist",JSON.stringify(e)),localStorage.setItem("a",JSON.stringify(a.state.a)),localStorage.setItem("b",JSON.stringify(a.state.b))},a.state={list:[],a:0,b:0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=h.get("todolist");t&&this.setState({list:t});var e=h.get("a");e&&this.setState({a:e});var a=h.get("b");a&&this.setState({b:a})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{style:{height:"700px",backgroundColor:"#ccc"}},i.a.createElement("div",null,i.a.createElement("div",{className:"title",style:{width:"100%",height:"50px",backgroundColor:"black"}},i.a.createElement("h1",{style:{color:"white",marginRight:"180px",float:"left",marginLeft:"350px"}},"TodoList"),i.a.createElement("input",{ref:"title",placeholder:"\u6dfb\u52a0Todo",onKeyUp:this.addData,style:{width:"250px",borderRadius:"5px",marginTop:"10px"}})),i.a.createElement("div",{style:{marginLeft:"350px"}},i.a.createElement("br",null),i.a.createElement("h1",null,i.a.createElement("b",null,"\u6b63\u5728\u8fdb\u884c"),i.a.createElement("span",null,this.state.a)),i.a.createElement("ul",{className:"data-doing",style:{listStyle:"none"}},this.state.list.map((function(e,a){if(!e.checked)return i.a.createElement("li",{key:a,style:{width:"500px",marginBottom:"10px",borderLeft:"10px soild green",backgroundColor:"white",padding:"10px",borderRadius:"5px"}},i.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:t.checkboxChage1.bind(t,a),style:{width:"20px",height:"20px",marginRight:"30px"}}),e.title,i.a.createElement("button",{style:{float:"right"},onClick:t.removeData1.bind(t,a)},"\u5220\u9664"))}))),i.a.createElement("h1",null,i.a.createElement("b",null,"\u5df2\u7ecf\u5b8c\u6210"),i.a.createElement("span",null,this.state.b)),i.a.createElement("ul",{style:{listStyle:"none"}},this.state.list.map((function(e,a){if(e.checked)return i.a.createElement("li",{key:a,style:{width:"500px",marginBottom:"10px",borderLeft:"10px soild green",backgroundColor:"white",padding:"10px",borderRadius:"5px"}},i.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:t.checkboxChage2.bind(t,a),style:{width:"20px",height:"20px",marginRight:"30px"}}),i.a.createElement("span",null,e.title),i.a.createElement("button",{style:{float:"right"},onClick:t.removeData2.bind(t,a)},"\u5220\u9664"))}))))),i.a.createElement("p",{style:{marginLeft:"500px"}},"Copyright \xa9 2014 todolist.cn clear"))}}]),e}(l.Component);s.a.render(i.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fa58e454.chunk.js.map