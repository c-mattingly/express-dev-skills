const skills = [
    {id: 118674, skill: "Git version control"},
    {id: 120587, skill: "Vanilla JavaScript Proficient"},
    {id: 208569, skill: "MERN Stack Proficient"}
];
module.exports = {
    getAll,
    getOne
};
function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}