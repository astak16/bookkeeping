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
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = {
            aa: '113'
        };
        return _this;
    }
    Index.prototype.onLoad = function () {
        this.setData({ aa: "" });
    };
    Index.prototype.onClick = function () {
        console.log('page Click');
    };
    return Index;
}(BasePage_1.BasePage)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQXdCLHlCQUFRO0lBQTVCO1FBQUEscUVBMEJSO1FBeEJRLFVBQUksR0FBRztZQUNaLEVBQUUsRUFBRSxLQUFLO1NBQ1YsQ0FBQzs7SUFzQkosQ0FBQztJQVZDLHNCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUE7SUFLdkIsQ0FBQztJQUNELHVCQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQTFCUSxDQUFvQixtQkFBUSxFQTBCcEMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3V0aWxzL0Jhc2VQYWdlXCI7XG5cblBhZ2UobmV3IGNsYXNzIEluZGV4IGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAvLyBwcml2YXRlIG9wdGlvbnM6V2FzaE9yZGVyQ29uZmlybS5UUGFnZU9wdGlvbnNcbiAgcHVibGljIGRhdGEgPSB7XG4gICAgYWE6ICcxMTMnXG4gIH07XG5cbiAgLy8gcHJpdmF0ZSBvcHRpb25zOiBXYXNoT3JkZXJDb25maXJtLlRQYWdlT3B0aW9ucyA9IHtcbiAgLy8gICBvcmRlcklkOiAnJ1xuICAvLyB9O1xuXG4gIC8vIG9uTG9hZChvcHRpb25zOiBXYXNoT3JkZXJDb25maXJtLlRQYWdlT3B0aW9ucykge1xuICAvLyAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgLy8gICB0aGlzLnNldERhdGEoe2FhOiAxfSlcbiAgLy8gfVxuICAvLyBwcml2YXRlIG9wdGlvbnM6IGFueSA9IHthYjogMTF9XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7YWE6XCJcIn0pXG4gICAgLy8gY29uc29sZS5sb2codGhpcylcbiAgICAvLyB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5vcHRpb25zKVxuICAgIC8vIHRoaXMuc2V0RGF0YSh7YWE6IDF9KVxuICB9XG4gIG9uQ2xpY2soKXtcbiAgICBjb25zb2xlLmxvZygncGFnZSBDbGljaycpXG4gIH1cbn0pXG5cbi8vIFBhZ2Uoe30pXG4iXX0=