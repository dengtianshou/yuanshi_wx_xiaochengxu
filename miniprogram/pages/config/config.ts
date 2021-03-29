import GizwitsSdk from 'mini_program_gizwits_sdk';

import { getGlobalData } from '../../utils/global';

Page({
  data: {
    isRun: false,
    devices: [],
  },
  sdk: null,
  pk: '',
  ps: '',
  SSID: '',
  password: '12345678',
  onLoad(option) {
    // 获取当前连接wifi
    const { SSID, password, pk, ps } = option as any;
    this.SSID = SSID;
    this.password = password;
    this.pk = pk;
    this.ps = ps;
    const token = getGlobalData("token");
    const uid = getGlobalData("uid");

    // 增加匿名登录
    this.sdk = new GizwitsSdk({
      appID: '9952da62ec5044ed8fbf47b9d0f2dfbe',
      appSecret: 'ebe91ca4d7884e11990ac4b7dc2cc1b9',
      specialProductKeys: [pk],
      specialProductKeySecrets: [ps],
      token: token,
      uid: uid,
      cloudServiceInfo: null,
    });
  },
  onShow() {
    console.log('onShowonShowonShow')
    wx.getConnectedWifi({
      success: async (data) => {
        console.log('data', data)
        if (data.wifi.SSID.indexOf('XPG-GAgent-') !== -1) {
          // 开始配网
          this.setData({
            isRun: true
          });

          try {
            const data = await (this.sdk as any).setDeviceOnboardingDeploy({
              ssid: this.SSID,
              password: this.password,
              timeout: 160,
              softAPSSIDPrefix: 'XPG-GAgent-',
            });
            console.log('setDeviceOnboardingDeploy', data);
            if (data.success) {
              this.setData({
                devices: data.data,
              });
            }
          } catch (error) {
            console.log('setDeviceOnboardingDeployError', error);
          }
        }
      }
    });
  }
})
