import React, { createContext, useState } from "react"; // React, createContext ve useState kütüphanelerini içe aktarır.

const TodoContext = createContext(null); // Bir TodoContext oluşturur ve başlangıç değeri null olarak ayarlar.

export const TodoProvider = ({ children }) => { // Todo bileşeni sağlayıcısını oluşturur.
    const [activeFilter, setActiveFilter] = useState("all"); // activeFilter adında bir durum ve onu güncelleyen bir işlev oluşturur, varsayılan olarak "all" değeriyle başlar.
    const [todos, setTodos] = useState([ // todos adında bir durum ve onu güncelleyen bir işlev oluşturur, varsayılan olarak bir görev listesi ile başlar.
        {
            id: 1,
            text: "Test",
            completed: false,
        },
    ]);

    const values = { // Todo bileşeni sağlayıcısının sağladığı değerleri oluşturur.
        todos, // Görev listesini içerir.
        setTodos, // Görev listesini güncelleyen işlevi içerir.
        activeFilter, // Aktif filtre değerini içerir.
        setActiveFilter, // Aktif filtre değerini güncelleyen işlevi içerir.
    };

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>; // Oluşturulan değerleri TodoContext'e sağlar ve bu değerleri içeren bileşenleri sarmalar.
};

export default TodoContext; // Oluşturulan TodoContext bileşenini dışa aktarır.
