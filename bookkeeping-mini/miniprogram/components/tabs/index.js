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
    __extends(Tabs, _super);
    function Tabs() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.data = {
            tabs: [{
                    text: "收入",
                    type: "+"
                }, {
                    text: "支出",
                    type: "-"
                }],
            currentType: '-'
        };
        _this_1.methods = {
            onTabClick: function (e) {
                var _this = this;
                var type = e.currentTarget.dataset.type;
                _this.setData({ currentType: type });
            },
            onCloseClick: function () {
                wx.navigateBack({ delta: 1 });
            }
        };
        return _this_1;
    }
    return Tabs;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFJeEQsU0FBUyxDQUFDO0lBQXVCLHdCQUFhO0lBQWhDO1FBQUEsdUVBdUJiO1FBdEJDLFlBQUksR0FBRztZQUNMLElBQUksRUFBRSxDQUFDO29CQUNMLElBQUksRUFBRSxJQUFJO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNWLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1YsQ0FBQztZQUNGLFdBQVcsRUFBQyxHQUFHO1NBQ2hCLENBQUE7UUFDRCxlQUFPLEdBQUc7WUFDUixVQUFVLEVBQVYsVUFBVyxDQUFRO2dCQUNqQixJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ2xCLElBQUEsSUFBSSxHQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUEzQixDQUEyQjtnQkFDdEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO1lBR3BDLENBQUM7WUFDRCxZQUFZO2dCQUNWLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQTtZQUM3QixDQUFDO1NBQ0YsQ0FBQTs7SUFDSCxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUF2QmEsQ0FBbUIsNkJBQWEsRUF1QjdDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3V0aWxzL0Jhc2VDb21wb25lbnRcIjtcbmltcG9ydCBFdmVudCA9IFdlY2hhdE1pbmlwcm9ncmFtLkV2ZW50O1xuLy8gY29uc3QgYXBwID0gZ2V0QXBwKClcblxuQ29tcG9uZW50KG5ldyBjbGFzcyBUYWJzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgdGFiczogW3tcbiAgICAgIHRleHQ6IFwi5pS25YWlXCIsXG4gICAgICB0eXBlOiBcIitcIlxuICAgIH0sIHtcbiAgICAgIHRleHQ6IFwi5pSv5Ye6XCIsXG4gICAgICB0eXBlOiBcIi1cIlxuICAgIH1dLFxuICAgIGN1cnJlbnRUeXBlOictJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25UYWJDbGljayhlOiBFdmVudCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3R5cGV9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICAgIF90aGlzLnNldERhdGEoe2N1cnJlbnRUeXBlOiB0eXBlfSlcbiAgICAgIC8vIGFwcC5nbG9iYWxEYXRhLnJlY29yZC50eXBlID0gdHlwZVxuICAgICAgLy8gY29uc29sZS5sb2coYXBwKVxuICAgIH0sXG4gICAgb25DbG9zZUNsaWNrKCl7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe2RlbHRhOiAxfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=