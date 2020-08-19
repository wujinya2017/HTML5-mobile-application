import React,{useState,useEffect} from 'react';
import {ToastAndroid,BackHandler,View,Text,Dimensions,AsyncStorage,} from 'react-native';
import { Tabs, Scene, Router, Actions,Lightbox,Modal,Overlay } from 'react-native-router-flux';
import Home from './src/HomePage/Home'
import Shop from './src/ShopPage/Shop';
import Buy from './src/Buy';
import My from './src/MyPage/My';
import {Icon} from '@ant-design/react-native'
import Myfabu from './src/MyPage/Myfabu';
import SplashScreen from 'react-native-splash-screen'
import SwiperPage from './src/common/SwiperPage'
import Login from './src/common/Login'
import Logon from './src/common/Logon';

console.disableYellowBox = true;
const {width} = Dimensions.get('window');
const s = width/640;

const App = () => {
  let now = 0;
  let [isInstall,setInstall] = useState(true);
  let [isLogin,setLogin] = useState(false);
  useEffect(()=>{
    AsyncStorage.getItem('isInstall')
        .then(res=>{
          if (res) {
            setInstall(false)
          }
        })
    // AsyncStorage.removeItem('user');
    // AsyncStorage.clear();
    AsyncStorage.getItem('user')      
        .then(res=>{
          let user = JSON.parse(res)
          if(!user){
            //启动页
            SplashScreen.hide();
          }
          if(user&&user.token){
            setLogin(true);
            SplashScreen.hide();
          }
        })
  },[])
  let afterInstall = ()=>{
      console.log('afterInstall')
      setInstall(false)
  }
  if (isInstall) {
      return(
        <View style={{flex:1}}>
          {/* 引导页 */}
          <SwiperPage afterInstall={afterInstall}/>
        </View>
      )
  }
  return (
    <Router
      backAndroidHandler={()=>{
        console.log(Actions.currentScene);
        if(Actions.currentScene !== 'shouye' && Actions.currentScene !== 'login'){
          Actions.pop();
          return true;
        }else{
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }
      }}
    >
      <Modal key='modal' hideNavBar>
        <Lightbox hideNavBar key='lightbox'>
          <Scene key='root' hideNavBar>
            <Tabs
              key='tabbar' 
              activeTintColor='red'
              inactiveTintColor='gray'
              tabBarStyle={{backgroundColor:'white'}}
            >
              {/* 首页 */}
              <Scene
                key='homePage'
                title='首页'
                icon={
                  ({focused})=><Icon
                    color={focused?'red':'gray'}
                    name='home'
                  />
                } 
              >
                <Scene key='shouye'hideNavBar  component={Home}/>
              </Scene>
              {/* 商品分类 */}
              <Scene
                key='shangpinfenlei' 
                title='商品分类' 
                icon={
                  ({focused})=><Icon
                    color={focused?'red':'gray'}
                    name='appstore'
                  />
                } 
              >
                <Scene key='sp1' hideTabBar hideNavBar component={Shop}/>
              </Scene>
              {/* 购物车 */}
              <Scene
                key='gouwuche' 
                title='购物车' 
                icon={
                  ({focused})=><Icon
                    color={focused?'red':'gray'}
                    name='shopping-cart'
                  />
                } 
                component={Buy}
              />
              {/* 个人中心 */}
              <Scene
                // hideNavBar
                title="个人中心"
                icon={
                  ({focused})=><Icon
                    color={focused?'red':'gray'}
                    name='user'
                  />
                } 
              >
                <Scene key='gerenzhongxin' hideNavBar component={My}/>
                <Scene key='fabu' 
                  hideTabBar  
                  title="我的发布"
                  titleTextColor='red'
                  component={Myfabu}
                  renderLeftButton={<Icon style={{marginLeft:30*s,color:'white'}} onPress={Actions.pop} name="left"/>}
                  navigationBarStyle={{backgroundColor:'#f23030'}}
                  renderRightButton={<Icon style={{marginRight:30*s,color:'white'}} name="ellipsis"/>}
                  titleStyle={{flex:1,textAlign:'center',color:'white',backgroundColor:'#f23030'}}
                />
              </Scene>
            </Tabs>
          </Scene>
        </Lightbox>
        <Scene key='login' initial={!isLogin} title='登录' component={Login}/> 
        <Scene key='logon'  title='注册' component={Logon}/> 

      </Modal>
    </Router>
  );
};
export default App;
