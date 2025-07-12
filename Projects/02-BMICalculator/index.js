const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#results")
    if(height === "" || height<=0 || isNaN(height)){
        result.innerHTML = `<span class="error">Please ener valid height ${height}</span>`
        console.log(height);
        
    }
    else if(weight === "" || weight<=0 || isNaN(weight)){
        result.innerHTML = `<span class="error">Please ener valid weight ${weight}</span>`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);
        switch(true){
            case(bmi< 18.6):
            result.innerHTML = `BMI is under weight ${bmi}`
            break;
            case(bmi>= 18.6 || bmi < 24.9 ):
            result.innerHTML = `BMI is in normal range ${bmi}`
            break;
            case(bmi >24.9):
            result.innerHTML = `BMI is over weight ${bmi}`
            break;
            default:
            result.innerHTML = `Invalid BMI ${bmi}`
        }
        
    }
})