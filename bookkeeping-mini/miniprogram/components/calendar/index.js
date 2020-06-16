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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = require("../../utils/BaseComponent");
var MonthState = Object.freeze({
    Prev: 'prev',
    Next: 'next'
});
Component(new (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.data = {
            year: '',
            month: '',
            date: '',
            selectedDate: "",
            thisMonthDates: []
        };
        _this_1.properties = {
            show: {
                type: Boolean,
                value: false,
                observer: function (show) {
                    var _this = this;
                    if (show)
                        _this.setData({ enter: show, onceShow: true });
                }
            },
            value: {
                type: String,
                value: '-1',
                observer: function (value) {
                    console.log(value);
                    var _this = this;
                    var year = +(value.split("-")[0]);
                    var month = +(value.split("-")[1]) - 1;
                    var date = +(value.split("-")[2]);
                    _this.data.selectedDate = value;
                    _this.setData({ year: year, month: month, date: date }, function () {
                        _this.initDate();
                        _this.createDays();
                        _this.createEmptyDays();
                    });
                }
            }
        };
        _this_1.methods = {
            initDate: function () {
                var _this = this;
                var _a = _this.data, year = _a.year, month = _a.month, date = _a.date;
                if (year && month && date)
                    return;
                year = new Date().getFullYear();
                month = new Date().getMonth();
                date = new Date().getDate();
                _this.data.selectedDate = _this.formatDate({ year: year, month: month, date: date });
                _this.setData({ year: year, month: month, date: date });
            },
            onSelectDateClick: function (e) {
                var _this = this;
                var _a = e.currentTarget.dataset, formatdate = _a.formatdate, type = _a.type;
                var selectedDate = _this.data.selectedDate;
                if (formatdate === selectedDate)
                    return;
                _this.toggleMonth(type);
                _this.setSelectedDateGrid(formatdate);
                console.log(formatdate);
            },
            onToggleMonthClick: function (e) {
                var _this = this;
                var type = e.currentTarget.dataset.type;
                _this.toggleMonth(type);
            },
            onClickMask: function () {
                var _this = this;
                _this.setData({ show: false, value: '-1' });
            },
            toggleMonth: function (type) {
                var _this = this;
                if (type === MonthState.Prev) {
                    _this.prevMonth();
                }
                else if (type === MonthState.Next) {
                    _this.nextMonth();
                }
            },
            prevMonth: function () {
                var _this = this;
                var _a = _this.data, year = _a.year, month = _a.month;
                var _b = _this.prevYear(year, month), prevYear = _b.prevYear, prevMonth = _b.prevMonth;
                _this.setData({ year: prevYear, month: prevMonth }, function () {
                    _this.createDays();
                    _this.createEmptyDays();
                });
            },
            nextMonth: function () {
                var _this = this;
                var _a = _this.data, year = _a.year, month = _a.month;
                var _b = _this.nextYear(year, month), nextYear = _b.nextYear, nextMonth = _b.nextMonth;
                _this.setData({ year: nextYear, month: nextMonth }, function () {
                    _this.createDays();
                    _this.createEmptyDays();
                });
            },
            createDays: function () {
                var _this = this;
                var thisMonthDates = [];
                var _a = _this.data, year = _a.year, month = _a.month;
                var thisMonthTotalDate = _this.getThisMonthDays(year, month);
                for (var date = 1; date <= thisMonthTotalDate; date++) {
                    var monthGrid = _this.formatMonthGrid({ year: year, month: month, date: date });
                    thisMonthDates.push(monthGrid);
                }
                _this.data.thisMonthDates = thisMonthDates;
                _this.setData({ thisMonthTotalDate: thisMonthTotalDate });
            },
            createEmptyDays: function () {
                var _this = this;
                var _a = _this.data, year = _a.year, month = _a.month, thisMonthDates = _a.thisMonthDates;
                var firstDayWeek = _this.getThisDateWeek({ year: year, month: month, date: 1 });
                var emptyGridsBefore = _this.getBeforeMonthEmpty(firstDayWeek);
                var emptyGridsAfter = _this.getAfterMonthEmpty(firstDayWeek);
                thisMonthDates = __spreadArrays(emptyGridsBefore, thisMonthDates, emptyGridsAfter);
                _this.setData({ thisMonthDates: thisMonthDates });
            },
            getBeforeMonthEmpty: function (firstDayWeek) {
                var _this = this;
                var _a = _this.data, year = _a.year, month = _a.month;
                var emptyGridsBefore = [];
                var _b = _this.prevYear(year, month), prevYear = _b.prevYear, prevMonth = _b.prevMonth;
                var prevMonthDay = _this.getThisMonthDays(year, prevMonth);
                for (var i = 1; i <= firstDayWeek; i++) {
                    var date = prevMonthDay - (firstDayWeek - i);
                    var monthGrid = _this.formatMonthGrid({ year: prevYear, month: prevMonth, date: date }, MonthState.Prev);
                    emptyGridsBefore.push(monthGrid);
                }
                return emptyGridsBefore;
            },
            getAfterMonthEmpty: function (firstDayWeek) {
                var _this = this;
                var emptyGridsAfter = [];
                var _a = _this.data, thisMonthTotalDate = _a.thisMonthTotalDate, year = _a.year, month = _a.month;
                var _b = _this.nextYear(year, month), nextYear = _b.nextYear, nextMonth = _b.nextMonth;
                var nextMonthDay = 42 - thisMonthTotalDate - firstDayWeek - 7 >= 0 ?
                    42 - thisMonthTotalDate - firstDayWeek - 7 :
                    42 - thisMonthTotalDate - firstDayWeek;
                for (var date = 1; date <= nextMonthDay; date++) {
                    var monthGrid = _this.formatMonthGrid({ year: nextYear, month: nextMonth, date: date }, MonthState.Next);
                    emptyGridsAfter.push(monthGrid);
                }
                return emptyGridsAfter;
            },
            formatMonthGrid: function (_a, state) {
                var year = _a.year, month = _a.month, date = _a.date;
                var _this = this;
                var formatDate = this.formatDate({ year: year, month: month, date: date });
                var isSelectedDate = _this.defaultSelectedDateGrid(formatDate, state);
                var isEmptyDate = _this.isEmptyDateGrid(month);
                var week = _this.getThisDateWeek({ year: year, month: month, date: date });
                var isToday = _this.aa(formatDate);
                return {
                    year: year,
                    month: month,
                    date: date,
                    formatDate: formatDate,
                    week: week,
                    isSelectedDate: isSelectedDate,
                    isEmptyDate: isEmptyDate,
                    isToday: isToday,
                    monthState: state
                };
            },
            setSelectedDateGrid: function (formatDate) {
                var _this = this;
                var thisMonthDates = _this.data.thisMonthDates;
                var selectedDate = '';
                thisMonthDates.forEach(function (thisMonthDate) {
                    if (thisMonthDate.formatDate === formatDate) {
                        thisMonthDate.isSelectedDate = true;
                        selectedDate = thisMonthDate.formatDate;
                    }
                    else {
                        thisMonthDate.isSelectedDate = false;
                    }
                });
                _this.data.selectedDate = selectedDate;
                _this.setData({ thisMonthDates: thisMonthDates });
            },
            defaultSelectedDateGrid: function (formatDate, state) {
                var _this = this;
                var selectedDate = _this.data.selectedDate;
                return formatDate === selectedDate && !state;
            },
            aa: function (formatDate) {
                var _this = this;
                var value = _this.data.value;
                return value === formatDate;
            },
            isEmptyDateGrid: function (month) {
                var _this = this;
                var thisMonth = _this.data.month;
                return month !== thisMonth;
            },
            formatDate: function (_a) {
                var year = _a.year, month = _a.month, date = _a.date;
                return year + "-" + (month + 1) + "-" + date;
            },
            prevYear: function (year, month) {
                var prevYear = month === 0 ? year - 1 : year;
                var prevMonth = month === 0 ? 11 : month - 1;
                return { prevYear: prevYear, prevMonth: prevMonth };
            },
            nextYear: function (year, month) {
                var nextYear = month === 11 ? year + 1 : year;
                var nextMonth = month === 11 ? 0 : month + 1;
                return { nextYear: nextYear, nextMonth: nextMonth };
            },
            getThisDateWeek: function (_a) {
                var year = _a.year, month = _a.month, date = _a.date;
                return new Date(Date.UTC(year, month, date)).getDay();
            },
            getThisMonthDays: function (year, month) {
                return new Date(year, month + 1, 0).getDate();
            }
        };
        return _this_1;
    }
    return Calendar;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBU3hELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUMsQ0FBQTtBQUVGLFNBQVMsQ0FBQztJQUEyQiw0QkFBYTtJQUFwQztRQUFBLHVFQXlOYjtRQXhOQyxZQUFJLEdBQUc7WUFDTCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtTQUNuQixDQUFBO1FBQ0Qsa0JBQVUsR0FBRztZQUNYLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQVIsVUFBUyxJQUFhO29CQUNwQixJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7b0JBQ3pCLElBQUksSUFBSTt3QkFDTixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtnQkFDaEQsQ0FBQzthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBUixVQUFTLEtBQWE7b0JBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xCLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtvQkFDekIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDbkMsSUFBTSxL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WUFDRCxRQUFRLEVBQVIsVUFBUyxJQUFZLEVBQUUsS0FBYTtnQkFDbEMsSUFBTSxRQUFRLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO2dCQUMvQyxJQUFNLFNBQVMsR0FBRyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQzlDLE9BQU8sRUFBQyxRQUFRLFVBQUEsRUFBRSxTQUFTLFdBQUEsRUFBQyxDQUFBO1lBQzlCLENBQUM7WUFFRCxlQUFlLEVBQWYsVUFBZ0IsRUFBa0M7b0JBQWpDLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLElBQUksVUFBQTtnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUN2RCxDQUFDO1lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQVksRUFBRSxLQUFhO2dCQUMxQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQy9DLENBQUM7U0FDRixDQUFBOztJQUNILENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQXpOYSxDQUF1Qiw2QkFBYSxFQXlOakQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IEV2ZW50ID0gV2VjaGF0TWluaXByb2dyYW0uRXZlbnQ7XG5cbnR5cGUgWWVhck1vbnRoRGF0ZSA9IHtcbiAgeWVhcjogbnVtYmVyLFxuICBtb250aDogbnVtYmVyLFxuICBkYXRlOiBudW1iZXJcbn1cblxuY29uc3QgTW9udGhTdGF0ZSA9IE9iamVjdC5mcmVlemUoe1xuICBQcmV2OiAncHJldicsXG4gIE5leHQ6ICduZXh0J1xufSlcblxuQ29tcG9uZW50KG5ldyBjbGFzcyBDYWxlbmRhciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgIHllYXI6ICcnLFxuICAgIG1vbnRoOiAnJyxcbiAgICBkYXRlOiAnJyxcbiAgICBzZWxlY3RlZERhdGU6IFwiXCIsXG4gICAgdGhpc01vbnRoRGF0ZXM6IFtdXG4gIH1cbiAgcHJvcGVydGllcyA9IHtcbiAgICBzaG93OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZXIoc2hvdzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICAgIGlmIChzaG93KVxuICAgICAgICAgIF90aGlzLnNldERhdGEoe2VudGVyOiBzaG93LCBvbmNlU2hvdzogdHJ1ZX0pXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICctMScsXG4gICAgICBvYnNlcnZlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIC8vIDIwMjAtNi0xNVxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgICBjb25zdCB5ZWFyID0gKyh2YWx1ZS5zcGxpdChcIi1cIilbMF0pXG4gICAgICAgIGNvbnN0IG1vbnRoID0gKyh2YWx1ZS5zcGxpdChcIi1cIilbMV0pIC0gMVxuICAgICAgICBjb25zdCBkYXRlID0gKyh2YWx1ZS5zcGxpdChcIi1cIilbMl0pXG4gICAgICAgIF90aGlzLmRhdGEuc2VsZWN0ZWREYXRlID0gdmFsdWVcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7eWVhciwgbW9udGgsIGRhdGV9LCAoKSA9PiB7XG4gICAgICAgICAgX3RoaXMuaW5pdERhdGUoKVxuICAgICAgICAgIF90aGlzLmNyZWF0ZURheXMoKVxuICAgICAgICAgIF90aGlzLmNyZWF0ZUVtcHR5RGF5cygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBpbml0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGxldCB7eWVhciwgbW9udGgsIGRhdGV9ID0gX3RoaXMuZGF0YVxuICAgICAgaWYgKHllYXIgJiYgbW9udGggJiYgZGF0ZSkgcmV0dXJuXG4gICAgICB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKVxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXG4gICAgICBfdGhpcy5kYXRhLnNlbGVjdGVkRGF0ZSA9IF90aGlzLmZvcm1hdERhdGUoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgIF90aGlzLnNldERhdGEoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICB9LFxuICAgIG9uU2VsZWN0RGF0ZUNsaWNrKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7Zm9ybWF0ZGF0ZSwgdHlwZX0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgY29uc3Qge3NlbGVjdGVkRGF0ZX0gPSBfdGhpcy5kYXRhXG4gICAgICBpZiAoZm9ybWF0ZGF0ZSA9PT0gc2VsZWN0ZWREYXRlKSByZXR1cm5cbiAgICAgIF90aGlzLnRvZ2dsZU1vbnRoKHR5cGUpXG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZERhdGVHcmlkKGZvcm1hdGRhdGUpXG4gICAgICAgICAgY29uc29sZS5sb2coZm9ybWF0ZGF0ZSlcbiAgICB9LFxuICAgIG9uVG9nZ2xlTW9udGhDbGljayhlOiBFdmVudCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3R5cGV9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICAgIF90aGlzLnRvZ2dsZU1vbnRoKHR5cGUpXG4gICAgfSxcbiAgICBvbkNsaWNrTWFzaygpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIF90aGlzLnNldERhdGEoe3Nob3c6IGZhbHNlLCB2YWx1ZTogJy0xJ30pXG4gICAgfSxcbiAgICB0b2dnbGVNb250aCh0eXBlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGlmICh0eXBlID09PSBNb250aFN0YXRlLlByZXYpIHtcbiAgICAgICAgX3RoaXMucHJldk1vbnRoKClcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTW9udGhTdGF0ZS5OZXh0KSB7XG4gICAgICAgIF90aGlzLm5leHRNb250aCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBwcmV2TW9udGgoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7eWVhciwgbW9udGh9ID0gX3RoaXMuZGF0YVxuICAgICAgY29uc3Qge3ByZXZZZWFyLCBwcmV2TW9udGh9ID0gX3RoaXMucHJldlllYXIoeWVhciwgbW9udGgpXG4gICAgICBfdGhpcy5zZXREYXRhKHt5ZWFyOiBwcmV2WWVhciwgbW9udGg6IHByZXZNb250aH0sICgpID0+IHtcbiAgICAgICAgX3RoaXMuY3JlYXRlRGF5cygpXG4gICAgICAgIF90aGlzLmNyZWF0ZUVtcHR5RGF5cygpXG4gICAgICB9KVxuICAgIH0sXG4gICAgbmV4dE1vbnRoKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3llYXIsIG1vbnRofSA9IF90aGlzLmRhdGFcbiAgICAgIGNvbnN0IHtuZXh0WWVhciwgbmV4dE1vbnRofSA9IF90aGlzLm5leHRZZWFyKHllYXIsIG1vbnRoKVxuICAgICAgX3RoaXMuc2V0RGF0YSh7eWVhcjogbmV4dFllYXIsIG1vbnRoOiBuZXh0TW9udGh9LCAoKSA9PiB7XG4gICAgICAgIF90aGlzLmNyZWF0ZURheXMoKVxuICAgICAgICBfdGhpcy5jcmVhdGVFbXB0eURheXMoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNyZWF0ZURheXMoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB0aGlzTW9udGhEYXRlczogYW55W10gPSBbXVxuICAgICAgY29uc3Qge3llYXIsIG1vbnRofSA9IF90aGlzLmRhdGFcbiAgICAgIGNvbnN0IHRoaXNNb250aFRvdGFsRGF0ZSA9IF90aGlzLmdldFRoaXNNb250aERheXMoeWVhciwgbW9udGgpXG4gICAgICBmb3IgKGxldCBkYXRlID0gMTsgZGF0ZSA8PSB0aGlzTW9udGhUb3RhbERhdGU7IGRhdGUrKykge1xuICAgICAgICBjb25zdCBtb250aEdyaWQgPSBfdGhpcy5mb3JtYXRNb250aEdyaWQoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgICAgdGhpc01vbnRoRGF0ZXMucHVzaChtb250aEdyaWQpXG4gICAgICB9XG4gICAgICBfdGhpcy5kYXRhLnRoaXNNb250aERhdGVzID0gdGhpc01vbnRoRGF0ZXNcbiAgICAgIF90aGlzLnNldERhdGEoe3RoaXNNb250aFRvdGFsRGF0ZX0pXG4gICAgfSxcbiAgICBjcmVhdGVFbXB0eURheXMoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBsZXQge3llYXIsIG1vbnRoLCB0aGlzTW9udGhEYXRlc30gPSBfdGhpcy5kYXRhXG4gICAgICBjb25zdCBmaXJzdERheVdlZWsgPSBfdGhpcy5nZXRUaGlzRGF0ZVdlZWsoe3llYXIsIG1vbnRoLCBkYXRlOiAxfSlcbiAgICAgIGNvbnN0IGVtcHR5R3JpZHNCZWZvcmUgPSBfdGhpcy5nZXRCZWZvcmVNb250aEVtcHR5KGZpcnN0RGF5V2VlaylcbiAgICAgIGNvbnN0IGVtcHR5R3JpZHNBZnRlciA9IF90aGlzLmdldEFmdGVyTW9udGhFbXB0eShmaXJzdERheVdlZWspXG4gICAgICB0aGlzTW9udGhEYXRlcyA9IFsuLi5lbXB0eUdyaWRzQmVmb3JlLCAuLi50aGlzTW9udGhEYXRlcywgLi4uZW1wdHlHcmlkc0FmdGVyXVxuICAgICAgX3RoaXMuc2V0RGF0YSh7dGhpc01vbnRoRGF0ZXN9KVxuICAgIH0sXG4gICAgZ2V0QmVmb3JlTW9udGhFbXB0eShmaXJzdERheVdlZWs6IG51bWJlcikge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3llYXIsIG1vbnRofSA9IF90aGlzLmRhdGFcbiAgICAgIGNvbnN0IGVtcHR5R3JpZHNCZWZvcmU6IGFueVtdID0gW11cbiAgICAgIGNvbnN0IHtwcmV2WWVhciwgcHJldk1vbnRofSA9IF90aGlzLnByZXZZZWFyKHllYXIsIG1vbnRoKVxuICAgICAgY29uc3QgcHJldk1vbnRoRGF5ID0gX3RoaXMuZ2V0VGhpc01vbnRoRGF5cyh5ZWFyLCBwcmV2TW9udGgpXG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGZpcnN0RGF5V2VlazsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBwcmV2TW9udGhEYXkgLSAoZmlyc3REYXlXZWVrIC0gaSlcbiAgICAgICAgY29uc3QgbW9udGhHcmlkID0gX3RoaXMuZm9ybWF0TW9udGhHcmlkKHt5ZWFyOiBwcmV2WWVhciwgbW9udGg6IHByZXZNb250aCwgZGF0ZX0sIE1vbnRoU3RhdGUuUHJldilcbiAgICAgICAgZW1wdHlHcmlkc0JlZm9yZS5wdXNoKG1vbnRoR3JpZClcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUdyaWRzQmVmb3JlXG4gICAgfSxcbiAgICBnZXRBZnRlck1vbnRoRW1wdHkoZmlyc3REYXlXZWVrOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IGVtcHR5R3JpZHNBZnRlcjogYW55W10gPSBbXVxuICAgICAgY29uc3Qge3RoaXNNb250aFRvdGFsRGF0ZSwgeWVhciwgbW9udGh9ID0gX3RoaXMuZGF0YVxuICAgICAgY29uc3Qge25leHRZZWFyLCBuZXh0TW9udGh9ID0gX3RoaXMubmV4dFllYXIoeWVhciwgbW9udGgpXG5cbiAgICAgIGNvbnN0IG5leHRNb250aERheSA9IDQyIC0gdGhpc01vbnRoVG90YWxEYXRlIC0gZmlyc3REYXlXZWVrIC0gNyA+PSAwID9cbiAgICAgICAgICA0MiAtIHRoaXNNb250aFRvdGFsRGF0ZSAtIGZpcnN0RGF5V2VlayAtIDcgOlxuICAgICAgICAgIDQyIC0gdGhpc01vbnRoVG90YWxEYXRlIC0gZmlyc3REYXlXZWVrXG4gICAgICBmb3IgKGxldCBkYXRlID0gMTsgZGF0ZSA8PSBuZXh0TW9udGhEYXk7IGRhdGUrKykge1xuICAgICAgICBjb25zdCBtb250aEdyaWQgPSBfdGhpcy5mb3JtYXRNb250aEdyaWQoe3llYXI6IG5leHRZZWFyLCBtb250aDogbmV4dE1vbnRoLCBkYXRlfSwgTW9udGhTdGF0ZS5OZXh0KVxuICAgICAgICBlbXB0eUdyaWRzQWZ0ZXIucHVzaChtb250aEdyaWQpXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlHcmlkc0FmdGVyXG4gICAgfSxcbiAgICBmb3JtYXRNb250aEdyaWQoe3llYXIsIG1vbnRoLCBkYXRlfTogWWVhck1vbnRoRGF0ZSwgc3RhdGU/OiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSB0aGlzLmZvcm1hdERhdGUoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWREYXRlID0gX3RoaXMuZGVmYXVsdFNlbGVjdGVkRGF0ZUdyaWQoZm9ybWF0RGF0ZSwgc3RhdGUpXG4gICAgICBjb25zdCBpc0VtcHR5RGF0ZSA9IF90aGlzLmlzRW1wdHlEYXRlR3JpZChtb250aClcbiAgICAgIGNvbnN0IHdlZWsgPSBfdGhpcy5nZXRUaGlzRGF0ZVdlZWsoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSBfdGhpcy5hYShmb3JtYXREYXRlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGZvcm1hdERhdGUsXG4gICAgICAgIHdlZWssXG4gICAgICAgIGlzU2VsZWN0ZWREYXRlLFxuICAgICAgICBpc0VtcHR5RGF0ZSxcbiAgICAgICAgaXNUb2RheSxcbiAgICAgICAgbW9udGhTdGF0ZTogc3RhdGVcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFNlbGVjdGVkRGF0ZUdyaWQoZm9ybWF0RGF0ZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7dGhpc01vbnRoRGF0ZXN9ID0gX3RoaXMuZGF0YVxuICAgICAgbGV0IHNlbGVjdGVkRGF0ZTogc3RyaW5nID0gJydcbiAgICAgIHRoaXNNb250aERhdGVzLmZvckVhY2goKHRoaXNNb250aERhdGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGhpc01vbnRoRGF0ZS5mb3JtYXREYXRlID09PSBmb3JtYXREYXRlKSB7XG4gICAgICAgICAgdGhpc01vbnRoRGF0ZS5pc1NlbGVjdGVkRGF0ZSA9IHRydWVcbiAgICAgICAgICBzZWxlY3RlZERhdGUgPSB0aGlzTW9udGhEYXRlLmZvcm1hdERhdGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzTW9udGhEYXRlLmlzU2VsZWN0ZWREYXRlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIF90aGlzLmRhdGEuc2VsZWN0ZWREYXRlID0gc2VsZWN0ZWREYXRlXG4gICAgICBfdGhpcy5zZXREYXRhKHt0aGlzTW9udGhEYXRlc30pXG4gICAgfSxcbiAgICBkZWZhdWx0U2VsZWN0ZWREYXRlR3JpZChmb3JtYXREYXRlOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHtzZWxlY3RlZERhdGV9ID0gX3RoaXMuZGF0YVxuICAgICAgLy8g5Y+q6auY5Lqu5b2T5pyI77yM5LiK5pyI5ZKM5LiL5pyI55qE5LiN6auY5LquXG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZSA9PT0gc2VsZWN0ZWREYXRlICYmICFzdGF0ZVxuICAgIH0sXG4gICAgYWEoZm9ybWF0RGF0ZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7dmFsdWV9ID0gX3RoaXMuZGF0YVxuICAgICAgcmV0dXJuIHZhbHVlID09PSBmb3JtYXREYXRlXG4gICAgfSxcblxuICAgIGlzRW1wdHlEYXRlR3JpZChtb250aDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7bW9udGg6IHRoaXNNb250aH0gPSBfdGhpcy5kYXRhXG4gICAgICByZXR1cm4gbW9udGggIT09IHRoaXNNb250aFxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKHt5ZWFyLCBtb250aCwgZGF0ZX06IFllYXJNb250aERhdGUpIHtcbiAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoICsgMX0tJHtkYXRlfWBcbiAgICB9LFxuXG4gICAgcHJldlllYXIoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBwcmV2WWVhciA9IG1vbnRoID09PSAwID8geWVhciAtIDEgOiB5ZWFyXG4gICAgICBjb25zdCBwcmV2TW9udGggPSBtb250aCA9PT0gMCA/IDExIDogbW9udGggLSAxXG4gICAgICByZXR1cm4ge3ByZXZZZWFyLCBwcmV2TW9udGh9XG4gICAgfSxcbiAgICBuZXh0WWVhcih5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IG5leHRZZWFyID0gbW9udGggPT09IDExID8geWVhciArIDEgOiB5ZWFyXG4gICAgICBjb25zdCBuZXh0TW9udGggPSBtb250aCA9PT0gMTEgPyAwIDogbW9udGggKyAxXG4gICAgICByZXR1cm4ge25leHRZZWFyLCBuZXh0TW9udGh9XG4gICAgfSxcblxuICAgIGdldFRoaXNEYXRlV2Vlayh7eWVhciwgbW9udGgsIGRhdGV9OiBZZWFyTW9udGhEYXRlKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRhdGUpKS5nZXREYXkoKVxuICAgIH0sXG4gICAgZ2V0VGhpc01vbnRoRGF5cyh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKVxuICAgIH1cbiAgfVxufSlcbiJdfQ==