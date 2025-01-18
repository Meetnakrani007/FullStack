class ExpressError extends Error {
  constructor(StatusCode, message) {
    super();
    this.StatusCode = StatusCode;
    this.message = message;
  }
}
module.exports = ExpressError;
