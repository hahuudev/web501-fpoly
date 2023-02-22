import { getInfo } from "~/api/aboutMe";
import { getFullCategoryPrjs } from "~/api/categoryPrj";
import { getFullProjects } from "~/api/projects";
import ProjectItem from "~/compoments/ProjectItem";
import { useEffect, useState } from "~/libs";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [profile, setProfile] = useState({});
    const [categories, setCategories] = useState([]);

    console.log(projects)

    useEffect(() => {
        getFullCategoryPrjs().then((res) => setCategories(res.data));
    }, []);

    useEffect(() => {
        getFullProjects({})
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err));

        getInfo()
            .then((res) => setProfile(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // Duyệt qua các entry trong mảng entries
            entries.forEach((entry) => {
                console.log(entry);
            });
        });
    });

    return `<div class="max-w-[1024px] mx-auto">
        ${AboutMe(profile)}

        <div class="mt-28">
            <h4 class="text-xl text-white font-bold">
                <span class="text-green-500 mr-2">02. </span> Những công nghệ mà tôi đã sử dụng cho dự án của mình
            </h4>

            <div class="mt-8 grid grid-cols-4 gap-4">
                ${categories.map((categorie) => `${Skills(categorie)}`).join("")}
            </div>
        </div>

        <div class="mt-28">
            <h4 class="text-xl text-white font-bold">
                <span class="text-green-500 mr-2">03. </span> Những dự án tôi đã tham gia
            </h4>

            <div class="mt-8">
                ${projects.map((project, index) => ProjectItem({ index, ...project })).join("")}
            </div>
        </div>
    
    </div>`;
}
