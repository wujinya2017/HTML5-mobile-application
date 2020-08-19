import React, { Component ,useEffect } from 'react'
import {View,Text,ImageBackground,TouchableOpacity,AsyncStorage,ScrollView,Image,Dimensions,StyleSheet,FlatList} from 'react-native'
import { Icon } from '@ant-design/react-native'
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux'

const {width} = Dimensions.get('window');
const s = width/640;

const options = {
    title: '照相机',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const list1=[
    {
        img:<Icon name='setting'/>,
        title:'账户管理'
    },
    {
        img:<Icon name='environment'/>,
        title:'收货地址'
    },
    {
        img:<Icon name='idcard'/>,
        title:'我的信息'
    },
    {
        img:<Icon name='container'/>,
        title:'我的订单'
    },
    {
        img:<Icon name='qrcode'/>,
        title:'我的二维码'
    },
    {
        img:<Icon name='trophy'/>,
        title:'我的积分'
    },
    {
        img:<Icon name='star'/>,
        title:'我的收藏'
    },
]



export default class My extends Component {
    constructor(){
        super();
        this.state={       
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {   
              const source = { uri: response.uri };
              AsyncStorage.setItem('url',JSON.stringify(source),()=>{console.log('store success')})
            }      
          });   
    }
  
    componentDidMount(){
        AsyncStorage.getItem('url')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('url')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        })
    }
    exitapp = ()=>{
        Actions.login();
        AsyncStorage.removeItem('user');
        AsyncStorage.clear();
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <ImageBackground 
                        source={require('../../assets/icon/honhse_02.png')}
                        style={{width:Dimensions.width,height:360*s,alignItems:'center',position:'relative'}}
                    >
                        <Text style={{position:'absolute',top:10*s,right:20*s}} onPress={this.exitapp}>点击退出</Text>
                        <TouchableOpacity onPress={()=> this.takephoto()}>
                            <ImageBackground 
                                source={require('../../assets/icon/touxiang1.jpg')}
                                style={[{width:150*s,height:150*s,alignItems:'center'},styles.wimage]}
                            >
                                <Image style={{width:150*s,height:150*s}} source={this.state.imageUrl} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <Text style={{fontSize:20,color:'white',marginTop:24*s}}>BINNU DHLLON</Text>
                    </ImageBackground> 

        
                    <View style={styles.title1}>
                        <Image style={{width:30*s,height:35*s}} source={require('../../assets/icon/我的.png')}/>
                        <Text style={{fontSize:15,color:'#727171',marginLeft:10*s}}>我的个人中心</Text>
                    </View>
                    <View style={styles.content1}>
                        <FlatList
                            data={list1}
                            numColumns={3}
                            renderItem={({item})=>(
                                <TouchableOpacity>
                                    <View style={styles.dancontent1}>
                                        <View>{item.img}</View>
                                        <Text style={{marginTop:20*s}}>{item.title}</Text>
                                    </View> 
                                </TouchableOpacity>                       
                            )}
                        />
                    </View>
                    <View style={[styles.title1,{marginTop:10*s}]}>
                        <Icon name='tag'/>
                        <Text style={{fontSize:15,color:'#727171',marginLeft:10*s}}>E族活动</Text>
                    </View>
                    <View style={styles.content2}>
                        <TouchableOpacity>
                            <View style={styles.dancontent1}>
                                <View><Icon name='tool'/></View>
                                <Text style={{marginTop:20*s}}>居家维修保养</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.dancontent1}>
                                <View><Icon name='car'/></View>
                                <Text style={{marginTop:20*s}}>出行接送</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.dancontent1}>
                                <View><Icon name='user'/></View>
                                <Text style={{marginTop:20*s}}>我的受赠人</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.dancontent1}>
                                <View><Icon name='skin'/></View>
                                <Text style={{marginTop:20*s}}>我的住宿优惠</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.dancontent1}>
                                <View><Icon name='flag'/></View>
                                <Text style={{marginTop:20*s}}>我的活动</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Actions.fabu()}>
                            <View style={styles.dancontent1}>
                                <View><Icon name='form'/></View>
                                <Text style={{marginTop:20*s}}>我的发布</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
              
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:96*s}}>
                        <Text style={{color:'#767676'}}>BINNU DHLLON | 退出</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wimage:{
        width:150*s,
        height:150*s,
        borderRadius:75*s,
        overflow:'hidden',
        borderWidth:3,
        borderColor:'white',
        marginTop:60*s,
    },
    title1:{
        flexDirection:'row',
        height:70*s,
        backgroundColor:'white',
        paddingLeft:25*s,
        alignItems:'center',
    },
    content1:{
        flexDirection:'row',
        flexWrap:'wrap',
        height:385*s,
        marginTop:3*s,
        backgroundColor:'white',
        paddingTop:30*s,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    content2:{
        flexDirection:'row',
        flexWrap:'wrap',
        height:285*s,
        marginTop:3*s,
        backgroundColor:'white',
        paddingTop:30*s,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    dancontent1:{
        width:213*s,
        height:105*s,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10*s,
    }
})


