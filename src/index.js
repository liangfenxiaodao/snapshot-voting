const { vote_on } = require('./snapshot')
const { get_account, accounts } = require('./accounts')

const space = 'stgdao.eth'
const choice = 1

async function mass_voting(space, choice) {
  for (const account of accounts) {
    await vote_on(account, space, choice)
  }
}

async function single_voting(account, space, choice) {
  await vote_on(account, space, choice)
}

mass_voting(space, choice).then()

// single_voting(get_account(1), space, choice).then()