import React,{Component} from 'react';
import storage from './storage';
 
export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            a:0,
            b:0
        };
        
    }   
    addData=(e)=>{
        if(e.keyCode==13){
            let title=this.refs.title.value;
            let tempList=this.state.list;
            tempList.push({
                title:title,
                checked:false
            })
            this.setState({
                list:tempList
            })
            this.refs.title.value='';
            this.state.a++;
            localStorage.setItem('todolist',JSON.stringify(tempList));
            localStorage.setItem('a',JSON.stringify(this.state.a));
            localStorage.setItem('b',JSON.stringify(this.state.b));
        }
    }
    checkboxChage1=(key)=>{
        let tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })
        this.state.a--;
        this.state.b++;
        localStorage.setItem('todolist',JSON.stringify(tempList));
        localStorage.setItem('a',JSON.stringify(this.state.a));
        localStorage.setItem('b',JSON.stringify(this.state.b));
    }
    checkboxChage2=(key)=>{
        let tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })
        this.state.b--;
        this.state.a++;
        localStorage.setItem('todolist',JSON.stringify(tempList));
        localStorage.setItem('a',JSON.stringify(this.state.a));
        localStorage.setItem('b',JSON.stringify(this.state.b));
    }
    removeData1=(key)=>{
        let tempList=this.state.list;
        tempList.splice(key,1);
         this.setState({
            list:tempList
        })
        this.state.a--;
        localStorage.setItem('todolist',JSON.stringify(tempList));
        localStorage.setItem('a',JSON.stringify(this.state.a));
        localStorage.setItem('b',JSON.stringify(this.state.b));
    }
    removeData2=(key)=>{
        let tempList=this.state.list;
        tempList.splice(key,1);
         this.setState({
            list:tempList
        })
        this.state.b--;
        localStorage.setItem('todolist',JSON.stringify(tempList));
        localStorage.setItem('a',JSON.stringify(this.state.a));
        localStorage.setItem('b',JSON.stringify(this.state.b));
    }
    componentDidMount(){
        var todolist=storage.get('todolist');  
        if(todolist){
            this.setState({
                list:todolist
            })
        }
        var a= storage.get('a');
        if(a){
            this.setState({
                a:a
            })
        }
        var b= storage.get('b');
        if(b){
            this.setState({
                b:b
            })
        }
    }
    render() {
        return (
            <div style={{height:'700px', backgroundColor:'#ccc'}}>
                
                <div>
                    <div className="title" style={{width:'100%',height:'50px',backgroundColor:'black'}}>
                        <h1 style={{color:'white',marginRight:'180px',float:"left",marginLeft:'350px'}}>TodoList</h1>
                        <input ref="title" placeholder='添加Todo' onKeyUp={this.addData} style={{width:'250px',borderRadius:'5px', marginTop:'10px'}}/> 
                    </div>
                    <div style={{marginLeft:'350px'}}>
                        <br/>
                        <h1><b>正在进行</b><span>{this.state.a}</span></h1>
                        <ul className='data-doing' style={{listStyle:'none'}}>
                            {
                                this.state.list.map((value,key)=>{
                                    if(!value.checked){
                                        return (
                                            <li key={key} style={{width:'500px',marginBottom:'10px',borderLeft:'10px soild green',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>
                                                <input type="checkbox" checked={value.checked} onChange={this.checkboxChage1.bind(this,key)} style={{width:'20px',height:'20px',marginRight:'30px'}}/>
                                                {value.title} 
                                                <button style={{float:'right'}} onClick={this.removeData1.bind(this,key)}>删除</button>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        <h1><b>已经完成</b><span>{this.state.b}</span></h1>
                        <ul style={{listStyle:'none'}}>
                            {
                                this.state.list.map((value,key)=>{
                                    if(value.checked){
                                        return (
                                            <li key={key} style={{width:'500px',marginBottom:'10px',borderLeft:'10px soild green',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>
                                                <input type="checkbox" checked={value.checked} onChange={this.checkboxChage2.bind(this,key)}  style={{width:'20px',height:'20px',marginRight:'30px'}}/>
                                                <span>{value.title}</span>
                                                <button style={{float:'right'}} onClick={this.removeData2.bind(this,key)}>删除</button>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
                <p style={{marginLeft:'500px'}}>Copyright © 2014 todolist.cn clear</p>
            </div>
        )
    }
}