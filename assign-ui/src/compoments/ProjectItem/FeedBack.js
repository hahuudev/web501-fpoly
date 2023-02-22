import { getProjectById } from "~/api/projects";
import { useEffect, useState } from "~/libs";

function FeedBack({ indexId, setFeedBack }) {
    const [feedbacks, setFeedBacks] = useState(null);
    useEffect(() => {
        if (document.getElementById("btn-close-feedback")) {
            document.getElementById("btn-close-feedback").onclick = () => {
                setFeedBack(false);
            };
        }
    });

    useEffect(() => {
        console.log("first");
        getProjectById({ id: indexId }).then((res) => console.log(res.data));
    }, []);

    useEffect(() => {
        const email = document.getElementById("email-feedback");
        const content = document.getElementById("content-feedback");
        if (document.getElementById("form-feedback")) {
            document.getElementById("form-feedback").onsubmit = (e) => {
                e.preventDefault();
                const feedback = {
                    id: indexId,
                    email: email.value,
                    content: content.value,
                };
                console.log("id", feedbacks);
                // updateField(feedback).then((res) => console.log(res));
            };
        }
    });
    return `<div
            id="feedback-prj"
            class="flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
            <div class="relative w-full h-full max-w-4xl md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Cảm ơn bạn để lại đánh giá để tôi phát triển thêm</h3>
                        <button
                            type="button"
                            id="btn-close-feedback"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                        <form id="form-feedback">
                            <label
                                for="email-address-icon"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your Email
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="email-feedback"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@hahuudev.com"
                                />
                            </div>

                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your message
                            </label>
                            <textarea
                                id="content-feedback"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Leave a comment..."
                            ></textarea>

                            <button class="block mt-8 rounded-sm px-6 py-1 border border-red-500 text-blue-600">Gửi feedback</button>
                        </form>
                    </div>

                    <div class="relative flex items-center py-12 px-4 space-x-2 z-[-10]"></div>
                </div>
            </div>
        </div>`;
}

export default FeedBack;
