// const account = {
//     owner: 'Andrew Mead',
//     expenses: [],

//     addExpense: function (title, amount) {

//         return this.expenses.push({
//             title,
//             amount
//         })
//     },
//     expSummary: function () {
//         let total = 0;
//         
//         this.expenses.forEach(function (value, index) {

//             total += value.amount
//         }.bind(account))
//         return console.log(` ${this.owner} expenses: ${total} `)
//     }
// }


const account = {
    owner: 'Andrew Mead',
    expenses: [],
    

    addExpense: (title, amount) => { 
        
        return account.expenses.push({title, amount})

        
        },
    expSummary: function () {
        let total = 0;
        
        this.expenses.forEach(function (value, index) {

            total += value.amount
        }.bind(account))
        return console.log(` ${this.owner} expenses: ${total} `)
    }
}





account.addExpense('woda', 1)
account.addExpense('vegetables', 5)
account.addExpense('vegetables', 5)
account.addExpense('vegetables', 5)
account.addExpense('ps4', 400)

account.expSummary();