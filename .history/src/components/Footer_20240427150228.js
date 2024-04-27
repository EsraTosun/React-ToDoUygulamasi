import React from "react"; // React kütüphanesini içe aktarır.

function Footer() {
	{/* Boş bir Fragment döndürür. */}
    return (
		<>
            <footer className="info"> {/* Footer bileşenini oluşturur ve CSS sınıfını belirler. */}
                <p>Click to edit a todo</p> {/* Bir paragraf içerisinde bir metin gösterir. */}
                <p>
                    Created by <a href="https://d12n.me/">Dmitry Sharabin</a> {/* Dmitry Sharabin adlı kişi tarafından oluşturulduğunu belirten bir metin ve bağlantı gösterir. */}
                </p>
                <p>
                    Part of <a href="http://todomvc.com">TodoMVC</a> {/* TodoMVC projesinin bir parçası olduğunu belirten bir metin ve bağlantı gösterir. */}
                </p>
            </footer>
		</>
    );
}

export default Footer; // Oluşturulan Footer bileşenini dışa aktarır.
