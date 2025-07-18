var data = [
    {
        name: "Army Rules",
        kind: "ArmyRuleProfile",
        battleFocusTokens: [
            { size: 1000, tokens: "2 / round" },
            { size: 2000, tokens: "4 / round" },
            { size: 3000, tokens: "6 / round" },
        ],
        agileManeuvers: [
            {
                name: "Swift As The Wind",
                trigger:
                    "When an eligible unit makes a Normal, Advance or Fall Back move.",
                effect:
                    "Until the end of the phase, add +2\" to the unit's Move characteristic.",
                restrictions: "Once per unit per phase.",
            },
            {
                name: "Flitting Shadows",
                trigger:
                    "When an eligible unit makes a Normal, Advance or Fall Back move, is set up on the battlefield or declares a charge.",
                effect:
                    "Until the end of the phase, that unit can't be targeted by Overwatch stratagem.",
                restrictions: "Once per phase.",
            },
            {
                name: "Star Engines",
                trigger: "When an eligible Vehicle unit makes a Normal move.",
                effect:
                    "Until the end of the phase, add D6+1\" to the unit models' Move characteristic.",
                restrictions: "Once per phase.",
            },
            {
                name: "Sudden Strike",
                trigger:
                    "When an eligible unit from your army is selected to fight.",
                effect:
                    'Until the end of the phase, each time a model in that unit makes a Pile-In or Consolidate move, it can move up to 6" instead of 3".',
                restrictions: "Once per phase.",
            },
            {
                name: "Opportunity Seized",
                trigger: "When an enemy unit ends the Fall Back move.",
                effect:
                    'One eligible unit from your army that started the phase within the Engagement Range of the enemy unit can make a Normal move of up to D6+1".',
                restrictions: "Once per phase.",
            },
            {
                name: "Fade Back",
                trigger:
                    "In your opponent's Shooting phase, just after the enemy unit has shot.",
                effect:
                    'One eligible unit from your army (excluding Titanic units) that was hit by one or more enemy attacks can make a Normal move of up to D6+1".',
                restrictions: "Once per phase.",
            },
        ],
        description:
            "At the start of the battle round, you receive a number of Battle Focus tokens depending on the battle size.<br />You can spend Battle Focus tokens to perform an Agile Maneuver. A unit is eligible to perform an Agile Maneuver if it has this ability and hasn't performed an Agile Maneuver this phase. Unless otherwise stated, you can only perform an Agile Maneuver once per phase. At the end of the round, you lose any unused Battle Focus tokens.",
        disparatePaths:
            "You can include Harlequin units in your army, even though they do not have the Asuryani keyword. Unless otherwise stated, Unless otherwise stated, you can't select Harlequin or Ynnari as your Army Faction.",
    },
    {
        name: "Ghosts of the Webway",
        kind: "DetachmentProfile",
        rules: [
            {
                name: "Luck of the Laughing God*",
                description:
                    "At the start of each battle round, you gain 1 Luck Point for each 1000pts of Harlequin units in your Army.<br />In addition, at the start of the battle round, you can make a Luck of the Laughing God roll to try to increase the number of Luck Points gained. To do so, roll up to six D6. If every result is unique or every result is the same, you gain a number of additional Luck Points equal to the number of D6 rolled.<br />Each Luck Point can be used to change the value of one or more die roll in Advance, Hit, Wound, Damage rolls and/or Saving throws made for a Harlequin unit from your army. Any Luck Points not used by the end of that battle round are lost.",
            },
            {
                name: "Travelling Players",
                description:
                    "<ul><li>Troupe units in your army get Battleline keyword and get OC characteristic of 2.</li><li>You can include up to 3 of each of the following models: Troupe Master, Death Jester, Shadowseer.</li></ul>",
            },
        ],
        enhancements: [
            {
                name: "Cegorach's Coil",
                cost: 25,
                description:
                    "Troupe Master model only. Each time the bearer's unit makes a Charge move, select one unit within the Engagement Range of the bearer's unit, then roll one D6 for each model in the bearer's unit that in within the Engagement Range. For each 4+, that enemy unit suffers 1 mortal wound.",
            },
            {
                name: "Mask of Secrets*",
                cost: 20,
                description:
                    "Troupe Master or Shadowseer model only. Each time the bearer's unit selects the one Dance of Death ability, it can select two of those abilities instead.",
            },
            {
                name: "Murder's Jest*",
                cost: 10,
                description:
                    "Death Jester model only. Each time the bearer makes a ranged attack, you can change the result of one of the dice to an unmodified 6.",
            },
            {
                name: "Mistweave",
                cost: 15,
                description:
                    "Shadowseer model only. While the bearer is leading the unit, models in that unit have Stealth and Infiltrators ability.",
            },
        ],
        stratagems: [
            {
                name: "Staged Death",
                color: "green",
                when: "Any phase",
                target:
                    "One Harlequin Character model from your army that was just destroyed.",
                effect:
                    "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within the Engagement Range of the enemy units, with half of it's full wounds remaining.",
                restrictions:
                    "Each model can only be targeted with this Stratagem once per battle.",
            },
            {
                name: "Cegorach Grace*",
                color: "green",
                when: "Any phase, just before you make an Advance, Hit, Wound, Damage roll or a Saving Throw.",
                target: null,
                effect:
                    "You can immediately make an additional Luck of the Laughing God roll.",
                restrictions: null,
            },
            {
                name: "Mocking Flight",
                color: "blue",
                when:
                    "Your Movement phase, just after the Harlequin unit from your army Falls Back .",
                target: "That Harlequin unit.",
                effect:
                    "Until the end of the turn, that unit is eligible to shoot and charge in a turn in which it Fell Back.",
                restrictions: null,
            },
            {
                name: "Trickster's Retort",
                color: "red",
                when:
                    "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or a Fall Back move.",
                target:
                    'One Troupe unit from your army that is within 9" from enemy unit.',
                effect: 'Your unit can make a Normal move of up to 6".',
                restrictions: null,
            },
            {
                name: "Bloody Dance*",
                color: "red",
                when: "Your or opponent's Fight phase",
                target:
                    "One Harlequin Infantry or Harlequin Mounted unit from your army, that was selected to fight.",
                effect:
                    "Until the end of the phase, this unit scores Critical Wounds on a roll of 5+.",
                restrictions: null,
            },
            {
                name: "Exit the Stage",
                color: "red",
                when: "End of your Opponent's Fight phase",
                target:
                    "One Harlequin unit from your army that is not within Engagement Range of any enemy units.",
                effect:
                    "Remove your unit from the battlefield and place it into Strategic Reserves.",
                restrictions: null,
            },
        ],
    },
    {
        name: "Skyweavers",
        kind: "UnitProfile",
        stats: {
            M: '14"',
            T: 4,
            Sv: "4+/4++",
            W: 3,
            Ld: "6+",
            OC: 2,
        },
        rangedWeapons: [
            {
                name: "Shuriken Cannon",
                range: '24"',
                A: 3,
                BS: "3+",
                S: 6,
                AP: -1,
                D: 2,
                rules: ["LETHAL HITS"],
            },
            {
                name: "Haywire Cannon",
                range: '24"',
                A: 2,
                BS: "3+",
                S: 3,
                AP: -1,
                D: 3,
                rules: ["ANTI-VEHICLE 4+", "DEVASTATING WOUNDS"],
            },
            {
                name: "Star bolas",
                range: '12"',
                A: "D3",
                BS: "3+",
                S: 7,
                AP: -2,
                D: 3,
                rules: [],
            },
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
                rules: [],
            },
            {
                name: "Zephyrglaive",
                range: "Melee",
                A: 4,
                WS: "3+",
                S: 6,
                AP: -2,
                D: 2,
                rules: [],
            },
        ],
        options: [
            "Any number of models can replace Shuriken Cannon with Haywire Cannon",
            "Any number of models can each replace Star Bolas with Zephyrglaive",
        ],
        composition: {
            description:
                "Skyweavers with Shuriken Cannon, Star Bolas and Close-combat weapon",
            cost_map: [
                { range: "1-2", cost: 95 },
                { range: "3-4", cost: 180 },
            ],
        },
        abilities: [
            "Battle Focus",
            "Disparate Paths",
            "Acrobatic Grace: Each time an attack targets this unit, subtract 1 from the Hit roll.",
        ],
        keywords: ["Skyweavers", "Mounted", "Aeldari", "Fly", "Smoke"],
        faction: "Harlequins",
    },
    {
        name: "Voidweaver",
        kind: "UnitProfile",
        stats: {
            M: '14"',
            T: 6,
            Sv: "4+/4++",
            W: 6,
            Ld: "6+",
            OC: 2,
        },
        rangedWeapons: [
            {
                name: "Prismatic Cannon (dispersed)",
                range: '24"',
                A: "2D6",
                BS: "3+",
                S: 4,
                AP: -1,
                D: 2,
                rules: ["BLAST"],
            },
            {
                name: "Prismatic Cannon (focussed)",
                range: '24"',
                A: 3,
                BS: "3+",
                S: 12,
                AP: -3,
                D: 4,
                rules: [],
            },
            {
                name: "Shuriken Cannon",
                range: '24"',
                A: 3,
                BS: "3+",
                S: 6,
                AP: -1,
                D: 2,
                rules: ["LETHAL HITS"],
            },
            {
                name: "Voidweaver Haywire Cannon",
                range: '24"',
                A: 3,
                BS: "3+",
                S: 4,
                AP: -1,
                D: 3,
                rules: ["ANTI-VEHICLE 3+", "DEVASTATING WOUNDS"],
            },
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
                rules: [],
            },
        ],
        options: ["Haywire cannon can be replaced with Prismatic Cannon"],
        composition: {
            description:
                "Voidweaver with 2x Shuriken Cannon and 1x Haywire Cannon",
            cost_map: [{ range: "1", cost: 125 }],
        },
        abilities: [
            "Deadly Demise 1",
            "Stealth",
            "Battle Focus",
            "Disparate Paths",
            'Psychromatic Camouflage: This unit can only be the target of a ranged attack if the attacking model is within 18".',
        ],
        keywords: ["Vehicle", "Aeldari", "Fly", "Voidweaver"],
        faction: "Harlequins",
    },
    {
        name: "Starweaver",
        kind: "UnitProfile",
        stats: {
            M: '14"',
            T: 6,
            Sv: "4+/4++",
            W: 6,
            Ld: "6+",
            OC: 2,
        },
        rangedWeapons: [
            {
                name: "Shuriken Cannon",
                range: '24"',
                A: 3,
                BS: "3+",
                S: 6,
                AP: -1,
                D: 2,
                rules: ["LETHAL HITS"],
            },
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
                rules: [],
            },
        ],
        abilities: [
            "Deadly Demise 1",
            "Transport capacity: 6 Harlequin Infantry models.",
            "Firing Deck 6",
            "Battle Focus",
            "Disparate Paths",
            'Rapid Embarkation: At the end of the Fight phase, if there are no models currently embarked in this Transport, you can select one Harlequin Infantry unit that has 6 or fewer models and is wholly within 6" of this Transport. Unless that unit is within the Engagement Range of enemy models, it can embark within this Transport.',
        ],
        composition: {
            description:
                "Starweaver with 2x Shuriken Cannon and Close-combat weapon",
            cost_map: [{ range: "1", cost: 80 }],
        },
        keywords: [
            "Vehicle",
            "Aeldari",
            "Transport",
            "Dedicated Transport",
            "Smoke",
            "Fly",
            "Starweaver",
        ],
        faction: "Harlequins",
    },
    {
        name: "Troupe Master",
        kind: "UnitProfile",
        stats: {
            M: '8"',
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1,
        },
        rangedWeapons: [
            {
                name: "Fusion Pistol",
                range: '6"',
                A: 1,
                BS: "2+",
                S: 8,
                AP: -4,
                D: "D6",
                rules: ["ASSAULT", "PISTOL", "MELTA 2"],
            },
            {
                name: "Neuro-disruptor",
                range: '12"',
                A: 1,
                BS: "2+",
                S: 4,
                AP: -2,
                D: 1,
                rules: ["ASSAULT", "PISTOL", "ANTI-INFANTRY 2+"],
            },
            {
                name: "Shuriken Pistol",
                range: '12"',
                A: 1,
                BS: "2+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["ASSAULT", "PISTOL"],
            },
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
                rules: ["DEVASTATING WOUNDS"],
            },
            {
                name: "Harlequin Special Weapon",
                range: "Melee",
                A: 6,
                WS: "2+",
                S: 4,
                AP: -1,
                D: 2,
                rules: ["DEVASTATING WOUNDS"],
            },
        ],
        composition: {
            description:
                "Troupe Master with Shuriken Pistol, Troupe Master Blade and Flip-Belt",
            cost_map: [{ range: "1", cost: 75 }],
        },
        options: [
            "Shuriken Pistol can be replaced with Fusion Pistol or Neuro-disruptor",
            "Troupe Master Blade can be replaced with Harlequin Special Weapon",
        ],
        abilities: [
            "Leader: Troupe",
            "Battle Focus",
            "Disparate Paths",
            'Choreographer of War: When this model is leading the unit, each time the model in that unit makes a Pile In or Consolidation move, it can move up to 6" and it does not need to end that move closer to the closest enemy model, provided it moves as close as possible to the closest enemy unit.',
            "Cegorach's Favour: Each time this model makes a melee attack, re-roll a To Hit roll of 1 and add +1 to the Wound roll.",
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move.",
        ],
        keywords: [
            "Infantry",
            "Character",
            "Aeldari",
            "Grenades",
            "Troupe Master",
        ],
        faction: "Harlequins"
    },
    {
        name: "Troupe",
        kind: "UnitProfile",
        stats: {
            M: '8"',
            T: 3,
            Sv: "6+/4++",
            W: 1,
            Ld: "6+",
            OC: 1,
        },
        rangedWeapons: [
            {
                name: "Shuriken Pistol",
                range: '12"',
                A: 1,
                BS: "3+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["ASSAULT", "PISTOL"],
            },
            {
                name: "Fusion Pistol",
                range: '6"',
                A: 1,
                BS: "3+",
                S: 8,
                AP: -4,
                D: "D6",
                rules: ["MELTA 2"],
            },
            {
                name: "Neuro-disruptor",
                range: '12"',
                A: 1,
                BS: "3+",
                S: 4,
                AP: -2,
                D: 1,
                rules: ["ANTI-INFANTRY 2+", "PISTOL"],
            },
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
                rules: ["DEVASTATING WOUNDS"],
            },
            {
                name: "Harlequin Special Weapon",
                range: "Melee",
                A: 6,
                WS: "2+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["DEVASTATING WOUNDS"],
            },
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move.",
        ],
        abilities: [
            "Battle Focus",
            "Disparate Paths",
            "Dance of Death: At the start of the Fight phase, select one of the following abilities this unit gets until the end of the phase:<ul><li>Hero's Prowess: Each time this unit makes a melee attack, re-roll To Hit rolls of 1.</li><li>Villain's Doom: Each time this unit makes a melee attack, add +1 to the To Wound roll.</li><li>Trickster's Grace: Each time an attack targets this unit, subtract 1 from the To Hit roll.</li></ul>",
        ],
        options: [
            "Any number of models can replace Harlequin Blade with Harlequin Special Weapon",
            "Lead Player's Harlequin Blade can be replaced with the Power Sword",
            "If the unit contains 9 or fewer models, up to 2 models can replace their Shuriken Pistol with a Fusion Pistol and up to 2 other models can replace their Shuriken Pistol with a Neuro-disruptor.",
            "If the unit contains 10 or more models, up to 4 models can replace their Shuriken Pistol with a Fusion Pistol and up to 4 other models can replace their Shuriken Pistol with a Neuro-disruptor.",
        ],
        composition: {
            description:
                "1 Lead Player and [[range]] Players with Harlequin Blade, Shuriken Pistol, and Flip Belt.",
            cost_map: [
                { range: "5", cost: 75 },
                { range: "6", cost: 100 },
                { range: "7-10", cost: 190 },
                { range: "11", cost: 205 },
            ],
        },
        keywords: ["Infantry", "Aeldari", "Grenades", "Troupe"],
        faction: "Harlequins",
    },
    {
        name: "Death Jester",
        kind: "UnitProfile",
        stats: {
            M: '8"',
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1,
        },
        rangedWeapons: [
            {
                name: "Shrieker's Cannon",
                range: '24"',
                A: 3,
                BS: "2+",
                S: 6,
                AP: -2,
                D: 2,
                rules: [],
            },
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
                rules: [],
            },
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move.",
        ],
        composition: {
            description:
                "Death Jester with Shrieker's Cannon, Jester's Blade and Flip Belt.",
            cost_map: [{ range: "1", cost: 90 }],
        },
        abilities: [
            "Lone Operative",
            "Battle Focus",
            "Disparate Paths",
            "Death is not Enough: Each time the this model makes a ranged attack that targets the unit Below Starting Strength, each successful hit on 5+ becomes a Critical Hit.",
            "Cruel Amusement: In your Shooting Phase, each time this model is selected to shoot, select one of the abilities below; Shrieker's Cannon gets this ability until the end of the phase: <ul><li>[IGNORES COVER]</li><li>[PRECISION]</li><li>[SUSTAINED HITS 3]</li></ul>",
        ],
        keywords: ["Infantry", "Character", "Aeldari", "Death Jester"],
        faction: "Harlequins",
    },
    {
        name: "Shadowseer",
        kind: "UnitProfile",
        stats: {
            M: '8"',
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1,
        },
        rangedWeapons: [
            {
                name: "Neuro-disruptor",
                range: '12"',
                A: 1,
                BS: "2+",
                S: 4,
                AP: -2,
                D: 1,
                rules: ["ASSAULT", "PISTOL", "ANTI-INFANTRY 2+"],
            },
            {
                name: "Shuriken Pistol",
                range: '12"',
                A: 1,
                BS: "2+",
                S: 4,
                AP: -1,
                D: 1,
                rules: ["ASSAULT", "PISTOL"],
            },
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
                rules: ["PSYCHIC", "PRECISION"],
            },
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move.",
        ],
        options: ["Shuriken Pistol can be replaced with Neuro-disruptor"],
        composition: {
            description:
                "Shadowseer with Shuriken Pistol, Miststave, and Flip Belt",
            cost_map: [{ range: "1", cost: 75 }],
        },
        abilities: [
            "Leader: Troupe",
            "Battle Focus",
            "Disparate Paths",
            'Fog of Dreams (Psychic): When this model is leading the unit, that unit can only be selected as a target of a ranged attack if the attacking model is within 12".',
            "Treacherous Toxins (Psychic): When this model is leading the Troupe unit, Neuro-distruptor Pistols of that unit have their Damage characteristic increased to D3."
        ],
        keywords: [
            "Infantry",
            "Character",
            "Aeldari",
            "Psyker",
            "Grenades",
            "Shadowseer",
        ],
        faction: "Harlequins",
    },
    {
        name: "Solitaire",
        kind: "UnitProfile",
        stats: {
            M: '12"',
            T: 3,
            Sv: "6+/4++",
            W: 4,
            Ld: "6+",
            OC: 1,
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
                rules: ["PRECISION", "DEVASTATING WOUNDS"],
            },
        ],
        wargearAbilities: [
            "Flip Belt: Each time the bearer's unit makes a Normal, Advance, Fall Back or Charge move, ignore the vertical distance when determining the range of that move.",
        ],
        abilities: [
            "Fights First",
            "Lone Operative",
            "Stealth",
            "Battle Focus",
            "Disparate Paths",
            "Blitz: Once per game, in your Movement phase, before this model makes a Normal move, it can use this ability. If it does, add 2D6 to its Move characteristic and add 3 to the Solitaire Weapons' Attacks until the end of this turn.",
            "Blur of Movement: This model is eligible to declare a charge in the turn in which it Advanced.",
        ],
        composition: {
            description: "Solitaire with Solitaire Weapons and Flip Belt",
            cost_map: [{ range: "1", cost: 125 }],
        },
        keywords: [
            "Infantry",
            "Character",
            "Epic Hero",
            "Aeldari",
            "Solitaire",
        ],
        faction: "Harlequins",
    },
];
