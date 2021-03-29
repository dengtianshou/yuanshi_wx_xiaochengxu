"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var openApi_1 = require("../../services/openApi");
var global_1 = require("../../utils/global");
var app = getApp();
Page({
    data: {
        pk: 'da577b70be6b43e4bf76e09cbcfba478',
        ps: '15d30ba7e5164d8788401cb0e95836d0',
        password: 'giz$2025',
        SSID: 'Gizwits',
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var uid, userData, that;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uid = '7a90c0abba3b4af18b1056c1e8981178';
                        return [4, openApi_1.AnonymousLogin({ uid: uid })];
                    case 1:
                        userData = _a.sent();
                        global_1.setGlobalData('token', userData.data.token);
                        global_1.setGlobalData('uid', uid);
                        that = this;
                        wx.startWifi({
                            success: function (res) {
                                console.log(res.errMsg, 'wifi初始化成功');
                                wx.getConnectedWifi({
                                    success: function (data) {
                                        console.log(data.wifi.SSID);
                                        that.setData({
                                            SSID: data.wifi.SSID
                                        });
                                    }
                                });
                            },
                            fail: function (res) {
                                console.log(res.errMsg, 'wifi初始化失败');
                            }
                        });
                        return [2];
                }
            });
        });
    },
    bindPk: function (e) {
        this.setData({
            pk: e.detail.value
        });
    },
    bindPs: function (e) {
        this.setData({
            ps: e.detail.value
        });
    },
    bindPassword: function (e) {
        this.setData({
            password: e.detail.value
        });
    },
    next: function () {
        var _a = this.data, pk = _a.pk, ps = _a.ps, password = _a.password, SSID = _a.SSID;
        console.log('this.data', this.data);
        wx.navigateTo({
            url: "/pages/config/config?SSID=" + SSID + "&password=" + password + "&pk=" + pk + "&ps=" + ps,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUF1RDtBQUN2RCw2Q0FBa0Q7QUFJbEQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0wsRUFBRSxFQUFFLGtDQUFrQztRQUN0QyxFQUFFLEVBQUUsa0NBQWtDO1FBQ3RDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLElBQUksRUFBRSxTQUFTO0tBQ2Y7SUFDSyxNQUFNLEVBQVo7Ozs7Ozt3QkFDUSxHQUFHLEdBQUcsa0NBQWtDLENBQUM7d0JBQ3pCLFdBQU0sd0JBQWMsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBQTs7d0JBQTdDLFFBQVEsR0FBUSxTQUE2Qjt3QkFDbkQsc0JBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDM0Msc0JBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQ25CLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2xCLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsT0FBTyxZQUFDLEdBQUc7Z0NBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO2dDQUNwQyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0NBQ2xCLE9BQU8sRUFBRSxVQUFDLElBQUk7d0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDOzRDQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7eUNBQ3JCLENBQUMsQ0FBQTtvQ0FDSixDQUFDO2lDQUNGLENBQUMsQ0FBQzs0QkFDTCxDQUFDOzRCQUNELElBQUksRUFBQyxVQUFTLEdBQUc7Z0NBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBOzRCQUN0QyxDQUFDO3lCQUNGLENBQUMsQ0FBQzs7Ozs7S0FDSjtJQUNELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sQ0FBTTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxZQUFZLEVBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxJQUFJO1FBQ0ksSUFBQSxLQUE2QixJQUFJLENBQUMsSUFBSSxFQUFwQyxFQUFFLFFBQUEsRUFBRSxFQUFFLFFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSwrQkFBNkIsSUFBSSxrQkFBYSxRQUFRLFlBQU8sRUFBRSxZQUFPLEVBQUk7U0FDaEYsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFub255bW91c0xvZ2luIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3BlbkFwaSdcbmltcG9ydCB7IHNldEdsb2JhbERhdGEgfSBmcm9tICcuLi8uLi91dGlscy9nbG9iYWwnXG5cbi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICBwazogJ2RhNTc3YjcwYmU2YjQzZTRiZjc2ZTA5Y2JjZmJhNDc4JyxcbiAgIHBzOiAnMTVkMzBiYTdlNTE2NGQ4Nzg4NDAxY2IwZTk1ODM2ZDAnLFxuICAgcGFzc3dvcmQ6ICdnaXokMjAyNScsXG4gICBTU0lEOiAnR2l6d2l0cycsXG4gIH0sXG4gIGFzeW5jIG9uTG9hZCgpe1xuICAgIGNvbnN0IHVpZCA9ICc3YTkwYzBhYmJhM2I0YWYxOGIxMDU2YzFlODk4MTE3OCc7XG4gICAgY29uc3QgdXNlckRhdGE6IGFueSA9IGF3YWl0IEFub255bW91c0xvZ2luKHsgdWlkIH0pO1xuICAgIHNldEdsb2JhbERhdGEoJ3Rva2VuJywgdXNlckRhdGEuZGF0YS50b2tlbilcbiAgICBzZXRHbG9iYWxEYXRhKCd1aWQnLCB1aWQpXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgd3guc3RhcnRXaWZpKHtcbiAgICAgIHN1Y2Nlc3MocmVzKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZywgJ3dpZmnliJ3lp4vljJbmiJDlip8nKVxuICAgICAgICB3eC5nZXRDb25uZWN0ZWRXaWZpKHtcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS53aWZpLlNTSUQpO1xuICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgU1NJRDogZGF0YS53aWZpLlNTSURcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmYWlsOmZ1bmN0aW9uKHJlcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2csICd3aWZp5Yid5aeL5YyW5aSx6LSlJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgYmluZFBrKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBwazogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuICBiaW5kUHMoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHBzOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gIGJpbmRQYXNzd29yZChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcGFzc3dvcmQ6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgbmV4dCgpIHtcbiAgICBjb25zdCB7IHBrLCBwcywgcGFzc3dvcmQsIFNTSUQgfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5kYXRhJywgdGhpcy5kYXRhKVxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL2NvbmZpZy9jb25maWc/U1NJRD0ke1NTSUR9JnBhc3N3b3JkPSR7cGFzc3dvcmR9JnBrPSR7cGt9JnBzPSR7cHN9YCxcbiAgICB9KVxuICB9XG59KVxuIl19