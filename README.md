# ordinals-js

A tiny library to decode ordinals on the Bitcoin chain with JS.

```
npm install
```


```
let tx = new Transaction(txHash, transactionRaw);
tx.isOrdinalGenesis()
tx.getContentType()
tx.getContentData()
tx.contentToFile()
```

some example of decoded txs:

```
Hash 051984d19027f4197fe1e03b0f6d0751c6ed8a32fefb2815e07a022fba1aea23 true image/jpeg Content length: 53378
Hash b3da1c31e1649edb159733eeba86a482b0c2d445aa5c5d4d0869e30e712fc119 true image/png Content length: 4069
Hash 4e7aee32ffe0541efac2d44c4bd227de8d4f53000ff425adb991900051bee229 true text/plain;charset=utf-8 Content length: 6
```


