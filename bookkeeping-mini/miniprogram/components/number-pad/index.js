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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFFeEQsU0FBUyxDQUFDO0lBQTRCLDZCQUFhO0lBQXJDO1FBQUEsdUVBd0NiO1FBdkNDLFlBQUksR0FBRztZQUNMLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQTtRQU9ELGVBQU8sR0FBRztZQUNSLG1CQUFtQixFQUFuQjtnQkFDRSxJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ2xCLElBQUEsVUFBVSxHQUFJLEtBQUssQ0FBQyxJQUFJLFdBQWQsQ0FBYztnQkFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxZQUFBLEVBQUMsQ0FBQyxDQUFBO1lBQ3pDLENBQUM7WUFDRCxlQUFlLEVBQWYsVUFBZ0IsQ0FBTTtnQkFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBVyxDQUFBO2dCQUNsQixJQUFBLFVBQVUsR0FBSSxDQUFDLENBQUMsTUFBTSxXQUFaLENBQVk7Z0JBQ3ZCLElBQUEsS0FBc0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBMUMsSUFBSSxRQUFBLEVBQUUsS0FBSyxRQUFBLEVBQUUsSUFBSSxRQUF5QixDQUFBO2dCQUNqRCxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQTtvQkFDakIsVUFBVSxZQUFBO29CQUNWLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUE7WUFDSixDQUFDO1lBQ0QsUUFBUSxFQUFSO2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtnQkFDekIsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFDckMsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ3ZDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBO29CQUNqQixVQUFVLEVBQUssSUFBSSxTQUFJLEtBQUssU0FBSSxJQUFNO2lCQUN2QyxDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQTs7SUFDSCxDQUFDO0lBaENDLHlCQUFLLEdBQUw7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7UUFDekIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUE2QkgsZ0JBQUM7QUFBRCxDQUFDLEFBeENhLENBQXdCLDZCQUFhLEVBd0NsRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gXCIuLi8uLi91dGlscy9CYXNlQ29tcG9uZW50XCI7XG5cbkNvbXBvbmVudChuZXcgY2xhc3MgTnVtYmVyUGFkIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGRhdGUgPSB7XG4gICAgeWVhcjogMCxcbiAgICBtb250aDogMCxcbiAgICBkYXRlOiAwLFxuICAgIGZvcm1hdERhdGU6ICcnXG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgX3RoaXMuaW5pdERhdGUoKVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvbkNhbGVuZGFyU2hvd0NsaWNrKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge2Zvcm1hdERhdGV9ID0gX3RoaXMuZGF0YVxuICAgICAgX3RoaXMuc2V0RGF0YSh7c2hvdzogdHJ1ZSwgZm9ybWF0RGF0ZX0pXG4gICAgfSxcbiAgICBvbkNhbGVuZGFyQ2xpY2soZTogYW55KSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7Zm9ybWF0RGF0ZX0gPSBlLmRldGFpbFxuICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXRlXSA9IGZvcm1hdERhdGUuc3BsaXQoJy0nKVxuICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgIHllYXIsIG1vbnRoLCBkYXRlLFxuICAgICAgICBmb3JtYXREYXRlLFxuICAgICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbml0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMVxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXG4gICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgeWVhciwgbW9udGgsIGRhdGUsXG4gICAgICAgIGZvcm1hdERhdGU6IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==