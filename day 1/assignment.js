app.post('/users', function createUser(request, response) {
    User.findOrCreate({ where: request.body })
        .then(function (user) {
            user.getContacts()
                .then(contacts => {
                    request.session.userId = user.id
                    response.render('profile', {user, contacts})
                })
        })
    logging(`/users route called with ${request.body}`)
})