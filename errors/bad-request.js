const CustomAPIError = require('./custom-error');
class BadRequest extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = CustomAPIError;
