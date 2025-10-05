const recommendedHeaders = {
  'strict-transport-security': { en: 'Enforces HTTPS to prevent downgrade attacks.', fr: 'Impose HTTPS pour prévenir les attaques de déclassement.', ar: 'يفرض HTTPS لمنع هجمات الترقية العكسية.' },
  'x-frame-options': { en: 'Protects against clickjacking.', fr: 'Protège contre le clickjacking.', ar: 'يحمي من هجمات النقر.' },
  'x-content-type-options': { en: 'Prevents MIME-type sniffing attacks.', fr: 'Empêche les attaques de reniflage MIME-type.', ar: 'يمنع هجمات استشعار نوع MIME.' },
  'content-security-policy': { en: 'Mitigates XSS and injection attacks.', fr: 'Atténue les attaques XSS et d\'injection.', ar: 'يخفف من هجمات XSS والحقن.' },
  'referrer-policy': { en: 'Controls referrer information leakage.', fr: 'Contrôle la fuite d\'informations de référent.', ar: 'يتحكم في تسريب معلومات الرجوع.' },
  'permissions-policy': { en: 'Restricts feature access for better isolation.', fr: 'Restreint l\'accès aux fonctionnalités pour une meilleure isolation.', ar: 'يحد من الوصول إلى الميزات لعزل أفضل.' },
  'cross-origin-embedder-policy': { en: 'Prevents unauthorized cross-origin loading.', fr: 'Empêche le chargement non autorisé entre origines.', ar: 'يمنع التحميل غير المصرح به عبر الأصول.' },
  'cross-origin-opener-policy': { en: 'Protects against XS-Leaks.', fr: 'Protège contre les fuites XS.', ar: 'يحمي من تسريبات XS.' },
  'cross-origin-resource-policy': { en: 'Mitigates side-channel attacks.', fr: 'Atténue les attaques par canal latéral.', ar: 'يخفف من هجمات القناة الجانبية.' },
  'cache-control': { en: 'Prevents sensitive data caching.', fr: 'Empêche le cache des données sensibles.', ar: 'يمنع تخزين البيانات الحساسة مؤقتًا.' },
  'x-xss-protection': { en: 'Legacy XSS filter (optional in modern browsers).', fr: 'Filtre XSS hérité (optionnel dans les navigateurs modernes).', ar: 'مرشح XSS قديم (اختياري في المتصفحات الحديثة).' }
};

let lang = 'en';
document.getElementById('lang').addEventListener('change', (e) => {
  lang = e.target.value;
  updateUI();
});

function updateUI() {
  document.querySelector('h2').textContent = 'Security Headers Report';
  document.getElementById('score').textContent = `Score: `;
  document.getElementById('export').textContent = 'Export Report';

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    chrome.storage.local.get('headers', (data) => {
      const headers = data.headers?.[url] || {};
      const list = document.getElementById('headers-list');
      list.innerHTML = '';
      let score = 0;
      const total = Object.keys(recommendedHeaders).length;

      Object.keys(recommendedHeaders).forEach(key => {
        const li = document.createElement('li');
        if (headers[key]) {
          li.classList.add('present');
          li.innerHTML = `✅ ${key}: Present - ${recommendedHeaders[key][lang]}`;
          score++;
        } else {
          li.classList.add('missing');
          li.innerHTML = `❌ ${key}: Missing - ${recommendedHeaders[key][lang]} (Recommended)`;
        }
        list.appendChild(li);
      });

      const scoreDisplay = document.getElementById('score');
      scoreDisplay.textContent += `${score}/${total}`;
      const progress = document.getElementById('progress');
      progress.style.width = `${(score / total) * 100}%`;
      if (score < total / 2) scoreDisplay.style.color = 'red';

      document.getElementById('export').addEventListener('click', () => {
        const report = `Security Headers Report for ${url}\nScore: ${score}/${total}\n\n${Array.from(list.children).map(li => li.textContent).join('\n')}`;
        const blob = new Blob([report], { type: 'text/plain' });
        const blobUrl = URL.createObjectURL(blob);
        chrome.downloads.download({
          url: blobUrl,
          filename: 'header_report.txt',
          saveAs: true
        }, () => {
          if (chrome.runtime.lastError) {
            console.error('Download failed:', chrome.runtime.lastError);
          } else {
            URL.revokeObjectURL(blobUrl); // Clean up
          }
        });
      });
    });
  });
}

updateUI();