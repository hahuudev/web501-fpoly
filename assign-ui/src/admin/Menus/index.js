import { deleteMenu, getFullMenus } from "~/api/menu";
import { useEffect, useState } from "~/libs";

function Menus() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        getFullMenus()
            .then((res) => setMenus(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deleteMenu({ id })
                    .then(() => {
                        const newMenus = menus.filter((menu) => menu.id != id);
                        setMenus(newMenus);
                    })
                    .catch((err) => console.log(err));
            });
        }
    }, [menus]);


    return `<div class="w-full mb-12 px-4">
            <a class="my-4 block" href="/admin/projects/add" className="">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Thêm navbar</button>
            </a>

            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-lg text-white">Menus Websites</h3>
                        </div>
                    </div>
                </div>
                <div class="block w-full overflow-x-auto">
                    <table class="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                    STT
                                </th>
                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                    Name
                                </th>
                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                    Path
                                </th>

                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                    Options
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${menus
                                .map(
                                    (item, index) => `<tr>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    ${index + 1}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i class="fas fa-circle text-orange-500 mr-2"></i>
                                    ${item.name}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i class="fas fa-circle text-orange-500 mr-2"></i>
                                    "${item.path}"
                                </td>

                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <div
                                        class="flex bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                        id="table-light-1-dropdown"
                                    >
                                        <a
                                            href="/admin/projects/edit/${item.id}"
                                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700"
                                        >
                                            Sửa
                                        </a>
                                        <div class="text-sm ml-4 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700">
                                            <button
                                                class="btn btn-primary btn-remove"
                                                data-id="${item.id}"
                                            >
                                                Xóa
                                            </button>
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
        </div>`;
}

export default Menus;
