---
hide_table_of_contents: true
sidebar_position: 1
---

# Exchange

Core exchange functionality

```ts
export interface IPurchaseData {
  address: string;
  items: Array<IAssetComponentHistory>;
  price: Array<IAssetComponentHistory>;
  transactionHash: string;
}

export interface IPurchaseRandomData {
  account: string;
  item: IAssetComponentHistory;
  price: Array<IAssetComponentHistory>;
  transactionHash: string;
}

```
