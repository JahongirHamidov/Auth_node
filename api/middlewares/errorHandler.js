
const notFound = (req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
}

const internalServerError = (error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
}

module.exports = {
    notFound,
    internalServerError
}