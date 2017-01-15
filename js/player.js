module.exports = function Player(name) {
    this.name = name;
    this.isFrozen = false;
    this.team = null;

    this.tag = function (player) {
        if (player.team === 'Runners') {
        return player.isFrozen = true
        } 
    };
}