type Errors = {
    context: {
        label: string;
    };
    message: string;
};

export const parseJoiErrors = (errors): object => {
    const errorObject: object = {};
    errors.map((error: Errors) => {
        errorObject[error.context.label] = error.message;
    });
    return errorObject;
};
