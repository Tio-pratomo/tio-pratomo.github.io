import { experienceWork } from './experience-detail';

const listExperienceWork = experienceWork.map(
    ({ company, workingTime, role, introducing, task }) => /* html */ `
    <li class="point animate__animated">
        <div class="time title">${company}</div>
        <h5 class="title">${role}</h5>
        <h5 class="title">${workingTime}</h5>
        <p class="text">${introducing}</p>
        <ul class="text">
            ${task.map((tasked) => /* html */ `<li>${tasked}</li>`).join(' ')}
        </ul>
    </li>
`
);

export { listExperienceWork };
