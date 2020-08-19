import React, { Component } from 'react'
import { NavBar,Carousel} from 'antd-mobile';

export default class Apphome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}>住吧家居</NavBar>
                <div style={{height:'220px'}}>
                    <Carousel autoplay={false} infinite>
                        {[1,2].map(val => (
                            <a key={val} href="http://www.baidu.com" style={{ display: 'inline-block', width: '100%', height:220}}>
                                <img src={require(`./img/${val}.jpg`)} alt="" style={{ width: '100%', verticalAlign: 'top' }}/>
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div className="homediv-top">
                    <div className='homediv-top-div' style={{width:'120px',height:'120px',float:'left',margin:'8px 5px 8px 10px',background: "url(" + require("./img/3.jpg") + ") center center /  120px 120px no-repeat"}}>
                        <div style={{width:'120px',height:'120px',backgroundColor:'black',opacity:' 0.5'}}>
                            热门品牌
                        </div>
                    </div>
                    <div className='homediv-top-div' style={{width:'120px',height:'120px',float:'left',margin:'8px 5px',background: "url(" + require("./img/4.jpg") + ") center center /  120px 120px no-repeat"}}>
                        <div style={{width:'120px',height:'120px',backgroundColor:'black',opacity:' 0.5'}}>
                            私人搭配师
                        </div>
                    </div>
                    <div className='homediv-top-div' style={{width:'120px',height:'120px',float:'left',margin:'8px 5px',background: "url(" + require("./img/5.jpg") + ") center center /  120px 120px no-repeat"}}>
                        <div style={{width:'120px',height:'120px',backgroundColor:'black',opacity:' 0.5'}}>
                            选购指南
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',height:'266px', backgroundColor:'white'}}>
                    <div style={{width:'100%',height:'50px',fontSize:'20px',padding:'14px 0px'}}>
                        <div style={{borderLeft:'5px solid blue'}}>热门推荐</div>
                    </div>
                    <img src={require(`./img/11.png`)} style={{ width: '100%',height:'216px'}}/>
                </div>
            </div>
        )
    }
}
