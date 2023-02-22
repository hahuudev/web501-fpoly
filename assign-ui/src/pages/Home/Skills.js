function Skills({ avatar, name,id }) {
    return (
        `<a href="/projects?category=${name.toLowerCase()}&category_id=${id}" class="flex flex-col justify-center items-center">
            <div class="w-36 h-36 overflow-hidden ">
                <img src="${avatar}" alt="" class="ease-linear transition-transform duration-200 w-full h-full object-cover rounded-md hover:scale-[1.1]"/>
            </div>

            <div class="text-white text-md mt-2">${name}</div>
        </a>`
    );
}

export default Skills;
