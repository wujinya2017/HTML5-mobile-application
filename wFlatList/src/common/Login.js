import React, { Component } from 'react'
import {View,Text,TextInput,TouchableOpacity,AsyncStorage,Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'
import {myFetch} from '../utils'

const {width} = Dimensions.get('window');
const s = width/640;

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false,
            iscanlogin:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        this.setState({isloading:true})        
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                   
                })
            
        })
        if (this.state.username!= '' && this.state.pwd != '') {
            Actions.homePage()
        }else{
            this.setState({iscanlogin:true});
            this.setState({isloading:false})
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{marginLeft:20*s,marginTop:30*s}}><Text style={{fontSize:30}}>登录</Text></View>
                <View style={{marginTop:350*s,justifyContent:'center'}}>
                    <View  style={{alignItems:'center',position:'relative'}}>
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
                        {
                            this.state.iscanlogin?<View style={{position:'absolute',bottom:75*s,left:70*s}}><Text style={{color:'red'}}>用户名或密码不能为空</Text></View>:null
                        }
                        <TouchableOpacity
                            onPress={this.login}
                            style={{
                                width:'80%',
                                height:65*s,
                                marginTop:40*s,
                                alignItems:'center',
                                backgroundColor:'#ccc',
                                justifyContent:'center'
                            }}
                        >
                            <Text style={{color:'white',fontSize:18,}}>登录</Text>
                        </TouchableOpacity>
                    </View> 
                    <TouchableOpacity style={{width:110*s,marginTop:30*s,marginLeft:480*s}} onPress={()=>Actions.logon()}>
                        <Text style={{fontSize:15,color:'blue'}}>点击注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isloading?
                    <View style={{width:200*s,height:40*s,marginLeft:250*s,marginTop:300*s}}><Text style={{fontSize:15}}>正在登陆...</Text></View>:
                    null
                }
            </View>
            
        )
    }
}
