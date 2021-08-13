// in this file you can append custom step methods to 'I' object

module.exports = function() {
    var connector = require('./connector');
    var weekEnd;
    var firstDay;
    var lastDay;

    let today;
    let dateFrom;
    let dateTo;

  return actor({

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
                this.clearField(selector);
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
        },

        seeTerm: function(term){
            var termText = term + "泊";
            this.see(termText);
            this.see(firstDay);
            lastDay = connector.termSet(term);
            this.see(lastDay);
        },

        seeHeadCount: function(headcount){
            var headText = headcount + "名様";
            this.see(headText);
        }

  });
}
