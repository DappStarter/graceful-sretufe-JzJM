require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind hour grace photo flower slab'; 
let testAccounts = [
"0xf3bb087253569fda88ce5775d43a794da777885943100638e8233de5ad9d37ba",
"0x800460f74aa1cb1f1fba4df884fb92955bab7643f2cad0f8cc2e84953aace034",
"0x6e1e20e6bc572e8d59113519b7eacee0d5c7a532c2ae91f2b258c13054666643",
"0xd672852be9b4fc1c5d1a2207918d48164c011bcf7c1fdab0c7e83944fc6a5a4c",
"0x792150d8fc38b52e6483b5f1e6b9c30e3c0b67c9a0e31afed28a7516062b49ed",
"0x9535031c56bc38bfbe89897dab88a4edc5263af2433b710360ac4d8d7b8d9c7d",
"0x251b96e26aaad54f30dbc856a373bae5fe5bd56859f2bb8ff499dc175800d766",
"0xc61944c3b8f0db5fa9c9153e5c7f112a52deb0f9fbe4106218a87571505dd7e5",
"0x4de3629ea30c18ea6e012e96596d9e636de5191cfa6e5fb88aa8828ea15285d6",
"0x5a54b825ab5f74989266ff9f9e105f18da93eac3a79ce4b1886d547025f71330"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

