import React from 'react'; // React kütüphanesini içe aktarır.
import ReactDOM from 'react-dom'; // ReactDOM kütüphanesini içe aktarır.
import './index.css'; // index.css dosyasını içe aktarır.
import App from './App'; // App bileşenini içe aktarır.
import * as serviceWorker from './serviceWorker'; // serviceWorker modülünü içe aktarır.

ReactDOM.render( // Root bileşenini belirler ve DOM üzerine oluşturur.
  <React.StrictMode> {/* Katı modu etkinleştirir, uygulamanın hataları ve uyarıları kontrol etmesine yardımcı olur. */}
    <App /> {/* App bileşenini render eder. */}
  </React.StrictMode>,
  document.getElementById('root') // 'root' ID'sine sahip HTML elementine App bileşenini yerleştirir.
);

// Eğer uygulamanızın çevrimdışı çalışmasını ve daha hızlı yüklenmesini istiyorsanız,
// unregister() satırını aşağıdaki gibi register() olarak değiştirebilirsiniz.
// Ancak, bu bazı tehlikelerle birlikte gelir.
// Daha fazla bilgi için service worker'lar hakkında buraya göz atın: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // Service worker'ı devre dışı bırakır.
