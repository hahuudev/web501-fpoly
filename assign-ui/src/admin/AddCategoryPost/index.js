import { addCategoryPost } from "~/api/categoryPostApi";
import toastr from "toastr";
import { router, useEffect } from "~/libs";
import { CategoryPostValidator } from "~/utils/categoryPost.validator";

function AddCategoryPost() {
    useEffect(() => {
        const name = document.getElementById("name-category");

        document.getElementById("form-add-category-post").onsubmit = (e) => {
            e.preventDefault();

            const newCategory = {
                name: name.value,
            };

            const err = CategoryPostValidator(newCategory);

            if (!err) {
                addCategoryPost(newCategory).then(() => {
                    toastr.success("cập nhập thành công");
                    router.navigate("/admin/categories-post");
                });
            }
        };
    }, []);

    return `<section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new category</h2>
                <form id="form-add-category-post">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Category Name
                            </label>
                            <input
                                id="name-category"
                                type="text"
                                name="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type category name"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-red-700 bg-green-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Add Category Post
                    </button>
                </form>
            </div>
        </section>`;
}

export default AddCategoryPost;
