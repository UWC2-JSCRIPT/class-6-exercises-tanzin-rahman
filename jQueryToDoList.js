
$(document).ready(function X(){
  
  /**
   * Adds new list item to <ul>
   */
  const addListItem = function() {
    //e.preventDefault();
    let text = $('#new-todo').val(); 
    
    //append the new <li> to the <ul> element
    let li = $(`<li><span>${text}</span> <a class="delete">Delete</a></li>`);
    $('ul').append(li);

    // Resets the input value to empty so that the user could enter a new item later
    $('#new-todo').val('');

    // we add an event listener to every list item 
    // to respond to clicks
    jQuery('ul li span').click(function() {
      toggleDone($(this).parent());
    });

    jQuery('.delete').click(function() {
      $(this).parent().fadeOut( "slow", function() {
        // Animation complete.
        $(this).remove();
      });
    });
    
  }// End of Addlist Item

  // Get all of the elements with 'add-item' class,
  // and add the event listener to each
    let addlink = $('.add-item');
    addlink.click(function(){
    addListItem();
    });
  
   /**
   * Toggles "done" class on <li> element
   */
  const toggleDone = function(nodeLink) {
    // set the classList of the specific
    // element that was clicked on
    $(nodeLink).toggleClass('done');
  }

  jQuery('ul li span').click(function() {
    $(this).parent().toggleClass('done');
  });
  
  jQuery('.delete').click(function() {
    $(this).parent().fadeOut( "slow", function() {
      // Animation complete.
      $(this).remove();
    });
  });

});
