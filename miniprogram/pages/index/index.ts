import { AnonymousLogin } from '../../services/openApi'
import { setGlobalData } from '../../utils/global'

// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
   pk: 'da577b70be6b43e4bf76e09cbcfba478',
   ps: '15d30ba7e5164d8788401cb0e95836d0',
   password: 'giz$2025',
   SSID: 'Gizwits',
  },
  async onLoad(){
    const uid = '7a90c0abba3b4af18b1056c1e8981178';
    const userData: any = await AnonymousLogin({ uid });
    setGlobalData('token', userData.data.token)
    setGlobalData('uid', uid)
    const that = this;
    wx.startWifi({
      success(res){
        console.log(res.errMsg, 'wifi初始化成功')
        wx.getConnectedWifi({
          success: (data) => {
            console.log(data.wifi.SSID);
            that.setData({
              SSID: data.wifi.SSID
            })
          }
        });
      },
      fail:function(res){
        console.log(res.errMsg, 'wifi初始化失败')
      }
    });
  },
  bindPk(e: any) {
    this.setData({
      pk: e.detail.value
    })
  },
  bindPs(e: any) {
    this.setData({
      ps: e.detail.value
    })
  },
  bindPassword(e: any) {
    this.setData({
      password: e.detail.value
    })
  },
  next() {
    const { pk, ps, password, SSID } = this.data;
    console.log('this.data', this.data)
    wx.navigateTo({
      url: `/pages/config/config?SSID=${SSID}&password=${password}&pk=${pk}&ps=${ps}`,
    })
  }
})
