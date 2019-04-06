const MutinyToken = artifacts.require("./MutinyToken.sol");
const MutinyTokenCrowdsale = artifacts.require("./MutinyTokenCrowdsale.sol");

const ether = (n) => new web3.BigNumber(web3.toWei(n, 'ether'));

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); },
};

module.exports = async function(deployer, network, accounts) {
  const _name = "Mutiny Token";
  const _symbol = "MUT";
  const _decimals = 18;

  await deployer.deploy(MutinyToken, _name, _symbol, _decimals);
  const deployedToken = await MutinyToken.deployed();

  const latestTime = (new Date).getTime();

  const _rate           = 500;
  const _wallet         = '0xb1b1f034e0315a483c824083cb08cc4aa0f04fbc'; 
  const _token          = deployedToken.address;
  const _openingTime    = latestTime + duration.minutes(1);
  const _closingTime    = _openingTime + duration.weeks(1);
  const _cap            = ether(100);
  const _goal           = ether(50);
  const _foundersFund   = '0xb1b1f034e0315a483c824083cb08cc4aa0f04fbc'; 
  const _foundationFund = '0xb1b1f034e0315a483c824083cb08cc4aa0f04fbc'; 
  const _partnersFund   = '0xb1b1f034e0315a483c824083cb08cc4aa0f04fbc'; 
  const _releaseTime    = _closingTime + duration.days(1);

  await deployer.deploy(
    MutinyTokenCrowdsale,
    _rate,
    _wallet,
    _token,
    _cap,
    _openingTime,
    _closingTime,
    _goal,
    _foundersFund,
    _foundationFund,
    _partnersFund,
    _releaseTime
  );

  return true;
};
