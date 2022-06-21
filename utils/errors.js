class ExpressError extends Error {

    constructor(message, status) {
        this.message = message;
        this.status = status;
      }

}

class BadRequestError extends Error {
    constructor(message, status) {
        this.message = 'Bad request';
        this.status = 400;
      }
}

class NotFoundError extends Error {
    constructor(message, status) {
        this.message = 'Not found';
        this.status = 404;
      }

}

module.exports = ExpressError
module.exports = BadRequestError
module.exports = NotFoundError