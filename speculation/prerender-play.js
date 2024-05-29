// const whenActivated = new Promise((resolve) => {
//   if (document.prerendering) {
//     document.addEventListener('prerenderingchange', resolve);
//   } else {
//     resolve();
//   }
// });

// async function initVideo() {
//   await whenActivated;
//   document.querySelector('video').play();
// }

// initVideo();
//
function afterPrerendering() {
  document.querySelector('video').play();
}

if (document.prerendering) {
  document.addEventListener('prerenderingchange', () => {
    console.log('change');
    afterPrerendering();
  });
} else {
  afterPrerendering();
}
