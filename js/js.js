// Set the date we're counting down to
var countDownDate = new Date("May 18, 2019 15:37:25").getTime();
var time = 1;
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days < 10) {
        days = ('0' + days).slice(-2);
    }
    if (hours < 10) {
        hours = ('0' + hours).slice(-2);
    }
    if (minutes < 10) {
        minutes = ('0' + minutes).slice(-2);
    }

    // Display the result in the element with id="demo"
    // document.getElementById("days").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";
    document.getElementById("day").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    time = 1000;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
    }
}, time);

var myCalendar = createCalendar({
    options: {
        class: 'my-class',
        id: 'add-calendar'
    },
    data: {
        title: 'test', // Event title
        start: new Date('June 15, 2019 19:00'), // Event start date
        duration: 120, // Event duration (IN MINUTES)
        end: new Date('June 15, 2019 23:00'), // You can also choose to set an end time.
        // If an end time is set, this will take precedence over duration
        address: 'The internet',
        description: 'test'
    }
});

document.querySelector('.new-cal').appendChild(myCalendar);