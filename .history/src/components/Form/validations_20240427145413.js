import * as Yup from "yup"; // Yup kütüphanesini tüm modülleriyle birlikte içe aktarır.

// validations adında bir sabit oluşturur ve Yup nesnesinin object metodu kullanılarak bir doğrulama şeması oluşturur.
const validations = Yup.object().shape({
    // "text" alanını doğrulamak için bir şema tanımlar.
    text: Yup.string() // "text" alanının bir metin olması gerektiğini belirtir.
        .required("Text is a required field."), // "text" alanının zorunlu olması gerektiğini ve boş bırakılamayacağını belirtir. Boş bırakıldığında "Text is a required field." hata mesajını gösterir.
});

export default validations; // Oluşturulan doğrulama şemasını dışa aktarır.
