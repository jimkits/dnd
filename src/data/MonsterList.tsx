const MonsterList = [
    {
        type: "Small",
        list: [
            {
                name: "Goblin",
                description: "Small Humanoid (Goblinoid), Neutral Evil",
                stats: [
                    {
                        ArmorClass: " 15 (leather armor, shield)",
                        HitPoints: "7 (2d6)",
                        Speed: "30 ft."
                    }
                ],
                attributes: [
                    {
                        str: "8 (-1)",
                        dex: "14 (+2)",
                        con: "10 (+0)",
                        int: "10 (+0)",
                        wis: "8 (-1)",
                        cha: "8 (-1)"
                    }
                ]
            },
            {
                name: "Baboon",
                description: "Small Beast, Unaligned",
                stats: [
                    {
                        ArmorClass: "12",
                        HitPoints: "3 (1d6)",
                        Speed: "30 ft., climb 30 ft."
                    }
                ],
                attributes: [
                    {
                        str: "8 (-1)",
                        dex: "14 (+2)",
                        con: "11 (+0)",
                        int: "4 (-3)",
                        wis: "12 (+1)",
                        cha: "6 (-2)"
                    }
                ]
            },
            {
                name: "Kobold Warrior",
                description: "Small Dragon, Neutral",
                stats: [
                    {
                        ArmorClass: "14",
                        HitPoints: "7 (3d6 - 3)",
                        Speed: "30 ft."
                    }
                ],
                attributes: [
                    {
                        str: "7 (-2)",
                        dex: "15 (+2)",
                        con: "9 (-1)",
                        int: "8 (-1)",
                        wis: "7 (-2)",
                        cha: "8 (-1)"
                    }
                ]
            }
        ]
    },
    {
        type: "Medium",
        list: [
            {
                name: "Bandit",
                description: "Medium Humanoid (Any Race), Any Non-Lawful Alignment",
                stats: [
                    {
                        ArmorClass: "12 (leather armor)",
                        HitPoints: "11 (2d8 + 2)",
                        Speed: "30 ft."
                    }
                ],
                attributes: [
                    {
                        str: "11 (+0)",
                        dex: "12 (+1)",
                        con: "12 (+1)",
                        int: "10 (+0)",
                        wis: "10 (+0)",
                        cha: "10 (+0)"
                    }
                ]
            },
            {
                name: "Banshee",
                description: "Medium Undead, Chaotic Evil",
                stats: [
                    {
                        ArmorClass: "12",
                        HitPoints: "58 (13d8)",
                        Speed: "0 ft., fly 40 ft. (hover)"
                    }
                ],
                attributes: [
                    {
                        str: "1 (-5)",
                        dex: "14 (+2)",
                        con: "10 (+0)",
                        int: "12 (+1)",
                        wis: "11 (+0)",
                        cha: "17 (+3)"
                    }
                ]
            },
            {
                name: "Basilisk",
                description: "Medium Monstrosity, Unaligned",
                stats: [
                    {
                        ArmorClass: "15",
                        HitPoints: "52 (8d8 + 16)",
                        Speed: "20 ft."
                    }
                ],
                attributes: [
                    {
                        str: "16 (+3)",
                        dex: "8 (-1)",
                        con: "15 (+2)",
                        int: "2 (-4)",
                        wis: "8 (-1)",
                        cha: "7 (-2)"
                    }
                ]
            },
        ]
    },
    {
        type: "Large",
        list: [
            {
                name: "Chimera",
                description: "Large Monstrosity, Chaotic Evil",
                stats: [
                    {
                        ArmorClass: "14",
                        HitPoints: "114 (12d10 + 48)",
                        Speed: "30 ft., fly 60 ft."
                    }
                ],
                attributes: [
                    {
                        str: "19 (+4)",
                        dex: "11 (+0)",
                        con: "19 (+4)",
                        int: "3 (-4)",
                        wis: "14 (+2)",
                        cha: "10 (+0)"
                    }
                ]
            },
            {
                name: "Clay Golem",
                description: "Large Construct, Unaligned",
                stats: [
                    {
                        ArmorClass: "14",
                        HitPoints: "133 (14d10 + 56)",
                        Speed: "20 ft."
                    }
                ],
                attributes: [
                    {
                        str: "20 (+5)",
                        dex: "9 (-1)",
                        con: "18 (+4)",
                        int: "3 (-4)",
                        wis: "8 (-1)",
                        cha: "1 (-5)"
                    }
                ]
            },
        ]
    }
]

export default MonsterList;