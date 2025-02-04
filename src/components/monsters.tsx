// const monsters = [
//     { id: 1, name: "Goblin", hp: 20, maxHp: 20, ac: 15, stats: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 } },
//     { id: 2, name: "Orc", hp: 15, maxHp: 15, ac: 13, stats: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 } },
//     { id: 3, name: "Mantícora", hp: 68, maxHp: 68, ac: 14, stats: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 } },
//     { id: 4, name: "Banshee", hp: 58, maxHp: 58, ac: 12, stats: { str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17 } },
//     { id: 5, name: "Needle Blight", hp: 11, maxHp: 11, ac: 12, stats: { str: 12, dex: 12, con: 13, int: 4, wis: 8, cha: 3 } },
//     { id: 6, name: "Twig Blight", hp: 4, maxHp: 4, ac: 13, stats: { str: 6, dex: 13, con: 12, int: 4, wis: 8, cha: 3 } },
//     { id: 7, name: "Vine Blight", hp: 26, maxHp: 26, ac: 12, stats: { str: 15, dex: 8, con: 14, int: 5, wis: 10, cha: 3 } },
//     { id: 8, name: "Cryovain", hp: 200, maxHp: 200, ac: 18, stats: { str: 27, dex: 10, con: 25, int: 16, wis: 15, cha: 19 } },
//     { id: 9, name: "Boar", hp: 11, maxHp: 11, ac: 11, stats: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5 } },
//     { id: 10, name: "Carrion Crawler", hp: 51, maxHp: 51, ac: 13, stats: { str: 14, dex: 13, con: 16, int: 1, wis: 12, cha: 5 } },
//     { id: 11, name: "Centaur", hp: 45, maxHp: 45, ac: 12, stats: { str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11 } },
//     { id: 12, name: "Cow", hp: 15, maxHp: 15, ac: 10, stats: { str: 18, dex: 10, con: 14, int: 2, wis: 10, cha: 4 } },
//     { id: 13, name: "Don-Jon Raskin", hp: 44, maxHp: 44, ac: 11, stats: { str: 10, dex: 10, con: 12, int: 12, wis: 12, cha: 14 } },
//     { id: 14, name: "Falcon the Hunter", hp: 75, maxHp: 75, ac: 14, stats: { str: 12, dex: 16, con: 14, int: 10, wis: 15, cha: 13 } },
//     { id: 15, name: "Ghoul", hp: 22, maxHp: 22, ac: 12, stats: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 } },
//     { id: 16, name: "Giant Crab", hp: 13, maxHp: 13, ac: 15, stats: { str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3 } },
//     { id: 17, name: "Giant Rat", hp: 7, maxHp: 7, ac: 12, stats: { str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4 } },
//     {id: 18,
//     name: "Giant Spider",
//     hp: 26,
//     maxHp: 26,
//     ac: 14,
//     stats: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 }
//   },
//   {
//     id: 19,
//     name: "Gorthok the Thunder Boar",
//     hp: 73,
//     maxHp: 73,
//     ac: 15,
//     stats: { str: 20, dex: 10, con: 19, int: 6, wis: 10, cha: 14 }
//   },
//   {
//     id: 20,
//     name: "Harpy",
//     hp: 38,
//     maxHp: 38,
//     ac: 11,
//     stats: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 }
//   },
//   {
//     id: 21,
//     name: "Hunter Shark",
//     hp: 45,
//     maxHp: 45,
//     ac: 12,
//     stats: { str: 18, dex: 13, con: 15, int: 1, wis: 10, cha: 4 }
//   },
//   {
//     id: 22,
//     name: "Invisible Stalker",
//     hp: 104,
//     maxHp: 104,
//     ac: 14,
//     stats: { str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11 }
//   },
//   {
//     id: 23,
//     name: "Mimic",
//     hp: 58,
//     maxHp: 58,
//     ac: 12,
//     stats: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 }
//   },
//   {
//     id: 24,
//     name: "Ogre",
//     hp: 59,
//     maxHp: 59,
//     ac: 11,
//     stats: { str: 19, dex: 8, con: 16, int: 5, wis: 77, cha: 7 }
//   },
//   {
//     id: 25,
//     name: "Riding Horse",
//     hp: 13,
//     maxHp: 13,
//     ac: 10,
//     stats: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7 }
//   },
//   {
//     id: 26,
//     name: "Gnomo da Rocha",
//     hp: 7,
//     maxHp: 7,
//     ac: 10,
//     stats: { str: 6, dex: 11, con: 10, int: 15, wis: 10, cha: 13 }
//   },
//   {
//     id: 27,
//     name: "Stirge",
//     hp: 2,
//     maxHp: 2,
//     ac: 14,
//     stats: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 }
//   },

// ]