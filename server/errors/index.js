export class BadRequest extends Error{
    constructor(message = 'Bad Request'){
        super(message)

        this.status = 400
    }
}

export class Unauthorized extends Error{
    constructor(message = 'Unauthorized'){
        super(message)

        this.status = 401
    }
}