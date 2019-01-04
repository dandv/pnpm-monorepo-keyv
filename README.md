Works:

```sh
$ cd a
$ rm -rf node_modules
$ npm install
$ node index.js
```

Fails:
```sh
$ cd ..
$ rm -rf node_modules **/node_modules
$ pnpm install
$ node a/index.js
```

> Error: Cannot find module '@keyv/mongo'
