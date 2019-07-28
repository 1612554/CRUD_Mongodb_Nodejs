var User = require('../service/user.service');

exports.createUser = (req, res, next)=>{
    var user = { 
        name: req.body.name,
        address: req.body.address
    };

    User.create(user, (err, user)=>{
        if(err){
            res.json({
                error: err
            })
        }

        res.json({
            message: "User created succesfully"
        });
    });
}

exports.getUser = (req, res, next)=>{
    User.get({}, (err, users)=>{
        if(err){
            res.json({
                error: err
            });
        }

        res.json({
            users: users
        });
    });
}

exports.updateUser = (req, res, next)=>{
    var user = {
        name: req.body.name,
        address: req.body.address
    };

    User.update({
        _id: req.params.id
    }, user, (err, user)=>{
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User updated successfully"
        })
    })
}

exports.deleteUser = (req, res, next)=>{
    User.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "User deleted successfully"
        })
    })

}