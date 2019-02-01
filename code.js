
function dateRange(){

    var select = document.querySelector('.select');
    var start = document.querySelector('.first');
    var finish = document.querySelector('.second')


      if (select.value == 'Today'){
        start.valueAsDate = new Date();
        finish.valueAsDate = new Date();
      }
      else if (select.value == 'Yesterday'){
        var date = new Date()  
        date.setDate(date.getDate() - 1);    
        start.valueAsDate = date;
        finish.valueAsDate = date;
      }
      else if (select.value == 'Last 7 days'){
        set(7);
      }
      else if(select.value == 'Last 30 days'){
        set(30);
      }
      else if(select.value == 'Last 90 days'){
        set(90);
      }
      else{
        
      }

    function set(n){
      var date = new Date() 
      finish.valueAsDate = date;    
      date.setDate(date.getDate() - n);
      start.valueAsDate = date;

    }
    myDate(start, 'firstinput');
    myDate(finish, 'secondinput');
}


function myDate(window, input) {
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var date = new Date(window.value);
  var day = date.getDate();
  var monthNumber = date.getMonth();
  var stringMonth = month[monthNumber];
  var year = date.getFullYear();
  document.getElementById(input).value =  stringMonth + " " + day + "," + year;

  document.getElementById(input).hidden = false;
  window.hidden = true;

  var title = document.querySelector('h2')
  var firstDate = document.getElementById('firstinput');
  var secondDate = document.getElementById('secondinput')
  title.innerText  = firstDate.value +' ' + '-' + ' ' + secondDate.value;
   
}

function openDate(input , date){
  document.getElementById(input).hidden = true;
  date.hidden = false;
  document.querySelector('.select').value = 'Custom';
}

function startDate(){
  var start = document.querySelector('.first');
  myDate(start, 'firstinput');
  function max(){
     document.querySelector('.second').setAttribute("min", start.value)
    }
    max();
}
function finishDate(){
  var finish = document.querySelector('.second');
  myDate(finish, 'secondinput');
  function min()
  {document.querySelector('.first').setAttribute("max", finish.value)}
  min();
}
function changeInputFirst(){
  var start = document.querySelector('.first');
  openDate( 'firstinput', start);
}

function changeInputSecond(){
  var finish = document.querySelector('.second');
  openDate( 'secondinput', finish);
  
}

dateRange();