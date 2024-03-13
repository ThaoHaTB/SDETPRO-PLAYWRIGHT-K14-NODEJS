class MethodOverloading {
    // static add(a, b) {
    //     return a + b;
    // }

    // static add(a, b, c, d) {
    //     return a + b + c;
    // }

    static add(...nums){
        return nums;
    }
    static divide(a,b){
        if(arguments.length!=2){
            throw new Error("Must provide 2 numbers!")
        }
        if(b===0){
            throw new Error("Can't devide by zero");
        }
        return a/b;
    }
}
const addResult = MethodOverloading.add(2, 3);
console.log(addResult);
module.exports = MethodOverloading;