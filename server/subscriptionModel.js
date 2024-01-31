const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subscription = new Schema({
    uid: String,
    endpoint: String,
    expirationTime: Number,
    keys: {
        p256dh: String,
        auth: String,
    },
});

module.exports = mongoose.model('subscription', Subscription);