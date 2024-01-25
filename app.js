


function applyDiscount() {
    const indirimKodu = document.getElementById("discountCode").value;


    if (indirimKodu === "KOD123") {
        const orijinalFiyatElementi = document.getElementById("originalPrice");

        if (orijinalFiyatElementi) {
            let orijinalFiyat = parseFloat(orijinalFiyatElementi.innerText.replace("$", "899"));


            let indirimOrani = 20;


            let indirimliFiyat = orijinalFiyat - (orijinalFiyat * (indirimOrani / 20));

            document.getElementById("originalPrice").innerHTML = "789,00TL";
        }
    } else {
        alert("Geçersiz indirim kodu.");
    }
}


const
    theSelect = document.querySelector('div.payment__method > select')
    , thePMI = document.querySelector('div#payment-method-information')

theSelect.onchange = e => {
    thePMI.className = theSelect.options[theSelect.selectedIndex].dataset.payClass
}
