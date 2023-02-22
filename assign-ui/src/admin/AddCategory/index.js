import { addCategory } from "~/api/categoryPrj";
import { router, useEffect } from "~/libs";
import { CategoryValidator } from "~/utils/category.validator";
import { uploadImage } from "~/utils/uploadImage";
import toastr from "toastr";

function AddCategory() {
    useEffect(() => {
        const name = document.getElementById("name-category");
        const avatar = document.getElementById("avatar");

        document.getElementById("form-add-category").onsubmit = async (e) => {
            e.preventDefault();

            const img = await uploadImage(avatar.files);

            const newCategory = {
                name: name.value,
                avatar: img[0],
            };

            const err = CategoryValidator(newCategory);

            if (!err) {
                addCategory(newCategory).then(() => {
                    toastr.success("Xuất bản thành công", "Thành công");
                    router.navigate("/admin/categories");
                });
            }
        };
    }, []);

    return `<section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new category</h2>
                <form id="form-add-category">
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

                        <div class="sm:col-span-2">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input"
                            >
                                Upload avatar
                            </label>
                            <input
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help"
                                id="avatar"
                                type="file"
                            />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                            <img
                                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                                class="mt-2 h-28 w-56 bg-white rounded-sm border object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-red-700 bg-green-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </section>`;
}

export default AddCategory;
