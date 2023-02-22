import { useEffect, useState } from "~/libs";

function Portal({ children, isOpen }) {
    const [wraper, setWarper] = useState(null);
    const bodyEl = document.body;

    useEffect(() => {
        bodyEl.style = null;
        const domeNode = document.createElement("div");
        if (isOpen === true) {
            bodyEl.style.overflow = "hidden";
            domeNode.innerHTML = children;
            domeNode.style.position = "fixed";
            domeNode.style.inset = "0";
            domeNode.style.zIndex = "9999";
            setWarper(domeNode);
        }
    }, [isOpen]);

    if (!isOpen && wraper) {
        document.body.removeChild(wraper);
        setWarper(null);
        return "";
    }

    if (!wraper) return "";

    document.body.appendChild(wraper);
    return "";
}

export default Portal;
