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
    incomes: [],

    addExpense: (title, amount) => {

        return account.expenses.push({
            title,
            amount
        })

    },
    addIncome: function (title, amount) {

        return this.incomes.push({
            title,
            amount
        })
    },

    accountSummary: function () {
        let totalExp = 0;
        let totalInc = 0;

        this.expenses.forEach(function (value, index) {

            totalExp += value.amount

        })

        this.incomes.forEach(function (value, index) {

            totalInc += value.amount
        })

        return console.log(` ${this.owner}  ballance: ${totalInc-totalExp} expenses: ${totalExp} incomes:${totalInc}`)
    }
}

account.addIncome('job',2000);
account.addIncome('job',2000);
account.addIncome('job',2000);

account.addExpense('macbbok',1000)

account.accountSummary();