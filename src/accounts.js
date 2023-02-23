const fs = require('fs')

//const accounts_data = fs.readFileSync('keys.json')
const accounts_data = process.env.ETH_KEY
const accounts = JSON.parse(accounts_data)
ls = process.env.SNAP_LIST
const snap_list = JSON.parse(ls)

function get_account(string) {
  // get account by account.id, =>arrow defines an anonymous func
  return accounts.filter(account => account.id === string)[0]
}

module.exports = {
  get_account,
  accounts,
  snap_list
}