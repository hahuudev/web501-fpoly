import { useEffect, router } from "~/libs";

function AboutMe({ name, phone, email, description, avatar, github, facebook, location, skills }) {
    useEffect(() => {
        const TITLE = "I'm trying to become a Front-end developer. ";
        let title = {
            count: 0,
            text: "",
            right: true,
        };
        let res1, res2;

        const res = setInterval(() => {
            if (title.count === 0) {
                title = {
                    count: 0,
                    text: "I",
                    right: true,
                };
                res1 = setTimeout(() => {
                    title = {
                        count: 1,
                        text: TITLE.slice(0, title.count - 1),
                        right: true,
                    };
                }, 600);
            }

            if (title.right === false) {
                title = {
                    count: title.count - 1,
                    text: TITLE.slice(0, title.count),
                    right: false,
                };
            }

            if (title.right === true && title.count !== 0) {
                title = {
                    count: title.count + 1,
                    text: TITLE.slice(0, title.count),
                    right: true,
                };
            }

            if (title.count === TITLE.length) {
                res2 = setTimeout(() => {
                    title = {
                        count: title.count - 1,
                        text: TITLE.slice(0, title.count),
                        right: false,
                    };
                }, 1500);
            }

            if (document.getElementById("lazy-info")) {
                document.getElementById("lazy-info").innerHTML = title.text;
            }
        }, 200);

        router.hooks({
            before(done, match) {
                clearInterval(res);
                clearTimeout(res1);
                clearTimeout(res2);
                // do something
                done();
            },
        });
    }, []);

    return `<div class="mt-4 ">
            <div class="">
                <span class="text-xl text-green-500">Hello, My name is:</span>
                <h1 class="my-6 text-4xl font-bold text-red-500">Nguyễn Hà Hữu</h1>
                <p  class="text-2xl text-white">
                    <span id="lazy-info"></span>
                    <span class="lazy-info">|</span>
                </p>

                <div class="mt-6">
                    <a href="https://www.topcv.vn/xem-cv/BwwHUgZVDwBeUwFQCwcABFhUVlcFDVRTBFFSBQ5eaf" target="_blank" class="inline-block mt-4">
                        <button class="block px-6 py-2 border border-red-600 rounded-sm text-yellow-400">
                            See my CV
                        </button>
                    </a>
                    <a href="https://hahuudev.online/about-me" target="_blank" class="inline-block mt-4 ml-4">
                        <button class="block px-6 py-2 border border-red-600 rounded-sm text-yellow-400">
                            Xem thêm về tôi
                        </button>
                    </a>
                </div>
            </div>

            <div class="mt-28">
                <h4 class="text-xl font-bold text-white">
                    <span class="text-green-500 mr-2">01. </span> About me
                </h4>

                <div class="mt-4 grid grid-cols-2 gap-6">
                    <div class="">
                        <p class="text-gray-50">${description}</p>

                        <h3 class="my-4 text-red-500 text-xl font-semibold">* Thông tin cơ bản</h3>
                        <ul class="grid grid-cols-2 gap-5">
                            <li class="text-gray-500">Họ tên: <span class="text-green-500">${name}</span></li>
                            <li class="text-gray-500">Số điện thoại: <a href="tel:${phone}" class="text-green-500">${phone}</a></li>
                            <li class="text-gray-500">Email: <a href="mail:${email}" class="text-green-500">${email}</a></li>
                            <li class="text-gray-500">Github: <a href="${github}" target="_blank" class="text-green-500">Github</a></li>
                            <li class="text-gray-500">Địa chỉ: <span class="text-green-500">${location}</span></li>
                            <li class="text-gray-500">Facebook: <a href="${facebook}" target="_blank class="text-green-500">Facebook</a></li>
                        </ul>

                        <h3 class="my-4 text-red-500 text-xl font-semibold">* Các kĩ năng</h3>
                        <ul class="grid grid-cols-4 gap-4">
                            ${skills?.map((skill) => `<span class="text-green-500">-> ${skill}</span>`).join("")}
                        </ul>
                    </div>
                    <div class="rounded-lg flex justify-end">
                        <img class="rounded-lg w-[350px] h-[350px]" src="${avatar}" alt="" />
                    </div>
                </div>
            </div>
        </div>`;
}

export default AboutMe;
