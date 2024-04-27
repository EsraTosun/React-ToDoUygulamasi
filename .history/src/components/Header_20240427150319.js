import React from "react"; // React kütüphanesini içe aktarır.

import Form from "./Form"; // Form bileşenini içe aktarır.

function Header() {
	{/* Header bileşenini oluşturur ve CSS sınıfını belirler. */}
    return (
        <header className="header">
            <h1>todos</h1> {/* Başlık olarak "todos" yazısını gösterir. */}
            <Form /> {/* Form bileşenini içerir. */}
        </header>
    );
}

export default Header; // Oluşturulan Header bileşenini dışa aktarır.
