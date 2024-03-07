import CustomAPIError from "./custom.errors";

class ForbiddenError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}

export default ForbiddenError;