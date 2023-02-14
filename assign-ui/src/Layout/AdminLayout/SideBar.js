function Header() {
    return (
        `<nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 pb-4 px-6">
            <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <div
                    class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
                    id="example-collapse-sidebar"
                >
                    <div class="md:min-w-full block pb-4 mb-4 border-b border-solid border-blueGray-200">
                        <div class="flex flex-wrap">
                            <div class="w-6/12">
                                <a
                                    class="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-xs uppercase mt-3"
                                    href="/"
                                >
                                    Trở về website
                                </a>
                                <a
                                    class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                    href="/admin/dashboard"
                                >
                                    DASHBOARD
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Admin Layout Pages
                    </h6>

                    <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                        <li class="items-center">
                            <a
                                href="./dashboard.html"
                                class="text-xs uppercase py-3 font-bold block text-pink-500 hover:text-pink-600"
                            >
                                <i class="fas fa-tv mr-2 text-sm opacity-75"></i>
                                Dashboard
                            </a>
                        </li>

                        <li class="items-center">
                            <a
                                href="/admin/projects"
                                class="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                            >
                                <i class="fas fa-tools mr-2 text-sm text-blueGray-300"></i>
                                Projects
                            </a>
                        </li>
                    </ul>

                    <hr class="my-4 md:min-w-full" />
                    <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Auth Layout Pages
                    </h6>

                    <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                        <li class="items-center">
                            <a
                                href="../auth/login.html"
                                class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            >
                                <i class="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
                                Login
                            </a>
                        </li>
                    </ul>

                    <hr class="my-4 md:min-w-full" />
                    <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        No Layout Pages
                    </h6>

                    <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                        <li class="items-center">
                            <a
                                href="../profile.html"
                                class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                            >
                                <i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i>
                                Profile Page
                            </a>
                        </li>
                    </ul>

                    <hr class="my-4 md:min-w-full" />
                    <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Documentation
                    </h6>
                    <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                        <li class="inline-flex">
                            <a
                                href="https://www.creative-tim.com/learning-lab/tailwind/js/colors/notus"
                                target="_blank"
                                class="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                            >
                                <i class="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                                Styles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`
    );
}

export default Header;
