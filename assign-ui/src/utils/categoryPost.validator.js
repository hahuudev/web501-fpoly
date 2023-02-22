import Joi from "joi";
import toastr from "toastr";

export const CategoryPostValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    const result = schema.validate(data);

    if (result.error) {
        toastr.error("! " + result.error.details[0].message, "Error", {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: 3000,
        });
        return { error: 1, message: result.error.details[0].message };
    }

    return null;
};
