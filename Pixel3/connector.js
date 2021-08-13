const  { format, addDays, addMonths} = require('date-fns');

const jtcDate = addDays(new Date(Date.now() + ((new Date().getTimezoneOffset() + (1 * 60)) * 60 * 1000)), 1);
const jstString = format(jtcDate, 'yyyy/MM/dd');
const dayName = format(jtcDate, 'iiii');

let startDate;
let endDate;

module.exports.dateFromSet = function() {
    		startDate = `${format(dateFrom, "yyyy")}年${format(dateFrom, "M")}月${format(dateFrom, "d")}日`;
    return startDate;
};

module.exports.sunday = function() {

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		default:
            		}
                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
};

module.exports.monday = function() {

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Monday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
        };

module.exports.tuesday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Tuesday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
        };

module.exports.wednesday = function(){

             		switch(dayName) {
             		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 3);
             			break;
             		case 'Monday':
            		    dateFrom = addDays(jtcDate, 2);
             			break;
             		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 1);
             			break;
             		case 'Wednesday':
             		    dateFrom = jtcDate;
             			break;
             		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 6);
             			break;
             		case 'Friday':
            		    dateFrom = addDays(jtcDate, 5);
             			break;
             		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 4);
             			break;
             		default:
             		}

                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
         };

module.exports.thursday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Thursday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
        };

module.exports.friday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Monday':
               		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Tuesday':
                  		dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Wednesday':
          		        dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Thursday':
          		        dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Friday':
                        dateFrom = jtcDate;
            			break;
            		case 'Saturday':
          		        dateFrom = addDays(jtcDate, 6);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
        };

module.exports.saturday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Saturday':
            		    dateFrom = jtcDate;
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'yyyy/MM/dd');
                    return testReserveDate;
        };

module.exports.termSet = function(term){
            var DateTo = addDays(dateFrom, term);
            		endDate = `${format(DateTo, "yyyy")}年${format(DateTo, "M")}月${format(DateTo, "d")}日`;

            return endDate;
        };

module.exports.fourMonthAgo = function(){
    	    today.add({"months": 4, "days": 0});
            var testReserveDate = `
                          ${today.getFullYear()}/
                          ${today.getMonth()+1}/
                          ${today.getDate()}
                          `.replace(/\n|\r/g, '');
            return testReserveDate;
        };

