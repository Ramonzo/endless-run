//
//To game
//
let difficulty = ['easy', 'medium', 'hard'];
let isDebug = true;
let canvas;
let game;
let player;
let enemies = [];
let scenaries;

let stateGroup = [
                    'menu', 
                    'play', 
                    'pause', 
                    'gameover'
                ];
let state = stateGroup[0];
//
//To game assets
//
let spriteFormat = '.png';
let soundFormat = 'wav';
let spritePersonaPath = 'assets/sprites/persona/';
let spriteScenaryPath = 'assets/sprites/nature/';
let soundPath = 'assets/sounds/';

let playerSpritePrefix = 'player_';
let playerSpriteNames = [
                            'default'
                        ];
let skinParameters = {
                        'default':{
                                    'walk':{
                                        'w':76, 
                                        'h':78,
                                        'positionX': 38,
                                        'positionY': 124,
                                        'spriteW': 38,
                                        'spriteH': 39,
                                        'frames': 8
                                    },
                                    'jump':{
                                        'w':76, 
                                        'h':78,
                                        'positionX': 0,
                                        'positionY': 244,
                                        'spriteW': 38,
                                        'spriteH': 39,
                                        'frames': 1
                                    },
                                    'falling':{
                                        'w':76, 
                                        'h':78,
                                        'positionX': 39,
                                        'positionY': 244,
                                        'spriteW': 38,
                                        'spriteH': 48,
                                        'frames': 1
                                    }
                                }
                    }
let playerSpriteFiles = [];

let enemySpritePrefix = 'enemy_';
let enemySpriteNames = [
                        'bat_1',
                        'bug_1',
                        'bug_2',
                        'frog_1',
                        'frog_2',
                        'human_1',
                        'human_2',
                        'human_3',
                        'human_4',
                        'rock_1',
                        'slime_1',
                        'slime_2',
                        'spider_1',
                        'turtle_1',
                        'wolf_1'
                    ];
let enemySpriteFiles = [];

let scenarySpritePrefix = 'nature_';
let scenarySpriteNames = ['sky', 'forest', 'bushes_1'];
let scenarySpriteFiles = []

let soundEffectPath = 'effects/';
let soundEffectNames = ['cancel','confirm','jump','death','hundred_points','bad_powerup','good_powerup'];
let soundEffectFiles = [];
let soundTrackPath = 'tracks/';
let soundTrackNames = [
                        'menu_sound_track', 
                        'gameplay_sound_track', 
                        'gameover_sound_track'
                    ];
let soundTrackFiles = [];