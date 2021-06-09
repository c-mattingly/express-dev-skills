const Skill = require("../models/skill");

module.exports = {
    index,
    show
}

function index(req, res) {
    const skillsList = Skill.getAll();

    res.render("skills/index", {
        skills: skillsList
    })
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render("skills/show", {
        skill: skill
    })
}