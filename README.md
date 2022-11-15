# ’Chievemints

![MetaGame ’Chievemints](packages/ui/public/logo.svg)

This is a simple app to mint ERC-1155 NFTs to represent player accomplishments in [MetaGame](//metagame.wtf).

The permissions for each token are controlled by the existence of other tokens in the system.

## Running

* `yarn`
* `yarn ui:start`

## Deploying

Set `CHAIN_NAME` in `packages/contracts/.env` and `VITE_CHAIN_NAME` in `packages/ui/.env` to a network from the [hardhat config](packages/contracts/hardhat.config.ts).

By default if an existing deployment for that network is found in `packages/contracts/artifacts/`, the system will attempt to upgrade the contract. To force a fresh deployment, the best method is to add a new network for your deployment to `packages/contracts/hardhat.config.ts` to the `validationKeyNames` and `config.networks` sections.

![Flashy Octo](packages/ui/public/favicon.svg)
