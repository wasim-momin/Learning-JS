
    const btnShowCard = document.querySelector('#btn-show-card')
    const btnHideMe = document.querySelector('#hideme')

    const h5 = document.querySelector('h5')
    const p = document.querySelector('p')
    const imgSrc = document.querySelector('img')
    


    const card = document.querySelector('.card')

    card.style.display = "none"

    btnShowCard.addEventListener('click', function(e){
        card.style.display = 'block'
        const requestURL = "https://api.github.com/users/wasim-momin";
        const xhr = new XMLHttpRequest();
        xhr.open("GET", requestURL);
        xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            h5.innerHTML=`${data.login}`
            p.innerHTML=`${data.bio}`
            imgSrc.src=data.avatar_url
            console.log(data.login);
        }
        };
        xhr.send();
    })

    btnHideMe.addEventListener('click', function(){
        card.style.display = 'none'
    })

    