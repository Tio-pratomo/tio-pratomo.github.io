import { softwareSkills } from './software-skill-detail';

const listSoftwareSkills = softwareSkills.map(
    ({ name, description, icon }) => /* html */ `
    <div class="skill-mastered__detail">
        <div class="card" data-aos="fade-right">
            <div class="card__image">
                ${icon}
            </div>
            <div class="card__title">
                <h3 class="title">${name}</h3>
            </div>
            <div class="card__body">    
                <p class="text">${description}</p>
            </div>
        </div>
    </div>
`
);

export { listSoftwareSkills };
