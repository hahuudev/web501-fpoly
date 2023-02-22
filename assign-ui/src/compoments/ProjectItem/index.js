import { useEffect, useState } from "~/libs";
import Portal from "../Portal";
import FeedBack from "./FeedBack";
import LightBoxPrj from "./LightBoxPrj";

function ProjectItem({
    id,
    index,
    name,
    avatar,
    description,
    tags,
    github,
    preview,
    listImgs: imgs,
    feedbacks,
    categories,
    workTime
}) {
    const [openLightBox, setOpenLightBox] = useState(false);
    const [openFeedBack, setFeedBack] = useState(false);
    const [indexId, setIndexId] = useState(null);
    const [listImgs, setListImgs] = useState(null);

    useEffect(() => {
        document.querySelectorAll("#btn-lightbox").forEach((btn, index) => {
            btn.onclick = () => {
                setListImgs(btn.dataset.imgs.split(","));
                setOpenLightBox(true);
            };
        });

        document.querySelectorAll("#btn-open-feedback").forEach((btn, index) => {
            btn.onclick = () => {
                setIndexId(btn.dataset.idPrj);
                setFeedBack(true);
            };
        });
    });
    return `<section class="relative mb-28 ">
            <div class="flex ${index % 2 == 0 ? "reverse-prj" : null}">
                <a class="flex-1 bg-[#64ffda] avt-prj" href="${preview}" target="_blank">
                    <img src="${avatar}" alt="" class="w-full avt-prj-img mix-blend-multiply object-cover rounded-sm" />
                </a>

                <div class="prj-info w-[420px] flex flex-col items-end">
                    <h3>
                        <a href="/projects/${id}" class="text-2xl font-bold text-main-about hover:opacity-90">
                            ${name}
                        </a>
                    </h3>

                    <div class="my-3 text-red-500">
                        Category: <span class="text-cyan-400">${categories?.name}</span>
                    </div>

                    <div class="prj-descr absolute right-0 py-4 px-6 bg-[#112240] top-[50%] left-[40%] translate-y-[-50%] rounded-md">
                        <p class="prj-desc text-[#8892b0] text-sm font-semibold text-right">${description}</p>
                    </div>

                    <p class="text-white text-md">
                        Thời gian hoàn thành: <span>${workTime}</span>
                    </p>

                    <div class="h-[132px]"></div>

                    <ul id="tags" class="flex mt-2">
                    ${tags?.map(
                        (tag) => `
                        <li class="ml-4">
                            <a href="" class="px-4 pb-1 rounded-md bg-red-300 text-desc-about">
                                ${tag}
                                </a>
                                </li>`
                    )}
                    </ul>

                    <div class="w-[94%] mt-4 flex justify-between text-white">
                        <div
                            data-tooltip-target="tooltip-prj-images"
                            id="btn-lightbox"
                            data-imgs = "${imgs}"
                            class="cursor-pointer text-2xl hover:opacity-80"
                        >
                            <i class="bx bx-image"></i>
                        </div>
                        ${Portal({ isOpen: openLightBox, children: LightBoxPrj({ listImgs, setOpenLightBox }) })}
                        
                        <div
                            id="tooltip-prj-images"
                            role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                            Xem thêm ảnh dự án
                        </div>
                        <div class="flex justify-end">
                            <a href="${preview}" class="text-2xl hover:opacity-80 ">
                                <i class="bx bxs-color"></i>
                            </a>
                            <a href="${github}" class="mx-6 text-2xl hover:opacity-80">
                                <i class="bx bxl-github"></i>
                            </a>
                            <div
                                data-tooltip-target="tooltip-feedback"
                                id="btn-open-feedback"
                                data-id-prj= "${id}"
                                class="cursor-pointer text-2xl hover:opacity-80"
                            >
                                <i class="bx bx-message-square"></i>
                            </div>
                            <div
                                id="tooltip-feedback"
                                role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                            >
                                Feedback
                            </div>
                            ${Portal({
                                isOpen: openFeedBack,
                                children: FeedBack({ id, indexId, setFeedBack, feedbacks }),
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
}

export default ProjectItem;
