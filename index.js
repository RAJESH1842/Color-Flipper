$(function () {
  function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $('#btn').click(function () {
    const newColor = getRandomColor();
    $('body').css('background-color', newColor);
    $('#color').text(newColor);

  
    $('#clickSound')[0].play();
  });

  $('#themeBtn').click(function () {
    $('body').toggleClass('dark-mode');
  });
});
