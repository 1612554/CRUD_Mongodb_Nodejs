var mongoose = require('mongoose');

var UserSchema = require('../model/user.model');

UserSchema.statics = {
    create: function(data, cb){
        var user = new this(data);
        user.save(cb);
    },

    get: function(query, cb){
        this.find(cb);
    },

    update: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
}


var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;