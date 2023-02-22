import Joi from "joi";
import toastr from "toastr";

export const PostValidator = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        avatar: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
        content: Joi.string().min(3).required(),
        categories_postId: Joi.string().required(),
    });

    const result = schema.validate(data);

    if (result.error) {
        toastr.error("! " + result.error.details[0].message, "Error", {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-center',
            timeOut: 3000,
        });
        return { error: 1, message: result.error.details[0].message };
    }

    return null;
};
