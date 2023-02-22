import Portal from "~/compoments/Portal";
import { useEffect, useState } from "~/libs";

function Slider() {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        document.getElementById("btn-1").onclick = () => {
            setOpenModal(!openModal);
        };

        if (document.getElementById("btn-close")) {
            document.getElementById("btn-close").onclick = () => {
                setOpenModal(false);
            };
        }
    });
    return `
    <button id="btn-1">open</button>
    <div>${Portal({ isOpen: openModal, children: `<h2 id="btn-close">close</h2>` })}</div>`;
}

export default Slider;
