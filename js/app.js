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

let playerList = [
    new Player('Ed'),
    new Player('Greg'),
    new Player('Gred'),
    new Player('Dreg'),
    new Player('Gerg'),
];
// console.log(playerList);

let team = new Team;

team.addRunner(playerList[0]);
team.addRunner(playerList[1]);
team.addChaser(playerList[2]);
team.addChaser(playerList[3]);
team.addChaser(playerList[4]);

console.log(playerList[2].tag(playerList[0]));
