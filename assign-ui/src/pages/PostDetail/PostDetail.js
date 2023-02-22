import { getPostByCategoryId, getPostById } from "~/api/postApi";
import { useEffect, useState } from "~/libs";
import { generateSlug } from "~/utils";

export default function PostDetail({ id }) {
    // const id = slug.slice(slug.indexOf("&id=") + 4);
    const [post, setPost] = useState({});
    const [relatePosts, setRelatePosts] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            const postResult = await getPostById({ id });
            setPost(postResult.data);
            const relatePosts = await getPostByCategoryId({ category_id: postResult.data?.categories_postId });

            setRelatePosts(relatePosts?.data.filter((post) => post.id !== +id));
        };

        callApi();
    }, []);

    return `<div class="pt-12 max-w-5xl mx-auto grid grid-cols-[300px_1fr] gap-6">
            <div class="bg-[#344c6c] rounded-lg sticky top-6">
                <div class="p-2 flex items-center justify-center">
                    <img src="https://picsum.photos/400/400" alt="" class="w-12 h-12 rounded-full" />
                    <h2 class="ml-4 text-white text-xl font-medium">Nguyễn Hà Hữu</h2>
                </div>

                <hr class="my-4" />

                <section class="">
                    <h3 class="my-5 text-center text-[#d0ff39] text-2xl font-bold">Related posts</h3>

                    <section class="space-y-4 px-4 ">
                        ${relatePosts?.map(
                            (relatePost) => `<section class="flex ">
                                <a href="/blog/${generateSlug(
                                    relatePost?.title
                                )}&id=${id}" class="w-[50px] flex items-center">
                                <img src="${relatePost?.avatar}" alt="" class="w-[50px] h-[50px] rounded-full"/>
                                </a>
                                <div class="ml-3 flex-1">
                            
                                <h3 class="  text-sm"><a href="" class="text-sm text-white hover:text-red-300">${
                                    relatePost?.title
                                }</a></h3>
                                <span class="text-gray-300 mt-2 text-xs">2 ngày trước</span>
                                </div>
                            </section>`
                        )}
                        
                    </section>
                </section>
            </div>

            <div class=" bg-gray-50">
                <div class=" px-10 py-6 mx-auto">
                    <div class="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
                        <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                            <img
                                class="object-cover w-full shadow-sm h-full"
                                src="${post?.avatar}"
                            />
                        </a>

                        <div class="flex items-center justify-start mt-4 mb-4">
                            <a
                                href="#"
                                class="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
                            >
                                Django
                            </a>
                        </div>

                        <div class="mt-2">
                            <a
                                href="#"
                                class="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline"
                            >
                            ${post?.title}
                            </a>

                            

                            <div class="font-light text-gray-600">
                                <a href="#" class="flex items-center mt-6 mb-6">
                                    <img
                                        src="${post?.avatar}"
                                        alt="avatar"
                                        class="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                                    />
                                    <h4 class="font-bold text-gray-700 hover:underline">Nguyễn Hà Hữu</h4>
                                </a>
                            </div>
                        </div>

                        <div class="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                            <div>
                                <p class="mt-2 p-8">
                                ${post?.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}
