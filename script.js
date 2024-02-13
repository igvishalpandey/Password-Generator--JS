const btn = document.querySelector('#generate-btn');
const pwdbox = document.getElementById('password');
const length = 10;


btn.addEventListener("click", () => {
    let pwd = "";

    const uppercase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghiklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "@%$#*";

    const allchars = uppercase + lowercase + number + symbol;

    while (length > pwd.length) {
        pwd += allchars[Math.floor(Math.random() * allchars.length)]
    }

    pwdbox.value= pwd;
});

function copy(){
    pwdbox.select();
    document.execCommand("copy");
};
