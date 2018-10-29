const Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer){
  deployer.deploy(Voting, ['Jack,Erik,"Dan'],{gas: 6700000});
}