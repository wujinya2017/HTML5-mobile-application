import React, { Component,useEffect } from 'react'
import {View,Text,Dimensions,DeviceEventEmitter,Button,TouchableOpacity,ToastAndroid,StatusBar,ScrollView,StyleSheet} from 'react-native'
import {Icon} from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width/640;

const str=['已回复','待回复'];

export default class Myfabu extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            page:1,
            obj:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=12&&page='+this.state.page)
        .then((res)=>res.json())
        .then(res=>{
            this.setState({
                data:res.data,
            })
        })
        for (var i = 0; i < 12; i++) {
            this.setState({
                obj:[str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)]]

            })
        }
    }
    addPage=()=>{
        this.setState({
            page : ++this.state.page,
        })
        fetch('https://cnodejs.org/api/v1/topics?limit=12&&page='+this.state.page)
        .then((res)=>res.json())
        .then(res=>{
            this.setState({
                data:res.data,
            })
        })
        for (var i = 0; i < 12; i++) {
            this.setState({
                obj:[str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)]]
            })
        }
    }
    jianPage=()=>{
        if(this.state.page > 1){
            this.setState({
                page: --this.state.page
            })
        }else{
            ToastAndroid.show('已经到第一页',10)
        }
        fetch('https://cnodejs.org/api/v1/topics?limit=12&&page='+this.state.page)
        .then((res)=>res.json())
        .then(res=>{
            this.setState({
                data:res.data,
            })
        })
        for (var i = 0; i < 12; i++) {
            this.setState({
                obj:[str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)],str[Math.floor(Math.random()*2)]]
            })
        }
    }

    render() {
        return (
            <ScrollView>
                <StatusBar backgroundColor='#f23030'/>
                <View style={styles.content}>    
                    {
                        this.state.data.map((item,index) => (
                            
                            <View key='item' style={styles.littlelist}>
                                <Text numberOfLines={1} style={{width:320*s,fontSize:15,color:'#717171',paddingLeft:20*s}}>{item.title}</Text>
                                <Text style={{marginLeft:80*s,color:'#717171',width:130*s}}>{item.create_at.substr(0,10)}</Text>
                                {this.state.obj[index]=='待回复'?<Text style={{color:'#f23030',paddingRight:10*s,marginLeft:15*s}}>{this.state.obj[index]}</Text>:<Text style={{paddingRight:10*s,marginLeft:15*s,color:'#717171'}}>{this.state.obj[index]}</Text>}

                            </View>
                        ))
                    } 
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity title="上一页" style={styles.btn1} onPress={()=>this.jianPage()}>
                        <Text style={{color:'white'}}>上一页</Text>
                    </TouchableOpacity>
                    <View style={{width:350*s,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15}}>第{this.state.page}页</Text>
                    </View>
                    <TouchableOpacity title="下一页" style={styles.btn1} onPress={()=>this.addPage()}>
                        <Text style={{color:'white'}}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    content:{
        width:640*s,
        height:800*s,
        backgroundColor:'white',
        paddingTop:10*s
    },
    littlelist:{
        height:65*s,
        width:640*s,
        flexDirection:'row',
        alignItems:'center',
    },
    bottom:{
        width:'100%',
        height:100*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    btn1:{
        width:100*s,
        height:50*s,
        borderRadius:30*s,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f23030',
    }
})