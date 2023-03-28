---
sidebar_position: 1
---

# Vesting

Vesting is usually used to lock investors funds and unlock them using time-base function. This means investors still can
use their bound to gain profit by selling it or by using it for [governance](/admin/complex-mechanics/governance/)
but can't just sell tokens on the market.

## Deployment

Vesting contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/).

### Deployment options

The [Contract Manager](/admin/miscellaneous/contract-manager/) handles the deployment process. If you would like more information about deployment options, please refer to the relevant [page](/admin/miscellaneous/contract-manager/vesting).

### Fund

After contract is deployed you have to manually fund it with tokens. There is a `FUND` button next to each vesting
contract that helps to perform this operation using all system's [NATIVE](/admin/category/native/)
and [ERC20](/admin/category/erc20/) tokens

![](/img/simple-mechanics/vesting/vesting-fund.png)

### Templates

![](/img/simple-mechanics/vesting/vesting-schedule.png)

### References

You can read more about how to create your own Vesting
Template [here](https://docs.openzeppelin.com/contracts/4.x/api/finance#VestingWallet)

