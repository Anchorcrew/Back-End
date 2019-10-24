const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnchorSchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Anchor', AnchorSchema);