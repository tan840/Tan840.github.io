var items = document.querySelectorAll('#i4ej1p');
  for (var i = 0, len = items.length; i < len; i++) {
    (function(){
      var e=this,t=JSON.parse('["GameDev","Traveler","Musician"]'),r=function(e){
        return parseInt(e,10)||0}
      ,n=function(e){
        return!!e}
      ,o=function(){
        var o=e;
        o.innerHTML='<span></span>';
        var c=parseInt('Infinity',10),s={
          typeSpeed:r('40'),startDelay:r(''),backDelay:r('700'),backSpeed:r(''),smartBackspace:n('true'),fadeOut:n('true'),fadeOutClass:'typed-fade-out',fadeOutDelay:r('500'),shuffle:n('true'),loop:n('true'),loopCount:isNaN(c)?1/0:c,showCursor:n('true'),cursorChar:'|',autoInsertCss:n('true'),bindInputFocusEvents:n('true'),attr:'',contentType:'html'};
        t&&t.length&&(s.strings=t),new Typed(o.children[0],s)};
      if(window.Typed)o();
      else{
        var c=document.createElement('script');
        c.src='https://cdn.jsdelivr.net/npm/typed.js@2.0.11',c.onload=o,document.head.appendChild(c)}
    }
     .bind(items[i]))();
  }