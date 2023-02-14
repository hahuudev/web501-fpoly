import Footer from "./Footer";
import Header from "./header";

export default function DefaultLayout() {
    return `<div>
        ${Header()}
        <div id="app"></div>
        ${Footer()}
    </div>`;
}
