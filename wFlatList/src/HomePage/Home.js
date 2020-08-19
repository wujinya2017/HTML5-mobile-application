import React, { Component } from 'react'
import {View,Scene,StatusBar,Text,Image,SafeAreaView,StyleSheet,TextInput,ScrollView,TouchableOpacity,Dimensions,FlatList} from 'react-native'
import { Carousel,Icon} from '@ant-design/react-native'

const {width,height,scale} = Dimensions.get('window');
const s = width/640;
console.log(width,height,scale);

const listhome = [
    {
        img:require('../../assets/icon/首页1.png'),
        title:'住宿优惠',
        content:'>'
    },
    {
        img:require('../../assets/icon/首页2.png'),
        title:'出行接送',
        content:'>'
    },
    {
        img:require('../../assets/icon/首页3.png'),
        title:'',
        content:'>'
    },
    {
        img:require('../../assets/icon/首页4.png'),
        title:'居家维修保养',
        content:'>'
    },
    
]

export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.winput}>
                        <Icon style={{color:'white'}} name='search'/>
                        <TextInput style={{fontSize:12}} placeholderTextColor='white' placeholder='请输入您要搜索的关键字'/>
                    </View>
                    <View style={{width:60*s,height:78*s,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity>
                            <Image 
                            style={{width:40*s,height:40*s}}
                            source={require('../../assets/icon/headgouwu.png')}/>
                        </TouchableOpacity>
                    </View>  
                </View>
                <Carousel autoplay>
                    <View>
                    <Image style={styles.lunbotu} source={require('../../assets/icon/lunbo2.jpg')}/>
                    </View>
                    <View>
                    <Image style={styles.lunbotu} source={require('../../assets/icon/lunbo1.jpg')}/>
                    </View>
                    <View>
                    <Image style={styles.lunbotu} source={require('../../assets/icon/lunbo3.jpg')}/>
                    </View>     
                </Carousel>
                <View>
                    <FlatList
                        data={listhome}
                        renderItem={({item})=>(
                            <View style={{
                                height:120*s,
                                marginTop:10*s,
                                backgroundColor:'white',
                                flexDirection:'row',
                                flexWrap:'wrap',
                                alignItems:'center'
                            }}>
                                <Image style={{width:100*s,height:100*s,marginTop:20*s,marginLeft:24*s}}  source={item.img}/>
                                <Text style={{width:430*s,fontSize:20,color:'#5d5d5d',marginLeft:50*s}}>{item.title}</Text>
                                <TouchableOpacity><Text style={{color:'#5d5d5d',fontSize:20}}>{item.content}</Text></TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
                <TouchableOpacity style={styles.an}>
                    <Text style={{fontSize:20,color:'white'}}>发布需求</Text>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <Icon name='copyright'/>
                    <Text style={{color:'#767676'}}>E族之家，版权所有</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:640*s,
        height:80*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f23030'
    },
    winput:{
        flexDirection:'row',
        width:528*s,
        backgroundColor:'white',
        height:60*s,
        opacity:0.7,
        borderRadius:264*s,
        alignItems:'center',
        paddingLeft:20*s
    },
    an:{
        width:544*s,
        height:72*s,
        alignItems:'center',
        justifyContent:'center',
        marginTop:36*s,
        marginLeft:(width-544*s)/2,
        borderRadius:10,
        backgroundColor:'red'
    },
    bottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:32*s,
        height:72*s,
    },
    lunbotu:{
        width:640*s,
        height:274*s,

    }
})