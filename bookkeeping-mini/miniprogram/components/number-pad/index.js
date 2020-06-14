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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberPad.prototype.attached = function () {
        console.log(222);
    };
    return NumberPad;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFFeEQsU0FBUyxDQUFDO0lBQTRCLDZCQUFhO0lBQXJDOztJQUlkLENBQUM7SUFIQyw0QkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBSmEsQ0FBd0IsNkJBQWEsRUFJbEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuXG5Db21wb25lbnQobmV3IGNsYXNzIE51bWJlclBhZCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBhdHRhY2hlZCgpIHtcbiAgICBjb25zb2xlLmxvZygyMjIpXG4gIH1cbn0pXG4iXX0=