// import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./style.css";
import "flowbite/dist/flowbite.min.js";

import "swiper/swiper-bundle.css";
import "toastr/build/toastr.css";

import Login from "~/pages/Login";
import EditProject from "./src/admin/EditProject";
import AdminProjects from "./src/admin/projects";
import NotFound from "./src/compoments/NotFound";
import { render, router } from "./src/libs";
import About from "./src/pages/About";
import Home from "./src/pages/Home/Home";
import PostDetail from "./src/pages/PostDetail/PostDetail";
import Posts from "./src/pages/Posts/Posts";
import ProjectDetail from "./src/pages/ProjectDetail";
import Projects from "./src/pages/Projects";
import AddProject from "~/admin/AddProject";
import Menus from "~/admin/Menus";
import ProfileAdmin from "~/admin/Profile";
import EditProfile from "~/admin/EditProflie";
import FeedBack from "~/admin/FeedBack";
import Register from "~/pages/Register";
import Category from "~/admin/Category";
import AddCategory from "~/admin/AddCategory";
import EditCategory from "~/admin/EditCategory";
import PostsAdmin from "~/admin/Posts";
import AddPost from "~/admin/AddPost";
import EditPost from "~/admin/EditPost";
import CategoryPost from "~/admin/CategoryPost";
import AddCategoryPost from "~/admin/AddCategoryPost";
import EditCategoryPost from "~/admin/EditCategoryPost";

// Admin

router.on("/admin/posts", () => render(PostsAdmin, { layout: "AdminLayout" }));
router.on("/admin/posts/add", () => render(AddPost, { layout: "AdminLayout" }));
router.on("/admin/posts/edit/:id", (params) =>
    render(() => EditPost({ id: params.data.id }), { layout: "AdminLayout" })
);
router.on("/admin/profile", () => render(ProfileAdmin, { layout: "AdminLayout" }));
router.on("/admin/profile", () => render(ProfileAdmin, { layout: "AdminLayout" }));
router.on("/admin/categories", () => render(Category, { layout: "AdminLayout" }));
router.on("/admin/category/add", () => render(AddCategory, { layout: "AdminLayout" }));
router.on("/admin/categories/edit/:id", (params) =>
    render(() => EditCategory({ id: params.data.id }), { layout: "AdminLayout" })
);
router.on("/admin/categories-post", () => render(CategoryPost, { layout: "AdminLayout" }));
router.on("/admin/categories-post/add", () => render(AddCategoryPost, { layout: "AdminLayout" }));
router.on("/admin/categories-post/edit/:id", (params) =>
    render(() => EditCategoryPost({ id: params.data.id }), { layout: "AdminLayout" })
);
router.on("/admin/edit-profile", () => render(EditProfile, { layout: "AdminLayout" }));
router.on("/admin/projects/:id/feedback", (params) =>
    render(() => FeedBack({ id: params.data.id }), { layout: "AdminLayout" })
);
router.on("/admin/projects", () => render(AdminProjects, { layout: "AdminLayout" }));
router.on("/admin/menus", () => render(Menus, { layout: "AdminLayout" }));
router.on("/admin/projects/add", () => render(AddProject, { layout: "AdminLayout" }));
router.on("/admin/projects/edit/:id", (params) =>
    render(() => EditProject({ id: params.data.id }), { layout: "AdminLayout" })
);

// Router
router.on("/", () => render(Home, { layout: "DefaultLayout" }));
router.on("/blog/:slug", (params) => render(() => PostDetail({ id: params.data.slug }), { layout: "DefaultLayout" }));
router.on("/blog", () => render(Posts, { layout: "DefaultLayout" }));
router.on("/about", () => render(About, { layout: "DefaultLayout" }));
router.on("/projects/:id", (params) =>
    render(() => ProjectDetail({ id: params.data.id }), {
        layout: "DefaultLayout",
    })
);
router.on("/projects", () => render(Projects, { layout: "DefaultLayout" }));
router.on("/login", () => render(Login, { layout: null }));
router.on("/register", () => render(Register, { layout: null }));

router.notFound(() => render(NotFound, { layout: "DefaultLayout" }));

router.resolve();
// }
