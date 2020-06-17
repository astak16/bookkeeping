"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = require("../../utils/BaseComponent");
Component(new (function (_super) {
    __extends(NumberPad, _super);
    function NumberPad() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.date = {
            year: 0,
            month: 0,
            date: 0,
            formatDate: ''
        };
        _this_1.methods = {
            onCalendarShowClick: function () {
                var _this = this;
                var formatDate = _this.data.formatDate;
                _this.setData({ show: true, formatDate: formatDate });
            },
            onCalendarClick: function (e) {
                var _this = this;
                var formatDate = e.detail.formatDate;
                var _a = formatDate.split('-'), year = _a[0], month = _a[1], date = _a[2];
                _this.setData({
                    year: year, month: month, date: date,
                    formatDate: formatDate,
                    highlight: true
                });
            },
            onEditClick: function () {
                var _this = this;
                var formatDate = _this.data.formatDate;
                wx.navigateTo({
                    url: "/pages/edit/edit?date=" + formatDate
                });
            },
            initDate: function () {
                var _this = this;
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;
                var date = new Date().getDate();
                _this.setData({
                    year: year, month: month, date: date,
                    formatDate: year + "-" + month + "-" + date
                });
            }
        };
        return _this_1;
    }
    NumberPad.prototype.ready = function () {
        var _this = this;
        _this.initDate();
    };
    return NumberPad;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFFeEQsU0FBUyxDQUFDO0lBQTRCLDZCQUFhO0lBQXJDO1FBQUEsdUVBK0NiO1FBOUNDLFlBQUksR0FBRztZQUNMLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQTtRQU9ELGVBQU8sR0FBRztZQUNSLG1CQUFtQixFQUFuQjtnQkFDRSxJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ2xCLElBQUEsVUFBVSxHQUFJLEtBQUssQ0FBQyxJQUFJLFdBQWQsQ0FBYztnQkFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxZQUFBLEVBQUMsQ0FBQyxDQUFBO1lBQ3pDLENBQUM7WUFDRCxlQUFlLEVBQWYsVUFBZ0IsQ0FBTTtnQkFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBVyxDQUFBO2dCQUNsQixJQUFBLFVBQVUsR0FBSSxDQUFDLENBQUMsTUFBTSxXQUFaLENBQVk7Z0JBQ3ZCLElBQUEsS0FBc0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBMUMsSUFBSSxRQUFBLEVBQUUsS0FBSyxRQUFBLEVBQUUsSUFBSSxRQUF5QixDQUFBO2dCQUNqRCxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQTtvQkFDakIsVUFBVSxZQUFBO29CQUNWLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUE7WUFDSixDQUFDO1lBQ0QsV0FBVyxFQUFYO2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtnQkFDbEIsSUFBQSxVQUFVLEdBQUksS0FBSyxDQUFDLElBQUksV0FBZCxDQUFjO2dCQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBQywyQkFBeUIsVUFBWTtpQkFDMUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELFFBQVEsRUFBUjtnQkFDRSxJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ3JDLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUN2QyxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQTtvQkFDakIsVUFBVSxFQUFLLElBQUksU0FBSSxLQUFLLFNBQUksSUFBTTtpQkFDdkMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUE7O0lBQ0gsQ0FBQztJQXZDQyx5QkFBSyxHQUFMO1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBVyxDQUFBO1FBQ3pCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBb0NILGdCQUFDO0FBQUQsQ0FBQyxBQS9DYSxDQUF3Qiw2QkFBYSxFQStDbEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuXG5Db21wb25lbnQobmV3IGNsYXNzIE51bWJlclBhZCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBkYXRlID0ge1xuICAgIHllYXI6IDAsXG4gICAgbW9udGg6IDAsXG4gICAgZGF0ZTogMCxcbiAgICBmb3JtYXREYXRlOiAnJ1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgIF90aGlzLmluaXREYXRlKClcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgb25DYWxlbmRhclNob3dDbGljaygpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHtmb3JtYXREYXRlfSA9IF90aGlzLmRhdGFcbiAgICAgIF90aGlzLnNldERhdGEoe3Nob3c6IHRydWUsIGZvcm1hdERhdGV9KVxuICAgIH0sXG4gICAgb25DYWxlbmRhckNsaWNrKGU6IGFueSkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge2Zvcm1hdERhdGV9ID0gZS5kZXRhaWxcbiAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF0ZV0gPSBmb3JtYXREYXRlLnNwbGl0KCctJylcbiAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICB5ZWFyLCBtb250aCwgZGF0ZSxcbiAgICAgICAgZm9ybWF0RGF0ZSxcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25FZGl0Q2xpY2soKXtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHtmb3JtYXREYXRlfSA9IF90aGlzLmRhdGFcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6YC9wYWdlcy9lZGl0L2VkaXQ/ZGF0ZT0ke2Zvcm1hdERhdGV9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIGluaXREYXRlKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXREYXRlKClcbiAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICB5ZWFyLCBtb250aCwgZGF0ZSxcbiAgICAgICAgZm9ybWF0RGF0ZTogYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19