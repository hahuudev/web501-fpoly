import { deletePost, getFullPosts } from "~/api/postApi";
import { useEffect, useState } from "~/libs";

function PostsAdmin() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getFullPosts({})
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                deletePost({ id })
                    .then(() => {
                        const newposts = posts.filter((project) => project.id != id);
                        setPosts(newposts);
                    })
                    .catch((err) => console.log(err));
            });
        }
    }, [posts]);

    return /*html*/ `<div>
            <a class="my-4 block" href="/admin/posts/add">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Thêm bài post
                </button>
            </a>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="w-full mb-12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-lg text-blueGray-700">All posts</h3>
                                </div>
                            </div>
                        </div>
                        <div class="block w-full overflow-x-auto">
                            <table class="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Avatar
                                        </th>

                                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Description
                                        </th>
                                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Content
                                        </th>
                                        <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Options
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${posts
                                        ?.map(
                                            (post, index) => `
                                  <tr class="">
                                      <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      ${index + 1}
                                      </td>

                                      <td class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left h-full flex items-center">
                                          <img
                                              src="${post.avatar}"
                                              class="h-14 w-14 bg-white rounded-sm border"
                                              alt="${post.title}"
                                          />
                                          <span class="ml-3 font-bold text-blueGray-600">${post.title}</span>
                                      </td>

                                      

                                      <td style="display: revert" class="border-t-0 px-2 border-l-0 border-r-0 text-xs max-w-[300px]">
                                          <p class=" prj-desc">${post.description}</p>
                                      </td>

                                   
                                      <td style="display: revert"  class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs max-w-[300px] ">
                                        <p class="prj-desc">${post.content}</p>
                                      </td>
                                     

                                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                          
                                          <div
                                              class="flex bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                              id="table-light-1-dropdown"
                                          >
                                              <a
                                                  href="/admin/posts/edit/${post.id}"
                                                  class="text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                              >
                                                  Sửa
                                              </a>
                                              <div
                                                  class="text-sm mx-4 py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                              >
                                                  <button class="btn btn-primary btn-remove" data-id="${
                                                      post.id
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

export default PostsAdmin;
