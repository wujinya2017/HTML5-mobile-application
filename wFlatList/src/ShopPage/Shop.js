import React, { Component } from 'react'
import {View,TextInput,ScrollView,FlatList,Button,Text,Image,Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import {Grid,Icon,Tabs} from '@ant-design/react-native'

const {width,height,scale} = Dimensions.get('window');
const s = width/640;

const goods = [
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:36,
        img:require('../../assets/icon/上佳2_03.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:36,
        img:require('../../assets/icon/上佳2_06.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:36,
        img:require('../../assets/icon/上佳2_03.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:36,
        img:require('../../assets/icon/上佳2_06.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:36,
        img:require('../../assets/icon/上佳2_03.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:36,
        img:require('../../assets/icon/上佳2_06.png')
    },
]

export default class Shop extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='请输入商品名称'
                            placeholderTextColor='#999'
                            style={{width:490*s,paddingLeft:30*s,fontSize:12}}    
                        />
                        <TouchableOpacity><Icon name='search'/></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.widd}>
                    <TouchableOpacity><Text style={{color:'red'}}>综合</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{color:'#5d5d5d'}}>销量</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{color:'#5d5d5d'}}>新品</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{color:'#5d5d5d'}}>价格</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{color:'#5d5d5d'}}>信用</Text></TouchableOpacity>
                </View>
                <View style={{height:1500*s}}>
                    <FlatList
                        data={goods}
                        numColumns={2}
                        renderItem={({item})=>(
                            <View>
                                <View style={styles.good}>
                                    <View style={{width:100*s,height:200*s,marginTop:60*s,alignItems:'center',justifyContent:'center'}} >
                                        <Image style={{height:150*s,}} resizeMode='contain' source={item.img}/>
                                    </View>
                                    <Text style={{color:'#5d5d5d',marginTop:60*s}}>{item.title}</Text>
                                </View>
                                <View style={styles.good1}>
                                    <Text style={{width:Dimensions.width,color:'red',marginTop:30*s}}>{item.price}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height:80*s,
        borderBottomColor:'#E8E8E8',
        borderBottomWidth:1/3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    search:{
        width:544*s,
        height:60*s,
        backgroundColor:'#EEEEEE',
        flexDirection:'row',
        alignItems:'center'
    },
    nav:{
        height:73*s,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    good:{
        width:295*s,
        backgroundColor:'#fff',
        marginLeft:15*s,
        marginTop:10*s,
        alignItems:'center',
        paddingLeft:10*s,
    },
    good1:{
        width:295*s,
        backgroundColor:'#fff',
        marginLeft:15*s,
        marginTop:-1*s,
        paddingLeft:10*s
    },
    widd:{
        width:Dimensions.width,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:1*s,
        marginBottom:10*s,
        alignItems:'center',
        backgroundColor:'white',
        height:72*s
    },
});