const { vote_on } = require('./snapshot')
const { get_account, accounts, snap_list } = require('./accounts')

const space = 'uniswap'
const list_space = ['gitcoindao.eth', 'opcollective.eth', 'aave.eth']

var choice = 1
const choice_list = [1, 1, 2, 1, 1] //specify answers as you wish

async function mass_voting(space, choice) {
  for (const account of accounts) {
    await new Promise(r => setTimeout(r, 2000));
    await vote_on(account, space, choice)
  }
}

async function loop_voting(list_space, choice) {
  console.log("start vote snaps:", snap_list.length)

  for (account of accounts) {


    for (space_ of list_space) {
      for (voter of snap_list) {
        if (voter.protocol == space_) {

          for (wallet of voter.wallets)
            if (account.address.toLowerCase() == wallet.toLowerCase()) {
              choice = choice_list[Math.floor(Math.random() * (choice_list.length - 1))]
              await vote_on(account, space_, choice)
              console.log('choice: ', space_, choice, wallet.toLowerCase())
              await new Promise(r => setTimeout(r, (Math.floor(Math.random() * 40) + 1) * 1000));
            }

        }
      }

    }
  }
}

async function single_voting(account, space, choice) {
  await vote_on(account, space, choice)
}


//mass_voting(space, choice).then()
loop_voting(list_space, choice).then()
//single_voting(get_account(3), space, choice).then()
