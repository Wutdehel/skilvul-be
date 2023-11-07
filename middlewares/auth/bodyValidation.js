function bodyValidationRegister(req, res, next) {
    const { id, username, password, email } = req.body

    if ( !id ||!username || !password || !email ) {
        res.status(400).send({
            message: 'Field is not complete!',
            statusText: 'Field is not complete!',
            statusCode: 400,
        })
    } else {
        next()
    }
}

module.exports = {
    bodyValidationRegister,
}