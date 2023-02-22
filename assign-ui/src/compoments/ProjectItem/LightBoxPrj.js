import { useEffect, useState } from "~/libs";
import Swiper from "swiper/bundle";

function LightBoxPrj({ listImgs, setOpenLightBox }) {
    useEffect(() => {
        if (document.getElementById("btn-close-lightbox")) {
            document.getElementById("btn-close-lightbox").onclick = () => {
                setOpenLightBox(false);
            };
        }
    });

    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
            // Thêm tùy chọn
            direction: "horizontal", // hoặc "vertical"
            loop: true, // Vòng lặp vô hạn
            slidesPerView: 1, // Hiển thị 1 slide trên màn hình
            autoplay: {
                delay: 5000, // Tự động chuyển slide sau 5 giây
            },

            // Thêm navigation
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // Thêm pagination
            pagination: {
                // el: ".swiper-pagination",
                // clickable: true,
            },

            // Thêm effect
            effect: "slide", // hoặc "fade", "cube", "coverflow" ...
            speed: 700, // Tốc độ chuyển slide (ms)
        });
    });

    return `<div
            id="lightbox-prj"
            tabindex="-1"
            class="flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
            <div class="relative w-full h-full max-w-4xl md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">List Images</h3>
                        <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                           id="btn-close-lightbox"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div class="p-6 space-y-6">
                        <div class="swiper-container overflow-hidden">
                            <div class="swiper-wrapper">
                                ${listImgs
                                    ?.map(
                                        (img, index) =>
                                            `<div class="swiper-slide max-h-[40vh]" data-index="${
                                                index + 1
                                            }"><img src="${img}" class="w-full" alt=""></div>`
                                    )
                                    .join("")}
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                    <div class="relative flex items-center py-12 px-4 space-x-2 z-[-10]"></div>
                </div>
            </div>
        </div>`;
}

export default LightBoxPrj;
