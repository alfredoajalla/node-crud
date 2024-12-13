const main = (err, req, res, next ) => {
    res.status(err.httpstatus || 500).send(err)
}

export default main