let clicks = 0;
let currentPicNumber;

const getCurrentBackground = () => {
  let splitBackgroundArray = $('.background')
    .css('background')
    .split('"');
  let splitUrl = splitBackgroundArray[1].split('/');
  let currentPicture = splitUrl[splitUrl.length - 1].split('');
  if (clicks < 11) {
    currentPicNumber = currentPicture[7];
  } else {
    currentPicNumber = currentPicture[7] + currentPicture[8];
  }
  changeBackground(currentPicNumber);
};

const changeBackground = currentPicNumber => {
  if (currentPicNumber < 16) {
    currentPicNumber = parseInt(currentPicNumber) + 1;
    currentPicNumber = currentPicNumber.toString();
  } else {
    currentPicNumber = '0';
    clicks = 0;
  }
  $('.background').css(
    'background',
    `url("./images/backgrounds/mandala${currentPicNumber}.png") no-repeat center center`
  );
};

$(document).ready(() => {
  $(window).click(() => {
    clicks++;
    getCurrentBackground();
  });

  $('a').click(e => {
    if (e.target.className === 'link') {
      let section = e.target.id;
      $('.home').css('display', 'none');
      $('.about').css('display', 'none');
      $('.contact').css('display', 'none');
      $('.projects').css('display', 'none');
      $(`.${section}`).css('display', 'block');
    }
  });
});
