import Joi from "joi";
import toastr from "toastr";

export const ProjectValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        avatar: Joi.string().min(3).required(),
        workTime: Joi.string().min(3).required(),
        tags: Joi.array(),
        github: Joi.string().min(3).required(),
        preview: Joi.string().min(3).required(),
        listImgs: Joi.array(),
        description: Joi.string().min(3).required(),
        categoriesId: Joi.string(),
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
