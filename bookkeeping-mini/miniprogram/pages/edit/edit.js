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
var BasePage_1 = require("../../utils/BasePage");
Page(new (function (_super) {
    __extends(Edit, _super);
    function Edit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = {
            length: 0,
            paddingBottom: 40,
            date: '',
            text: ''
        };
        return _this;
    }
    Edit.prototype.onLoad = function (option) {
        var _this = this;
        var _a = option.date.split('-'), year = _a[0], month = _a[1], date = _a[2];
        wx.onKeyboardHeightChange(function (res) {
            var paddingBottom = 0;
            if (res.height === 0)
                paddingBottom = 40;
            _this.setData({
                paddingBottom: paddingBottom,
                height: res.height * 2,
            });
        });
        this.setData({
            date: year + "\u5E74" + month + "\u6708" + date + "\u65E5"
        });
    };
    Edit.prototype.onCalendarClick = function () {
        this.setData({ show: true, date: '' });
    };
    Edit.prototype.onChange = function (e) {
        var value = e.detail.value;
        var length = value.length;
        if (length >= 140)
            wx.showToast({ title: '输入超过了最大值', icon: 'none' });
        this.setData({ length: length, text: value });
    };
    Edit.prototype.onFinishClick = function () {
        var text = this.data.text;
        console.log(text);
        this.goBack();
    };
    Edit.prototype.onCloseClick = function () {
        this.goBack();
    };
    Edit.prototype.goBack = function () {
        this.setData({ text: '' });
        wx.navigateBack({ delta: 1 });
    };
    return Edit;
}(BasePage_1.BasePage)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQThDO0FBRTlDLElBQUksQ0FBQztJQUF1Qix3QkFBUTtJQUEzQjtRQUFBLHFFQWtEUjtRQWpEQyxVQUFJLEdBQUc7WUFDTCxNQUFNLEVBQUUsQ0FBQztZQUNULGFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFBOztJQTRDSCxDQUFDO0lBMUNDLHFCQUFNLEdBQU4sVUFBTyxNQUFXO1FBQWxCLGlCQWNDO1FBYk8sSUFBQSxLQUFzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBM0MsSUFBSSxRQUFBLEVBQUUsS0FBSyxRQUFBLEVBQUUsSUFBSSxRQUEwQixDQUFBO1FBQ2xELEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFBLEdBQUc7WUFDM0IsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFBO1lBQ3JCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLGFBQWEsR0FBRyxFQUFFLENBQUE7WUFFeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLGVBQUE7Z0JBQ2IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQzthQUN2QixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUssSUFBSSxjQUFJLEtBQUssY0FBSSxJQUFJLFdBQUc7U0FDbEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLENBQU07UUFDTixJQUFBLEtBQUssR0FBSSxDQUFDLENBQUMsTUFBTSxNQUFaLENBQVk7UUFDeEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixJQUFJLE1BQU0sSUFBSSxHQUFHO1lBQ2YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQ1MsSUFBQSxJQUFJLEdBQUksSUFBSSxDQUFDLElBQUksS0FBYixDQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBbERRLENBQW1CLG1CQUFRLEVBa0RuQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZVBhZ2VcIjtcblxuUGFnZShuZXcgY2xhc3MgRWRpdCBleHRlbmRzIEJhc2VQYWdlIHtcbiAgZGF0YSA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgcGFkZGluZ0JvdHRvbTogNDAsXG4gICAgZGF0ZTogJycsXG4gICAgdGV4dDogJydcbiAgfVxuXG4gIG9uTG9hZChvcHRpb246IGFueSkge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF0ZV0gPSBvcHRpb24uZGF0ZS5zcGxpdCgnLScpXG4gICAgd3gub25LZXlib2FyZEhlaWdodENoYW5nZShyZXMgPT4ge1xuICAgICAgbGV0IHBhZGRpbmdCb3R0b20gPSAwXG4gICAgICBpZiAocmVzLmhlaWdodCA9PT0gMCkgcGFkZGluZ0JvdHRvbSA9IDQwXG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHBhZGRpbmdCb3R0b20sXG4gICAgICAgIGhlaWdodDogcmVzLmhlaWdodCAqIDIsXG4gICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGRhdGU6IGAke3llYXJ95bm0JHttb250aH3mnIgke2RhdGV95pelYFxuICAgIH0pXG4gIH1cblxuICBvbkNhbGVuZGFyQ2xpY2soKSB7XG4gICAgdGhpcy5zZXREYXRhKHtzaG93OiB0cnVlLCBkYXRlOiAnJ30pXG4gIH1cblxuICBvbkNoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS5kZXRhaWxcbiAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgICBpZiAobGVuZ3RoID49IDE0MClcbiAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfovpPlhaXotoXov4fkuobmnIDlpKflgLwnLCBpY29uOiAnbm9uZSd9KVxuICAgIHRoaXMuc2V0RGF0YSh7bGVuZ3RoLCB0ZXh0OiB2YWx1ZX0pXG4gIH1cblxuICBvbkZpbmlzaENsaWNrKCkge1xuICAgIGNvbnN0IHt0ZXh0fSA9IHRoaXMuZGF0YVxuICAgIGNvbnNvbGUubG9nKHRleHQpXG4gICAgdGhpcy5nb0JhY2soKVxuICB9XG5cbiAgb25DbG9zZUNsaWNrKCkge1xuICAgIHRoaXMuZ29CYWNrKClcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICB0aGlzLnNldERhdGEoe3RleHQ6ICcnfSlcbiAgICB3eC5uYXZpZ2F0ZUJhY2soe2RlbHRhOiAxfSlcbiAgfVxufSlcbiJdfQ==