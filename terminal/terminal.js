var init = function() {
  var element = document.querySelector('.inner-code');
  
  setInterval(function() {
    var code = document.createElement('code');
    code.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    element.appendChild(code);

    element.scrollTop = element.scrollHeight;
  }, 100);
};


window.onload = function() {
  // politeload();
  init();
};
var politeload = function() {
  var ticker = setInterval(function() {
    try {
      if (TweenMax) {
        setTimeout(init, 100);
        clearInterval(ticker);
      }
    } catch (e) {}
  }, 100);
};


