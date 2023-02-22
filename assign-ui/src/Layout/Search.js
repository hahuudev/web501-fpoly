
function Search() {
    return (
        `<div>
            <div class="relative z-10 mr-4 cursor-pointer">
                <div
                    id="open-search"
                    type="button"
                    data-modal-toggle="defaultModal"
                    class="inline-block no-underline opacity-80 hover:opacity-100"
                    href="#"
                >
                    <svg
                        class="fill-current pointer-events-none text-grey-darkest w-5 h-5 inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </div>

            <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed hidden top-10 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto  h-modal md:h-full"
                style="align-items: flex-start !important;"
            >
                <div class="relative w-full h-full max-w-2xl md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <form id="form-search" >
                            <div class="relative px-4 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                <div class="mt-2 grid place-items-center h-full w-12 text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    id="search-value"
                                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-none"
                                    type="text"
                                    autocomplete="off"
                                    placeholder="Tìm kiếm sản phẩm . . ."
                                    name="q"
                                />
                                <button
                                    id="remove-search"
                                    class="mr-4 btn hover:shadow-lg transition duration-150 ease-in-out flex items-center"
                                    type="button"
                                >
                                    X
                                </button>
                                <button
                                    type="submit"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        <div class="pt-4 pb-6 px-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <div role="status" class="flex ">
                                <div class="">
                                    <svg
                                        id="loading"
                                        class="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                                        viewBox="0 0 100 101"
                                        fill="red"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>

                                    <svg
                                        id="loaded"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>

                                <span class="ml-4">
                                    Tìm kiếm sản phẩm: <span id="search" class=""></span>
                                </span>
                            </div>
                            <div id="results" class="mt-3 " style="max-height: 400px; overflow-y: auto;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
}

export default Search;
