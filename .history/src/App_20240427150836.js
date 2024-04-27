import React from "react"; // React kütüphanesini içe aktarır.
import "./App.css"; // App.css dosyasını içe aktarır.

// contexts
import { TodoProvider } from "./context/TodoContext"; // TodoProvider bileşenini içe aktarır.

import Content from "./components/Content"; // Content bileşenini içe aktarır.
import Header from "./components/Header"; // Header bileşenini içe aktarır.
import Footer from "./components/Footer"; // Footer bileşenini içe aktarır.

function App() {
    return (
        <TodoProvider> {/* Uygulamanın ana bileşeni olan TodoProvider bileşenini sarar. */}
            <section className="todoapp"> {/* Ana bileşenin içindeki bileşenleri sarmalar ve bir bölüm oluşturur. */}
                <Header /> {/* Header bileşenini render eder. */}
                <Content /> {/* Content bileşenini render eder. */}
            </section>
            <Footer /> {/* Footer bileşenini render eder. */}
        </TodoProvider>
    );
}

export default App; // Oluşturulan App bileşenini dışa aktarır.
