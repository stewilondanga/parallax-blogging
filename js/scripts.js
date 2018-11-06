var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

setTimeout(function() {
  var rellax = new Rellax('.rellax')
}, 50);

/*window.addEventListener('scroll', function(){
  document.querySelector('.img').style.opacity = (1 - window.scrollY / (window.innerHeight * 0.75)) * 0.5;
  document.querySelector('.img img').style.filter = `blur(${(window.scrollY / (window.innerHeight * 0.75)) * 5}px)`;
});
