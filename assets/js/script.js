// load all the pictures
var folder = "/assets/img/";

  $.ajax({
      url : folder,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|png|gif)$/) ) {
                  var imgSrc = folder + val;
                  var caption = val.split(".")["0"];
                  $("#gallery").append( "<img src='"+ imgSrc +"' class='d-block w-100 h-100 clickable-image' alt='"+ caption +"' id='imagepreview"+ "-" + i +"'>" );
              }
          });
      }
  });

window.onload = function(){ 
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("imagepreview-1");
var modalImg = document.getElementById("update-me");
var captionText = document.getElementById("caption");

$('.clickable-image').on('click', function(e) {
    var parentImg = $(this)

    $('#myModal').modal('show')
    modalImg.src = parentImg.attr('src');
    captionText.innerHTML = parentImg.attr('alt');
  })
};

$(function () {
 $("#myModal .close").click()
});