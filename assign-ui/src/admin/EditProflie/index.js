import { editInfo, getInfo } from "~/api/aboutMe";
import { router, useEffect, useState } from "~/libs";
import { ProfileValidator } from "~/utils/profile.validator";

function EditProfile() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        getInfo()
            .then((res) => setProfile(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const name = document.getElementById("name-author");
        const avatar = document.getElementById("avatar");
        const phone = document.getElementById("phone");
        const github = document.getElementById("github");
        const email = document.getElementById("email");
        const location = document.getElementById("location");
        const listImgs = document.getElementById("list-imgs");
        const skills = document.getElementById("skills");
        const description = document.getElementById("description");

        document.getElementById("form-edit-profile").onsubmit = (e) => {
            e.preventDefault();
            const profile = {
                name: name.value,
                avatar: avatar.value,
                phone: phone.value,
                github: github.value,
                email: email.value,
                location: location.value,
                listImgs: listImgs.value.split(", "),
                skills: skills.value.split(", "),
                description: description.value,
            };

            const err = ProfileValidator(profile);

            if (!err) {
                editInfo(profile).then((res) => {
                    router.navigate("/admin/profile");
                });
            }
        };
    }, [profile]);

    return `<section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Chỉnh sửa profile</h2>
                <form id="form-edit-profile">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Tên tác giả
                            </label>
                            <input
                                id="name-author"
                                type="text"
                                name="name"
                                value="${profile.name}"
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
                                value="${profile.avatar}"
                                type="text"
                            />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                            <img
                                src="${profile.avatar}"
                                class="mt-2 h-28 w-56 bg-white rounded-sm border object-cover"
                                alt=""
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Số điện thoại
                            </label>
                            <input
                                id="phone"
                                type="text"
                                value="${profile.phone}"
                                name="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Số điện thoại"
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value="${profile.email}"
                                name="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Email.."
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
                                value="${profile.github}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Link github..."
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Địa chỉ
                            </label>
                            <input
                                id="location"
                                type="text"
                                name="name"
                                value="${profile.location}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Địa chỉ"
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                List Imagse
                            </label>
                            <input
                                id="list-imgs"
                                type="text"
                                name="name"
                                value="${profile.list_imgs?.join(", ")}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder=""
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Skills (ví dụ: html, css, reactjs, ...)
                            </label>
                            <input
                                id="skills"
                                type="text"
                                name="name"
                                value="${profile.skills?.join(", ")}"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Kĩ năng.."
                            />
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Mô tả ngắn về bản thân
                            </label>
                            <textarea
                                id="description"
                                rows="8"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your description here"
                            >${profile.description}</textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-red-700 bg-green-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Edit Profile
                    </button>
                </form>
            </div>
        </section>`;
}

export default EditProfile;
