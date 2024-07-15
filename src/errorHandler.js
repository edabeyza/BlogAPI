"use strict";
/* -------------------------------------------------------
                 EXPRESSJS - Error Handler
------------------------------------------------------- */

module.exports = (err, req, res, next) => {
    const errorStatusCode = err.statusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack // error details
    })
}