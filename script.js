
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var startTimer = null;

function test(){
    //setInterval() allows to execute statements repetedly after an interval
     clearInterval(startTimer);
      function startInterval(){
          startTimer = setInterval(function() {
              timer();
          }, 1000);
      }
      startInterval();
  }

start.addEventListener('click', test )


reset.addEventListener('click', function(){
    day.value = 0;
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    stopInterval()
    if(document.getElementById("start").innerHTML == "Resume"){
        document.getElementById("start").innerHTML = "Start";
    }
})


//clearInterval() method clears a timer set with the setInterval() method
pause.addEventListener('click',function(){
    if(document.getElementById("pause").innerHTML == "Resume")
    {
        document.getElementById("pause").innerHTML="Pause";
        // clearInterval(startTimer);
        test();
    }
    else{
        document.getElementById("pause").innerHTML="Resume";
        // setInterval(startTimer);
        clearInterval(startTimer);
    }
})



function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0 && day.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        day.value = 0;
    } else if(second.value != 0){
        second.value--;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 60;
        hour.value--;
    } else if(day.value != 0 && hour.value == 0){
        hour.value = 23;
        minute.value = 59;
        second.value = 59;
        day.value--;
    }
    return;
}


function stopInterval() {
    clearInterval(startTimer);
}