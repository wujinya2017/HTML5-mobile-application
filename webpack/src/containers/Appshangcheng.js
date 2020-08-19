import React, { Component } from 'react'
import { NavBar,Carousel,Grid,SearchBar} from 'antd-mobile';

const arr = ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
const arr1 = [
    require(`./img/111.jpg`),
    require(`./img/112.jpg`),
    require(`./img/113.jpg`),
    require(`./img/114.jpg`),
    require(`./img/115.jpg`),
    require(`./img/116.jpg`),
    require(`./img/117.jpg`),
    require(`./img/118.jpg`),
    require(`./img/119.jpg`),
    require(`./img/120.png`),
];

const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: arr1[i],
    text: arr[i],
}));

export default class Appshangcheng extends Component {
    state = {
        value : ''
    };
    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <img key={0} src={require(`./img/15.png`)} style={{ width: '50px',height:'40px'}}/>
                ]}
                >商城</NavBar>
                <SearchBar
                    value={this.state.value}
                    placeholder="输入关键字搜索"
                    style={{backgroundColor:'#c04916'}}
                    onChange={this.onChange}
                />
                <div style={{height:'180px'}}>
                    <Carousel
                    autoplay={false}
                    infinite
                    >
                        {[6,7,8,9].map(val => (
                            <a key={val} href="http://www.baidu.com" style={{ display: 'inline-block', width: '100%', height:200}}>
                                <img src={require(`./img/${val}.jpg`)} alt="" style={{ width: '100%', verticalAlign: 'top' }}/>
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div style={{height:'200px',backgroundColor:'white'}}>
                    <div style={{paddingTop:'30px'}}><Grid data={data} columnNum={5}  hasLine={false}/></div>
                </div>
                <div style={{padding:'20px'}}>
                    <img src={require(`./img/16.png`)} style={{ width: '50%',height:'220px',paddingRight:'10px'}}/>
                    <img src={require(`./img/17.png`)} style={{ width: '50%',height:'220px',paddingLeft:'10px'}}/>
                </div>
            </div>
        )
    }
}
