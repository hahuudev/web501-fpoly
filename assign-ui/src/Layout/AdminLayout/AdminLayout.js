import SideBar from "./SideBar";

export default function AdminLayout() {
    return `<div>
        ${SideBar()}
        <div id="app" class="relative ml-[260px] right-0"></div>
    </div>`;
}
