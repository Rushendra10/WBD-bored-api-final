const res = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const { model, Schema } = require('mongoose')

const Post = new Schema({

    postDate: {
        type: String,
        required: true
    },

    postCategory: {

        type: String,
        required: true
    },

    postTitle: {
        type: String,
        required: true
    },

    postContent: {
        type: String,
        required: true
    },

    postImg:
    {
        type: String,
        required: true
    },

    newcategoryname: 
    {
        type: String
    },

    newcategoryImg:
    {
        type: String,
        required: false
    },

    // catflag:
    // {
    //     type: Number,
    //     required: false
    // },

    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
});

Post.statics.savePost = function(newPost) {
    newPost.save((err,docs)=>{
        console.log(err||docs);
    });
};

Post.statics.fetchPostById = function(id,cb){
    this.findOne({_id:id},(err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            cb(id);
        }
    });
} 



module.exports = model('Post', Post);