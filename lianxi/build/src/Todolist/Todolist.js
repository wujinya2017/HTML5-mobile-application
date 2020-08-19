import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[1,2,3]
        }
        // var arr=[1,2,{a:100}];
        // var b=[...arr];
        // var b=JSON.parse(JSON.stringify(arr));
        // b[2].a=200;
        // console.log(arr);
      

        //对象的拷贝
        //var a={a:100};
        // var b={b:200};
        // var o=Object.assign(a,b);
        // var o1=Object.assign({},a,b)
        // console.log(o);
        // console.log(o==a);//true
        // console.log(o1==a);//false
        // console.log(o1===a);//false
          
        //Object遍历一个对象
        //Object.keys返回由属性名组成的一个数组
        var a={a:100,b:200};
        Object.keys(a).forEach((item)=>{
            console.log(item);
            console.log(a[item]);
        })
        
        //遍历一个对象
        for(var item in a)
        {
            console.log(a);
        }
    }
    addItem=(msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg)
    }
   delItem=(a)=>{
       //this.state.todo.splice(a,1);  不要写
       //深拷贝、浅拷贝
       //1.不要直接改变、处理状态
       var todo=[...this.state.todo];
       var todo=this.state.todo;
       todo.splice(a,1);
        this.setState({
            todo:todo
        })
        console.log(a);
        //2.setState是异步的
        //this.setState((state,props)=>({todo:state.todo+1}))
          this.setState(
            {todo}
        )
   }
    render() {
        return (
            <div>
                
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}