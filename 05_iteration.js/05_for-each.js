const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){
   // console.log(val);
});
coding.forEach((val) => {
     //console.log(val);
});

// using function
function printMe (val){
     //console.log(val);
}
coding.forEach(printMe) // function ka refe dena hai excute nai karna hai like printMe()

coding.forEach((item, index, arr)=>{
    //  console.log(item)
    //  console.log(index)
    //  console.log(arr)
})
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item, index, arr)=>{
     //console.log(item.languageFileName)
     if (index === 0){
        //console.log(`on 1st position lang name is ${item.languageName}`)
     }
     
    //  console.log(arr)
})

// store in variables for each hai koi bhi value return nai karta hai ye undefine karta hai
const values = coding.forEach( (item) => {
    console.log(item);
    if (item === "java"){
        console.log(`Lang Java is availble`);
    }
    return item
} )
//console.log(values);
