let btn = document.querySelector("#generateBtn");
let refresh = document.querySelector("#refresh");

btn.addEventListener("click", () => {
    //get and transform into wpp link
    let inputNumber = document.querySelector("#phoneNumber").value;
    let phoneNumber = inputNumber.replace(/\D/g, "");
    let wppLink = "https://wa.me/";
    let res = wppLink.concat(phoneNumber);
    //change button to "a" tag with wpp link
    let a = document.querySelector("#link");
    a.href = res
    a.classList.remove("none")    
    btn.classList.add("none")
})

refresh.addEventListener("click", () => {
    location.reload();
});
