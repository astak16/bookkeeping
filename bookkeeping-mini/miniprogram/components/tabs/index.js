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
            }
        };
        return _this_1;
    }
    return Tabs;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFJeEQsU0FBUyxDQUFDO0lBQXVCLHdCQUFhO0lBQWhDO1FBQUEsdUVBb0JiO1FBbkJDLFlBQUksR0FBRztZQUNMLElBQUksRUFBRSxDQUFDO29CQUNMLElBQUksRUFBRSxJQUFJO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNWLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1YsQ0FBQztZQUNGLFdBQVcsRUFBQyxHQUFHO1NBQ2hCLENBQUE7UUFDRCxlQUFPLEdBQUc7WUFDUixVQUFVLEVBQVYsVUFBVyxDQUFRO2dCQUNqQixJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ2xCLElBQUEsSUFBSSxHQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUEzQixDQUEyQjtnQkFDdEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO1lBR3BDLENBQUM7U0FDRixDQUFBOztJQUNILENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQXBCYSxDQUFtQiw2QkFBYSxFQW9CN0MsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IEV2ZW50ID0gV2VjaGF0TWluaXByb2dyYW0uRXZlbnQ7XG4vLyBjb25zdCBhcHAgPSBnZXRBcHAoKVxuXG5Db21wb25lbnQobmV3IGNsYXNzIFRhYnMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICB0YWJzOiBbe1xuICAgICAgdGV4dDogXCLmlLblhaVcIixcbiAgICAgIHR5cGU6IFwiK1wiXG4gICAgfSwge1xuICAgICAgdGV4dDogXCLmlK/lh7pcIixcbiAgICAgIHR5cGU6IFwiLVwiXG4gICAgfV0sXG4gICAgY3VycmVudFR5cGU6Jy0nXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvblRhYkNsaWNrKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7dHlwZX0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgX3RoaXMuc2V0RGF0YSh7Y3VycmVudFR5cGU6IHR5cGV9KVxuICAgICAgLy8gYXBwLmdsb2JhbERhdGEucmVjb3JkLnR5cGUgPSB0eXBlXG4gICAgICAvLyBjb25zb2xlLmxvZyhhcHApXG4gICAgfVxuICB9XG59KVxuIl19