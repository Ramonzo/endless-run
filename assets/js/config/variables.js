//
//To game
//
//let difficulty = ['easy', 'medium', 'hard'];
let isDebug = true;
let canvas;
let game;
let player;
let enemies = [];
let itens = [];
let scenaries;

let stateGroup = [
                    'loading',
                    'menu', 
                    'play', 
                    'pause', 
                    'gameover'
                ];
let state = stateGroup[0];
//
//To game assets
//
//Fonts
//
fontFormat = '.ttf';
fontPath = 'assets/fonts/';
fontNames = ['KronaOne-Regular'];
fontFiles = [];
//
//
//Sprite Files
//
let spriteFormat = '.png';
let spritePath = 'assets/sprites/';
let spritePersonaPath = spritePath+'persona/';
let spriteScenaryPath = spritePath+'nature/';
let spriteIconsPath = spritePath+'icons/';
//Player
let playerSpritePrefix = 'player_';
let playerSpriteNames = [
                            'default'
                        ];
let skinParameters = {
                        'player_default':{
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
                                },
                        'coin':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'fly':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'full_stamina':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'invencible_run':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'less_speed':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'more_speed':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'one_hearth_less':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'one_hearth_more':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'random':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'shild':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        },
                        'weight':{
                            'walk':{
                                'w':50, 
                                'h':50,
                                'positionX': 0,
                                'positionY': 0,
                                'spriteW': 183,
                                'spriteH': 179,
                                'frames': 1
                            }
                        }
                    }
let playerSpriteFiles = [];
//Enemies
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
//Scenary
let scenarySpritePrefix = 'nature_';
let scenarySpriteNames = [
                            'sky', 
                            'forest', 
                            'bushes_1'
                        ];
let scenarySpriteFiles = []
//Icons
let iconsSpriteNames = [
                            'coin',
                            'fly',
                            'full_stamina',
                            'invencible_run',
                            'less_speed',
                            'more_speed',
                            'one_hearth_less',
                            'one_hearth_more',
                            'random',
                            'shild',
                            'weight'
                        ];
let iconsSpiteFiles = [];
//
//Sound Files
//
let soundFormat = 'wav';
let soundPath = 'assets/sounds/';

let soundEffectPath = 'effects/';
let soundEffectNames = [
                            'cancel',
                            'confirm',
                            'jump',
                            'death',
                            'hundred_points',
                            'bad_powerup',
                            'good_powerup'
                        ];
let soundEffectFiles = [];
let soundTrackPath = 'tracks/';
let soundTrackNames = [
                        'menu_sound_track', 
                        'gameplay_sound_track', 
                        'gameover_sound_track'
                    ];
let soundTrackFiles = [];

let sounds;