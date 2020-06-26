//To controll game
let game;
let difficulty = ['easy', 'medium', 'hard'];
let isDebug = true;
let canvas;
let player;
let enemies = [];
//To control game states
let stateGroup = ['menu', 'play', 'pause', 'gameover'];
let state = stateGroup[0];
//To controll game assets
let spriteFormat = '.png';
let soundFormat = 'wav';
let spritePath = 'assets/sprites/persona/';
let soundPath = 'assets/sounds/';

let playerSpritePrefix = 'player_';
let playerSpriteNames = ['default'];
let skinParameters = {
                        'default':
                                {
                                    'spriteId':0,
                                    'w':76, 
                                    'h':78,
                                    'positionX': 0,
                                    'positionY': 124,
                                    'spriteW': 38,
                                    'spriteH': 39,
                                    'frames': 8
                                }
                    }
let playerSpriteFiles = [];

let enemySpritePrefix = 'enemy_';
let enemySpriteNames = ['bat_1','bug_1','bug_2','frog_1','frog_2','human_1','human_2','human_3','human_4','rock_1','slime_1','slime_2','spider_1','turtle_1', 'wolf_1'];
let enemySpriteFiles = [];

let soundEffectPath = 'effects/';
let soundEffectNames = [];
let soundEffectFiles = [];
let soundTrackPath = 'tracks/';
let soundTrackNames = ['menu_sound_track', 'gameplay_sound_track', 'gameover_sound_track'];
let soundTrackFiles = [];