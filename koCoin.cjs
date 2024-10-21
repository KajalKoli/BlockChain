//import sha256 from 'crypto-js/sha256';

const SHA256 = require("crypto-js/sha256");

class block{
    constructor(index, timestamp, data, prevHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA256(this.index + this.timestamp + this.prevHash + JSON.stringify(this.data)).toString();
    }
}

class blockChain{

    constructor()
    {
        this.chain = [this.getGenesisBlock()]
    }

    getGenesisBlock()
    {
        return new block(1, Date.now(), 40 , 0)
    }

    getLatestBlock()
    {
        return this.chain[this.chain.length - 1]
    }

    newBlock(index, timestamp, data, prevHash)
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = calculateHash();
    }

    addBlock(newBlock)
    {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();

        this.chain.push(newBlock);
    }

    isBlockChainValid()
    {

    }
}

let koCoin = new blockChain();

koCoin.addBlock(new block(2, Date.now, 50))
koCoin.addBlock(new block(3, Date.now, 60))

console.log(JSON.stringify(koCoin, null , 4))