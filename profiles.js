var data = [
    {
        name: "Ghosts of the Webway",
        kind: "DetachmentProfile",
        rules: [
            {
                name: "Acrobatic Onslaught",
                description: "Each time a Harlequin model from your army makes a Charge move, it can move through the enemy models."
            },
            {
                name: "Travelling Players",
                description: "<ul><li>Troupe units in your army get Battleline keyword and get OC characteristic of 2.</li><li>You can include up to 3 of each of the following models: Troupe Master, Death Jester, Shadowseer.</li></ul>"
            }
        ],
        enhancements: [
            {
                name: "Cegorach's Coil", 
                description: "Troupe Master model only. Each time the bearer's unit makes a Charge move, select one unit within the Engagement Range of the bearer's unit, then roll one D6 for each model in the bearer's unit that in within the Engagement Range. For each 4+, that enemy unit suffers 1 mortal wound."
            },
            {
                name: "Mask of Secrets",
                description: "Shadowseer model only. Each time an enemy unit (excluding Monsters and Vehicles) within the Engagement Range of the bearer's unit Falls Back, all the models in that unit must make the Desperate Escape test. When doing so, if the enemy unit is Battle-shocked, subtract 1 from the test result."
            },
            {
                name: "Murder's Jest",
                description: "Death Jester model only. Each time the bearer makes a ranged attack that targets the unit Below Half-Strength, each successful hit becomes a Critical Hit."
            },
            {
                name: "Mistweave",
                description: "Shadowseer model only. While the bearer is leading the unit, models in that unit have Infiltrators ability."
            }
        ],
        stratagems: [
            {
                name: "Staged Death",
                color: "green",
                when: "Any phase",
                target: "One Harlequin Character model from your army that was just destroyed.",
                effect: "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within the Engagement Range of the enemy units, with half of it's full wounds remaining.",
                restrictions: "Each model can only be targeted with this Stratagem once per battle."
            },
            {
                name: "Heroes' Fall",
                color: "green",
                when: "Fight phase, just after the enemy unit has selected the targets.",
                target: "One Harlequins unit that was selected as the target of one or more attacking unit's attacks.",
                effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model hasn't fought this phase, roll a D6. On a 4+, do not remove it from play; it can fight after the attacking unit has finished making their attacks, and is then removed from play.",
                restrictions: null,
            },
            {
                name: "Mocking Flight",
                color: "blue",
                when: "Your Movement phase, just after the Harlequin unit from your army Falls Back .",
                target: "That Harlequin unit.",
                effect: "Until the end of the turn, that unit is eligible to shoot and charge in a turn in which it Fell Back.",
                restrictions: null,
            },
            {
                name: "Trickster's Retort",
                color: "red",
                when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or a Fall Back move.",
                target: "One Troupe unit from your army that is within 9\" from enemy unit.",
                effect: "Your unit can make a Normal move of up to 6\".",
                restrictions: null,
            },
            {
                name: "Bloody Dance",
                color: "red",
                when: "End of your Opponent's Charge phase",
                target: "One Harlequin Infantry or Harlequin Mounted unit from your army, that is within 6\" of the enemy units and would be eligible to charge against any of those enemy units if it were your Charge phase.",
                effect: "Your unit can declare a charge targeting one or more of those enemy units, and you resolve that charge.",
                restrictions: "Your units does not receive the Charge Bonus for this charge."
            },
            {
                name: "Exit the Stage",
                color: "red",
                when: "End of your Opponent's Fight phase",
                target: "One Harlequin unit from your army that is not within Engagement Range of any enemy units.",
                effect: "Remove your unit from the battlefield and place it into Strategic Reserves.",
                restrictions: null
            }
        ]
    },
    {
        name: "Skyweavers",
        kind: "UnitProfile",
        stats: {
            M: '14"',
            T: 4,
            Sv: '4+/4++',
            W: 3,
            Ld: '6+',
            OC: 2
        },
        rangedWeapons: [
            {
                name: "Shuriken Cannon",
                range: '24"',
                A: 3,
                BS: '3+',
                S: 6,
                AP: -1,
                D: 2,
                rules: ["LETHAL HITS"]
            },
            {
                name: "Haywire Cannon",
                range: '24"',
                A: 2,
                BS: '3+',
                S: 3,
                AP: -1,
                D: 3,
                rules: ["ANTI-VEHICLE 4+", "DEVASTATING WOUNDS"]
            },
            {
                name: "Star bolas",
                range: '12"',
                A: 'D3',
                BS: '3+',
                S: 7,
                AP: -2,
                D: 2,
                rules: []
            }
        ],
        meleeWeapons: [
            {
                name: "Close-combat weapon",
                range: "Melee",
                A: 4,
                WS: '3+',
                S: 3,
                AP: 0,
                D: 1,
                rules: []
            },
            {
                name: "Zephyrglaive",
                range: "Melee",
                A: 4,
                WS: '3+',
                S: 6,
                AP: -2,
                D: 2,
                rules: []
            }
        ],
        options: [
            "Any number of models can replace Shuriken Cannon with Haywire Cannon",
            "Any number of models can each replace Star Bolas with Zephyrglaive"
        ],
        composition: "2-4 Skyweavers with Shuriken Cannon, Star Bolas and Close-combat weapon",
        abilities: [
            "Battle Focus",
            "Disparate Paths",
            "Acrobatic Grace: Each time an attack targets this unit, subtract 1 from the Hit roll."
        ],
        keywords: [
            "Skyweavers",
            "Mounted",
            "Aeldari",
            "Fly",
            "Smoke"
        ],
        faction: "Harlequins"
    },
    {
        name: "Voidweaver",
        kind: "UnitProfile",
        stats: {
            M: "14\"",
            T: 6,
            Sv: "4+/4++",
            W: 6,
            Ld: "6+",
            OC: 2
        },
        rangedWeapons: [
            {
                name: "Prismatic Cannon (dispersed)",
                range: "24\"",
                A: "2D6",
                BS: "3+",
                S: 4,
                AP: 0,
                D: 1,
                rules: ["BLAST"]
            },
            {
                name: "Prismatic Cannon (focussed)",
                range: "24\"",
                A: 2,
                BS: "3+",
                S: 8,
                AP: -3,
                D: 4,
                rules: []
            },
            {
                name: "Shuriken Cannon",
                range: "24\"",
                A: 3,
                BS: "3+",
                S: 6,
                AP: -1,
                D: 2,
                rules: ["LETHAL HITS"]
            },
            {
                name: "Haywire Cannon",
                range: "24\"",
                A: 3,
                BS: "3+",
                S: 4,
                AP: -1,
                D: 3,
                rules: ["ANTI-VEHICLE 4+", "DEVASTATING WOUNDS"]
            }
        ],
        meleeWeapons: [
            {
                name: "Close-combat weapon",
                range: "Melee",
                A: 4,
                WS: "3+",
                S: 3,
                AP: 0,
                D: 1,
                rules: []
            }
        ],
        options: [
            "Haywire cannon can be replaced with Prismatic Cannon"
        ],
        composition: "1 Voidweaver with 2x Shuriken Cannon and 1x Haywire Cannon",
        abilities: [
            "Deadly Demise",
            "Stealth",
            "Battle Focus",
            "Disparate Paths",
            "Psychromatic Camouflage: This unit can only be the target of a ranged attack if the attacking model is within 18\"."
        ],
        keywords: [
            "Vehicle",
            "Aeldari",
            "Fly",
            "Voidweaver"
        ],
        faction: "Harlequins"
    },
    {
        name: "Starweaver",
        kind: "UnitProfile",
        stats: {
            M: "14\"",
            T: 6,
            Sv: "4+/4++",
            W: 6,
            Ld: "6+",
            OC: 2
        },
        rangedWeapons: [
            {
                name: "Shuriken Cannon",
                range: "24\"",
                A: 3,
                BS: "3+",
                S: 6,
                AP: -1,
                D: 2,
                rules: ["LETHAL HITS"]
            }
        ],
        meleeWeapons: [
            {
                name: "Close-combat weapon",
                range: "Melee",
                A: 4,
                WS: "3+",
                S: 3,
                AP: 0,
                D: 1,
                rules: []
            }
        ],
        abilities: [
            "Deadly Demise 1",
            "Transport capacity: 6 Harlequin Infantry models.",
            "Firing Deck 6",
            "Battle Focus",
            "Disparate Paths",
            "Rapid Embarkation: At the end of the Fight phase, if there are no models currently embarked in this Transport, you can select one Harlequin Infantry unit that has 6 or fewer models and is wholly within 6\" of this Transport. Unless that unit is within the Engagement Range of enemy models, it can embark within this Transport."
        ],
        composition: "1 Starweaver with 2x Shuriken Cannon and Close-combat weapon",
        keywords: [
            "Vehicle",
            "Aeldari",
            "Transport",
            "Dedicated Transport",
            "Smoke",
            "Fly",
            "Starweaver"
        ],
        faction: "Harlequins"
    },
    {
        name: "Troupe Master",
        kind: "UnitProfile",
        stats: {
            M: "8\"",
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1
        },
        rangedWeapons: [
            {
                name: "Fusion Pistol",
                range: "6\"",
                A: 1,
                BS: "2+",
                S: 8,
                AP: -4,
                D: "D6",
                rules: ["ASSAULT", "PISTOL", "MELTA 2"]
            },
            {
                name: "Neuro-disruptor",
                range: "12\"",
                A: 1,
                BS: "2+",
                S: 4,
                AP: -2,
                D: 1,
                rules: ["ASSAULT", "PISTOL", "ANTI-INFANTRY 2+"]
            },
            {
                name: "Shuriken Pistol",
                range: "12\"",
                A: 1,
                BS: "2+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["ASSAULT", "PISTOL"]
            }
        ],
        meleeWeapons: [
            {
                name: "Troupe Master Blade",
                range: "Melee",
                A: 5,
                WS: "2+",
                S: 5,
                AP: -2,
                D: 2,
                rules: ["DEVASTATING WOUNDS"]
            },
            {
                name: "Harlequin Special Weapon",
                range: "Melee",
                A: 6,
                WS: "2+",
                S: 4,
                AP: -1,
                D: 2,
                rules: ["DEVASTATING WOUNDS"]
            }
        ],
        composition: "1 Troupe Master with Shuriken Pistol, Troupe Master Blade and Flip-Belt",
        options: [
            "Shuriken Pistol can be replaced with Fusion Pistol or Neuro-disruptor",
            "Troupe Master Blade can be replaced with Harlequin Special Weapon"
        ],
        abilities: [
            "Leader: Troupe",
            "Battle Focus",
            "Disparate Paths",
            "Choreographer of War: When this model is leading the unit, each time the model in that unit makes a Pile In or Consolidation move, it can move up to 6\" and it does not need to end that move closer to the closest enemy model, provided it moves as close as possible to the closest enemy unit.",
            "Cegorach's Favour: Each time this model makes a melee attack, re-roll a To Hit roll of 1 and add +1 to the Wound roll."
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move."
        ],
        keywords: [
            "Infantry",
            "Character",
            "Aeldari",
            "Grenades",
            "Troupe Master"
        ],
        faction: "Harlequins"
    },
    {
        name: "Troupe",
        kind: "UnitProfile",
        stats: {
            M: "8\"",
            T: 3,
            Sv: "6+/4++",
            W: 1,
            Ld: "6+",
            OC: 1
        },
        rangedWeapons: [
            {
                name: "Shuriken Pistol",
                range: "12\"",
                A: 1,
                BS: "3+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["ASSAULT", "PISTOL"]
            },
            {
                name: "Fusion Pistol",
                range: "6\"",
                A: 1,
                BS: "3+",
                S: 8,
                AP: -4,
                D: "D6",
                rules: ["MELTA 2"]
            },
            {
                name: "Neuro-disruptor",
                range: "12\"",
                A: 1,
                BS: "3+",
                S: 4,
                AP: -3,
                D: 1,
                rules: ["ANTI-INFANTRY 2+", "PISTOL"]
            }
        ],
        meleeWeapons: [
            {
                name: "Harlequin Blade",
                range: "Melee",
                A: 5,
                WS: "3+",
                S: 3,
                AP: -1,
                D: 1,
                rules: ["DEVASTATING WOUNDS"]
            },
            {
                name: "Harlequin Special Weapon",
                range: "Melee",
                A: 6,
                WS: "2+",
                S: 4,
                AP: -1,
                D: 2,
                rules: ["DEVASTATING WOUNDS"]
            }
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move."
        ],
        abilities: [
            "Battle Focus",
            "Disparate Paths",
            "Dance of Death: At the start of the Fight phase, select one of the following abilities this unit gets until the end of the phase:<ul><li>Hero's Prowess: Each time this unit makes a melee attack, re-roll To Hit rolls of 1.</li><li>Villain's Doom: Each time this unit makes a melee attack, add +1 to the To Wound roll.</li><li>Trickster's Grace: Each time an attack targets this unit, subtract 1 from the To Hit roll.</li></ul>"
        ],
        options: [
            "Any number of models can replace Harlequin Blade with Harlequin Special Weapon",
            "Lead Player's Harlequin Blade can be replaced with the Power Sword",
            "If the unit contains 9 or fewer models, up to 2 models can replace their Shuriken Pistol with a Fusion Pistol and up to 2 other models can replace their Shuriken Pistol with a Neuro-disruptor.",
            "If the unit contains 10 or more models, up to 4 models can replace their Shuriken Pistol with a Fusion Pistol and up to 4 other models can replace their Shuriken Pistol with a Neuro-disruptor."
        ],
        composition: "1 Lead Player and 4-11 Players each with Harlequin Blade, Shuriken Pistol, and Flip Belt",
        keywords: [
            "Infantry",
            "Aeldari",
            "Grenades",
            "Troupe"
        ],
        faction: "Harlequins"
    },
    {
        name: "Death Jester",
        kind: "UnitProfile",
        stats: {
            M: "8\"",
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1
        },
        rangedWeapons: [
            {
                name: "Shrieker's Cannon",
                range: "24\"",
                A: 3,
                BS: "2+",
                S: 6,
                AP: -2,
                D: 2,
                rules: []
            }
        ],
        meleeWeapons: [
            {
                name: "Jester's Blade",
                range: "Melee",
                A: 4,
                WS: "2+",
                S: 4,
                AP: 0,
                D: 1,
                rules: []
            }
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move."
        ],
        composition: "1 Death Jester with Shrieker's Cannon, Jester's Blade and Flip Belt",
        abilities: [
            "Lone Operative",
            "Battle Focus",
            "Disparate Paths",
            "Death is not Enough: In your Shooting Phase, after this unit has shot, select one unit, which is not Vehicle or Monster. It must make a Battle-Shock test. If one of these attacks destroyed a model in that unit, subtract 1 from that test.",
            "Cruel Amusement: In your Shooting Phase, each time this model is selected to shoot, select one of the abilities below; Shrieker's Cannon gets this ability until the end of the phase: <ul><li>[IGNORES COVER]</li><li>[PRECISION]</li><li>[SUSTAINED HITS 3]</li></ul>"
        ],
        keywords: [
            "Infantry",
            "Character",
            "Aeldari",
            "Death Jester"
        ],
        faction: "Harlequins"
    },
    {
        name: "Shadowseer",
        kind: "UnitProfile",
        stats: {
            M: "8\"",
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1
        },
        rangedWeapons: [
            {
                name: "Neuro-disruptor",
                range: "12\"",
                A: 1,
                BS: "2+",
                S: 4,
                AP: -2,
                D: 1,
                rules: ["ASSAULT", "PISTOL", "ANTI-INFANTRY 2+"]
            },
            {
                name: "Shuriken Pistol",
                range: "12\"",
                A: 1,
                BS: "2+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["ASSAULT", "PISTOL"]
            }
        ],
        meleeWeapons: [
            {
                name: "Miststave",
                range: "Melee",
                A: 4,
                WS: "2+",
                S: 5,
                AP: -1,
                D: "D3",
                rules: ["PSYCHIC"]
            }
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move."
        ],
        options: [
            "Shuriken Pistol can be replaced with Neuro-disruptor"
        ],
        composition: "1 Shadowseer with Shuriken Pistol, Miststave, and Flip Belt",
        abilities: [
            "Leader: Troupe",
            "Stealth",
            "Battle Focus",
            "Disparate Paths",
            "Fog of Dreams (Psychic): When this model is leading the unit, that unit can only be selected as a target of a ranged attack if the attacking model is within 18\".",
            "Treacherous Illusion (Psychic): Melee weapons equipped by the enemy models have the [HAZARDOUS] ability while targeting this model's unit."
        ],
        keywords: [
            "Infantry",
            "Character",
            "Aeldari",
            "Psyker",
            "Grenades",
            "Shadowseer"
        ],
        faction: "Harlequins"
    },
    {
        name: "Solitaire",
        kind: "UnitProfile",
        stats: {
            M: "12\"",
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1
        },
        meleeWeapons: [
            {
                name: "Solitaire Weapons",
                range: "Melee",
                A: 9,
                WS: "2+",
                S: 6,
                AP: -2,
                D: 2,
                rules: ["PRECISION"]
            }
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move."
        ],
        abilities: [
            "Fights First",
            "Lone Operative",
            "Stealth",
            "Battle Focus",
            "Disparate Paths",
            "Blitz: Once per game, in your Movement phase, before this model makes a Normal move, it can use this ability. If it does, add 2D6 to its Move characteristic and add 3 to the Solitaire Weapons' Attacks until the end of this turn.",
            "Blur of Movement: This model is eligible to declare a charge in the turn in which it Advanced."
        ],
        composition: "1 Solitaire with Solitaire Weapons and Flip Belt",
        keywords: [
            "Infantry",
            "Character",
            "Epic Hero",
            "Aeldari",
            "Solitaire"
        ],
        faction: "Harlequins"
    }
];