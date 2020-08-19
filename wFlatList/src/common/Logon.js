import React, { Component } from 'react'
import {View,Text,Button,TextInput,TouchableOpacity,AsyncStorage,Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'
import {myFetch} from '../utils'

const {width} = Dimensions.get('window');
const s = width/640;

export default class Logon extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    logon = ()=>{
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>console.log(res))
        Actions.login();
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{width:400*s,marginLeft:20*s,marginTop:30*s,flexDirection:'row',alignItems:'center'}}>
                    <Icon name="left" style={{width:40*s,height:40*s,color:'black',marginTop:8*s,marginRight:20*s}} onPress={()=>Actions.login()}/>
                    <Text style={{fontSize:30}}>注册</Text>
                </View>
                <View style={{flex:1}}>
                    <View  style={{alignItems:'center',marginTop:350*s}}>
                        <View style={{
                        flexDirection:'row',
                        width:'80%',
                        height:65*s,
                        margin:10*s,
                        borderBottomWidth:1,
                        borderBottomColor:'#ccc',
                        }}>
                            <Icon name='user' style={{marginTop:7*s}} color='red'/>
                            <TextInput placeholder='用户名' onChangeText={this.userhandle}/>
                        </View>
                        <View style={{
                        flexDirection:'row',
                        width:'80%',
                        height:65*s,
                        margin:10*s,
                        borderBottomWidth:1,
                        borderBottomColor:'#ccc',
                        }}>
                            <Icon name='eye' style={{marginTop:7*s}} color='red'/>
                            <TextInput placeholder='密码' secureTextEntry={true}  onChangeText={this.pwdhandle}/>
                        </View>
        
                        <TouchableOpacity
                            onPress={this.logon}
                            style={{
                                width:'80%',
                                height:65*s,
                                marginTop:40*s,
                                alignItems:'center',
                                backgroundColor:'#ccc',
                                justifyContent:'center'
                            }}
                        >
                            <Text style={{color:'white',fontSize:18,}}>注册</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
            
        )
    }
}
