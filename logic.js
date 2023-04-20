const backgroundCard = document.getElementById('backgroundCard');
const colors = ['#000', '#00a', '#0a0', '#a00', '#aa0', '#a0a', '#0aa', '#aaa', '#00f', '#0f0', '#f00', '#ff0', '#f0f', '#0ff', '#fff'];
let index = 0;

function alterBackgroundColor() {
    index += index <= colors.length - 1 ? 1 : - colors.length;
    if (index == colors.length)
        backgroundCard.classList.add("rainbow");
    else {
        backgroundCard.classList.remove("rainbow");
        backgroundCard.style.backgroundColor = colors[index];
    }
}

function start() {
    const user = document.getElementById('name').value;
    const form = document.getElementsByTagName('form');
    const infoUser = fetch("https://api.github.com/users/" + user).then(response => response.json());

    infoUser
        .then(data => {
            if (data.message == "Not Found")
                throw "não achei"
            
            document.getElementsByTagName('main')[0].classList.remove('hide');
            
            document.getElementById('github').href = data.html_url
            document.getElementById('nameUser').innerHTML = data.login != null ? data.login : "???";
            document.getElementById('imageProfile').src = data.avatar_url;
            document.getElementById('followers').innerHTML = data.followers != null ? data.followers : "???";
            document.getElementById('followers').innerHTML += " seguidores";
            document.getElementById('following').innerHTML = data.following != null ? data.following : "???";
            document.getElementById('following').innerHTML += " seguindo";
            document.getElementById('repository').innerHTML = data.public_repos != null ? data.public_repos : "???";
            document.getElementById('repository').innerHTML += " repositorios";
            document.getElementById('company').innerHTML = data.company != null ? data.company : "???";
            document.getElementById('location').innerHTML = data.location != null ? data.location : "???";

            form[0].classList.add('hide');
        })
        .catch(e => alert(e));
}
