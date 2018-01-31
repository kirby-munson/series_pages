
(function(){
  "usestrict";

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1100);
});


function myFunction() {
    window.print();
}

//$('.print').on('click', function(){
//  console.log('it worked!');
//})//


}());
