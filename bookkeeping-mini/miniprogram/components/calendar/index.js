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
                        _this.createDays();
                        _this.createEmptyDays();
                    });
                }
            },
            isToday: {
                type: Boolean,
            }
        };
        _this_1.methods = {
            initDate: function () {
                var _this = this;
                var _a = _this.data, year = _a.year, month = _a.month, date = _a.date;
                if (year && month && date)
                    return;
                {
                }
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
            onConfirmClick: function () {
                var _this = this;
                var selectedDate = _this.data.selectedDate;
                _this.triggerEvent('utap', {
                    formatDate: selectedDate,
                    timestamp: new Date(selectedDate).getTime()
                });
                _this.onClickMask();
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
                var defaultHighlight = _this.setHighlight(formatDate);
                return {
                    year: year,
                    month: month,
                    date: date,
                    formatDate: formatDate,
                    week: week,
                    isSelectedDate: isSelectedDate,
                    isEmptyDate: isEmptyDate,
                    defaultHighlight: defaultHighlight,
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
            setHighlight: function (formatDate) {
                var _this = this;
                var _a = _this.data, value = _a.value, isToday = _a.isToday;
                if (isToday) {
                    var _b = _this.getThisDate(), year = _b.year, month = _b.month, date = _b.date;
                    value = _this.formatDate({ year: year, month: month, date: date });
                }
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
            },
            getThisDate: function () {
                var year = new Date().getFullYear();
                var month = new Date().getMonth();
                var date = new Date().getDate();
                return { year: year, month: month, date: date };
            }
        };
        return _this_1;
    }
    return Calendar;
}(BaseComponent_1.BaseComponent)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBU3hELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUMsQ0FBQTtBQUVGLFNBQVMsQ0FBQztJQUEyQiw0QkFBYTtJQUFwQztRQUFBLHVFQWdQYjtRQS9PQyxZQUFJLEdBQUc7WUFDTCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtTQUNuQixDQUFBO1FBQ0Qsa0JBQVUsR0FBRztZQUNYLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQVIsVUFBUyxJQUFhO29CQUNwQixJQUFNLEtBQUssR0FBRyxJQUFXLENBQUE7b0JBQ3pCLElBQUksSUFBSTt3QkFDTixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtnQkFDaEQsQ0FBQzthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBUixVQUFTLEtBQWE7b0JBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xCLElBQU0sS0FBSyxHQUFHLElBQVcsQ0FBQTtvQkFDekIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDbkMsSUFBTSxL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SUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQy9DLENBQUM7WUFDRCxXQUFXO2dCQUNULElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ3JDLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ25DLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2pDLE9BQU8sRUFBQyxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxDQUFBO1lBQzVCLENBQUM7U0FDRixDQUFBOztJQUNILENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQWhQYSxDQUF1Qiw2QkFBYSxFQWdQakQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vdXRpbHMvQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IEV2ZW50ID0gV2VjaGF0TWluaXByb2dyYW0uRXZlbnQ7XG5cbnR5cGUgWWVhck1vbnRoRGF0ZSA9IHtcbiAgeWVhcjogbnVtYmVyLFxuICBtb250aDogbnVtYmVyLFxuICBkYXRlOiBudW1iZXJcbn1cblxuY29uc3QgTW9udGhTdGF0ZSA9IE9iamVjdC5mcmVlemUoe1xuICBQcmV2OiAncHJldicsXG4gIE5leHQ6ICduZXh0J1xufSlcblxuQ29tcG9uZW50KG5ldyBjbGFzcyBDYWxlbmRhciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgIHllYXI6ICcnLFxuICAgIG1vbnRoOiAnJyxcbiAgICBkYXRlOiAnJyxcbiAgICBzZWxlY3RlZERhdGU6IFwiXCIsXG4gICAgdGhpc01vbnRoRGF0ZXM6IFtdXG4gIH1cbiAgcHJvcGVydGllcyA9IHtcbiAgICBzaG93OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZXIoc2hvdzogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICAgIGlmIChzaG93KVxuICAgICAgICAgIF90aGlzLnNldERhdGEoe2VudGVyOiBzaG93LCBvbmNlU2hvdzogdHJ1ZX0pXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICctMScsXG4gICAgICBvYnNlcnZlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIC8vIDIwMjAtNi0xNVxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgICBjb25zdCB5ZWFyID0gKyh2YWx1ZS5zcGxpdChcIi1cIilbMF0pXG4gICAgICAgIGNvbnN0IG1vbnRoID0gKyh2YWx1ZS5zcGxpdChcIi1cIilbMV0pIC0gMVxuICAgICAgICBjb25zdCBkYXRlID0gKyh2YWx1ZS5zcGxpdChcIi1cIilbMl0pXG4gICAgICAgIF90aGlzLmRhdGEuc2VsZWN0ZWREYXRlID0gdmFsdWVcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7eWVhciwgbW9udGgsIGRhdGV9LCAoKSA9PiB7XG4gICAgICAgICAgLy8gX3RoaXMuaW5pdERhdGUoKVxuICAgICAgICAgIF90aGlzLmNyZWF0ZURheXMoKVxuICAgICAgICAgIF90aGlzLmNyZWF0ZUVtcHR5RGF5cygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBpc1RvZGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaW5pdERhdGUoKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBsZXQge3llYXIsIG1vbnRoLCBkYXRlfSA9IF90aGlzLmRhdGFcbiAgICAgIGlmICh5ZWFyICYmIG1vbnRoICYmIGRhdGUpIHJldHVyblxuICAgICAge1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5kYXRhLnNlbGVjdGVkRGF0ZSA9IF90aGlzLmZvcm1hdERhdGUoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgIF90aGlzLnNldERhdGEoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICB9LFxuICAgIG9uU2VsZWN0RGF0ZUNsaWNrKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7Zm9ybWF0ZGF0ZSwgdHlwZX0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgY29uc3Qge3NlbGVjdGVkRGF0ZX0gPSBfdGhpcy5kYXRhXG4gICAgICBpZiAoZm9ybWF0ZGF0ZSA9PT0gc2VsZWN0ZWREYXRlKSByZXR1cm5cbiAgICAgIF90aGlzLnRvZ2dsZU1vbnRoKHR5cGUpXG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZERhdGVHcmlkKGZvcm1hdGRhdGUpXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXRkYXRlKVxuICAgIH0sXG4gICAgb25Ub2dnbGVNb250aENsaWNrKGU6IEV2ZW50KSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7dHlwZX0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgX3RoaXMudG9nZ2xlTW9udGgodHlwZSlcbiAgICB9LFxuICAgIG9uQ2xpY2tNYXNrKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgX3RoaXMuc2V0RGF0YSh7c2hvdzogZmFsc2UsIHZhbHVlOiAnLTEnfSlcbiAgICB9LFxuICAgIHRvZ2dsZU1vbnRoKHR5cGU6IHN0cmluZykge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgaWYgKHR5cGUgPT09IE1vbnRoU3RhdGUuUHJldikge1xuICAgICAgICBfdGhpcy5wcmV2TW9udGgoKVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBNb250aFN0YXRlLk5leHQpIHtcbiAgICAgICAgX3RoaXMubmV4dE1vbnRoKClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ29uZmlybUNsaWNrKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3NlbGVjdGVkRGF0ZX0gPSBfdGhpcy5kYXRhXG5cbiAgICAgIF90aGlzLnRyaWdnZXJFdmVudCgndXRhcCcsIHtcbiAgICAgICAgZm9ybWF0RGF0ZTogc2VsZWN0ZWREYXRlLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSkuZ2V0VGltZSgpXG4gICAgICB9KVxuICAgICAgX3RoaXMub25DbGlja01hc2soKVxuICAgIH0sXG4gICAgcHJldk1vbnRoKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3llYXIsIG1vbnRofSA9IF90aGlzLmRhdGFcbiAgICAgIGNvbnN0IHtwcmV2WWVhciwgcHJldk1vbnRofSA9IF90aGlzLnByZXZZZWFyKHllYXIsIG1vbnRoKVxuICAgICAgX3RoaXMuc2V0RGF0YSh7eWVhcjogcHJldlllYXIsIG1vbnRoOiBwcmV2TW9udGh9LCAoKSA9PiB7XG4gICAgICAgIF90aGlzLmNyZWF0ZURheXMoKVxuICAgICAgICBfdGhpcy5jcmVhdGVFbXB0eURheXMoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIG5leHRNb250aCgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHt5ZWFyLCBtb250aH0gPSBfdGhpcy5kYXRhXG4gICAgICBjb25zdCB7bmV4dFllYXIsIG5leHRNb250aH0gPSBfdGhpcy5uZXh0WWVhcih5ZWFyLCBtb250aClcbiAgICAgIF90aGlzLnNldERhdGEoe3llYXI6IG5leHRZZWFyLCBtb250aDogbmV4dE1vbnRofSwgKCkgPT4ge1xuICAgICAgICBfdGhpcy5jcmVhdGVEYXlzKClcbiAgICAgICAgX3RoaXMuY3JlYXRlRW1wdHlEYXlzKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjcmVhdGVEYXlzKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3QgdGhpc01vbnRoRGF0ZXM6IGFueVtdID0gW11cbiAgICAgIGNvbnN0IHt5ZWFyLCBtb250aH0gPSBfdGhpcy5kYXRhXG4gICAgICBjb25zdCB0aGlzTW9udGhUb3RhbERhdGUgPSBfdGhpcy5nZXRUaGlzTW9udGhEYXlzKHllYXIsIG1vbnRoKVxuICAgICAgZm9yIChsZXQgZGF0ZSA9IDE7IGRhdGUgPD0gdGhpc01vbnRoVG90YWxEYXRlOyBkYXRlKyspIHtcbiAgICAgICAgY29uc3QgbW9udGhHcmlkID0gX3RoaXMuZm9ybWF0TW9udGhHcmlkKHt5ZWFyLCBtb250aCwgZGF0ZX0pXG4gICAgICAgIHRoaXNNb250aERhdGVzLnB1c2gobW9udGhHcmlkKVxuICAgICAgfVxuICAgICAgX3RoaXMuZGF0YS50aGlzTW9udGhEYXRlcyA9IHRoaXNNb250aERhdGVzXG4gICAgICBfdGhpcy5zZXREYXRhKHt0aGlzTW9udGhUb3RhbERhdGV9KVxuICAgIH0sXG4gICAgY3JlYXRlRW1wdHlEYXlzKCkge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgbGV0IHt5ZWFyLCBtb250aCwgdGhpc01vbnRoRGF0ZXN9ID0gX3RoaXMuZGF0YVxuICAgICAgY29uc3QgZmlyc3REYXlXZWVrID0gX3RoaXMuZ2V0VGhpc0RhdGVXZWVrKHt5ZWFyLCBtb250aCwgZGF0ZTogMX0pXG4gICAgICBjb25zdCBlbXB0eUdyaWRzQmVmb3JlID0gX3RoaXMuZ2V0QmVmb3JlTW9udGhFbXB0eShmaXJzdERheVdlZWspXG4gICAgICBjb25zdCBlbXB0eUdyaWRzQWZ0ZXIgPSBfdGhpcy5nZXRBZnRlck1vbnRoRW1wdHkoZmlyc3REYXlXZWVrKVxuICAgICAgdGhpc01vbnRoRGF0ZXMgPSBbLi4uZW1wdHlHcmlkc0JlZm9yZSwgLi4udGhpc01vbnRoRGF0ZXMsIC4uLmVtcHR5R3JpZHNBZnRlcl1cbiAgICAgIF90aGlzLnNldERhdGEoe3RoaXNNb250aERhdGVzfSlcbiAgICB9LFxuICAgIGdldEJlZm9yZU1vbnRoRW1wdHkoZmlyc3REYXlXZWVrOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHt5ZWFyLCBtb250aH0gPSBfdGhpcy5kYXRhXG4gICAgICBjb25zdCBlbXB0eUdyaWRzQmVmb3JlOiBhbnlbXSA9IFtdXG4gICAgICBjb25zdCB7cHJldlllYXIsIHByZXZNb250aH0gPSBfdGhpcy5wcmV2WWVhcih5ZWFyLCBtb250aClcbiAgICAgIGNvbnN0IHByZXZNb250aERheSA9IF90aGlzLmdldFRoaXNNb250aERheXMoeWVhciwgcHJldk1vbnRoKVxuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBmaXJzdERheVdlZWs7IGkrKykge1xuICAgICAgICBjb25zdCBkYXRlID0gcHJldk1vbnRoRGF5IC0gKGZpcnN0RGF5V2VlayAtIGkpXG4gICAgICAgIGNvbnN0IG1vbnRoR3JpZCA9IF90aGlzLmZvcm1hdE1vbnRoR3JpZCh7eWVhcjogcHJldlllYXIsIG1vbnRoOiBwcmV2TW9udGgsIGRhdGV9LCBNb250aFN0YXRlLlByZXYpXG4gICAgICAgIGVtcHR5R3JpZHNCZWZvcmUucHVzaChtb250aEdyaWQpXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlHcmlkc0JlZm9yZVxuICAgIH0sXG4gICAgZ2V0QWZ0ZXJNb250aEVtcHR5KGZpcnN0RGF5V2VlazogbnVtYmVyKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCBlbXB0eUdyaWRzQWZ0ZXI6IGFueVtdID0gW11cbiAgICAgIGNvbnN0IHt0aGlzTW9udGhUb3RhbERhdGUsIHllYXIsIG1vbnRofSA9IF90aGlzLmRhdGFcbiAgICAgIGNvbnN0IHtuZXh0WWVhciwgbmV4dE1vbnRofSA9IF90aGlzLm5leHRZZWFyKHllYXIsIG1vbnRoKVxuXG4gICAgICBjb25zdCBuZXh0TW9udGhEYXkgPSA0MiAtIHRoaXNNb250aFRvdGFsRGF0ZSAtIGZpcnN0RGF5V2VlayAtIDcgPj0gMCA/XG4gICAgICAgIDQyIC0gdGhpc01vbnRoVG90YWxEYXRlIC0gZmlyc3REYXlXZWVrIC0gNyA6XG4gICAgICAgIDQyIC0gdGhpc01vbnRoVG90YWxEYXRlIC0gZmlyc3REYXlXZWVrXG4gICAgICBmb3IgKGxldCBkYXRlID0gMTsgZGF0ZSA8PSBuZXh0TW9udGhEYXk7IGRhdGUrKykge1xuICAgICAgICBjb25zdCBtb250aEdyaWQgPSBfdGhpcy5mb3JtYXRNb250aEdyaWQoe3llYXI6IG5leHRZZWFyLCBtb250aDogbmV4dE1vbnRoLCBkYXRlfSwgTW9udGhTdGF0ZS5OZXh0KVxuICAgICAgICBlbXB0eUdyaWRzQWZ0ZXIucHVzaChtb250aEdyaWQpXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlHcmlkc0FmdGVyXG4gICAgfSxcbiAgICBmb3JtYXRNb250aEdyaWQoe3llYXIsIG1vbnRoLCBkYXRlfTogWWVhck1vbnRoRGF0ZSwgc3RhdGU/OiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSB0aGlzLmZvcm1hdERhdGUoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWREYXRlID0gX3RoaXMuZGVmYXVsdFNlbGVjdGVkRGF0ZUdyaWQoZm9ybWF0RGF0ZSwgc3RhdGUpXG4gICAgICBjb25zdCBpc0VtcHR5RGF0ZSA9IF90aGlzLmlzRW1wdHlEYXRlR3JpZChtb250aClcbiAgICAgIGNvbnN0IHdlZWsgPSBfdGhpcy5nZXRUaGlzRGF0ZVdlZWsoe3llYXIsIG1vbnRoLCBkYXRlfSlcbiAgICAgIGNvbnN0IGRlZmF1bHRIaWdobGlnaHQgPSBfdGhpcy5zZXRIaWdobGlnaHQoZm9ybWF0RGF0ZSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHllYXIsXG4gICAgICAgIG1vbnRoLFxuICAgICAgICBkYXRlLFxuICAgICAgICBmb3JtYXREYXRlLFxuICAgICAgICB3ZWVrLFxuICAgICAgICBpc1NlbGVjdGVkRGF0ZSxcbiAgICAgICAgaXNFbXB0eURhdGUsXG4gICAgICAgIGRlZmF1bHRIaWdobGlnaHQsXG4gICAgICAgIG1vbnRoU3RhdGU6IHN0YXRlXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZERhdGVHcmlkKGZvcm1hdERhdGU6IHN0cmluZykge1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzIGFzIGFueVxuICAgICAgY29uc3Qge3RoaXNNb250aERhdGVzfSA9IF90aGlzLmRhdGFcbiAgICAgIGxldCBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICcnXG4gICAgICB0aGlzTW9udGhEYXRlcy5mb3JFYWNoKCh0aGlzTW9udGhEYXRlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHRoaXNNb250aERhdGUuZm9ybWF0RGF0ZSA9PT0gZm9ybWF0RGF0ZSkge1xuICAgICAgICAgIHRoaXNNb250aERhdGUuaXNTZWxlY3RlZERhdGUgPSB0cnVlXG4gICAgICAgICAgc2VsZWN0ZWREYXRlID0gdGhpc01vbnRoRGF0ZS5mb3JtYXREYXRlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc01vbnRoRGF0ZS5pc1NlbGVjdGVkRGF0ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBfdGhpcy5kYXRhLnNlbGVjdGVkRGF0ZSA9IHNlbGVjdGVkRGF0ZVxuICAgICAgX3RoaXMuc2V0RGF0YSh7dGhpc01vbnRoRGF0ZXN9KVxuICAgIH0sXG4gICAgZGVmYXVsdFNlbGVjdGVkRGF0ZUdyaWQoZm9ybWF0RGF0ZTogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXMgYXMgYW55XG4gICAgICBjb25zdCB7c2VsZWN0ZWREYXRlfSA9IF90aGlzLmRhdGFcbiAgICAgIC8vIOWPqumrmOS6ruW9k+aciO+8jOS4iuaciOWSjOS4i+aciOeahOS4jemrmOS6rlxuICAgICAgcmV0dXJuIGZvcm1hdERhdGUgPT09IHNlbGVjdGVkRGF0ZSAmJiAhc3RhdGVcbiAgICB9LFxuICAgIHNldEhpZ2hsaWdodChmb3JtYXREYXRlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGxldCB7dmFsdWUsIGlzVG9kYXl9ID0gX3RoaXMuZGF0YVxuICAgICAgaWYgKGlzVG9kYXkpIHtcbiAgICAgICAgY29uc3Qge3llYXIsIG1vbnRoLCBkYXRlfSA9IF90aGlzLmdldFRoaXNEYXRlKClcbiAgICAgICAgdmFsdWUgPSBfdGhpcy5mb3JtYXREYXRlKHt5ZWFyLCBtb250aCwgZGF0ZX0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgPT09IGZvcm1hdERhdGVcbiAgICB9LFxuXG4gICAgaXNFbXB0eURhdGVHcmlkKG1vbnRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcyBhcyBhbnlcbiAgICAgIGNvbnN0IHttb250aDogdGhpc01vbnRofSA9IF90aGlzLmRhdGFcbiAgICAgIHJldHVybiBtb250aCAhPT0gdGhpc01vbnRoXG4gICAgfSxcblxuICAgIGZvcm1hdERhdGUoe3llYXIsIG1vbnRoLCBkYXRlfTogWWVhck1vbnRoRGF0ZSkge1xuICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGggKyAxfS0ke2RhdGV9YFxuICAgIH0sXG5cbiAgICBwcmV2WWVhcih5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHByZXZZZWFyID0gbW9udGggPT09IDAgPyB5ZWFyIC0gMSA6IHllYXJcbiAgICAgIGNvbnN0IHByZXZNb250aCA9IG1vbnRoID09PSAwID8gMTEgOiBtb250aCAtIDFcbiAgICAgIHJldHVybiB7cHJldlllYXIsIHByZXZNb250aH1cbiAgICB9LFxuICAgIG5leHRZZWFyKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuICAgICAgY29uc3QgbmV4dFllYXIgPSBtb250aCA9PT0gMTEgPyB5ZWFyICsgMSA6IHllYXJcbiAgICAgIGNvbnN0IG5leHRNb250aCA9IG1vbnRoID09PSAxMSA/IDAgOiBtb250aCArIDFcbiAgICAgIHJldHVybiB7bmV4dFllYXIsIG5leHRNb250aH1cbiAgICB9LFxuXG4gICAgZ2V0VGhpc0RhdGVXZWVrKHt5ZWFyLCBtb250aCwgZGF0ZX06IFllYXJNb250aERhdGUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF0ZSkpLmdldERheSgpXG4gICAgfSxcbiAgICBnZXRUaGlzTW9udGhEYXlzKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpXG4gICAgfSxcbiAgICBnZXRUaGlzRGF0ZSgpIHtcbiAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXREYXRlKClcbiAgICAgIHJldHVybiB7eWVhciwgbW9udGgsIGRhdGV9XG4gICAgfVxuICB9XG59KVxuIl19