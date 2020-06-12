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
    __extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.methods = {
            aa: function () {
                this.setData({ a: 'tt', b: '18岁' });
            },
            onClick: function () {
                this.setData({ a: 'tt1', b: '19岁' });
            }
        };
        return _this;
    }
    Tag.prototype.attached = function () {
        this.aa();
    };
    return Tag;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFFeEQsU0FBUyxDQUFDO0lBQXNCLHVCQUFhO0lBQS9CO1FBQUEscUVBY2I7UUFSQyxhQUFPLEdBQUc7WUFDUixFQUFFLEVBQUY7Z0JBQ0csSUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDekMsQ0FBQztZQUNELE9BQU8sRUFBUDtnQkFDRyxJQUFZLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtZQUMxQyxDQUFDO1NBQ0YsQ0FBQTs7SUFDSCxDQUFDO0lBYkMsc0JBQVEsR0FBUjtRQUVHLElBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBVUgsVUFBQztBQUFELENBQUMsQUFkYSxDQUFrQiw2QkFBYSxFQWM1QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gXCIuLi8uLi91dGlscy9CYXNlQ29tcG9uZW50XCI7XG5cbkNvbXBvbmVudChuZXcgY2xhc3MgVGFnIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGF0dGFjaGVkKCkge1xuXG4gICAgKHRoaXMgYXMgYW55KS5hYSgpXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFhKCkge1xuICAgICAgKHRoaXMgYXMgYW55KS5zZXREYXRhKHthOid0dCcsYjonMTjlsoEnfSlcbiAgICB9LFxuICAgIG9uQ2xpY2soKXtcbiAgICAgICh0aGlzIGFzIGFueSkuc2V0RGF0YSh7YTondHQxJyxiOicxOeWygSd9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==