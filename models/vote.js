const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    nominees: {
        type : Array,
        required: true
    },
    votes: {
        type : Array,
        default :    []
    },
    voters:{
        type: Array,
        default: []
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Votes', VoteSchema);