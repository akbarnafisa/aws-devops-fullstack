import { ErrorRequestHandler } from "express";

export const generalError: ErrorRequestHandler = (err, req, res, next) => {
  if (!err) {
    next()
  }

  res.status(err.status || 500).json({
    success: false,
    error: {
      errorMsg: err.message,
      errorCode: err.code,
    }
  })
}
