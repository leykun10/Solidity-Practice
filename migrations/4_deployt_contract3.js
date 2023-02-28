const Event = artifacts.require("Events");

module.exports = function (deployer) {
  deployer.deploy(Event);
};