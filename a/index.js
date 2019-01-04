const Keyv = require('keyv');
const mongoUrl = 'mongodb://ws:1secret@ds135714.mlab.com:35714/webstorm-bug';
const keyv = new Keyv(mongoUrl);
keyv.opts.store.db.close();
