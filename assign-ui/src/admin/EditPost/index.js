import { getFullCategoryPosts } from "~/api/categoryPostApi";
import { getPostById, updatePost } from "~/api/postApi";
import { router, useEffect, useState } from "~/libs";
import { PostValidator } from "~/utils/post.validator";
import { uploadImage } from "~/utils/uploadImage";

function EditPost({ id }) {
    const [post, setPost] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getPostById({ id }).then((res) => setPost(res.data));
        getFullCategoryPosts().then((res) => setCategories(res.data));
    }, []);

    useEffect(() => {
        const name = document.getElementById("name-prj");
        const avatar = document.getElementById("avatar");
        const description = document.getElementById("description");
        const contetn = document.getElementById("content");
        const category = document.getElementById("category");

        document.getElementById("form-edit-post").onsubmit = async (e) => {
            e.preventDefault();
            const imgs = await uploadImage(avatar.files);
            const formData = {
                title: name.value,
                avatar: imgs[0] || post.avatar,
                description: description.value,
                content: contetn.value,
                categories_postId: category.value,
            };

            console.log(formData);

            const err = PostValidator(formData);
            if (!err) {
                updatePost({ id, ...formData }).then(() => {
                    router.navigate("/admin/posts");
                });
            }
        };
    }, [post]);

    return `<section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new post</h2>
                <form id="form-edit-post">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Title
                            </label>
                            <input
                                id="name-prj"
                                type="text"
                                name="name"
                                value="${post.title}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
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
                                value="${post.avatar}"
                                type="file"
                            />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                            <img
                                src="${post.avatar}"
                                class="mt-2 h-28 w-56 bg-white rounded-sm border object-cover"
                                alt=""
                            />
                        </div>

                        
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Description
                            </label>
                            <input
                                id="description"
                                type="text"
                                name="name"
                                value="${post.description}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Category</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                ${categories?.map(
                                    (category) => `<option value="${category.id}" selected>${category.name}</option>`
                                )}
                               
                            </select>
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Content
                            </label>
                            <textarea
                                id="content"
                                rows="8"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your description here"
                            >${post.content}</textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-red-700 bg-green-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Cập nhật post
                    </button>
                </form>
            </div>
        </section>`;
}

export default EditPost;
