$(document).ready(() => {
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
