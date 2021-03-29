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
exports.AnonymousLogin = void 0;
function AnonymousLogin(_a) {
    var uid = _a.uid;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2, new Promise(function (res, rej) {
                    wx.request({
                        url: 'https://api.gizwits.com/app/users',
                        data: {
                            phone_id: uid,
                        },
                        method: 'POST',
                        header: {
                            'content-type': 'application/json',
                            'X-Gizwits-Application-Id': '9952da62ec5044ed8fbf47b9d0f2dfbe'
                        },
                        success: function (data) {
                            res(data);
                        },
                        fail: function (err) {
                            rej(err);
                        },
                    });
                })];
        });
    });
}
exports.AnonymousLogin = AnonymousLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbkFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW5BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBc0IsY0FBYyxDQUFFLEVBQW9CO1FBQW5CLEdBQUcsU0FBQTs7O1lBQ3hDLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztvQkFDMUIsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxHQUFHLEVBQUUsbUNBQW1DO3dCQUN4QyxJQUFJLEVBQUU7NEJBQ0osUUFBUSxFQUFFLEdBQUc7eUJBQ2Q7d0JBQ0QsTUFBTSxFQUFFLE1BQU07d0JBQ2QsTUFBTSxFQUFFOzRCQUNOLGNBQWMsRUFBRSxrQkFBa0I7NEJBQ2xDLDBCQUEwQixFQUFFLGtDQUFrQzt5QkFDL0Q7d0JBQ0QsT0FBTyxFQUFFLFVBQUMsSUFBSTs0QkFDWixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1osQ0FBQzt3QkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHOzRCQUNSLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDWCxDQUFDO3FCQUNGLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsRUFBQTs7O0NBQ0g7QUFwQkQsd0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQW5vbnltb3VzTG9naW4gKHt1aWR9OiB7dWlkOiBzdHJpbmd9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmdpendpdHMuY29tL2FwcC91c2VycycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBob25lX2lkOiB1aWQsXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1gtR2l6d2l0cy1BcHBsaWNhdGlvbi1JZCc6ICc5OTUyZGE2MmVjNTA0NGVkOGZiZjQ3YjlkMGYyZGZiZSdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICByZXMoZGF0YSk7XG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICByZWooZXJyKTtcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcbn0iXX0=