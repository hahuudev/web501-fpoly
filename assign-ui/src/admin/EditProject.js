import { getProjectById, updateProject } from "~/api/projects";
import { uploadImage } from "~/utils/uploadImage";
import { router, useEffect, useState } from "../libs";
import toastr from "toastr";
import { getFullCategoryPrjs } from "~/api/categoryPrj";
import { ProjectValidator } from "~/utils/project.validator";

function EditProject({ id }) {
    const [project, setProject] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getFullCategoryPrjs().then((res) => setCategories(res.data));
    }, []);

    useEffect(() => {
        getProjectById({ id }).then((res) => setProject(res.data));
    }, []);

    useEffect(() => {
        const name = document.getElementById("name-prj");
        const avatar = document.getElementById("avatar");
        const timeWork = document.getElementById("time-work");
        const tags = document.getElementById("tags");
        const github = document.getElementById("github");
        const preview = document.getElementById("preview");
        const listImages = document.getElementById("list-imgs");
        const description = document.getElementById("description");
        const category = document.getElementById("category");

        document.getElementById("form-edit-prj").onsubmit = async (e) => {
            e.preventDefault();
            const [avata, listImgs] = await Promise.all([uploadImage(avatar.files), uploadImage(listImages.files)]);

            const formData = {
                name: name.value,
                avatar: avata[0] || project.avatar,
                workTime: timeWork.value,
                tags: tags.value.split(", "),
                github: github.value,
                preview: preview.value,
                listImgs: listImgs || project.listImgs,
                description: description.value,
                categoriesId: category.value,
            };

            const err = ProjectValidator(formData);
            if (!err) {
                updateProject({ id, ...formData }).then(() => {
                    toastr.success("Update th??nh c??ng", "Th??nh c??ng");
                    router.navigate("/admin/projects");
                });
            }
        };
    }, [project]);

    useEffect(() => {
        const listImages = document.getElementById("list-imgs");
        listImages.onchange = async() => {
            const res = await uploadImage(listImages.files)
            console.log(res)
        };
    });

    return `<section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new project</h2>
                <form id="form-edit-prj">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Project Name
                            </label>
                            <input
                                id="name-prj"
                                type="text"
                                name="name"
                                value="${project.name}"
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
                                value="${project.avatar}"
                                type="file"
                            />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                            <img
                                src="${project.avatar}"
                                class="mt-2 h-28 w-56 bg-white rounded-sm border object-cover"
                                alt=""
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
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Th???i gian ho??n th??nh
                            </label>
                            <input
                                id="time-work"
                                type="text"
                                name="name"
                                value="${project.workTime}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Tags (V?? d???: html, css, javacsription,...)
                            </label>
                            <input
                                id="tags"
                                type="text"
                                name="name"
                                value="${project.tags?.join(", ")}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Link github
                            </label>
                            <input
                                id="github"
                                type="text"
                                name="name"
                                value="${project.github}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Link preview
                            </label>
                            <input
                                id="preview"
                                type="text"
                                name="name"
                                value="${project.preview}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                List Imagse
                            </label>
                            <input
                                id="list-imgs"
                                type="file"
                                name="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                            <input
                                id="list-imgs-default"
                                type="text"
                                name="name"
                                value="${project.listImgs?.join(", ")}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows="8"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your description here"
                            >${project.description}</textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-red-700 bg-green-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        C???p nh???t project
                    </button>
                </form>
            </div>
        </section>`;
}

export default EditProject;
