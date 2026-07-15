export const categories = [
  { id: 'all', label: 'Toutes', color: '#4A4A4A' },
  { id: 'introspection', label: 'Introspection', color: '#1D9E75' },
  { id: 'motivation', label: 'Motivation', color: '#E07B39' },
  { id: 'relation', label: 'Relation', color: '#7B61FF' },
  { id: 'mental', label: 'Mental', color: '#E04040' },
  { id: 'reves', label: 'Reves', color: '#2B7BC8' },
  { id: 'erotique', label: 'Erotique', color: '#C2185B' },
]

// Levels: 'douce' | 'medium' | 'profonde'
export const questions = [

  // ── AUTHENTIQUES (tirées du podcast et jeu Together is enough) ──

  { id: 101, cat: 'introspection', level: 'douce',
    text: "Qu'est-ce qui te rend heureuse ?" },

  { id: 102, cat: 'introspection', level: 'douce',
    text: "Je me sens libre quand..." },

  { id: 103, cat: 'introspection', level: 'douce',
    text: "Que voudrais-tu ameliorer chez toi ?" },

  { id: 104, cat: 'introspection', level: 'douce',
    text: "Cite une de tes qualites dont tu es particulierement fier(e) ?" },

  { id: 105, cat: 'introspection', level: 'douce',
    text: "Comment reconnais-tu que tu es sur le bon chemin ?" },

  { id: 106, cat: 'introspection', level: 'douce',
    text: "Si tu devais te presenter a un groupe d'inconnus, quelle description ferais-tu de toi ?" },

  { id: 107, cat: 'introspection', level: 'medium',
    text: "As-tu des situations qui se sont repetees plusieurs fois dans ta vie ?" },

  { id: 108, cat: 'introspection', level: 'medium',
    text: "Si tu pouvais effacer une erreur, quelle serait-elle ?" },

  { id: 109, cat: 'introspection', level: 'medium',
    text: "Si tu devais choisir un seul mot pour decrire ton parcours, lequel serait-il ?" },

  { id: 110, cat: 'introspection', level: 'profonde',
    text: "Qu'est-ce qui peut te mettre de mauvaise humeur ?" },

  { id: 111, cat: 'introspection', level: 'profonde',
    text: "Qu'as-tu du mal a pardonner ? Et pourquoi ?" },

  { id: 112, cat: 'introspection', level: 'profonde',
    text: "Que pourrait etre, un jour, ton plus grand regret ?" },

  { id: 113, cat: 'relation', level: 'douce',
    text: "Cite un mot que chaque personne qui se trouve autour de toi t'inspire." },

  { id: 114, cat: 'relation', level: 'douce',
    text: "Comment exprimes-tu ta gratitude envers les autres et envers toi-meme ?" },

  { id: 115, cat: 'relation', level: 'douce',
    text: "Si tu devais recevoir un calin d'une personne de ton choix, qui choisirais-tu et pourquoi ?" },

  { id: 116, cat: 'relation', level: 'medium',
    text: "Comment se sentent les gens en ta presence ? Cite trois sensations." },

  { id: 117, cat: 'relation', level: 'medium',
    text: "Qu'est-ce qui peut etre redhibitoire chez quelqu'un ?" },

  { id: 118, cat: 'relation', level: 'medium',
    text: "Que signifie l'amour pour toi ?" },

  { id: 119, cat: 'relation', level: 'profonde',
    text: "Qu'aimerais-tu dire, mais n'oses pas ?" },

  { id: 120, cat: 'relation', level: 'profonde',
    text: "Si tu devais remplir un vase d'amour, tu le deposerais ou ?" },

  { id: 121, cat: 'relation', level: 'profonde',
    text: "Decris ton oppose en trois mots." },

  { id: 122, cat: 'mental', level: 'douce',
    text: "Que fais-tu pour prendre soin de toi ?" },

  { id: 123, cat: 'mental', level: 'medium',
    text: "Comment reagis-tu face a l'imprevu, et qu'as-tu appris de ces moments ?" },

  { id: 124, cat: 'mental', level: 'profonde',
    text: "Quel est le plus grand risque que tu aies pris ?" },

  { id: 125, cat: 'reves', level: 'douce',
    text: "Quels sont les trois plus grands cadeaux que la vie t'a offerts ?" },

  { id: 126, cat: 'reves', level: 'medium',
    text: "Si tu devais faire un voeu que nous avons tous le droit d'ecouter, que serait-il ?" },

  { id: 127, cat: 'reves', level: 'medium',
    text: "Si tu pouvais effacer toutes les distractions, a quoi consacrerais-tu ton temps ?" },

  { id: 128, cat: 'reves', level: 'profonde',
    text: "Qu'aimerais-tu laisser de toi sur cette terre ?" },

  // ── COACHING (questions contextuelles sport & coach) ──

  { id: 1, cat: 'introspection', level: 'medium',
    text: "Si le sport disparaissait demain, qui serais-tu ?" },

  { id: 2, cat: 'introspection', level: 'medium',
    text: "Qu'est-ce que ton corps essaie de te dire quand tu es blesse(e) ?" },

  { id: 3, cat: 'introspection', level: 'profonde',
    text: "Qu'est-ce que le sport t'a appris sur toi-meme que rien d'autre n'aurait pu t'enseigner ?" },

  { id: 4, cat: 'introspection', level: 'profonde',
    text: "Quelle partie de ton jeu ou de ton entrainement gardes-tu secrete, meme de toi-meme ?" },

  { id: 5, cat: 'introspection', level: 'medium',
    text: "Si tu pouvais remonter dans le temps, que dirais-tu au sportif que tu etais a 15 ans ?" },

  { id: 6, cat: 'introspection', level: 'profonde',
    text: "Qu'est-ce que la defaite t'a appris que la victoire ne t'aurait jamais enseigne ?" },

  { id: 7, cat: 'introspection', level: 'douce',
    text: "A quel moment as-tu compris que tu etais vraiment un(e) sportif(ve) ?" },

  { id: 8, cat: 'introspection', level: 'medium',
    text: "Qu'est-ce que tu fais encore par habitude, mais qui ne te ressemble plus vraiment ?" },

  { id: 9, cat: 'motivation', level: 'douce',
    text: "Le matin ou tu n'as vraiment pas envie — qu'est-ce qui te fait quand meme enfiler tes chaussures ?" },

  { id: 10, cat: 'motivation', level: 'douce',
    text: "Pour qui ou pour quoi est-ce que tu te surpasses reellement ?" },

  { id: 11, cat: 'motivation', level: 'douce',
    text: "Quelle est la victoire qui t'a donne le plus d'energie — pas forcement la plus grande ?" },

  { id: 12, cat: 'motivation', level: 'medium',
    text: "Y a-t-il un moment dans ta vie ou tu t'es dit que c'etait pour ca que tu faisais ca ? Lequel ?" },

  { id: 13, cat: 'motivation', level: 'medium',
    text: "Qu'est-ce qui te manque pour etre pleinement en paix avec ta performance actuelle ?" },

  { id: 14, cat: 'motivation', level: 'profonde',
    text: "Si tu n'avais plus rien a prouver a personne, est-ce que tu continuerais a t'entrainer de la meme facon ?" },

  { id: 15, cat: 'motivation', level: 'medium',
    text: "Quel obstacle, si tu le surmontais, changerait tout pour toi ?" },

  { id: 16, cat: 'motivation', level: 'douce',
    text: "Quand as-tu ressenti pour la derniere fois que l'effort en valait vraiment la peine ?" },

  { id: 17, cat: 'relation', level: 'profonde',
    text: "Quelle est la chose que tu n'as jamais ose dire a ton coach, mais qui t'occupe l'esprit ?" },

  { id: 18, cat: 'relation', level: 'medium',
    text: "Y a-t-il quelqu'un qui croit en toi plus que tu ne crois en toi-meme en ce moment ?" },

  { id: 19, cat: 'relation', level: 'profonde',
    text: "Qu'est-ce que tu attends d'un coach que tu n'as encore jamais vraiment obtenu ?" },

  { id: 20, cat: 'relation', level: 'medium',
    text: "Comment sais-tu que tu peux faire confiance a quelqu'un dans le sport ?" },

  { id: 21, cat: 'relation', level: 'douce',
    text: "Quel retour t'a marque pour toujours — positif ou negatif ?" },

  { id: 22, cat: 'relation', level: 'medium',
    text: "Est-ce que tu te sens vu(e) pour qui tu es vraiment, pas seulement pour tes resultats ?" },

  { id: 23, cat: 'relation', level: 'douce',
    text: "Si tu devais decrire la relation ideale avec un coach en trois mots, lesquels choisirais-tu ?" },

  { id: 24, cat: 'relation', level: 'douce',
    text: "Quelle victoire autre que sportive es-tu le/la plus fier(e) d'avoir remportee ?" },

  { id: 25, cat: 'mental', level: 'profonde',
    text: "Quelle est la peur que tu n'as jamais avoue a haute voix dans le sport ?" },

  { id: 26, cat: 'mental', level: 'medium',
    text: "Qu'est-ce qui se passe dans ta tete dans les 30 secondes avant une competition ?" },

  { id: 27, cat: 'mental', level: 'medium',
    text: "Comment geres-tu le silence apres une mauvaise performance ?" },

  { id: 28, cat: 'mental', level: 'profonde',
    text: "Est-ce que tu te parles a toi-meme autrement qu'a un(e) coequipier(e) en difficulte ?" },

  { id: 29, cat: 'mental', level: 'medium',
    text: "Quelle pensee revient systematiquement au mauvais moment ?" },

  { id: 30, cat: 'mental', level: 'profonde',
    text: "A quel moment as-tu abandonne quelque chose — et est-ce que tu en es en paix ?" },

  { id: 31, cat: 'mental', level: 'medium',
    text: "Qu'est-ce que tu ferais differemment si tu savais que personne ne te regarde ?" },

  { id: 32, cat: 'mental', level: 'profonde',
    text: "Quelle est la chose qui te coute le plus d'energie mentale — et qui n'est pas physique ?" },

  { id: 33, cat: 'reves', level: 'medium',
    text: "Si tu ne pouvais plus echouer, quel objectif tu viserais demain matin ?" },

  { id: 34, cat: 'reves', level: 'profonde',
    text: "Dans 10 ans, qu'est-ce que tu veux que les gens disent de toi — pas de tes performances ?" },

  { id: 35, cat: 'reves', level: 'profonde',
    text: "Quel est le reve sportif que tu n'oses pas formuler a voix haute ?" },

  { id: 36, cat: 'reves', level: 'profonde',
    text: "Qu'est-ce qui serait possible si tu te donnais vraiment la permission d'y croire ?" },

  { id: 37, cat: 'reves', level: 'medium',
    text: "Quand as-tu eu l'impression d'entrevoir ce que tu pourrais vraiment devenir ?" },

  { id: 38, cat: 'reves', level: 'profonde',
    text: "Quelle version de toi-meme n'a pas encore eu le droit d'exister ?" },

  // ── EROTIQUE ──
  // Inspires de Jouissance Club, mylubie, "a nu." — vision bienveillante et feminine

  // — Douce —
  { id: 201, cat: 'erotique', level: 'douce',
    text: "Quel est le compliment sur ton corps qui t'a fait le plus d'effet ?" },

  { id: 202, cat: 'erotique', level: 'douce',
    text: "A quel moment tu te sens le plus desirable — pas sexuellement, juste dans ta peau ?" },

  { id: 203, cat: 'erotique', level: 'douce',
    text: "Qu'est-ce qui te donne envie de quelqu'un avant meme de le toucher ?" },

  { id: 204, cat: 'erotique', level: 'douce',
    text: "Quelle partie de ton corps tu aimes le plus qu'on remarque ?" },

  { id: 205, cat: 'erotique', level: 'douce',
    text: "Qu'est-ce que tu aimes ressentir juste avant un moment intime — cette attente, ce frisson ?" },

  { id: 206, cat: 'erotique', level: 'douce',
    text: "Quelle caresse te fait frissonner au point de tout oublier ?" },

  { id: 207, cat: 'erotique', level: 'douce',
    text: "Tu preferes les preliminaires lents qui s'etirent, ou la tension qui monte d'un coup ?" },

  { id: 208, cat: 'erotique', level: 'douce',
    text: "Peux-tu decrire notre intimite en trois mots ?" },

  { id: 209, cat: 'erotique', level: 'douce',
    text: "Lequel de tes sens compte le plus dans un moment intime — le toucher, la vue, l'ouie, l'odorat ?" },

  // — Medium —
  { id: 210, cat: 'erotique', level: 'medium',
    text: "Quelle est la chose que tu voudrais qu'on te fasse, mais que tu n'as jamais osé demander ?" },

  { id: 211, cat: 'erotique', level: 'medium',
    text: "Qu'est-ce qui reveille ton desir quand tu t'y attends le moins ?" },

  { id: 212, cat: 'erotique', level: 'medium',
    text: "Comment tu signales ton desir — et est-ce qu'on le remarque vraiment ?" },

  { id: 213, cat: 'erotique', level: 'medium',
    text: "Quelle difference y a-t-il entre ce que tu montres et ce que tu ressens vraiment dans l'intimite ?" },

  { id: 214, cat: 'erotique', level: 'medium',
    text: "Quel souvenir intime revient te hanter — dans le bon sens du terme ?" },

  { id: 215, cat: 'erotique', level: 'medium',
    text: "Y a-t-il un endroit sur ton corps que tu n'as jamais montre ou propose, mais qui t'attire ?" },

  { id: 216, cat: 'erotique', level: 'medium',
    text: "Qu'est-ce qui te met dans un etat ou tu ne penses plus a rien d'autre ?" },

  { id: 217, cat: 'erotique', level: 'medium',
    text: "Est-ce qu'il t'arrive de ressentir du desir sans savoir vraiment d'ou il vient ?" },

  { id: 218, cat: 'erotique', level: 'medium',
    text: "Quel fantasme aimerais-tu realiser — meme si tu ne l'as jamais dit a voix haute ?" },

  { id: 219, cat: 'erotique', level: 'medium',
    text: "As-tu deja ete surpris(e) par la force de ton propre plaisir — au point de ne pas le reconnaitre ?" },

  { id: 220, cat: 'erotique', level: 'medium',
    text: "Si tu pouvais choisir n'importe quel endroit pour un moment intime, lequel serait-il ?" },

  // — Profonde —
  { id: 221, cat: 'erotique', level: 'profonde',
    text: "Qu'est-ce que le desir t'a appris sur toi que tu n'aurais pas voulu savoir ?" },

  { id: 222, cat: 'erotique', level: 'profonde',
    text: "A quel moment tu t'es sentie le plus vulnerable dans l'intimite — et qu'est-ce que ca t'a fait ?" },

  { id: 223, cat: 'erotique', level: 'profonde',
    text: "Y a-t-il une limite que tu as franchie et qui t'a surprise(e) toi-meme ?" },

  { id: 224, cat: 'erotique', level: 'profonde',
    text: "Est-ce que tu te donnes vraiment la permission de recevoir du plaisir — sans penser a ce que tu donnes en retour ?" },

  { id: 225, cat: 'erotique', level: 'profonde',
    text: "Qu'est-ce que le regard de l'autre change dans ton rapport a ton propre corps ?" },

  { id: 226, cat: 'erotique', level: 'profonde',
    text: "Si ton desir pouvait parler, qu'est-ce qu'il dirait de toi que tu ne veux pas entendre ?" },

  { id: 227, cat: 'erotique', level: 'profonde',
    text: "Qu'est-ce que tu n'as pas encore ose dire sur ce que tu veux vraiment ?" },

  { id: 228, cat: 'erotique', level: 'profonde',
    text: "Est-ce que tu as deja fait semblant — et qu'est-ce que ca dit de ce dont tu avais besoin ce soir-la ?" },

  { id: 229, cat: 'erotique', level: 'profonde',
    text: "Quelle version de toi dans l'intimite n'a pas encore eu le droit d'exister ?" },

  { id: 230, cat: 'erotique', level: 'profonde',
    text: "Qu'est-ce que le plaisir represente pour toi au fond — une connexion, une liberte, un oubli de soi ?" },

  { id: 231, cat: 'erotique', level: 'medium',
    text: "C'est quoi ton fantasme prefere en trois mots ?" },

  { id: 232, cat: 'erotique', level: 'douce',
    text: "C'etait quoi ta premiere pensee coquine a mon sujet ?" },

  { id: 233, cat: 'erotique', level: 'profonde',
    text: "Si on avait une nuit sans aucune limite, tu ferais quoi ?" },

  { id: 234, cat: 'erotique', level: 'douce',
    text: "Qu'est-ce que tu as toujours voulu porter rien que pour moi ?" },
]
