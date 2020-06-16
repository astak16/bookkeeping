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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edit.prototype.onCalendarClick = function () {
        this.setData({ show: true, date: '' });
    };
    return Edit;
}(BasePage_1.BasePage)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQThDO0FBRTlDLElBQUksQ0FBQztJQUF1Qix3QkFBUTtJQUEzQjs7SUFJVCxDQUFDO0lBSEMsOEJBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQUpRLENBQW1CLG1CQUFRLEVBSW5DLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi91dGlscy9CYXNlUGFnZVwiO1xuXG5QYWdlKG5ldyBjbGFzcyBFZGl0IGV4dGVuZHMgQmFzZVBhZ2Uge1xuICBvbkNhbGVuZGFyQ2xpY2soKSB7XG4gICAgdGhpcy5zZXREYXRhKHtzaG93OiB0cnVlLGRhdGU6ICcnfSlcbiAgfVxufSlcbiJdfQ==