
var saveBtn = document.querySelector(".saveBtn");
// variables for the current day and another for the current hour
var now = dayjs();
var currentHour = dayjs().hour();
// format for the time header
$('#currentDay').text(now.format('MMM D YYYY hh:mm a'));

// for loop to check current hour against schedule
for(let i=9; i<=19; i++){
  var storedValue = localStorage.getItem(i) 
  $("#hour-"+i).children(".description").val(storedValue)
  if(i<currentHour){
    $("#hour-"+i).children(".description").addClass("past")
  }else if(i == currentHour){
    $("#hour-"+i).children(".description").addClass("present")
  }else{
    $("#hour-"+i).children(".description").addClass("future")
  }

  // save button click listen
$(".saveBtn").on("click",function(){
  var userData = $(this).siblings(".description").val()
  var timeBlock = $(this).parent().attr("id").split("-")[1]
  console.log(userData,timeBlock)
  localStorage.setItem(timeBlock,userData)
});

// local storage for each time block
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));
}