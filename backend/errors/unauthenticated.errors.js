import CustomAPIError from "./custom.errors";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export default UnAuthenticatedError;