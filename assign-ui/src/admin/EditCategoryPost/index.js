import toastr from "toastr";
import { getCategoryPostById } from "~/api/categoryPostApi";
import { updateCategory } from "~/api/categoryPrj";
import { router, useEffect, useState } from "~/libs";
import { CategoryPostValidator } from "~/utils/categoryPost.validator";

function EditCategoryPost({ id }) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        getCategoryPostById({ id }).then((res) => setCategory(res.data));
    }, []);

    useEffect(() => {
        const name = document.getElementById("name-category");

        document.getElementById("form-edit-category").onsubmit = (e) => {
            e.preventDefault();

            const Category = {
                name: name.value,
            };

            const err = CategoryPostValidator(Category);

            if (!err) {
                updateCategory({ id, ...Category }).then(() => {
                    toastr.success("cập nhập thành công");
                    router.navigate("/admin/categories-post");
                });
            }
        };
    }, [category]);

    return `<section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Category</h2>
                <form id="form-edit-category">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Category Name
                            </label>
                            <input
                                id="name-category"
                                type="text"
                                name="name"
                                value="${category.name}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type category name"
                            />
                        </div>

                       
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-red-700 bg-green-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Update Category
                    </button>
                </form>
            </div>
        </section>`;
}

export default EditCategoryPost;
