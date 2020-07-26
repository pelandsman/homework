const interestCal = (function () {
    'use strict';

    let rate;
    let years;

    return {
        setRate: newRate => rate = newRate,
        setYears: newYears => years = newYears,

        calculate: function (principle) {
            let x = principle;

            for (let i = 0; i < years; i++) {
                x += x * rate;
            }
            return x - principle;
        }
    };


}());

interestCal.setRate(0.10);
interestCal.setYears(2);
console.log(interestCal.calculate(100));