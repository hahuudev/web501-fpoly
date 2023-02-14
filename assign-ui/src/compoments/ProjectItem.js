function ProjectItem({project}) {
    return `<section>
    <a href="/projects/${project.id}" className="">${project.name}</a>
</section>`;
}

export default ProjectItem;
