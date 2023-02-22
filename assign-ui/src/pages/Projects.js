import { getFullProjects } from "~/api/projects";
import ProjectItem from "~/compoments/ProjectItem";
import { router, useEffect, useState } from "~/libs";

function Projects() {
    let url = new URL(location.href);
    let searchParams = new URLSearchParams(url.search);

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getFullProjects({ category_id: searchParams.get("category_id") })
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err));
    }, [searchParams.get("category")]);

    if (projects.length === 0)
        return `<div class="max-w-[1024px] mx-auto min-h-[600px]">
            <h2 class="text-white text-2xl font-bold my-6">${
                searchParams.get("category") ? searchParams.get("category").toUpperCase() : "ALL Projects"
            }</h2>

            <p class="my-14 text-xl text-white">
            Chưa có dự án nào
            </p>
            </div>`;

    return `<div class="max-w-[1024px] mx-auto min-h-[600px]">
            <h2 class="text-white text-2xl font-bold my-6">${
                searchParams.get("category") ? searchParams.get("category").toUpperCase() : "ALL Projects"
            }</h2>

            <div id="project-list" class="mt-10">
                ${projects.map((project, index) => ProjectItem({ index, ...project })).join("")}
            </div>
        </div>`;
}

export default Projects;
