document.querySelector("#generateBtn").addEventListener("click", () => {
    let inputNumber = document.querySelector("#phoneNumber").value;
    let phoneNumber = inputNumber.replace(/\D/g, "");
    let wppLink = "https://wa.me/"
    let res = wppLink.concat(phoneNumber)

    document.querySelector("#result").innerHTML = res
    document.querySelector("#whatsappBtn").href = res
})
