(function($){
  $(function(){

    $('.sidenav').sidenav();

    let font = localStorage.getItem('fontSize');
    if (font != null) {
      $('html').css('fontSize', font + 'px');
    }

    function fontChange(e) {
      var element = $('html');
      var fonte = parseInt(element.css('font-size'));
      if (e == 'a') {
        if (fonte <= 24) {
          fontSize = fonte + 2;
          element.css('fontSize', fontSize);
          return fontSize;
        }
      } else if('d'){
        if (fonte >= 16) {
          fontSize = fonte - 2;
          element.css('fontSize', fontSize);
          return fontSize;
        }
      }
    }

    $('#increase').click(function () {
      let fontSize = fontChange('a');
      if (fontSize != null) {
        localStorage.setItem('fontSize', fontSize);
      }
    });

    $('#decrease').click(function () {
      let fontSize = fontChange('d');
      if (fontSize != null) {
        localStorage.setItem('fontSize', fontSize);
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
