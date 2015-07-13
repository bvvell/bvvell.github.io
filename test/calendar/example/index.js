$(document).ready(function () {
    $('#calendar').eCalendar({
		
 weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        textArrows: {previous: 'prev', next: 'next'},
        eventTitle: 'Events',
        url: '',
        events: [
            {title: 'Event 1', description: 'Description 1', datetime: new Date(2014, 7, 15, 17)},
            {title: 'Event 1', description: 'www.tut.by', datetime: new Date(2015, 7, 15, 17)},
            {title: 'Event 2', description: 'Description 2', datetime: new Date(2014, 7, 14, 16)},
            {title: 'Event 3', description: 'jQueryScript.Net', datetime: new Date(2014, 7, 10, 16)}
        ]});
});