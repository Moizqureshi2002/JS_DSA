let chocolate = 0;
let money = 100;

function buyChocolate(balance){
    if(balance>0) {
        console.log(`No. of chocolate = ${chocolate} and the balance is = ${balance} `);
        buyMoreChocolate(balance)
        
    } else{
        console.log(`Current balance is ${balance} and the amount of chocolate is ${chocolate}`)
    }
}
function buyMoreChocolate(balance){
        chocolate = chocolate+1
        buyChocolate(balance-20);
}
buyChocolate(money)
