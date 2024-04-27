import React, { useContext } from "react";

import TodoContext from "../../context/TodoContext"; // TodoContext bileşenini içe aktarır.
import validations from "./validations"; // Form doğrulama işlemleri için gerekli doğrulama şemalarını içe aktarır.
import { Formik } from "formik"; // Formik form kütüphanesini içe aktarır.
import { v4 as uuidv4 } from "uuid"; // Eşsiz kimlik oluşturmak için uuid kütüphanesini içe aktarır.

function Form() {
    const { todos, setTodos } = useContext(TodoContext); // TodoContext'ten todos ve setTodos değerlerine erişim sağlar.

    const onSubmit = (values, bag) => { // Form gönderildiğinde çalışacak fonksiyonu tanımlar.
        const data = { // Yeni görev verilerini oluşturur.
            ...values, // Formdaki değerleri alır.
            completed: false, // Tamamlanma durumunu varsayılan olarak false olarak ayarlar.
            id: uuidv4(), // Eşsiz bir kimlik oluşturur.
        };

        setTodos([data, ...todos]); // Yeni görevi mevcut görevlerin başına ekler.

        bag.setSubmitting(false); // Formun gönderim durumunu false olarak ayarlar.
        bag.resetForm(); // Formu sıfırlar.
    };

    return (
		// Boş bir Fragment döndürür.
        <> 
            <Formik // Formik bileşenini kullanarak form oluşturur.
                initialValues={{ // Formun başlangıç değerlerini belirler.
                    text: "", // Boş bir metin değeri ile başlar.
                }}
                onSubmit={onSubmit} // Form gönderildiğinde çağrılacak işlevi belirler.
                validationSchema={validations} // Doğrulama şemasını belirler.
            >
                {({ // Formik bileşeninin içine bir işlev yerleştirir.
                    values, // Formdaki alan değerlerini içerir.
                    handleChange, // Form alanı değerleri değiştiğinde çağrılacak işlevi belirler.
                    handleSubmit, // Form gönderildiğinde çağrılacak işlevi belirler.
                    errors, // Form alanlarında doğrulama hatalarını içerir.
                    touched, // Form alanlarının dokunulduğunu belirten bir nesne içerir.
                    setFieldTouched, // Form alanlarının dokunulduğunu belirtir.
                    isValid, // Formun geçerli olup olmadığını belirler.
                    isSubmitting, // Formun gönderilmekte olup olmadığını belirler.
                    setFieldValue, // Form alanlarının değerlerini belirler.
                }) => ( 
					// Form gönderildiğinde onSubmit işlevini çağırır.
                    <form onSubmit={handleSubmit}> 
                        <input // Metin giriş alanını oluşturur.
                            onChange={handleChange("text")} // Değer değiştiğinde çağrılacak işlevi belirler.
                            name="text" // Alanın adını belirler.
                            className="new-todo" // CSS sınıfını belirler.
                            value={values.text} // Alanın değerini belirler.
                            placeholder="What needs to be done?" // Alan için yer tutucu metni belirler.
                            onBlur={() => setFieldTouched("text")} // Alanın odak dışına çıkıldığında çağrılacak işlevi belirler.
                        />

                        {/* Hata durumunda hata mesajını gösterir. */}
                        {/* {errors.text && touched.text && ( */}
                        {/*     <div style={{ color: "red" }}>{errors.text}</div> */}
                        {/* )} */}
                    </form>
                )}
            </Formik>
        </>
    );
}

export default Form;
