import { generateSlug } from "~/utils";

function PostItem({ title, description, avatar, id }) {
    console.log(generateSlug(title));
    return `<div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
            <div class="flex">
                <div class=" flex-1 mr-6">
                    <div class="flex justify-between items-center">
                        <span class="font-light text-gray-600">.</span>
                    </div>
                    <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="/blog/${id}">
                        <h1>${title}</h1>
                    </a>
                    <p class="min-h-[80px] prj-desc mt-2 text-gray-600">
                        ${description}
                    </p>
                    <div class="flex justify-between items-center mt-4">
                        <a class="flex items-center" href="/blog/${id}">
                            <img
                                class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                                src="${avatar}"
                                alt="avatar"
                            />
                            <h2 class="text-gray-700 font-bold">"Hà Hữu"</h2>
                        </a>
                    </div>
                </div>

                <a href="/blog/${id}" class="w-[200px] h-[200px]">
                    <img
                        src="${avatar}"
                        alt=""
                        class="w-full h-full rounded-md"
                    />
                </a>
            </div>
        </div>`;
}

export default PostItem;
