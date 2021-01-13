
//ripples
$(document).ready(function(){
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.6,
        
      });
//magnific popup
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
    // options for gallery
    enabled: true,
    arrowMarkup:
      '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
  },
});
});







