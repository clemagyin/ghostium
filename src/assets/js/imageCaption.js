var imageCaption = $(function() {
  'use strict'

  $(".post-body img").each(function() {
    if($(this).attr("alt")){
      $(this).wrap('<figure class="image"></figure>')
      .after('<figcaption>' + $(this).attr("alt") + '</figcaption');
    }
  });
});