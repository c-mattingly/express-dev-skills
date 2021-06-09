const skills = [
    {id: 118674, skill: "Git version control"},
    {id: 120587, skill: "Vanilla JavaScript Proficient"},
    {id: 208569, skill: "MERN Stack Proficient"}
];
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}
function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}