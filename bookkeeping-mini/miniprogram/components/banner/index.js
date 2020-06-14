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
    __extends(Banner, _super);
    function Banner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.methods = {
            onAddClick: function () {
                wx.navigateTo({
                    url: "/pages/bill/bill"
                });
            }
        };
        return _this;
    }
    return Banner;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFHeEQsU0FBUyxDQUFDO0lBQXlCLDBCQUFhO0lBQWxDO1FBQUEscUVBU2I7UUFSQyxhQUFPLEdBQUc7WUFDUixVQUFVO2dCQUVSLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFDLGtCQUFrQjtpQkFDdkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUE7O0lBQ0gsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBVGEsQ0FBcUIsNkJBQWEsRUFTL0MsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IEV2ZW50ID0gV2VjaGF0TWluaXByb2dyYW0uRXZlbnQ7XG5cbkNvbXBvbmVudChuZXcgY2xhc3MgQmFubmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIG1ldGhvZHMgPSB7XG4gICAgb25BZGRDbGljaygpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOmAvcGFnZXMvYmlsbC9iaWxsYFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=