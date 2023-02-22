import { getProjectById } from "~/api/projects";
import ProjectItem from "~/compoments/ProjectItem";
import { useEffect, useState } from "~/libs";

export default function ProjectDetail({ id }) {
    const [project, setProject] = useState({});
    useEffect(() => {
        getProjectById({ id }).then((res) => setProject(res.data));
    }, []);

    console.log(project);

    return `<div class="max-w-[1024px] mx-auto">
        <h1 class="my-10 text-white text-2xl">Project Detail</h1>
    ${ProjectItem(project)}</div>`;
}
