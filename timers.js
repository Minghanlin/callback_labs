





/*
Introduction

We've seen and practiced callbacks outside of the DOM, but now, we've been tasked with building out the behavior for a digital web stopwatch. The client has requested the following:
When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second
When "Reset" is clicked, the text should return to "Stop Watch"
When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing
Requirements

This is a tough assignment, so don't stress over meeting all the requirements. Just take it step by step and try to meet the benchmarks below in order.
Create Javascript selectors that target each of the timer buttons.
Create click handlers (empty, for now) for each of the timer buttons.
Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
Inside your click handler for the start button...
Replace "Stop Watch" in the HTML with the content of the seconds variable.
Use setInterval() to increment the timer by 1 every second.
Inside your click handler for the pause button...
Stop -- but do not reset! -- the timer using clearInterval().
Once again, inside your click handler for the start button...
Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
Inside your click handler for the reset button...
Stop the timer using clearInterval().
Reset the timer.
Replace the time in your HTML with the original "Stop Watch" text.
*/

var seconds = 0;
var timerId = 0;

var startbutton = document.getElementById('start');
startbutton.addEventListener('click', function() {
  var interval = setInterval (updateTime, 1000);
  var pausebutton = document.getElementById('pause');
  pausebutton.addEventListener('click', function() {
    var pause = clearInterval(interval);
    var stopbutton = document.getElementById('reset');
    stopbutton.addEventListener('click', function() {
      var reset = clearInterval(interval);
      var gerald = document.getElementById('timer');
      gerald.innerHTML = "Stop Watch";
      seconds = 0;
    })
  })
})
function updateTime() {
  var gerald = document.getElementById('timer');
  gerald.innerHTML = "Time elapsed: " + seconds;
  seconds++;
}
