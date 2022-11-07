import contract from '../contracts/bithuabi.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum } from '../config';


export const mint = async (mint_amount) => {
    try {
        if (isMetaMaskInstalled()) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractAddress = "0x58E1B4750cB6e1f12039D24003465A27174c6F07";
            const nftContract = new ethers.Contract(contractAddress, contract, signer);
            let txnHash = await nftContract.mint(ethereum.selectedAddress, mint_amount, {
                gasLimit: "285000",
                value: ethers.utils.parseEther((0.03 * mint_amount).toString())
            })
            return txnHash
        }
    }
    catch (err) {
        console.log(err,"not done");
    }
}

export const totalMintCount = async () => {
    if (isMetaMaskInstalled()) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x58E1B4750cB6e1f12039D24003465A27174c6F07";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let totalMint = await nftContract.count();
        console.log(totalMint);

        return totalMint;
    }
}

export const pending = async () => {
    try{
    const provider = new ethers.providers.Web3Provider(ethereum);
    provider.on("pending", async (tx) => {
               const transaction = await provider.getTransaction(tx);
               console.log(transaction,"transaction");
      })
    }
    catch(err){
        console.log(err);
    }
}