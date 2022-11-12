const fs = require('fs');

const accounts_data = fs.readFileSync('keys.json')
const accounts = JSON.parse(accounts_data)

function get_account(string) {
  return accounts.filter(account => account.id === string)[0]
}

module.exports = {
  get_account,
  accounts
}