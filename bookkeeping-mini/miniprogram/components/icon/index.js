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
    __extends(Icon, _super);
    function Icon() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.imgSrc = '';
        _this_1.data = {};
        _this_1.externalClasses = ['u-class'];
        _this_1.properties = {
            type: {
                type: String,
                value: "type"
            },
            iconId: {
                type: Number,
                optionalTypes: [String],
                value: 0,
                observer: function (id) {
                    if (!id)
                        return;
                    var imgSrc = "/images/icons/type-" + id + ".png";
                    this.setData({ imgSrc: imgSrc });
                }
            },
            name: {
                type: String,
                observer: function (name) {
                    var _this = this;
                    if (name)
                        _this.setData({ mt: true });
                }
            },
            placement: {
                type: String,
                value: "bottom",
                observer: function (placement) {
                    if (placement === 'right' || placement === 'bottom' || placement === 'top' || placement === 'left') {
                        var _this = this;
                        _this.setData({ placement: placement });
                    }
                    else {
                        throw Error("placement is not found");
                    }
                }
            },
            width: {
                type: String,
                value: '80'
            }
        };
        _this_1.methods = {
            onIconClick: function () {
                var _this = this;
                var _a = _this.properties, name = _a.name, iconId = _a.iconId;
                _this.triggerEvent("utap", { name: name, iconId: iconId });
            }
        };
        return _this_1;
    }
    return Icon;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFFeEQsU0FBUyxDQUFDO0lBQXVCLHdCQUFhO0lBQWhDO1FBQUEsdUVBdURiO1FBdERDLGNBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxZQUFJLEdBQUcsRUFFTixDQUFBO1FBQ0QsdUJBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzdCLGtCQUFVLEdBQUc7WUFDWCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLEtBQUssRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBUixVQUFTLEVBQW1CO29CQUMxQixJQUFJLENBQUMsRUFBRTt3QkFBRSxPQUFNO29CQUNmLElBQU0sTUFBTSxHQUFHLHdCQUFzQixFQUFFLFNBQU0sQ0FDNUM7b0JBQUMsSUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQTtnQkFDbEMsQ0FBQzthQUNGO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBUixVQUFTLElBQVk7b0JBQ25CLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtvQkFDekIsSUFBSSxJQUFJO3dCQUNOLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtnQkFDN0IsQ0FBQzthQUNGO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxRQUFRO2dCQUNmLFFBQVEsRUFBUixVQUFTLFNBQWlCO29CQUN4QixJQUFJLFNBQVMsS0FBSyxPQUFPLElBQUksU0FBUyxLQUFLLFFBQVEsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7d0JBQ2xHLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTt3QkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFNBQVMsV0FBQSxFQUFDLENBQUMsQ0FBQTtxQkFDM0I7eUJBQU07d0JBQ0wsTUFBTSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtxQkFDdEM7Z0JBQ0gsQ0FBQzthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixDQUFBO1FBRUQsZUFBTyxHQUFHO1lBQ1IsV0FBVyxFQUFYO2dCQUNFLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtnQkFFbkIsSUFBQSxLQUFpQixLQUFLLENBQUMsVUFBVSxFQUFoQyxJQUFJLFVBQUEsRUFBRSxNQUFNLFlBQW9CLENBQUE7Z0JBQ3ZDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUMsQ0FBQyxDQUFBO1lBQzVDLENBQUM7U0FDRixDQUFBOztJQUNILENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQXZEYSxDQUFtQiw2QkFBYSxFQXVEN0MsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuXG5Db21wb25lbnQobmV3IGNsYXNzIEljb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgaW1nU3JjID0gJydcbiAgZGF0YSA9IHtcbiAgICAvLyB0ZXh0TWFyZ2luOiAnYm90dG9tJ1xuICB9XG4gIGV4dGVybmFsQ2xhc3NlcyA9IFsndS1jbGFzcyddXG4gIHByb3BlcnRpZXMgPSB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFwidHlwZVwiXG4gICAgfSxcbiAgICBpY29uSWQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIG9wdGlvbmFsVHlwZXM6IFtTdHJpbmddLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBvYnNlcnZlcihpZDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGlmICghaWQpIHJldHVyblxuICAgICAgICBjb25zdCBpbWdTcmMgPSBgL2ltYWdlcy9pY29ucy90eXBlLSR7aWR9LnBuZ2BcbiAgICAgICAgOyh0aGlzIGFzIGFueSkuc2V0RGF0YSh7aW1nU3JjfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIG9ic2VydmVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICAgIGlmIChuYW1lKVxuICAgICAgICAgIF90aGlzLnNldERhdGEoe210OiB0cnVlfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFwiYm90dG9tXCIsXG4gICAgICBvYnNlcnZlcihwbGFjZW1lbnQ6IHN0cmluZykge1xuICAgICAgICBpZiAocGxhY2VtZW50ID09PSAncmlnaHQnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgfHwgcGxhY2VtZW50ID09PSAndG9wJyB8fCBwbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtwbGFjZW1lbnR9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IEVycm9yKFwicGxhY2VtZW50IGlzIG5vdCBmb3VuZFwiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICc4MCdcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIG9uSWNvbkNsaWNrKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMucHJvcGVydGllcy5uYW1lLF90aGlzLnByb3BlcnRpZXMuaWNvbklkKTtcbiAgICAgIGNvbnN0IHtuYW1lLCBpY29uSWR9ID0gX3RoaXMucHJvcGVydGllc1xuICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KFwidXRhcFwiLCB7bmFtZSwgaWNvbklkfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=