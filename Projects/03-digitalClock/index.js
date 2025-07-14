const  clock = document.getElementById('clock')


//console.log(date.toLocaleTimeString());

setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
