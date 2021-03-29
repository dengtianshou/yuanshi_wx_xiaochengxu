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
var mini_program_gizwits_sdk_1 = require("mini_program_gizwits_sdk");
var global_1 = require("../../utils/global");
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
    onLoad: function (option) {
        var _a = option, SSID = _a.SSID, password = _a.password, pk = _a.pk, ps = _a.ps;
        this.SSID = SSID;
        this.password = password;
        this.pk = pk;
        this.ps = ps;
        var token = global_1.getGlobalData("token");
        var uid = global_1.getGlobalData("uid");
        this.sdk = new mini_program_gizwits_sdk_1.default({
            appID: '9952da62ec5044ed8fbf47b9d0f2dfbe',
            appSecret: 'ebe91ca4d7884e11990ac4b7dc2cc1b9',
            specialProductKeys: [pk],
            specialProductKeySecrets: [ps],
            token: token,
            uid: uid,
            cloudServiceInfo: null,
        });
    },
    onShow: function () {
        var _this = this;
        console.log('onShowonShowonShow');
        wx.getConnectedWifi({
            success: function (data) { return __awaiter(_this, void 0, void 0, function () {
                var data_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('data', data);
                            if (!(data.wifi.SSID.indexOf('XPG-GAgent-') !== -1)) return [3, 4];
                            this.setData({
                                isRun: true
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, this.sdk.setDeviceOnboardingDeploy({
                                    ssid: this.SSID,
                                    password: this.password,
                                    timeout: 160,
                                    softAPSSIDPrefix: 'XPG-GAgent-',
                                })];
                        case 2:
                            data_1 = _a.sent();
                            console.log('setDeviceOnboardingDeploy', data_1);
                            if (data_1.success) {
                                this.setData({
                                    devices: data_1.data,
                                });
                            }
                            return [3, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.log('setDeviceOnboardingDeployError', error_1);
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            }); }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWtEO0FBRWxELDZDQUFtRDtBQUVuRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxHQUFHLEVBQUUsSUFBSTtJQUNULEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEVBQUU7SUFDTixJQUFJLEVBQUUsRUFBRTtJQUNSLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLE1BQU0sRUFBTixVQUFPLE1BQU07UUFFTCxJQUFBLEtBQTZCLE1BQWEsRUFBeEMsSUFBSSxVQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsRUFBRSxRQUFBLEVBQUUsRUFBRSxRQUFrQixDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFNLEtBQUssR0FBRyxzQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sR0FBRyxHQUFHLHNCQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGtDQUFVLENBQUM7WUFDeEIsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxTQUFTLEVBQUUsa0NBQWtDO1lBQzdDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3hCLHdCQUF3QixFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzlCLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLEdBQUc7WUFDUixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQU47UUFBQSxpQkE4QkM7UUE3QkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsQixPQUFPLEVBQUUsVUFBTyxJQUFJOzs7Ozs0QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7aUNBQ3JCLENBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLEVBQTVDLGNBQTRDOzRCQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNYLEtBQUssRUFBRSxJQUFJOzZCQUNaLENBQUMsQ0FBQzs7Ozs0QkFHWSxXQUFPLElBQUksQ0FBQyxHQUFXLENBQUMseUJBQXlCLENBQUM7b0NBQzdELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQ0FDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0NBQ3ZCLE9BQU8sRUFBRSxHQUFHO29DQUNaLGdCQUFnQixFQUFFLGFBQWE7aUNBQ2hDLENBQUMsRUFBQTs7NEJBTEksU0FBTyxTQUtYOzRCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsTUFBSSxDQUFDLENBQUM7NEJBQy9DLElBQUksTUFBSSxDQUFDLE9BQU8sRUFBRTtnQ0FDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQ0FDWCxPQUFPLEVBQUUsTUFBSSxDQUFDLElBQUk7aUNBQ25CLENBQUMsQ0FBQzs2QkFDSjs7Ozs0QkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLE9BQUssQ0FBQyxDQUFDOzs7OztpQkFHMUQ7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdpendpdHNTZGsgZnJvbSAnbWluaV9wcm9ncmFtX2dpendpdHNfc2RrJztcblxuaW1wb3J0IHsgZ2V0R2xvYmFsRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL2dsb2JhbCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaXNSdW46IGZhbHNlLFxuICAgIGRldmljZXM6IFtdLFxuICB9LFxuICBzZGs6IG51bGwsXG4gIHBrOiAnJyxcbiAgcHM6ICcnLFxuICBTU0lEOiAnJyxcbiAgcGFzc3dvcmQ6ICcxMjM0NTY3OCcsXG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICAvLyDojrflj5blvZPliY3ov57mjqV3aWZpXG4gICAgY29uc3QgeyBTU0lELCBwYXNzd29yZCwgcGssIHBzIH0gPSBvcHRpb24gYXMgYW55O1xuICAgIHRoaXMuU1NJRCA9IFNTSUQ7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIHRoaXMucGsgPSBwaztcbiAgICB0aGlzLnBzID0gcHM7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRHbG9iYWxEYXRhKFwidG9rZW5cIik7XG4gICAgY29uc3QgdWlkID0gZ2V0R2xvYmFsRGF0YShcInVpZFwiKTtcblxuICAgIC8vIOWinuWKoOWMv+WQjeeZu+W9lVxuICAgIHRoaXMuc2RrID0gbmV3IEdpendpdHNTZGsoe1xuICAgICAgYXBwSUQ6ICc5OTUyZGE2MmVjNTA0NGVkOGZiZjQ3YjlkMGYyZGZiZScsXG4gICAgICBhcHBTZWNyZXQ6ICdlYmU5MWNhNGQ3ODg0ZTExOTkwYWM0YjdkYzJjYzFiOScsXG4gICAgICBzcGVjaWFsUHJvZHVjdEtleXM6IFtwa10sXG4gICAgICBzcGVjaWFsUHJvZHVjdEtleVNlY3JldHM6IFtwc10sXG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1aWQ6IHVpZCxcbiAgICAgIGNsb3VkU2VydmljZUluZm86IG51bGwsXG4gICAgfSk7XG4gIH0sXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnb25TaG93b25TaG93b25TaG93JylcbiAgICB3eC5nZXRDb25uZWN0ZWRXaWZpKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcbiAgICAgICAgaWYgKGRhdGEud2lmaS5TU0lELmluZGV4T2YoJ1hQRy1HQWdlbnQtJykgIT09IC0xKSB7XG4gICAgICAgICAgLy8g5byA5aeL6YWN572RXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGlzUnVuOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0ICh0aGlzLnNkayBhcyBhbnkpLnNldERldmljZU9uYm9hcmRpbmdEZXBsb3koe1xuICAgICAgICAgICAgICBzc2lkOiB0aGlzLlNTSUQsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICB0aW1lb3V0OiAxNjAsXG4gICAgICAgICAgICAgIHNvZnRBUFNTSURQcmVmaXg6ICdYUEctR0FnZW50LScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXREZXZpY2VPbmJvYXJkaW5nRGVwbG95JywgZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgZGV2aWNlczogZGF0YS5kYXRhLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldERldmljZU9uYm9hcmRpbmdEZXBsb3lFcnJvcicsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSlcbiJdfQ==