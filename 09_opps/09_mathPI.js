// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const chaiType = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log('chai nai bani');
    }
}
for (const [key, value] of Object.entries(chaiType)) {
    console.log(`${key} ${value}`);
}


//console.log(chaiType);
console.log(Object.getOwnPropertyDescriptor(chaiType, "name"));

// for (const [key, value] of Object.entries(chaiType)) {
//     console.log(`${key} ${value}`);
// }
for (const [key, value] of Object.entries(chaiType)) {
    if (typeof value !== "function") {
        console.log(`${key} ${value}`);
    }
}

Object.defineProperty(chaiType, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chaiType, "name"));

for (const [key, value] of Object.entries(chaiType)) {
    if (typeof value !== "function") {
        console.log(`${key} ${value}`);
    }
}
