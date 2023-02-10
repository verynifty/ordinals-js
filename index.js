
const axios = require('axios');
let Transaction = require("./transaction");

async function makeRPCCall(method, params) {
    const response = await axios.post('https://svc.blockdaemon.com/bitcoin/mainnet/native', {
        jsonrpc: '2.0',
        method: method,
        params: params
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer qbhC0PNF34zfRyetX7MqDvz-5lU1KN0ttIbxkON8Y0FSbtN8'
        },
    })
    return response.data.result;
}

(async () => {

    const txHashes = [
        "051984d19027f4197fe1e03b0f6d0751c6ed8a32fefb2815e07a022fba1aea23",
        "b3da1c31e1649edb159733eeba86a482b0c2d445aa5c5d4d0869e30e712fc119",
        "4e7aee32ffe0541efac2d44c4bd227de8d4f53000ff425adb991900051bee229",
        "d8de1ffbd51cdeb7a166f252f97d597e694802391c18593908dcbe111596de0b",
        "9fd0db6cfe43607970fbc1b79148cb152804c4e62633935dc2c1e94f860ae970",
        "11fc2c73a309a4eebea86f2b0b8bca09f0c8fd20f134aab8b269ba04d1bfd4bb",
        "2ec7d3b1e49e99a185d665fc106bfb02d65267d6adc5179822c26c21c1ede4ae",
        "6bc5a7c34247c2c6d6994c478fbac4da10f94b8ea5119f9833f30ec8a032476a",
        "e7f85df8147605de31b7578b6d64aab8c0f8249d35f4c42491d93c8bb03e9224",
        "3f6b52936b3090b076b2f8ea2c275cd9c241dc9d46a3a4a4f40db6dfef508db9",
        "cd3dc3d1d30a5ee5062b944ecdb1a5ae6730a3ef25167e0b0d6eb5910507e2b8",
        "9fc5a2e28f7fcfc2317ddcb396a18c21cd88b70d9f933917fd24aa50f2673526",
        "97f6b109c3991116720011c427acb68b6736bd4a3144a67dfeffc299411c0ce0"
    ]

    for (const txHash of txHashes) {
        let transactionRaw = await makeRPCCall('getrawtransaction', [txHash])
        let tx = new Transaction(txHash, transactionRaw);
        console.log("Hash", txHash, tx.isOrdinalGenesis(), tx.getContentType(), "Content lenght:", tx.getContentData().length)
        tx.contentToFile()
    }


})();

