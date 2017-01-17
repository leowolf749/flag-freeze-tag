(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Steps/Rules/Objectives:
 * 
 * 1. Make a 'Player' constructor that allows you to create players.
 * 2. Make two teams, 'Runners' and 'Chasers' (arrays?), made up of the players. 
 *    Each team has certain rules and objectives...
 *      - Runners:
 *          - have a frozen property that, if true, prohibits them from tagging
 *            other runners to unfreeze them.
 *          - runners become unfrozen when tagged by another unfrozen runner.
 *          - have a flag property (true or false).
 *          - win the game when one runner picks up the flag (when flag property is true).
 * 
 *      - Chasers:
 *          - can tag runners to freeze them.
 *          - win the game when all runners are frozen.
 * 
 * 3. Make a tag function that accepts two players as arguments. Depending on which
 *    team they are on *something* will happen. 
 *      - if a chaser and a runner are matched up together the runner becomes frozen
 *          - if all runners are frozen the chasers win
 *      - if an unfrozen runner is matched with a frozen runner, the frozen runner becomes unfrozen
 *      - if two frozen runners are matched nothing happens
 *      - if two unfrozen runners are matched nothing happens
 *      - if two chasers are matched nothing happens 
 * 
 * 4. Make a getFlag function that accepts a player as an argument.
 *      - if the player is a chaser nothing happens
 *      - if the player is a runner, the runners win the game
 */

let Player = require('./player');
let Team = require('./team');

window.addEventListener('load', function () {
    console.log('ready');
});


let a = new Player('Ed');
let b = new Player('Greg');
let c = new Player('Gred');
let d = new Player('Dreg');
let e = new Player('Gerg');

/*  Adding players to the two teams,
    Runners and Chasers. */

let run = new Team('Runners');
let chase = new Team('Chasers');

run.addRunner(a);
run.addRunner(b);
chase.addChaser(c);
chase.addChaser(d);
chase.addChaser(e);

/* Logging gameplay */

console.log(e.tag(a));
console.log(e.tag(b));
console.log(a.tag(b));




},{"./player":2,"./team":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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



},{}]},{},[1]);
