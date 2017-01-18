# Redux persist RESTful storage


use RESTful way to build a storage adaptor for [redux-persist](https://github.com/rt2zz/redux-persist) by implementing methods: `setItem`, `getItem`, `removeItem` and `getAllKeys`

## install 

```bash
npm install --save redux-persist-restful-storage
```

## usage 
```javascript
import { AsyncRESTfulStorage } from 'redux-persist-restful-storage'
import { persistStore, autoRehydrate } from 'redux-persist'
const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store, { storage: new AsyncRESTfulStorage() })
``` 

## example 

You need to build your own RESTful API server to communicate with redux-persist. 

``` /example ``` present an example with nodeJS. Use [express](https://github.com/expressjs/express) to create a HTTP server and [node-localstorage](https://github.com/lmaccherone/node-localstorage) to save/get data.

To run with
```bash
npm install
node nodeApiExample.js
```