import { getFullCategoryPrjs, deleteCategory } from "~/api/categoryPrj";
import { useEffect, useState } from "~/libs";

function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getFullCategoryPrjs({})
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deleteCategory({ id })
                    .then(() => {
                        const newProjects = categories.filter((project) => project.id != id);
                        setCategories(newProjects);
                    })
                    .catch((err) => console.log(err));
            });
        }
    }, [categories]);

    return `<div>
            <a class="my-4 block" href="/admin/category/add" className="">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Thêm category
                </button>
            </a>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="w-full mb-12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-lg text-blueGray-700">All Projects</h3>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full overflow-x-auto">
                            <table class="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>

                                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            name
                                        </th>

                                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Options
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${categories
                                        .map(
                                            (project, index) => `
                            <tr class="">
                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                ${index + 1}
                                </td>

                                <th class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left h-full flex items-center">
                                    <img
                                        src="${project.avatar}"
                                        class="h-14 w-14 bg-white rounded-sm border"
                                        alt="${project.name}"
                                    />
                                    <span class="ml-3 font-bold text-blueGray-600">${project.name}</span>
                                </th>

                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    
                                    <div
                                        class="flex bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                        id="table-light-1-dropdown"
                                    >
                                        <a
                                            href="/admin/categories/edit/${project.id}"
                                            class="text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                        >
                                            Sửa
                                        </a>
                                        <div
                                            class="text-sm mx-4 py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                        >
                                            <button class="btn btn-primary btn-remove" data-id="${
                                                project.id
                                            }">Xóa</button>
                                        </div>
                                     
                                    </div>
                                </td>
                            </tr>`
                                        )
                                        .join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

export default Category;
