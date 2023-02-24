# Snapshot 投票脚本

## 安装

首先在本地安装nodejs：https://nodejs.org/en/download/

在命令行执行npm install，安装所有的依赖库。

## 用助记词生成地址文件

找到src/mnemonic_to_key.js文件的第21行：const mnemonic = ""，把助记词输入到引号之间。

`const count = 100`表示的是用该助记词生成的钱包数量，根据个人情况修改即可。

然后在命令行下执行：

node src/mnemonic_to_key.js （windows的斜线可能是反的）

执行后，会在当前目录下生成一个keys.json的文件。文件生成完毕后，别忘了把助记词从js文件中删掉。

如果你的钱包不是同一个助记词生成的话，可以用按照下面的格式手动拼装出来json文件:

```
[
  {
    "id": 1,
    "address": "xxx",
    "privateKey": "xxx"
  },
  {
    "id": 2,
  	"address": "xxx",
  	"privateKey": "xxx"
  }
]
```

只要取名为keys.json即可。

## 投票

Edit the other snapshot-example.json, so you control which wallet can vote to what different project.

现在两个jsonfile都要载入environment:   
Windows Powershell: $env:SNAP_LIST='贴入内容'    和$env:ETH_KEY='贴入keys.json内容'
Linux: export SNAP_LIST=贴入内容    export ETH_KEY=刀哥keys.json内容

Json文件生成完毕后，找到index.js文件，默认将对所有填写在数组list_space里的项目的所有有效单选进行投票。如果是多选，本程序不能处理。I attempted but signature format not working.

如果你想使用刚刚生成的所有钱包地址进行投票，那么填写好space地址和投票选项后，直接在命令行下面运行

node src/index.js 即可

如果你只想用其中某一个地址投票，那么把第17行注释掉，把第19行打开，把`get_account(1)`括号里的1改成你要投票的地址编号(也就是json文件中对应的"id")，然后再执行

node src/index.js

## 致谢

感谢CryptoChasers Builder群诸多群友的指点和帮助，尤其是"深海里的猫"，在我遇到困难时直接扔来了一份typescript文件，项目库中的snapshot.js只是在它的基础上做了简单修改，以便多地址使用。






