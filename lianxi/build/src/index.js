//引入
import React ,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTime from './ShowTime.js';
import Todolist from './Todolist/Todolist.js';
import Request from './Request';


//组件交互
//父组件 --->  子组件：调用时在子组件上添加属性
//在子组件中通过props获取数据
//ReactDOM.render(<Request/>,document.getElementById('root'));//将Request元素渲染到页面中
ReactDOM.render(<Todolist/>,document.getElementById('root'));


//函数定义组件（无生命周期函数）
//当只是渲染结构时
// function ToDo(props) {
//     return (
//         <div>
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5 && <h1>todo</h1>}
//             <ul>
//                 {/*循环渲染*/}
//                 {/*条件渲染*/}
//                 {
//                     props.list.map(function (item,index) {
//                         if(index%2 === 0){
//                             return <li key={item}>{item}</li>
//                         }
//                     })//变量加中括号
//                 }
//             </ul>
//         </div>
//     )
// };
// var item = [<li>1</li>,<li>2</li>,<li>3</li>,4,5,6];
// ReactDOM.render(<ToDo list={item}/>,document.getElementById('root'));



//创建元素后不可变
// function tick() { 
//     var e = <div>
//                 <p>当前时间</p>
//                 <h1>{new Date().toLocaleTimeString()}</h1>
//             </div> ; 	
//     ReactDOM.render(e, document.getElementById('root')); 
// } 
// tick();
// setInterval(tick, 1000);


// jsx表达式会被react转成一个对象，类似下面声明的obj对象
//var ele = <h1>{str}</h1>;// <h1>{str}</h1>叫做DOM节点；不需要加引号
var ele = React.createElement(
    'div',
    {'id':'box'},
    'react1',
    React.createElement(
        'h1',
        {'id':'h'},
        'react2'
    )
);
var obj = {
    type : 'div',
    props : {
        id : 'box',
        class : 'box-box',
        children : ['hello react1',{
            type : 'h1',
            props : {
                id : 'h',
                class : 'h-h',
                children : ['hello react2']
            }
        }]
    }
}
//render(obj,document.getElementById('root'));


// 自己声明render函数，实现页面渲染
function render(obj,container) {
    //文档碎片
    var fr = document.createDocumentFragment();//不是真正的DOM节点，相当于容器

    var ele = document.createElement(obj.type);
    for (var item in obj.props) {
        if (item === 'class') {
            ele.className = obj.props[item];
        }else if(item === 'children'){
            for (var i = 0; i < obj.props[item].length; i++) {
                if (typeof obj.props[item][i] === 'object') {
                    render(obj.props[item][i],ele);
                } else {
                    var txt = document.createTextNode(obj.props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = obj.props[item];
        }
    }
    fr.appendChild(ele);
    container.appendChild(ele);
}



// 注意以下性能问题及优化方法

// 加载html文件、浏览器解析html生成DOM树
// link加载css文件、解析css规则、和DOM树结合生成render tree、浏览器渲染引擎渲染render tree

// 页面回流（重排）：内容改变、大小改变、结构改变
// 页面重绘：把字体颜色、背景颜色等样式改变

// 1、node.offsetLeft、node.offsetWidth等慎用
// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1
//     root.style.width = width + 'px';
// },100)

// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 2、声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// 3、对节点的操作先用变量代替
// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');
// 4、文档碎片的概念


//ReactDOM.render(<ShowTime word='React'/>,document.getElementById('root'));