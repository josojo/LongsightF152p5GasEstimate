const MerkleTest = artifacts.require("MerkleTest")


let verifier
contract('MerkleTest', (accounts) => {
  
	
   it('MerkleTest transaction', async () => {
   merkletest = await MerkleTest.deployed()
	   console.log(await merkletest.LongsightF152p5.estimateGas(1247896124,12346123418986))
   const answer = await merkletest.LongsightF152p5(1247896124,12346123418986);
   console.log(answer)



	console.log(await merkletest.LongsightF152p5x16.estimateGas(1247896124,12346123418986))
   	const hash = await merkletest.LongsightF152p5x16.sendTransaction(1247896124,12346123418986);
	const tx = await web3.eth.getTransaction(hash);
	const receipt = await web3.eth.getTransactionReceipt(hash);
	const gasCost = tx.gasPrice.mul(receipt.gasUsed);
 	console.log(gasCost.toNumber())
   });
});
