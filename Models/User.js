const { default: mongoose } = require('mongoose');
const { model, Schema } = require('mongoose')

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,
        unique: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true,
        unique: false
    },

    gender: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    profilePicture: {
        type: String
    },

    bio: {
        type: String,
        required: false,
    },

    posts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
});


User.statics.saveUser = function (newUser) {
    newUser.save((err, doc) => {
        console.log(err || doc);
    });
};

User.statics.findUserByEmail = function (email, cb) {
    this.findOne({ email: email }, (err, docs) => {

        if (err) {
            console.log(err);
        }
        else {
            cb(docs);
        }
    });
}

User.statics.fetchUserById = function (id, cb) {
    this.findOne({ id: id }, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            cb(docs);
        }
    });
}

module.exports = model('User', User);

