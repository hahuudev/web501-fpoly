// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Login from "~/pages/Login";
import EditProject from "./src/admin/EditProject";
import AdminProjects from "./src/admin/projects";
import NotFound from "./src/compoments/NotFound";
import { render, router } from "./src/libs";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Home from "./src/pages/Home/Home";
import PostDetail from "./src/pages/PostDetail";
import Posts from "./src/pages/Posts";
import ProjectDetail from "./src/pages/ProjectDetail";
import Projects from "./src/pages/Projects";
import AddProject from "~/admin/AddProject";

// Admin
router.on("/admin/projects", () => render(AdminProjects, { layout: "AdminLayout" }));
router.on("/admin/projects/add", () => render(AddProject, { layout: "AdminLayout" }));
router.on("/admin/projects/edit/:id", (params) =>
    render(() => EditProject({ id: params.data.id }), { layout: "AdminLayout" })
);

// Router
router.on("/", () => render(Home, { layout: "DefaultLayout" }));
router.on("/posts/:slug", () => render(PostDetail, { layout: "DefaultLayout" }));
router.on("/posts", () => render(Posts, { layout: "DefaultLayout" }));
router.on("/about", () => render(About, { layout: "DefaultLayout" }));
router.on("/contact", () => render(Contact, { layout: "DefaultLayout" }));
router.on("/projects/:id", (params) => render(() => ProjectDetail({ id: params.data.id })), {
    layout: "DefaultLayout",
});
router.on("/projects", () => render(Projects, { layout: "DefaultLayout" }));
router.on("/login", () => render(Login, { layout: null }));
router.notFound(() => render(NotFound, { layout: "DefaultLayout" }));

router.resolve();
// }
