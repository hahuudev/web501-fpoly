import { getProjectById } from "~/api/projects";
import { useEffect, useState } from "~/libs";

function FeedBack({ id }) {
    const [project, setProject] = useState({});
    useEffect(() => {
        getProjectById({ id }).then((res) => {
            setProject(res.data);
        });
    }, []);

    return `<div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nội dung
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    ${project.feedbacks?.map(
                        (feedback, index) => `
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4">${index+1}</td>
                            <td class="px-6 py-4">${feedback.email}</td>
                            <td class="px-6 py-4">${feedback.content}</td>
                        </tr>`
                    ).join('')}
                       
                    </tbody>
                </table>
            </div>
        </div>`;
}

export default FeedBack;
