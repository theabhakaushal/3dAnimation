
var personArray=[];

var cubeVal=["front","left","back","right"]

function changeSide(showClassParameter) {
  var cube = document.querySelector('.cube');
var currentClass = '';
  // var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + showClassParameter;
    // console.log(showClass);
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;

}


var BLOCKS_PER_CHART = 4;

function generateCube(cubeContainer,callback) {
  var container = $("<div>").addClass("cube").appendTo(cubeContainer);
  var text = "";
  var blockDiv;  // used in the for loop

  for(var i = 0; i < BLOCKS_PER_CHART; i++) {
    var cubeFace="cube__face--"+cubeVal[i];
    blockDiv = $("<div>").addClass("cube__face  "+cubeFace).appendTo(container);
    $('<h6>').addClass("mt-4 name").appendTo(blockDiv);
    $('<h6>').addClass("lastName").appendTo(blockDiv);
    $('<h6>').addClass("gender").appendTo(blockDiv);
  }
  // callback();
}


$( document ).ready(function() {

 generateCube(".scene");


$("p:eq(1)").append('<div><div class="float-right deleteDiv"><i class="fa fa-times" aria-hidden="true"></i></div><img id="theImg" src="images/space.jpg" /></div>')


   $.ajax({
        url: 'https://randomuser.me/api/?results=4',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          personArray=data.results;
         
           // for (var i=0;i<personArray.length;i++){
            personArray.forEach(function( item, index ) {
               
                $(".cube__face" ).each(function( index ) {
                     $( this ).find(".name").text(personArray[index].name.title + " " + personArray[index].name.first) ;
                     $( this ).find(".lastName").text(personArray[index].name.last) ;
                     $( this ).find(".gender").text(personArray[index].gender) ;
                  });


             })

        }
    });


    $(".deleteDiv").on("click",function () {

         $(this).parent().css("display","none")
        });

  });