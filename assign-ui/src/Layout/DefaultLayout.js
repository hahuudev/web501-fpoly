import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout() {
    return `<div>
        ${Header()}
        <div id="app" class="px-4 lg:px-6 py-2.5"></div>
        ${Footer()}
    </div>`;
}
