window.addEventListener('load', init);



  function my_function(){
document.getElementById("coder").innerHTML="<i>Congratulation</i>";
}

var time = new Date().getHours();

if(time < 12){
  alert("Good Morning");
}else if(time < 15){
  alert("This is your Lunch Time");
}else{
alert("Good Night");
}

/* Jquery start here*/

function baibars_click(){
    $(".baibars").fadeToggle('0.5');
}

function fateh_show(){
  $(".sultan-f").fadeToggle('0.5');
}


function just_fade(){
    $("p").fadeIn('0.5');
}


function just_out(){
    $("p").fadeOut('0.5');
}

function sultan_switch(){
    $(".sultan-s").fadeToggle('0.6');
}



/*


function my_hider(){
  $("p").hide('0.5');
}


function my_show(){
  $("p").show('0.5');
}

function t_hider(){
  $("#t-hide").hide('slow');
}

function t_show(){
  $("#t-hide").show('0.5');
}
*/