const bip39 = require("bip39");
const { hdkey } = require('ethereumjs-wallet');
const fs = require('fs');

function generateAddressesFromSeed(mnemonic, count) {
  let seed = bip39.mnemonicToSeedSync(mnemonic);
  let hdwallet = hdkey.fromMasterSeed(seed);
  let wallet_hdpath = "m/44'/60'/0'/0/";

  let accounts = [];
  for (let index = 0; index < count; index++) {
    let wallet = hdwallet.derivePath(wallet_hdpath + index).getWallet();
    let address = "0x" + wallet.getAddress().toString("hex");
    let privateKey = wallet.getPrivateKey().toString("hex");
    console.log(`第${index}个地址已生成`)
    accounts.push({ id: index + 1, address: address, privateKey: privateKey });
  }
  return accounts;
}

const mnemonic = "your own"
const count = 100;
const result = generateAddressesFromSeed(mnemonic, count);
fs.writeFile('keys.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
  console.log(`地址生成完毕`);
});
