class APIError extends Error {
  constructor(
    status = 500,
    title = 'Internal Server Error',
    message = 'Something bad happened.'
  ) {
    super(message);
    this.status = status;
    this.title = title;
    this.message = message;
    Error.captureStackTrace(this); //include normal error stacktrace for API errors
  }
  toJSON() {
    return {
      error: {
        status: this.status,
        title: this.title,
        message: this.message
      }
    };
  }
}

module.exports = APIError;
