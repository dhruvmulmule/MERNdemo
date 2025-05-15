const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode ? res.statusCode : 500; // Set default to 500 if status code is not set
    res.status(statuscode);
    res.json({ message: err.message })
};

module.exports = { errorHandler };