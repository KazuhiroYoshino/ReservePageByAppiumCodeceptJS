// in this file you can append custom step methods to 'I' object

module.exports = function() {
//    var this = require('./this');
    var connector = require('./connector');
    var weekEnd;
    var firstDay;
    var lastDay;

    let today;
    let dateFrom;
    let dateTo;

  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
        fromDay: function(startDay){
        var selector = "#datePick";
        var dateFrom;
        	switch (startDay) {
        	case 'Sunday':
                dateFrom = connector.sunday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case "Monday":
                dateFrom = connector.monday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Tuesday':
                dateFrom = connector.tuesday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Wednesday':
                dateFrom = connector.wednesday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Thursday':
                dateFrom = connector.thursday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Friday':
                dateFrom = connector.friday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Saturday':
                dateFrom = connector.saturday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
            default:
        	}
//console.log(firstDay);
        },

        seeTerm: function(term){
//console.log(term);
            var termText = term + "泊";
            this.see(termText);
            this.see(firstDay);
            lastDay = connector.termSet(term);
//console.log(firstDay);
//console.log(lastDay);
            this.see(lastDay);
        },

        seeHeadCount: function(headcount){
            var headText = headcount + "名様";
            this.see(headText);
        },

        getReserveUser: function(){
        },

        testPrice: function(){
//            let priceText = I.grabTextFrom('#price');
//           let price = priceText.replace('円', '') - 0;
//console.log(priceText);
//console.log(price);
//            return price;
        }

  });
}
