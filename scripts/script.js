const getCurrentBackground = () => {
  let backgroundStyle = $('.background').css('background');
  let splitBackgroundArray = backgroundStyle.split(') ');
  let backgroundUrl = splitBackgroundArray[1];
  let splitUrl = backgroundUrl.split('/');
  let currentPicture = splitUrl[splitUrl.length - 1];
  let currentPicArray = currentPicture.split('');
  let currentPicNumber = currentPicArray[7];
  changeBackground(currentPicNumber);
};

const changeBackground = currentPicNumber => {
  if (currentPicNumber < 9) {
    currentPicNumber = parseInt(currentPicNumber) + 1;
    currentPicNumber = currentPicNumber.toString();
  } else {
    currentPicNumber = '1';
  }

  $('.background').css(
    'background',
    `url("./images/mandala${currentPicNumber}.jpg") no-repeat center center`
  );
};

$(document).ready(() => {
  $(window).click(() => {
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
