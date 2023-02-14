import { getFullProjects } from "../api/projects";
import { useEffect, useState } from "../libs";

function AdminProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getFullProjects()
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deleteProject({ id })
                    .then(() => {
                        const newProjects = projects.filter((project) => project.id != id);
                        setProjects(newProjects);
                    })
                    .catch((err) => console.log(err));
            });
        }
    }, [projects]);

    return `<div>
            <a class="mx-4" href="/admin/projects/add" className="">
                <button class="btn btn-primary">Thêm sản phẩm</button>
            </a>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên dự án</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projects
                            .map(
                                (
                                    project,
                                    index
                                ) => `<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="px-6 py-4">
                        ${index + 1}
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${project.name}
                        </th>
                       
                        
                        <td><a href="/admin/projects/edit/${project.id}" className="" >
                            <button class="btn btn-primary" data-id="${project.id}" data-navigo>Sửa</button></a>
                         
                            <button class="ml-4 btn btn-primary btn-remove" data-id="${project.id}">Xóa</button>
                            </td>  
                    </tr>`
                            )
                            .join("")}
                    </tbody>
                </table>
            </div>
        </div>`;
}

export default AdminProjects;
