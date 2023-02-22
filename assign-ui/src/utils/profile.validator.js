import Joi from "joi";
import toastr from "toastr";

export const ProfileValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        avatar: Joi.string().min(3).required(),
        phone: Joi.string().min(3).required(),
        github: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        location: Joi.string().min(3).required(),
        skills: Joi.array(),
        listImgs: Joi.array(),
        description: Joi.string().min(3).required(),
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
