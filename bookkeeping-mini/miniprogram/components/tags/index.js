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
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.data = {
            tags: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
            indicatorsCount: 1,
            tagGroup: [],
            tagCount: 24
        };
        _this_1.properties = {};
        _this_1.methods = {
            setTagCount: function () {
                var _this = this;
                var system = wx.getSystemInfoSync();
                if (system.windowHeight < 680)
                    _this.data.tagCount = 12;
            },
            getTags: function () {
                var _this = this;
                _this.setData({ iconId: 1, name: "早餐" });
            },
            calcIndicatorsCount: function () {
                var _this = this;
                var total = _this.data.tags.length;
                var count = Math.ceil(total / _this.data.tagCount);
                _this.setData({ indicatorsCount: count });
            },
            getTagsGroup: function () {
                var _this = this;
                var tagGroup = [];
                var _a = _this.data, tags = _a.tags, tagCount = _a.tagCount;
                for (var i = 0, len = tags.length; i < len; i += tagCount) {
                    tagGroup.push(tags.slice(i, i + tagCount));
                }
                _this.setData({ tagGroup: tagGroup });
            },
        };
        return _this_1;
    }
    Tag.prototype.attached = function () {
        var _this = this;
        _this.setTagCount();
        _this.getTags();
        _this.calcIndicatorsCount();
        _this.getTagsGroup();
    };
    return Tag;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFFeEQsU0FBUyxDQUFDO0lBQXNCLHVCQUFhO0lBQS9CO1FBQUEsdUVBK0NiO1FBOUNDLFlBQUksR0FBRztZQUNMLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDN0gsZUFBZSxFQUFFLENBQUM7WUFDbEIsUUFBUSxFQUFFLEVBQUU7WUFFWixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUE7UUFFRCxrQkFBVSxHQUFHLEVBQUUsQ0FBQTtRQVdmLGVBQU8sR0FBRztZQUNSLFdBQVcsRUFBWDtnQkFDRSxJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ3pCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2dCQUNyQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRztvQkFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1lBQzVCLENBQUM7WUFDRCxPQUFPLEVBQVA7Z0JBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBVyxDQUFBO2dCQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtZQUN4QyxDQUFDO1lBQ0QsbUJBQW1CLEVBQW5CO2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtnQkFDekIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO2dCQUNwQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDekMsQ0FBQztZQUNELFlBQVksRUFBWjtnQkFDRSxJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7Z0JBQ3pCLElBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQTtnQkFDcEIsSUFBQSxLQUFtQixLQUFLLENBQUMsSUFBSSxFQUE1QixJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQWMsQ0FBQTtnQkFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFO29CQUN6RCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO2lCQUMzQztnQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFBO1lBQzNCLENBQUM7U0FDRixDQUFBOztJQUNILENBQUM7SUFwQ0Msc0JBQVEsR0FBUjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtRQUN6QixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbkIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2YsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDM0IsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUE4QkgsVUFBQztBQUFELENBQUMsQUEvQ2EsQ0FBa0IsNkJBQWEsRUErQzVDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3V0aWxzL0Jhc2VDb21wb25lbnRcIjtcblxuQ29tcG9uZW50KG5ldyBjbGFzcyBUYWcgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICB0YWdzOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyXSxcbiAgICBpbmRpY2F0b3JzQ291bnQ6IDEsXG4gICAgdGFnR3JvdXA6IFtdLFxuXG4gICAgdGFnQ291bnQ6IDI0XG4gIH1cblxuICBwcm9wZXJ0aWVzID0ge31cblxuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgX3RoaXMuc2V0VGFnQ291bnQoKVxuICAgIF90aGlzLmdldFRhZ3MoKVxuICAgIF90aGlzLmNhbGNJbmRpY2F0b3JzQ291bnQoKVxuICAgIF90aGlzLmdldFRhZ3NHcm91cCgpXG4gIH1cblxuXG4gIG1ldGhvZHMgPSB7XG4gICAgc2V0VGFnQ291bnQoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCBzeXN0ZW0gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpXG4gICAgICBpZiAoc3lzdGVtLndpbmRvd0hlaWdodCA8IDY4MClcbiAgICAgICAgX3RoaXMuZGF0YS50YWdDb3VudCA9IDEyXG4gICAgfSxcbiAgICBnZXRUYWdzKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgX3RoaXMuc2V0RGF0YSh7aWNvbklkOiAxLCBuYW1lOiBcIuaXqemkkFwifSlcbiAgICB9LFxuICAgIGNhbGNJbmRpY2F0b3JzQ291bnQoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB0b3RhbCA9IF90aGlzLmRhdGEudGFncy5sZW5ndGhcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKHRvdGFsIC8gX3RoaXMuZGF0YS50YWdDb3VudClcbiAgICAgIF90aGlzLnNldERhdGEoe2luZGljYXRvcnNDb3VudDogY291bnR9KVxuICAgIH0sXG4gICAgZ2V0VGFnc0dyb3VwKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3QgdGFnR3JvdXA6IGFueVtdID0gW11cbiAgICAgIGNvbnN0IHt0YWdzLCB0YWdDb3VudH0gPSBfdGhpcy5kYXRhXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFncy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gdGFnQ291bnQpIHtcbiAgICAgICAgdGFnR3JvdXAucHVzaCh0YWdzLnNsaWNlKGksIGkgKyB0YWdDb3VudCkpXG4gICAgICB9XG4gICAgICBfdGhpcy5zZXREYXRhKHt0YWdHcm91cH0pXG4gICAgfSxcbiAgfVxufSlcbiJdfQ==