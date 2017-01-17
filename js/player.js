module.exports = function Player(name) {
    this.name = name;
    this.team = null;
    this.isFrozen = false;

    this.tag = function (player) {
        if (this.team === 'Runners' && this.isFrozen === true) {
            return 'Frozen players cannot unfreeze other players.'
        }
        if (this.team === 'Chasers' && player.team === 'Chasers') {
            return 'Nothing happened.'
        }
        if (this.team === 'Runners' && player.isFrozen === true && player.team === 'Runners') {
            player.isFrozen = false;
            return player.name + ' was unfrozen by ' + this.name;
        } else {
            if (this.team === 'Chasers' && player.team === 'Runners') {
                player.isFrozen = true;
                return player.name + ' was frozen by ' + this.name;
            }  
        }
    }

}