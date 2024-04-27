import React, { useContext } from "react"; // React ve useContext kütüphanelerini içe aktarır.
import TodoContext from "../context/TodoContext"; // TodoContext bileşenini içe aktarır.

function ContentFooter() {
    const { todos, activeFilter, setActiveFilter } = useContext(TodoContext); // TodoContext'ten todos, activeFilter ve setActiveFilter değerlerine erişim sağlar.

    const todoLeft = todos.filter((todo) => !todo.completed); // Tamamlanmamış görevleri filtreler ve sayısını hesaplar.

    return (
        <footer hidden={todos.length === 0} className="footer"> 
		{/* Footer bileşenini oluşturur ve gizler (hidden) eğer hiç görev yoksa. */}
            {/* <meta property="todoDone" content="22" /> */}
            <meta property="todoLeft" content={todoLeft.length} /> {/*// Kalan görev sayısını meta verisi olarak ekler.  */}
            <span className="todo-count">  {/* Kalan görev sayısını gösterir. */}
                <strong mv-value="todoLeft">{todoLeft.length} </strong>  {/*// Kalan görev sayısını günceller.  */}

                {todoLeft.length === 1 ? "item" : "items"} left  {/* // Kalan görev sayısına göre metni belirler. */}
            </span>

            <meta property="activeFilter" content="all" mv-storage="none" />   {/* // Aktif filtre bilgisini meta verisi olarak ekler. */}

            <ul className="filters">  {/*// Filtreler listesini oluşturur.  */}
                <li>
                    <a
                        href="#"
                        className={activeFilter === "all" ? "selected" : ""} // Aktif filtre "all" ise "selected" sınıfını ekler.
                        onClick={() => setActiveFilter("all")} // Filtreyi "all" olarak ayarlar.
                    >
                        All  {/* // Tüm görevleri gösterir. */}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeFilter === "active" ? "selected" : ""} // Aktif filtre "active" ise "selected" sınıfını ekler.
                        onClick={() => setActiveFilter("active")} // Filtreyi "active" olarak ayarlar.
                    >
                        Active  {/*// Aktif görevleri gösterir.  */}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeFilter === "completed" ? "selected" : ""} // Aktif filtre "completed" ise "selected" sınıfını ekler.
                        onClick={() => setActiveFilter("completed")} // Filtreyi "completed" olarak ayarlar.
                    >
                        Completed  {/* // Tamamlanmış görevleri gösterir. */}
                    </a>
                </li>
            </ul>
            <button
                hidden="[todoDone = 0]" // Tamamlanmış görev yoksa düğmeyi gizler.
                className="clear-completed" // CSS sınıfını belirler.
                mv-action="delete(todo where done)" // Tamamlanmış görevleri silme işlemini belirler.
            >
                Clear completed  {/*// Tamamlanmış görevleri temizler.  */}
            </button>
        </footer>
    );
}

export default ContentFooter; // Oluşturulan ContentFooter bileşenini dışa aktarır.
