var User = require('../model/user');

module.exports = function(router) {
    router.post('/users', function(req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
            res.send('make sure username/email/password were entered');
        } else {
            user.save(function(err) {
                if (err) {
                    res.send('username or email already exist');
                } else {
                    res.send('user created');
                }
            });
        }
    });

    return router;
}