import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, AsyncStorage,TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start = () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            console.log('store success')
        });
        this.props.afterInstall();
    };
    render() {
        return (
            <Swiper showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.jpg')} />
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.jpg')} />
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.jpg')} />
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{color: 'white'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%'
    },
    slide1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    start: {
        position:'absolute',
        bottom: 150,
        width: 150,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    }
})