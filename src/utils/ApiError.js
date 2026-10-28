class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong!",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.errors=errors
        this.data=null // documentation for this property is not clear, but it seems to be intended for additional data related to the error
        this.success=false
        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export { ApiError }