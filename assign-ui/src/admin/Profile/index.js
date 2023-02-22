import { getInfo } from "~/api/aboutMe";
import { useEffect, useState } from "~/libs";

function ProfileAdmin() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        getInfo()
            .then((res) => setProfile(res.data))
            .catch((err) => console.log(err));
    }, []);

    return `<div class="p-4">
            <a href="/admin/edit-profile" class="">
                <button class="py-2 px-4 bg-red-500 text-white">Chỉnh sửa profile</button>
            </a>

            <div class="mt-8 grid grid-cols-[1.5fr_1fr] gap-7">
                <div className="">
                    <h3 class="my-4 text-red-500 text-xl font-semibold">* Thông tin cơ bản</h3>
                    <ul>
                        <li class="text-gray-500">
                            Họ tên: <span class="text-green-500">${profile.name}</span>
                        </li>
                        <li class="text-gray-500">
                            Số điện thoại:
                            <a href="tel:${profile.phone}" class="text-green-500">
                                ${profile.phone}
                            </a>
                        </li>
                        <li class="text-gray-500">
                            Email:
                            <a href="mail:${profile.email}" class="text-green-500">
                                ${profile.email}
                            </a>
                        </li>
                        <li class="text-gray-500">
                            Facebook:
                            <a href="${profile.email}" class="text-green-500">
                                Facebook
                            </a>
                        </li>
                        <li class="text-gray-500">
                            Địa chỉ: <span class="text-green-500">${profile.location}</span>
                        </li>
                        <li class="text-gray-500">
                            Địa chỉ: <span class="text-green-500">${profile.description}</span>
                        </li>
                    </ul>
                
                    <h3 class="my-4 text-red-500 text-xl font-semibold">* Các kĩ năng</h3>
                    <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        ${profile.skills?.map((skill) => `<span class="text-green-500">-> ${skill}</span>`).join("")}
                    </ul>
                </div>

                <div className=""><img src="${profile.avatar}" alt="" class="rounded-md"/></div>
            </div>
        </div>`;
}

export default ProfileAdmin;
