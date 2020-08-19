import React ,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//8.类定义组件
class ShowTime extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            str : '12345',
            time:new Date().toLocaleString()
        }
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
        this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word)
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');  
    }
    handleClick(num,e){
        console.log(num,e);
        console.log('点击成功！');
    }
    divClick(id,e){
        console.log(id,e);
        console.log('盒子点击成功！');
    }
    render(){
        console.log('render');
        return (//Fragment是一个组件
            <Fragment>
                <div>{this.state.str}</div>
                <div onClick={(e)=>this.handleClick(1,e)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,5)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

//默认导出,只能导出一次
export default ShowTime;
//命名导出,可写多个export
//export {ShowTime};