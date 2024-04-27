import React from "react"; // React kütüphanesini içe aktarır.
import TodoList from "./TodoList"; // TodoList bileşenini içe aktarır.
import ContentFooter from "./ContentFooter"; // ContentFooter bileşenini içe aktarır.

function Content() {
    return (
		// Boş bir Fragment döndürür.
			// Ana bölümü oluşturur.
        <> 
            <section className="main"> 
                <input // Tüm görevleri işaretlemek için bir giriş alanı oluşturur.
                    property="toggleAll" // Özellik belirtir.
                    id="toggle-all" // Kimlik belirtir.
                    className="toggle-all" // CSS sınıfı belirtir.
                    type="checkbox" // Giriş alanı türünü belirtir.
                    checked="[todoLeft = 0]" // Kontrol durumunu belirtir.
                    onChange={() => {}} // Değişiklik olduğunda çağrılacak işlevi belirtir.
                />
                <label htmlFor="toggle-all" mv-action="set(done, !toggleAll)"> // Tüm görevleri işaretleme etiketi oluşturur.
                    Mark all as complete // Tümünü tamamlandı olarak işaretle
                </label>
                <TodoList /> 
            </section>
            <ContentFooter /> 		
        </>
				// TodoList bileşenini içerir.
			// ContentFooter bileşenini içerir.
    );
}

export default Content; // Oluşturulan Content bileşenini dışa aktarır.
