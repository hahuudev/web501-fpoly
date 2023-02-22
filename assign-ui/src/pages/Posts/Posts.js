import { getFullPosts } from "~/api/postApi";
import PostItem from "~/compoments/PostItem";
import { useEffect, useState } from "~/libs";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getFullPosts().then((res) => setPosts(res.data));
    }, []);

    return `<div class="max-w-[1024px] mx-auto">
        ${posts?.map((post) => `${PostItem(post)}`).join("")}
    </div>`;
}
