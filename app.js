let videoList = document.querySelectorAll('.video-list__container .list');

videoList.forEach((video) => {
  video.onclick = (e) => {
    let src = video.querySelector('.list-video').src;
    let title = video.querySelector('.list-title').innerHTML;

    document.querySelector('.main-video__container .main-video').src = src;
    document.querySelector('.main-video__container .main-video').play();
    document.querySelector('.main-video__container .main-video__title').innerHTML = title;
  };
});
