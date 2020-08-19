import React, { Component } from 'react'
import { NavBar, Icon ,Tabs} from 'antd-mobile';

const tabs2 = [
    { title: '推荐'},
    { title: '冬季'},
    { title: '宜家'},
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'},
  ];

export default class Applingan extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <Icon key="0" type="search" style={{color:'white',marginRight: '16px' }} />,
                ]}
                >灵感</NavBar>         
                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarActiveTextColor='#3fcccb'
                    tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{padding:'20px 20px'}}>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/13.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/14.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                    </div>
                    <div style={{padding:'20px 20px'}}>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/13.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/14.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                    </div>
                    <div style={{padding:'20px 20px'}}>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/13.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/14.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                    </div>
                    <div style={{padding:'20px 20px'}}>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/13.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/14.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                    </div>
                    <div style={{padding:'20px 20px'}}>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/13.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/14.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                    </div>
                    <div style={{padding:'20px 20px'}}>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/13.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/14.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                        <img src={require(`./img/10.png`)} style={{width:'50%',height:'220px',paddingRight:'10px'}}/>
                        <img src={require(`./img/12.png`)} style={{width:'50%',height:'220px',paddingLeft:'10px'}}/>
                    </div>
                </Tabs>
            
            </div>
        )
    }
}



