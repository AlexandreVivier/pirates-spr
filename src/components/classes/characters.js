// src/classes/characters.js
class Character {
    constructor(name, currHealth, maxHealth, portrait, skins, abilities, biography, description) {
        this.name = name;
        this.currHealth = currHealth;
        this.maxHealth = maxHealth;
        this.portrait = portrait;
        this.skins = skins;
        this.abilities = abilities;
        this.biography = biography;
        this.description = description;
    }
}

const vanNistelrouye = new Character(
    'Van Nistelrouye',
    3,
    3,
    '/images/portraits/van_nistelrouye.gif',
    {
        attaquer: '/images/sprites/VanNistelrouye/attack.gif',
        parer: '/images/sprites/VanNistelrouye/block.gif',
        moquer: '/images/sprites/VanNistelrouye/mock.gif',
        idle: '/images/sprites/VanNistelrouye/iddle.gif'
    },
    ['Attack', 'Block', 'Mock'],
    'Attaquant opportuniste, précis et ayant le sens du but, sa capacité de frappe et ses talents de finisseurs en font un pirate redoutable.',
    'Van Nistelrouye gagne le double de pièces d\'or si il gagne un combat.'
);

const jungleJane = new Character(
    'Jungle Jane',
    3,
    3,
    '/images/portraits/jungle_jane.gif',
    {
        attaquer: '/images/sprites/JungleJane/attack.gif',
        parer: '/images/sprites/JungleJane/block.gif',
        moquer: '/images/sprites/JungleJane/mock.gif',
        idle: '/images/sprites/JungleJane/iddle.gif'
    },
    ['Attack', 'Block', 'Mock'],
    'Exploratrice intrépide, Jungle Jane a parcouru toutes les jungles les plus dangereuses des Caraïbes avant de se lancer dans la piraterie. La navigation est encore un mystère pour elle, mais les coups de machete, ça lui connait !',
    'Jungle Jane fait perdre 2 points de vie quand elle \'attaque\' et touche.'
);

const jackMarrow = new Character(
    'Jack Marrow',
    3,
    3,
    '/images/portraits/jack_marrow.gif',
    {
        attaquer: '/images/sprites/JackMarrow/attack.gif',
        parer: '/images/sprites/JackMarrow/block.gif',
        moquer: '/images/sprites/JackMarrow/mock.gif',
        idle: '/images/sprites/JackMarrow/iddle.gif'
    },
    ['Attack', 'Block', 'Mock'],
    'Pirate des temps jadis ou les consignes de sécurité à bord n\'étaient pas encore écrites, un coup de canon lui a fait perdre l\'audition. Depuis, il n\'entend pas s\'arrêter d\'écumer les océans et de graver sa légende.',
    'Jack Marrow est insensible à la \'moquerie\' adverse.'
);

const francoisDeSurcoup = new Character(
    'François de Surcoup',
    5,
    5,
    '/images/portraits/francois_de_surcoup.gif',
    {
        attaquer: '/images/sprites/FrancoisDeSurcoup/attack.gif',
        parer: '/images/sprites/FrancoisDeSurcoup/block.gif',
        moquer: '/images/sprites/FrancoisDeSurcoup/mock.gif',
        idle: '/images/sprites/FrancoisDeSurcoup/iddle.gif'
    },
    ['Attack', 'Block', 'Mock'],
    'Noble déchu du vieux continent, François de Surcoup a toujours le verbe aussi haut, la frappe aussi assûrée et le style le plus français des Caraïbes.',
    'François de Surcoup possède 5 points de vie au lieu de 3.'
);

export {
    Character,
    vanNistelrouye,
    jungleJane,
    jackMarrow,
    francoisDeSurcoup
};
