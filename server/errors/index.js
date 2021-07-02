export class BadRequest extends Error{
    constructor(message = 'Bad Request'){
        super(message)

        this.status = 400
    }
}