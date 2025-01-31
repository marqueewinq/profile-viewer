var profilesData = [
    {
        name: "Skyweavers",
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
                rules: [rulesData.lethalHits.name]
            },
            {
                name: "Haywire Cannon",
                range: '24"',
                A: 2,
                BS: '3+',
                S: 3,
                AP: -1,
                D: 3,
                rules: [rulesData.antiVehicle.name, rulesData.devastatingWounds.name]
            },
            {
                name: "Star bolas",
                range: '12"',
                A: 'D3',
                BS: '3+',
                S: 2,
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
            rulesData.battleFocus.name,
            rulesData.disparatePaths.name,
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
        "name": "Voidweaver",
        "stats": {
            "M": "14\"",
            "T": 6,
            "Sv": "4+/4++",
            "W": 6,
            "Ld": "6+",
            "OC": 2
        },
        "rangedWeapons": [
            {
                "name": "Prismatic Cannon (dispersed)",
                "range": "24\"",
                "A": "2D6",
                "BS": "3+",
                "S": 4,
                "AP": 0,
                "D": 1,
                "rules": ["BLAST"]
            },
            {
                "name": "Prismatic Cannon (focussed)",
                "range": "24\"",
                "A": 2,
                "BS": "3+",
                "S": 8,
                "AP": -3,
                "D": 4,
                "rules": []
            },
            {
                "name": "Shuriken Cannon",
                "range": "24\"",
                "A": 3,
                "BS": "3+",
                "S": 6,
                "AP": -1,
                "D": 2,
                "rules": [rulesData.lethalHits.name]
            },
            {
                "name": "Haywire Cannon",
                "range": "24\"",
                "A": 3,
                "BS": "3+",
                "S": 4,
                "AP": -1,
                "D": 3,
                "rules": [rulesData.antiVehicle.name, rulesData.devastatingWounds.name]
            }
        ],
        "meleeWeapons": [
            {
                "name": "Close-combat weapon",
                "range": "Melee",
                "A": 4,
                "WS": "3+",
                "S": 3,
                "AP": 0,
                "D": 1,
                "rules": []
            }
        ],
        "options": [
            "Haywire cannon can be replaced with Prismatic Cannon"
        ],
        "composition": "1 Voidweaver with 2x Shuriken Cannon and 1x Haywire Cannon",
        "abilities": [
            rulesData.deadlyDemise.name,
            rulesData.stealth.name,
            rulesData.battleFocus.name,
            rulesData.disparatePaths.name,
            "Psychromatic Camouflage: This unit can only be target of the ranged attack if the attacking model is within 18\"."
        ],
        "keywords": [
            "Vehicle",
            "Aeldari",
            "Fly",
            "Voidweaver"
        ],
        "faction": "Harlequins"
    },
    {
        "name": "Starweaver",
        "stats": {
            "M": "14\"",
            "T": 6,
            "Sv": "4+/4++",
            "W": 6,
            "Ld": "6+",
            "OC": 2
        },
        "rangedWeapons": [
            {
                "name": "Shuriken Cannon",
                "range": "24\"",
                "A": 3,
                "BS": "3+",
                "S": 6,
                "AP": -1,
                "D": 2,
                "rules": [rulesData.lethalHits.name]
            }
        ],
        "meleeWeapons": [
            {
                "name": "Close-combat weapon",
                "range": "Melee",
                "A": 4,
                "WS": "3+",
                "S": 3,
                "AP": 0,
                "D": 1,
                "rules": []
            }
        ],
        "abilities": [
            "Deadly Demise 1",
            "Transport capacity: 6 Harlequin Infantry models.",
            "Firing Deck 6",
            rulesData.battleFocus.name,
            rulesData.disparatePaths.name,
            "Rapid Embarkation: At the end of the Fight phase, if there are no models currently embarked in this Transport, you can select one Harlequin Infantry unit that has 6 or fewer models and is wholly within 6\" of this Transport. Unless that unit is within the Engagement Range of enemy models, it can embark within this Transport."
        ],
        "composition": "1 Starweaver with 2x Shuriken Cannon and Close-combat weapon",
        "keywords": [
            "Vehicle",
            "Aeldari",
            "Transport",
            "Dedicated Transport",
            "Smoke",
            "Fly",
            "Starweaver"
        ],
        "faction": "Harlequins"
    }

]; 