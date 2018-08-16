
const MerkleTest = artifacts.require("MerkleTest")

module.exports = function deploy (deployer, network, accounts) {
	deployer.deploy(MerkleTest)
}
