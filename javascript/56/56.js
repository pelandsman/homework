const dayUtil = (function () {
    'use strict';
    const day = ['sun', 'mon', 'tus', 'wed', 'thu', 'fir', 'sat'];
    return {
        getDayName: function (dayIndex) {
            return day[dayIndex - 1];
        },
        getDayIndex: function (dayName) {
            return day.findIndex(day => day.toLowerCase() === dayName.toLowerCase()) + 1;
        }
    };
}());

console.log(dayUtil.getDayName(4));
console.log(dayUtil.getDayIndex('mon'));