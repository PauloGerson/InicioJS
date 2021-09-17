var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 10;
var cron;

function start() {
  cron = setInterval(() => {
    timer();}, tempo);
}

function stop() {
  clearInterval(cron);
  
  hh = 0;
  mm = 0;
  ss = 0;

  document.querySelector('#counter').innerText = '00:00:00';
}
function pause() {
  clearInterval(cron);

}

function timer() {
    ss++;
    if(ss == 60){
        ss = 0;
        mm++;
        if(mm == 60)
        {
            mm = 0;
            h++;
        }
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
  document.querySelector("#counter").innerText = format;
}
