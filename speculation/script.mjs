function updateSelector(selector, actionName) {
  if (selector == '#initial') {
    document.querySelector(selector).textContent = JSON.stringify(
      actionName,
      0,
      2
    );
  }

  if (selector == '#activation') {
    document.querySelector(selector).textContent = JSON.stringify(
      actionName,
      0,
      2
    );
  }

  if (selector == '#lcp_list') {
    document.querySelector(selector).textContent +=
      '\n' + JSON.stringify(actionName, 0, 2) + '\n';
    if (actionName) document.querySelector('#lcp').classList.remove('hidden');
  }
}

updateSelector('#initial', {
  'document.prerendering': document.prerendering,
  activationStart:
    performance.getEntriesByType('navigation')[0].activationStart,
  type: performance.getEntriesByType('navigation')[0].type,
  firstLoadTime: new Date().toLocaleString(),
});

if (
  document.prerendering ||
  performance.getEntriesByType('navigation')[0].type == 'reload'
) {
  document.getElementById('no-prerender')?.remove();
}

document.addEventListener('prerenderingchange', (e) => {
  console.log(e);
  console.log('Starting to show');
  document.getElementById('during-prerender').hidden = false;
  document.getElementById('activation-item').hidden = false;
  updateSelector('#activation', {
    didPrerender:
      document.prerendering ||
      performance?.getEntriesByType?.('navigation')[0]?.activationStart > 0,
    'document.prerendering': document.prerendering,
    activationStart:
      performance.getEntriesByType('navigation')[0].activationStart,
    type: performance.getEntriesByType('navigation')[0].type,
  });
  console.log('Ending to show');
});

import { onLCP } from 'https://unpkg.com/web-vitals@3.5.1/dist/web-vitals.attribution.js';

onLCP(
  ({ value, navigationType, attribution }) => {
    updateSelector('#lcp_list', {
      LCP: value,
      didPrerender:
        document.prerendering ||
        performance?.getEntriesByType?.('navigation')[0]?.activationStart > 0,
      activationStart:
        performance?.getEntriesByType?.('navigation')[0]?.activationStart,
      lcpNavigationType: navigationType,
    });
    var lcpTime = document.getElementById('lcp-time');
    if (lcpTime) {
      lcpTime.innerText = Math.round(value, 0) + ' ms';
      if (value < 100) {
        lcpTime.innerText = lcpTime.innerText + '!!!! 🎉';
      }
      if (value <= 2500) {
        lcpTime.style = 'color: green';
      }
      if (value > 4000) {
        lcpTime.style = 'color: red';
      }
      if (value > 2500 && value <= 4000) {
        lcpTime.style = 'color: orange';
      }
    }
    var lcpExplanation = document.getElementById('lcp-explanation');
    if (
      lcpExplanation &&
      attribution &&
      attribution.url &&
      attribution.url.origin !== location.origin &&
      attribution.lcpEntry.renderTime === 0
    ) {
      lcpExplanation.innerHTML =
        '<em><strong>Note:</strong> LCP image is cross-origin and <a href="https://web.dev/articles/crux-and-rum-differences#cross-origin_resources">does not include render time<a/>!</em>';
    }
    document.getElementById('lcp_finalize')?.remove();
  },
  { reportAllChanges: true }
);

onLCP((e) => console.log(e));
