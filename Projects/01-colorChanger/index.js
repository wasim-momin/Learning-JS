const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    
    // button.addEventListener('click', (e) => {
    //     const getId = e.target.id

    //     switch (getId) {
    //         case (getId):
    //             body.style.backgroundColor = getId
    //             break;
    //         case (getId):
    //             body.style.backgroundColor = getId
    //             break;
    //         case (getId):
    //             body.style.backgroundColor = getId
    //             break;
    //         case (getId):
    //             body.style.backgroundColor = getId
    //             break;
    //         default:
    //             body.style.backgroundColor = 'black'
    //             break;
    //     }
    // })
    button.addEventListener('mouseenter', (e) => {
        const getId = e.target.id

        switch (getId) {
            case (getId):
                body.style.backgroundColor = getId
                break;
            case (getId):
                body.style.backgroundColor = getId
                break;
            case (getId):
                body.style.backgroundColor = getId
                break;
            case (getId):
                body.style.backgroundColor = getId
                break;
            default:
                body.style.backgroundColor = 'black'
                break;
        }
    })

})