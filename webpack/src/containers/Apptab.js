import { TabBar } from 'antd-mobile';
import React from 'react';
import Apphome from './Apphome';
import Applingan from './Applingan'
import Appshangcheng from './Appshangcheng';
export default class Apptab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab'
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div className='iconfont icon-shouye' style={{
              width: '22px',
              height: '22px'}}
            />
            }
            selectedIcon={<div className='iconfont icon-shouye' style={{//选中时的图标
              width: '22px',
              height: '22px'}}
            />
            }
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId"
          >
              <Apphome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className='iconfont icon-linggan' style={{
                width: '22px',
                height: '22px'}}
              />
            }
            selectedIcon={<div className='iconfont icon-linggan' style={{
                width: '22px',
                height: '22px'}}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId1"
          >
            <Applingan/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className='iconfont icon-store_icon' style={{
                width: '22px',
                height: '22px'}}
              />
            }
            selectedIcon={<div className='iconfont icon-store_icon' style={{
                width: '22px',
                height: '22px'}}
              />
            }
            title="商城"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Appshangcheng/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className='iconfont icon-wode' style={{
                width: '22px',
                height: '22px'}}
              />
            }
            selectedIcon={
              <div className='iconfont icon-wode' style={{
                width: '22px',
                height: '22px'}}
              />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}