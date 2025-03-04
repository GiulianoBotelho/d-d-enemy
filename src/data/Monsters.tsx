import AnchoriteOfTalos from '../assets/images/Inimigos DnD/Anchorite of Talos.png';
import Ankheg from '../assets/images/Inimigos DnD/Ankheg.png';
import Banshee from '../assets/images/Inimigos DnD/Banshee.png';
import Boar from '../assets/images/Inimigos DnD/Boar.png';
import Centaur from '../assets/images/Inimigos DnD/Centaur.png';
import Cow from '../assets/images/Inimigos DnD/Cow.png';
import Cryovain from '../assets/images/Inimigos DnD/cryovain.jpeg';
import DonJonRaskin from '../assets/images/Inimigos DnD/Don-Jon-Raskin.png';
import Falcon from '../assets/images/Inimigos DnD/Falcon.png';
import Ghoul from '../assets/images/Inimigos DnD/Ghoul.png';
import GiantCrab from '../assets/images/Inimigos DnD/Giant Crab.png';
import GiantRat from '../assets/images/Inimigos DnD/GiantRat.png';
import Goblin from '../assets/images/Inimigos DnD/Goblin_idle.gif';
import Gorthok from '../assets/images/Inimigos DnD/Gorthok.png';
import Harpy from '../assets/images/Inimigos DnD/Harpy.png';
import HunterShark from '../assets/images/Inimigos DnD/hunter-shark.png';
import InvisibleStalker from '../assets/images/Inimigos DnD/invisible-stalker.png';
import Manticora from '../assets/images/Inimigos DnD/Manticore.png';
import Mimic from '../assets/images/Inimigos DnD/Mimic.png';
import Needle from '../assets/images/Inimigos DnD/Neddle Blight.png';
import Ogre from '../assets/images/Inimigos DnD/Ogre.png';
import Orc from '../assets/images/Inimigos DnD/Orc.png';
import Horse from '../assets/images/Inimigos DnD/Riding-horse.png';
import Gnomo from '../assets/images/Inimigos DnD/Rock-gnome-recluse.png';
import Stirge from '../assets/images/Inimigos DnD/Stirge.png';
import Twig from '../assets/images/Inimigos DnD/Twig Blight.png';
import Veteran from '../assets/images/Inimigos DnD/Veteran.png';
import Vine from '../assets/images/Inimigos DnD/Vine Blight.png';
import WereRat from '../assets/images/Inimigos DnD/Wererat.png';
import WilloWisp from '../assets/images/Inimigos DnD/will-o-wisp.png';
import OrcComander from '../assets/images/Inimigos DnD/Orc Comandante.png'
import IceOrc from '../assets/images/Inimigos DnD/orc de gelo.png'
export const Monsters = [
    { id: 1, name: "Anchorite of Talos", hp: 58, maxHp: 58, ac: 13, stats: { str: 16, dex: 13, con: 14, int: 9, wis: 15, cha: 12 }, image: AnchoriteOfTalos },
    { id: 2, name: "Ankheg", hp: 39, maxHp: 39, ac: 14, stats: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 }, image: Ankheg },
    { id: 3, name: "Banshee", hp: 58, maxHp: 58, ac: 12, stats: { str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17 }, image: Banshee },
    { id: 4, name: "Boar", hp: 11, maxHp: 11, ac: 11, stats: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5 }, image: Boar },
    { id: 5, name: "Centaur", hp: 45, maxHp: 45, ac: 12, stats: { str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11 }, image: Centaur },
    { id: 6, name: "Cow", hp: 15, maxHp: 15, ac: 10, stats: { str: 18, dex: 10, con: 14, int: 2, wis: 10, cha: 4 }, image: Cow },
    { id: 7, name: "Cryovain", hp: 133, maxHp: 180, ac: 18, stats: { str: 18, dex: 10, con: 18, int: 16, wis: 15, cha: 19 }, image: Cryovain },
    { id: 8, name: "Don-Jon Raskin", hp: 44, maxHp: 44, ac: 11, stats: { str: 10, dex: 10, con: 12, int: 12, wis: 12, cha: 14 }, image: DonJonRaskin },
    { id: 9, name: "Falcon the Hunter", hp: 75, maxHp: 75, ac: 14, stats: { str: 12, dex: 16, con: 14, int: 10, wis: 15, cha: 13 }, image: Falcon },
    { id: 10, name: "Ghoul", hp: 22, maxHp: 22, ac: 12, stats: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 }, image: Ghoul },
    { id: 11, name: "Giant Crab", hp: 13, maxHp: 13, ac: 15, stats: { str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3 }, image: GiantCrab },
    { id: 12, name: "Giant Rat", hp: 7, maxHp: 7, ac: 12, stats: { str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4 }, image: GiantRat },
    { id: 13, name: "Goblin", hp: 20, maxHp: 20, ac: 15, stats: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 }, image: Goblin },
    { id: 14, name: "Gorthok the Thunder Boar", hp: 73, maxHp: 73, ac: 15, stats: { str: 20, dex: 10, con: 19, int: 6, wis: 10, cha: 14 }, image: Gorthok },
    { id: 15, name: "Harpy", hp: 38, maxHp: 38, ac: 11, stats: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 }, image: Harpy },
    { id: 16, name: "Hunter Shark", hp: 45, maxHp: 45, ac: 12, stats: { str: 18, dex: 13, con: 15, int: 1, wis: 10, cha: 4 }, image: HunterShark },
    { id: 17, name: "Invisible Stalker", hp: 104, maxHp: 104, ac: 14, stats: { str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11 }, image: InvisibleStalker },
    { id: 18, name: "Mantícora", hp: 68, maxHp: 68, ac: 14, stats: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 }, image: Manticora },
    { id: 19, name: "Mimic", hp: 58, maxHp: 58, ac: 12, stats: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 }, image: Mimic },
    { id: 20, name: "Needle Blight", hp: 11, maxHp: 11, ac: 12, stats: { str: 12, dex: 12, con: 13, int: 4, wis: 8, cha: 3 }, image: Needle },
    { id: 21, name: "Ogre", hp: 59, maxHp: 59, ac: 11, stats: { str: 19, dex: 8, con: 16, int: 5, wis: 77, cha: 7 }, image: Ogre },
    { id: 22, name: "Orc", hp: 15, maxHp: 15, ac: 13, stats: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 }, image: Orc },
    { id: 23, name: "Riding Horse", hp: 13, maxHp: 13, ac: 10, stats: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7 }, image: Horse },
    { id: 24, name: "Rock Gnome", hp: 7, maxHp: 7, ac: 10, stats: { str: 6, dex: 11, con: 10, int: 15, wis: 10, cha: 13 }, image: Gnomo },
    { id: 25, name: "Stirge", hp: 2, maxHp: 2, ac: 14, stats: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 }, image: Stirge },
    { id: 26, name: "Twig Blight", hp: 4, maxHp: 4, ac: 13, stats: { str: 6, dex: 13, con: 12, int: 4, wis: 11, cha: 12 }, image: Twig },
    { id: 27, name: "Veteran", hp: 58, maxHp: 58, ac: 17, stats: { str: 16, dex: 13, con: 114, int: 10, wis: 11, cha: 10 }, image: Veteran },
    { id: 28, name: "Vine Blight", hp: 26, maxHp: 26, ac: 12, stats: { str: 15, dex: 8, con: 14, int: 6, wis: 10, cha: 3 }, image: Vine },
    { id: 29, name: "Wererat", hp: 33, maxHp: 33, ac: 12, stats: { str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8 }, image: WereRat },
    { id: 30, name: "Will-o-Wisp", hp: 22, maxHp: 22, ac: 19, stats: { str: 1, dex: 28, con: 10, int: 13, wis: 14, cha: 11 }, image: WilloWisp },
    { id: 31, name: "Orc Comander", hp: 56, maxHp: 56, ac: 19, stats: { str: 18, dex: 14, con: 16, int: 7, wis: 11, cha: 10 },image: OrcComander },
    { id: 32, name: "Ice Orc", hp: 40, maxHp: 40, ac: 17, stats: { str: 18, dex: 12, con: 18, int: 1, wis: 8, cha: 10 },image: IceOrc},
];