---
hide_table_of_contents: true
sidebar_position: 1
---

# Deployable

This type of vesting is meant to be deployed as a contract by merchant. This is a good choice when you need to deploy 
one contract at a time

## Deployment

Vesting contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/).

You can create empty vesting contract and TopUp it later.

### Deployment options

These values are passed directly to blockchain

- **beneficiary** - the address of the beneficiary
- **start date** - the date from which deposits will be displayed
- **cliff in month** - how many month to wait until first unlock
- **monthly release** - how many percents of locked amount to release every month

![vesting contract deploy dialog](/img/admin/mechanics-marketing/vesting/contract_deploy_dialog.png)

