// Bu isteğe bağlı kod, bir hizmet işçisini kaydetmek için kullanılır.
// varsayılan olarak register() çağrılmaz.

// Bu, üretimde sonraki ziyaretlerde uygulamanın daha hızlı yüklenmesini ve
// çevrimdışı yeteneklerini sağlar. Ancak, bu aynı zamanda geliştiricilerin (ve kullanıcıların)
// bir sayfaya sonraki ziyaretlerinde, önceki tüm sekme kapatılana kadar,
// önceden önbelleğe alınmış kaynaklar arka planda güncellenene kadar, dağıtılan güncellemeleri görmelerini sağlar.

// Bu modelin faydaları ve nasıl isteğe bağlı olarak katılacağınızı öğrenmek için
// https://bit.ly/CRA-PWA adresini okuyun

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] IPv6 localhost adresidir.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 IPv4 için localhost kabul edilir.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // URL yapıcısı, SW'yi destekleyen tüm tarayıcılarda kullanılabilir.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Sayfamızın hizmet işçisi, PUBLIC_URL'in hizmet verilen sayfa ile aynı kökten olmadığında çalışmaz.
      // Bu, varsa bir CDN'in varlıkları sunmak için kullanılabilir; bkz. https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Bu, localhost'ta çalışıyor. Bir hizmet işçisinin hala var olup olmadığını kontrol edelim.
        checkValidServiceWorker(swUrl, config);

        // localhost'ta ek bir günlüğe eklemeler yapalım, geliştiricileri
        // hizmet işçisi/PWA belgelerine yönlendirir.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'Bu web uygulaması, bir hizmet işçisi tarafından önceden önbelleğe alınarak hizmet ediliyor. Daha fazla bilgi için https://bit.ly/CRA-PWA adresini ziyaret edin'
          );
        });
      } else {
        // localhost değil. Sadece hizmet işçisini kaydet
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Bu noktada, güncellenmiş önceden önbelleğe alınmış içerik alındı,
              // ancak önceki hizmet işçisi hala önceki içeriği sunacak.
              // Sayfanın tüm istemci sekmeleri kapatılana kadar.
              console.log(
                'Yeni içerik kullanıma hazır ve bu sayfadaki tüm sekmeler kapatıldığında kullanılacak. Daha fazla bilgi için https://bit.ly/CRA-PWA adresini ziyaret edin.'
              );

              // Geri çağrıyı çalıştır
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Bu noktada, her şey önceden önbelleğe alındı.
              // "İçerik çevrimdışı kullanım için önbelleğe alındı." mesajını göstermek için mükemmel bir zamandır.
              console.log('İçerik çevrimdışı kullanım için önbelleğe alındı.');

              // Geri çağrıyı çalıştır
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Hizmet işçisi kaydı sırasında hata:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Hizmet işçisinin bulunup bulunmadığını kontrol edin. Bulunamıyorsa sayfayı yeniden yükleyin.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // Hizmet işçisinin var olup olmadığından ve gerçekten bir JS dosyası alıp almadığımızdan emin olun.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Hizmet işçisi bulunamadı. Muhtemelen farklı bir uygulama. Sayfayı yeniden yükleyin.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Hizmet işçisi bulundu. Normal şekilde devam edin.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'İnternet bağlantısı bulunamadı. Uygulama çevrimdışı modda çalışıyor.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
