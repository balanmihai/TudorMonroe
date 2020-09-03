function audioPlayer(){
  var currentSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];
  // $("#audioPlayer")[0].play();   //AUTOPLAY
  $("#playlist li a").click(function(e){
     e.preventDefault(); 
     $("#audioPlayer")[0].src = this;
     $("#audioPlayer")[0].play();
     $("#playlist li").removeClass("current-song");
      currentSong = $(this).parent().index();
      $(this).parent().addClass("current-song");
  });
  
  $("#audioPlayer")[0].addEventListener("ended", function(){
     currentSong++;
      if(currentSong == $("#playlist li a").length)
          currentSong = 0;
      $("#playlist li").removeClass("current-song");
      $("#playlist li:eq("+currentSong+")").addClass("current-song");
      $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
      $("#audioPlayer")[0].play();
  });
}


// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   // add a zero in front of numbers<10
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('time').innerHTML = h + ":" + m;
//   t = setTimeout(function() {
//     startTime()
//   }, 500);
// }
// startTime();


function date_time() {
  var date = new Date();
  var am_pm = "AM";
  var hour = date.getHours();
  if(hour>=12){
      am_pm = "PM";
  }
  if (hour == 0) {
      hour = 12;
  }
  if(hour>12){
      hour = hour - 12;
  }
  if(hour<10){
      hour = "0"+hour;
  }

  var minute = date.getMinutes();
  if (minute<10){
      minute = "0"+minute;
  }
  var sec = date.getSeconds();
  if(sec<10){
      sec = "0"+sec;
  }

  document.getElementById("time").innerHTML = "Lo, UK"+" "+hour+":"+minute+" "+am_pm;
}
setInterval(date_time,500);