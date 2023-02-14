import { router, useEffect, useState } from "../libs";

function EditProject({ id }) {
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/api/projects/" + id)
            .then((res) => res.json())
            .then((data) => setProject(data));
    }, []);

    useEffect(() => {
        const namePrj = document.getElementById("name-prj");

        document.getElementById("form-edit-prj").onsubmit = (e) => {
            e.preventDefault();
            const formData = {
                name: namePrj.value,
                img: "https://picums/400/400",
            };
            fetch("http://localhost:8080/api/projects/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                router.navigate("/admin/projects");
            });
        };
    }, [project]);

    return `<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit a project</h2>
        <form id="form-edit-prj">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                    <input id="name-prj" value="${project.name}" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                </div>
             
                <div class="sm:col-span-2">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                </div>
            </div>
            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Edit project
            </button>
        </form>
    </div>
  </section>`;
}

export default EditProject;
