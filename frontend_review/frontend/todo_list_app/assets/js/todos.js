// Check off specific todos by clicking

// //  ===== One way adding css properties ===
// $('li').click( function() {
//   $(this).css('color', 'grey');
//   $(this).css('text-decoration', 'line-through');
// });

// ==== define an object for adding css properties ===

$('li').click( function() {
    // if li is gray
    // console.log($(this).css('color'));
    if($(this).css('color') === 'rgb(128, 128, 128)') {
        // turn it black
      $(this).css({
        color: 'black',
        textDecoration: 'none'
      });
    }
    // else
    else {
      // turn it gray
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
