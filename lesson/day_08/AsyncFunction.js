// function askQuestion() {
//     console.log("2. teo oi uong cafe khong");
// }
// console.log("1. toi nha thang Teo");
// setTimeout(askQuestion, 3000);
// console.log("3. Chay toi quan cafe");

function askQuestion(question) {
    console.log(this.name);
    console.log(question);
}
console.log("1. toi nha thang Teo");
const question = '2. teo oi uong cafe khong';
setTimeout(askQuestion.bind({ name: 'Teo' }, question), 3000);
console.log("3. Chay toi quan cafe");

