<h3 align="center">Admin API Client</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/@mtraders/admin-api">
    <img src="https://img.shields.io/npm/v/@mtraders/admin-api.svg" alt="npm version"/>
  </a>
  <a href="https://www.npmjs.com/package/@mtraders/admin-api">
      <img alt="npm" src="https://img.shields.io/npm/dm/@mtraders/admin-api" alt="Downloads"/>
  </a>
  <a href="https://github.com/mtraders/js-sdk/blob/master/packages/admin-api/package.json">
      <img alt="node-current" src="https://img.shields.io/node/v/@mtraders/admin-api?color=blue">
  </a>
  <a href="https://github.com/mtraders/js-sdk/blob/master/LICENSE">
    <img alt="NPM" src="https://img.shields.io/npm/l/@mtraders/admin-api" alt="LICENSE">
  </a>
</p>

<p>JavaScript SDK for Halo's Admin API,implemented with TypeScript,encapsulating parameter types and return value types to make the use of API more brief.</p>

## Installation

```shell
npm install @mtraders/admin-api --save
```

## Usage

Here is a simple code for obtaining a list of posts.

```javascript
import { AdminApiClient, HaloRestAPIClient } from '@mtraders/admin-api'

// http request tool for halo rest api.
const haloRestApiClient = new HaloRestAPIClient({
  baseUrl: process.env.HALO_BASE_URL,
})

// create adminApiClient by haloRestApiCLient.
const haloAdminClient = new AdminApiClient(haloRestApiClient)

// obtaining a list of articles.
haloAdminClient.post.list().then((res) => {
  console.log(res)
})
```

You can also view the complete implementation of the halo-admin project: [@mtraders/halo-admin](https://github.com/mtraders/halo-admin).

### License

[MIT license](../../LICENSE)
