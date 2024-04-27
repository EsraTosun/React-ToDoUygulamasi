import React, { useContext } from "react"; // React ve useContext kütüphanelerini içe aktarır.

import TodoContext from "../context/TodoContext"; // TodoContext bileşenini içe aktarır.

let filtered = "tet"; // Filtrelenmiş görevlerin tutulacağı değişkeni tanımlar.

function TodoList() {
    const { todos, setTodos, activeFilter } = useContext(TodoContext); // TodoContext'ten todos, setTodos ve activeFilter değerlerine erişim sağlar.

    const onDestroy = (id) => // Görevin silinmesi işlevini tanımlar.
        setTodos(todos.filter((todo) => todo.id !== id && todo)); // Belirtilen ID'ye sahip görevi filtreler ve yeni görev dizisini ayarlar.

    const onChange = (id) => { // Görevin tamamlanma durumunun değiştirilmesi işlevini tanımlar.
        const updatedData = todos.map((todo) => // Tüm görevler üzerinde döner ve belirtilen ID'ye sahip görevin tamamlanma durumunu değiştirir.
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedData); // Güncellenmiş görev dizisini ayarlar.
    };

    filtered = todos; // Filtrelenmiş görevler, varsayılan olarak tüm görevler dizisiyle başlar.

    if (activeFilter !== "all") { // Eğer aktif filtre "all" değilse:
        filtered = todos.filter((todo) => // Görevleri filtreler.
            activeFilter === "active" // Eğer aktif filtre "active" ise:
                ? todo.completed === false && todo // Tamamlanmamış görevleri filtreler.
                : todo.completed === true && todo // Tamamlanmış görevleri filtreler.
        );
    }

    return (
        <ul className="todo-list"> {/*// Görevlerin listelendiği bir liste oluşturur. */}
            {filtered.map((todo, index) => ( // Filtrelenmiş görevleri haritalar ve listeler.
                <li key={index} className={todo.completed ? "completed" : ""}> 
				{/*// Görevin tamamlanma durumuna göre CSS sınıfını belirler. */}
                    <div className="view"> {/* // Görevin görüntüsünü oluşturur.*/}
                        <input // Görevin tamamlanma durumunu değiştiren bir onay kutusu oluşturur.
                            property="done"
                            className="toggle"
                            type="checkbox"
                            checked={todo.completed} // Görevin tamamlanma durumuna göre işaretlenir.
                            onChange={() => onChange(todo.id)} // Değişiklik olduğunda onChange işlevini çağırır.
                        />
                        <label property="text">{todo.text}</label> {/* // Görevin metnini gösterir.*/ }
                        <button // Görevin silinmesini sağlayan bir düğme oluşturur.
                            className="destroy"
                            onClick={() => onDestroy(todo.id)} // Tıklama olduğunda onDestroy işlevini çağırır.
                        ></button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList; // Oluşturulan TodoList bileşenini dışa aktarır.
