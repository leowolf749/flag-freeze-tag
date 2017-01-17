module.exports = 
function Team(team) {
    let runners = [];
    let chasers = [];
    let players = {
        addRunner: function (name) {
            runners.push(name);
            return name.team = 'Runners'  
        },
        addChaser: function (name) {
            chasers.push(name);
            return name.team = 'Chasers'
        },
        announce: function () {
            for (let i = 0; i < runners.length; i++) {
                console.log(runners[i] + ' is a runner.');
            }
            for (let i = 0; i < chasers.length; i++) {
                console.log(chasers[i] + ' is a chaser.');
            }
        }
        
    };
    console.log(runners);
    console.log(chasers);
    return players;

};


