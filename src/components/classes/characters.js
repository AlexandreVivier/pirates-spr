// src/classes/characters.js
class Character {
    constructor(name, currHealth, maxHealth, portrait, skins, availableActions, immunities, biography, description) {
        this.name = name;
        this.currHealth = currHealth;
        this.maxHealth = maxHealth;
        this.portrait = portrait;
        this.skins = skins;
        this.availableActions = availableActions;
        this.immunities = immunities;
        this.biography = biography;
        this.description = description;
    }
}

const barbeBlonde = new Character(
    'Barbe-blonde',
    3,
    3,
    '/images/portraits/barbe-blonde.gif',
    {
        attaquer: '/images/sprites/Barbe-blonde/attack.gif',
        parer: '/images/sprites/Barbe-blonde/block.gif',
        moquer: '/images/sprites/Barbe-blonde/mock.gif',
        idle: '/images/sprites/Barbe-blonde/iddle.gif'
    },
    ['attaquer', 'parer', 'moquer'],
    [],
    'Légendaire capitaine pirate à la barbe aussi dorée que sa fortune. Mais à mesure qu\'il vieillit et grisonne, sa trésorerie se tarit, ce qui ne fait qu\'aggraver sa cupidité...',
    // 'Barbe-blonde gagne le double de pièces d\'or si il gagne un combat.'
    'Barbe-blonde n\'a pas de capacité spéciale pour l\'instant.'
);

const jungleJane = new Character(
    'Jungle Jane',
    2,
    2,
    '/images/portraits/jungle_jane.gif',
    {
        'attaquer*': '/images/sprites/JungleJane/attack.gif',
        parer: '/images/sprites/JungleJane/block.gif',
        moquer: '/images/sprites/JungleJane/mock.gif',
        idle: '/images/sprites/JungleJane/iddle.gif'
    },
    ['attaquer*', 'parer', 'moquer'],
    [],
    'Exploratrice intrépide, Jungle Jane a parcouru toutes les jungles les plus dangereuses des Caraïbes avant de se lancer dans la piraterie. La navigation est encore un mystère pour elle, mais les coups de machete, ça lui connait !',
    'Jungle Jane fait perdre 2 points de vie quand elle \'attaque\' et touche.'
);

const jackMarrow = new Character(
    'Jack Marrow',
    2,
    2,
    '/images/portraits/jack_marrow.gif',
    {
        attaquer: '/images/sprites/JackMarrow/attack.gif',
        parer: '/images/sprites/JackMarrow/block.gif',
        moquer: '/images/sprites/JackMarrow/mock.gif',
        idle: '/images/sprites/JackMarrow/iddle.gif'
    },
    ['attaquer', 'parer', 'moquer'],
    ['moquer', 'moquer*'],
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
    ['attaquer', 'parer', 'moquer'],
    [],
    'Corsaire à la malchance improbable, il peut cependant compter sur une endurance hors du commun pour survivre aux pires situations.',
    'François de Surcoup possède 5 points de vie au lieu de 3.'
);

const esperanzaPolvora = new Character(
    'Esperanza Pólvora y Hacha',
    2,
    2,
    '/images/portraits/esperanza_polvora.gif',
    {
        attaquer: '/images/sprites/EsperanzaPolvora/attack.gif',
        parer: '/images/sprites/EsperanzaPolvora/block.gif',
        moquer: '/images/sprites/EsperanzaPolvora/mock.gif',
        idle: '/images/sprites/EsperanzaPolvora/iddle.gif',
        menacer: '/images/sprites/EsperanzaPolvora/threat.gif'
    },
    ['attaquer', 'parer', 'moquer', 'menacer'],
    [],
    'Indécise entre la hache et la poudre, Esperanza est tout aussi suceptible de vous envoyer les deux à la fois ! Et suceptible tout court, d\'ailleurs...',
    'Esperanza Pólvora y Hacha peut "menacer", ce qui bat la "moquerie" et "parer".'
);

export {
    Character,
    barbeBlonde,
    jungleJane,
    jackMarrow,
    francoisDeSurcoup,
    esperanzaPolvora
};
