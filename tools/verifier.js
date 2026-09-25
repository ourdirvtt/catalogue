#!/usr/bin/env node
// Ourdir catalogue verifier 0.1.0. (c) Ourdir. Usage limited to the Ourdir catalogue: see LICENSE next to this file.
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// apps/desktop/i18n/fr.json
var require_fr = __commonJS({
  "apps/desktop/i18n/fr.json"(exports2, module2) {
    module2.exports = {
      "app.lang": "fr",
      "app.name": "Ourdir",
      "app.quit": "Quitter",
      "builder.affichageEntreeEstVide": "L\u2019affichage d\u2019une entr\xE9e est vide : les entr\xE9es appara\xEEtront sans contenu.",
      "builder.afficherTotalCote": "Afficher le total \xE0 c\xF4t\xE9",
      "builder.afficherValeurMax": "Afficher \xAB valeur / max \xBB",
      "builder.ajouteMoinsOnglet": "Ajoute au moins un onglet.",
      "builder.ajouteMoinsOption": "Ajoute au moins une option.",
      "builder.alignementInvalide": "Alignement invalide.",
      "builder.alignementNombre": "Alignement du nombre",
      "builder.aucune": "Aucune",
      "builder.badSize": "Taille de fiche invalide (300\u20131600 \xD7 200\u20131600).",
      "builder.caracteristiques": "Caract\xE9ristiques",
      "builder.carte": "Carte",
      "builder.caseCocher": "Case \xE0 cocher",
      "builder.cellulesJaugeVont0": "Les cellules d\u2019une jauge vont de 0 \xE0 40.",
      "builder.centre": "Centr\xE9",
      "builder.cetteFicheNPas": "Cette fiche n\u2019a pas de vue principale.",
      "builder.champ": "Champ",
      "builder.champEffetDoitEtre": "Le champ de l\u2019effet doit \xEAtre un champ.",
      "builder.champTexte": "Champ texte",
      "builder.chiffreCle": "Chiffre cl\xE9",
      "builder.cleOngletInvalide": "Cl\xE9 d\u2019onglet invalide.",
      "builder.cleOptionInvalide": "Cl\xE9 d\u2019option invalide.",
      "builder.cleSeriePastillesEst": "La cl\xE9 d\u2019une s\xE9rie de pastilles est limit\xE9e \xE0 12 caract\xE8res (elle sert \xE0 nommer chaque pastille).",
      "builder.cliquableLanceJet": "Cliquable (lance un jet)",
      "builder.cliquableSansJetClic": "Cliquable sans jet : le clic ne fera rien.",
      "builder.colonneParCaracteristiqueNom": "Une colonne par caract\xE9ristique : nom cliquable qui lance un jet, valeur, modificateur calcul\xE9.",
      "builder.colonneSePlaceDans": "Une colonne se place dans une ligne.",
      "builder.colonnesSepareesParVirgules": "Colonnes (s\xE9par\xE9es par des virgules)",
      "builder.columns.overflow": "Les colonnes de cette ligne font {total}/12 : elles passeront \xE0 la ligne.",
      "builder.commentJetGagne": "Comment le jet gagne",
      "builder.competences": "Comp\xE9tences",
      "builder.content.unreadable": "Contenu de la fiche illisible.",
      "builder.contenuOngletIllisible": "Contenu d\u2019onglet illisible.",
      "builder.context.noName": "\xAB # \xBB sans nom.",
      "builder.context.notField": "\xAB #{name} \xBB n\u2019est pas un champ du formulaire de cette liste.",
      "builder.context.readOnly": "\xAB #{name} \xBB ne s\u2019utilise que dans l\u2019affichage d\u2019une entr\xE9e de liste r\xE9p\xE9table.",
      "builder.defenseCompareeDoitEtre": "La d\xE9fense compar\xE9e doit \xEAtre un champ.",
      "builder.degats": "D\xE9g\xE2ts",
      "builder.depenseRessourceChaqueClic": "D\xE9pense une ressource \xE0 chaque clic (un champ nombre)",
      "builder.depenseRessourceNEst": "La d\xE9pense d\u2019une ressource n\u2019est possible que hors d\u2019une liste r\xE9p\xE9table.",
      "builder.depenserRessourceDemandeTexte": "D\xE9penser une ressource demande un texte cliquable avec un jet.",
      "builder.dispositionEntrees": "Disposition des entr\xE9es",
      "builder.dispositionInvalide": "Disposition invalide.",
      "builder.donneJaugeChampMaximum": "Donne \xE0 la jauge un champ maximum ou un maximum fixe (1 \xE0 9999).",
      "builder.donneNomMoins2": "Donne un nom d\u2019au moins 2 caract\xE8res au syst\xE8me.",
      "builder.droite": "\xC0 droite",
      "builder.duel.notNumber": "La d\xE9fense compar\xE9e doit \xEAtre un champ nombre de la fiche, hors d\u2019une liste (\xAB {field} \xBB n\u2019en est pas un). La cible a la m\xEAme fiche : elle doit avoir ce champ.",
      "builder.duelComparerJetCe": "Duel : comparer le jet \xE0 ce champ de la cible (une d\xE9fense)",
      "builder.duelDemandeTexteCliquable": "Un duel demande un texte cliquable avec un jet.",
      "builder.duelNEstPossible": "Un duel n\u2019est possible que hors d\u2019une liste r\xE9p\xE9table.",
      "builder.effect.breaks": "Un effet rend un calcul invalide : {why}",
      "builder.effect.notComputed": "Un effet s\u2019ajoute \xE0 un champ nombre calcul\xE9, hors d\u2019une liste (\xAB {field} \xBB n\u2019en est pas un). Rends d\u2019abord ce champ calcul\xE9.",
      "builder.effetNEstPossible": "Un effet n\u2019est possible que hors d\u2019une liste r\xE9p\xE9table.",
      "builder.effetQuandCaseEst": "Effet : quand la case est coch\xE9e, ajoute \xE0 ce champ calcul\xE9",
      "builder.entreesCoteCote": "Entr\xE9es c\xF4te \xE0 c\xF4te",
      "builder.entreesSousAutre": "Entr\xE9es l\u2019une sous l\u2019autre",
      "builder.equipement": "\xC9quipement",
      "builder.equipment": "\xC9quipement",
      "builder.forceDexteriteConstitutionIntelligence": "Force, Dext\xE9rit\xE9, Constitution, Intelligence, Sagesse, Charisme",
      "builder.formula": "Formule",
      "builder.formula.emptyRef": "{what} : r\xE9f\xE9rence \xAB @ \xBB sans nom.",
      "builder.formula.emptyVar": "{what} : variable \xAB $ \xBB sans nom.",
      "builder.formula.error": "{what} : {error}",
      "builder.formula.inList": "{what} : \xAB @{id} \xBB est dans une liste r\xE9p\xE9table ; utilise \xAB #{id} \xBB dans l\u2019affichage d\u2019une entr\xE9e.",
      "builder.formula.noRef": "{what} : \xAB @{id} \xBB n\u2019existe pas.",
      "builder.formula.noValue": "{what} : \xAB @{id} \xBB n\u2019a pas de valeur (c\u2019est un {kind}).",
      "builder.formula.noVar": "{what} : la variable \xAB ${id} \xBB n\u2019existe pas.",
      "builder.formulaireEditionCetteListe": "Le formulaire d\u2019\xE9dition de cette liste est vide : on ne pourra rien saisir.",
      "builder.formuleTropLongue": "Formule trop longue.",
      "builder.gauche": "\xC0 gauche",
      "builder.geante": "G\xE9ante",
      "builder.iconeClasseFontAwesome": "Ic\xF4ne (classe Font Awesome)",
      "builder.iconeJet": "Ic\xF4ne de jet",
      "builder.identifiantSystemeInvalideMinuscules": "Identifiant du syst\xE8me invalide : minuscules, chiffres et tirets (2 \xE0 40 caract\xE8res).",
      "builder.identite": "Identit\xE9",
      "builder.ifAttendIfCondition": "\xAB if \xBB attend : if(condition, alors, sinon).",
      "builder.ilFautFichePrincipale": "Il faut une fiche principale.",
      "builder.imbricationTropProfonde": "Imbrication trop profonde.",
      "builder.imported": "Syst\xE8me import\xE9",
      "builder.invalidSystem": "Syst\xE8me invalide : {why}",
      "builder.jaugeNePeutPas": "Une jauge ne peut pas \xEAtre dans une liste r\xE9p\xE9table.",
      "builder.jetContientCaracteresNon": "Le jet contient des caract\xE8res non autoris\xE9s.",
      "builder.jetDoitAtteindreDefense": "Le jet doit atteindre la d\xE9fense (d20 : CA, esquive, parade\u2026)",
      "builder.jetDoitResterSous": "Le jet doit rester sous la valeur (pourcentage)",
      "builder.jetLanceClic": "Jet lanc\xE9 au clic",
      "builder.jetLanceClicEx": "Jet lanc\xE9 au clic (ex. 1d20+@force)",
      "builder.key.invalid": "Cl\xE9 invalide \xAB {id} \xBB : lettres, chiffres et _ (40 max).",
      "builder.key.reserved": "La cl\xE9 \xAB {id} \xBB est r\xE9serv\xE9e \xE0 Ourdir.",
      "builder.key.taken": "Cl\xE9 \xAB {id} \xBB d\xE9j\xE0 prise.",
      "builder.key.twice": "Cl\xE9 \xAB {id} \xBB utilis\xE9e deux fois.",
      "builder.largeurColonneVa1": "La largeur d\u2019une colonne va de 1 \xE0 12.",
      "builder.largeurOngletsVerticauxSur": "Largeur des onglets verticaux (sur 12)",
      "builder.largeurOngletsVerticauxVa": "La largeur des onglets verticaux va de 1 \xE0 11.",
      "builder.largeurSur12": "Largeur (sur 12)",
      "builder.libelle": "Libell\xE9",
      "builder.libelleDeuxiemeChamp": "Libell\xE9 du deuxi\xE8me champ",
      "builder.libelleNiveau": "Libell\xE9 du niveau",
      "builder.libelleOptionVideTrop": "Libell\xE9 d\u2019option vide ou trop long.",
      "builder.ligneCoteCote": "En ligne (c\xF4te \xE0 c\xF4te)",
      "builder.ligneSePlaceDans": "Une ligne se place dans une colonne, un conteneur ou directement dans la fiche.",
      "builder.listeCompetences": "Liste de comp\xE9tences",
      "builder.listeDontTuNommes": "Une liste dont tu nommes les colonnes (jusqu'\xE0 5) : contacts, alli\xE9s, tr\xE9sors, indices\u2026",
      "builder.listeObjetsAvecQuantite": "Liste d'objets avec quantit\xE9 et poids.",
      "builder.listeQueJoueurRemplit": "Liste que le joueur remplit : nom et bonus. Un clic sur une entr\xE9e lance 1d20 + bonus.",
      "builder.listeRepetable": "Liste r\xE9p\xE9table",
      "builder.listeRepetableNePeut": "Une liste r\xE9p\xE9table ne peut pas se placer dans une autre liste r\xE9p\xE9table.",
      "builder.masquerBoutonAjouter": "Masquer le bouton \xAB Ajouter \xBB",
      "builder.maximumChampNombre": "Maximum (un champ nombre)",
      "builder.maximumDepart": "Maximum de d\xE9part",
      "builder.maximumFixe": "\u2026ou un maximum fixe",
      "builder.maximumInvalide": "Maximum invalide.",
      "builder.maximumJaugeDoitEtre": "Le maximum d\u2019une jauge doit \xEAtre un champ nombre de la fiche, hors d\u2019une liste.",
      "builder.metierPapier": "M\xE9tier (papier)",
      "builder.minimumDepasseMaximum": "Le minimum d\xE9passe le maximum.",
      "builder.minimumInvalide": "Minimum invalide.",
      "builder.miseFormeMarkdownGras": "Mise en forme Markdown (**gras**, *italique*, :ic\xF4ne:)",
      "builder.mySystem": "Mon syst\xE8me",
      "builder.nomBonusAttaqueDegats": "Nom, bonus d'attaque et d\xE9g\xE2ts. Un clic lance 1d20 + bonus ; les d\xE9g\xE2ts s'affichent \xE0 c\xF4t\xE9.",
      "builder.nomClasseLigneeProfession": "Nom, classe (ou lign\xE9e, profession...) et niveau sur une ligne.",
      "builder.nomDansBarreRapide": "Nom dans la barre rapide",
      "builder.nomNiveauEffetChaque": "Nom, niveau et effet de chaque sort. Le joueur ajoute ses sorts un par un.",
      "builder.nomOrigineDescriptionChaque": "Nom, origine et description de chaque aptitude, don ou capacit\xE9.",
      "builder.nomRoleAttitude": "Nom, R\xF4le, Attitude",
      "builder.nomVariableInvalide": "Nom de variable invalide.",
      "builder.nombre": "Nombre",
      "builder.nombrePastilles": "Nombre de pastilles",
      "builder.nombrePastillesVa1": "Le nombre de pastilles va de 1 \xE0 20.",
      "builder.nomsSeparesParVirgules": "Noms (s\xE9par\xE9s par des virgules)",
      "builder.ongletsGaucheVerticaux": "Onglets \xE0 gauche (verticaux)",
      "builder.options.duplicate": "Option \xAB {id} \xBB en double.",
      "builder.options.tooMany": "Trop d\u2019options ({max} max).",
      "builder.parDefaut": "Par d\xE9faut",
      "builder.parentheseFermanteAttendue": "Parenth\xE8se fermante attendue.",
      "builder.parse.incomplete": "Formule incompl\xE8te.",
      "builder.parse.openAfter": "Parenth\xE8se ouvrante attendue apr\xE8s \xAB {name} \xBB.",
      "builder.parse.unexpected": "Caract\xE8re inattendu \xAB {char} \xBB.",
      "builder.pastillesCocher": "Pastilles \xE0 cocher",
      "builder.pastillesNePeuventPas": "Les pastilles ne peuvent pas \xEAtre dans une liste r\xE9p\xE9table.",
      "builder.peutEtreGlisseDans": "Peut \xEAtre gliss\xE9 dans la barre rapide",
      "builder.pileSousAutre": "En pile (l\u2019un sous l\u2019autre)",
      "builder.placeInColumn": "\xAB {what} \xBB se place dans une colonne ou un conteneur.",
      "builder.pointsVieManaMunitions": "Points de vie, mana, munitions... : valeur actuelle sur maximum, en gros chiffres.",
      "builder.portraitNePeutPas": "Le portrait ne peut pas \xEAtre dans une liste r\xE9p\xE9table.",
      "builder.prop.tooLong": "\xAB {name} \xBB trop long ({max} caract\xE8res max).",
      "builder.quantite": "Quantit\xE9",
      "builder.quantiteDepensee1Si": "Quantit\xE9 d\xE9pens\xE9e (1 si vide)",
      "builder.quantiteDepenseeDoitEtre": "La quantit\xE9 d\xE9pens\xE9e doit \xEAtre un entier de 1 \xE0 99.",
      "builder.quotesMarkup": "un texte entre guillemets ne peut pas contenir de chevrons ni d\u2019esperluette.",
      "builder.referenceVideDansJet": "R\xE9f\xE9rence vide dans le jet.",
      "builder.regle": "R\xE8gle",
      "builder.reserveMjDoitEtre": "\xAB R\xE9serv\xE9 au MJ \xBB doit \xEAtre oui ou non.",
      "builder.reserveMjJoueursNe": "R\xE9serv\xE9 au MJ : les joueurs ne peuvent pas le modifier",
      "builder.reserveMjNeS": "\xAB R\xE9serv\xE9 au MJ \xBB ne s\u2019applique qu\u2019aux champs que le joueur remplit.",
      "builder.ressourceDepenseeDoitEtre": "La ressource d\xE9pens\xE9e doit \xEAtre un champ.",
      "builder.roll.context": "Le jet : {problem}",
      "builder.roll.inList": "Le jet cite \xAB @{id} \xBB : ce champ est dans une liste r\xE9p\xE9table, utilise \xAB #{id} \xBB dans l\u2019affichage d\u2019une entr\xE9e.",
      "builder.roll.noField": "Le jet cite \xAB @{id} \xBB : ce champ n\u2019existe pas ou n\u2019a pas de valeur.",
      "builder.roll.noVar": "Le jet cite la variable \xAB ${id} \xBB : elle n\u2019existe pas.",
      "builder.rollTooLong": "Jet trop long ({max} max).",
      "builder.sensComparaisonEstInconnu": "Le sens de la comparaison est inconnu.",
      "builder.seulEspaceEstAccepte": "Seul l\u2019espace est accept\xE9 comme s\xE9parateur (pas de tabulation ni de retour \xE0 la ligne).",
      "builder.seulPortraitParFiche": "Un seul portrait par fiche.",
      "builder.seuleFichePrincipaleOnglets": "Une seule fiche principale (les onglets et listes ont leurs propres sous-vues, cr\xE9\xE9es automatiquement).",
      "builder.skills": "Comp\xE9tences",
      "builder.skin.badId": "{label} : identifiant invalide (minuscules, chiffres et _, 24 au plus).",
      "builder.skin.badName": "{label} : nom vide ou trop long (40 caract\xE8res au plus).",
      "builder.skin.duplicate": "Skin \xAB {id} \xBB en double.",
      "builder.skin.tooMany": "Trop de skins ({max} au plus).",
      "builder.spend.notNumber": "La ressource d\xE9pens\xE9e doit \xEAtre un champ nombre saisi, hors d\u2019une liste (\xAB {field} \xBB n\u2019en est pas un).",
      "builder.stressBlessuresEchecsMort": "Stress, blessures, \xE9checs de mort... : une s\xE9rie de pastilles dont on coche le nombre voulu.",
      "builder.style.unknown": "Style inconnu \xAB {name} \xBB.",
      "builder.tabNoTable": "Tab (sans table d\u2019onglets)",
      "builder.table.notFound": "Table \xAB {id} \xBB introuvable.",
      "builder.tabs.duplicate": "Onglet \xAB {id} \xBB en double.",
      "builder.tabs.tooMany": "Trop d\u2019onglets ({max} max).",
      "builder.tailleTexteInconnue": "Taille de texte inconnue.",
      "builder.textTooLong": "Texte trop long ({max} max).",
      "builder.texte": "Texte",
      "builder.texteCote": "Texte \xE0 c\xF4t\xE9",
      "builder.texteFormuleSiCalcule": "Texte (ou formule si calcul\xE9)",
      "builder.titreGrandeZoneTexte": "Un titre et une grande zone de texte.",
      "builder.titreJet": "Titre du jet",
      "builder.titreOngletVideTrop": "Titre d\u2019onglet vide ou trop long.",
      "builder.tooManyNodes": "Trop d\u2019\xE9l\xE9ments ({max} max).",
      "builder.toutesOptionsVisibles": "Toutes les options visibles",
      "builder.unknownBlock": "Bloc inconnu : {id}",
      "builder.unknownComponent": "Composant inconnu : {name}",
      "builder.unsupported": "Cette fiche utilise des \xE9l\xE9ments que l\u2019\xE9diteur ne g\xE8re pas encore : {list}.",
      "builder.valeurAjouteeNombreFormule": "Valeur ajout\xE9e (un nombre, ou une formule comme @niveau)",
      "builder.valeurCalculee": "Valeur calcul\xE9e",
      "builder.valeurChampNombre": "Valeur (un champ nombre)",
      "builder.valeurEffetEstTrop": "La valeur de l\u2019effet est trop longue (120 caract\xE8res au plus).",
      "builder.valeurEstBonusDirectement": "La valeur est le bonus directement, jet 1d20 + valeur",
      "builder.valeurEstPourcentage0": "La valeur est un pourcentage (0 \xE0 100), jet 1d100 \xE0 comparer \xE0 la valeur",
      "builder.valeurJaugeDoitEtre": "La valeur d\u2019une jauge doit \xEAtre un champ nombre de la fiche, hors d\u2019une liste.",
      "builder.valeurParDefaut": "Valeur par d\xE9faut",
      "builder.valeurParDefautDoit": "La valeur par d\xE9faut doit \xEAtre un nombre.",
      "builder.valeurParDefautFormule": "Valeur par d\xE9faut (ou formule si calcul\xE9)",
      "builder.var.duplicate": "Variable \xAB {id} \xBB en double.",
      "builder.var.label": "Variable \xAB {id} \xBB",
      "builder.versionInvalideEx1": "Version invalide (ex. 1.0.0).",
      "builder.warn.rightGroup": "\xAB a {op} b {op2} c \xBB est calcul\xE9 par le jeu comme \xAB a {op} (b {op2} c) \xBB : ajoute des parenth\xE8ses.",
      "builder.zoneTexte": "Zone de texte",
      "builderTheme.adhesif": "Adh\xE9sif",
      "builderTheme.aereEcartEntreCartes": "A\xE9r\xE9 (un \xE9cart entre les cartes)",
      "builderTheme.afficheGrasCondense": "Affiche (gras condens\xE9)",
      "builderTheme.alignementBandeauInvalide": "Alignement du bandeau invalide.",
      "builderTheme.angleDegrade0360": "Angle du d\xE9grad\xE9 : 0 \xE0 360.",
      "builderTheme.assets.badName": "Fichier {name} : nom invalide.",
      "builderTheme.assets.badType": "Fichier {name} : type non accept\xE9 (polices woff2, woff, ttf, otf ; images png, jpeg, webp).",
      "builderTheme.assets.contentMismatch": "Fichier {name} : le contenu ne correspond pas au type annonc\xE9.",
      "builderTheme.assets.duplicate": "Fichier embarqu\xE9 {name} en double.",
      "builderTheme.assets.fontTooBig": "Fichier {name} trop lourd ({max} Ko max pour une police).",
      "builderTheme.assets.imageTooBig": "Fichier {name} trop lourd ({max} Ko max pour une image).",
      "builderTheme.assets.tooMany": "Trop de fichiers embarqu\xE9s ({max} max).",
      "builderTheme.assets.total": "Les fichiers embarqu\xE9s d\xE9passent {max} Mo au total.",
      "builderTheme.assets.typeMismatch": "Fichier {name} : type incoh\xE9rent.",
      "builderTheme.assets.unreadable": "Fichier {name} : contenu illisible.",
      "builderTheme.aucun": "Aucun",
      "builderTheme.aucune": "Aucune",
      "builderTheme.badColor": "Couleur \xAB {name} \xBB invalide (format #rrggbb).",
      "builderTheme.balayageEcran": "Balayage \xE9cran",
      "builderTheme.bandeauTexte": "Bandeau (texte)",
      "builderTheme.cadreInconnu": "Cadre inconnu.",
      "builderTheme.casseTitresInvalide": "Casse des titres invalide.",
      "builderTheme.centre": "Centr\xE9",
      "builderTheme.centreeEntiere": "Centr\xE9e, enti\xE8re",
      "builderTheme.champsTexte": "Champs (texte)",
      "builderTheme.choisisImageFondParmi": "Choisis une image de fond parmi les fichiers embarqu\xE9s.",
      "builderTheme.cibleThemeInconnue": "Cible de th\xE8me inconnue.",
      "builderTheme.couleurMotifInvalide": "Couleur du motif invalide.",
      "builderTheme.courierPrimeMachineEcrire": "Courier Prime (machine \xE0 \xE9crire)",
      "builderTheme.crochetsVisee": "Crochets de vis\xE9e",
      "builderTheme.decalee": "D\xE9cal\xE9e",
      "builderTheme.degrade": "D\xE9grad\xE9",
      "builderTheme.encadre": "Encadr\xE9",
      "builderTheme.enqueteNoirPapier": "Enqu\xEAte (noir, papier)",
      "builderTheme.espacementInconnu": "Espacement inconnu.",
      "builderTheme.fichiersEmbarquesIllisibles": "Fichiers embarqu\xE9s illisibles.",
      "builderTheme.fondFiche": "Fond de la fiche",
      "builderTheme.gauche": "\xC0 gauche",
      "builderTheme.geometrique": "G\xE9om\xE9trique",
      "builderTheme.grimoireMedievalFantasy": "Grimoire (m\xE9di\xE9val fantasy)",
      "builderTheme.hudNeon": "HUD n\xE9on",
      "builderTheme.identifiantFichierEmbarqueInvalide": "Identifiant de fichier embarqu\xE9 invalide.",
      "builderTheme.identifiantSkinInvalide": "Identifiant de skin invalide.",
      "builderTheme.invalid": "Th\xE8me invalide : {why}",
      "builderTheme.machineEcrire": "Machine \xE0 \xE9crire",
      "builderTheme.manuscrite": "Manuscrite",
      "builderTheme.metierPapier": "M\xE9tier (papier)",
      "builderTheme.modeImageFondInconnu": "Mode de l\u2019image de fond inconnu.",
      "builderTheme.moderneSysteme": "Moderne (syst\xE8me)",
      "builderTheme.neonCyberpunk": "N\xE9on (cyberpunk)",
      "builderTheme.nomThemeInvalide": "Nom de th\xE8me invalide.",
      "builderTheme.ombreInconnue": "Ombre inconnue.",
      "builderTheme.ornementTitresInconnu": "Ornement des titres inconnu.",
      "builderTheme.playfairDisplayElegant": "Playfair Display (\xE9l\xE9gant)",
      "builderTheme.pointille": "Pointill\xE9",
      "builderTheme.policeTexteInconnue": "Police du texte inconnue.",
      "builderTheme.policeTitresInconnue": "Police des titres inconnue.",
      "builderTheme.range.borderWidth": "\xC9paisseur de bordure : {min} \xE0 {max} px.",
      "builderTheme.range.chamfer": "Coins coup\xE9s : {min} \xE0 {max} px.",
      "builderTheme.range.fontSize": "Taille de texte : {min} \xE0 {max} px.",
      "builderTheme.range.patternOpacity": "Opacit\xE9 du motif : {min} \xE0 {max} %.",
      "builderTheme.range.patternSize": "Taille du motif : {min} \xE0 {max} px.",
      "builderTheme.range.spacing": "Espacement des lettres : {min} \xE0 {max}.",
      "builderTheme.remplitFiche": "Remplit la fiche",
      "builderTheme.repeteeMosaique": "R\xE9p\xE9t\xE9e en mosa\xEFque",
      "builderTheme.secondeCouleurFondInvalide": "Seconde couleur du fond invalide.",
      "builderTheme.serreCartesSeTouchent": "Serr\xE9 (les cartes se touchent)",
      "builderTheme.specialEliteMachineUsee": "Special Elite (machine us\xE9e)",
      "builderTheme.styleBandeauInconnu": "Style de bandeau inconnu.",
      "builderTheme.styleBlocsStatInconnu": "Style des blocs de stat inconnu.",
      "builderTheme.styleBordureInconnu": "Style de bordure inconnu.",
      "builderTheme.styleChampsInconnu": "Style des champs inconnu.",
      "builderTheme.styleEtiquetteJetInconnu": "Style d\u2019\xE9tiquette de jet inconnu.",
      "builderTheme.styleJaugeInconnu": "Style de jauge inconnu.",
      "builderTheme.texte": "Texte",
      "builderTheme.texteDiscret": "Texte discret",
      "builderTheme.themeIllisible": "Th\xE8me illisible.",
      "builderTheme.typeFondInconnu": "Type de fond inconnu.",
      "builderTheme.valeursCalculees": "Valeurs calcul\xE9es",
      "dialog.firewall.failed": "Le pare-feu Windows n\u2019a pas pu \xEAtre mis \xE0 jour. Accepte l\u2019invite administrateur (UAC) et r\xE9essaie.",
      "dialog.friends.added": "{name} a \xE9t\xE9 ajout\xE9 \xE0 tes amis.",
      "dialog.friends.copied": "Ton code d\u2019ami est copi\xE9. Envoie-le \xE0 la personne de ton choix (Discord, SMS\u2026).",
      "dialog.hostFailed.title": "Le host n\u2019a pas d\xE9marr\xE9",
      "dialog.internet.cancel": "Annuler",
      "dialog.internet.confirm": "Ouvrir sur Internet",
      "dialog.internet.detail": "Le port sera joignable depuis Internet. Seules les cl\xE9s que tu invites peuvent se connecter et tout le trafic est chiffr\xE9 (TLS, certificat \xE9pingl\xE9 dans l\u2019invitation) : le host ne r\xE9pond \xE0 personne d\u2019autre. Ta box doit rediriger le port, ou ton IPv6 doit \xEAtre joignable.",
      "dialog.internet.message": "Ouvrir le port \xE0 tout Internet ?",
      "dialog.internet.title": "Exposer la table sur Internet",
      "dialog.invite.copied": "Invitation pour {name} copi\xE9e",
      "dialog.invite.detail": "Elle est chiffr\xE9e pour {name} seul : envoie-la par le canal de ton choix (Discord, SMS\u2026). Personne d\u2019autre ne peut lire l\u2019adresse qu\u2019elle contient. Valable 7 jours.",
      "dialog.invite.localWarning": "Ton acc\xE8s r\xE9seau est r\xE9gl\xE9 sur \xAB Local \xBB : ton ami ne pourra pas te joindre. Change-le dans Param\xE8tres, puis recr\xE9e l\u2019invitation.",
      "dialog.join.unknownSender": "Cette invitation vient de quelqu\u2019un qui n\u2019est pas dans tes amis. Ajoute son code d\u2019ami (menu Amis) avant de la r\xE9utiliser.",
      "err.bundle.absolute": "chemin absolu (propre \xE0 Foundry)",
      "err.bundle.badType": "Type de fichier non assemblable : {name}.",
      "err.bundle.dynamicImport": "import() dynamique interdit dans un module.",
      "err.bundle.entryMissing": "{entry} : fichier introuvable.",
      "err.bundle.entryOutside": "Point d\u2019entr\xE9e hors du module.",
      "err.bundle.external": "d\xE9pendance externe",
      "err.bundle.fichierIntrouvable": "Fichier introuvable.",
      "err.bundle.fileTooBig": "Fichier trop gros : {name}.",
      "err.bundle.notFound": "Fichier introuvable : \xAB {path} \xBB.",
      "err.bundle.outside": "Import \xAB {path} \xBB hors du dossier du module.",
      "err.bundle.tooBig": "Le module assembl\xE9 d\xE9passe 4 Mo.",
      "err.bundle.tooMany": "Trop de fichiers \xE0 assembler.",
      "err.bundle.unresolved": "Import non r\xE9solu \xAB {path} \xBB : {hint}. Seuls les fichiers du module (chemins relatifs) sont assembl\xE9s.",
      "err.catalog.badPath": "Chemin refus\xE9.",
      "err.catalog.devName": "Catalogue local (d\xE9veloppement)",
      "err.catalog.expired": "Le catalogue en ligne a expir\xE9 : il n\u2019est plus mis \xE0 jour.",
      "err.catalog.indexRefused": "Index refus\xE9 : {why}",
      "err.catalog.noTiers": "Aucun fichier des niveaux : tout est affich\xE9 en Communautaire.",
      "err.catalog.older": "Le catalogue en ligne est plus ancien qu\u2019une version d\xE9j\xE0 vue (retour en arri\xE8re refus\xE9).",
      "err.client.fichierTropVolumineux": "Fichier trop volumineux.",
      "err.compat.canvas": "Le rendu de la carte est diff\xE9rent (Konva). Utilise scene.draw pour des superpositions.",
      "err.compat.chatCommand": "Commandes de chat via chat.command.",
      "err.compat.chatMessage": "Messages simples ; pas de rendu de gabarit personnalis\xE9.",
      "err.compat.config": "Quelques cl\xE9s en lecture seule.",
      "err.compat.dataModel": "Le mod\xE8le de donn\xE9es des fiches est celui du syst\xE8me de jeu.",
      "err.compat.dependency": "d\xE9pendance : {id}",
      "err.compat.dialog": "Bo\xEEtes de dialogue simples.",
      "err.compat.dynamicImport": "Chargement de code \xE0 la vol\xE9e : interdit.",
      "err.compat.escape": "Le module ne peut pas sortir de son espace isol\xE9.",
      "err.compat.eval": "Ex\xE9cution de texte comme code : interdite.",
      "err.compat.events": "Quelques \xE9v\xE9nements de jeton, sc\xE8ne et fiche.",
      "err.compat.foundryUi": "\xC9l\xE9ments d\u2019interface propres \xE0 Foundry.",
      "err.compat.hooks": "\xC9v\xE9nements du moteur.",
      "err.compat.i18n": "Traductions du module.",
      "err.compat.jquery": "Disponible seulement dans les panneaux du module, pas sur la page du jeu.",
      "err.compat.libHotkeys": "D\xE9pend de l\u2019interface de Foundry.",
      "err.compat.libLibWrapper": "Biblioth\xE8que de patch du moteur Foundry : remplac\xE9e ici par les intercepteurs (engine.intercept).",
      "err.compat.libSocketlib": "Communication directe entre clients : non prise en charge.",
      "err.compat.libWrapper": "Remplac\xE9 par les intercepteurs (engine.intercept).",
      "err.compat.macros": "Les macros Foundry ne sont pas ex\xE9cut\xE9es.",
      "err.compat.modules": "Liste des modules install\xE9s.",
      "err.compat.noNetwork": "Aucun acc\xE8s r\xE9seau pour les modules.",
      "err.compat.noSystem": "Aucun acc\xE8s au syst\xE8me.",
      "err.compat.notifications": "Notifications \xE0 l\u2019\xE9cran.",
      "err.compat.readOnly": "Lecture seule d\u2019une vue simplifi\xE9e.",
      "err.compat.renders": "Seuls les rendus de chat et de fiche sont expos\xE9s.",
      "err.compat.roll": "Syntaxe de d\xE9s du moteur : la plupart des formules simples passent.",
      "err.compat.settings": "R\xE9glages du module, stock\xE9s localement.",
      "err.compat.sockets": "Pas de communication directe entre clients.",
      "err.compat.storage": "Utilise le stockage du module (storage.local).",
      "err.compat.system": "Nom et version du syst\xE8me seulement.",
      "err.compat.templates": "Gabarits utilisables dans les panneaux du module.",
      "err.compat.user": "Nom, id et statut MJ seulement.",
      "err.compat.utils": "Utilitaires de donn\xE9es.",
      "err.download.external": "Le fichier est h\xE9berg\xE9 hors du catalogue : t\xE9l\xE9chargement refus\xE9.",
      "err.download.failed": "T\xE9l\xE9chargement impossible : {why}",
      "err.download.hash": "L\u2019empreinte du fichier ne correspond pas \xE0 celle du catalogue : t\xE9l\xE9chargement refus\xE9.",
      "err.download.morePermissions": "Le paquet demande plus de permissions que le catalogue n\u2019en annonce ({list}) : installation refus\xE9e.",
      "err.download.otherId": "L\u2019archive contient \xAB {found} \xBB alors que le catalogue annonce \xAB {announced} \xBB : installation refus\xE9e.",
      "err.download.otherPublisher": "Le paquet est sign\xE9 par un autre \xE9diteur que celui du catalogue : installation refus\xE9e.",
      "err.download.otherVersion": "L\u2019archive est en version {found} alors que le catalogue annonce la {announced} : installation refus\xE9e.",
      "err.download.size": "La taille du fichier ne correspond pas \xE0 celle du catalogue : t\xE9l\xE9chargement refus\xE9.",
      "err.download.unsigned": "Ce paquet n\u2019est pas sign\xE9 : le catalogue n\u2019accepte que des paquets sign\xE9s.",
      "err.fetch.credentials": "L\u2019adresse ne doit pas contenir d\u2019identifiants.",
      "err.fetch.httpsOnly": "Seules les adresses https:// sont accept\xE9es.",
      "err.fetch.noAnswer": "Le serveur ne r\xE9pond pas.",
      "err.fetch.port": "Port non autoris\xE9.",
      "err.fetch.private": "Adresse non autoris\xE9e (r\xE9seau local ou r\xE9serv\xE9).",
      "err.fetch.status": "Le serveur a r\xE9pondu {status}.",
      "err.firewall.scriptPareFeuIntrouvable": "script pare-feu introuvable",
      "err.format.badAccess": "{id} : acc\xE8s inconnu.",
      "err.format.badDate": "{id} {version} : date de publication invalide.",
      "err.format.badDep": "{id} : d\xE9pendance invalide.",
      "err.format.badEntryId": "Identifiant d\u2019entr\xE9e invalide : {id}.",
      "err.format.badKind": "{id} : type inconnu.",
      "err.format.badPublisherKey": "{id} : cl\xE9 d\u2019\xE9diteur invalide.",
      "err.format.badSha": "{id} {version} : empreinte invalide.",
      "err.format.badSize": "{id} {version} : taille invalide.",
      "err.format.badStatus": "{id} {version} : statut inconnu.",
      "err.format.badSystem": "{id} : syst\xE8me vis\xE9 invalide.",
      "err.format.badUrl": "{id} {version} : adresse de t\xE9l\xE9chargement refus\xE9e.",
      "err.format.badVersion": "{id} : num\xE9ro de version invalide.",
      "err.format.badVersionKey": "{id} {version} : cl\xE9 de version invalide.",
      "err.format.depLoop": "{id} : d\xE9pendances en boucle.",
      "err.format.duplicate": "Entr\xE9e en double : {id}.",
      "err.format.expires": "Date d\u2019expiration invalide.",
      "err.format.expiresFirst": "L\u2019index expire avant d\u2019\xEAtre g\xE9n\xE9r\xE9.",
      "err.format.generated": "Date de g\xE9n\xE9ration invalide.",
      "err.format.indexIllisibleJsonInvalide": "Index illisible (JSON invalide).",
      "err.format.indexTropVolumineux": "Index trop volumineux.",
      "err.format.needStore": "{id} : un contenu payant doit indiquer sa boutique.",
      "err.format.noEntries": "Liste d\u2019entr\xE9es manquante.",
      "err.format.noName": "{id} : nom manquant.",
      "err.format.noVersion": "{id} : aucune version valide.",
      "err.format.notIndex": "Ce n\u2019est pas un index de catalogue Ourdir.",
      "err.format.sequence": "Num\xE9ro de s\xE9quence invalide.",
      "err.format.tooMany": "Trop d\u2019entr\xE9es.",
      "err.format.tooManyDeps": "{id} : trop de d\xE9pendances.",
      "err.format.tooManyVersions": "{id} : trop de versions.",
      "err.format.unknownPublisher": "\xC9diteur inconnu",
      "err.format.unreadable": "Entr\xE9e illisible.",
      "err.format.version": "Version d\u2019index non prise en charge (mets l\u2019application \xE0 jour).",
      "err.foundry.compendiumTropVolumineux": "Compendium trop volumineux.",
      "err.foundry.leveldb": "Format LevelDB (Foundry v11+) : pas encore pris en charge.",
      "err.foundry.missing": "Fichier introuvable : probablement un compendium au format LevelDB (Foundry v11+), pas encore pris en charge.",
      "err.foundry.outside": "Chemin hors du module.",
      "err.foundry.tooManyDocs": "Compendium trop grand (plus de {max} documents).",
      "err.handshake.silent": "Le host n\u2019a pas r\xE9pondu : il est injoignable, ou ta cl\xE9 n\u2019est pas invit\xE9e \xE0 cette table.",
      "err.install.archiveTropVolumineuse": "Archive trop volumineuse.",
      "err.install.badJson": "module.json n\u2019est pas du JSON valide.",
      "err.install.badSignature": "Signature illisible : ignor\xE9e.",
      "err.install.bundling": "assemblage des fichiers",
      "err.install.cannotBundle": "Impossible d\u2019assembler les fichiers du module :\n- {list}",
      "err.install.cannotRun": "Ce module ne peut pas s\u2019ex\xE9cuter : {why}",
      "err.install.choose": "Choisis un dossier de module ou une archive .zip.",
      "err.install.conflicts": "En conflit avec : {list}",
      "err.install.couldNotBundle": "ses fichiers n\u2019ont pas pu \xEAtre assembl\xE9s.",
      "err.install.filesNotBundled": "Les fichiers du module n\u2019ont pas \xE9t\xE9 assembl\xE9s.",
      "err.install.foundrySystem": "Un syst\xE8me Foundry ne peut pas \xEAtre activ\xE9 ici : il sera converti en fiche native avec le System Builder.",
      "err.install.manifestRefused": "Manifeste refus\xE9 :\n- {list}",
      "err.install.missingFiles": "Fichiers d\xE9clar\xE9s mais absents :\n- {list}",
      "err.install.moduleIntrouvable": "Module introuvable.",
      "err.install.moduleJsonTropVolumineux": "module.json trop volumineux.",
      "err.install.moduleTropVolumineux": "Module trop volumineux.",
      "err.install.neededBy": "N\xE9cessaire \xE0 : {list}",
      "err.install.needsDep": "D\xE9pend de \xAB {id} \xBB, qui doit \xEAtre install\xE9 et activ\xE9.",
      "err.install.needsDepVersion": "D\xE9pend de \xAB {id} \xBB {version} ou plus.",
      "err.install.newerInstalled": "Une version plus r\xE9cente ({version}) est d\xE9j\xE0 install\xE9e.",
      "err.install.noManifest": "module.json (ou system.json) introuvable.",
      "err.install.noManifestAtRoot": "module.json (ou system.json) introuvable, \xE0 la racine du dossier ou de l\u2019archive.",
      "err.install.notAsked": "Permission non demand\xE9e par le module : {list}",
      "err.install.notBundled": "assemblage non effectu\xE9.",
      "err.install.permissionInconnueIndisponible": "Permission inconnue ou indisponible.",
      "err.install.publisher": "\xC9diteur",
      "err.install.skipped": "{n} fichier(s) ignor\xE9(s) par s\xE9curit\xE9.",
      "err.install.skippedFolder": "{path}/ (dossier ignor\xE9)",
      "err.install.skippedType": "{path} (type de fichier non autoris\xE9)",
      "err.install.tampered": "La signature ne correspond pas au contenu : le paquet a \xE9t\xE9 modifi\xE9.",
      "err.install.tooMany": "Trop de fichiers dans le module.",
      "err.licensed.refusal": "Ce contenu s\u2019ach\xE8te : ouvre-le depuis le catalogue d\u2019Ourdir.",
      "err.main.aucuneAdresse": "Aucune adresse.",
      "err.main.aucuneVersionInstallable": "Aucune version installable.",
      "err.main.badHost": "Adresse invalide : un nom de domaine ou une IP, sans http:// ni port.",
      "err.main.badSystem": "Ce syst\xE8me n\u2019est pas valide : {why}",
      "err.main.badTheme": "Ce th\xE8me n\u2019est pas valide : {why}",
      "err.main.catalogExpired": "Le catalogue est expir\xE9 : on ne peut plus rien y installer tant qu\u2019il n\u2019est pas mis \xE0 jour.",
      "err.main.entryGone": "Cette entr\xE9e n\u2019existe plus dans le catalogue.",
      "err.main.importFailed": "Import impossible.",
      "err.main.inspectionExpired": "Cette v\xE9rification a expir\xE9. Recommence.",
      "err.main.installFailed": "Installation impossible.",
      "err.main.keyFirst": "Cr\xE9e d\u2019abord ta cl\xE9 d\u2019\xE9diteur.",
      "err.main.liteKeeps": "Une table Lite garde sa fiche.",
      "err.main.liteSheet": "Cette fiche est celle des tables Lite.",
      "err.main.modeInconnu": "Mode inconnu.",
      "err.main.nextKeyFirst": "Cr\xE9e et sauvegarde d\u2019abord la nouvelle cl\xE9.",
      "err.main.noCert": "Le host local n\u2019a pas encore cr\xE9\xE9 son certificat.",
      "err.main.notAnnounced": "Le fichier n\u2019est pas celui que le catalogue annonce : installation refus\xE9e.",
      "err.main.notForSale": "Ce contenu s\u2019ach\xE8te : la vente n\u2019est pas encore ouverte.",
      "err.main.notInstallable": "Ce type de contenu ne s\u2019installe pas encore.",
      "err.main.notRunning": "La table n\u2019est pas lanc\xE9e.",
      "err.main.notSystem": "Ce fichier n\u2019est pas un syst\xE8me Ourdir.",
      "err.main.openCatalog": "Ouvre d\u2019abord le catalogue.",
      "err.main.revoked": "Cette version a \xE9t\xE9 retir\xE9e du catalogue.",
      "err.main.startFirst": "Lance d\u2019abord une table.",
      "err.main.tableAmiIntrouvable": "Table ou ami introuvable.",
      "err.main.tableInconnue": "Table inconnue.",
      "err.main.tableIntrouvable": "Table introuvable.",
      "err.main.themeTooBig": "Th\xE8me trop volumineux (64 Ko au plus).",
      "err.main.unknownError": "erreur inconnue",
      "err.main.unreadableTheme": "Ce th\xE8me se lit mal : {why}",
      "err.main.urlMismatch": "Cette adresse ne correspond plus au module install\xE9.",
      "err.manifest.api": 'tabletop.api doit \xEAtre "{api}".',
      "err.manifest.badCompendium": "compendium refus\xE9 : {path}",
      "err.manifest.badId": "id invalide : minuscules, chiffres, - et _ (2 \xE0 64 caract\xE8res).",
      "err.manifest.badLanguage": "langue refus\xE9e : {path}",
      "err.manifest.badScript": "script refus\xE9 : {path}",
      "err.manifest.badStyle": "feuille de style refus\xE9e : {path}",
      "err.manifest.moduleVideAucunScript": "module vide : aucun script, style, langue ni compendium.",
      "err.manifest.needStyle": 'Le module a des feuilles de style : il doit demander la permission "ui.style".',
      "err.manifest.notObject": "module.json doit \xEAtre un objet JSON.",
      "err.manifest.sockets": "Le module d\xE9clare des sockets : la communication entre clients n\u2019est pas prise en charge.",
      "err.manifest.tabletopEntryManquantInvalide": "tabletop.entry manquant ou invalide.",
      "err.manifest.versionInvalideEx1": "version invalide (ex. 1.2.0).",
      "err.pack.empty": "Le dossier est vide.",
      "err.remote.cannotFetch": "Impossible de r\xE9cup\xE9rer le manifeste :\n- {list}",
      "err.remote.noDownload": "Ce manifeste n\u2019indique pas o\xF9 t\xE9l\xE9charger le module (champ \xAB download \xBB).",
      "err.remote.notManifest": "Cette adresse ne renvoie pas un manifeste JSON valide.",
      "err.remote.otherId": "L\u2019archive contient \xAB {found} \xBB alors que le manifeste annonce \xAB {announced} \xBB : installation refus\xE9e.",
      "err.remote.otherVersion": "Le manifeste annonce la version {announced} mais l\u2019archive contient la {found}.",
      "err.remote.paste": "Colle l\u2019adresse (https://\u2026) d\u2019un module.json ou d\u2019un system.json, ou celle d\u2019un d\xE9p\xF4t GitHub ou GitLab.",
      "err.roles.nameTaken": "Ce nom est d\xE9j\xE0 pris par un autre r\xF4le.",
      "err.roles.needName": "Un r\xF4le a besoin d\u2019un nom.",
      "err.roles.noRole": "Ce r\xF4le n\u2019existe pas.",
      "err.roles.notEditable": "Ce r\xF4le n\u2019existe pas (ou c\u2019est un r\xF4le de base, qu\u2019on ne modifie pas).",
      "err.roles.tooMany": "Trop de r\xF4les ({max} au plus).",
      "err.roles.unknown": "R\xF4le inconnu.",
      "err.safeFetch.adresseInvalide": "Adresse invalide.",
      "err.safeFetch.redirectionInvalide": "Redirection invalide.",
      "err.safeFetch.tropRedirections": "Trop de redirections.",
      "err.share.badKeyFile": "Fichier de cl\xE9 invalide.",
      "err.share.keyExists": "Une cl\xE9 d\u2019\xE9diteur existe d\xE9j\xE0.",
      "err.share.nextWaiting": "Une nouvelle cl\xE9 attend d\xE9j\xE0 que le changement soit publi\xE9.",
      "err.share.noKey": "Aucune cl\xE9 d\u2019\xE9diteur.",
      "err.share.noNext": "Aucune nouvelle cl\xE9.",
      "err.share.otherKey": "Une autre cl\xE9 d\u2019\xE9diteur est d\xE9j\xE0 l\xE0 : confirme pour la remplacer.",
      "err.share.unreachable": "Le service de partage est injoignable.",
      "err.share.unreadableAnswer": "R\xE9ponse illisible du service ({status}).",
      "err.signing.fichierSignatureIllisible": "Fichier de signature illisible.",
      "err.signing.fichierSignatureInvalide": "Fichier de signature invalide.",
      "err.signing.fichierSignatureTropVolumineux": "Fichier de signature trop volumineux.",
      "err.signing.mismatch": "La signature ne correspond pas au contenu ({what}).",
      "err.signing.noKeys": "Aucune cl\xE9 de catalogue n\u2019est \xE9pingl\xE9e : le catalogue ne peut pas \xEAtre v\xE9rifi\xE9.",
      "err.signing.unknownKey": "{What} porte la signature d\u2019une cl\xE9 que l\u2019application ne conna\xEEt pas.",
      "err.signing.whatCatalog": "le catalogue",
      "err.signing.whatDelegation": "la d\xE9l\xE9gation",
      "err.signing.whatSuccession": "le remplacement de cl\xE9",
      "err.signing.whatTiers": "le fichier des niveaux",
      "err.social.noIdentity": "Identit\xE9 non initialis\xE9e.",
      "err.succession.already": "{key} : succ\xE8de d\xE9j\xE0 \xE0 une autre cl\xE9.",
      "err.succession.badDelegation": "D\xE9l\xE9gation du remplacement invalide.",
      "err.succession.early": "Remplacement sign\xE9 avant la fin de son d\xE9lai.",
      "err.succession.fork": "{key} : d\xE9j\xE0 remplac\xE9e (fourche refus\xE9e).",
      "err.succession.guarded": "Une cl\xE9 Ourdir, officielle ou de vendeur ne se remplace que par la racine.",
      "err.succession.invalid": "Remplacement de cl\xE9 invalide.",
      "err.succession.invalidDates": "Remplacement de cl\xE9 invalide (dates).",
      "err.succession.invalidHow": "Remplacement de cl\xE9 invalide (fa\xE7on).",
      "err.succession.invalidKeys": "Remplacement de cl\xE9 invalide (cl\xE9s).",
      "err.succession.keys": "Cl\xE9s du remplacement invalides.",
      "err.succession.noDelegation": "Remplacement par e-mail sans sa d\xE9l\xE9gation.",
      "err.succession.recovery": "D\xE9l\xE9gation de r\xE9cup\xE9ration : {why}",
      "err.succession.tooBig": "Remplacement de cl\xE9 trop volumineux.",
      "err.succession.tooLong": "{key} : cha\xEEne de plus de {max} maillons.",
      "err.succession.unreadable": "Remplacement de cl\xE9 illisible.",
      "err.succession.waiting": "En attente : ce remplacement sera sign\xE9 au plus t\xF4t le {date}.",
      "err.systems.badId": "Identifiant de syst\xE8me invalide.",
      "err.systems.badIdInFile": "Identifiant de syst\xE8me invalide dans le fichier.",
      "err.systems.exists": "Un syst\xE8me \xAB {id} \xBB existe d\xE9j\xE0.",
      "err.systems.fromCatalog": "Ce syst\xE8me vient du catalogue : il sert \xE0 tes tables, mais ne se modifie, ne s\u2019exporte ni ne se partage.",
      "err.systems.inUse": "Une de tes tables utilise ce syst\xE8me : change-le ou supprime la table d\u2019abord.",
      "err.systems.newer": "Ce fichier vient d\u2019une version plus r\xE9cente de l\u2019application.",
      "err.systems.notFound": "Syst\xE8me introuvable.",
      "err.systems.notSystem": "Ce fichier n\u2019est pas un syst\xE8me Tabletop.",
      "err.systems.skins": "Les skins produisent un style refus\xE9 (trop lourd ?).",
      "err.systems.tooBig": "Le syst\xE8me est trop volumineux.",
      "err.systems.unreadable": "Ce fichier n\u2019est pas un syst\xE8me Tabletop (JSON illisible).",
      "err.tls.pinMismatch": "Le certificat du host ne correspond pas \xE0 l\u2019invitation : connexion refus\xE9e.",
      "err.trust.ciKey": "Cl\xE9 de CI invalide.",
      "err.trust.endsFirst": "La d\xE9l\xE9gation finit avant de commencer.",
      "err.trust.expired": "La d\xE9l\xE9gation a expir\xE9.",
      "err.trust.invalid": "D\xE9l\xE9gation invalide.",
      "err.trust.notYet": "La d\xE9l\xE9gation n\u2019est pas encore valable.",
      "err.trust.older": "D\xE9l\xE9gation plus ancienne qu\u2019une d\xE9j\xE0 vue (retour en arri\xE8re refus\xE9).",
      "err.trust.serial": "Num\xE9ro de d\xE9l\xE9gation invalide.",
      "err.trust.tiersExpired": "Le fichier des niveaux a expir\xE9.",
      "err.trust.tiersExpiry": "Fichier des niveaux invalide (expiration).",
      "err.trust.tiersInvalid": "Fichier des niveaux invalide.",
      "err.trust.tiersInvalidWhy": "Fichier des niveaux invalide : {why}",
      "err.trust.tiersList": "Fichier des niveaux invalide (une liste est mal form\xE9e).",
      "err.trust.tiersOlder": "Fichier des niveaux plus ancien qu\u2019un d\xE9j\xE0 vu (retour en arri\xE8re refus\xE9).",
      "err.trust.tiersSequence": "Fichier des niveaux invalide (s\xE9quence).",
      "err.trust.tiersTooBig": "Fichier des niveaux trop volumineux.",
      "err.trust.tiersUnreadable": "Fichier des niveaux illisible.",
      "err.trust.tooBig": "D\xE9l\xE9gation trop volumineuse.",
      "err.trust.unreadable": "D\xE9l\xE9gation illisible.",
      "err.upnp.tooBig": "r\xE9ponse trop grande",
      "err.userThemes.badId": "Identifiant de th\xE8me invalide.",
      "err.userThemes.exists": "Un th\xE8me \xAB {id} \xBB existe d\xE9j\xE0.",
      "err.userThemes.fromCatalog": "Ce th\xE8me vient du catalogue : il sert \xE0 tes tables, mais ne se modifie, ne s\u2019exporte ni ne se partage.",
      "err.userThemes.notFound": "Th\xE8me introuvable.",
      "err.worlds.name": "Donne un nom d\u2019au moins 2 caract\xE8res \xE0 la table.",
      "err.worlds.notBackup": "Ce fichier n\u2019est pas une sauvegarde de table.",
      "err.worlds.notBackupOurdir": "Ce fichier n\u2019est pas une sauvegarde de table Ourdir.",
      "err.worlds.restored": "Table restaur\xE9e",
      "err.worlds.tooBig": "Cette table est trop volumineuse pour une sauvegarde d\u2019un seul fichier (plus de 1 Go).",
      "err.worlds.unknownSystem": "Syst\xE8me de jeu inconnu.",
      "err.worlds.unreadable": "Sauvegarde illisible : {why}",
      "err.zip.archiveZipInvalide": "Archive ZIP invalide.",
      "err.zip.central": "Archive ZIP corrompue (r\xE9pertoire central).",
      "err.zip.corrupt": "Donn\xE9es corrompues ou trop grandes : {name}",
      "err.zip.crc": "Somme de contr\xF4le invalide : {name}",
      "err.zip.dangerous": "Chemin dangereux dans l\u2019archive : {name}",
      "err.zip.data": "Archive ZIP corrompue (donn\xE9es).",
      "err.zip.duplicate": "Fichier en double dans l\u2019archive : {name}",
      "err.zip.encrypted": "Archive chiffr\xE9e : refus\xE9e.",
      "err.zip.fileTooBig": "Fichier trop gros : {name}",
      "err.zip.local": "Archive ZIP corrompue (en-t\xEAte local).",
      "err.zip.method": "M\xE9thode de compression non prise en charge ({method}) : {name}",
      "err.zip.size": "Taille incoh\xE9rente : {name}",
      "err.zip.symlink": "Lien symbolique refus\xE9 : {name}",
      "err.zip.tooBig": "Archive trop volumineuse une fois d\xE9compress\xE9e.",
      "err.zip.tooManyEntries": "Archive trop grosse : {n} fichiers (max {max}).",
      "menu.app": "Ourdir",
      "menu.edit": "\xC9dition",
      "menu.edit.copy": "Copier",
      "menu.edit.cut": "Couper",
      "menu.edit.paste": "Coller",
      "menu.edit.redo": "R\xE9tablir",
      "menu.edit.selectAll": "Tout s\xE9lectionner",
      "menu.edit.undo": "Annuler",
      "menu.friends": "Amis",
      "menu.friends.addFromClipboard": "Ajouter un ami (code dans le presse-papiers)",
      "menu.friends.copyCode": "Copier mon code d\u2019ami",
      "menu.friends.invite": "Inviter \xE0 ma table",
      "menu.friends.join": "Rejoindre une table (invitation dans le presse-papiers)",
      "menu.friends.none": "Aucun ami pour l\u2019instant",
      "menu.friends.remove": "Retirer",
      "menu.friends.uninvite": "Retirer de ma table",
      "menu.help": "Aide",
      "menu.help.logs": "Ouvrir le dossier des journaux",
      "menu.home": "Accueil",
      "menu.host": "Host",
      "menu.host.devTools": "Outils de d\xE9veloppement",
      "menu.host.network": "Acc\xE8s r\xE9seau",
      "menu.host.network.internet": "Internet (joueurs \xE0 distance)",
      "menu.host.network.lan": "R\xE9seau local (LAN)",
      "menu.host.network.local": "Local (ce PC uniquement)",
      "menu.host.openUserData": "Ouvrir userData",
      "menu.host.reachability": "Accessibilit\xE9 (mes amis peuvent-ils me joindre ?)",
      "menu.host.start": "D\xE9marrer le host",
      "menu.host.stop": "Arr\xEAter",
      "menu.tables": "Tables",
      "menu.tables.forget": "Oublier",
      "menu.tables.mine": "Ma table",
      "menu.tables.none": "Aucune table rejointe",
      "menu.tables.open": "Ouvrir",
      "menu.view": "Affichage",
      "menu.view.fullscreen": "Plein \xE9cran",
      "menu.view.resetZoom": "Taille normale",
      "menu.view.zoomIn": "Agrandir",
      "menu.view.zoomOut": "R\xE9duire",
      "offline.body": "Le host embarqu\xE9 n\u2019est pas lanc\xE9. Menu Host \u2192 D\xE9marrer le host (127.0.0.1:3010).",
      "offline.hint": "Menu : D\xE9marrer host \xB7 Arr\xEAter \xB7 Ouvrir userData \xB7 DevTools",
      "offline.lead": "Le host embarqu\xE9 n\u2019est pas encore lanc\xE9.",
      "offline.statusLabel": "\xC9tat du host",
      "offline.statusRunning": "En cours",
      "offline.statusStopped": "Arr\xEAt\xE9",
      "offline.title": "Serveur non d\xE9marr\xE9",
      "offline.userDataLabel": "userData",
      "pkg.identity.badCode": "Code d\u2019ami invalide.",
      "pkg.identity.badCodeCopy": "Code d\u2019ami invalide (copie incompl\xE8te ou modifi\xE9e).",
      "pkg.identity.noEncryption": "Identit\xE9 chiffr\xE9e : le chiffrement du syst\xE8me est indisponible.",
      "pkg.identity.ownCode": "C\u2019est ton propre code d\u2019ami.",
      "pkg.identity.unreadableCode": "Code d\u2019ami illisible.",
      "pkg.invite.badRecipient": "Cl\xE9 du destinataire invalide.",
      "pkg.invite.badSignature": "Signature de l\u2019invitation invalide.",
      "pkg.invite.expired": "Cette invitation a expir\xE9. Demande-en une nouvelle.",
      "pkg.invite.incomplete": "Invitation incompl\xE8te ou d\u2019une version inconnue.",
      "pkg.invite.invitationInvalide": "Invitation invalide.",
      "pkg.invite.invitationInvalideAdresse": "Invitation invalide (adresse).",
      "pkg.invite.invitationInvalideAdresses": "Invitation invalide (adresses).",
      "pkg.invite.invitationInvalideDate": "Invitation invalide (date).",
      "pkg.invite.invitationInvalideEmpreinte": "Invitation invalide (empreinte).",
      "pkg.invite.notForYou": "Cette invitation n\u2019est pas destin\xE9e \xE0 ton identit\xE9, ou elle est ab\xEEm\xE9e.",
      "pkg.invite.notInvitation": "Ce n\u2019est pas une invitation.",
      "pkg.roles.cogm": "Co-MJ",
      "pkg.roles.gm": "MJ",
      "pkg.roles.player": "Joueur",
      "pkg.roles.trusted": "Joueur de confiance",
      "pkg.vision.bright": "Lumi\xE8re vive",
      "pkg.vision.cone": "C\xF4ne : entre 30 et 360.",
      "pkg.vision.dark": "Vision dans le noir",
      "pkg.vision.dim": "Lumi\xE8re faible",
      "pkg.vision.filter": "Filtre : inconnu.",
      "pkg.vision.filterRange": "Port\xE9e du filtre",
      "pkg.vision.lightColor": "Lumi\xE8re : couleur #rrggbb.",
      "pkg.vision.lightFlicker": "Lumi\xE8re : vacillement inconnu.",
      "pkg.vision.lightNotObject": "Lumi\xE8re : un objet est attendu.",
      "pkg.vision.lightOn": "Lumi\xE8re : allum\xE9e ou non.",
      "pkg.vision.lightPreset": "Lumi\xE8re : pr\xE9r\xE9glage inconnu.",
      "pkg.vision.needDistance": "{name} : une distance est attendue.",
      "pkg.vision.notAllowed": "Vision : r\xE9serv\xE9 au MJ et \xE0 qui a le droit de r\xE9gler la vision de ses fiches.",
      "pkg.vision.notObject": "Vision : un objet est attendu.",
      "pkg.vision.range": "{name} : entre 0 et {max}.",
      "pkg.vision.sight": "Vue",
      "pkg.vision.unit": "{name} : unit\xE9 ft, m ou cases.",
      "pkg.vision.whole": "Vision : les r\xE9glages s'\xE9crivent en entier.",
      "reach.cgnat": "Ta box est derri\xE8re un partage d\u2019adresse de ton fournisseur (l\u2019adresse vue par la box est {ip}, non publique). Le port ne peut pas \xEAtre ouvert en IPv4 : utilise ton IPv6 si tu en as une, ou demande \xE0 ton fournisseur une adresse IPv4 publique.",
      "reach.contact.never": "Pas encore de preuve : aucun ami ne s\u2019est connect\xE9 depuis Internet depuis le d\xE9marrage. Envoie une invitation \xE0 un ami et demande-lui de rejoindre : c\u2019est le seul vrai test.",
      "reach.contact.ok": "Preuve : un ami s\u2019est bien connect\xE9 depuis Internet ({when}). Ta table est joignable.",
      "reach.host.configured": "Adresse configur\xE9e \xE0 la main : {host} (utilis\xE9e dans les invitations).",
      "reach.ipv6.available": "Tu as une adresse IPv6 publique ({addr}). Elle est utilis\xE9e dans les invitations. V\xE9rifie que le pare-feu de ta box autorise les connexions entrantes IPv6 sur le port {port} (souvent d\xE9sactiv\xE9 par d\xE9faut) ; seule une vraie connexion d\u2019ami le prouve.",
      "reach.lan.ok": "Mode LAN : tes amis sur le m\xEAme r\xE9seau (Wi\u2011Fi/Ethernet) peuvent te rejoindre via {addr}. Pour jouer \xE0 distance, passe en mode Internet.",
      "reach.mode.local": "Ton acc\xE8s r\xE9seau est \xAB Local \xBB : personne d\u2019autre que toi ne peut se connecter. Passe en R\xE9seau local (m\xEAme r\xE9seau) ou Internet dans Param\xE8tres.",
      "reach.title": "Accessibilit\xE9 de ta table",
      "reach.unreachable": "Aucun chemin vers Internet d\xE9tect\xE9 : ni port ouvert, ni IPv6 publique, ni adresse configur\xE9e. Ouvre le port {port} dans ta box, ou renseigne \xAB publicHost \xBB (nom DDNS ou IPv4) dans host.json.",
      "reach.upnp.mapped": "Ta box a ouvert le port {port} automatiquement (UPnP). Ton adresse publique est {ip} : elle sera mise dans les invitations.",
      "reach.upnp.none": "Aucune box compatible UPnP trouv\xE9e. Ouvre le port \xE0 la main dans la box : redirection TCP du port {port} vers ce PC, puis renseigne ton adresse publique (\xAB publicHost \xBB dans host.json).",
      "reach.upnp.refused": "Ta box a \xE9t\xE9 trouv\xE9e mais refuse d\u2019ouvrir le port. Ouvre-le \xE0 la main dans la box : redirection TCP du port {port} vers ce PC.",
      "tableTheme.accentFil": "Accent (le fil)",
      "tableTheme.advice": "{advice} ({ratio} pour {min}).",
      "tableTheme.badBase": "Base : un des th\xE8mes int\xE9gr\xE9s.",
      "tableTheme.badCapitals": "Capitales : oui ou non.",
      "tableTheme.badColor": "Couleur \xAB {name} \xBB : #rrggbb (minuscules).",
      "tableTheme.badCorners": "Coins : vifs, doux ou ronds.",
      "tableTheme.badCut": "Coupe : aucune, legere ou marquee.",
      "tableTheme.badDescription": "Description : 300 caract\xE8res au plus.",
      "tableTheme.badFilter": "Filtre propos\xE9 : un filtre d\u2019\xE9cran existant.",
      "tableTheme.badFont": "Police \xAB {name} \xBB : une police de la biblioth\xE8que.",
      "tableTheme.badGlow": "Halo : aucun, doux ou neon.",
      "tableTheme.badGrain": "Grain : 0 \xE0 3.",
      "tableTheme.badId": "Identifiant invalide.",
      "tableTheme.badKnots": "Perles : ronds, losanges ou carres.",
      "tableTheme.badName": "Nom : 2 \xE0 40 caract\xE8res.",
      "tableTheme.badTabs": "Rubans : droits ou coupes.",
      "tableTheme.badTexture": "Trame : aucune, tissage, lignes ou papier.",
      "tableTheme.badVersion": "Version : x.y.z.",
      "tableTheme.ceNEstPas": "Ce n\u2019est pas un th\xE8me.",
      "tableTheme.colors": "Couleurs",
      "tableTheme.contrast.inkPaper": "Encre sur le papier",
      "tableTheme.contrast.mutedPanel": "Texte att\xE9nu\xE9 sur les panneaux",
      "tableTheme.contrast.textBg": "Texte sur le fond",
      "tableTheme.contrast.textPanel": "Texte sur les panneaux",
      "tableTheme.effects": "Effets",
      "tableTheme.encreSeLitMal": "l\u2019encre se lit mal sur le papier : fonce l\u2019encre ou \xE9claircis le papier",
      "tableTheme.encreSurPapier": "Encre sur le papier",
      "tableTheme.fonts": "Polices",
      "tableTheme.noColors": "Couleurs manquantes.",
      "tableTheme.noEffects": "Effets manquants.",
      "tableTheme.noFonts": "Polices manquantes.",
      "tableTheme.noShape": "Forme manquante.",
      "tableTheme.notTheme": "Ce fichier n\u2019est pas un th\xE8me Ourdir (format).",
      "tableTheme.reussite": "R\xE9ussite",
      "tableTheme.shape": "Forme",
      "tableTheme.styleProduitParCe": "Le style produit par ce th\xE8me est refus\xE9.",
      "tableTheme.texte": "Texte",
      "tableTheme.texteAttenue": "Texte att\xE9nu\xE9",
      "tableTheme.texteAttenueSeLit": "le texte att\xE9nu\xE9 se lit mal sur les panneaux : \xE9claircis-le",
      "tableTheme.texteSeLitMal": "le texte se lit mal sur le fond : \xE9claircis le texte ou fonce le fond",
      "tableTheme.texteSeLitMal2": "le texte se lit mal sur les panneaux : \xE9claircis le texte ou fonce les panneaux",
      "tableTheme.theme": "Th\xE8me",
      "tableTheme.tooBig": "Th\xE8me trop volumineux (64 Ko au plus).",
      "tableTheme.tooLong80": "{name} : 80 caract\xE8res au plus.",
      "tableTheme.unknownField": "{where} : champ inconnu \xAB {name} \xBB.",
      "tableTheme.unreadable": "Ce fichier n\u2019est pas un th\xE8me Ourdir (JSON illisible).",
      "ui.access.closed": "Ta box n\u2019a pas ouvert la porte : tes amis ne pourront pas te rejoindre pour l\u2019instant.",
      "ui.access.firewall": "Windows n\u2019a pas autoris\xE9 l\u2019application : tes amis ne peuvent pas te rejoindre.",
      "ui.access.idle": "Pr\xEAt. L\u2019acc\xE8s de tes amis se met en place tout seul quand tu lances une table.",
      "ui.access.ipv6Only": "Ta box n\u2019a pas ouvert la porte toute seule. Tes amis peuvent quand m\xEAme te rejoindre si elle autorise l\u2019IPv6.",
      "ui.access.lan": "Tes amis sur le m\xEAme r\xE9seau (Wi\u2011Fi, Ethernet) peuvent te rejoindre.",
      "ui.access.off": "Seul toi peux jouer pour l\u2019instant. Active l\u2019acc\xE8s Internet pour inviter des amis.",
      "ui.access.proven": "Un ami s\u2019est d\xE9j\xE0 connect\xE9 depuis Internet : tout fonctionne.",
      "ui.access.reachable": "Ta box a ouvert la porte toute seule (adresse {ip}). Envoie une invitation \xE0 un ami pour confirmer.",
      "ui.access.reachableChecked": "Tes amis peuvent te rejoindre. Ta box a ouvert la porte toute seule (adresse {ip}).",
      "ui.access.relay": "Tes amis peuvent te rejoindre par le relais ({relay}) : rien \xE0 ouvrir sur ta box.",
      "ui.access.relayDown": "Le relais ({relay}) ne r\xE9pond pas pour l\u2019instant, nouvel essai en cours. Tes amis peuvent quand m\xEAme te rejoindre en direct si ta box laisse passer.",
      "ui.access.sharedAddress": "Ton fournisseur partage ton adresse avec d\u2019autres abonn\xE9s : tes amis ne peuvent pas te joindre pour l\u2019instant.",
      "ui.access.sharedAddressIpv6": "Ton fournisseur partage ton adresse classique avec d\u2019autres abonn\xE9s, mais ton IPv6 peut suffire.",
      "ui.app.tagline": "Tes tables de JDR, h\xE9berg\xE9es chez toi.",
      "ui.builder.add": "Ajouter",
      "ui.builder.addColumn": "Ajouter une colonne",
      "ui.builder.addHint": "Clique pour ajouter, ou glisse sur la fiche",
      "ui.builder.addOption": "Ajouter une option",
      "ui.builder.addTab": "Ajouter un onglet",
      "ui.builder.addVariable": "Ajouter une variable",
      "ui.builder.author": "Auteur",
      "ui.builder.back": "Syst\xE8mes",
      "ui.builder.base": "Point de d\xE9part",
      "ui.builder.baseHint": "Tu pourras tout modifier : ajouter, retirer, r\xE9organiser les champs.",
      "ui.builder.blank": "Fiche vierge",
      "ui.builder.blocksBack": "Retour aux blocs",
      "ui.builder.blocksHint": "Des morceaux de fiche d\xE9j\xE0 construits (caract\xE9ristiques, listes, pastilles...). Ils s\u2019ins\xE8rent dans la colonne, le conteneur ou l\u2019onglet s\xE9lectionn\xE9, puis se modifient comme tout le reste.",
      "ui.builder.blocksInsert": "Ins\xE9rer dans la fiche",
      "ui.builder.blocksTitle": "Blocs pr\xEAts \xE0 l\u2019emploi",
      "ui.builder.cannotSave": "Corrige d\u2019abord les erreurs list\xE9es sous la fiche.",
      "ui.builder.canvasEmpty": "La fiche est vide : ajoute une ligne, puis des champs.",
      "ui.builder.checksErrors": "{n} erreur(s) \xE0 corriger",
      "ui.builder.checksOk": "Aucune erreur : la fiche est pr\xEAte \xE0 \xEAtre enregistr\xE9e.",
      "ui.builder.copySuffix": "(copie)",
      "ui.builder.create": "Cr\xE9er un syst\xE8me",
      "ui.builder.delete": "Supprimer",
      "ui.builder.deleteConfirm": "Supprimer d\xE9finitivement le syst\xE8me \xAB {name} \xBB ?",
      "ui.builder.description": "Description",
      "ui.builder.dice.advantage": "Avantage : 2d20, garde le meilleur",
      "ui.builder.dice.disadvantage": "D\xE9savantage : 2d20, garde le pire",
      "ui.builder.dice.exploding": "d6 explosif (relance sur le maximum)",
      "ui.builder.dice.keep3": "4d6, garde les 3 meilleurs",
      "ui.builder.dice.min3": "d6 avec un minimum de 3",
      "ui.builder.dice.percent": "d100 (pourcentage)",
      "ui.builder.down": "Descendre",
      "ui.builder.dropHere": "D\xE9pose un champ ici",
      "ui.builder.duplicate": "Dupliquer",
      "ui.builder.edit": "Modifier",
      "ui.builder.export": "Exporter",
      "ui.builder.exportFail": "Export impossible.",
      "ui.builder.exportTitle": "Exporter le syst\xE8me",
      "ui.builder.exported": "Syst\xE8me export\xE9 : {path}",
      "ui.builder.formulaHint": "@nom = valeur d\u2019un champ, $nom = variable. Exemple : floor((@force-10)/2)",
      "ui.builder.height": "Hauteur (px)",
      "ui.builder.id": "Cl\xE9 technique",
      "ui.builder.idHint": "Sert dans les formules (@cl\xE9). Elle est cr\xE9\xE9e toute seule \xE0 partir du nom ; la changer met \xE0 jour les formules.",
      "ui.builder.import": "Importer un syst\xE8me\u2026",
      "ui.builder.importFail": "Import impossible.",
      "ui.builder.importTitle": "Importer un syst\xE8me",
      "ui.builder.imported": "Syst\xE8me \xAB {name} \xBB import\xE9.",
      "ui.builder.insertDice": "Ins\xE9rer un d\xE9 ou une r\xE8gle de jet\u2026",
      "ui.builder.insertRef": "Ins\xE9rer une valeur\u2026",
      "ui.builder.keyInvalid": "Cl\xE9 invalide : lettres, chiffres et _ (40 max).",
      "ui.builder.keyTaken": "Cette cl\xE9 est d\xE9j\xE0 utilis\xE9e.",
      "ui.builder.leaveConfirm": "Quitter sans enregistrer les modifications ?",
      "ui.builder.license": "Licence",
      "ui.builder.loadFail": "Impossible de charger ce syst\xE8me.",
      "ui.builder.more": "Plus d\u2019options",
      "ui.builder.multiline": "Plusieurs lignes",
      "ui.builder.needName": "Donne un nom d\u2019au moins 2 caract\xE8res.",
      "ui.builder.option": "Option",
      "ui.builder.optionId": "Cl\xE9 de l\u2019option",
      "ui.builder.optionLabel": "Texte affich\xE9",
      "ui.builder.options": "Options",
      "ui.builder.paletteHint": "S\xE9lectionne une colonne ou un champ sur la fiche : le nouvel \xE9l\xE9ment se place dedans ou juste apr\xE8s.",
      "ui.builder.redoHint": "R\xE9tablir (Ctrl+Y)",
      "ui.builder.remove": "Retirer",
      "ui.builder.repeaterDisplay": "Affichage de chaque entr\xE9e",
      "ui.builder.repeaterDisplayHint": "Ce que le joueur voit dans la liste. \xAB #champ \xBB y donne la valeur de l\u2019entr\xE9e.",
      "ui.builder.repeaterForm": "Formulaire d\u2019une entr\xE9e",
      "ui.builder.repeaterFormHint": "Les champs \xE0 remplir quand on ajoute ou modifie une entr\xE9e.",
      "ui.builder.repeaterHint": "Chaque entr\xE9e de la liste a ses propres valeurs. Dans l\u2019affichage, \xE9cris \xAB #champ \xBB (et non \xAB @champ \xBB) pour lire celles de l\u2019entr\xE9e ; les jets aussi : 1d20+#degats.",
      "ui.builder.roll": "Jet",
      "ui.builder.rollShown": "{title} : {text}",
      "ui.builder.rowHint": "Une ligne contient des colonnes ; les champs vont dans les colonnes.",
      "ui.builder.save": "Enregistrer",
      "ui.builder.saved": "Enregistr\xE9",
      "ui.builder.savedToast": "\xAB {name} \xBB est enregistr\xE9 : tu peux l\u2019utiliser pour une table.",
      "ui.builder.sheetName": "Nom de la fiche",
      "ui.builder.sheetTitle": "R\xE9glages de la fiche",
      "ui.builder.skinAdd": "Ajouter un skin",
      "ui.builder.skinCopy": "(copie)",
      "ui.builder.skinDefault": "par d\xE9faut",
      "ui.builder.skinDelete": "Supprimer",
      "ui.builder.skinDeleteConfirm": "Supprimer le skin \xAB {name} \xBB ? Les personnages qui l\u2019ont choisi prendront le skin par d\xE9faut.",
      "ui.builder.skinDown": "Descendre",
      "ui.builder.skinDuplicate": "Dupliquer",
      "ui.builder.skinName": "Nom du skin",
      "ui.builder.skinNew": "Nouveau skin",
      "ui.builder.skinNone": "Aucun skin : la fiche garde l\u2019allure du jeu.",
      "ui.builder.skinPick": "Skin",
      "ui.builder.skinUp": "Monter",
      "ui.builder.skinsFull": "{n} skins au plus.",
      "ui.builder.skinsHint": "Les skins habillent la fiche et ses jets. Chaque personnage choisit le sien, parmi ceux-ci seulement ; le premier est celui par d\xE9faut. L\u2019aper\xE7u \xE0 gauche montre le skin choisi ici.",
      "ui.builder.start": "Ouvrir l\u2019\xE9diteur",
      "ui.builder.startFrom": "Partir de \xAB {name} \xBB",
      "ui.builder.sysId": "Identifiant du syst\xE8me",
      "ui.builder.sysIdHint": "D\xE9fini \xE0 la cr\xE9ation, non modifiable ensuite.",
      "ui.builder.sysIdLocked": "Non modifiable : les tables existantes s\u2019en servent.",
      "ui.builder.sysName": "Nom du syst\xE8me",
      "ui.builder.tabDefault": "Onglet {n}",
      "ui.builder.tabRemoveConfirm": "Supprimer l\u2019onglet \xAB {name} \xBB et tout ce qu\u2019il contient ?",
      "ui.builder.tabTitle": "Titre de l\u2019onglet",
      "ui.builder.tabsHint": "Clique un onglet sur la fiche pour le remplir : ce que tu ajoutes ensuite se place dedans.",
      "ui.builder.tabsLabel": "Onglets",
      "ui.builder.templateFail": "Ce mod\xE8le ne peut pas \xEAtre ouvert dans l\u2019\xE9diteur.",
      "ui.builder.themeAddFile": "Ajouter un fichier (police woff2, woff, ttf, otf ; image png, jpg, webp)",
      "ui.builder.themeAngle": "Angle du d\xE9grad\xE9",
      "ui.builder.themeAssets": "Polices et images embarqu\xE9es",
      "ui.builder.themeAssetsHint": "Ajoute une police ou une image de fond : elle voyage avec le syst\xE8me, chaque joueur la voit. V\xE9rifie que tu as le droit de la redistribuer (licence de la police, droits de l\u2019image).",
      "ui.builder.themeBackground": "Fond de la fiche",
      "ui.builder.themeBodyFont": "Police du texte",
      "ui.builder.themeBorderStyle": "Style des bordures",
      "ui.builder.themeBorderWidth": "\xC9paisseur des bordures",
      "ui.builder.themeCase": "Casse des titres",
      "ui.builder.themeChamfer": "Coins coup\xE9s",
      "ui.builder.themeColor2": "Seconde couleur (d\xE9grad\xE9)",
      "ui.builder.themeColors": "Couleurs",
      "ui.builder.themeCustom": "Personnalis\xE9",
      "ui.builder.themeDetails": "D\xE9tails",
      "ui.builder.themeFields": "Style des champs",
      "ui.builder.themeFileBig": "fichier trop lourd (police 400 Ko, image 800 Ko au maximum)",
      "ui.builder.themeFileRefused": "Fichier refus\xE9 : {reason}",
      "ui.builder.themeFileTypes": "seuls woff2, woff, ttf, otf, png, jpg et webp sont accept\xE9s",
      "ui.builder.themeFonts": "Polices",
      "ui.builder.themeFontsHint": "Polices d\xE9j\xE0 pr\xE9sentes sur l\u2019ordinateur : si un joueur ne les a pas, une police proche est utilis\xE9e.",
      "ui.builder.themeFrame": "Cadre des cartes et des listes",
      "ui.builder.themeFrames": "Cadres et stats",
      "ui.builder.themeGaugeColor": "Couleur",
      "ui.builder.themeGaugeStyle": "Allure",
      "ui.builder.themeGauges": "Jauges",
      "ui.builder.themeHeader": "Bandeau de titre",
      "ui.builder.themeHeaderAlign": "Alignement du bandeau",
      "ui.builder.themeHeadingFont": "Police des titres",
      "ui.builder.themeHint": "L\u2019identit\xE9 visuelle de la fiche : couleurs, polices, fond, formes. L\u2019aper\xE7u \xE0 gauche est mis \xE0 jour en direct.",
      "ui.builder.themeImage": "Image de fond",
      "ui.builder.themeImageMode": "Affichage de l\u2019image",
      "ui.builder.themeImported": "(import\xE9e)",
      "ui.builder.themeKind": "Type de fond",
      "ui.builder.themeKindFont": "police",
      "ui.builder.themeKindImage": "image",
      "ui.builder.themeNoImages": "Ajoute d\u2019abord une image dans \xAB Polices et images embarqu\xE9es \xBB ci-dessous.",
      "ui.builder.themeNone": "Aucun (apparence de base du jeu)",
      "ui.builder.themePatternColor": "Couleur du motif",
      "ui.builder.themePatternOpacity": "Intensit\xE9 du motif",
      "ui.builder.themePatternSize": "Taille du motif",
      "ui.builder.themePreset": "Mod\xE8le de d\xE9part",
      "ui.builder.themeRadius": "Arrondi des angles",
      "ui.builder.themeReplace": "Remplacer ton th\xE8me personnalis\xE9 par ce mod\xE8le ? Tes r\xE9glages seront perdus.",
      "ui.builder.themeShadow": "Ombre des cartes",
      "ui.builder.themeShapes": "Formes",
      "ui.builder.themeSize": "Taille du texte",
      "ui.builder.themeSpacing": "Espacement des lettres (titres)",
      "ui.builder.themeStat": "Blocs de stat",
      "ui.builder.themeTag": "\xC9tiquette de jet",
      "ui.builder.themeTagHint": "Le r\xE9sultat d\u2019un jet dans le chat, dans sa fen\xEAtre et dans l\u2019historique : un exemple s\u2019affiche sous la fiche.",
      "ui.builder.themeTagSample": "\xC9tiquette de jet d\u2019exemple",
      "ui.builder.themeTagSampleTitle": "Jet d\u2019exemple",
      "ui.builder.themeTagStyle": "Allure",
      "ui.builder.themeTitle": "Apparence",
      "ui.builder.themeTitleRule": "Ornement sous les titres",
      "ui.builder.tokenizable": "Peut devenir un jeton sur la carte",
      "ui.builder.undoHint": "Annuler (Ctrl+Z)",
      "ui.builder.unsaved": "Modifications non enregistr\xE9es",
      "ui.builder.up": "Monter",
      "ui.builder.useAsBase": "Utiliser comme base",
      "ui.builder.value": "Valeur",
      "ui.builder.variables": "Variables",
      "ui.builder.variablesHint": "Des constantes utilisables dans les formules avec $nom.",
      "ui.builder.version": "Version",
      "ui.builder.width": "Largeur (px)",
      "ui.cat.alreadyThere": "Un syst\xE8me avec cet identifiant existe d\xE9j\xE0 chez toi : l\u2019installation en cr\xE9e une copie, sans rien \xE9craser.",
      "ui.cat.by": "Par {name}",
      "ui.cat.cached": "Tu vois la copie enregistr\xE9e sur ton ordinateur : {reason}",
      "ui.cat.changelog": "Nouveaut\xE9s",
      "ui.cat.closedText": "Il arrive bient\xF4t. En attendant, tu peux installer un module depuis une adresse ou un dossier (page Modules) et importer un syst\xE8me re\xE7u (page Syst\xE8mes de jeu).",
      "ui.cat.closedTitle": "Le catalogue n\u2019est pas encore ouvert.",
      "ui.cat.communityCode": "Pas relu par Ourdir : ce module s\u2019ex\xE9cute dans le bac \xE0 sable, avec les permissions ci-dessous.",
      "ui.cat.deprecated": "obsol\xE8te",
      "ui.cat.details": "D\xE9tails",
      "ui.cat.dev": "catalogue de d\xE9veloppement",
      "ui.cat.disabled": "Retir\xE9s du catalogue et d\xE9sactiv\xE9s par s\xE9curit\xE9 : {list}.",
      "ui.cat.error": "Le catalogue est indisponible : {reason}",
      "ui.cat.expired": "Ce catalogue a expir\xE9 le {date} : tu peux le consulter, mais rien ne s\u2019installe tant qu\u2019il n\u2019est pas mis \xE0 jour.",
      "ui.cat.fingerprint": "Empreinte de l\u2019\xE9diteur : {fp}",
      "ui.cat.fromCatalog": "Depuis le catalogue {source} \xB7 {tier} \xB7 {name}",
      "ui.cat.hide": "Masquer",
      "ui.cat.homepage": "Page : {url}",
      "ui.cat.install": "Installer",
      "ui.cat.installed": "Install\xE9 \xB7 v{v}",
      "ui.cat.kind.adventure": "Aventures",
      "ui.cat.kind.all": "Tous les types",
      "ui.cat.kind.compendium": "Compendiums",
      "ui.cat.kind.maps": "Packs de cartes",
      "ui.cat.kind.module": "Modules",
      "ui.cat.kind.system": "Syst\xE8mes",
      "ui.cat.kind.theme": "Th\xE8mes de table",
      "ui.cat.kind.translation": "Traductions",
      "ui.cat.kindFilter": "Type",
      "ui.cat.lang.all": "Toutes les langues",
      "ui.cat.langFilter": "Langue",
      "ui.cat.lead": "Des modules et des syst\xE8mes sign\xE9s, pr\xEAts \xE0 installer. Rien n\u2019est install\xE9 avant l\u2019\xE9cran de v\xE9rification.",
      "ui.cat.loading": "Chargement du catalogue\u2026",
      "ui.cat.no": "non",
      "ui.cat.none": "Aucun r\xE9sultat.",
      "ui.cat.offline": "hors ligne",
      "ui.cat.pending": "La v{v} est en relecture chez Ourdir.",
      "ui.cat.replaces": "Cette mise \xE0 jour remplace ta version {v}. Les tables qui utilisent ce syst\xE8me gardent leurs fiches ; si tu l\u2019avais modifi\xE9 toi-m\xEAme, tes changements seront perdus.",
      "ui.cat.report": "Signaler",
      "ui.cat.reportHint": "\xAB Signaler \xBB ouvre le formulaire de signalement du catalogue ; sans compte GitHub, \xE9cris \xE0 signalement@ourdir.fr.",
      "ui.cat.retry": "R\xE9essayer",
      "ui.cat.reviewSystem": "V\xE9rifie avant d\u2019installer",
      "ui.cat.reviewTheme": "Th\xE8me de table du catalogue",
      "ui.cat.reviewTranslation": "Traduction \xE0 installer",
      "ui.cat.revoked": "retir\xE9e",
      "ui.cat.revokedNotice": "Le catalogue a retir\xE9 des modules que tu avais install\xE9s : {list}. Ils ont \xE9t\xE9 d\xE9sactiv\xE9s par s\xE9curit\xE9.",
      "ui.cat.search": "Rechercher un module ou un syst\xE8me\u2026",
      "ui.cat.soonKind": "Installation bient\xF4t disponible",
      "ui.cat.soonLicensed": "Bient\xF4t disponible",
      "ui.cat.sourceLine": "Source : {name} \xB7 \xE9dition n\xB0 {n} \xB7 publi\xE9e le {date}",
      "ui.cat.system.all": "Tous les syst\xE8mes",
      "ui.cat.systemContents": "{n} \xE9l\xE9ments \xB7 th\xE8me : {theme} \xB7 fichiers embarqu\xE9s : {files}",
      "ui.cat.systemFilter": "Syst\xE8me",
      "ui.cat.systemInstalled": "Syst\xE8me \xAB {name} \xBB install\xE9.",
      "ui.cat.systemNote": "Un syst\xE8me ne contient aucun code : c\u2019est une fiche et son apparence. Il est rev\xE9rifi\xE9 en entier avant d\u2019\xEAtre enregistr\xE9.",
      "ui.cat.tab.browse": "Parcourir",
      "ui.cat.tab.mine": "Mes publications",
      "ui.cat.themeInstalled": "Th\xE8me \xAB {name} \xBB install\xE9 : choisis-le \xE0 la cr\xE9ation d\u2019une table ou dans R\xE9glages en jeu.",
      "ui.cat.themeNote": "Un th\xE8me ne contient aucun code : seulement des couleurs, des polices et des r\xE9glages de forme, v\xE9rifi\xE9s par l\u2019appli. Il ne touche jamais la carte.",
      "ui.cat.tier.all": "Toutes provenances",
      "ui.cat.tier.community": "Communautaire",
      "ui.cat.tier.official": "Officiel",
      "ui.cat.tier.ourdir": "Ourdir",
      "ui.cat.tier.validated": "Valid\xE9",
      "ui.cat.tierFilter": "Provenance",
      "ui.cat.title": "Catalogue",
      "ui.cat.translationInstalled": "\xAB {name} \xBB install\xE9e : choisis-la dans Param\xE8tres \u2192 Langue.",
      "ui.cat.translationNote": "Une traduction ne contient que du texte : elle change les mots d\u2019Ourdir, rien d\u2019autre.",
      "ui.cat.translationTarget": "Traduit Ourdir en \xAB {language} \xBB.",
      "ui.cat.update": "Mettre \xE0 jour",
      "ui.cat.updateAvailable": "Mise \xE0 jour disponible",
      "ui.cat.updates": "{n} mise(s) \xE0 jour disponible(s).",
      "ui.cat.versions": "Versions",
      "ui.cat.yes": "oui",
      "ui.common.cancel": "Annuler",
      "ui.common.copied": "Copi\xE9",
      "ui.common.copy": "Copier",
      "ui.common.loading": "Chargement\u2026",
      "ui.common.paste": "Coller",
      "ui.friends.accessBad": "Ta table n\u2019est probablement pas joignable depuis Internet pour l\u2019instant (voir Param\xE8tres). L\u2019invitation fonctionnera quand ce sera r\xE9gl\xE9.",
      "ui.friends.add": "Ajouter un ami",
      "ui.friends.addPlaceholder": "Colle son code d\u2019ami (td1_\u2026)",
      "ui.friends.addSubmit": "Ajouter",
      "ui.friends.code": "Mon code d\u2019ami",
      "ui.friends.codeHint": "Envoie ce code \xE0 quelqu\u2019un pour qu\u2019il t\u2019ajoute. Il n\u2019est pas secret : il ne contient que ta cl\xE9 publique.",
      "ui.friends.confirmRemove": "Supprimer {name} de tes amis ?",
      "ui.friends.invitation": "Invitation pour {name}",
      "ui.friends.invitationHint": "Chiffr\xE9e pour lui seul : personne d\u2019autre ne peut lire l\u2019adresse. Envoie-la (Discord, SMS\u2026). Valable 7 jours.",
      "ui.friends.invite": "Inviter \xE0 ma table",
      "ui.friends.invited": "Invit\xE9 \xE0 ta table",
      "ui.friends.list": "Mes amis",
      "ui.friends.localWarn": "Ton acc\xE8s r\xE9seau est \xAB Local \xBB : il ne pourra pas te joindre. Change-le dans Param\xE8tres, puis recr\xE9e l\u2019invitation.",
      "ui.friends.me": "Mon identit\xE9",
      "ui.friends.name": "Nom affich\xE9",
      "ui.friends.needTable": "Lance une table pour inviter des amis.",
      "ui.friends.none": "Aucun ami pour l\u2019instant.",
      "ui.friends.presence": "Il n\u2019y a pas de statut \xAB en ligne \xBB pour les amis : l\u2019application n\u2019utilise aucun serveur central. L\u2019\xE9tat d\u2019une table se voit dans l\u2019onglet Tables.",
      "ui.friends.remove": "Supprimer",
      "ui.friends.save": "Enregistrer",
      "ui.friends.uninvite": "Retirer de ma table",
      "ui.guide.eyebrow": "Bienvenue",
      "ui.guide.lead": "Ourdir h\xE9berge ta partie chez toi : pas de compte, pas d\u2019abonnement pour jouer avec tes amis.",
      "ui.guide.s1": "Choisis ton nom",
      "ui.guide.s1b": "Changer mon nom",
      "ui.guide.s1t": "C\u2019est ce que tes amis verront. Pour l\u2019instant : {name}.",
      "ui.guide.s2": "Cr\xE9e ta table",
      "ui.guide.s2t": "Donne-lui un nom et choisis un syst\xE8me de jeu. Tu pourras en fabriquer un toi-m\xEAme plus tard.",
      "ui.guide.s3": "Invite tes amis",
      "ui.guide.s3b": "Ajouter des amis",
      "ui.guide.s3t": "\xC9change ton code d\u2019ami avec eux, puis envoie-leur une invitation \xE0 ta table.",
      "ui.guide.title": "Ta premi\xE8re table en trois \xE9tapes",
      "ui.hero.live": "En direct",
      "ui.hero.resume": "Reprendre",
      "ui.home.resume": "Reprendre un mod\xE8le",
      "ui.home.resumeNone": "Tu n\u2019as pas encore de fiche \xE0 toi.",
      "ui.home.resumeText": "Continuer une de tes fiches d\xE9j\xE0 commenc\xE9es.",
      "ui.home.template": "Partir d\u2019un mod\xE8le",
      "ui.home.templateText": "Une fiche vierge ou un syst\xE8me inclus (5e SRD, OSR\u2026) que tu modifies ensuite.",
      "ui.home.title": "Comment veux-tu commencer ?",
      "ui.home.zero": "Partir de z\xE9ro",
      "ui.home.zeroText": "Un assistant te pose quelques questions et te donne une fiche d\xE9j\xE0 jouable.",
      "ui.key.addRecovery": "Ajouter un e-mail de secours",
      "ui.key.alert": "Quelqu\u2019un demande \xE0 remplacer ta cl\xE9 d\u2019\xE9diteur depuis ton e-mail ({date}). Si ce n\u2019est pas toi :",
      "ui.key.alertNotice": "Quelqu\u2019un demande \xE0 remplacer ta cl\xE9 d\u2019\xE9diteur : ouvre le Catalogue d\u2019Ourdir pour annuler si ce n\u2019est pas toi.",
      "ui.key.backup": "Sauvegarder ma cl\xE9",
      "ui.key.cancel": "Annuler la demande",
      "ui.key.cancelled": "Demande annul\xE9e : ta cl\xE9 ne change pas.",
      "ui.key.choose": "Choisir",
      "ui.key.chooseText": "Plusieurs cl\xE9s sont rattach\xE9es \xE0 cette adresse. Laquelle as-tu perdue ?",
      "ui.key.confirmRotate": "Confirmer le changement",
      "ui.key.done": "Fait : tes paquets sont \xE0 ta nouvelle cl\xE9.",
      "ui.key.eyebrow.changer": "Changer de cl\xE9",
      "ui.key.eyebrow.perdu": "Cl\xE9 perdue",
      "ui.key.eyebrow.secours": "E-mail de secours",
      "ui.key.lost": "J\u2019ai perdu ma cl\xE9",
      "ui.key.lostText": "Une nouvelle cl\xE9 va \xEAtre cr\xE9\xE9e. Le code part \xE0 l\u2019e-mail de secours de l\u2019ancienne ; tes paquets passent \xE0 la nouvelle cl\xE9 7 jours plus tard, sauf si l\u2019ancienne cl\xE9 annule.",
      "ui.key.noPackages": "(aucun paquet publi\xE9)",
      "ui.key.noRecovery": "Ajoute un e-mail de secours : c\u2019est lui qui te rendra tes paquets si tu perds ta cl\xE9.",
      "ui.key.none": "Pas encore de cl\xE9 : elle se cr\xE9e au premier partage.",
      "ui.key.recovery": "E-mail de secours : {email}",
      "ui.key.recoveryAdded": "{email} est ton e-mail de secours.",
      "ui.key.recoveryAddedPlain": "Cette adresse est aussi ton e-mail de secours : elle te rendra tes paquets si tu perds ta cl\xE9.",
      "ui.key.remove": "Retirer l\u2019e-mail de secours",
      "ui.key.request.attente": "Remplacement demand\xE9, pr\xE9vu le {date}",
      "ui.key.request.fait": "Cl\xE9 remplac\xE9e",
      "ui.key.request.signe": "Remplacement sign\xE9, en cours de publication",
      "ui.key.rotate": "Changer de cl\xE9",
      "ui.key.rotateText": "Une nouvelle cl\xE9 remplace l\u2019actuelle. Tes versions d\xE9j\xE0 publi\xE9es restent valides ; les suivantes seront sign\xE9es par la nouvelle. Sauvegarde-la avant de confirmer.",
      "ui.key.setRecovery": "Changer l\u2019e-mail de secours",
      "ui.key.signed": "Sign\xE9 : le catalogue publie le remplacement.",
      "ui.key.step.choose": "Choix",
      "ui.key.step.confirm": "Confirmer",
      "ui.key.step.done": "Suivi",
      "ui.key.step.email": "E-mail",
      "ui.key.step.key": "Nouvelle cl\xE9",
      "ui.key.title": "Ma cl\xE9 d\u2019\xE9diteur",
      "ui.key.waiting": "Remplacement pr\xE9vu le {date}. Tu peux fermer : l\u2019appli suit la demande.",
      "ui.mod.bundleFailed": "Plusieurs fichiers : l\u2019assemblage a \xE9chou\xE9 (voir les avertissements). Le module ne pourra pas s\u2019ex\xE9cuter.",
      "ui.mod.bundled": "Plusieurs fichiers : assembl\xE9s en un seul script ({n} fichiers).",
      "ui.mod.by": "par {authors}",
      "ui.mod.canDo": "Ce module peut : {list}.",
      "ui.mod.checkUpdate": "Chercher une mise \xE0 jour",
      "ui.mod.compat": "Compatibilit\xE9 Foundry (estim\xE9e)",
      "ui.mod.compat.compatible": "Devrait fonctionner",
      "ui.mod.compat.data-only": "Donn\xE9es seulement",
      "ui.mod.compat.incompatible": "Incompatible",
      "ui.mod.compat.note": "Analyse statique des scripts : elle estime ce que la couche de compatibilit\xE9 prend en charge. Le module s\u2019ex\xE9cute isol\xE9 (sans r\xE9seau ni acc\xE8s \xE0 la page) avec les seules permissions que tu accordes ; un module qui utilise une API absente s\u2019arr\xEAte avec une erreur visible.",
      "ui.mod.compat.partial": "Partiellement compatible",
      "ui.mod.confirmUninstall": "D\xE9sinstaller \xAB {title} \xBB ?",
      "ui.mod.contents": "Contenu : {scripts} script(s), {styles} feuille(s) de style, {langs} langue(s), {packs} compendium(s).",
      "ui.mod.disable": "D\xE9sactiver",
      "ui.mod.disabled": "D\xE9sactiv\xE9",
      "ui.mod.enable": "Activer",
      "ui.mod.enabled": "Activ\xE9",
      "ui.mod.from": "T\xE9l\xE9charg\xE9 depuis {host}",
      "ui.mod.fromUrl": "Installer",
      "ui.mod.hash": "Empreinte : {hash}\u2026",
      "ui.mod.install": "Installer",
      "ui.mod.installFolder": "Installer un dossier",
      "ui.mod.installZip": "Installer une archive (.zip)",
      "ui.mod.kind.foundry": "Foundry VTT",
      "ui.mod.kind.native": "Natif",
      "ui.mod.kind.system": "Syst\xE8me Foundry",
      "ui.mod.lead": "\xC9tends le jeu : interface, commandes, jets, fiches. Tout ce que tu as install\xE9 est ici, y compris les syst\xE8mes venus du catalogue ; chaque module tourne isol\xE9.",
      "ui.mod.license": "Licence : {license}",
      "ui.mod.noSource": "Ce module n\u2019a pas \xE9t\xE9 install\xE9 depuis une adresse.",
      "ui.mod.none": "Aucun module install\xE9.",
      "ui.mod.noneText": "Installe un module natif ou un module Foundry VTT : le convertisseur analyse ce qui fonctionnera avant de l\u2019installer.",
      "ui.mod.ownedSystem": "Syst\xE8me de jeu",
      "ui.mod.ownedTheme": "Th\xE8me de table",
      "ui.mod.ownedTranslation": "Traduction",
      "ui.mod.packs": "Compendiums : {done} converti(s), {skipped} ignor\xE9(s).",
      "ui.mod.perms": "Permissions demand\xE9es",
      "ui.mod.permsNone": "Aucune permission demand\xE9e.",
      "ui.mod.pickFile": "Choisir un module (.zip)",
      "ui.mod.pickFolder": "Choisir le dossier d\u2019un module",
      "ui.mod.plain.dice.intercept": "changer le r\xE9sultat des d\xE9s",
      "ui.mod.plain.engine.intercept": "modifier ou annuler des actions du jeu",
      "ui.mod.plain.host.script": "faire tourner du code sur l\u2019ordinateur du MJ",
      "ui.mod.plain.scene.modify": "modifier les sc\xE8nes",
      "ui.mod.plain.sheet.write": "modifier les fiches de personnage",
      "ui.mod.plain.tokens.modify": "d\xE9placer ou modifier les jetons",
      "ui.mod.requires": "D\xE9pend de : {list}",
      "ui.mod.review": "V\xE9rification avant installation",
      "ui.mod.risk.high": "\xE9lev\xE9",
      "ui.mod.risk.low": "faible",
      "ui.mod.risk.medium": "moyen",
      "ui.mod.runtime.pending": "Install\xE9 \xB7 version ancienne, r\xE9installe-le pour l\u2019ex\xE9cuter",
      "ui.mod.runtime.ready": "Pr\xEAt : s\u2019ex\xE9cute dans les parties, isol\xE9",
      "ui.mod.runtime.unsupported": "Non ex\xE9cutable : {reason}",
      "ui.mod.skipped": "{n} fichier(s) ignor\xE9(s) par s\xE9curit\xE9.",
      "ui.mod.status.blocked": "Bloqu\xE9 (s\xE9curit\xE9)",
      "ui.mod.status.partial": "En partie",
      "ui.mod.status.supported": "Pris en charge",
      "ui.mod.status.unsupported": "Non pris en charge",
      "ui.mod.systemNote": "Un syst\xE8me Foundry contient ses propres fiches en code : il ne peut pas \xEAtre ex\xE9cut\xE9 ici. Il est conserv\xE9 pour \xEAtre converti en fiche native avec le System Builder (\xE0 venir).",
      "ui.mod.tech": "D\xE9tails techniques",
      "ui.mod.trust.official": "Officiel",
      "ui.mod.trust.signed": "Sign\xE9 (communaut\xE9)",
      "ui.mod.trust.unsigned": "Non sign\xE9",
      "ui.mod.trustHint.official": "Sign\xE9 par une cl\xE9 officielle du projet ou d\u2019un ayant droit v\xE9rifi\xE9.",
      "ui.mod.trustHint.signed": "L\u2019auteur est authentique ({name}) mais le contenu n\u2019a pas \xE9t\xE9 examin\xE9 par le projet.",
      "ui.mod.trustHint.unsigned": "Aucune garantie sur l\u2019auteur ni sur le contenu. Installe seulement ce que tu connais.",
      "ui.mod.uninstall": "D\xE9sinstaller",
      "ui.mod.upToDate": "\xAB {title} \xBB est \xE0 jour.",
      "ui.mod.updateTitle": "Mise \xE0 jour {from} \u2192 {to}",
      "ui.mod.urlHint": "Colle l\u2019adresse d\u2019un module.json ou system.json (comme dans Foundry VTT), ou celle d\u2019un d\xE9p\xF4t GitHub ou GitLab.",
      "ui.mod.urlLabel": "Installer depuis une adresse",
      "ui.mod.version": "Version {v}",
      "ui.mod.warnings": "Avertissements",
      "ui.modules.empty": "Aucun module install\xE9.",
      "ui.modules.text": "Les modules (sc\xE8nes, aides de jeu, extensions) arrivent avec le gestionnaire de modules. Ils tourneront dans un bac \xE0 sable et demanderont des permissions explicites.",
      "ui.modules.title": "Modules",
      "ui.nav.catalog": "Catalogue",
      "ui.nav.friends": "Amis",
      "ui.nav.modules": "Modules",
      "ui.nav.settings": "Param\xE8tres",
      "ui.nav.systems": "Syst\xE8mes de jeu",
      "ui.nav.tables": "Tables",
      "ui.nav.themes": "Th\xE8mes",
      "ui.roles.base.gm": "MJ",
      "ui.roles.base.player": "Joueur",
      "ui.roles.baseHint.gm": "Voit ce que voit le MJ (sc\xE8nes cach\xE9es, jets secrets) et d\xE9place tous les jetons ; retire-lui des droits ci-dessous.",
      "ui.roles.baseHint.player": "Voit et fait ce que fait un joueur ; les droits ci-dessous s\u2019y ajoutent.",
      "ui.roles.baseLabel": "Construit sur",
      "ui.roles.builtin.cogm": "Co-MJ",
      "ui.roles.builtin.gm": "MJ",
      "ui.roles.builtin.player": "Joueur",
      "ui.roles.builtin.trusted": "Joueur de confiance",
      "ui.roles.builtinHint.cogm": "Les droits du MJ, sauf ceux qui d\xE9truisent : supprimer des sc\xE8nes, des calques, des playlists.",
      "ui.roles.builtinHint.gm": "Droits complets. C\u2019est toi, propri\xE9taire de la table.",
      "ui.roles.builtinHint.player": "Les r\xE9glages de base : joue son personnage, d\xE9place ses jetons, tchat et lance les d\xE9s.",
      "ui.roles.builtinHint.trusted": "Un joueur qui peut aussi envoyer des images et changer l\u2019image et le jeton des fiches qu\u2019il contr\xF4le.",
      "ui.roles.cap.critical": "D\xE9truire",
      "ui.roles.cap.look": "Changer images et jetons",
      "ui.roles.cap.moderate": "Mod\xE9rer",
      "ui.roles.cap.music": "Musique et sons",
      "ui.roles.cap.scenes": "Construire les sc\xE8nes",
      "ui.roles.cap.tokens": "D\xE9placer tous les jetons",
      "ui.roles.cap.upload": "Envoyer des fichiers",
      "ui.roles.cap.vision": "Vision de ses fiches",
      "ui.roles.capHint.critical": "supprimer une sc\xE8ne, un calque, une playlist",
      "ui.roles.capHint.look": "l\u2019image et le jeton des fiches qu\u2019on contr\xF4le",
      "ui.roles.capHint.moderate": "vider le tchat et l\u2019historique des d\xE9s, exclure un joueur",
      "ui.roles.capHint.music": "lancer et g\xE9rer les playlists",
      "ui.roles.capHint.scenes": "murs, lumi\xE8res, brouillard, calques, images, jetons",
      "ui.roles.capHint.tokens": "pas seulement les siens",
      "ui.roles.capHint.upload": "images, cartes, sons ; g\xE9rer la m\xE9diath\xE8que",
      "ui.roles.capHint.vision": "r\xE9gler la vue, la vision dans le noir, le filtre et la lumi\xE8re des fiches qu\u2019il modifie",
      "ui.roles.capsLabel": "Droits",
      "ui.roles.confirmDelete": "Supprimer le r\xF4le \xAB {name} \xBB ? Ceux qui l\u2019ont redeviennent joueurs.",
      "ui.roles.customHint": "Un r\xF4le que tu as cr\xE9\xE9.",
      "ui.roles.delete": "Supprimer",
      "ui.roles.edit": "Modifier",
      "ui.roles.everything": "Tous les droits",
      "ui.roles.lead": "Qui peut faire quoi \xE0 cette table. Un r\xF4le donne des droits de plus que ceux d\u2019un joueur ; le MJ (toi) a tous les droits, et toi seul renommes ou supprimes la table, g\xE8res les r\xF4les et invites du monde.",
      "ui.roles.loadFail": "Impossible de lire les r\xF4les de cette table.",
      "ui.roles.members": "Membres",
      "ui.roles.name": "Nom du r\xF4le",
      "ui.roles.new": "Nouveau r\xF4le",
      "ui.roles.noCaps": "Aucun droit de plus que ceux de la base",
      "ui.roles.noMembers": "Aucun ami pour l\u2019instant. Ajoute-les dans \xAB Amis \xBB, puis invite-les \xE0 cette table.",
      "ui.roles.notInvited": "pas encore invit\xE9",
      "ui.roles.roleOf": "R\xF4le de {name}",
      "ui.roles.roles": "R\xF4les",
      "ui.roles.running": "La table tourne : un changement de r\xF4le est appliqu\xE9 tout de suite, et le membre concern\xE9 est reconnect\xE9 pour que sa page corresponde \xE0 son nouveau r\xF4le.",
      "ui.roles.save": "Enregistrer",
      "ui.settings.advanced": "Options avanc\xE9es",
      "ui.settings.data": "Donn\xE9es",
      "ui.settings.details": "D\xE9tails techniques",
      "ui.settings.display": "Affichage",
      "ui.settings.friendsAccess": "Mes amis peuvent me rejoindre par Internet",
      "ui.settings.friendsAccessDesc": "Actif par d\xE9faut. Tout est r\xE9gl\xE9 automatiquement : la box, le pare-feu et l\u2019adresse. Seuls les amis que tu invites peuvent entrer. Si ta box ne laisse pas entrer, ils passent par le relais d\u2019Ourdir : rien \xE0 ouvrir.",
      "ui.settings.graphics": "Qualit\xE9 graphique du plateau",
      "ui.settings.graphics.high": "\xC9lev\xE9e",
      "ui.settings.graphics.low": "Basse : plus rapide, images plus grossi\xE8res",
      "ui.settings.graphics.medium": "Moyenne",
      "ui.settings.graphics.ultra": "Ultra : la qualit\xE9 r\xE9elle des images",
      "ui.settings.graphicsAuto": "Automatique (adapt\xE9e \xE0 ce PC : {level})",
      "ui.settings.graphicsAutoMeasured": "Automatique (mesur\xE9 : {level})",
      "ui.settings.graphicsDetected": "Ce PC : {gpu}, {cores} c\u0153urs, {mem} Go de m\xE9moire.",
      "ui.settings.graphicsHint": "Sur un PC puissant, cartes et jetons gardent toute leur finesse, m\xEAme d\xE9zoom\xE9s. Plus le PC est modeste, plus on simplifie l\u2019image pour rester fluide.",
      "ui.settings.graphicsName.fallback": "Secours",
      "ui.settings.graphicsName.high": "\xC9lev\xE9e",
      "ui.settings.graphicsName.low": "Basse",
      "ui.settings.graphicsName.medium": "Moyenne",
      "ui.settings.graphicsName.ultra": "Ultra",
      "ui.settings.language": "Langue",
      "ui.settings.languageAuto": "Automatique ({name})",
      "ui.settings.mode.internet": "Internet (recommand\xE9)",
      "ui.settings.mode.internet.desc": "Les amis invit\xE9s peuvent jouer de n\u2019importe o\xF9.",
      "ui.settings.mode.lan": "R\xE9seau local",
      "ui.settings.mode.lan.desc": "Seulement les amis du m\xEAme Wi\u2011Fi ou r\xE9seau.",
      "ui.settings.mode.local": "Moi seul",
      "ui.settings.mode.local.desc": "Personne d\u2019autre ne peut se connecter.",
      "ui.settings.network": "Acc\xE8s r\xE9seau",
      "ui.settings.openData": "Ouvrir le dossier de donn\xE9es",
      "ui.settings.port": "Port : {port}",
      "ui.settings.publicHost": "Adresse personnalis\xE9e (nom DDNS)",
      "ui.settings.publicHostHint": "Pour les utilisateurs avanc\xE9s. Normalement l\u2019adresse est d\xE9tect\xE9e toute seule. Sans http:// ni port.",
      "ui.settings.reach": "Mes amis peuvent-ils me joindre ?",
      "ui.settings.reachRun": "V\xE9rifier",
      "ui.settings.recheck": "Rev\xE9rifier maintenant",
      "ui.settings.reduceMotion": "R\xE9duire les animations",
      "ui.settings.relay": "Relais",
      "ui.settings.relay.custom": "Un autre relais",
      "ui.settings.relay.custom.desc": "Le tien, ou celui d\u2019une communaut\xE9.",
      "ui.settings.relay.default": "Le relais d\u2019Ourdir",
      "ui.settings.relay.none": "Aucun relais",
      "ui.settings.relay.none.desc": "Tes amis devront te joindre en direct (box ouverte, IPv6 ou UPnP).",
      "ui.settings.relayCustomHint": "Un nom d\u2019h\xF4te (avec un port si besoin) ou une adresse ws(s)://. Le relais doit faire tourner le programme relais d\u2019Ourdir.",
      "ui.settings.relayDesc": "Quand ta box ne laisse pas entrer tes amis, ils passent par le relais : ta table reste chez toi, le relais ne fait que transporter des octets chiffr\xE9s qu\u2019il ne peut pas lire. Le direct est toujours tent\xE9 en premier.",
      "ui.settings.relayInvalid": "Relais invalide : un nom d\u2019h\xF4te (avec un port si besoin) ou une adresse ws(s)://.",
      "ui.settings.restartNote": "Changer d\u2019acc\xE8s relance la table en cours.",
      "ui.settings.save": "Enregistrer",
      "ui.settings.textSize": "Taille de l\u2019interface",
      "ui.settings.title": "Param\xE8tres",
      "ui.settings.uiMode": "Interface en partie",
      "ui.settings.uiMode.full": "Compl\xE8te : tous les menus et fen\xEAtres",
      "ui.settings.uiMode.hidden": "Masqu\xE9e : la carte seule (immersion)",
      "ui.settings.uiMode.reduced": "R\xE9duite : seulement les ic\xF4nes",
      "ui.settings.uiModeHint": "Pendant la partie : Alt+1 compl\xE8te, Alt+2 r\xE9duite, Alt+3 masqu\xE9e, Alt+H masque ou r\xE9affiche. Le menu du jeu propose les m\xEAmes choix. Quand l\u2019interface est masqu\xE9e, le bord haut de la fen\xEAtre fait r\xE9appara\xEEtre l\u2019onglet Menu.",
      "ui.share.accept": "J\u2019ai le droit de partager ce contenu et j\u2019accepte les r\xE8gles du catalogue.",
      "ui.share.backupText": "Sans elle, tu ne pourras plus publier de nouvelle version de tes paquets. Range le fichier dans un endroit s\xFBr : gestionnaire de mots de passe, cl\xE9 USB.",
      "ui.share.backupTitle": "Sauvegarde ta cl\xE9",
      "ui.share.button": "Partager au catalogue",
      "ui.share.close": "Fermer",
      "ui.share.code": "Code \xE0 6 chiffres",
      "ui.share.codeHint": "Il arrive en moins d\u2019une minute ; regarde aussi tes ind\xE9sirables.",
      "ui.share.codeTitle": "Code envoy\xE9 \xE0 {email}",
      "ui.share.createKey": "Cr\xE9er ma cl\xE9",
      "ui.share.description": "Description",
      "ui.share.doneTitle": "Envoy\xE9 !",
      "ui.share.email": "Adresse e-mail",
      "ui.share.emailText": "Un code \xE0 6 chiffres t\u2019est envoy\xE9. L\u2019adresse n\u2019est jamais publi\xE9e ; elle est gard\xE9e un an (obligation l\xE9gale d\u2019un h\xE9bergeur).",
      "ui.share.emailTitle": "Ton adresse e-mail",
      "ui.share.exportKey": "Exporter ma cl\xE9",
      "ui.share.exportTitle": "Enregistrer ta cl\xE9 d\u2019\xE9diteur",
      "ui.share.exported": "Cl\xE9 enregistr\xE9e : {path}",
      "ui.share.eyebrow": "Partager \xAB {name} \xBB",
      "ui.share.fail": "Le partage a \xE9chou\xE9.",
      "ui.share.haveVerified": "D\xE9j\xE0 v\xE9rifi\xE9e",
      "ui.share.importKey": "J\u2019ai d\xE9j\xE0 une cl\xE9 (importer)",
      "ui.share.importTitle": "Importer une cl\xE9 d\u2019\xE9diteur",
      "ui.share.keyText": "Elle signe tes partages et prouve qu\u2019ils viennent de toi. Elle est distincte de ton identit\xE9 de joueur (codes d\u2019ami).",
      "ui.share.keyTitle": "Ta cl\xE9 d\u2019\xE9diteur",
      "ui.share.lang.en": "English",
      "ui.share.lang.fr": "Fran\xE7ais",
      "ui.share.language": "Langue",
      "ui.share.license": "Licence",
      "ui.share.licenseAllRights": "Tous droits r\xE9serv\xE9s (partage gratuit)",
      "ui.share.licenseOther": "Sous licence d\u2019un \xE9diteur\u2026",
      "ui.share.licenseOtherHint": "par exemple : Homebrew Content Policy (R. Talsorian Games)",
      "ui.share.mine": "Mes publications",
      "ui.share.mustAccept": "Coche la case pour accepter les r\xE8gles du catalogue.",
      "ui.share.name": "Nom",
      "ui.share.newCode": "Nouveau code",
      "ui.share.next": "Continuer",
      "ui.share.none": "Tu n\u2019as encore rien publi\xE9.",
      "ui.share.noneText": "Partage un syst\xE8me que tu as fait : page Syst\xE8mes de jeu, bouton \xAB Partager au catalogue \xBB.",
      "ui.share.privacy": "Conserv\xE9s un an : ton adresse e-mail, ton adresse IP et ta cl\xE9 publique (obligation l\xE9gale d\u2019un h\xE9bergeur). R\xE8gles : github.com/ourdirvtt/catalogue/blob/main/RULES.md",
      "ui.share.publisher": "Nom d\u2019\xE9diteur affich\xE9",
      "ui.share.publisherHint": "un pseudo : jamais ton adresse",
      "ui.share.savedHint": "Cl\xE9 sauvegard\xE9e.",
      "ui.share.seeInCatalog": "Voir dans le catalogue",
      "ui.share.send": "Envoyer au catalogue",
      "ui.share.sendCode": "Recevoir un code",
      "ui.share.sending": "Envoi\u2026",
      "ui.share.sentOn": "Envoy\xE9 le {date}",
      "ui.share.sheetTitle": "Sa fiche dans le catalogue",
      "ui.share.state.efface": "Retir\xE9",
      "ui.share.state.en-controle": "En contr\xF4le",
      "ui.share.state.ferme": "Ferm\xE9",
      "ui.share.state.publie": "Publi\xE9 \u2714",
      "ui.share.state.refuse": "Refus\xE9",
      "ui.share.stateText.efface": "Retir\xE9 du catalogue.",
      "ui.share.stateText.en-controle": "Le contr\xF4le automatique est en cours : en g\xE9n\xE9ral quelques minutes.",
      "ui.share.stateText.ferme": "La demande a \xE9t\xE9 ferm\xE9e sans publication.",
      "ui.share.stateText.publie": "C\u2019est en ligne : tout le monde peut l\u2019installer depuis le Catalogue.",
      "ui.share.stateText.refuse": "Le contr\xF4le l\u2019a refus\xE9.",
      "ui.share.step.done": "Suivi",
      "ui.share.step.email": "E-mail",
      "ui.share.step.key": "Cl\xE9",
      "ui.share.step.sheet": "Fiche",
      "ui.share.summary": "R\xE9sum\xE9 (une phrase)",
      "ui.share.tags": "\xC9tiquettes (s\xE9par\xE9es par des virgules)",
      "ui.share.track.check": "Contr\xF4le automatique",
      "ui.share.track.published": "Publi\xE9",
      "ui.share.track.refused": "Refus\xE9 au contr\xF4le",
      "ui.share.track.sent": "Envoy\xE9",
      "ui.share.verify": "V\xE9rifier",
      "ui.sheets.bright": "Lumi\xE8re vive",
      "ui.sheets.color": "Couleur",
      "ui.sheets.cone": "C\xF4ne",
      "ui.sheets.dark": "Vision dans le noir",
      "ui.sheets.dim": "Lumi\xE8re faible",
      "ui.sheets.filter": "Filtre",
      "ui.sheets.filterRange": "Port\xE9e du filtre",
      "ui.sheets.filters.blindsight": "Perception aveugle",
      "ui.sheets.filters.grey": "Noir et blanc",
      "ui.sheets.filters.nightvision": "Vision nocturne (JVN)",
      "ui.sheets.filters.none": "Aucun",
      "ui.sheets.filters.thermal": "Thermique",
      "ui.sheets.hint": "Les r\xE9glages d\u2019\xE9clairage que prend chaque nouvelle fiche (onglet Param\xE8tres). Les fiches existantes gardent les leurs.",
      "ui.sheets.kind": "Type de lumi\xE8re",
      "ui.sheets.light": "Lumi\xE8re port\xE9e allum\xE9e",
      "ui.sheets.none": "aucune",
      "ui.sheets.preset.candle": "Bougie",
      "ui.sheets.preset.custom": "Personnalis\xE9e",
      "ui.sheets.preset.lantern": "Lanterne",
      "ui.sheets.preset.spell": "Sort de lumi\xE8re",
      "ui.sheets.preset.torch": "Torche",
      "ui.sheets.saveFail": "Les d\xE9fauts des fiches n\u2019ont pas pu \xEAtre enregistr\xE9s.",
      "ui.sheets.sceneSight": "sans limite",
      "ui.sheets.sight": "Port\xE9e de vue",
      "ui.sheets.title": "Fiches",
      "ui.sheets.unit.case": "cases",
      "ui.sheets.unit.ft": "ft",
      "ui.sheets.unit.m": "m",
      "ui.step.askProvider": "Demande \xE0 ton fournisseur une adresse IPv4 publique, ou utilise l\u2019IPv6.",
      "ui.step.enableUpnp": "Dans les r\xE9glages de ta box, active \xAB UPnP \xBB (souvent dans \xAB NAT \xBB ou \xAB Ports \xBB).",
      "ui.step.forwardPort": "Ou redirige le port TCP {port} vers cet ordinateur.",
      "ui.step.ipv6Firewall": "V\xE9rifie que ta box autorise les connexions entrantes IPv6 sur le port {port}.",
      "ui.step.retryFirewall": "Relance la table et accepte la fen\xEAtre Windows qui s\u2019affiche.",
      "ui.systems.fromCatalog": "Du catalogue, par {name}",
      "ui.systems.included": "Inclus",
      "ui.systems.lead": "Les r\xE8gles et les fiches utilis\xE9es par une table.",
      "ui.systems.license": "Licence : {license}",
      "ui.systems.manage": "G\xE9rer dans Modules",
      "ui.systems.mine": "Le mien",
      "ui.systems.official": "Officiel",
      "ui.systems.rights": "D&D 5e, Warhammer et autres jeux sous licence : seulement avec l\u2019accord des ayants droit.",
      "ui.systems.title": "Syst\xE8mes de jeu",
      "ui.systems.usable": "Pr\xEAt \xE0 jouer",
      "ui.tables.backedUp": "Sauvegarde enregistr\xE9e.",
      "ui.tables.backup": "Sauvegarder",
      "ui.tables.backupTitle": "Sauvegarder la table",
      "ui.tables.changedHint": "Le certificat de cette table a chang\xE9. Ne te connecte pas, sauf si ton ami a r\xE9install\xE9 l\u2019application.",
      "ui.tables.compendium.dnd5e": "D&D 5e (SRD)",
      "ui.tables.compendium.none": "Aucun",
      "ui.tables.compendiumHint": "Ce que la fen\xEAtre Compendium propose \xE0 cette table : rien (un compendium vide), ou celui d\u2019un syst\xE8me de jeu. Se change ici et s\u2019applique au prochain lancement de la table.",
      "ui.tables.compendiumLabel": "Compendium",
      "ui.tables.compendiumRestart": "Le compendium changera au prochain lancement de la table.",
      "ui.tables.confirmDelete": "Supprimer la table \xAB {name} \xBB ? Elle est envoy\xE9e \xE0 la corbeille : tu peux la r\xE9cup\xE9rer de l\xE0.",
      "ui.tables.crashed": "La table \xAB {name} \xBB s\u2019est arr\xEAt\xE9e de fa\xE7on inattendue. Tu peux la relancer ; les d\xE9tails sont dans le journal (menu Aide).",
      "ui.tables.create": "Cr\xE9er une table",
      "ui.tables.createSubmit": "Cr\xE9er",
      "ui.tables.delete": "Supprimer",
      "ui.tables.deleted": "Table \xAB {name} \xBB envoy\xE9e \xE0 la corbeille.",
      "ui.tables.duplicate": "Dupliquer",
      "ui.tables.duplicateSuffix": "(copie)",
      "ui.tables.duplicated": "Copie cr\xE9\xE9e : \xAB {name} \xBB.",
      "ui.tables.forget": "Oublier",
      "ui.tables.friends": "Tables de mes amis",
      "ui.tables.friendsNone": "Tu n\u2019as rejoint aucune table. Colle une invitation ci-dessous.",
      "ui.tables.host": "H\xE9berg\xE9e par {name}",
      "ui.tables.join": "Rejoindre",
      "ui.tables.joinHint": "Colle l\u2019invitation re\xE7ue d\u2019un ami (elle commence par td1i_). Il doit \xEAtre dans tes amis.",
      "ui.tables.joinInvite": "Rejoindre avec une invitation",
      "ui.tables.joinOwn": "Rejoindre",
      "ui.tables.joinSubmit": "Rejoindre",
      "ui.tables.lastJoined": "Derni\xE8re visite : {date}",
      "ui.tables.lastPlayed": "Derni\xE8re partie : {date}",
      "ui.tables.launch": "Lancer",
      "ui.tables.mine": "Mes tables",
      "ui.tables.name": "Nom de la table",
      "ui.tables.neverPlayed": "Jamais lanc\xE9e",
      "ui.tables.none": "Tu n\u2019h\xE9berges aucune table pour l\u2019instant. Cr\xE9e-en une pour commencer.",
      "ui.tables.offlineHint": "Hors ligne : la table est arr\xEAt\xE9e ou injoignable, ou ton acc\xE8s a \xE9t\xE9 retir\xE9.",
      "ui.tables.open": "Ouvrir",
      "ui.tables.openFolder": "Ouvrir le dossier",
      "ui.tables.others": "Autres tables",
      "ui.tables.preset.full": "Complet",
      "ui.tables.preset.lite": "Lite",
      "ui.tables.presetForever": "Se choisit maintenant et ne change plus : une table Lite reste l\xE9g\xE8re, une table Compl\xE8te garde tout.",
      "ui.tables.presetHint.full": "Toutes les fonctions de Ourdir, celles d\u2019aujourd\u2019hui et de demain : \xE9clairage dynamique et murs, vision, compendium, fiches compl\xE8tes, modules.",
      "ui.tables.presetHint.lite": "Simple, \xE0 la Owlbear : la carte, la grille et la r\xE8gle, un brouillard simple, quatre ambiances de lumi\xE8re, une fiche minimale, d\xE9s, initiative, macros et musique. Rien d\u2019autre \xE0 r\xE9gler.",
      "ui.tables.presetLabel": "Type de table",
      "ui.tables.presetShort.full": "Complet",
      "ui.tables.presetShort.lite": "Lite",
      "ui.tables.refused": "La table a refus\xE9 l\u2019entr\xE9e : {reason}",
      "ui.tables.refusedNoReason": "La table a refus\xE9 l\u2019entr\xE9e. V\xE9rifie que tu es toujours invit\xE9, puis r\xE9essaie.",
      "ui.tables.rename": "Renommer",
      "ui.tables.renameSave": "Enregistrer",
      "ui.tables.restore": "Restaurer une sauvegarde",
      "ui.tables.restoreTitle": "Restaurer une table",
      "ui.tables.restored": "Table \xAB {name} \xBB restaur\xE9e.",
      "ui.tables.restoredNoSystem": "Table \xAB {name} \xBB restaur\xE9e, mais son syst\xE8me de jeu n\u2019est pas install\xE9 ici : elle utilise le syst\xE8me Generic. Importe le syst\xE8me puis change-le.",
      "ui.tables.settings": "Param\xE8tres",
      "ui.tables.startFailed": "La table n\u2019a pas pu d\xE9marrer ({detail}). V\xE9rifie qu\u2019aucun autre programme n\u2019utilise le m\xEAme port, puis regarde le journal (menu Aide).",
      "ui.tables.starting": "D\xE9marrage\u2026",
      "ui.tables.status.changed": "Certificat modifi\xE9",
      "ui.tables.status.checking": "V\xE9rification\u2026",
      "ui.tables.status.hosting": "En ligne \xB7 tu l\u2019h\xE9berges",
      "ui.tables.status.offline": "Hors ligne",
      "ui.tables.status.online": "En ligne",
      "ui.tables.status.stopped": "Arr\xEAt\xE9e",
      "ui.tables.stop": "Arr\xEAter",
      "ui.tables.stopFirst": "Arr\xEAte d\u2019abord cette table.",
      "ui.tables.system": "Syst\xE8me de jeu",
      "ui.tables.systemHint": "Les fiches d\xE9j\xE0 cr\xE9\xE9es gardent leur ancien format ; les nouvelles utiliseront ce syst\xE8me.",
      "ui.tables.theme.cyberpunk": "Cyberpunk",
      "ui.tables.theme.espace": "Space opera",
      "ui.tables.theme.fantasy": "Fantasy",
      "ui.tables.theme.horreur": "Horreur",
      "ui.tables.theme.metier": "M\xE9tier",
      "ui.tables.theme.noir": "Film noir",
      "ui.tables.themeHint": "L\u2019apparence de l\u2019interface pour toute la table, jamais celle de la carte. Le MJ peut le changer en jeu, dans les R\xE9glages.",
      "ui.tables.themeLabel": "Th\xE8me de l\u2019interface",
      "ui.themes.builtin": "Int\xE9gr\xE9",
      "ui.themes.choice.corners.doux": "Doux",
      "ui.themes.choice.corners.ronds": "Ronds",
      "ui.themes.choice.corners.vifs": "Vifs",
      "ui.themes.choice.cut.aucune": "Aucune",
      "ui.themes.choice.cut.legere": "L\xE9g\xE8re",
      "ui.themes.choice.cut.marquee": "Marqu\xE9e",
      "ui.themes.choice.filter.dread": "P\xE9nombre",
      "ui.themes.choice.filter.neon": "N\xE9on",
      "ui.themes.choice.filter.noir": "Noir et blanc",
      "ui.themes.choice.filter.none": "Aucun",
      "ui.themes.choice.filter.scan": "Lignes de balayage",
      "ui.themes.choice.filter.vignette": "Vignette",
      "ui.themes.choice.glow.aucun": "Aucun",
      "ui.themes.choice.glow.doux": "Doux",
      "ui.themes.choice.glow.neon": "N\xE9on",
      "ui.themes.choice.grain.0": "Aucun",
      "ui.themes.choice.grain.1": "L\xE9ger",
      "ui.themes.choice.grain.2": "Moyen",
      "ui.themes.choice.grain.3": "Fort",
      "ui.themes.choice.knots.carres": "Carr\xE9es",
      "ui.themes.choice.knots.losanges": "Losanges",
      "ui.themes.choice.knots.ronds": "Rondes",
      "ui.themes.choice.tabs.coupes": "Coup\xE9s",
      "ui.themes.choice.tabs.droits": "Droits",
      "ui.themes.choice.texture.aucune": "Aucune",
      "ui.themes.choice.texture.lignes": "Lignes",
      "ui.themes.choice.texture.papier": "Papier",
      "ui.themes.choice.texture.tissage": "Tissage",
      "ui.themes.close": "Fermer",
      "ui.themes.copySuffix": "(copie)",
      "ui.themes.create": "Cr\xE9er un th\xE8me",
      "ui.themes.delete": "Supprimer",
      "ui.themes.deleteConfirm": "Supprimer \xAB {name} \xBB ? Les tables qui l\u2019utilisent reprendront le th\xE8me dont il est parti.",
      "ui.themes.duplicate": "Dupliquer",
      "ui.themes.edit": "Modifier",
      "ui.themes.editorTitle": "Th\xE8me \xAB {name} \xBB",
      "ui.themes.effects.capitals": "Titres en capitales",
      "ui.themes.effects.filter": "Filtre d\u2019\xE9cran propos\xE9 (\xC9clairage)",
      "ui.themes.effects.glow": "Halo de l\u2019accent",
      "ui.themes.effects.grain": "Grain",
      "ui.themes.effects.texture": "Trame des panneaux",
      "ui.themes.export": "Exporter",
      "ui.themes.exportTitle": "Exporter le th\xE8me",
      "ui.themes.exported": "Th\xE8me export\xE9 : {path}",
      "ui.themes.fellBack": "{n} table(s) reprennent le th\xE8me dont \xAB {name} \xBB \xE9tait parti.",
      "ui.themes.font.body": "Texte",
      "ui.themes.font.display": "Titres",
      "ui.themes.font.mono": "Chiffres et codes",
      "ui.themes.from": "Partir de",
      "ui.themes.fromCatalog": "Du catalogue, par {name}",
      "ui.themes.import": "Importer un th\xE8me\u2026",
      "ui.themes.importTitle": "Importer un th\xE8me Ourdir",
      "ui.themes.imported": "Th\xE8me \xAB {name} \xBB import\xE9.",
      "ui.themes.lead": "L\u2019apparence de tes tables : couleurs, polices, signature. Un th\xE8me ne touche jamais la carte.",
      "ui.themes.leaveConfirm": "Des changements ne sont pas enregistr\xE9s. Quitter quand m\xEAme ?",
      "ui.themes.mine": "Le mien",
      "ui.themes.name": "Nom du th\xE8me",
      "ui.themes.needName": "Donne un nom au th\xE8me (2 caract\xE8res au moins).",
      "ui.themes.preview": "Aper\xE7u du th\xE8me",
      "ui.themes.readability": "Lisibilit\xE9",
      "ui.themes.sample.bad": "\xE0 terre",
      "ui.themes.sample.button": "Lancer",
      "ui.themes.sample.chat": "Chat",
      "ui.themes.sample.gm": "La porte grince sur ses gonds.",
      "ui.themes.sample.hp": "PV 12 / 14",
      "ui.themes.sample.music": "Musique",
      "ui.themes.sample.ok": "r\xE9ussi",
      "ui.themes.sample.player": "J\u2019\xE9coute \xE0 la porte.",
      "ui.themes.sample.roll": "Perception",
      "ui.themes.sample.scene": "La crypte",
      "ui.themes.sample.sheets": "Fiches",
      "ui.themes.sample.warn": "bless\xE9",
      "ui.themes.sample.whisper": "(chuchot\xE9)",
      "ui.themes.save": "Enregistrer",
      "ui.themes.saved": "Th\xE8me enregistr\xE9.",
      "ui.themes.shape.corners": "Coins",
      "ui.themes.shape.cut": "Coupe des coins",
      "ui.themes.shape.knots": "Perles du cordon",
      "ui.themes.shape.tabs": "Rubans (onglets)",
      "ui.themes.sheet.description": "Description",
      "ui.themes.sheet.license": "Licence",
      "ui.themes.sheet.version": "Version",
      "ui.themes.start": "Cr\xE9er",
      "ui.themes.tab.colors": "Couleurs",
      "ui.themes.tab.effects": "Effets",
      "ui.themes.tab.fonts": "Polices",
      "ui.themes.tab.shape": "Forme",
      "ui.themes.tab.sheet": "Fiche",
      "ui.themes.title": "Th\xE8mes de table",
      "ui.themes.unreadable": "Corrige la lisibilit\xE9 pour pouvoir enregistrer.",
      "ui.themes.useAsBase": "Utiliser comme base",
      "ui.toile.aria": "Table {table} : {n} ami(s), dont {i} invit\xE9(s).",
      "ui.toile.caption": "{n} ami(s) \xB7 {i} invit\xE9(s) \xE0 cette table",
      "ui.toile.manage": "G\xE9rer mes amis",
      "ui.toile.none": "Personne d\u2019invit\xE9 pour l\u2019instant.",
      "ui.toile.you": "Toi",
      "ui.tr.delete": "Supprimer",
      "ui.tr.deleteConfirm": "Supprimer la traduction \xAB {name} \xBB ?",
      "ui.tr.err.badId": "Identifiant invalide (minuscules, chiffres, tirets).",
      "ui.tr.err.badLanguage": "Code de langue invalide (par exemple es, pt-BR).",
      "ui.tr.err.badMeta": "Auteur, licence ou description invalide.",
      "ui.tr.err.badName": "Le nom de la langue manque ou d\xE9passe 40 caract\xE8res.",
      "ui.tr.err.badSection": "Une section n\u2019est pas une liste de textes.",
      "ui.tr.err.badSource": "La colonne anglaise (source) est ab\xEEm\xE9e.",
      "ui.tr.err.badTarget": "Cette traduction ne dit pas ce qu\u2019elle traduit.",
      "ui.tr.err.badTexts": "Les textes manquent.",
      "ui.tr.err.badVersion": "Version invalide (par exemple 1.0.0).",
      "ui.tr.err.fromCatalog": "Cette traduction vient du catalogue : elle sert \xE0 Ourdir, mais ne se modifie, ne s\u2019exporte ni ne se partage.",
      "ui.tr.err.markup": "Un texte contient un chevron ouvrant hors des balises de l\u2019anglais : une traduction n\u2019apporte que du texte.",
      "ui.tr.err.notFound": "Traduction introuvable.",
      "ui.tr.err.notJson": "Ce fichier n\u2019est pas du JSON valide.",
      "ui.tr.err.notString": "Un texte n\u2019est pas du texte.",
      "ui.tr.err.notText": "Ce fichier ne se lit pas.",
      "ui.tr.err.notTranslation": "Ce fichier n\u2019est pas une traduction Ourdir.",
      "ui.tr.err.targetLater": "Les traductions de syst\xE8mes, de compendiums et de modules arrivent bient\xF4t.",
      "ui.tr.err.tooBig": "Traduction trop volumineuse (1 Mo au plus, sans la colonne anglaise).",
      "ui.tr.err.tooLong": "Un texte d\xE9passe 2 000 caract\xE8res.",
      "ui.tr.err.unknownField": "Le fichier contient un champ inconnu.",
      "ui.tr.err.unknownSection": "Section inconnue (seules engine, launcher et page existent).",
      "ui.tr.export": "Exporter",
      "ui.tr.exportTitle": "Exporter la traduction",
      "ui.tr.from": "Partir de",
      "ui.tr.fromCatalog": "Du catalogue, par {name}.",
      "ui.tr.fromNothing": "Rien (ou les textes de Let\u2019s Role pour de, es, it, pt)",
      "ui.tr.hint": "Traduis Ourdir dans ta langue : exporte le mod\xE8le, remplis-le (un fichier JSON, l\u2019anglais en regard), importe-le. Ce qui manque reste en anglais.",
      "ui.tr.import": "Importer une traduction\u2026",
      "ui.tr.importTitle": "Choisir une traduction",
      "ui.tr.imported": "\xAB {name} \xBB import\xE9e ({pct} %).",
      "ui.tr.importedWarn": "\xAB {name} \xBB import\xE9e ({pct} %). {unknown} texte(s) inconnu(s) ignor\xE9(s), {mismatched} texte(s) aux variables ou balises diff\xE9rentes de l\u2019anglais laiss\xE9(s) de c\xF4t\xE9.",
      "ui.tr.language": "Code de la langue",
      "ui.tr.languageHint": "Par exemple es, pt-BR, oc.",
      "ui.tr.mine": "Mes traductions",
      "ui.tr.name": "Nom de la langue, dans cette langue",
      "ui.tr.none": "Aucune traduction pour l\u2019instant.",
      "ui.tr.option": "{name} \xB7 {pct} %",
      "ui.tr.progress": "{pct} % \xB7 moteur {engine} % \xB7 lanceur {launcher} % \xB7 table {page} %",
      "ui.tr.template": "Exporter le mod\xE8le",
      "ui.tr.templateSaved": "Mod\xE8le enregistr\xE9 : {path}",
      "ui.tr.templateTitle": "Enregistrer le mod\xE8le de traduction",
      "ui.tr.title": "Traductions",
      "ui.wizard.attrs.hint": "Tu peux en renommer, en retirer ou en ajouter (douze au plus).",
      "ui.wizard.attrs.label": "Caract\xE9ristiques (s\xE9par\xE9es par des virgules)",
      "ui.wizard.attrs.q": "Quelles caract\xE9ristiques ?",
      "ui.wizard.back": "Pr\xE9c\xE9dent",
      "ui.wizard.combat.no": "Non",
      "ui.wizard.combat.q": "Y a-t-il du combat tactique ?",
      "ui.wizard.combat.yes": "Oui : classe d\u2019armure, initiative et attaques",
      "ui.wizard.finish": "Cr\xE9er ma fiche",
      "ui.wizard.genre.more": "Les jeux \xE0 r\xE9serve de d\xE9s ou \xE0 d\xE9s narratifs viendront plus tard : pour eux, choisis \xAB Je d\xE9cide \xBB et r\xE8gle les jets ensuite.",
      "ui.wizard.genre.q": "Quel genre de jeu ?",
      "ui.wizard.inventory.q": "Un inventaire ?",
      "ui.wizard.look.hint": "Tu pourras tout r\xE9gler ensuite dans l\u2019\xE9diteur. Ta fiche sera pr\xEAte \xE0 jouer d\xE8s l\u2019ouverture.",
      "ui.wizard.look.q": "Quelle apparence ?",
      "ui.wizard.magic.q": "Y a-t-il de la magie ?",
      "ui.wizard.name": "Nom de ton syst\xE8me",
      "ui.wizard.next": "Suivant",
      "ui.wizard.no": "Non",
      "ui.wizard.resources.hint": "Points de vie, destin, mana\u2026 Chacune a une valeur actuelle et un maximum (six au plus).",
      "ui.wizard.resources.label": "Ressources (s\xE9par\xE9es par des virgules)",
      "ui.wizard.resources.q": "Quelles ressources ?",
      "ui.wizard.skills.q": "Ajouter une liste de comp\xE9tences ?",
      "ui.wizard.stepOf": "\xC9tape {n} sur {total}",
      "ui.wizard.title": "Assistant de cr\xE9ation",
      "ui.wizard.yes": "Oui",
      "wizard.bonusInitiative": "Bonus d\u2019initiative",
      "wizard.chaqueCaracteristiqueEstPourcentage": "Chaque caract\xE9ristique est un pourcentage ; un clic lance 1d100, \xE0 comparer \xE0 la valeur.",
      "wizard.chaqueCaracteristiqueScoreModificateur": "Chaque caract\xE9ristique a un score ; le modificateur se calcule tout seul ((score \u2212 10) \xF7 2) et un clic lance 1d20 + modificateur.",
      "wizard.classeArmure": "Classe d\u2019armure",
      "wizard.competences": "Comp\xE9tences",
      "wizard.d20AvecBonusDirect": "Un d20 avec un bonus direct, et tu nommes tout toi-m\xEAme.",
      "wizard.d20ScoreModificateur": "d20 : score et modificateur",
      "wizard.equipement": "\xC9quipement",
      "wizard.forceConstitutionTailleDexterite": "Force, Constitution, Taille, Dext\xE9rit\xE9, Apparence, Intelligence, Pouvoir, \xC9ducation",
      "wizard.forceDexteriteConstitutionIntelligence": "Force, Dext\xE9rit\xE9, Constitution, Intelligence, Sagesse, Charisme",
      "wizard.invalid": "L\u2019assistant a produit une fiche invalide : {why}",
      "wizard.jeDecide": "Je d\xE9cide",
      "wizard.pasMagie": "Pas de magie",
      "wizard.physiqueAdresseEspritPresence": "Physique, Adresse, Esprit, Pr\xE9sence",
      "wizard.pointsVieSanteMentale": "Points de vie, Sant\xE9 mentale",
      "wizard.ressourceActuelMaxListe": "Une ressource actuel / max, et une liste de sorts.",
      "wizard.seriePastillesCocherListe": "Une s\xE9rie de pastilles \xE0 cocher, et une liste de sorts.",
      "wizard.valeurCaracteristiqueEstBonus": "La valeur de la caract\xE9ristique est le bonus : un clic lance 1d20 + valeur.",
      "ui.cat.showCommunity": "Afficher le contenu communautaire",
      "ui.cat.verifiedOnly": "Seul le contenu v\xE9rifi\xE9 est montr\xE9 (Ourdir, Officiel, Valid\xE9).",
      "ui.cat.hiddenOne": "1 contenu communautaire correspond : l\u2019afficher",
      "ui.cat.hiddenMany": "{n} contenus communautaires correspondent : les afficher",
      "ui.grades.title": "Pourquoi monter en grade ?",
      "ui.grades.intro": "Tout contenu publi\xE9 est d\u2019abord Communautaire : les contr\xF4les automatiques l\u2019ont accept\xE9, personne ne l\u2019a encore relu. Valid\xE9 veut dire qu\u2019une personne l\u2019a relu : c\u2019est la marque de qualit\xE9 d\u2019Ourdir.",
      "ui.grades.visibility": "Visibilit\xE9 : le contenu Valid\xE9 est montr\xE9 \xE0 tout le monde d\xE8s l\u2019ouverture du Catalogue ; le communautaire n\u2019est vu que par ceux qui l\u2019affichent.",
      "ui.grades.trust": "Confiance : le badge Valid\xE9 dit qu\u2019une personne l\u2019a relu, et le fichier est h\xE9berg\xE9 par Ourdir (il reste disponible m\xEAme si ton h\xE9bergement dispara\xEEt).",
      "ui.grades.updates": "Mises \xE0 jour sans attente : un cr\xE9ateur Valid\xE9 publie ses mises \xE0 jour sans nouvelle relecture, sauf un module qui demande une nouvelle permission.",
      "ui.grades.sales": "Vente, plus tard : \xEAtre Valid\xE9 est la condition pour demander \xE0 devenir vendeur agr\xE9\xE9, quand la vente ouvrira.",
      "ui.grades.criteriaTitle": "Ce qu\u2019on relit",
      "ui.grades.criteria": "\xC7a marche comme annonc\xE9 ; les droits sont respect\xE9s (pas de contenu prot\xE9g\xE9 sans licence) ; rien de nuisible ; une fiche claire (nom, r\xE9sum\xE9, langues) ; pour un module, des permissions justifi\xE9es.",
      "ui.grades.delay": "Chaque demande est relue par une personne, au cas par cas. Le traitement peut prendre plusieurs jours, voire quelques semaines. La validation n\u2019est jamais automatique ni garantie. Tu re\xE7ois la r\xE9ponse par e-mail et dans l\u2019appli."
    };
  }
});

// apps/desktop/renderer/builder-theme.js
var require_builder_theme = __commonJS({
  "apps/desktop/renderer/builder-theme.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) module2.exports = factory();
      else root.TTBuilderTheme = factory();
    })(typeof self !== "undefined" ? self : exports2, function() {
      "use strict";
      var given2 = null;
      var french2 = null;
      function say2(key, vars) {
        var text;
        if (given2) text = given2(key, vars);
        else {
          if (french2 === null) {
            try {
              french2 = typeof module2 === "object" && module2.exports && typeof require === "function" ? require_fr() : {};
            } catch (e) {
              french2 = {};
            }
          }
          text = french2[key] || key;
          Object.keys(vars || {}).forEach(function(k) {
            text = text.split("{" + k + "}").join(String(vars[k]));
          });
        }
        return text;
      }
      function useTexts2(fn) {
        given2 = typeof fn === "function" ? fn : null;
      }
      var HEX = /^#[0-9a-fA-F]{6}$/;
      var SKIN_ID_RE = /^[a-z0-9_]{1,24}$/;
      var FONTS = {
        system: { get label() {
          return say2("builderTheme.moderneSysteme");
        }, css: '"Segoe UI", system-ui, -apple-system, sans-serif' },
        rounded: { label: "Arrondie", css: '"Trebuchet MS", "Segoe UI", sans-serif' },
        geometric: { get label() {
          return say2("builderTheme.geometrique");
        }, css: '"Century Gothic", "Franklin Gothic Medium", Tahoma, sans-serif' },
        impact: { get label() {
          return say2("builderTheme.afficheGrasCondense");
        }, css: 'Impact, "Arial Narrow Bold", "Franklin Gothic Heavy", sans-serif' },
        serif: { label: "Serif classique", css: 'Georgia, "Times New Roman", serif' },
        book: { label: "Livre ancien", css: '"Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif' },
        typewriter: { get label() {
          return say2("builderTheme.machineEcrire");
        }, css: '"Courier New", Courier, monospace' },
        mono: { label: "Terminal", css: 'Consolas, "Lucida Console", "Courier New", monospace' },
        hand: { get label() {
          return say2("builderTheme.manuscrite");
        }, css: '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive' },
        // a CSS font stack // i18n-ok
        // the library shipped with Ourdir (loom-themes.css in the game, the launcher's stylesheets in the editor): open licences, fetched only when used
        alegreya: { label: "Alegreya (livre)", family: "Alegreya", css: '"Alegreya", Georgia, serif' },
        barlow: { label: "Barlow Condensed (affiche)", family: "Barlow Condensed", css: '"Barlow Condensed", "Arial Narrow", sans-serif' },
        inter: { label: "Inter (net)", family: "Inter", css: '"Inter", "Segoe UI", sans-serif' },
        jetbrains: { label: "JetBrains Mono (code)", family: "JetBrains Mono", css: '"JetBrains Mono", Consolas, monospace' },
        exo2: { label: "Exo 2 (science-fiction)", family: "Exo 2", css: '"Exo 2", "Segoe UI", sans-serif' },
        michroma: { label: "Michroma (large, techno)", family: "Michroma", css: '"Michroma", "Segoe UI", sans-serif' },
        fell: { label: "IM Fell English (grimoire)", family: "IM Fell English", css: '"IM Fell English", Georgia, serif' },
        crimson: { label: "Crimson Pro (roman)", family: "Crimson Pro", css: '"Crimson Pro", Georgia, serif' },
        playfair: { get label() {
          return say2("builderTheme.playfairDisplayElegant");
        }, family: "Playfair Display", css: '"Playfair Display", Georgia, serif' },
        courierprime: { get label() {
          return say2("builderTheme.courierPrimeMachineEcrire");
        }, family: "Courier Prime", css: '"Courier Prime", "Courier New", monospace' },
        specialelite: { get label() {
          return say2("builderTheme.specialEliteMachineUsee");
        }, family: "Special Elite", css: '"Special Elite", "Courier New", monospace' },
        chakra: { label: "Chakra Petch (HUD)", family: "Chakra Petch", css: '"Chakra Petch", "Segoe UI", sans-serif' },
        sharetech: { label: "Share Tech Mono (terminal)", family: "Share Tech Mono", css: '"Share Tech Mono", Consolas, monospace' },
        stencil: { label: "Saira Stencil One (pochoir)", family: "Saira Stencil One", css: '"Saira Stencil One", Impact, sans-serif' },
        caveat: { label: "Caveat (manuscrite)", family: "Caveat", css: '"Caveat", "Segoe Print", cursive' }
      };
      var COLOR_KEYS = [
        { k: "bg", get label() {
          return say2("builderTheme.fondFiche");
        } },
        { k: "surface", label: "Panneaux" },
        { k: "surface2", label: "Panneaux en creux" },
        { k: "text", get label() {
          return say2("builderTheme.texte");
        } },
        { k: "muted", get label() {
          return say2("builderTheme.texteDiscret");
        } },
        { k: "accent", label: "Accent principal" },
        { k: "accent2", label: "Accent secondaire" },
        { k: "border", label: "Bordures" },
        { k: "headerBg", label: "Bandeau (fond)" },
        { k: "headerText", get label() {
          return say2("builderTheme.bandeauTexte");
        } },
        { k: "inputBg", label: "Champs (fond)" },
        { k: "inputText", get label() {
          return say2("builderTheme.champsTexte");
        } },
        { k: "computed", get label() {
          return say2("builderTheme.valeursCalculees");
        } }
      ];
      var ENUMS = {
        background: { kind: ["solid", "gradient", "grid", "dots", "lines", "scanlines", "vignette", "image"], imageMode: ["cover", "tile", "center"] },
        shape: { borderStyle: ["solid", "double", "dashed", "none"], shadow: ["none", "soft", "hard", "glow"], frame: ["none", "brackets", "tape", "ascii"], spacing: ["none", "airy"] },
        stat: { style: ["plain", "boxed", "stripe", "terminal"] },
        gauge: { style: ["bar", "segments", "blocks"], color: ["accent", "accent2"] },
        tag: { style: ["paper", "hud", "terminal", "sticker"] },
        header: { style: ["flat", "gradient", "line", "glow"], align: ["left", "center"] },
        fields: { style: ["filled", "outlined", "underline"] },
        fonts: { headingCase: ["none", "upper"] },
        titleRule: ["none", "line", "double", "dashed", "glow"]
      };
      var ENUM_LABELS = {
        kind: { solid: "Uni", get gradient() {
          return say2("builderTheme.degrade");
        }, grid: "Quadrillage", dots: "Points", lines: "Lignes", get scanlines() {
          return say2("builderTheme.balayageEcran");
        }, vignette: "Vignette", image: "Image" },
        imageMode: { get cover() {
          return say2("builderTheme.remplitFiche");
        }, get tile() {
          return say2("builderTheme.repeteeMosaique");
        }, get center() {
          return say2("builderTheme.centreeEntiere");
        } },
        borderStyle: { solid: "Trait plein", double: "Double trait", get dashed() {
          return say2("builderTheme.pointille");
        }, get none() {
          return say2("builderTheme.aucune");
        } },
        shadow: { get none() {
          return say2("builderTheme.aucune");
        }, soft: "Douce", get hard() {
          return say2("builderTheme.decalee");
        }, glow: "Halo lumineux" },
        style: { flat: "Plat", get gradient() {
          return say2("builderTheme.degrade");
        }, line: "Filet", glow: "Halo", filled: "Rempli", outlined: "Contour", underline: "Soulignement" },
        align: { get left() {
          return say2("builderTheme.gauche");
        }, get center() {
          return say2("builderTheme.centre");
        } },
        headingCase: { none: "Normale", upper: "Majuscules" },
        titleRule: { get none() {
          return say2("builderTheme.aucun");
        }, line: "Filet", double: "Double filet", get dashed() {
          return say2("builderTheme.pointille");
        }, glow: "Lueur" },
        frame: { get none() {
          return say2("builderTheme.aucun");
        }, get brackets() {
          return say2("builderTheme.crochetsVisee");
        }, get tape() {
          return say2("builderTheme.adhesif");
        }, ascii: "Terminal (ASCII)" },
        spacing: { get none() {
          return say2("builderTheme.serreCartesSeTouchent");
        }, get airy() {
          return say2("builderTheme.aereEcartEntreCartes");
        } },
        statStyle: { plain: "Simple", get boxed() {
          return say2("builderTheme.encadre");
        }, stripe: "Filet en haut", terminal: "Terminal" },
        gaugeStyle: { bar: "Barre pleine", segments: "Segments", blocks: "Blocs (\u2588\u2591)" },
        gaugeColor: { accent: "Accent principal", accent2: "Accent secondaire" },
        tagStyle: { paper: "Papier", hud: "HUD", terminal: "Terminal", sticker: "Sticker" }
      };
      var RANGES = {
        fontSize: [11, 18],
        headingSpacing: [0, 6],
        angle: [0, 360],
        patternSize: [6, 80],
        patternOpacity: [0, 60],
        radius: [0, 24],
        borderWidth: [0, 4],
        chamfer: [0, 24]
      };
      var ASSET_TYPES = {
        "font/woff2": { kind: "font", fmt: "woff2", magic: [119, 79, 70, 50] },
        "font/woff": { kind: "font", fmt: "woff", magic: [119, 79, 70, 70] },
        "font/ttf": { kind: "font", fmt: "truetype", magic: [0, 1, 0, 0] },
        "font/otf": { kind: "font", fmt: "opentype", magic: [79, 84, 84, 79] },
        "image/png": { kind: "image", magic: [137, 80, 78, 71, 13, 10, 26, 10] },
        "image/jpeg": { kind: "image", magic: [255, 216, 255] },
        "image/webp": { kind: "image", magic: [82, 73, 70, 70, null, null, null, null, 87, 69, 66, 80] }
      };
      var ASSET_LIMITS = { count: 8, font: 400 * 1024, image: 800 * 1024, total: 3 * 1024 * 1024, name: 60 };
      var ASSET_ID_RE = /^[a-z0-9_]{1,24}$/;
      var B64_RE = /^[A-Za-z0-9+\/]+={0,2}$/;
      var B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function firstBytes(b64) {
        var out = [];
        var head = b64.slice(0, 16);
        for (var i = 0; i + 3 < head.length + 0 && i < 16; i += 4) {
          var n = 0;
          for (var j = 0; j < 4; j++) {
            var ch = head.charAt(i + j);
            n = n << 6 | (ch === "=" ? 0 : B64_CHARS.indexOf(ch));
          }
          out.push(n >> 16 & 255, n >> 8 & 255, n & 255);
        }
        return out;
      }
      function decodedSize(b64) {
        return Math.floor(b64.length * 3 / 4) - (b64.slice(-2) === "==" ? 2 : b64.slice(-1) === "=" ? 1 : 0);
      }
      function validateAssets(assets) {
        var errors = [];
        if (assets === void 0 || assets === null) return errors;
        if (!Array.isArray(assets)) return [say2("builderTheme.fichiersEmbarquesIllisibles")];
        if (assets.length > ASSET_LIMITS.count) errors.push(say2("builderTheme.assets.tooMany", { max: ASSET_LIMITS.count }));
        var seen = {}, total = 0;
        assets.forEach(function(a) {
          var label = a && typeof a.id === "string" ? "\xAB " + a.id + " \xBB" : "";
          if (!isObj5(a) || typeof a.id !== "string" || !ASSET_ID_RE.test(a.id)) return errors.push(say2("builderTheme.identifiantFichierEmbarqueInvalide"));
          if (seen[a.id]) return errors.push(say2("builderTheme.assets.duplicate", { name: label }));
          seen[a.id] = true;
          var type = ASSET_TYPES[a.mime];
          if (!type) return errors.push(say2("builderTheme.assets.badType", { name: label }));
          if (a.kind !== type.kind) return errors.push(say2("builderTheme.assets.typeMismatch", { name: label }));
          if (typeof a.name !== "string" || a.name.length > ASSET_LIMITS.name) return errors.push(say2("builderTheme.assets.badName", { name: label }));
          if (typeof a.data !== "string" || a.data.length % 4 !== 0 || !B64_RE.test(a.data)) return errors.push(say2("builderTheme.assets.unreadable", { name: label }));
          var size = decodedSize(a.data);
          total += size;
          if (size > ASSET_LIMITS[type.kind]) return errors.push(say2(type.kind === "font" ? "builderTheme.assets.fontTooBig" : "builderTheme.assets.imageTooBig", { name: label, max: Math.round(ASSET_LIMITS[type.kind] / 1024) }));
          var bytes = firstBytes(a.data);
          var ok = type.magic.every(function(b, i) {
            return b === null || bytes[i] === b;
          });
          if (!ok) errors.push(say2("builderTheme.assets.contentMismatch", { name: label }));
        });
        if (total > ASSET_LIMITS.total) errors.push(say2("builderTheme.assets.total", { max: Math.round(ASSET_LIMITS.total / 1048576) }));
        return errors;
      }
      var assetOf = function(assets, id) {
        return (Array.isArray(assets) ? assets : []).filter(function(a) {
          return isObj5(a) && a.id === id;
        })[0] || null;
      };
      var assetFontId = function(v) {
        return typeof v === "string" && v.indexOf("asset:") === 0 ? v.slice(6) : null;
      };
      var dataUrl = function(a) {
        return 'url("data:' + a.mime + ";base64," + a.data + '")';
      };
      var isObj5 = function(v) {
        return v !== null && typeof v === "object" && !Array.isArray(v);
      };
      var isInt = function(v, r) {
        return typeof v === "number" && Number.isInteger(v) && v >= r[0] && v <= r[1];
      };
      function makeTheme(o) {
        return {
          name: o.name,
          colors: o.colors,
          fonts: { body: o.body, heading: o.heading, size: o.size || 13, headingCase: o.headingCase || "none", headingSpacing: o.headingSpacing || 0 },
          background: Object.assign({ kind: "solid", color2: o.colors.surface2, angle: 160, patternColor: o.colors.accent, patternSize: 28, patternOpacity: 12, image: "", imageMode: "cover" }, o.background || {}),
          shape: Object.assign({ radius: 6, borderWidth: 1, borderStyle: "solid", shadow: "none", chamfer: 0, frame: "none", spacing: "none" }, o.shape || {}),
          header: Object.assign({ style: "flat", align: "left" }, o.header || {}),
          fields: Object.assign({ style: "filled" }, o.fields || {}),
          titleRule: o.titleRule || "line",
          stat: Object.assign({ style: "plain" }, o.stat || {}),
          gauge: Object.assign({ style: "bar", color: "accent" }, o.gauge || {}),
          tag: Object.assign({ style: "paper" }, o.tag || {})
        };
      }
      var DEFAULTS = { frame: "none", spacing: "none", stat: { style: "plain" }, gauge: { style: "bar", color: "accent" }, tag: { style: "paper" } };
      function withDefaults(t) {
        if (!isObj5(t)) return t;
        var out = JSON.parse(JSON.stringify(t));
        if (isObj5(out.shape) && out.shape.frame === void 0) out.shape.frame = DEFAULTS.frame;
        if (isObj5(out.shape) && out.shape.spacing === void 0) out.shape.spacing = DEFAULTS.spacing;
        ["stat", "gauge", "tag"].forEach(function(k) {
          if (out[k] === void 0) out[k] = JSON.parse(JSON.stringify(DEFAULTS[k]));
        });
        return out;
      }
      var PRESETS = {
        // the look of Ourdir itself: a paper in a dark room (see the game's Métier theme); the one a new system starts with
        metier: makeTheme({
          get name() {
            return say2("builderTheme.metierPapier");
          },
          colors: { bg: "#ece4d0", surface: "#e1d7bd", surface2: "#d6cbae", text: "#2b2118", muted: "#7a6a55", accent: "#8a6a1c", accent2: "#303873", border: "#c9bc9d", headerBg: "#2b2118", headerText: "#ece4d0", inputBg: "#e1d7bd", inputText: "#2b2118", computed: "#2c5e50" },
          body: "system",
          heading: "book",
          size: 13,
          headingCase: "none",
          headingSpacing: 0,
          background: { kind: "solid" },
          shape: { radius: 6, borderWidth: 1, borderStyle: "solid", shadow: "soft" },
          header: { style: "flat", align: "left" },
          fields: { style: "underline" },
          titleRule: "line"
        }),
        classic: makeTheme({
          name: "Classique sombre",
          colors: { bg: "#262626", surface: "#313131", surface2: "#1f1f1f", text: "#ffffff", muted: "#a8a8a8", accent: "#e8a33d", accent2: "#5fb0e0", border: "#4a4a4a", headerBg: "#1a1a1a", headerText: "#ffffff", inputBg: "#3d3d3d", inputText: "#ffffff", computed: "#90ee90" },
          body: "system",
          heading: "system",
          shape: { radius: 4 }
        }),
        grimoire: makeTheme({
          get name() {
            return say2("builderTheme.grimoireMedievalFantasy");
          },
          colors: { bg: "#2b2118", surface: "#3a2d20", surface2: "#241b13", text: "#efe3c8", muted: "#b39d78", accent: "#d4a93a", accent2: "#8c5a2b", border: "#7a5c34", headerBg: "#4a2f1a", headerText: "#f6e7c1", inputBg: "#231a12", inputText: "#f6e7c1", computed: "#c9e08a" },
          body: "book",
          heading: "book",
          size: 14,
          headingCase: "upper",
          headingSpacing: 2,
          background: { kind: "vignette" },
          shape: { radius: 3, borderWidth: 3, borderStyle: "double", shadow: "soft" },
          header: { style: "gradient", align: "center" },
          fields: { style: "outlined" },
          titleRule: "double"
        }),
        neon: makeTheme({
          get name() {
            return say2("builderTheme.neonCyberpunk");
          },
          colors: { bg: "#0d0b14", surface: "#17132a", surface2: "#100d1d", text: "#e9e6ff", muted: "#8f89b8", accent: "#ff2a8a", accent2: "#00e5ff", border: "#3a2a6b", headerBg: "#1d1236", headerText: "#00e5ff", inputBg: "#0a0812", inputText: "#00e5ff", computed: "#f9f871" },
          body: "geometric",
          heading: "mono",
          size: 13,
          headingCase: "upper",
          headingSpacing: 3,
          background: { kind: "scanlines", patternColor: "#00e5ff", patternOpacity: 6 },
          shape: { radius: 0, borderWidth: 1, borderStyle: "solid", shadow: "glow", chamfer: 12 },
          header: { style: "glow", align: "left" },
          fields: { style: "underline" },
          titleRule: "glow"
        }),
        station: makeTheme({
          name: "Station (space opera)",
          colors: { bg: "#08131c", surface: "#0e2233", surface2: "#0a1a28", text: "#dff6ff", muted: "#7fa6bb", accent: "#4dd0e1", accent2: "#ffb74d", border: "#1f4a66", headerBg: "#0b2a40", headerText: "#dff6ff", inputBg: "#07101a", inputText: "#dff6ff", computed: "#80f0c0" },
          body: "geometric",
          heading: "geometric",
          size: 13,
          headingCase: "upper",
          headingSpacing: 2,
          background: { kind: "grid", patternColor: "#4dd0e1", patternSize: 32, patternOpacity: 8 },
          shape: { radius: 2, borderWidth: 1, borderStyle: "solid", shadow: "soft", chamfer: 8 },
          header: { style: "line", align: "left" },
          fields: { style: "outlined" },
          titleRule: "line"
        }),
        crypte: makeTheme({
          name: "Crypte (horreur)",
          colors: { bg: "#120b0b", surface: "#221414", surface2: "#180e0e", text: "#e8dcd0", muted: "#9c8478", accent: "#b3202a", accent2: "#6d6a3a", border: "#4a2222", headerBg: "#2a0e10", headerText: "#e8dcd0", inputBg: "#0e0808", inputText: "#e8dcd0", computed: "#d9b36c" },
          body: "serif",
          heading: "impact",
          size: 14,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "vignette" },
          shape: { radius: 0, borderWidth: 2, borderStyle: "solid", shadow: "hard" },
          header: { style: "flat", align: "center" },
          fields: { style: "underline" },
          titleRule: "dashed"
        }),
        enquete: makeTheme({
          get name() {
            return say2("builderTheme.enqueteNoirPapier");
          },
          colors: { bg: "#e6dcc6", surface: "#efe7d4", surface2: "#dbcfb3", text: "#2b2620", muted: "#6e6452", accent: "#8b1e1e", accent2: "#2f4f6f", border: "#a89a78", headerBg: "#2b2620", headerText: "#efe7d4", inputBg: "#f7f1e3", inputText: "#2b2620", computed: "#2f4f6f" },
          body: "typewriter",
          heading: "typewriter",
          size: 13,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "lines", patternColor: "#8b6b3a", patternSize: 24, patternOpacity: 14 },
          shape: { radius: 1, borderWidth: 1, borderStyle: "solid", shadow: "hard" },
          header: { style: "flat", align: "left" },
          fields: { style: "underline" },
          titleRule: "line"
        }),
        // three looks for science fiction (spec 2026-09-24 « Vocabulaire des skins » §5): made of settings only, no colour or type of any publisher
        hud: makeTheme({
          get name() {
            return say2("builderTheme.hudNeon");
          },
          colors: { bg: "#0a0d16", surface: "#0f1826", surface2: "#0b1220", text: "#d8f7ff", muted: "#7ea9c2", accent: "#3ff0d2", accent2: "#ff4fd8", border: "#1f3b52", headerBg: "#0d1624", headerText: "#3ff0d2", inputBg: "#070b14", inputText: "#d8f7ff", computed: "#3ff0d2" },
          body: "chakra",
          heading: "chakra",
          size: 13,
          headingCase: "upper",
          headingSpacing: 2,
          background: { kind: "grid", patternColor: "#3ff0d2", patternSize: 32, patternOpacity: 5 },
          shape: { radius: 0, borderWidth: 1, borderStyle: "solid", shadow: "glow", chamfer: 10, frame: "brackets", spacing: "airy" },
          header: { style: "line", align: "left" },
          fields: { style: "underline" },
          titleRule: "glow",
          stat: { style: "boxed" },
          gauge: { style: "bar", color: "accent" },
          tag: { style: "hud" }
        }),
        terminal: makeTheme({
          name: "Terminal",
          colors: { bg: "#0c0a06", surface: "#14110a", surface2: "#0f0c07", text: "#ffb347", muted: "#8a6a3a", accent: "#ffb347", accent2: "#ffd27a", border: "#6b5020", headerBg: "#14110a", headerText: "#ffb347", inputBg: "#0c0a06", inputText: "#ffcf80", computed: "#ffd27a" },
          body: "sharetech",
          heading: "sharetech",
          size: 14,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "scanlines", patternColor: "#ffb347", patternOpacity: 7 },
          shape: { radius: 0, borderWidth: 1, borderStyle: "dashed", shadow: "none", chamfer: 0, frame: "ascii", spacing: "airy" },
          header: { style: "line", align: "left" },
          fields: { style: "underline" },
          titleRule: "dashed",
          stat: { style: "terminal" },
          gauge: { style: "blocks", color: "accent" },
          tag: { style: "terminal" }
        }),
        pochoir: makeTheme({
          name: "Street pochoir",
          colors: { bg: "#26282a", surface: "#1b1c1e", surface2: "#202224", text: "#ecebe6", muted: "#a3a29c", accent: "#d7ff3a", accent2: "#ff9f43", border: "#3a3c3f", headerBg: "#1b1c1e", headerText: "#d7ff3a", inputBg: "#1b1c1e", inputText: "#ecebe6", computed: "#d7ff3a" },
          body: "barlow",
          heading: "stencil",
          size: 14,
          headingCase: "upper",
          headingSpacing: 1,
          background: { kind: "solid" },
          shape: { radius: 0, borderWidth: 1, borderStyle: "solid", shadow: "hard", chamfer: 0, frame: "tape", spacing: "airy" },
          header: { style: "flat", align: "left" },
          fields: { style: "filled" },
          titleRule: "line",
          stat: { style: "stripe" },
          gauge: { style: "segments", color: "accent" },
          tag: { style: "sticker" }
        })
      };
      function clone(v) {
        return JSON.parse(JSON.stringify(v));
      }
      function presetTheme(id) {
        return clone(PRESETS[id] || PRESETS.classic);
      }
      function validateTheme(t, assets) {
        var errors = [];
        if (t === null || t === void 0) return errors;
        if (!isObj5(t)) return [say2("builderTheme.themeIllisible")];
        t = withDefaults(t);
        var e = function(m) {
          errors.push(m);
        };
        if (t.name !== void 0 && (typeof t.name !== "string" || t.name.length > 60)) e(say2("builderTheme.nomThemeInvalide"));
        if (!isObj5(t.colors)) e("Couleurs manquantes.");
        else COLOR_KEYS.forEach(function(c) {
          if (typeof t.colors[c.k] !== "string" || !HEX.test(t.colors[c.k])) e(say2("builderTheme.badColor", { name: c.label }));
        });
        if (!isObj5(t.fonts)) e("Polices manquantes.");
        else {
          var fontOk = function(v) {
            if (FONTS[v]) return true;
            var id = assetFontId(v), a = id && assetOf(assets, id);
            return !!(a && a.kind === "font");
          };
          if (!fontOk(t.fonts.body)) e(say2("builderTheme.policeTexteInconnue"));
          if (!fontOk(t.fonts.heading)) e(say2("builderTheme.policeTitresInconnue"));
          if (!isInt(t.fonts.size, RANGES.fontSize)) e(say2("builderTheme.range.fontSize", { min: RANGES.fontSize[0], max: RANGES.fontSize[1] }));
          if (ENUMS.fonts.headingCase.indexOf(t.fonts.headingCase) < 0) e(say2("builderTheme.casseTitresInvalide"));
          if (!isInt(t.fonts.headingSpacing, RANGES.headingSpacing)) e(say2("builderTheme.range.spacing", { min: RANGES.headingSpacing[0], max: RANGES.headingSpacing[1] }));
        }
        if (!isObj5(t.background)) e("Fond manquant.");
        else {
          if (ENUMS.background.kind.indexOf(t.background.kind) < 0) e(say2("builderTheme.typeFondInconnu"));
          if (typeof t.background.color2 !== "string" || !HEX.test(t.background.color2)) e(say2("builderTheme.secondeCouleurFondInvalide"));
          if (typeof t.background.patternColor !== "string" || !HEX.test(t.background.patternColor)) e(say2("builderTheme.couleurMotifInvalide"));
          if (!isInt(t.background.angle, RANGES.angle)) e(say2("builderTheme.angleDegrade0360"));
          if (!isInt(t.background.patternSize, RANGES.patternSize)) e(say2("builderTheme.range.patternSize", { min: RANGES.patternSize[0], max: RANGES.patternSize[1] }));
          if (!isInt(t.background.patternOpacity, RANGES.patternOpacity)) e(say2("builderTheme.range.patternOpacity", { min: RANGES.patternOpacity[0], max: RANGES.patternOpacity[1] }));
          if (t.background.imageMode !== void 0 && ENUMS.background.imageMode.indexOf(t.background.imageMode) < 0) e(say2("builderTheme.modeImageFondInconnu"));
          if (t.background.kind === "image") {
            var img = assetOf(assets, t.background.image);
            if (!img || img.kind !== "image") e(say2("builderTheme.choisisImageFondParmi"));
          }
        }
        if (!isObj5(t.shape)) e("Formes manquantes.");
        else {
          if (!isInt(t.shape.radius, RANGES.radius)) e("Arrondi : " + RANGES.radius.join(" \xE0 ") + " px.");
          if (!isInt(t.shape.borderWidth, RANGES.borderWidth)) e(say2("builderTheme.range.borderWidth", { min: RANGES.borderWidth[0], max: RANGES.borderWidth[1] }));
          if (!isInt(t.shape.chamfer, RANGES.chamfer)) e(say2("builderTheme.range.chamfer", { min: RANGES.chamfer[0], max: RANGES.chamfer[1] }));
          if (ENUMS.shape.borderStyle.indexOf(t.shape.borderStyle) < 0) e(say2("builderTheme.styleBordureInconnu"));
          if (ENUMS.shape.shadow.indexOf(t.shape.shadow) < 0) e(say2("builderTheme.ombreInconnue"));
          if (ENUMS.shape.frame.indexOf(t.shape.frame) < 0) e(say2("builderTheme.cadreInconnu"));
          if (ENUMS.shape.spacing.indexOf(t.shape.spacing) < 0) e(say2("builderTheme.espacementInconnu"));
        }
        if (!isObj5(t.header)) e("Bandeau manquant.");
        else {
          if (ENUMS.header.style.indexOf(t.header.style) < 0) e(say2("builderTheme.styleBandeauInconnu"));
          if (ENUMS.header.align.indexOf(t.header.align) < 0) e(say2("builderTheme.alignementBandeauInvalide"));
        }
        if (!isObj5(t.fields) || ENUMS.fields.style.indexOf(t.fields.style) < 0) e(say2("builderTheme.styleChampsInconnu"));
        if (ENUMS.titleRule.indexOf(t.titleRule) < 0) e(say2("builderTheme.ornementTitresInconnu"));
        if (!isObj5(t.stat) || ENUMS.stat.style.indexOf(t.stat.style) < 0) e(say2("builderTheme.styleBlocsStatInconnu"));
        if (!isObj5(t.gauge) || ENUMS.gauge.style.indexOf(t.gauge.style) < 0 || ENUMS.gauge.color.indexOf(t.gauge.color) < 0) e(say2("builderTheme.styleJaugeInconnu"));
        if (!isObj5(t.tag) || ENUMS.tag.style.indexOf(t.tag.style) < 0) e(say2("builderTheme.styleEtiquetteJetInconnu"));
        return errors;
      }
      function rgba(hex, alpha) {
        var n = parseInt(hex.slice(1), 16);
        return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + Math.round(alpha * 1e3) / 1e3 + ")";
      }
      function rgbTriple(hex) {
        var n = parseInt(hex.slice(1), 16);
        return (n >> 16 & 255) + " " + (n >> 8 & 255) + " " + (n & 255);
      }
      function skinTokens(theme, bodyFont, headFont) {
        var c = theme.colors, sh = theme.shape;
        var n = parseInt(c.bg.slice(1), 16);
        var light = 0.2126 * (n >> 16 & 255) + 0.7152 * (n >> 8 & 255) + 0.0722 * (n & 255) > 140;
        return [
          "--loom-bg:" + c.bg,
          "--loom-void:" + c.bg,
          "--loom-void-rgb:" + rgbTriple(c.bg),
          "--loom-deep-rgb:" + rgbTriple(c.bg),
          "--loom-panel:" + c.surface,
          "--loom-panel-solid:" + c.surface,
          "--loom-panel-rgb:" + rgbTriple(c.surface),
          "--loom-panel-2:" + c.surface2,
          "--loom-panel2-rgb:" + rgbTriple(c.surface2),
          "--loom-line:" + c.border,
          "--loom-line-rgb:" + rgbTriple(c.border),
          "--loom-line-soft:" + c.border,
          "--loom-line-strong:" + c.accent2,
          "--loom-text:" + c.text,
          "--loom-muted:" + c.muted,
          "--loom-dim:" + c.muted,
          "--loom-over-map:" + c.text,
          "--loom-accent:" + c.accent,
          "--loom-accent-rgb:" + rgbTriple(c.accent),
          "--loom-accent-dim:" + c.accent,
          "--loom-accent-hi:" + c.accent,
          "--loom-on-accent:" + c.bg,
          "--loom-accent2:" + c.accent2,
          "--loom-accent2-rgb:" + rgbTriple(c.accent2),
          "--loom-display:" + headFont,
          "--loom-body:" + bodyFont,
          "--loom-radius:" + sh.radius + "px",
          "--loom-radius-sm:" + Math.min(sh.radius, 4) + "px",
          "--loom-cut:" + sh.chamfer + "px",
          "--loom-paper:" + c.surface,
          "--loom-paper-2:" + c.surface2,
          "--loom-paper-ink:" + c.text,
          "--loom-paper-muted:" + c.muted,
          "--loom-paper-line:" + c.border,
          "--loom-paper-texture:none",
          "--loom-edge:1px solid " + c.border,
          "--loom-edge-strong:1px solid " + c.accent2,
          "--loom-thread:2px solid " + c.accent,
          "--loom-glow:" + (sh.shadow === "glow" ? "0 0 12px " + rgba(c.accent, 0.55) : "none"),
          "color-scheme:" + (light ? "light" : "dark")
        ];
      }
      var TARGETS = {
        game: {
          root: ".sheet.sheet",
          bang: true,
          header: ["header"],
          label: [".widget.label"],
          number: [".widget.number"],
          text: [".widget.text-input"],
          area: [".widget.textarea"],
          choice: [".widget.choice"],
          clickable: [".widget.clickable"],
          computed: [".computed"],
          column: ['.widget[class*="widget col"]'],
          row: [".widget.row"],
          button: [".btn-secondary", ".btn-repeater-add"],
          tabs: [".nav-link"],
          tabActive: [".nav-link.active"],
          repeater: [".repeater-element"],
          gauge: [".tt-gauge"]
        },
        preview: {
          root: ".b-sheet",
          bang: false,
          header: [".b-head"],
          label: [".b-label"],
          number: ["input[type=number]", ".b-computed"],
          text: ["input[type=text]"],
          area: ["textarea"],
          choice: ["select"],
          clickable: [".b-label.clickable"],
          computed: [".b-computed"],
          column: [".b-column"],
          row: [".b-row"],
          button: [".b-icon"],
          tabs: [".b-tab"],
          tabActive: [".b-tab.active"],
          repeater: [".b-repeater-element"],
          gauge: [".b-gauge"]
        }
      };
      var VARIANTS = {
        Label: ["title", "subtitle", "muted", "badge", "banner", "button"],
        NumberInput: ["stat"],
        Column: ["card", "inset"],
        Container: ["inline"]
      };
      var TEXT_SIZES = { tiny: 0.65, small: 0.8, medium: 1.2, large: 1.5, giant: 2.4 };
      function backgroundImage(a, mode, imp) {
        var d = ["background-image:" + dataUrl(a)];
        if (mode === "tile") d.push("background-repeat:repeat", "background-size:auto");
        else if (mode === "center") d.push("background-repeat:no-repeat", "background-position:center", "background-size:contain");
        else d.push("background-repeat:no-repeat", "background-position:center", "background-size:cover");
        return d.map(function(x) {
          return x + imp;
        }).join(";");
      }
      function themeCss(theme, targetName, assets, skinId) {
        if (!theme) return "";
        var errs = validateTheme(theme, assets);
        if (errs.length) throw new Error(say2("builderTheme.invalid", { why: errs[0] }));
        theme = withDefaults(theme);
        var T = TARGETS[targetName];
        if (!T) throw new Error(say2("builderTheme.cibleThemeInconnue"));
        var skin = skinId === void 0 ? "defaut" : skinId;
        if (targetName === "game" && (typeof skin !== "string" || !SKIN_ID_RE.test(skin))) throw new Error(say2("builderTheme.identifiantSkinInvalide"));
        var ROOT = targetName === "game" ? '.sheet.sheet[data-tt-skin="' + skin + '"]' : T.root;
        var TAG_ROOTS = targetName === "game" ? ['.loom-tag-knot[data-tt-skin="' + skin + '"] .loom-chat-roll', '.dice-result[data-tt-skin="' + skin + '"]', '.dice-log[data-tt-skin="' + skin + '"]'] : [".b-rolltag .loom-chat-roll"];
        var c = theme.colors, f = theme.fonts, bg = theme.background, sh = theme.shape, hd = theme.header;
        var imp = T.bang ? " !important" : "";
        var out = [];
        var fallback = FONTS.system.css;
        var faces = {};
        var fontCss = function(key) {
          if (FONTS[key]) return FONTS[key].css;
          var a = assetOf(assets, assetFontId(key));
          if (!faces[a.id]) {
            faces[a.id] = true;
            out.push('@font-face{font-family:"tt_' + a.id + '";src:' + dataUrl(a) + ' format("' + ASSET_TYPES[a.mime].fmt + '");font-display:swap}');
          }
          return '"tt_' + a.id + '",' + fallback;
        };
        var bodyFont = fontCss(f.body), headFont = fontCss(f.heading);
        if (targetName === "game") out.push('[data-tt-skin="' + skin + '"]{' + skinTokens(theme, bodyFont, headFont).join(";") + "}");
        function rule(subs, decls) {
          if (!decls.length) return;
          var sel = subs.map(function(s2) {
            return s2 === "" ? ROOT : ROOT + " " + s2;
          }).join(",");
          out.push(sel + "{" + decls.join(";") + "}");
        }
        function tagRule(subs, decls) {
          if (!decls.length) return;
          out.push(TAG_ROOTS.reduce(function(a, r) {
            return a.concat(subs.map(function(s2) {
              return s2 === "" ? r : s2.charAt(0) === ":" ? r + s2 : r + " " + s2;
            }));
          }, []).join(",") + "{" + decls.join(";") + "}");
        }
        function each(keys) {
          return keys.reduce(function(a, k2) {
            return a.concat(T[k2]);
          }, []);
        }
        var bd = sh.borderStyle === "none" || sh.borderWidth === 0 ? "border:0 none" : "border:" + (sh.borderStyle === "double" ? Math.max(3, sh.borderWidth) : sh.borderWidth) + "px " + sh.borderStyle + " " + c.border;
        var radius = "border-radius:" + sh.radius + "px";
        var shadow = { none: "", soft: "box-shadow:0 2px 10px rgba(0,0,0,.35)", hard: "box-shadow:4px 4px 0 rgba(0,0,0,.55)", glow: "box-shadow:0 0 12px " + rgba(c.accent, 0.55) }[sh.shadow];
        var cut = sh.chamfer ? "clip-path:polygon(" + sh.chamfer + "px 0,100% 0,100% calc(100% - " + sh.chamfer + "px),calc(100% - " + sh.chamfer + "px) 100%,0 100%,0 " + sh.chamfer + "px)" : "";
        var panel = [bd, radius, shadow, cut].filter(Boolean);
        var pat = rgba(bg.patternColor, bg.patternOpacity / 100), s = bg.patternSize;
        var layers = {
          solid: "",
          gradient: "background-image:linear-gradient(" + bg.angle + "deg," + c.bg + "," + bg.color2 + ")",
          grid: "background-image:linear-gradient(" + pat + " 1px,transparent 1px),linear-gradient(90deg," + pat + " 1px,transparent 1px);background-size:" + s + "px " + s + "px",
          dots: "background-image:radial-gradient(circle," + pat + " 1.5px,transparent 1.6px);background-size:" + s + "px " + s + "px",
          lines: "background-image:repeating-linear-gradient(0deg," + pat + " 0 1px,transparent 1px " + s + "px)",
          scanlines: "background-image:repeating-linear-gradient(0deg," + pat + " 0 1px,transparent 1px 3px)",
          vignette: "background-image:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0," + (bg.patternOpacity / 100 * 3 + 0.15) + ") 100%)",
          image: bg.kind === "image" ? backgroundImage(assetOf(assets, bg.image), bg.imageMode || "cover", imp) : ""
        }[bg.kind];
        rule([""], ["background-color:" + c.bg + imp, layers ? bg.kind === "image" ? layers : layers + imp : "", "color:" + c.text + imp, "font-family:" + bodyFont + imp, "font-size:" + f.size + "px" + imp].filter(Boolean));
        rule(each(["label", "number", "text", "area", "choice"]), ["font-family:" + bodyFont, "color:" + c.text]);
        var headBg = { flat: "background:" + c.headerBg, gradient: "background:linear-gradient(90deg," + c.headerBg + "," + c.surface2 + ")", line: "background:transparent;border-bottom:2px solid " + c.accent, glow: "background:" + c.headerBg + ";box-shadow:0 0 14px " + rgba(c.accent, 0.5) }[hd.style];
        rule(T.header, [headBg + imp, "color:" + c.headerText + imp, "font-family:" + headFont + imp, "text-align:" + hd.align, f.headingCase === "upper" ? "text-transform:uppercase" : "", "letter-spacing:" + f.headingSpacing + "px"].filter(Boolean));
        var field = { filled: ["background:" + c.inputBg, "border:0 none", "border-radius:" + Math.min(sh.radius, 8) + "px"], outlined: ["background:" + c.inputBg, "border:1px solid " + c.border, "border-radius:" + Math.min(sh.radius, 8) + "px"], underline: ["background:transparent", "border:0 none", "border-bottom:2px solid " + c.border, "border-radius:0"] }[theme.fields.style];
        rule(each(["number", "text", "area", "choice"]), field.concat(["color:" + c.inputText + imp, "padding:2px 6px"]).map(function(d) {
          return d + imp;
        }));
        rule(each(["number", "text", "area", "choice"]).map(function(x) {
          return x + ":focus";
        }), ["outline:none", "border-color:" + c.accent + imp, "box-shadow:0 0 0 1px " + c.accent]);
        rule(T.clickable, ["color:" + c.accent + imp, "cursor:pointer"]);
        rule(T.computed, ["color:" + c.computed + imp]);
        rule(T.button, ["background:" + c.surface2 + imp, "color:" + c.text + imp, "border:1px solid " + c.border + imp]);
        rule(T.tabs, ["color:" + c.muted + imp]);
        rule(T.tabActive, ["color:" + c.accent + imp, "background:" + c.surface + imp, "border-color:" + c.border + imp]);
        rule(T.repeater, ["background:" + c.surface, bd, radius, "padding:6px", "margin-bottom:6px"]);
        var V = function(name) {
          return ".tt-" + name + ".tt-" + name + ".tt-" + name;
        };
        var rulePart = { none: "", line: "border-bottom:1px solid " + c.accent, double: "border-bottom:3px double " + c.accent, dashed: "border-bottom:2px dashed " + c.accent, glow: "text-shadow:0 0 8px " + c.accent }[theme.titleRule];
        var head = ["font-family:" + headFont, f.headingCase === "upper" ? "text-transform:uppercase" : "", "letter-spacing:" + f.headingSpacing + "px"].filter(Boolean);
        rule([V("title")], head.concat(["color:" + c.accent, "font-size:1.25em", "font-weight:700", "padding-bottom:.2em", "margin-bottom:.4em", rulePart].filter(Boolean)));
        rule([V("subtitle")], head.concat(["color:" + c.muted, "font-size:1em", "font-style:italic"]));
        rule([V("muted")], ["color:" + c.muted, "font-size:.85em"]);
        rule([V("badge")], ["display:inline-block", "background:" + c.accent, "color:" + c.bg, "padding:1px 10px", "border-radius:999px", "font-size:.8em", "font-weight:700", "text-transform:uppercase", "letter-spacing:1px"]);
        rule([V("banner")], head.concat(["display:block", "background:" + c.headerBg, "color:" + c.headerText, "text-align:center", "padding:4px 8px", "border-top:2px solid " + c.accent, "border-bottom:2px solid " + c.accent, "font-weight:700"]));
        rule([V("stat")], ["font-family:" + headFont + imp, "font-size:1.9em" + imp, "font-weight:700" + imp, "text-align:center" + imp, "color:" + c.accent + imp, "height:auto" + imp]);
        rule([V("card")], ["background:" + c.surface, "padding:8px"].concat(panel));
        rule([V("inset")], ["background:" + c.surface2, "padding:8px", radius, "border:1px solid " + c.border]);
        Object.keys(TEXT_SIZES).forEach(function(k2) {
          rule([V("s-" + k2)], ["font-size:" + TEXT_SIZES[k2] + "em" + imp, "line-height:1.15"]);
        });
        if (targetName === "game") {
          rule([".tt-track .custom-control"], ["display:inline-block", "margin:0 4px 0 0", "min-height:0"]);
          rule([".tt-track .custom-control-label::before"], ["border-radius:50%", "background:" + c.inputBg, "border:2px solid " + c.accent]);
          rule([".tt-track .custom-control-input:checked + .custom-control-label::before"], ["background:" + c.accent, "border-color:" + c.accent]);
        } else {
          rule([".tt-track"], ["display:flex", "align-items:center", "gap:6px"]);
          rule([".tt-track input[type=checkbox]"], ["accent-color:" + c.accent]);
        }
        rule([".tt-track-total"], ["margin-left:8px", "font-weight:700", "color:" + c.accent]);
        if (sh.spacing === "airy") {
          rule([T.row[0] + ":has(" + V("card") + ")"], ["gap:8px" + imp, "flex-wrap:nowrap" + imp]);
          rule([T.row[0] + ":has(" + V("card") + ") " + T.column[0]], ["flex-shrink:1" + imp, "min-width:0" + imp]);
          rule([V("card")], ["margin-bottom:8px", "padding:10px 12px" + imp]);
          rule([T.row[0] + ":has(" + V("inset") + "):not(:has(" + V("card") + "))"], ["gap:6px" + imp, "flex-wrap:nowrap" + imp, "margin-bottom:8px"]);
          rule([T.row[0] + ":has(" + V("inset") + "):not(:has(" + V("card") + ")) " + T.column[0] + V("inset")], ["flex:1 1 0" + imp, "max-width:none" + imp, "min-width:0" + imp]);
        }
        var framed = [V("card")].concat(T.repeater);
        if (sh.frame === "brackets") {
          var bar = "12px 2px", barV = "2px 12px", ink = "linear-gradient(" + c.accent + "," + c.accent + ")";
          rule(framed, [
            "background-image:" + [ink, ink, ink, ink, ink, ink, ink, ink].join(","),
            "background-size:" + [bar, barV, bar, barV, bar, barV, bar, barV].join(","),
            "background-position:left top,left top,right top,right top,left bottom,left bottom,right bottom,right bottom",
            "background-repeat:no-repeat"
          ]);
        } else if (sh.frame === "tape") {
          rule(framed, ["position:relative", "overflow:visible"]);
          rule(framed.map(function(x) {
            return x + "::before";
          }), ['content:""', "position:absolute", "top:-7px", "left:calc(50% - 32px)", "width:64px", "height:14px", "background:" + rgba(c.accent2, 0.55), "transform:rotate(-2deg)"]);
        } else if (sh.frame === "ascii") {
          rule(framed, ["border:1px dashed " + c.muted + imp, "border-radius:0" + imp, "position:relative", "clip-path:none"]);
          rule(framed.map(function(x) {
            return x + "::before";
          }), ['content:"+"', "position:absolute", "top:-0.7em", "left:-0.35em", "color:" + c.muted, "font-family:" + FONTS.mono.css]);
          rule(framed.map(function(x) {
            return x + "::after";
          }), ['content:"+"', "position:absolute", "bottom:-0.6em", "right:-0.35em", "color:" + c.muted, "font-family:" + FONTS.mono.css]);
        }
        var st = theme.stat.style;
        if (st === "boxed") rule([V("stat")], ["background:" + c.surface2 + imp, "border:1px solid " + c.border + imp, "padding:4px 6px" + imp, cut].filter(Boolean));
        else if (st === "stripe") rule([V("stat")], ["background:" + c.surface2 + imp, "border:0 none" + imp, "border-top:3px solid " + c.accent + imp, "border-radius:0" + imp]);
        else if (st === "terminal") rule([V("stat")], ["font-family:" + FONTS.mono.css + imp, "border:1px dashed " + c.muted + imp, "border-radius:0" + imp, "font-variant-numeric:tabular-nums"]);
        if (st !== "plain") rule([V("inset") + " " + V("stat")], ["border:0 none" + imp, "background:transparent" + imp, "clip-path:none" + imp, "padding:0" + imp]);
        var gColor = theme.gauge.color === "accent2" ? c.accent2 : c.accent;
        var gStyle = theme.gauge.style;
        var G = T.gauge[0];
        if (targetName === "preview") rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        if (gStyle === "blocks") {
          rule([G + " .tt-gauge-cells"], ["gap:2px", "height:14px", "background:transparent"]);
          rule([G + " .tt-gauge-cell"], ["flex:0 0 9px", "background:repeating-linear-gradient(45deg," + c.muted + " 0 1px,transparent 1px 3px)"]);
          rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        } else if (gStyle === "segments") {
          rule([G + " .tt-gauge-cells"], ["gap:2px", "background:transparent"]);
          rule([G + " .tt-gauge-cell"], ["background:" + c.surface2]);
          rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        } else if (theme.gauge.color !== "accent") {
          rule([G + " .tt-gauge-cell.on"], ["background:" + gColor]);
        }
        var tg = theme.tag.style;
        if (tg === "hud") {
          var k = Math.max(sh.chamfer, 8);
          tagRule([""], ["background:" + c.surface + imp, "color:" + c.text + imp, "border:1px solid " + c.accent + imp, "border-radius:0" + imp, "clip-path:polygon(" + k + "px 0,100% 0,100% calc(100% - " + k + "px),calc(100% - " + k + "px) 100%,0 100%,0 " + k + "px)" + imp, "box-shadow:inset 0 0 14px " + rgba(c.accent, 0.3) + imp]);
          tagRule([".total"], ["color:" + c.accent + imp, "font-family:" + headFont + imp, "text-shadow:0 0 8px " + rgba(c.accent, 0.6)]);
          tagRule([".for"], ["font-family:" + headFont + imp, "text-transform:uppercase" + imp, "letter-spacing:1px" + imp]);
        } else if (tg === "terminal") {
          tagRule([""], ["background:" + c.bg + imp, "color:" + c.text + imp, "border:1px dashed " + c.muted + imp, "border-radius:0" + imp, "clip-path:none" + imp, "box-shadow:none" + imp, "font-family:" + FONTS.mono.css + imp]);
          tagRule([".total", ".for", ".rolls span", "small"], ["font-family:" + FONTS.mono.css + imp, "color:" + c.text + imp]);
          tagRule([".total::before"], ['content:"# "', "color:" + c.muted]);
        } else if (tg === "sticker") {
          tagRule([""], ["background:" + c.surface + imp, "color:" + c.text + imp, "border:0 none" + imp, "border-left:6px solid " + c.accent + imp, "border-radius:0" + imp, "clip-path:none" + imp, "transform:rotate(-1.5deg)" + imp, "overflow:visible" + imp, "box-shadow:3px 3px 0 rgba(0,0,0,.35)" + imp]);
          tagRule(["::before"], ['content:""' + imp, "position:absolute" + imp, "top:-8px" + imp, "left:40%" + imp, "right:auto" + imp, "width:56px" + imp, "height:16px" + imp, "background:" + rgba(c.accent2, 0.55) + imp, "transform:rotate(-4deg)" + imp]);
          tagRule([".total"], ["font-family:" + headFont + imp, "color:" + c.text + imp]);
        }
        rule([V("bold")], ["font-weight:700" + imp]);
        rule([V("upper")], ["text-transform:uppercase"]);
        return out.join("\n");
      }
      var SAFE_CSS = /^[\w\s#%.,:;(){}\[\]=!"'*+-]*$/;
      var DATA_URL = /url\("data:(?:font\/woff2|font\/woff|font\/ttf|font\/otf|image\/png|image\/jpeg|image\/webp);base64,[A-Za-z0-9+\/]+={0,2}"\)/g;
      var MAX_CSS = 6e4;
      var MAX_CSS_WITH_ASSETS = 6e6;
      function isSafeCss(css) {
        if (typeof css !== "string" || css.length === 0 || css.length > MAX_CSS_WITH_ASSETS) return false;
        var rest = css.replace(DATA_URL, "url()").replace(/@font-face/g, "");
        return rest.length <= MAX_CSS && SAFE_CSS.test(rest) && !/url\s*\((?!\))|expression|javascript|binding/i.test(rest);
      }
      function classesFor(node) {
        var out = [];
        var allowed = VARIANTS[node.className] || [];
        if (node.variant && allowed.indexOf(node.variant) >= 0) out.push("tt-" + node.variant);
        if (node.className === "Label") {
          if (node.textSize && TEXT_SIZES[node.textSize]) out.push("tt-s-" + node.textSize);
          if (node.bold) out.push("tt-bold");
          if (node.upper) out.push("tt-upper");
        }
        return out.join(" ");
      }
      return {
        useTexts: useTexts2,
        FONTS,
        COLOR_KEYS,
        ENUMS,
        ENUM_LABELS,
        RANGES,
        PRESETS,
        VARIANTS,
        TEXT_SIZES,
        HEX,
        SKIN_ID_RE,
        withDefaults,
        DEFAULTS,
        presetTheme,
        validateTheme,
        validateAssets,
        ASSET_TYPES,
        ASSET_LIMITS,
        ASSET_ID_RE,
        assetFontId,
        themeCss,
        classesFor,
        isSafeCss
      };
    });
  }
});

// apps/desktop/renderer/builder-core.js
var require_builder_core = __commonJS({
  "apps/desktop/renderer/builder-core.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) module2.exports = factory();
      else root.TTBuilder = factory();
    })(typeof self !== "undefined" ? self : exports2, function() {
      "use strict";
      var given2 = null;
      var french2 = null;
      function say2(key, vars) {
        var text;
        if (given2) text = given2(key, vars);
        else {
          if (french2 === null) {
            try {
              french2 = typeof module2 === "object" && module2.exports && typeof require === "function" ? require_fr() : {};
            } catch (e) {
              french2 = {};
            }
          }
          text = french2[key] || key;
          Object.keys(vars || {}).forEach(function(k) {
            text = text.split("{" + k + "}").join(String(vars[k]));
          });
        }
        return text;
      }
      function useTexts2(fn) {
        given2 = typeof fn === "function" ? fn : null;
      }
      var Theme = typeof module2 === "object" && module2.exports ? require_builder_theme() : self.TTBuilderTheme;
      var LIMITS2 = { nodes: 2e3, depth: 12, text: 500, name: 80, formula: 1e3, roll: 1e3, options: 60, optionLabel: 60, views: 1, tabs: 12, tabTitle: 60, skins: 6 };
      var RESERVED_IDS = { loom: true, loom_skin: true, loom_vision: true };
      var ID_RE3 = /^\w{1,40}$/;
      var SYSTEM_ID_RE = /^[a-z0-9][a-z0-9-]{1,39}$/;
      var VERSION_RE3 = /^\d+\.\d+\.\d+$/;
      var ALIGN = ["Left", "Center", "Right"];
      var VARIANT_LABELS = { get ""() {
        return say2("builder.aucune");
      }, title: "Titre", subtitle: "Sous-titre", muted: "Discret", badge: "Pastille", banner: "Bandeau", get stat() {
        return say2("builder.chiffreCle");
      }, get card() {
        return say2("builder.carte");
      }, inset: "En creux", button: "Bouton", inline: "En ligne (compact)" };
      var SIZE_LABELS = { "": "Normale", tiny: "Minuscule", small: "Petite", medium: "Moyenne", large: "Grande", get giant() {
        return say2("builder.geante");
      } };
      var gmOnlyProp = { k: "gmOnly", t: "bool", get label() {
        return say2("builder.reserveMjJoueursNe");
      } };
      var variantProp = function(name) {
        return { k: "variant", t: "enum", options: [""].concat(Theme.VARIANTS[name]), labels: VARIANT_LABELS, def: "", label: "Style" };
      };
      var COMPONENTS = {
        Row: { label: "Ligne", container: true, children: ["Column"], props: [] },
        Column: { label: "Colonne", container: true, props: [{ k: "size", t: "int", min: 1, max: 12, def: 12, get label() {
          return say2("builder.largeurSur12");
        } }, variantProp("Column")] },
        Label: {
          get label() {
            return say2("builder.texte");
          },
          icon: "T",
          props: [
            { k: "text", t: "text", get def() {
              return say2("builder.texte");
            }, get label() {
              return say2("builder.texteFormuleSiCalcule");
            } },
            { k: "align", t: "enum", options: ALIGN, def: "Left", label: "Alignement" },
            { k: "computed", t: "bool", def: false, get label() {
              return say2("builder.valeurCalculee");
            } },
            { k: "clickable", t: "bool", def: false, get label() {
              return say2("builder.cliquableLanceJet");
            } },
            { k: "roll", t: "roll", def: "", get label() {
              return say2("builder.jetLanceClicEx");
            } },
            { k: "spendField", t: "field", get label() {
              return say2("builder.depenseRessourceChaqueClic");
            } },
            { k: "spendN", t: "int", min: 1, max: 99, get label() {
              return say2("builder.quantiteDepensee1Si");
            } },
            { k: "againstField", t: "field", pool: "number", get label() {
              return say2("builder.duelComparerJetCe");
            } },
            { k: "againstMode", t: "enum", options: ["", "atMost"], labels: { get ""() {
              return say2("builder.jetDoitAtteindreDefense");
            }, get atMost() {
              return say2("builder.jetDoitResterSous");
            } }, get label() {
              return say2("builder.commentJetGagne");
            } },
            variantProp("Label"),
            { k: "textSize", t: "enum", options: ["", "tiny", "small", "medium", "large", "giant"], labels: SIZE_LABELS, def: "", label: "Taille" },
            { k: "bold", t: "bool", def: false, label: "Gras" },
            { k: "upper", t: "bool", def: false, label: "Majuscules" },
            { k: "markdown", t: "bool", def: false, get label() {
              return say2("builder.miseFormeMarkdownGras");
            } },
            { k: "tooltipLabel", t: "text", def: "", label: "Infobulle au survol (optionnel)" },
            { k: "quickBar", t: "bool", def: false, get label() {
              return say2("builder.peutEtreGlisseDans");
            } },
            { k: "quickBarLabel", t: "text", def: "", get label() {
              return say2("builder.nomDansBarreRapide");
            } }
          ]
        },
        TextInput: {
          get label() {
            return say2("builder.champTexte");
          },
          value: true,
          icon: "Aa",
          props: [
            { k: "name", t: "text", get def() {
              return say2("builder.champ");
            }, label: "Nom" },
            { k: "placeholder", t: "text", def: "", label: "Indication" },
            { k: "defaultValue", t: "text", def: "", get label() {
              return say2("builder.valeurParDefaut");
            } },
            gmOnlyProp
          ]
        },
        NumberInput: {
          get label() {
            return say2("builder.nombre");
          },
          value: true,
          numeric: true,
          icon: "1",
          props: [
            { k: "name", t: "text", get def() {
              return say2("builder.nombre");
            }, label: "Nom" },
            { k: "defaultValue", t: "text", def: "0", get label() {
              return say2("builder.valeurParDefautFormule");
            } },
            { k: "min", t: "number", def: null, label: "Minimum" },
            { k: "max", t: "number", def: null, label: "Maximum" },
            { k: "computed", t: "bool", def: false, get label() {
              return say2("builder.valeurCalculee");
            } },
            variantProp("NumberInput"),
            { k: "align", t: "enum", options: ["", "Left", "Center", "Right"], labels: { get ""() {
              return say2("builder.parDefaut");
            }, get Left() {
              return say2("builder.gauche");
            }, get Center() {
              return say2("builder.centre");
            }, get Right() {
              return say2("builder.droite");
            } }, def: "", get label() {
              return say2("builder.alignementNombre");
            } },
            { k: "tooltipLabel", t: "text", def: "", label: "Infobulle au survol (optionnel)" },
            gmOnlyProp
          ]
        },
        Textarea: {
          get label() {
            return say2("builder.zoneTexte");
          },
          value: true,
          icon: "\xB6",
          props: [
            { k: "name", t: "text", def: "Notes", label: "Nom" },
            { k: "placeholder", t: "text", def: "", label: "Indication" },
            { k: "defaultValue", t: "text", def: "", get label() {
              return say2("builder.valeurParDefaut");
            } },
            gmOnlyProp
          ]
        },
        Checkbox: {
          get label() {
            return say2("builder.caseCocher");
          },
          value: true,
          numeric: true,
          icon: "\u2611",
          props: [
            { k: "name", t: "text", def: "Case", label: "Nom" },
            { k: "label", t: "text", def: "Case", get label() {
              return say2("builder.texteCote");
            } },
            { k: "effectTarget", t: "field", pool: "computed", get label() {
              return say2("builder.effetQuandCaseEst");
            } },
            { k: "effectValue", t: "text", get label() {
              return say2("builder.valeurAjouteeNombreFormule");
            } },
            gmOnlyProp
          ]
        },
        Choice: {
          label: "Liste de choix",
          value: true,
          icon: "\u25BE",
          props: [
            { k: "name", t: "text", def: "Choix", label: "Nom" },
            { k: "options", t: "options", def: null, label: "Options" },
            { k: "optional", t: "bool", def: false, label: "Peut rester vide" },
            { k: "multiple", t: "bool", def: false, label: "Plusieurs choix" },
            { k: "expanded", t: "bool", def: false, get label() {
              return say2("builder.toutesOptionsVisibles");
            } },
            gmOnlyProp
          ]
        },
        Icon: {
          get label() {
            return say2("builder.iconeJet");
          },
          icon: "\u{1F3B2}",
          props: [
            { k: "iconName", t: "text", def: "fas fa-dice-d20", get label() {
              return say2("builder.iconeClasseFontAwesome");
            } },
            { k: "roll", t: "roll", def: "1d20", get label() {
              return say2("builder.jetLanceClic");
            } },
            { k: "rollTitle", t: "text", def: "", get label() {
              return say2("builder.titreJet");
            } }
          ]
        },
        Avatar: { label: "Portrait", icon: "\u25C9", props: [{ k: "name", t: "text", def: "Portrait", label: "Nom" }] },
        Track: {
          label: "Pastilles",
          value: true,
          numeric: true,
          icon: "\u25CF",
          props: [
            { k: "name", t: "text", def: "Pastilles", label: "Nom" },
            { k: "count", t: "int", min: 1, max: 20, def: 5, get label() {
              return say2("builder.nombrePastilles");
            } },
            { k: "showTotal", t: "bool", def: false, get label() {
              return say2("builder.afficherTotalCote");
            } }
          ]
        },
        Gauge: {
          label: "Jauge",
          icon: "\u25AD",
          props: [
            { k: "name", t: "text", def: "Jauge", get label() {
              return say2("builder.libelle");
            } },
            { k: "valueField", t: "field", pool: "number", get label() {
              return say2("builder.valeurChampNombre");
            } },
            { k: "maxField", t: "field", pool: "number", get label() {
              return say2("builder.maximumChampNombre");
            } },
            { k: "max", t: "int", min: 1, max: 9999, get label() {
              return say2("builder.maximumFixe");
            } },
            { k: "segments", t: "int", min: 0, max: 40, def: 10, label: "Cellules (0 : automatique)" },
            { k: "showValue", t: "bool", def: true, get label() {
              return say2("builder.afficherValeurMax");
            } }
          ]
        },
        Container: {
          label: "Conteneur",
          container: true,
          icon: "\u25A6",
          props: [{ k: "layout", t: "enum", options: ["horizontal", "vertical"], labels: { get horizontal() {
            return say2("builder.ligneCoteCote");
          }, get vertical() {
            return say2("builder.pileSousAutre");
          } }, def: "horizontal", label: "Disposition" }, variantProp("Container")]
        },
        Tab: {
          label: "Onglets",
          container: true,
          icon: "\u229F",
          props: [
            { k: "tabs", t: "tabs", def: null, label: "Onglets" },
            { k: "vertical", t: "bool", def: false, get label() {
              return say2("builder.ongletsGaucheVerticaux");
            } },
            { k: "verticalWidth", t: "int", min: 1, max: 11, def: 3, get label() {
              return say2("builder.largeurOngletsVerticauxSur");
            } }
          ]
        },
        Repeater: {
          get label() {
            return say2("builder.listeRepetable");
          },
          container: true,
          icon: "\u2630",
          props: [
            { k: "layout", t: "enum", options: ["vertical", "horizontal"], labels: { get vertical() {
              return say2("builder.entreesSousAutre");
            }, get horizontal() {
              return say2("builder.entreesCoteCote");
            } }, def: "vertical", get label() {
              return say2("builder.dispositionEntrees");
            } },
            { k: "noAdd", t: "bool", def: false, get label() {
              return say2("builder.masquerBoutonAjouter");
            } }
          ]
        }
      };
      function slots(n) {
        if (!n) return [];
        if (n.className === "Tab") return (Array.isArray(n.tabs) ? n.tabs : []).filter(isObj5).map(function(t) {
          return { list: Array.isArray(t.children) ? t.children : [], key: "tab:" + t.id, tab: t };
        });
        if (n.className === "Repeater") return [{ list: Array.isArray(n.children) ? n.children : [], key: "edit", area: "edit" }, { list: Array.isArray(n.readChildren) ? n.readChildren : [], key: "read", area: "read" }];
        return Array.isArray(n.children) ? [{ list: n.children, key: "children" }] : [];
      }
      function spendableIds(doc, withComputed) {
        var out = {};
        function visit(list2) {
          (Array.isArray(list2) ? list2 : []).forEach(function(n) {
            if (!isObj5(n)) return;
            if (n.className === "NumberInput" && (withComputed || !n.computed) && typeof n.id === "string") out[n.id] = n;
            if (n.className === "Repeater") return;
            slots(n).forEach(function(sl) {
              visit(sl.list);
            });
          });
        }
        (doc && doc.views || []).forEach(function(v) {
          if (isObj5(v)) visit(v.children);
        });
        return out;
      }
      function hasValue(n) {
        return !!(n && (COMPONENTS[n.className].value || n.className === "Label" && n.computed));
      }
      var isObj5 = function(v) {
        return v !== null && typeof v === "object" && !Array.isArray(v);
      };
      var STR_CTRL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u0085\u2028\u2029]/g;
      function cleanText2(v, max) {
        var s = typeof v === "string" ? v : v == null ? "" : String(v);
        return s.replace(STR_CTRL, "").slice(0, max);
      }
      function escapeMarkup(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      function unescapeMarkup(s) {
        return typeof s === "string" ? s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&") : s;
      }
      function parseFormula(source) {
        var s = String(source);
        var pos = 0;
        var refs = [], vars = [], contexts = [], warnings = [];
        var fail = function(msg) {
          throw { syntax: msg, at: pos };
        };
        var spaces = function() {
          while (s.charAt(pos) === " ") pos++;
        };
        var word = function() {
          var m = /^[0-9A-Za-z_]*/.exec(s.slice(pos));
          pos += m[0].length;
          return m[0];
        };
        var eat = function(t) {
          if (s.substr(pos, t.length) === t) {
            pos += t.length;
            return true;
          }
          return false;
        };
        function comparison() {
          var left = additive();
          var save = pos;
          spaces();
          var op = null;
          var ops = [">=", "<=", ">", "<", "=", "!="];
          for (var i = 0; i < ops.length; i++) if (s.substr(pos, ops[i].length) === ops[i]) {
            op = ops[i];
            break;
          }
          if (!op) {
            pos = save;
            return left;
          }
          pos += op.length;
          spaces();
          return { t: "cmp", op, l: left, r: additive() };
        }
        function additive() {
          var left = multiplicative();
          var save = pos;
          spaces();
          var op = s.charAt(pos);
          if (op !== "+" && op !== "-") {
            pos = save;
            return left;
          }
          pos++;
          spaces();
          var right = additive();
          if (right.t === "bin" && (right.op === "+" || right.op === "-") && !right.paren && (op === "-" || right.op === "-")) {
            warnings.push(say2("builder.warn.rightGroup", { op, op2: right.op }));
          }
          return { t: "bin", op, l: left, r: right };
        }
        function multiplicative() {
          var left = reference();
          var save = pos;
          spaces();
          var op = s.charAt(pos);
          if (op !== "*" && op !== "/" && op !== "%") {
            pos = save;
            return left;
          }
          pos++;
          spaces();
          var right = multiplicative();
          if (right.t === "bin" && (right.op === "*" || right.op === "/" || right.op === "%") && !right.paren && (op !== "*" || right.op !== "*")) {
            warnings.push(say2("builder.warn.rightGroup", { op, op2: right.op }));
          }
          return { t: "bin", op, l: left, r: right };
        }
        function reference() {
          if (eat("@")) {
            var id = word();
            refs.push(id);
            return { t: "ref", id };
          }
          if (eat("$")) {
            var v = word();
            vars.push(v);
            return { t: "var", id: v };
          }
          if (eat("#")) {
            var c = word();
            contexts.push(c);
            return { t: "ctx", id: c };
          }
          return fn();
        }
        function args2(name) {
          if (!eat("(")) fail(say2("builder.parse.openAfter", { name }));
          var list2 = [additive()];
          spaces();
          while (eat(",")) {
            spaces();
            list2.push(additive());
            spaces();
          }
          if (!eat(")")) fail(say2("builder.parentheseFermanteAttendue"));
          return list2;
        }
        function fn() {
          var names = ["round", "floor", "ceil", "avg", "sum", "if"];
          for (var i = 0; i < names.length; i++) {
            var n = names[i];
            if (s.substr(pos, n.length) === n && s.charAt(pos + n.length) === "(") {
              pos += n.length;
              if (n === "if") {
                pos++;
                var base = comparison();
                spaces();
                if (!eat(",")) fail(say2("builder.ifAttendIfCondition"));
                spaces();
                var yes = additive();
                spaces();
                eat(",");
                spaces();
                var no = null;
                if (s.charAt(pos) !== ")") no = additive();
                spaces();
                if (!eat(")")) fail(say2("builder.parentheseFermanteAttendue"));
                return { t: "if", c: base, y: yes, n: no };
              }
              if (n === "avg" || n === "sum") return { t: n, a: args2(n) };
              pos++;
              var inner = comparison();
              if (!eat(")")) fail(say2("builder.parentheseFermanteAttendue"));
              return { t: n, a: [inner] };
            }
          }
          return primary();
        }
        function primary() {
          if (s.charAt(pos) === "(") {
            pos++;
            spaces();
            var inner = comparison();
            spaces();
            if (!eat(")")) fail(say2("builder.parentheseFermanteAttendue"));
            return { t: "paren", e: inner, paren: true };
          }
          var m = /^-?[0-9]+(\.+[0-9]+)?/.exec(s.slice(pos));
          if (m) {
            pos += m[0].length;
            return { t: "num", v: parseFloat(m[0].replace(/\.+/, ".")) };
          }
          if (s.charAt(pos) === '"') {
            var end = s.indexOf('"', pos + 1);
            if (end < 0) fail("Guillemet fermant manquant.");
            var text = s.slice(pos + 1, end);
            pos = end + 1;
            return { t: "str", v: text };
          }
          fail(pos >= s.length ? say2("builder.parse.incomplete") : say2("builder.parse.unexpected", { char: s.charAt(pos) }));
        }
        try {
          if (/[^\S ]/.test(s)) fail(say2("builder.seulEspaceEstAccepte"));
          if (s.length > LIMITS2.formula) fail(say2("builder.formuleTropLongue"));
          spaces();
          var ast = comparison();
          spaces();
          if (pos < s.length) fail(say2("builder.parse.unexpected", { char: s.charAt(pos) }));
          return { ok: true, ast, refs, vars, contexts, warnings };
        } catch (e) {
          if (e && e.syntax) return { ok: false, error: e.syntax + " (position " + (e.at + 1) + ")" };
          throw e;
        }
      }
      var isStringy = function(v) {
        return v.type === "string" || v.type === "reference" && typeof v.value === "string";
      };
      var number = function(total) {
        return { type: "number", total: total === null || total === void 0 ? 0 : total };
      };
      function evalAst(node, env, depth) {
        depth = depth || 0;
        if (depth > 30) return number(0);
        var ev = function(n) {
          return evalAst(n, env, depth + 1);
        };
        switch (node.t) {
          case "num":
            return number(node.v);
          case "str":
            return { type: "string", value: node.v, total: 1 };
          case "paren":
            return number(ev(node.e).total);
          case "ref": {
            var r = env.ref(node.id);
            return { type: "reference", total: r, value: typeof r === "string" ? r : null };
          }
          case "var": {
            var src = env.variable(node.id);
            if (src === void 0) return number(0);
            var parsed = parseFormula(src);
            return parsed.ok ? { type: "variable", total: evalFinal(evalAst(parsed.ast, env, depth + 1)) } : number(0);
          }
          case "ctx": {
            var cv = env.context ? env.context(node.id) : 0;
            if (typeof cv === "string" && /^-?\d{1,15}(?:\.\d{1,15})?$/.test(cv)) cv = Number(cv);
            return typeof cv === "string" ? { type: "string", value: cv, total: 1 } : number(typeof cv === "number" ? cv : 0);
          }
          case "cmp": {
            var a = ev(node.l).total, b = ev(node.r).total, ok;
            switch (node.op) {
              case ">":
                ok = a > b;
                break;
              case "<":
                ok = a < b;
                break;
              case "<=":
                ok = a <= b;
                break;
              case ">=":
                ok = a >= b;
                break;
              case "=":
                ok = a == b;
                break;
              // eslint-disable-line eqeqeq
              default:
                ok = a != b;
                break;
            }
            return { type: "comparison", total: ok ? 1 : 0 };
          }
          case "bin": {
            var l = ev(node.l), rr = ev(node.r);
            if (node.op === "+") {
              if (isStringy(l) && isStringy(rr)) return { type: "string", value: String(l.value) + String(rr.value), total: 1 };
              if (isStringy(l)) return { type: "string", value: String(l.value) + (rr.total === null ? "" : String(rr.total)), total: 1 };
              if (isStringy(rr)) return { type: "string", value: (l.total === null ? "" : String(l.total)) + String(rr.value), total: 1 };
              return number(l.total + rr.total);
            }
            if (node.op === "-") return number(l.total - rr.total);
            if (node.op === "*") return number(l.total * rr.total);
            if (node.op === "/") return number(l.total / rr.total);
            return number(l.total % rr.total);
          }
          case "round":
            return number(Math.round(ev(node.a[0]).total));
          case "floor":
            return number(Math.floor(ev(node.a[0]).total));
          case "ceil":
            return number(Math.ceil(ev(node.a[0]).total));
          case "sum":
          case "avg": {
            var totals = [ev(node.a[0]).total];
            for (var i = 1; i < node.a.length; i++) {
              var t = ev(node.a[i]).total;
              if (t) totals.push(t);
            }
            var sum = totals.reduce(function(p, c) {
              return p + c;
            }, 0);
            return number(node.t === "sum" ? sum : sum / totals.length);
          }
          case "if": {
            var base = ev(node.c);
            if (isStringy(base) && base.value != null) return ev(node.y);
            if (base.total > 0) return ev(node.y);
            return node.n ? ev(node.n) : number(0);
          }
        }
        return number(0);
      }
      function evalFinal(result) {
        if (result.type === "string") return result.value;
        return Number.isNaN(result.total) ? 0 : result.total;
      }
      function walk3(nodes, fn, path7, depth) {
        (nodes || []).forEach(function(n, i) {
          var p = (path7 || []).concat(i);
          fn(n, p, depth || 0);
          slots(n).forEach(function(sl) {
            walk3(sl.list, fn, p, (depth || 0) + 1);
          });
        });
      }
      function emptyDoc(name) {
        return {
          v: 1,
          id: "mon-systeme",
          name: name || say2("builder.mySystem"),
          version: "1.0.0",
          author: "",
          description: "",
          license: "",
          views: [{
            id: "main",
            type: "Main",
            name: "Personnage",
            width: 900,
            height: 700,
            tokenizable: true,
            craft: true,
            avatarId: "avatar",
            children: [
              { className: "Row", id: "row_head", children: [
                { className: "Column", id: "col_avatar", size: 3, children: [{ className: "Avatar", id: "avatar", name: "Portrait" }] },
                { className: "Column", id: "col_name", size: 9, children: [
                  { className: "Label", id: "lbl_name", text: "Nom", align: "Left" },
                  { className: "TextInput", id: "char_name", name: "Nom", defaultValue: "" }
                ] }
              ] }
            ]
          }],
          tables: {},
          variables: [],
          skins: [{ id: "defaut", get name() {
            return say2("builder.metierPapier");
          }, theme: Theme.presetTheme("metier") }]
        };
      }
      function upgradeDoc(doc) {
        if (!isObj5(doc) || !("theme" in doc)) return doc;
        var out = Object.assign({}, doc);
        out.skins = doc.theme ? [{ id: "defaut", get name() {
          return say2("builder.parDefaut");
        }, theme: doc.theme }] : [];
        delete out.theme;
        return out;
      }
      function validateSkins(doc, err) {
        var skins = doc.skins === void 0 ? [] : doc.skins;
        if (!Array.isArray(skins)) return err("theme", "Skins illisibles.");
        if (skins.length > LIMITS2.skins) err("theme", say2("builder.skin.tooMany", { max: LIMITS2.skins }));
        var seen = {};
        skins.forEach(function(s, i) {
          var label = "Skin " + (i + 1);
          if (!isObj5(s)) return err("theme", label + " illisible.");
          if (typeof s.id !== "string" || !Theme.SKIN_ID_RE.test(s.id)) err("theme", say2("builder.skin.badId", { label }));
          else if (seen[s.id]) err("theme", say2("builder.skin.duplicate", { id: s.id }));
          else seen[s.id] = true;
          if (typeof s.name !== "string" || !cleanText2(s.name, 100).trim() || s.name.length > 40) err("theme", say2("builder.skin.badName", { label }));
          if (!isObj5(s.theme)) return err("theme", label + " : apparence manquante.");
          Theme.validateTheme(s.theme, doc.assets).forEach(function(m) {
            err("theme", label + " : " + m);
          });
        });
      }
      function allNodes(doc) {
        var out = [];
        (doc.views || []).forEach(function(v) {
          walk3(v.children, function(n) {
            out.push(n);
          });
        });
        return out;
      }
      function uniqueId(doc, base) {
        var used = {};
        allNodes(doc).forEach(function(n) {
          used[n.id] = true;
        });
        (doc.views || []).forEach(function(v) {
          used[v.id] = true;
        });
        var stem = String(base || "champ").replace(/\W+/g, "_").replace(/^_+|_+$/g, "").toLowerCase().slice(0, 30) || "champ";
        var id = stem, i = 2;
        while (used[id]) id = stem + "_" + i++;
        return id;
      }
      function newNode(doc, className) {
        var def = COMPONENTS[className];
        if (!def) throw new Error(say2("builder.unknownComponent", { name: className }));
        var node = { className, id: uniqueId(doc, className === "Column" ? "col" : className === "Row" ? "row" : className) };
        def.props.forEach(function(p) {
          if (p.k === "options") node.options = [{ id: "option_1", label: "Option 1" }, { id: "option_2", label: "Option 2" }];
          else if (p.def !== null && p.def !== void 0) node[p.k] = p.def;
        });
        if (def.container) node.children = [];
        if (className === "Row") node.children = [newColumnFor(doc, node.id)];
        if (className === "Tab") {
          node.children = void 0;
          delete node.children;
          node.tabs = [{ id: "onglet_1", label: "Onglet 1", children: [] }, { id: "onglet_2", label: "Onglet 2", children: [] }];
        }
        if (className === "Repeater") node.readChildren = [];
        return node;
      }
      function newColumnFor(doc, rowId) {
        return { className: "Column", id: uniqueId(doc, "col"), size: 12, children: [] };
      }
      function formulaHtmlProblem(text) {
        var strings = String(text).match(/"[^"]*"/g) || [];
        for (var i = 0; i < strings.length; i++) if (/[<>&]/.test(strings[i])) return say2("builder.quotesMarkup");
        if (/<[A-Za-z\/!?]/.test(String(text).replace(/"[^"]*"/g, '""'))) return "mets une espace apr\xE8s \xAB < \xBB quand une fonction ou un nom suit.";
        return "";
      }
      function withLimits(opts, fn) {
        var saved = { formula: LIMITS2.formula, roll: LIMITS2.roll, text: LIMITS2.text };
        if (opts && opts.maxText) LIMITS2.text = opts.maxText;
        if (opts && opts.maxFormula) LIMITS2.formula = opts.maxFormula;
        if (opts && opts.maxRoll) LIMITS2.roll = opts.maxRoll;
        try {
          return fn();
        } finally {
          LIMITS2.formula = saved.formula;
          LIMITS2.roll = saved.roll;
          LIMITS2.text = saved.text;
        }
      }
      function validate(doc, opts) {
        return withLimits(opts, function() {
          var result = validateInner(doc, opts);
          if (result.ok && hasEffects(doc)) {
            var worked = validateInner(applyEffects(doc), opts);
            if (!worked.ok) {
              result.ok = false;
              result.errors.push({ id: null, message: say2("builder.effect.breaks", { why: worked.errors[0].message }) });
            }
          }
          return result;
        });
      }
      function validateInner(doc, opts) {
        doc = upgradeDoc(doc);
        var maxNodes = opts && opts.maxNodes || LIMITS2.nodes;
        var errors = [], warnings = [];
        var err = function(id, message2) {
          errors.push({ id: id || null, message: message2 });
        };
        var warn = function(id, message2) {
          warnings.push({ id: id || null, message: message2 });
        };
        if (!isObj5(doc) || doc.v !== 1) {
          err(null, "Document illisible.");
          return { ok: false, errors, warnings };
        }
        if (!SYSTEM_ID_RE.test(String(doc.id))) err(null, say2("builder.identifiantSystemeInvalideMinuscules"));
        var nm = cleanText2(doc.name, LIMITS2.name).trim();
        if (nm.length < 2) err(null, say2("builder.donneNomMoins2"));
        if (!VERSION_RE3.test(String(doc.version))) err(null, say2("builder.versionInvalideEx1"));
        Theme.validateAssets(doc.assets).forEach(function(m) {
          err("theme", m);
        });
        validateSkins(doc, err);
        var views = Array.isArray(doc.views) ? doc.views : [];
        var main2 = views.filter(function(v) {
          return v && v.id === "main";
        })[0];
        if (!main2 || main2.type !== "Main") {
          err(null, say2("builder.ilFautFichePrincipale"));
          return { ok: false, errors, warnings };
        }
        if (views.length !== 1) err(null, say2("builder.seuleFichePrincipaleOnglets"));
        var count = 0;
        var idOwner = {};
        var byId = {};
        var scopes = {};
        var formulas = [];
        var avatars = [];
        if (!(main2.width >= 300 && main2.width <= 1600) || !(main2.height >= 200 && main2.height <= 1600)) err("main", say2("builder.badSize"));
        function check(n, depth, parent, scope) {
          count++;
          if (count > maxNodes) return;
          if (!isObj5(n) || !COMPONENTS[n.className]) {
            err(n && n.id, say2("builder.unknownComponent", { name: n && n.className }));
            return;
          }
          var def = COMPONENTS[n.className];
          if (n.gmOnly !== void 0 && typeof n.gmOnly !== "boolean") err(n.id, say2("builder.reserveMjDoitEtre"));
          else if (n.gmOnly === true && !def.value) err(n.id, say2("builder.reserveMjNeS"));
          if (depth > LIMITS2.depth) err(n.id, say2("builder.imbricationTropProfonde"));
          if (typeof n.id !== "string" || !ID_RE3.test(n.id)) err(n.id, say2("builder.key.invalid", { id: n.id }));
          else if (idOwner[n.id]) err(n.id, say2("builder.key.twice", { id: n.id }));
          else {
            idOwner[n.id] = true;
            byId[n.id] = n;
            scopes[n.id] = scope;
          }
          if (typeof n.id === "string" && RESERVED_IDS[n.id]) err(n.id, say2("builder.key.reserved", { id: n.id }));
          var pc = parent && parent.className;
          var host = pc === "Column" || pc === "Container";
          if (n.className === "Row" && pc !== void 0 && !host) err(n.id, say2("builder.ligneSePlaceDans"));
          if (n.className === "Column" && pc !== "Row") err(n.id, say2("builder.colonneSePlaceDans"));
          if (n.className !== "Row" && n.className !== "Column" && !host) err(n.id, say2("builder.placeInColumn", { what: def.label }));
          if (n.className === "Repeater" && scope.repeater) err(n.id, say2("builder.listeRepetableNePeut"));
          if (n.className === "Track") {
            if (!(Number.isInteger(n.count) && n.count >= 1 && n.count <= 20)) err(n.id, say2("builder.nombrePastillesVa1"));
            if (typeof n.id === "string" && n.id.length > 12) err(n.id, say2("builder.cleSeriePastillesEst"));
            if (scope.repeater) err(n.id, say2("builder.pastillesNePeuventPas"));
            idOwner[n.id + "__box"] = true;
            for (var t = 1; t <= 20; t++) {
              if (idOwner[n.id + "__" + t]) err(n.id, say2("builder.key.taken", { id: n.id + "__" + t }));
            }
            for (var u = 1; u <= (n.count || 0) && u <= 20; u++) idOwner[n.id + "__" + u] = true;
          }
          if (n.className === "Gauge") {
            if (scope.repeater) err(n.id, say2("builder.jaugeNePeutPas"));
            if (typeof n.valueField !== "string" || !allNumbers[n.valueField]) err(n.id, say2("builder.valeurJaugeDoitEtre"));
            var hasMaxField = typeof n.maxField === "string" && n.maxField !== "";
            if (hasMaxField && !allNumbers[n.maxField]) err(n.id, say2("builder.maximumJaugeDoitEtre"));
            if (!hasMaxField && !(Number.isInteger(n.max) && n.max >= 1 && n.max <= 9999)) err(n.id, say2("builder.donneJaugeChampMaximum"));
            if (n.segments !== void 0 && !(Number.isInteger(n.segments) && n.segments >= 0 && n.segments <= 40)) err(n.id, say2("builder.cellulesJaugeVont0"));
            if (idOwner[n.id + "__label"]) err(n.id, say2("builder.key.taken", { id: n.id + "__label" }));
            idOwner[n.id + "__label"] = true;
          }
          if (n.align !== void 0 && n.align !== "" && ALIGN.indexOf(n.align) < 0) err(n.id, say2("builder.alignementInvalide"));
          if (n.className === "Avatar" && scope.repeater) err(n.id, say2("builder.portraitNePeutPas"));
          if ((n.className === "Container" || n.className === "Repeater") && n.layout !== void 0 && def.props[0].options.indexOf(n.layout) < 0) err(n.id, say2("builder.dispositionInvalide"));
          if (n.className === "Tab") {
            var tabs = Array.isArray(n.tabs) ? n.tabs : [];
            var seenTab = {};
            if (!tabs.length) err(n.id, say2("builder.ajouteMoinsOnglet"));
            if (tabs.length > LIMITS2.tabs) err(n.id, say2("builder.tabs.tooMany", { max: LIMITS2.tabs }));
            if (n.verticalWidth != null && !(Number.isInteger(n.verticalWidth) && n.verticalWidth >= 1 && n.verticalWidth <= 11)) err(n.id, say2("builder.largeurOngletsVerticauxVa"));
            tabs.forEach(function(t2) {
              if (!isObj5(t2) || typeof t2.id !== "string" || !ID_RE3.test(t2.id)) err(n.id, say2("builder.cleOngletInvalide"));
              else if (seenTab[t2.id]) err(n.id, say2("builder.tabs.duplicate", { id: t2.id }));
              else {
                seenTab[t2.id] = true;
                if (idOwner[n.id + "__" + t2.id]) err(n.id, say2("builder.key.taken", { id: n.id + "__" + t2.id }));
                idOwner[n.id + "__" + t2.id] = true;
              }
              if (!isObj5(t2) || typeof t2.label !== "string" || !cleanText2(t2.label, 1e5).trim() || t2.label.length > LIMITS2.tabTitle) err(n.id, say2("builder.titreOngletVideTrop"));
              if (isObj5(t2) && !Array.isArray(t2.children)) err(n.id, say2("builder.contenuOngletIllisible"));
            });
          }
          if (n.className === "Repeater") {
            idOwner[n.id + "__edit"] = true;
            idOwner[n.id + "__read"] = true;
            if (!Array.isArray(n.children) || !n.children.length) warn(n.id, say2("builder.formulaireEditionCetteListe"));
            if (!Array.isArray(n.readChildren) || !n.readChildren.length) warn(n.id, say2("builder.affichageEntreeEstVide"));
          }
          if (n.variant !== void 0 && n.variant !== "" && (Theme.VARIANTS[n.className] || []).indexOf(n.variant) < 0) err(n.id, say2("builder.style.unknown", { name: n.variant }));
          if (n.textSize !== void 0 && n.textSize !== "" && !Theme.TEXT_SIZES[n.textSize]) err(n.id, say2("builder.tailleTexteInconnue"));
          if (n.className === "Column") {
            if (!(Number.isInteger(n.size) && n.size >= 1 && n.size <= 12)) err(n.id, say2("builder.largeurColonneVa1"));
          }
          if (n.className === "Row") {
            var kids = Array.isArray(n.children) ? n.children : [];
            var total = kids.reduce(function(s, c) {
              return s + (c && c.size ? c.size : 0);
            }, 0);
            if (total > 12) warn(n.id, say2("builder.columns.overflow", { total }));
            if (!kids.length) warn(n.id, "Ligne vide.");
          }
          ["name", "placeholder", "label", "rollTitle", "iconName", "tooltipLabel", "quickBarLabel"].forEach(function(k) {
            if (n[k] !== void 0 && (typeof n[k] !== "string" || n[k].length > LIMITS2.name)) err(n.id, say2("builder.prop.tooLong", { name: k, max: LIMITS2.name }));
          });
          if (n.className === "Label") {
            if (typeof n.text !== "string" || n.text.length > LIMITS2.text) err(n.id, say2("builder.textTooLong", { max: LIMITS2.text }));
            else if (n.computed) formulas.push({ id: n.id, text: n.text, kind: "calc", scope });
            if (n.align !== void 0 && ALIGN.indexOf(n.align) < 0) err(n.id, say2("builder.alignementInvalide"));
            if (n.clickable && !n.roll) warn(n.id, say2("builder.cliquableSansJetClic"));
            if (n.spendField !== void 0 && n.spendField !== "") {
              if (typeof n.spendField !== "string") err(n.id, say2("builder.ressourceDepenseeDoitEtre"));
              else if (!n.clickable || !n.roll) err(n.id, say2("builder.depenserRessourceDemandeTexte"));
              else if (scope.repeater) err(n.id, say2("builder.depenseRessourceNEst"));
              else if (!spendable[n.spendField]) err(n.id, say2("builder.spend.notNumber", { field: n.spendField }));
            }
            if (n.againstField !== void 0 && n.againstField !== "") {
              if (typeof n.againstField !== "string") err(n.id, say2("builder.defenseCompareeDoitEtre"));
              else if (!n.clickable || !n.roll) err(n.id, say2("builder.duelDemandeTexteCliquable"));
              else if (scope.repeater) err(n.id, say2("builder.duelNEstPossible"));
              else if (!allNumbers[n.againstField]) err(n.id, say2("builder.duel.notNumber", { field: n.againstField }));
            }
            if (n.againstMode !== void 0 && n.againstMode !== "" && n.againstMode !== "atLeast" && n.againstMode !== "atMost") err(n.id, say2("builder.sensComparaisonEstInconnu"));
            if (n.spendN !== void 0 && !(typeof n.spendN === "number" && n.spendN >= 1 && n.spendN <= 99 && Math.floor(n.spendN) === n.spendN)) err(n.id, say2("builder.quantiteDepenseeDoitEtre"));
            if (n.roll) formulas.push({ id: n.id, text: n.roll, kind: "roll", scope });
          }
          if (n.className === "Icon" && n.roll) formulas.push({ id: n.id, text: n.roll, kind: "roll", scope });
          if (n.className === "Checkbox" && n.effectTarget !== void 0 && n.effectTarget !== "") {
            if (typeof n.effectTarget !== "string") err(n.id, say2("builder.champEffetDoitEtre"));
            else if (scope.repeater) err(n.id, say2("builder.effetNEstPossible"));
            else if (!computedNumbers[n.effectTarget]) err(n.id, say2("builder.effect.notComputed", { field: n.effectTarget }));
            else {
              var value = n.effectValue == null || n.effectValue === "" ? "1" : n.effectValue;
              if (typeof value !== "string" || value.length > 120) err(n.id, say2("builder.valeurEffetEstTrop"));
              else formulas.push({ id: n.id, text: value, kind: "calc", scope });
            }
          }
          if (n.className === "NumberInput") {
            if (n.min != null && !(typeof n.min === "number" && isFinite(n.min))) err(n.id, say2("builder.minimumInvalide"));
            if (n.max != null && !(typeof n.max === "number" && isFinite(n.max))) err(n.id, say2("builder.maximumInvalide"));
            if (typeof n.min === "number" && typeof n.max === "number" && n.min > n.max) err(n.id, say2("builder.minimumDepasseMaximum"));
            if (n.computed) formulas.push({ id: n.id, text: String(n.defaultValue == null ? "" : n.defaultValue), kind: "calc", scope });
            else if (n.defaultValue != null && n.defaultValue !== "" && !/^-?\d+(\.\d+)?$/.test(String(n.defaultValue))) err(n.id, say2("builder.valeurParDefautDoit"));
          }
          if (n.className === "Choice") {
            if (!n.tableId) {
              var opts2 = Array.isArray(n.options) ? n.options : [];
              if (!opts2.length) err(n.id, say2("builder.ajouteMoinsOption"));
              if (opts2.length > LIMITS2.options) err(n.id, say2("builder.options.tooMany", { max: LIMITS2.options }));
              var seen = {};
              opts2.forEach(function(o) {
                if (!isObj5(o) || typeof o.id !== "string" || !ID_RE3.test(o.id)) err(n.id, say2("builder.cleOptionInvalide"));
                else if (seen[o.id]) err(n.id, say2("builder.options.duplicate", { id: o.id }));
                else seen[o.id] = true;
                if (!isObj5(o) || typeof o.label !== "string" || !cleanText2(o.label, 1e5).trim() || o.label.length > LIMITS2.optionLabel) err(n.id, say2("builder.libelleOptionVideTrop"));
              });
            } else if (!(doc.tables && doc.tables[n.tableId])) err(n.id, say2("builder.table.notFound", { id: n.tableId }));
          }
          if (n.className === "Avatar") avatars.push(n.id);
          slots(n).forEach(function(sl) {
            var inner = n.className === "Repeater" ? { repeater: n, area: sl.area } : scope;
            var owner = n.className === "Tab" || n.className === "Repeater" ? { className: "Column", id: n.id } : n;
            sl.list.forEach(function(c) {
              check(c, depth + 1, owner, inner);
            });
          });
        }
        var spendable = spendableIds(doc);
        var allNumbers = spendableIds(doc, true);
        var computedNumbers = computedNumberIds(doc);
        var NO_SCOPE = { repeater: null, area: null };
        if (main2.children !== void 0 && !Array.isArray(main2.children)) err("main", say2("builder.content.unreadable"));
        (Array.isArray(main2.children) ? main2.children : []).forEach(function(c) {
          check(c, 0, { className: "Column", id: "main" }, NO_SCOPE);
        });
        if (count > maxNodes) err(null, say2("builder.tooManyNodes", { max: maxNodes }));
        if (avatars.length > 1) err(avatars[1], say2("builder.seulPortraitParFiche"));
        var vars = {};
        if (doc.variables !== void 0 && !Array.isArray(doc.variables)) err(null, "Variables illisibles.");
        (Array.isArray(doc.variables) ? doc.variables : []).forEach(function(v) {
          if (!isObj5(v) || typeof v.id !== "string" || !ID_RE3.test(v.id)) err(null, say2("builder.nomVariableInvalide"));
          else if (vars[v.id] !== void 0) err(null, say2("builder.var.duplicate", { id: v.id }));
          else {
            vars[v.id] = String(v.value);
            formulas.push({ id: "$" + v.id, text: String(v.value), kind: "calc", variable: true });
          }
        });
        function contextProblem(f, name) {
          if (!f.scope || f.scope.area !== "read") return say2("builder.context.readOnly", { name });
          var t = byId[name], sc = scopes[name];
          if (!t || !sc || sc.repeater !== f.scope.repeater || sc.area !== "edit" || !hasValue(t)) return say2("builder.context.notField", { name });
          return "";
        }
        var deps2 = {};
        formulas.forEach(function(f) {
          var where = f.variable ? null : f.id;
          var label = f.variable ? say2("builder.var.label", { id: f.id.slice(1) }) : "";
          if (f.kind === "roll") {
            if (f.text.length > LIMITS2.roll) err(where, say2("builder.rollTooLong", { max: LIMITS2.roll }));
            if (!/^[0-9A-Za-z_@$#+\-*\/%().,<>=! \[\]{}]*$/.test(f.text)) err(where, say2("builder.jetContientCaracteresNon"));
            var refRe = /[@$#](\w*)/g, m;
            while (m = refRe.exec(f.text)) {
              var tok = m[0];
              if (!m[1]) err(where, say2("builder.referenceVideDansJet"));
              else if (tok[0] === "@" && !hasValue(byId[m[1]])) err(where, say2("builder.roll.noField", { id: m[1] }));
              else if (tok[0] === "@" && scopes[m[1]] && scopes[m[1]].repeater) err(where, say2("builder.roll.inList", { id: m[1] }));
              else if (tok[0] === "$" && vars[m[1]] === void 0) err(where, say2("builder.roll.noVar", { id: m[1] }));
              else if (tok[0] === "#") {
                var cp = contextProblem(f, m[1]);
                if (cp) err(where, say2("builder.roll.context", { problem: cp }));
              }
            }
            return;
          }
          var hazard = formulaHtmlProblem(f.text);
          if (hazard) {
            err(where, (label || "Formule") + " : " + hazard);
            return;
          }
          var p = parseFormula(f.text);
          if (!p.ok) {
            err(where, say2("builder.formula.error", { what: label || say2("builder.formula"), error: p.error }));
            return;
          }
          p.warnings.forEach(function(w) {
            warn(where, label ? say2("builder.formula.error", { what: label, error: w }) : w);
          });
          var mine = [];
          p.refs.forEach(function(r) {
            var t = byId[r];
            if (!r) err(where, say2("builder.formula.emptyRef", { what: label || say2("builder.formula") }));
            else if (!t) err(where, say2("builder.formula.noRef", { what: label || say2("builder.formula"), id: r }));
            else if (!hasValue(t)) err(where, say2("builder.formula.noValue", { what: label || say2("builder.formula"), id: r, kind: COMPONENTS[t.className].label.toLowerCase() }));
            else if (scopes[r] && scopes[r].repeater) err(where, say2("builder.formula.inList", { what: label || say2("builder.formula"), id: r }));
            else mine.push(r);
          });
          p.vars.forEach(function(v) {
            if (!v) err(where, say2("builder.formula.emptyVar", { what: label || say2("builder.formula") }));
            else if (vars[v] === void 0) err(where, say2("builder.formula.noVar", { what: label || say2("builder.formula"), id: v }));
            else mine.push("$" + v);
          });
          p.contexts.forEach(function(c) {
            var cp2 = c ? contextProblem(f, c) : say2("builder.context.noName");
            if (cp2) err(where, say2("builder.formula.error", { what: label || say2("builder.formula"), error: cp2 }));
          });
          deps2[f.id] = mine;
        });
        var state = {};
        var stack = [];
        (function dfs() {
          var reported = false;
          function visit(id) {
            if (state[id] === 2 || reported) return;
            if (state[id] === 1) {
              reported = true;
              err(id.charAt(0) === "$" ? null : id, "Boucle de calcul : " + stack.slice(stack.indexOf(id)).concat(id).join(" \u2192 "));
              return;
            }
            state[id] = 1;
            stack.push(id);
            (deps2[id] || []).forEach(visit);
            stack.pop();
            state[id] = 2;
          }
          Object.keys(deps2).forEach(visit);
        })();
        return { ok: errors.length === 0, errors, warnings, stats: { nodes: count, formulas: formulas.length } };
      }
      var slugOf = function(text) {
        return String(text == null ? "" : text).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 24);
      };
      function kit(doc) {
        var used = {};
        allNodes(doc).forEach(function(n) {
          used[n.id] = true;
        });
        var k = {
          id: function(base) {
            var stem = slugOf(base) || "champ", id = stem, i = 2;
            while (used[id]) id = stem + "_" + i++;
            used[id] = true;
            return id;
          },
          row: function(cols) {
            return { className: "Row", id: k.id("ligne"), children: cols };
          },
          col: function(size, kids) {
            return { className: "Column", id: k.id("col"), size, children: kids };
          },
          label: function(text, extra) {
            return Object.assign({ className: "Label", id: k.id("txt_" + text), text }, extra || {});
          }
        };
        return k;
      }
      var listOf = function(text, max, maxLen) {
        return String(text == null ? "" : text).split(",").map(function(t) {
          return cleanText2(t, maxLen).trim();
        }).filter(Boolean).slice(0, max);
      };
      function listBlock(k, title, prefix, fields, displayText, roll) {
        var ids = {};
        fields.forEach(function(f) {
          ids[f.key] = k.id(prefix + "_" + f.key);
        });
        var fixText = function(t) {
          return t.replace(/#(\w+)/g, function(m, key) {
            return "#" + ids[key];
          });
        };
        var form = fields.map(function(f) {
          var cell = f.kind === "number" ? { className: "NumberInput", id: ids[f.key], name: f.label, defaultValue: f.def == null ? "0" : String(f.def) } : { className: "TextInput", id: ids[f.key], name: f.label, placeholder: f.label, defaultValue: f.def == null ? "" : String(f.def) };
          if (f.min != null) cell.min = f.min;
          return k.col(f.size || 12, [k.label(f.label, { variant: "muted" }), cell]);
        });
        var display = { className: "Label", id: k.id(prefix + "_ligne"), text: fixText(displayText), computed: true };
        if (roll) {
          display.clickable = true;
          display.roll = fixText(roll);
        }
        var repeater = { className: "Repeater", id: k.id(prefix), layout: "vertical", noAdd: false, children: [k.row(form)], readChildren: [k.row([k.col(12, [display])])] };
        return k.row([k.col(12, [k.label(title, { variant: "title" }), repeater])]);
      }
      var BLOCKS = [
        {
          id: "attributes",
          get label() {
            return say2("builder.caracteristiques");
          },
          get description() {
            return say2("builder.colonneParCaracteristiqueNom");
          },
          params: [
            { k: "names", t: "text", get def() {
              return say2("builder.forceDexteriteConstitutionIntelligence");
            }, get label() {
              return say2("builder.nomsSeparesParVirgules");
            } },
            { k: "rule", t: "select", def: "dnd", options: ["dnd", "flat", "percent"], labels: { dnd: "Score \u2192 modificateur (score \u2212 10) \xF7 2, jet 1d20 + modificateur", get flat() {
              return say2("builder.valeurEstBonusDirectement");
            }, get percent() {
              return say2("builder.valeurEstPourcentage0");
            } }, get label() {
              return say2("builder.regle");
            } }
          ],
          build: function(doc, p) {
            var k = kit(doc), names = listOf(p.names, 12, 30);
            if (!names.length) names = ["Force"];
            var pct = p.rule === "percent";
            var dnd = p.rule !== "flat" && !pct;
            var perRow = Math.min(names.length, 6), size = Math.max(2, Math.floor(12 / perRow));
            var rows = [];
            for (var i = 0; i < names.length; i += perRow) {
              rows.push(k.row(names.slice(i, i + perRow).map(function(name) {
                var id = k.id(name), modId = dnd ? k.id("mod_" + name) : null;
                var kids = [
                  k.label(name, { align: "Center", bold: true, variant: "subtitle", clickable: true, roll: pct ? "1d100" : "1d20+@" + (dnd ? modId : id) }),
                  { className: "NumberInput", id, name, defaultValue: pct ? "50" : dnd ? "10" : "0", variant: "stat", min: pct ? 0 : dnd ? 1 : -20, max: pct ? 100 : 30 }
                ];
                if (dnd) kids.push({ className: "NumberInput", id: modId, name: "Modificateur " + name, computed: true, defaultValue: "floor((@" + id + "-10)/2)", align: "Center" });
                return k.col(size, kids);
              })));
            }
            return rows;
          }
        },
        {
          id: "identity",
          get label() {
            return say2("builder.identite");
          },
          get description() {
            return say2("builder.nomClasseLigneeProfession");
          },
          params: [{ k: "second", t: "text", def: "Classe", get label() {
            return say2("builder.libelleDeuxiemeChamp");
          } }, { k: "level", t: "text", def: "Niveau", get label() {
            return say2("builder.libelleNiveau");
          } }],
          build: function(doc, p) {
            var k = kit(doc), second = cleanText2(p.second, 30).trim() || "Classe", level = cleanText2(p.level, 30).trim() || "Niveau";
            return [k.row([
              k.col(6, [k.label("Nom", { variant: "muted" }), { className: "TextInput", id: k.id("nom_personnage"), name: "Nom", defaultValue: "" }]),
              k.col(4, [k.label(second, { variant: "muted" }), { className: "TextInput", id: k.id(second), name: second, defaultValue: "" }]),
              k.col(2, [k.label(level, { variant: "muted" }), { className: "NumberInput", id: k.id(level), name: level, defaultValue: "1", min: 0 }])
            ])];
          }
        },
        {
          id: "resource",
          label: "Ressource (actuel / max)",
          get description() {
            return say2("builder.pointsVieManaMunitions");
          },
          params: [{ k: "name", t: "text", def: "Points de vie", label: "Nom" }, { k: "max", t: "int", def: 10, min: 1, max: 999, get label() {
            return say2("builder.maximumDepart");
          } }],
          build: function(doc, p) {
            var k = kit(doc), name = cleanText2(p.name, 40).trim() || "Ressource", max = Math.max(1, Math.min(999, parseInt(p.max, 10) || 10));
            return [k.row([
              k.col(5, [k.label(name, { variant: "subtitle", align: "Center" }), { className: "NumberInput", id: k.id(name), name, defaultValue: String(max), min: 0, variant: "stat" }]),
              k.col(2, [k.label("/", { align: "Center", textSize: "large" })]),
              k.col(5, [k.label("Maximum", { variant: "muted", align: "Center" }), { className: "NumberInput", id: k.id(name + "_max"), name: name + " (max)", defaultValue: String(max), min: 1, variant: "stat" }])
            ])];
          }
        },
        {
          id: "track",
          get label() {
            return say2("builder.pastillesCocher");
          },
          get description() {
            return say2("builder.stressBlessuresEchecsMort");
          },
          params: [{ k: "name", t: "text", def: "Stress", label: "Nom" }, { k: "count", t: "int", def: 5, min: 1, max: 20, get label() {
            return say2("builder.nombrePastilles");
          } }],
          build: function(doc, p) {
            var k = kit(doc), name = cleanText2(p.name, 40).trim() || "Pastilles", count = Math.max(1, Math.min(20, parseInt(p.count, 10) || 5));
            var id = k.id(name);
            if (id.length > 12) id = id.slice(0, 12).replace(/_+$/, "");
            return [k.row([k.col(12, [k.label(name, { variant: "subtitle" }), { className: "Track", id, name, count, showTotal: true }])])];
          }
        },
        {
          id: "skills",
          get label() {
            return say2("builder.listeCompetences");
          },
          get description() {
            return say2("builder.listeQueJoueurRemplit");
          },
          params: [{ k: "title", t: "text", get def() {
            return say2("builder.competences");
          }, label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || say2("builder.skills");
            return [listBlock(k, title, slugOf(title) || "liste", [
              { key: "nom", kind: "text", label: "Nom", size: 8 },
              { key: "bonus", kind: "number", label: "Bonus", def: 0, size: 4 }
            ], '#nom + " : " + #bonus', "1d20+#bonus")];
          }
        },
        {
          id: "attacks",
          label: "Liste d'attaques",
          get description() {
            return say2("builder.nomBonusAttaqueDegats");
          },
          params: [{ k: "title", t: "text", def: "Attaques", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Attaques";
            return [listBlock(k, title, slugOf(title) || "attaques", [
              { key: "nom", kind: "text", label: "Arme", size: 5 },
              { key: "bonus", kind: "number", label: "Bonus", def: 0, size: 3 },
              { key: "degats", kind: "text", get label() {
                return say2("builder.degats");
              }, def: "1d6", size: 4 }
            ], '#nom + " (" + #degats + ")"', "1d20+#bonus")];
          }
        },
        {
          id: "inventory",
          label: "Inventaire",
          get description() {
            return say2("builder.listeObjetsAvecQuantite");
          },
          params: [{ k: "title", t: "text", get def() {
            return say2("builder.equipement");
          }, label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || say2("builder.equipment");
            return [listBlock(k, title, slugOf(title) || "inventaire", [
              { key: "nom", kind: "text", label: "Objet", size: 6 },
              { key: "qte", kind: "number", get label() {
                return say2("builder.quantite");
              }, def: 1, min: 0, size: 3 },
              { key: "poids", kind: "number", label: "Poids", def: 0, min: 0, size: 3 }
            ], '#nom + " \xD7" + #qte', null)];
          }
        },
        {
          id: "spells",
          label: "Liste de sorts",
          get description() {
            return say2("builder.nomNiveauEffetChaque");
          },
          params: [{ k: "title", t: "text", def: "Sorts", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Sorts";
            return [listBlock(k, title, slugOf(title) || "sorts", [
              { key: "nom", kind: "text", label: "Sort", size: 5 },
              { key: "niveau", kind: "number", label: "Niveau", def: 0, min: 0, size: 2 },
              { key: "effet", kind: "text", label: "Effet", size: 5 }
            ], '#nom + " (niv. " + #niveau + ")"', null)];
          }
        },
        {
          id: "features",
          label: "Liste d'aptitudes",
          get description() {
            return say2("builder.nomOrigineDescriptionChaque");
          },
          params: [{ k: "title", t: "text", def: "Aptitudes", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Aptitudes";
            return [listBlock(k, title, slugOf(title) || "aptitudes", [
              { key: "nom", kind: "text", label: "Aptitude", size: 4 },
              { key: "source", kind: "text", label: "Origine", size: 3 },
              { key: "effet", kind: "text", label: "Description", size: 5 }
            ], '#nom + " \xB7 " + #source', null)];
          }
        },
        {
          id: "customlist",
          label: "Liste libre",
          get description() {
            return say2("builder.listeDontTuNommes");
          },
          params: [
            { k: "title", t: "text", def: "Contacts", label: "Titre" },
            { k: "columns", t: "text", get def() {
              return say2("builder.nomRoleAttitude");
            }, get label() {
              return say2("builder.colonnesSepareesParVirgules");
            } }
          ],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Liste";
            var names = listOf(p.columns, 5, 30);
            if (!names.length) names = ["Nom"];
            var size = Math.max(2, Math.floor(12 / names.length));
            var fields = names.map(function(name, i) {
              return { key: "c" + (i + 1), kind: "text", label: name, size };
            });
            var display = names.length > 1 ? '#c1 + " \xB7 " + #c2' : "#c1";
            return [listBlock(k, title, slugOf(title) || "liste", fields, display, null)];
          }
        },
        {
          id: "notes",
          label: "Notes libres",
          get description() {
            return say2("builder.titreGrandeZoneTexte");
          },
          params: [{ k: "title", t: "text", def: "Notes", label: "Titre" }],
          build: function(doc, p) {
            var k = kit(doc), title = cleanText2(p.title, 40).trim() || "Notes";
            return [k.row([k.col(12, [k.label(title, { variant: "title" }), { className: "Textarea", id: k.id(title), name: title, defaultValue: "" }])])];
          }
        }
      ];
      function buildBlock(doc, id, params) {
        var b = BLOCKS.filter(function(x) {
          return x.id === id;
        })[0];
        if (!b) throw new Error(say2("builder.unknownBlock", { id }));
        var p = {};
        b.params.forEach(function(d) {
          var v = params && params[d.k] !== void 0 ? params[d.k] : d.def;
          if (d.t === "select" && d.options.indexOf(v) < 0) v = d.def;
          p[d.k] = v;
        });
        return b.build(doc, p);
      }
      function stripBuilderFields(n) {
        var out = {};
        Object.keys(n).forEach(function(k) {
          if (k !== "options" && k !== "children" && k !== "variant" && k !== "textSize" && k !== "bold" && k !== "upper" && k !== "tabs" && k !== "readChildren" && k !== "noAdd" && k !== "gmOnly" && k !== "spendField" && k !== "spendN" && k !== "againstField" && k !== "againstMode" && k !== "effectTarget" && k !== "effectValue") out[k] = n[k];
        });
        return out;
      }
      function hasEffects(doc) {
        return allNodes(doc).some(function(n) {
          return n.className === "Checkbox" && typeof n.effectTarget === "string" && n.effectTarget !== "";
        });
      }
      function applyEffects(doc) {
        if (!hasEffects(doc)) return doc;
        var copy = JSON.parse(JSON.stringify(doc));
        var byId = {};
        allNodes(copy).forEach(function(n) {
          if (typeof n.id === "string") byId[n.id] = n;
        });
        allNodes(copy).forEach(function(box) {
          if (box.className !== "Checkbox" || typeof box.effectTarget !== "string" || box.effectTarget === "") return;
          var target = byId[box.effectTarget];
          if (!target || target.className !== "NumberInput" || !target.computed) return;
          var value = String(box.effectValue == null || box.effectValue === "" ? "1" : box.effectValue).trim();
          target.defaultValue = "(" + String(target.defaultValue == null ? "" : target.defaultValue) + ")+if(@" + box.id + ">0,(" + value + "),0)";
        });
        return copy;
      }
      function computedNumberIds(doc) {
        var out = {}, all = spendableIds(doc, true);
        Object.keys(all).forEach(function(id) {
          if (all[id].computed) out[id] = all[id];
        });
        return out;
      }
      function derivedSheet(doc, wanted) {
        doc = applyEffects(doc);
        var all = {};
        function visit(list2) {
          (Array.isArray(list2) ? list2 : []).forEach(function(n2) {
            if (!isObj5(n2)) return;
            if (typeof n2.id === "string") all[n2.id] = n2;
            if (n2.className === "Repeater") return;
            slots(n2).forEach(function(sl) {
              visit(sl.list);
            });
          });
        }
        (doc && doc.views || []).forEach(function(v) {
          if (isObj5(v)) visit(v.children);
        });
        var variables = {};
        (doc && doc.variables || []).forEach(function(v) {
          if (isObj5(v) && typeof v.id === "string") variables[v.id] = String(v.value);
        });
        var nodes = {}, vars = {}, todo = (wanted || []).slice(), guard = 0;
        function reads(formula2) {
          var p = parseFormula(formula2);
          if (!p.ok) return;
          p.refs.forEach(function(r) {
            todo.push(r);
          });
          p.vars.forEach(function(name) {
            if (variables[name] === void 0 || vars[name] !== void 0) return;
            vars[name] = variables[name].slice(0, LIMITS2.formula);
            reads(vars[name]);
          });
        }
        while (todo.length && guard++ < 2e3 && Object.keys(nodes).length < 200) {
          var id = todo.pop();
          var n = all[id];
          if (nodes[id] || !n) continue;
          if ((n.className === "NumberInput" || n.className === "Label") && n.computed) {
            var formula = String(n.className === "Label" ? n.text : n.defaultValue == null ? "" : n.defaultValue).slice(0, LIMITS2.formula);
            nodes[id] = { k: "calc", formula };
            reads(formula);
          } else if (n.className === "NumberInput") {
            var def = parseFloat(n.defaultValue);
            var node = { k: "number", def: Number.isNaN(def) ? 0 : def };
            if (typeof n.min === "number") node.min = n.min;
            if (typeof n.max === "number") node.max = n.max;
            nodes[id] = node;
          } else if (n.className === "Checkbox") nodes[id] = { k: "check" };
          else if (n.className === "Track") nodes[id] = { k: "track", count: n.count || 0 };
          else if (n.className === "Choice") nodes[id] = { k: "choice", first: n.optional ? "" : ((n.options || [])[0] || {}).id || "" };
          else if (n.className === "TextInput" || n.className === "Textarea") nodes[id] = { k: "text", def: String(n.defaultValue == null ? "" : n.defaultValue).slice(0, 400) };
        }
        return { nodes, vars };
      }
      function compileRules(doc) {
        var gmOnly = [], actions = {}, writable = {}, computedDefences = [];
        var spendable = spendableIds(doc);
        var allNumbers = spendableIds(doc, true);
        function visit(list2, prefix) {
          (Array.isArray(list2) ? list2 : []).forEach(function(n) {
            if (!isObj5(n)) return;
            if (n.gmOnly === true && COMPONENTS[n.className] && COMPONENTS[n.className].value && typeof n.id === "string") gmOnly.push(prefix + n.id);
            if (n.className === "Label" && !prefix && n.clickable && n.roll && typeof n.spendField === "string" && spendable[n.spendField]) {
              var target = spendable[n.spendField];
              actions[n.id] = { spend: [{ field: target.id, n: typeof n.spendN === "number" && n.spendN >= 1 ? n.spendN : 1, name: cleanText2(target.name, 40) }] };
              writable[target.id] = { t: "number", min: typeof target.min === "number" ? Math.min(0, target.min) : 0, max: typeof target.max === "number" ? target.max : 1e6 };
            }
            if (n.className === "Label" && !prefix && n.clickable && n.roll && typeof n.againstField === "string" && allNumbers[n.againstField]) {
              var defence = allNumbers[n.againstField];
              actions[n.id] = actions[n.id] || { spend: [] };
              actions[n.id].against = { field: defence.id, name: cleanText2(defence.name, 40), mode: n.againstMode === "atMost" ? "atMost" : "atLeast" };
              if (defence.computed) computedDefences.push(defence.id);
            }
            slots(n).forEach(function(sl) {
              if (n.className === "Repeater") {
                if (sl.area === "edit") visit(sl.list, prefix + n.id + ".*.");
              } else visit(sl.list, prefix);
            });
          });
        }
        (doc && doc.views || []).forEach(function(v) {
          if (isObj5(v)) visit(v.children, "");
        });
        var out = { v: 1 };
        if (gmOnly.length) out.gmOnly = gmOnly.slice(0, 200);
        if (Object.keys(writable).length) out.writable = writable;
        if (Object.keys(actions).length) out.actions = actions;
        if (computedDefences.length) out.sheet = derivedSheet(doc, computedDefences);
        return Object.keys(out).length > 1 ? out : null;
      }
      function compile(doc, opts) {
        return withLimits(opts, function() {
          return compileInner(doc, opts);
        });
      }
      function compileInner(doc, opts) {
        doc = upgradeDoc(doc);
        var v = validate(doc, opts);
        if (!v.ok) throw new Error(say2("builder.invalidSystem", { why: v.errors[0].message }));
        doc = applyEffects(doc);
        var tables = JSON.parse(JSON.stringify(doc.tables || {}));
        var avatarId = null;
        var subViews = [];
        function subView(id, name, children) {
          return {
            className: "View",
            type: "SubComponent",
            id,
            name: escapeMarkup(cleanText2(name, LIMITS2.name)),
            craft: null,
            tokenizable: null,
            droppable: null,
            avatarId: null,
            width: 650,
            height: 400,
            classes: "",
            children
          };
        }
        var byId = {};
        var formulas = [];
        var inList = 0;
        function node(n) {
          if (n.className === "Gauge") {
            var cells = n.segments > 0 ? n.segments : 20;
            var gcls = ["tt-gauge", "tt-gv-" + n.valueField, typeof n.maxField === "string" && n.maxField ? "tt-gm-" + n.maxField : "tt-gmax-" + n.max, "tt-gs-" + cells];
            if (n.showValue !== false) gcls.push("tt-gshow");
            var glabel = { className: "Label", id: n.id + "__label", text: escapeMarkup(cleanText2(n.name || "", LIMITS2.name)), align: "Left", clickable: false, computed: false, classes: "tt-gauge-label" };
            var gauge = { className: "Container", id: n.id, layout: "horizontal", classes: gcls.join(" "), children: [glabel] };
            byId[n.id] = gauge;
            byId[glabel.id] = glabel;
            return gauge;
          }
          var out = stripBuilderFields(n);
          byId[n.id] = out;
          if (!inList && n.className === "Label" && n.computed) formulas.push({ id: n.id, text: n.text });
          if (!inList && n.className === "NumberInput" && n.computed) formulas.push({ id: n.id, text: String(n.defaultValue == null ? "" : n.defaultValue) });
          ["text", "name", "placeholder", "label", "rollTitle", "defaultValue", "tooltipLabel", "quickBarLabel"].forEach(function(k) {
            if (typeof out[k] === "string") out[k] = escapeMarkup(cleanText2(out[k], LIMITS2.text));
          });
          if (typeof out.iconName === "string") out.iconName = out.iconName.replace(/[^\w\- ]/g, "");
          if (n.className === "Label" && n.computed) out.text = cleanText2(n.text, LIMITS2.formula);
          if (n.className === "NumberInput" && n.computed) out.defaultValue = cleanText2(n.defaultValue, LIMITS2.formula);
          var cls = Theme.classesFor(n);
          if (cls) out.classes = cls;
          if (out.tooltipLabel) out.tooltip = true;
          else {
            delete out.tooltipLabel;
          }
          if (out.align === "") delete out.align;
          if (n.className === "Label" && !out.quickBarLabel) delete out.quickBarLabel;
          if (n.className === "Track") {
            var pips = [], sum = [];
            for (var i = 1; i <= n.count; i++) {
              pips.push({ className: "Checkbox", id: n.id + "__" + i, name: n.id + "__" + i, label: "" });
              sum.push("@" + n.id + "__" + i);
            }
            pips.forEach(function(pip) {
              byId[pip.id] = pip;
            });
            formulas.push({ id: n.id, text: sum.join("+") });
            var total = { className: "NumberInput", id: n.id, name: out.name, defaultValue: sum.join("+"), computed: true, computedValue: sum.join("+"), classes: n.showTotal ? "tt-track-total" : "d-none" };
            pips.push(total);
            byId[n.id] = total;
            return { className: "Container", id: n.id + "__box", layout: "horizontal", classes: "tt-track", children: pips };
          }
          if (n.className === "Label") {
            out.align = n.align || "Left";
            out.clickable = !!n.clickable || !!n.roll;
            out.computed = !!n.computed;
            if (n.roll) out.roll = n.roll;
          }
          if (n.className === "NumberInput") {
            out.computed = !!n.computed;
            if (n.computed) out.computedValue = out.defaultValue;
            if (n.min == null) delete out.min;
            if (n.max == null) delete out.max;
          }
          if (n.className === "Choice" && !n.tableId) {
            var tid = "choice_" + n.id;
            tables[tid] = { id: tid, columns: ["id", "label"], data: (n.options || []).map(function(o) {
              return { id: o.id, label: escapeMarkup(cleanText2(o.label, LIMITS2.optionLabel)) };
            }) };
            out.tableId = tid;
            out.label = "label";
          }
          if (n.className === "Avatar") avatarId = avatarId || n.id;
          if (n.className === "Tab") {
            var tabTable = "tabs_" + n.id;
            var tabs = n.tabs || [];
            tables[tabTable] = { id: tabTable, columns: ["view", "title"], data: tabs.map(function(t) {
              return { view: n.id + "__" + t.id, title: escapeMarkup(cleanText2(t.label, LIMITS2.tabTitle)) };
            }) };
            out.tableId = tabTable;
            out.titleAttribute = "title";
            out.viewAttribute = "view";
            out.vertical = !!n.vertical;
            out.verticalWidth = n.verticalWidth || 3;
            out.children = [];
            tabs.forEach(function(t) {
              var sv = subView(n.id + "__" + t.id, t.label, []);
              subViews.push(sv);
              sv.children = (t.children || []).map(node);
            });
            return out;
          }
          if (n.className === "Repeater") {
            delete out.layout;
            var rcls = [out.classes, n.layout === "horizontal" ? "layout-horizontal" : "", n.noAdd ? "no-add" : ""].filter(Boolean).join(" ");
            if (rcls) out.classes = rcls;
            out.viewId = n.id + "__edit";
            out.readViewId = n.id + "__read";
            out.children = [];
            var editView = subView(out.viewId, "edit", []), readView = subView(out.readViewId, "read", []);
            subViews.push(editView, readView);
            inList++;
            editView.children = (n.children || []).map(node);
            readView.children = (n.readChildren || []).map(node);
            inList--;
            return out;
          }
          if (n.children) out.children = n.children.map(node);
          return out;
        }
        var main2 = doc.views[0];
        var tree = [{
          className: "View",
          type: "Main",
          id: "main",
          name: cleanText2(main2.name, LIMITS2.name) || "Personnage",
          craft: true,
          avatarId: null,
          // the game only lists views flagged craft in "Content Crafting": without it no sheet can be created
          tokenizable: !!main2.tokenizable,
          droppable: null,
          width: main2.width,
          height: main2.height,
          classes: "",
          children: (main2.children || []).map(node)
        }];
        tree[0].avatarId = avatarId;
        subViews.forEach(function(v2) {
          tree.push(v2);
        });
        var varText = {};
        (doc.variables || []).forEach(function(x) {
          varText[x.id] = String(x.value);
        });
        var reads = function(text, seen) {
          var parsed = parseFormula(text);
          if (!parsed.ok) return [];
          var found = parsed.refs.slice();
          parsed.vars.forEach(function(v2) {
            if (varText[v2] !== void 0 && !seen[v2]) {
              seen[v2] = true;
              found = found.concat(reads(varText[v2], seen));
            }
          });
          return found;
        };
        var dependents = {};
        formulas.forEach(function(f) {
          reads(f.text, {}).forEach(function(dep) {
            if (!dep || dep === f.id || !byId[dep]) return;
            var list2 = dependents[dep] || (dependents[dep] = []);
            if (list2.indexOf(f.id) < 0) list2.push(f.id);
          });
        });
        Object.keys(dependents).forEach(function(id) {
          byId[id].references = dependents[id];
        });
        if ((doc.variables || []).length) {
          tables.variables = { id: "variables", columns: ["id", "value"], data: doc.variables.map(function(x) {
            return { id: x.id, value: String(x.value) };
          }) };
        }
        var result = {
          tree,
          tables,
          // Nothing typed by a person goes into the script: the engine's script sandbox executes it.
          script: "// built with the Ourdir System Builder"
        };
        var skins = Array.isArray(doc.skins) ? doc.skins : [];
        if (skins.length) {
          var faces = {};
          result.skins = skins.map(function(s) {
            var css = Theme.themeCss(s.theme, "game", doc.assets, s.id).split("\n").filter(function(line) {
              if (line.indexOf("@font-face") !== 0) return true;
              if (faces[line]) return false;
              return faces[line] = true;
            }).join("\n");
            return { id: s.id, name: cleanText2(s.name, 40).trim(), css };
          });
        }
        return result;
      }
      function fromSystem(system, meta) {
        meta = meta || {};
        var doc = emptyDoc(meta.name || say2("builder.imported"));
        doc.id = meta.id || "systeme-importe";
        doc.version = meta.version || "1.0.0";
        doc.author = cleanText2(meta.author, LIMITS2.name);
        doc.description = cleanText2(meta.description, 1e3);
        doc.license = cleanText2(meta.license, LIMITS2.name);
        var views = (system.tree || []).filter(function(t) {
          return t.id === "main";
        });
        if (!views.length) throw new Error(say2("builder.cetteFicheNPas"));
        var src = views[0];
        var unknown = {};
        var tables = isObj5(system.tables) ? JSON.parse(JSON.stringify(system.tables)) : {};
        if (Array.isArray(system.tables)) {
          tables = {};
          system.tables.forEach(function(t) {
            if (t && t.id) tables[t.id] = t;
          });
        }
        var viewMap = {};
        (system.tree || []).forEach(function(t) {
          if (t && t.type === "SubComponent" && typeof t.id === "string") viewMap[t.id] = t;
        });
        var variables = [];
        if (tables.variables) {
          variables = (tables.variables.data || []).map(function(l) {
            return { id: l.id, value: String(l.value) };
          });
          delete tables.variables;
        }
        function convList(list2) {
          return (list2 || []).map(conv).filter(Boolean);
        }
        function conv(n) {
          if (!COMPONENTS[n.className]) {
            unknown[n.className] = true;
            return null;
          }
          if (n.className === "Tab") {
            var tt = tables[n.tableId];
            if (!tt || !n.viewAttribute || !n.titleAttribute) {
              unknown[say2("builder.tabNoTable")] = true;
              return null;
            }
            var tab = { className: "Tab", id: n.id, vertical: !!n.vertical, verticalWidth: n.verticalWidth || 3, tabs: [] };
            (tt.data || []).forEach(function(line) {
              var viewId = String(line[n.viewAttribute]);
              var local = viewId.indexOf(n.id + "__") === 0 ? viewId.slice(n.id.length + 2) : viewId.replace(/\W/g, "_").slice(0, 40);
              tab.tabs.push({ id: local, label: unescapeMarkup(String(line[n.titleAttribute] == null ? local : line[n.titleAttribute])), children: viewMap[viewId] ? convList(viewMap[viewId].children) : [] });
            });
            delete tables[n.tableId];
            return tab;
          }
          if (n.className === "Repeater") {
            return {
              className: "Repeater",
              id: n.id,
              layout: /(^|\s)layout-horizontal(\s|$)/.test(n.classes || "") ? "horizontal" : "vertical",
              noAdd: /(^|\s)no-add(\s|$)/.test(n.classes || ""),
              children: viewMap[n.viewId] ? convList(viewMap[n.viewId].children) : [],
              readChildren: viewMap[n.readViewId] ? convList(viewMap[n.readViewId].children) : []
            };
          }
          var out = {};
          Object.keys(n).forEach(function(k) {
            if (k !== "children" && n[k] !== null && k !== "collapsed" && k !== "references" && k !== "type" && k !== "classes" && k !== "parentId") out[k] = n[k];
          });
          out.className = n.className;
          if (n.className === "NumberInput" && n.computed && n.computedValue) out.defaultValue = n.computedValue;
          if (n.className === "Choice" && n.tableId && tables[n.tableId] && n.label) {
            var t = tables[n.tableId];
            var col = n.label;
            out.options = (t.data || []).map(function(l) {
              return { id: l.id, label: unescapeMarkup(String(l[col] == null ? l.id : l[col])) };
            });
            delete out.tableId;
            delete out.label;
            delete tables[n.tableId];
          }
          ["text", "name", "placeholder", "label", "rollTitle", "defaultValue", "computedValue", "tooltipLabel", "quickBarLabel"].forEach(function(k) {
            if (typeof out[k] === "string") out[k] = unescapeMarkup(out[k]);
          });
          if (n.children) out.children = n.children.map(conv).filter(Boolean);
          return out;
        }
        doc.views[0] = {
          id: "main",
          type: "Main",
          name: src.name || "Personnage",
          width: src.width || 900,
          height: src.height || 700,
          tokenizable: !!src.tokenizable,
          craft: !!src.craft,
          avatarId: src.avatarId || null,
          children: (src.children || []).map(conv).filter(Boolean)
        };
        doc.tables = tables;
        doc.variables = variables;
        var names = Object.keys(unknown);
        if (names.length) throw new Error(say2("builder.unsupported", { list: names.join(", ") }));
        return doc;
      }
      function evaluateSheet(doc, inputs) {
        doc = applyEffects(doc);
        inputs = inputs || {};
        var byId = {};
        allNodes(doc).forEach(function(n) {
          byId[n.id] = n;
        });
        var vars = {};
        (doc.variables || []).forEach(function(x) {
          vars[x.id] = String(x.value);
        });
        var cache = {}, busy = {};
        var errors = {};
        function value(id) {
          if (cache.hasOwnProperty(id)) return cache[id];
          var n = byId[id];
          if (!n) return 0;
          if (busy[id]) {
            errors[id] = "boucle";
            return 0;
          }
          var result;
          var isCalc = n.className === "Label" && n.computed || n.className === "NumberInput" && n.computed;
          if (isCalc) {
            busy[id] = true;
            var text = n.className === "Label" ? n.text : String(n.defaultValue == null ? "" : n.defaultValue);
            var p = parseFormula(text);
            if (p.ok) result = evalFinal(evalAst(p.ast, env));
            else {
              errors[id] = p.error;
              result = 0;
            }
            busy[id] = false;
          } else if (n.className === "NumberInput") {
            var raw = inputs[id] !== void 0 ? inputs[id] : n.defaultValue;
            var num = parseFloat(raw);
            result = Number.isNaN(num) ? 0 : num;
            if (typeof n.min === "number" && result < n.min) result = n.min;
            if (typeof n.max === "number" && result > n.max) result = n.max;
          } else if (n.className === "Checkbox") {
            result = inputs[id] ? 1 : 0;
          } else if (n.className === "Track") {
            result = 0;
            for (var pi = 1; pi <= (n.count || 0); pi++) if (inputs[id + "__" + pi]) result++;
          } else if (n.className === "Choice") {
            result = inputs[id] !== void 0 ? inputs[id] : n.optional ? "" : ((n.options || [])[0] || {}).id || "";
          } else {
            result = inputs[id] !== void 0 ? inputs[id] : n.defaultValue == null ? "" : n.defaultValue;
          }
          cache[id] = result;
          return result;
        }
        var env = { ref: value, variable: function(id) {
          return vars[id];
        } };
        function sample(rep) {
          var ctx = {};
          walk3(rep.children || [], function(n) {
            if (COMPONENTS[n.className].value && !n.computed) ctx[n.id] = value(n.id);
          });
          return ctx;
        }
        function envFor(ctx) {
          return { ref: value, variable: env.variable, context: function(id) {
            return ctx ? ctx[id] : 0;
          } };
        }
        var values = {};
        allNodes(doc).forEach(function(n) {
          if (COMPONENTS[n.className].value || n.className === "Label" && n.computed) values[n.id] = value(n.id);
        });
        return {
          values,
          errors,
          /** The roll as the game would send it: @ids replaced by their values. */
          roll: function(expression, ctx) {
            var e = ctx ? envFor(ctx) : env;
            return String(expression).replace(/[@$#]\w+/g, function(tok) {
              var p = parseFormula(tok);
              return p.ok ? String(evalFinal(evalAst(p.ast, e))) : tok;
            });
          },
          sample,
          /** Text of a label; inside a repeater's display pass the entry (`sample(repeater)`) so #fields resolve. */
          text: function(n, ctx) {
            if (n.className === "Label" && n.computed) {
              if (!ctx) return String(value(n.id));
              var p = parseFormula(n.text);
              return p.ok ? String(evalFinal(evalAst(p.ast, envFor(ctx)))) : "";
            }
            return n.text;
          }
        };
      }
      return {
        useTexts: useTexts2,
        LIMITS: LIMITS2,
        COMPONENTS,
        ID_RE: ID_RE3,
        emptyDoc,
        newNode,
        uniqueId,
        allNodes,
        walk: walk3,
        slots,
        hasValue,
        BLOCKS,
        buildBlock,
        validate,
        compile,
        upgradeDoc,
        compileRules,
        derivedSheet,
        applyEffects,
        computedNumberIds,
        spendableIds,
        fromSystem,
        parseFormula,
        evalAst,
        evalFinal,
        evaluateSheet,
        cleanText: cleanText2,
        escapeMarkup,
        slugOf,
        Theme
      };
    });
  }
});

// product/client/i18n/fr.json
var require_fr2 = __commonJS({
  "product/client/i18n/fr.json"(exports2, module2) {
    module2.exports = {
      "access.banner": "Lecture seule : tu peux voir cette fiche, pas la modifier.",
      "accessButton.allRead": "tous en lecture",
      "accessButton.button": "Acc\xE8s",
      "accessButton.creator": "Cr\xE9ateur : la modifie toujours",
      "accessButton.edit": "Peut la modifier",
      "accessButton.editN": "{n} modifient",
      "accessButton.everyone": "Tous les joueurs",
      "accessButton.failed": "Le r\xE9glage n\u2019a pas pu \xEAtre enregistr\xE9.",
      "accessButton.hidden": "cach\xE9e",
      "accessButton.loading": "Chargement\u2026",
      "accessButton.noPlayers": "Aucun joueur invit\xE9 pour le moment.",
      "accessButton.none": "Ne la voit pas",
      "accessButton.read": "Lecture seule",
      "accessButton.readN": "{n} en lecture",
      "accessButton.title": "Qui voit cette fiche",
      "actions.busy": "Un instant : la d\xE9pense pr\xE9c\xE9dente s\u2019enregistre.",
      "actions.noRoll": "Le jet n\u2019a pas eu lieu : rien n\u2019est d\xE9pens\xE9.",
      "actions.notSaved": "La d\xE9pense n\u2019a pas pu \xEAtre enregistr\xE9e.",
      "actions.tooFast": "Trop de clics : patiente un instant.",
      "ambiencePanel.dark": "Sombre",
      "ambiencePanel.darkHint": "Presque noir : on ne voit qu\u2019\xE0 c\xF4t\xE9 de soi.",
      "ambiencePanel.day": "Jour",
      "ambiencePanel.dayHint": "Tout est visible.",
      "ambiencePanel.hint": "Comment se pr\xE9sente la sc\xE8ne. Un clic, et toute la table le voit.",
      "ambiencePanel.night": "Nuit",
      "ambiencePanel.nightHint": "Un cr\xE9puscule bleut\xE9 : chacun voit loin, le reste reste lisible.",
      "ambiencePanel.title": "Ambiance",
      "ambiencePanel.torch": "Torche",
      "ambiencePanel.torchHint": "Une sc\xE8ne sombre : chaque personnage porte une torche et n\u2019y voit que par elle.",
      "bubble.angle": "Ouverture",
      "bubble.bright": "Lumi\xE8re vive",
      "bubble.candle": "Bougie",
      "bubble.cells": "cases",
      "bubble.clear": "Claire",
      "bubble.close": "Fermer",
      "bubble.closed": "Ferm\xE9e",
      "bubble.color": "Couleur",
      "bubble.dim": "Lumi\xE8re att\xE9nu\xE9e",
      "bubble.door": "Porte",
      "bubble.duplicate": "Dupliquer",
      "bubble.exterior": "Ext\xE9rieur",
      "bubble.faulty": "N\xE9on d\xE9faillant",
      "bubble.flame": "Flamme",
      "bubble.glass": "Vitrail",
      "bubble.intensity": "Intensit\xE9",
      "bubble.interior": "Int\xE9rieur",
      "bubble.length": "Longueur",
      "bubble.light": "Lumi\xE8re",
      "bubble.locked": "Verrouill\xE9e",
      "bubble.name": "Nom",
      "bubble.on": "Allum\xE9e",
      "bubble.open": "Ouverte",
      "bubble.pulse": "Pulsation",
      "bubble.remove": "Supprimer",
      "bubble.rotation": "Direction",
      "bubble.secret": "Secr\xE8te (les joueurs ne voient pas l\u2019ic\xF4ne)",
      "bubble.size": "Taille de la source",
      "bubble.sizeAuto": "selon la flamme",
      "bubble.steady": "Fixe",
      "bubble.torch": "Torche",
      "bubble.wall": "Mur",
      "bubble.window": "Fen\xEAtre",
      "chat.placeholder": "\xC9crire \xE0 la table\u2026 /me pour agir",
      "collision.off": "Fant\xF4me : laisser les jetons traverser les murs",
      "collision.on": "Fant\xF4me : les jetons traversent les murs (cliquer pour arr\xEAter)",
      "compendium.add": "Ajouter \xE0 la fiche",
      "compendium.added": "\xAB {what} \xBB ajout\xE9 \xE0 {who}.",
      "compendium.back": "\u2190 Retour \xE0 la liste",
      "compendium.countOf": "{shown} sur {total} {many}",
      "compendium.dock": "Ancrer",
      "compendium.dockHint": "Remettre dans la barre lat\xE9rale",
      "compendium.failed": "Ce contenu n\u2019a pas pu \xEAtre charg\xE9.",
      "compendium.loading": "Chargement\u2026",
      "compendium.noSheet": "Ouvrez une fiche de personnage pour y ajouter cette entr\xE9e (ou glissez-la dessus).",
      "compendium.none": "Aucune entr\xE9e ne correspond.",
      "compendium.refused": "La fiche n\u2019a pas accept\xE9 cette entr\xE9e.",
      "compendium.source": "SRD 5.1 (fran\xE7ais), Donjon Lib\xE9r\xE9, CC-BY 4.0 \u2014 Wizards of the Coast LLC",
      "compendium.title": "Compendium",
      "compendium.window": "Fen\xEAtre",
      "compendium.windowHint": "Ouvrir dans une fen\xEAtre",
      "contextMenu.makeManyMany": "Cr\xE9ation de masse ({n} images)",
      "contextMenu.makeManyOne": "Cr\xE9ation de masse ({n} image)",
      "contextMenu.makeOne": "Cr\xE9er un PNJ avec cette image",
      "contextMenu.open": "Ouvrir la fiche",
      "contextMenu.target": "Cibler",
      "contextMenu.untarget": "Ne plus cibler",
      "craftFolders.create": "Cr\xE9er",
      "dnd.classes.adopt": "Adopter la sous-classe : {name}",
      "dnd.classes.leveled": "{who} : {summary}.",
      "dnd.classes.leveledRoll": "{who} : {summary} (d\xE9 : {roll}).",
      "dnd.classes.nextAverage": "Niveau suivant en {class} (PV moyens)",
      "dnd.classes.nextRoll": "Niveau suivant en {class} (PV au d\xE9)",
      "dnd.levelUp.alreadyThere": "\xAB {name} \xBB est d\xE9j\xE0 sur cette fiche.",
      "dnd.levelUp.max": "Le niveau total est d\xE9j\xE0 de 20.",
      "dnd.levelUp.noLevel": "Cette classe n\u2019a pas de niveau {level}.",
      "dnd.levelUp.noSubclass": "Cette classe n\u2019a pas de sous-classe dans le SRD.",
      "dnd.levelUp.notInClass": "Cette fiche n\u2019a pas la classe {class} : montez-la d\u2019abord d\u2019un niveau.",
      "dnd.levelUp.tooEarly": "{name} se choisit au niveau {first} (cette fiche est au niveau {level} en {class}).",
      "dnd.levelUp.twoClasses": "Cette fiche a d\xE9j\xE0 deux classes, diff\xE9rentes de celle-ci.",
      "dnd.monsters.create": "Cr\xE9er la fiche de PNJ",
      "dnd.monsters.created": "Fiche \xAB {name} \xBB cr\xE9\xE9e.",
      "dnd.monsters.createdNoScene": "Fiche \xAB {name} \xBB cr\xE9\xE9e, mais il n\u2019y a pas de sc\xE8ne ouverte pour y poser le jeton.",
      "dnd.monsters.failed": "La fiche n\u2019a pas pu \xEAtre cr\xE9\xE9e.",
      "dnd.monsters.placed": "\xAB {name} \xBB pos\xE9 sur la carte, avec sa fiche.",
      "floorsModel.moved": "\xAB {name} \xBB passe au {level}",
      "floorsModel.movedSomeone": "Un jeton passe au {level}",
      "floorsModel.noAnswer": "Le serveur ne r\xE9pond pas.",
      "floorsModel.refused": "Refus\xE9.",
      "floorsTools.arrival": "arriv\xE9e",
      "floorsTools.broken": "Son autre bout n\u2019existe plus : il ne m\xE8ne nulle part.",
      "floorsTools.hintOff": "Pour prendre un escalier : amenez le jeton \xE0 c\xF4t\xE9 (une case et demie au plus), puis cliquez l\u2019ic\xF4ne de l\u2019escalier.",
      "floorsTools.hintOn": "Glissez un rectangle sur la carte pour poser un escalier. Cliquez un escalier pour le choisir, glissez-le pour le d\xE9placer, tirez un coin pour changer sa taille. \xC9chap pour finir.",
      "floorsTools.leadsTo": "M\xE8ne \xE0",
      "floorsTools.name": "Nom",
      "floorsTools.namePlaceholder": "Escalier de service, trappe\u2026",
      "floorsTools.none": "Aucun escalier.",
      "floorsTools.nowhere": "Nulle part (arriv\xE9e seulement)",
      "floorsTools.oneWay": "Aller simple",
      "floorsTools.plain": "Organisez d\u2019abord la sc\xE8ne en \xE9tages (fen\xEAtre Sc\xE8ne, \xAB Nouvel \xE9tage \xBB) pour y poser des escaliers.",
      "floorsTools.remove": "Supprimer l\u2019escalier",
      "floorsTools.round": "Aller-retour",
      "floorsTools.secret": "Secret (les joueurs ne voient pas l\u2019ic\xF4ne)",
      "floorsTools.stair": "Escalier",
      "floorsTools.stairs": "Escaliers",
      "floorsTools.title": "Outils",
      "floorsUi.cancel": "Annuler",
      "floorsUi.create": "Cr\xE9er l\u2019\xE9tage",
      "floorsUi.drag": "Glisser pour changer l\u2019ordre",
      "floorsUi.entry": "\xC9tage d\u2019entr\xE9e",
      "floorsUi.floors": "\xC9tages",
      "floorsUi.keys": "Page pr\xE9c. / Page suiv. : \xE9tage du dessus / du dessous",
      "floorsUi.level": "Niveau",
      "floorsUi.levelHint": "RDC, 1er \xE9tage, Sous-sol\u2026",
      "floorsUi.makeEntry": "En faire l\u2019\xE9tage d\u2019entr\xE9e",
      "floorsUi.newFloor": "Nouvel \xE9tage",
      "floorsUi.organise": "Organiser en \xE9tages",
      "floorsUi.organiseText": "La sc\xE8ne devient son premier \xE9tage : le calque de fond devient sa carte, le calque des jetons ses jetons, les dessins passent sur les jetons et le calque des dessins est retir\xE9. L\u2019\xE9clairage de la sc\xE8ne devient celui de cet \xE9tage.",
      "floorsUi.others": "Autres calques",
      "floorsUi.place": "Lieu",
      "floorsUi.placeHint": "Accueil, Laboratoire\u2026",
      "floorsUi.remove": "Supprimer l\u2019\xE9tage",
      "floorsUi.removeAsk": "Supprimer \xAB {n} \xBB ? Ses deux calques et tout ce qu\u2019ils contiennent, son \xE9clairage et ses escaliers disparaissent.",
      "floorsUi.rename": "Renommer",
      "floorsUi.save": "Enregistrer",
      "floorsUi.selector": "\xC9tage regard\xE9",
      "floorsUi.subtitle": "Sous-titre",
      "floorsUi.subtitleHint": "Sous-titre de la sc\xE8ne (facultatif)",
      "floorsUi.yes": "Supprimer",
      "folders.create": "Cr\xE9er",
      "folders.delete": "Supprimer",
      "folders.failed": "Le dossier n\u2019a pas r\xE9pondu.",
      "folders.namePrompt": "Nom du dossier",
      "folders.newFolder": "Nouveau dossier",
      "folders.rename": "Renommer",
      "folders.save": "Renommer",
      "folders.unfile": "Ressortir du dossier",
      "host.access.creator": "Cette fiche est celle de son cr\xE9ateur : il la modifie toujours.",
      "host.access.editForAll": "On ne partage pas la modification avec tous : choisis des joueurs.",
      "host.access.gmOnly": "Seul le MJ r\xE8gle l\u2019acc\xE8s aux fiches.",
      "host.accessOps.ficheIntrouvable": "Fiche introuvable.",
      "host.accessOps.joueurInconnu": "Joueur inconnu.",
      "host.auth.badInvite": "Lien d\u2019invitation invalide ou r\xE9voqu\xE9.",
      "host.auth.gmExists": "Le compte MJ existe d\xE9j\xE0.",
      "host.auth.gmName": "Ce nom est r\xE9serv\xE9 au MJ.",
      "host.auth.gmOnlyOpen": "Seuls les MJ peuvent ouvrir la table en MJ.",
      "host.auth.identifiantMotPasseIncorrect": "Identifiant ou mot de passe incorrect.",
      "host.auth.motPasseTropLong": "Mot de passe trop long.",
      "host.auth.nameTaken": "Ce nom est d\xE9j\xE0 pris.",
      "host.auth.noCharacter": "Aucun personnage li\xE9 \xE0 ce joueur.",
      "host.auth.nomTropCourt": "Nom trop court.",
      "host.auth.notOnTable": "Ce compte n\u2019est pas sur la table.",
      "host.auth.password": "Le mot de passe doit faire au moins 8 caract\xE8res.",
      "host.bulk.needName": "Une fiche a besoin d\u2019un nom.",
      "host.bulk.nothing": "Rien \xE0 cr\xE9er.",
      "host.bulk.tooMany": "Trop de fiches d\u2019un coup ({max} au plus).",
      "host.bulkParse.imageInvalide": "Image invalide.",
      "host.bulkParse.typeFicheInvalide": "Type de fiche invalide.",
      "host.common.badScene": "Sc\xE8ne invalide.",
      "host.common.badSceneOrFloor": "Sc\xE8ne ou \xE9tage invalide.",
      "host.common.gmOnly": "Seul le MJ peut changer cela.",
      "host.common.noData": "Donn\xE9es introuvables.",
      "host.common.noSheet": "Cette fiche n\u2019existe pas.",
      "host.common.notYours": "Ce personnage n\u2019est pas \xE0 vous.",
      "host.common.notYoursTu": "Cette fiche n\u2019est pas \xE0 toi.",
      "host.common.nothing": "Rien \xE0 changer.",
      "host.common.refused": "Refus\xE9.",
      "host.common.tooManyConnections": "Trop de connexions.",
      "host.common.unknownOp": "Op\xE9ration inconnue.",
      "host.compendium.cannotKeep": "Cette fiche ne peut pas \xEAtre gard\xE9e (sans nom, ou trop lourde).",
      "host.compendium.cannotKeepNote": "Cette note ne peut pas \xEAtre gard\xE9e (sans titre, ou trop longue).",
      "host.compendium.damaged": "Cette entr\xE9e est ab\xEEm\xE9e.",
      "host.compendium.full": "Le compendium de la table est plein.",
      "host.compendium.gmOnlyAdd": "Seul le MJ garnit le compendium de la table.",
      "host.compendium.gmOnlyCreate": "Seul le MJ cr\xE9e depuis le compendium de la table.",
      "host.compendium.gmOnlyRemove": "Seul le MJ retire du compendium de la table.",
      "host.compendium.gone": "Cette entr\xE9e n\u2019existe plus.",
      "host.compendium.noteElsewhere": "Cette note n\u2019est pas de cette table.",
      "host.compendium.otherTable": "Cette fiche n\u2019est pas de cette table ({table} \u2260 {here}).",
      "host.compendium.tableIntrouvable": "Table introuvable.",
      "host.contentFolders.dossierIntrouvable": "Dossier introuvable.",
      "host.contentFolders.dossierParentIntrouvable": "Dossier parent introuvable.",
      "host.craft.gmOnlyBulk": "Seul le MJ cr\xE9e des fiches en masse.",
      "host.craft.listFull": "Cette liste est pleine.",
      "host.craftAdd.cibleIntrouvable": "Cible introuvable.",
      "host.craftAdd.contenuIntrouvable": "Contenu introuvable.",
      "host.exploration.cleared": "L\u2019exploration a \xE9t\xE9 effac\xE9e.",
      "host.exploration.gmOnlyClear": "Seul le MJ peut effacer l\u2019exploration.",
      "host.exploration.invalid": "M\xE9moire d\u2019exploration invalide.",
      "host.exploration.tooBig": "M\xE9moire d\u2019exploration trop grande.",
      "host.fieldRules.gmOnly": "Ce champ est r\xE9serv\xE9 au MJ.",
      "host.fieldRules.tooBig": "(trop grand pour \xEAtre v\xE9rifi\xE9)",
      "host.filter.gmOnly": "Seul le MJ r\xE8gle le filtre.",
      "host.floors.already": "Cette sc\xE8ne est d\xE9j\xE0 organis\xE9e en \xE9tages.",
      "host.floors.comeCloser": "Approchez votre jeton de l\u2019escalier.",
      "host.floors.invalid": "\xC9tage invalide.",
      "host.floors.keepOne": "Une sc\xE8ne \xE0 \xE9tages garde au moins un \xE9tage.",
      "host.floors.max": "Une sc\xE8ne a {max} \xE9tages au plus.",
      "host.floors.needLevel": "Donnez un niveau \xE0 l\u2019\xE9tage (RDC, 1er \xE9tage\u2026).",
      "host.floors.noFloor": "Cet \xE9tage n\u2019existe pas.",
      "host.floors.noRoom": "Cette sc\xE8ne a trop de calques pour un \xE9tage de plus.",
      "host.floors.noStair": "Cet escalier n\u2019existe pas.",
      "host.floors.order": "L\u2019ordre doit nommer tous les \xE9tages, une fois chacun.",
      "host.floors.organiseFirst": "Organisez d\u2019abord la sc\xE8ne en \xE9tages.",
      "host.floors.stairBroken": "L\u2019autre bout de cet escalier n\u2019existe plus.",
      "host.floors.stairNowhere": "Cet escalier ne m\xE8ne nulle part.",
      "host.floors.streamElsewhere": "Le flux d\u2019un \xE9tage passe par /loom/floors/stream.",
      "host.floors.targetGone": "L\u2019\xE9tage o\xF9 m\xE8ne cet escalier n\u2019existe plus.",
      "host.floors.tokenElsewhere": "Ce jeton n\u2019est pas \xE0 cet \xE9tage.",
      "host.floors.tooManyLayers": "Cette sc\xE8ne a trop de calques pour \xEAtre organis\xE9e en \xE9tages.",
      "host.floorsCore.demandeInvalide": "Demande invalide.",
      "host.floorsCore.ordreInvalide": "Ordre invalide.",
      "host.floorsCore.sousTitreInvalide": "Sous-titre invalide.",
      "host.folders.intoItself": "Un dossier ne peut pas se ranger dans lui-m\xEAme.",
      "host.folders.needName": "Un dossier a besoin d\u2019un nom.",
      "host.httpApp.actionInconnue": "Action inconnue.",
      "host.httpApp.filtreInconnu": "Filtre inconnu.",
      "host.httpApp.genreDossierInvalide": "Genre de dossier invalide.",
      "host.httpApp.imageIntrouvable": "Image introuvable.",
      "host.httpApp.tourInvalide": "Tour invalide.",
      "host.httpApp.tropDemandesPatienteInstant": "Trop de demandes : patiente un instant.",
      "host.keyAuth.impossibleTrouverNomLibre": "Impossible de trouver un nom libre.",
      "host.keys.bad": "Cl\xE9 invalide.",
      "host.keys.badOwner": "Cl\xE9 du propri\xE9taire invalide.",
      "host.keys.gm": "C\u2019est la cl\xE9 du MJ.",
      "host.lighting.already": "Cette sc\xE8ne a d\xE9j\xE0 son \xE9clairage.",
      "host.lighting.badLight": "Lumi\xE8re invalide.",
      "host.lighting.badLightPos": "Position de lumi\xE8re invalide.",
      "host.lighting.badStairLink": "Liaison d\u2019escalier invalide.",
      "host.lighting.badStairPos": "Position d\u2019escalier invalide.",
      "host.lighting.badWall": "Coordonn\xE9es de mur invalides.",
      "host.lighting.fogTooDetailed": "Brouillard trop d\xE9taill\xE9.",
      "host.lighting.gmOnly": "Seul le MJ peut changer l\u2019\xE9clairage.",
      "host.lighting.lite": "Une table Lite n\u2019a pas d\u2019\xE9diteur d\u2019\xE9clairage : ce sont les ambiances qui \xE9clairent.",
      "host.lighting.locked": "Cette porte est verrouill\xE9e.",
      "host.lighting.noDoor": "Cette porte n\u2019existe pas.",
      "host.lighting.stairSize": "Un escalier doit faire au moins 10 unit\xE9s de c\xF4t\xE9.",
      "host.lighting.tooManyItems": "Trop d\u2019\xE9l\xE9ments dans cette sc\xE8ne.",
      "host.lighting.tooManyOps": "Trop de changements \xE0 la fois.",
      "host.lighting.wallLength": "Un mur doit avoir une longueur.",
      "host.lightingSchema.brouillardInvalide": "Brouillard invalide.",
      "host.lightingSchema.escalierInvalide": "Escalier invalide.",
      "host.lightingSchema.murInvalide": "Mur invalide.",
      "host.lightingSchema.porteInvalide": "Porte invalide.",
      "host.lightingSchema.suppressionInvalide": "Suppression invalide.",
      "host.lobby.cannotOpen": "Impossible d\u2019ouvrir la table.",
      "host.lobby.gmOnlyOther": "Seul le MJ peut ouvrir un autre compte.",
      "host.lobby.noPlayer": "Joueur introuvable.",
      "host.lobby.signIn": "Connecte-toi d\u2019abord.",
      "host.media.badType": "Type de fichier non autoris\xE9.",
      "host.media.tooBig": "Requ\xEAte trop volumineuse.",
      "host.music.gmOnlyClock": "Seul le MJ r\xE8gle l\u2019horloge de la musique.",
      "host.people.sheetN": "Fiche {id}",
      "host.roles.noLook": "Ton r\xF4le \xE0 cette table ne permet pas de changer l\u2019image ou le jeton d\u2019une fiche.",
      "host.roles.noUpload": "Ton r\xF4le \xE0 cette table ne permet pas d\u2019envoyer des fichiers.",
      "host.scene.exploration": "Brouillard d\u2019exploration : oui, non, ou le d\xE9faut de la table.",
      "host.scene.skyEast": "Ciel : direction de l\u2019est invalide.",
      "host.scene.skyEvent": "Ciel : \xE9v\xE9nement inconnu.",
      "host.scene.skyNothing": "Ciel : rien \xE0 changer.",
      "host.scene.skyOnOff": "Ciel : allum\xE9 ou \xE9teint.",
      "host.scene.tableExploration": "Brouillard d\u2019exploration de la table : oui ou non.",
      "host.scene.viewDistance": "Distance de vue : un nombre entier de cases, de 0 (sans limite) \xE0 {max}.",
      "host.scene.visionPreset": "Pr\xE9r\xE9glage de vision inconnu.",
      "host.sceneSettingsSchema.ambianceInconnue": "Ambiance inconnue.",
      "host.sceneSettingsSchema.cielDemandeInvalide": "Ciel : demande invalide.",
      "host.sceneSettingsSchema.cielHeureInvalide": "Ciel : heure invalide.",
      "host.sceneSettingsSchema.cielModeAutomatiqueManuel": "Ciel : mode automatique ou manuel.",
      "host.sceneSettingsSchema.cielPauseNon": "Ciel : en pause ou non.",
      "host.sceneSettingsSchema.cielVitesse110": "Ciel : vitesse \xD71, \xD710, \xD760 ou \xD7360.",
      "host.sceneSettingsSchema.styleBrouillardInconnu": "Style de brouillard inconnu.",
      "host.sheetVisionAccess.visionFicheInconnue": "Vision : fiche inconnue.",
      "host.sheets.gmOnlyDefaults": "Seul le MJ r\xE8gle les d\xE9fauts des fiches.",
      "host.sheets.noDefaults": "Pas de fichier de d\xE9fauts pour cette table.",
      "host.sheets.tooMany": "Trop de fiches \xE0 la fois.",
      "host.skins.unknown": "Skin inconnu pour ce syst\xE8me.",
      "host.theme.gmOnly": "Seul le MJ peut changer le th\xE8me.",
      "host.theme.unknown": "Th\xE8me inconnu.",
      "host.turn.gmOnly": "Seul le MJ change le tour.",
      "host.youtube.keyNeeded": "Une cl\xE9 d\u2019API YouTube est n\xE9cessaire pour les listes de lecture (les liens de vid\xE9os seuls fonctionnent sans cl\xE9).",
      "hud.next": "Tour suivant",
      "hud.people": "\xC0 la table",
      "hud.previous": "Tour pr\xE9c\xE9dent",
      "hud.round": "Round",
      "hud.turnOf": "Au tour de {n}",
      "journal.all": "Tout",
      "journal.books": "Livres",
      "journal.help": "Aide du journal",
      "journal.importPdf": "Importer un PDF",
      "journal.newFolder": "Nouveau dossier",
      "journal.notes": "Notes",
      "journal.openPdf": "Ouvrir le PDF",
      "journal.search": "Rechercher dans le journal\u2026",
      "lightEngine.lighter": "\xC9clairage all\xE9g\xE9 pour rester fluide.",
      "lightingPanel.asPlayers": "Voir comme les joueurs",
      "lightingPanel.auto": "Auto",
      "lightingPanel.autoHint": "Suit l\u2019\xE9clairage de la sc\xE8ne.",
      "lightingPanel.classic": "Classique",
      "lightingPanel.edit": "\xC9diter murs et lumi\xE8res",
      "lightingPanel.editing": "Terminer l\u2019\xE9dition",
      "lightingPanel.enabled": "\xC9clairage dynamique",
      "lightingPanel.exploration": "Brouillard d\u2019exploration",
      "lightingPanel.explorationClear": "Effacer l\u2019exploration des joueurs",
      "lightingPanel.explorationClearAsk": "Effacer ce que tous les joueurs ont explor\xE9 de cette sc\xE8ne ?",
      "lightingPanel.explorationCleared": "Exploration des joueurs effac\xE9e.",
      "lightingPanel.explorationHint": "Chaque joueur garde ce qu\u2019il a explor\xE9, d\u2019une s\xE9ance \xE0 l\u2019autre. D\xE9coch\xE9 : ce qui sort de la vue redevient noir.",
      "lightingPanel.explorationTable": "(d\xE9faut de la table)",
      "lightingPanel.fogLook": "Aspect du brouillard",
      "lightingPanel.fogTool": "Brouillard de guerre",
      "lightingPanel.full": "Compl\xE8te",
      "lightingPanel.fullHint": "Ligne de vue et lumi\xE8res, avec m\xE9moire.",
      "lightingPanel.gmFog": "Votre brouillard",
      "lightingPanel.gmFogHint": "Ce qu\u2019aucun joueur ne voit, assombri sur votre \xE9cran seulement.",
      "lightingPanel.importUvtt": "Importer murs et lumi\xE8res (.dd2vtt, .uvtt)",
      "lightingPanel.importUvttHint": "Les murs, portes, fen\xEAtres et lumi\xE8res d\u2019une carte export\xE9e par Dungeondraft, Dungeon Alchemist, DungeonFog\u2026 cal\xE9s sur la carte pos\xE9e.",
      "lightingPanel.imported": "{w} murs et ouvertures, {l} lumi\xE8res import\xE9s.",
      "lightingPanel.keys": "Alt+V vision suivante \xB7 Alt+P voir comme les joueurs",
      "lightingPanel.lightN": "Lumi\xE8re",
      "lightingPanel.lights": "Lumi\xE8res de la sc\xE8ne",
      "lightingPanel.mist": "Brume",
      "lightingPanel.needFull": "La vision doit \xEAtre \xAB Compl\xE8te \xBB pour que les lumi\xE8res comptent.",
      "lightingPanel.noLights": "Aucune lumi\xE8re dans cette sc\xE8ne. \xAB \xC9diter murs et lumi\xE8res \xBB, puis l\u2019outil Lumi\xE8re.",
      "lightingPanel.off": "Aucune",
      "lightingPanel.offHint": "Tout le monde voit toute la carte.",
      "lightingPanel.parchment": "Parchemin",
      "lightingPanel.simple": "Simple",
      "lightingPanel.simpleHint": "Ligne de vue seule, sans lumi\xE8res.",
      "lightingPanel.skySoon": "Le ciel et l\u2019heure de la sc\xE8ne se r\xE8glent ici.",
      "lightingPanel.smoke": "Fum\xE9e",
      "lightingPanel.tabFog": "Brouillard",
      "lightingPanel.tabLights": "Lumi\xE8res",
      "lightingPanel.tabSky": "Ciel",
      "lightingPanel.tabVision": "Vision",
      "lightingPanel.title": "\xC9clairage",
      "lightingPanel.unreadableFile": "Fichier illisible.",
      "lightingPanel.viewCells": "{n} cases",
      "lightingPanel.viewDistance": "Distance de vue",
      "lightingPanel.viewDistanceHint": "Jusqu\u2019o\xF9 l\u2019on voit net ce qui est \xE9clair\xE9, pour toute la table ; au-del\xE0, la vue grise puis s\u2019efface.",
      "lightingPanel.viewUnlimited": "sans limite",
      "lightingPanel.vision": "Vision des joueurs",
      "lightingToolbar.done": "Terminer (\xC9chap)",
      "lightingToolbar.door": "Porte",
      "lightingToolbar.doorLocked": "Porte verrouill\xE9e",
      "lightingToolbar.doorSecret": "Porte secr\xE8te",
      "lightingToolbar.glass": "Vitrail",
      "lightingToolbar.hintDoor": "Cliquez sur un mur pour y poser la porte (glissez pour sa largeur), ou tracez-la comme un mur.",
      "lightingToolbar.hintDoorLocked": "Comme la porte, pos\xE9e verrouill\xE9e : les joueurs ne peuvent pas l\u2019ouvrir.",
      "lightingToolbar.hintDoorSecret": "Comme la porte, pos\xE9e secr\xE8te : les joueurs ne voient pas son ic\xF4ne.",
      "lightingToolbar.hintGlass": "Comme la fen\xEAtre, en vitrail : la lumi\xE8re qui la traverse prend sa couleur (r\xE9glable ensuite).",
      "lightingToolbar.hintLight": "Cliquez pour placer une lumi\xE8re ; cliquez-la ensuite pour la r\xE9gler.",
      "lightingToolbar.hintSelect": "Cliquez un \xE9l\xE9ment pour le r\xE9gler \xE0 c\xF4t\xE9 de lui. Glissez une lumi\xE8re ou un coin de mur. Suppr efface.",
      "lightingToolbar.hintWall": "Mur int\xE9rieur : il arr\xEAte la vue, les lampes et le ciel. Un clic par point ; double-clic, Entr\xE9e ou clic droit pour finir.",
      "lightingToolbar.hintWallOut": "Mur ext\xE9rieur (muret, lieu sans toit) : il arr\xEAte la vue et les lampes, pas le ciel. Un clic par point ; Entr\xE9e pour finir.",
      "lightingToolbar.hintWindow": "Cliquez sur un mur pour y percer la fen\xEAtre : elle laisse passer la vue et la lumi\xE8re.",
      "lightingToolbar.label": "\xC9clairage",
      "lightingToolbar.light": "Lumi\xE8re",
      "lightingToolbar.redo": "R\xE9tablir (Ctrl+Y)",
      "lightingToolbar.select": "S\xE9lection",
      "lightingToolbar.undo": "Annuler (Ctrl+Z)",
      "lightingToolbar.wall": "Mur int\xE9rieur",
      "lightingToolbar.wallOut": "Mur ext\xE9rieur",
      "lightingToolbar.window": "Fen\xEAtre",
      "liteFog.hide": "Cacher",
      "liteFog.on": "Brouillard allum\xE9 sur cette sc\xE8ne.",
      "liteFog.reveal": "R\xE9v\xE9ler",
      "liteMacros.advantage": "Avantage",
      "liteMacros.disadvantage": "D\xE9savantage",
      "lookThrough.banner": "Vue de {name} \xB7 Ctrl+L ou \xC9chap pour revenir",
      "lookThrough.bannerVowel": "Vue d\u2019{name} \xB7 Ctrl+L ou \xC9chap pour revenir",
      "lookThrough.someone": "personnage",
      "massCreate.doneMany": "{n} PNJ cr\xE9\xE9s. Il ne reste qu\u2019\xE0 les \xE9diter.",
      "massCreate.doneOne": "{n} PNJ cr\xE9\xE9. Il ne reste qu\u2019\xE0 l\u2019\xE9diter.",
      "massCreate.failed": "La cr\xE9ation de masse a \xE9chou\xE9.",
      "massCreate.noPath": "Une des images n\u2019est pas dans la m\xE9diath\xE8que de la table : elle ne peut pas devenir une fiche.",
      "massCreate.none": "S\xE9lectionnez d\u2019abord des images de la carte.",
      "massCreate.working": "Cr\xE9ation de masse : {done} sur {total}\u2026",
      "people.colour": "Ma couleur",
      "people.failed": "Le choix n\u2019a pas pu \xEAtre enregistr\xE9.",
      "people.me": "Toi",
      "people.noSheet": "Aucune fiche",
      "people.none": "Aucune",
      "people.people": "\xC0 la table",
      "people.sheet": "Ma fiche",
      "people.sheetN": "Fiche {id}",
      "people.whisper": "Parler en priv\xE9 \xE0 {n}",
      "picker.bad": "Ce fichier n\u2019est pas une image lisible.",
      "picker.cancel": "Annuler",
      "picker.drag": "Glissez l\u2019image pour la cadrer",
      "picker.failed": "L\u2019envoi a \xE9chou\xE9.",
      "picker.ok": "Valider",
      "picker.pick": "Choisir un fichier\u2026",
      "picker.round": "Jeton rond",
      "picker.sending": "Envoi\u2026",
      "picker.zoom": "Zoom",
      "pkg.identity.badCode": "Code d\u2019ami invalide.",
      "pkg.identity.badCodeCopy": "Code d\u2019ami invalide (copie incompl\xE8te ou modifi\xE9e).",
      "pkg.identity.noEncryption": "Identit\xE9 chiffr\xE9e : le chiffrement du syst\xE8me est indisponible.",
      "pkg.identity.ownCode": "C\u2019est ton propre code d\u2019ami.",
      "pkg.identity.unreadableCode": "Code d\u2019ami illisible.",
      "pkg.invite.badRecipient": "Cl\xE9 du destinataire invalide.",
      "pkg.invite.badSignature": "Signature de l\u2019invitation invalide.",
      "pkg.invite.expired": "Cette invitation a expir\xE9. Demande-en une nouvelle.",
      "pkg.invite.incomplete": "Invitation incompl\xE8te ou d\u2019une version inconnue.",
      "pkg.invite.invitationInvalide": "Invitation invalide.",
      "pkg.invite.invitationInvalideAdresse": "Invitation invalide (adresse).",
      "pkg.invite.invitationInvalideAdresses": "Invitation invalide (adresses).",
      "pkg.invite.invitationInvalideDate": "Invitation invalide (date).",
      "pkg.invite.invitationInvalideEmpreinte": "Invitation invalide (empreinte).",
      "pkg.invite.notForYou": "Cette invitation n\u2019est pas destin\xE9e \xE0 ton identit\xE9, ou elle est ab\xEEm\xE9e.",
      "pkg.invite.notInvitation": "Ce n\u2019est pas une invitation.",
      "pkg.roles.cogm": "Co-MJ",
      "pkg.roles.gm": "MJ",
      "pkg.roles.player": "Joueur",
      "pkg.roles.trusted": "Joueur de confiance",
      "pkg.vision.bright": "Lumi\xE8re vive",
      "pkg.vision.cone": "C\xF4ne : entre 30 et 360.",
      "pkg.vision.dark": "Vision dans le noir",
      "pkg.vision.dim": "Lumi\xE8re faible",
      "pkg.vision.filter": "Filtre : inconnu.",
      "pkg.vision.filterRange": "Port\xE9e du filtre",
      "pkg.vision.lightColor": "Lumi\xE8re : couleur #rrggbb.",
      "pkg.vision.lightFlicker": "Lumi\xE8re : vacillement inconnu.",
      "pkg.vision.lightNotObject": "Lumi\xE8re : un objet est attendu.",
      "pkg.vision.lightOn": "Lumi\xE8re : allum\xE9e ou non.",
      "pkg.vision.lightPreset": "Lumi\xE8re : pr\xE9r\xE9glage inconnu.",
      "pkg.vision.needDistance": "{name} : une distance est attendue.",
      "pkg.vision.notAllowed": "Vision : r\xE9serv\xE9 au MJ et \xE0 qui a le droit de r\xE9gler la vision de ses fiches.",
      "pkg.vision.notObject": "Vision : un objet est attendu.",
      "pkg.vision.range": "{name} : entre 0 et {max}.",
      "pkg.vision.sight": "Vue",
      "pkg.vision.unit": "{name} : unit\xE9 ft, m ou cases.",
      "pkg.vision.whole": "Vision : les r\xE9glages s'\xE9crivent en entier.",
      "playlistImport.adding": "Musique : {done} sur {total} ajout\xE9es\u2026",
      "playlistImport.doneCut": "{n} musiques ajout\xE9es (les {max} premi\xE8res).",
      "playlistImport.doneMany": "{n} musiques ajout\xE9es.",
      "playlistImport.doneOne": "{n} musique ajout\xE9e.",
      "playlistImport.empty": "Cette liste YouTube est vide, priv\xE9e ou introuvable.",
      "playlistImport.reading": "Lecture de la liste YouTube\u2026",
      "rollTags.failure": "\xC9chec",
      "rollTags.hit": "Touch\xE9",
      "rollTags.miss": "Rat\xE9",
      "rollTags.success": "R\xE9ussite",
      "rollsToChat.attack": "attaque",
      "rollsToChat.damage": "d\xE9g\xE2ts",
      "rollsToChat.damageOrHealing": "d\xE9g\xE2ts ou soins",
      "rollsToChat.hit": "touche",
      "rollsToChat.roll": "jet",
      "rollsToChat.test": "Test de {what}",
      "screenFilter.auto": "Selon le th\xE8me",
      "screenFilter.dread": "P\xE9nombre et d\xE9saturation",
      "screenFilter.failed": "Le filtre n\u2019a pas pu \xEAtre enregistr\xE9.",
      "screenFilter.hint": "Un voile sur la zone de la carte, pour l\u2019ambiance. La carte elle-m\xEAme n\u2019est jamais modifi\xE9e.",
      "screenFilter.neon": "Voile n\xE9on",
      "screenFilter.noir": "Noir et blanc",
      "screenFilter.none": "Aucun",
      "screenFilter.scan": "Lignes de balayage",
      "screenFilter.title": "Filtre \xE0 l\u2019\xE9cran",
      "screenFilter.vignette": "Vignettage chaud",
      "settings.full": "Compl\xE8te",
      "settings.fullHint": "Toutes les fen\xEAtres.",
      "settings.hidden": "Masqu\xE9e",
      "settings.hiddenHint": "Rien que la carte, pour l\u2019immersion.",
      "settings.interface": "Interface",
      "settings.keys": "Alt+1 compl\xE8te \xB7 Alt+2 r\xE9duite \xB7 Alt+3 masqu\xE9e \xB7 Alt+H masquer ou r\xE9tablir",
      "settings.reduced": "R\xE9duite",
      "settings.reducedHint": "Les fen\xEAtres se replient en ic\xF4nes.",
      "settings.sheets": "Fiches",
      "settings.sheetsHint": "Les r\xE9glages d\u2019\xE9clairage que prend chaque nouvelle fiche (onglet Param\xE8tres). Les fiches existantes gardent les leurs.",
      "settings.theme": "Th\xE8me",
      "settings.themeHint": "L\u2019apparence de l\u2019interface pour toute la table. La carte ne change jamais.",
      "settings.title": "R\xE9glages",
      "sheetModel.tooManyOutfits": "Trop de tenues.",
      "sheetTabs.addLine": "Ajouter une ligne",
      "sheetTabs.affiliation": "Affiliation",
      "sheetTabs.age": "\xC2ge",
      "sheetTabs.appearance": "Apparence",
      "sheetTabs.bio": "Bio & Info",
      "sheetTabs.bioText": "Biographie",
      "sheetTabs.changePortrait": "Changer l\u2019image\u2026",
      "sheetTabs.changeToken": "Changer le jeton\u2026",
      "sheetTabs.create": "Cr\xE9er",
      "sheetTabs.eyes": "Yeux",
      "sheetTabs.goals": "Objectifs et liens",
      "sheetTabs.hair": "Cheveux",
      "sheetTabs.height": "Taille",
      "sheetTabs.images": "Images",
      "sheetTabs.info": "Informations",
      "sheetTabs.labelPh": "Intitul\xE9",
      "sheetTabs.moreInfo": "Autres informations",
      "sheetTabs.newOutfit": "Nouvelle tenue",
      "sheetTabs.notes": "Notes",
      "sheetTabs.occupation": "Occupation",
      "sheetTabs.origin": "Origine",
      "sheetTabs.outfitName": "Nom de la tenue",
      "sheetTabs.outfits": "Tenues",
      "sheetTabs.outfitsHint": "Une tenue est une image et un jeton. Changez-en \xE0 tout moment : le jeton pos\xE9 sur la carte suit.",
      "sheetTabs.params": "Param\xE8tres",
      "sheetTabs.personality": "Personnalit\xE9",
      "sheetTabs.portrait": "Image",
      "sheetTabs.portraitTitle": "Image du personnage",
      "sheetTabs.readOnly": "Vous pouvez lire cette fiche, pas la modifier.",
      "sheetTabs.remove": "Supprimer",
      "sheetTabs.removeAsk": "Supprimer cette tenue ?",
      "sheetTabs.rename": "Renommer",
      "sheetTabs.sheet": "Fiche",
      "sheetTabs.skin": "Peau",
      "sheetTabs.story": "Biographie",
      "sheetTabs.token": "Jeton",
      "sheetTabs.tokenFromPortrait": "Jeton depuis l\u2019image",
      "sheetTabs.tokenTitle": "Jeton du personnage",
      "sheetTabs.valuePh": "Valeur",
      "sheetTabs.wear": "Porter",
      "sheetTabs.weight": "Poids",
      "sheetTabs.worn": "Port\xE9e",
      "shell.actions": "Actions",
      "shell.audio": "Audio",
      "shell.close": "Fermer",
      "shell.content": "Contenu",
      "shell.craft": "Personnage",
      "shell.hidden": "Masqu\xE9e",
      "shell.hint": "Chaque fen\xEAtre est une ic\xF4ne de la barre de gauche, un onglet \xE0 droite, ou masqu\xE9e.",
      "shell.left": "Gauche",
      "shell.main": "Principal",
      "shell.menu": "Interface",
      "shell.modules": "Modules et autres",
      "shell.other": "Autres",
      "shell.restore": "R\xE9tablir l\u2019interface",
      "shell.right": "Droite",
      "shell.tabs": "Panneaux de droite",
      "shell.title": "Interface",
      "shell.tool": "Outils",
      "shell.tools": "Fen\xEAtres de gauche",
      "skyPanel.afternoon": "apr\xE8s-midi",
      "skyPanel.auto": "Auto",
      "skyPanel.autoHint": "L\u2019astre avance seul, \xE0 la vitesse choisie.",
      "skyPanel.blood": "Lune de sang",
      "skyPanel.dawn": "aube",
      "skyPanel.dawnAt": "Aube",
      "skyPanel.dusk": "cr\xE9puscule",
      "skyPanel.duskAt": "Cr\xE9puscule",
      "skyPanel.enabled": "Ciel",
      "skyPanel.evening": "soir",
      "skyPanel.event": "La nuit",
      "skyPanel.failed": "Le ciel n\u2019a pas pu \xEAtre chang\xE9.",
      "skyPanel.full": "Pleine lune",
      "skyPanel.intro": "Le ciel donne l\u2019heure \xE0 la carte : le soleil le jour, la lune la nuit. \xC9teint, la sc\xE8ne garde son obscurit\xE9 et ses lampes.",
      "skyPanel.manual": "Manuel",
      "skyPanel.manualHint": "L\u2019astre reste o\xF9 vous l\u2019avez mis.",
      "skyPanel.mode": "Le temps",
      "skyPanel.moments": "Aller \xE0",
      "skyPanel.morning": "matin",
      "skyPanel.new": "Nouvelle lune",
      "skyPanel.night": "nuit",
      "skyPanel.nightAt": "Nuit",
      "skyPanel.none": "Aucun",
      "skyPanel.noon": "midi",
      "skyPanel.noonAt": "Midi",
      "skyPanel.pause": "Pause",
      "skyPanel.paused": "en pause",
      "skyPanel.resume": "Reprendre",
      "skyPanel.ring": "Glissez l\u2019astre sur l\u2019anneau autour de la carte pour changer l\u2019heure ; la poign\xE9e E dit o\xF9 est l\u2019est.",
      "skyPanel.speed": "Vitesse",
      "spend.notEnough": "Pas assez de {name} : il en reste {left}, il en faut {need}.",
      "spend.notFound": "Ressource introuvable sur cette fiche : {name}.",
      "spend.spends": "{who} d\xE9pense {what}",
      "spend.spent": "D\xE9pense de {what}",
      "stairs.comeCloser": "Amenez votre jeton \xE0 c\xF4t\xE9 de l\u2019escalier, puis cliquez son ic\xF4ne.",
      "stairs.nowhere": "Cet escalier ne m\xE8ne nulle part.",
      "tableCompendium.empty": "Rien encore : un clic droit sur une fiche de la liste la garde ici.",
      "tableCompendium.failed": "Le compendium de la table n\u2019a pas r\xE9pondu.",
      "tableCompendium.fromSheet": "Depuis la fiche",
      "tableCompendium.keep": "Garder dans le compendium de la table",
      "tableCompendium.keepNote": "Garder la note dans le compendium",
      "tableCompendium.kept": "\xAB {n} \xBB gard\xE9 dans le compendium de la table.",
      "tableCompendium.keptOn": "Gard\xE9 le",
      "tableCompendium.kind": "Type de fiche",
      "tableCompendium.made": "Fiche \xAB {n} \xBB cr\xE9\xE9e depuis le compendium.",
      "tableCompendium.make": "Cr\xE9er sur la table",
      "tableCompendium.makeNote": "Cr\xE9er la note sur la table",
      "tableCompendium.many": "entr\xE9es",
      "tableCompendium.note": "Note du journal",
      "tableCompendium.remove": "Retirer du compendium",
      "tableCompendium.removed": "\xAB {n} \xBB retir\xE9 du compendium.",
      "tableCompendium.search": "Chercher dans le compendium de la table\u2026",
      "tableCompendium.tagNote": "note",
      "tableCompendium.tagSheet": "fiche",
      "tableCompendium.title": "Table",
      "target.chip": "Cible",
      "target.none": "Ce n\u2019est pas une cible : il n\u2019a pas de fiche.",
      "target.remove": "Retirer la cible",
      "themes.cyberpunk": "Cyberpunk",
      "themes.espace": "Space opera",
      "themes.fantasy": "Fantasy",
      "themes.horreur": "Horreur",
      "themes.metier": "M\xE9tier",
      "themes.noir": "Film noir",
      "uvtt.notUvtt": "Ce fichier n\u2019est pas une carte Universal VTT (.dd2vtt, .uvtt, .df2vtt).",
      "vision.gpuLost": "\xC9clairage : la carte graphique a d\xE9croch\xE9, rendu simplifi\xE9.",
      "vision.notChanged": "Le r\xE9glage n\u2019a pas pu \xEAtre chang\xE9 ({status}).",
      "vision.notCleared": "L\u2019exploration n\u2019a pas pu \xEAtre effac\xE9e ({status}).",
      "vision.simplified": "\xC9clairage simplifi\xE9 : cette machine a du mal \xE0 suivre.",
      "visionForm.blindsight": "Perception aveugle",
      "visionForm.bright": "Vive",
      "visionForm.candle": "Bougie",
      "visionForm.case": "cases",
      "visionForm.color": "Couleur",
      "visionForm.cone": "C\xF4ne",
      "visionForm.custom": "Personnalis\xE9e",
      "visionForm.dark": "Dans le noir",
      "visionForm.darkHint": "Dans cette distance, l\u2019obscurit\xE9 se voit en p\xE9nombre grise.",
      "visionForm.darkReach": "Distance",
      "visionForm.defaults": "Reprendre les d\xE9fauts de la table",
      "visionForm.dim": "Faible",
      "visionForm.faulty": "d\xE9faillante",
      "visionForm.filter": "Filtre",
      "visionForm.filterReach": "Port\xE9e du filtre",
      "visionForm.filterReachHint": "= la vue",
      "visionForm.flicker": "Vacillement",
      "visionForm.grey": "Noir et blanc",
      "visionForm.k-candle": "bougie",
      "visionForm.k-torch": "torche",
      "visionForm.lantern": "Lanterne",
      "visionForm.light": "Lumi\xE8re port\xE9e",
      "visionForm.lightOn": "Allum\xE9e",
      "visionForm.nightvision": "JVN",
      "visionForm.none": "Aucun",
      "visionForm.preset": "Type",
      "visionForm.pulse": "pulsation",
      "visionForm.reach": "Port\xE9e",
      "visionForm.readonly": "Lecture seule : le MJ ou qui a le droit \xAB Vision de ses fiches \xBB les r\xE8gle.",
      "visionForm.sceneReach": "sans limite",
      "visionForm.sight": "Vue",
      "visionForm.spell": "Sort de lumi\xE8re",
      "visionForm.steady": "stable",
      "visionForm.thermal": "Thermique",
      "visionForm.torch": "Torche",
      "visionForm.unitHint": "ft et m se convertissent selon la grille de la sc\xE8ne."
    };
  }
});

// apps/desktop/renderer/theme-core.js
var require_theme_core = __commonJS({
  "apps/desktop/renderer/theme-core.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) module2.exports = factory(require_builder_theme());
      else root.TTTableTheme = factory(root.TTBuilderTheme);
    })(typeof self !== "undefined" ? self : exports2, function(Theme) {
      "use strict";
      var given2 = null;
      var french2 = null;
      function say2(key, vars) {
        var text;
        if (given2) text = given2(key, vars);
        else {
          if (french2 === null) {
            try {
              french2 = typeof module2 === "object" && module2.exports && typeof require === "function" ? require_fr() : {};
            } catch (e) {
              french2 = {};
            }
          }
          text = french2[key] || key;
          Object.keys(vars || {}).forEach(function(k) {
            text = text.split("{" + k + "}").join(String(vars[k]));
          });
        }
        return text;
      }
      function useTexts2(fn) {
        given2 = typeof fn === "function" ? fn : null;
      }
      var FORMAT = "ourdir-theme";
      var MAX_BYTES = 65536;
      var ID_RE3 = /^[a-z0-9][a-z0-9-]{1,39}$/;
      var VERSION_RE3 = /^\d+\.\d+\.\d+$/;
      var COLOR_RE = /^#[0-9a-f]{6}$/;
      var BUILTIN = ["metier", "fantasy", "cyberpunk", "espace", "horreur", "noir"];
      var COLOR_KEYS = [
        { k: "void", label: "Fond profond" },
        { k: "bg", label: "Fond" },
        { k: "panel", label: "Panneaux" },
        { k: "panel2", label: "Panneaux en creux" },
        { k: "line", label: "Filets" },
        { k: "text", get label() {
          return say2("tableTheme.texte");
        } },
        { k: "muted", get label() {
          return say2("tableTheme.texteAttenue");
        } },
        { k: "accent", get label() {
          return say2("tableTheme.accentFil");
        } },
        { k: "accent2", label: "Accent secondaire" },
        { k: "ok", get label() {
          return say2("tableTheme.reussite");
        } },
        { k: "warn", label: "Attention" },
        { k: "bad", label: "Danger" },
        { k: "paper", label: "Papier (fiches, jets)" },
        { k: "paperInk", get label() {
          return say2("tableTheme.encreSurPapier");
        } }
      ];
      var FONT_KEYS = Object.keys(Theme.FONTS).filter(function(k) {
        return !!Theme.FONTS[k].family;
      });
      var CHOICES = {
        corners: { vifs: 0, doux: 6, ronds: 12 },
        cut: { aucune: 0, legere: 6, marquee: 10 },
        tabs: ["droits", "coupes"],
        knots: ["ronds", "losanges", "carres"],
        glow: ["aucun", "doux", "neon"],
        texture: ["aucune", "tissage", "lignes", "papier"],
        grain: [0, 1, 2, 3],
        filter: ["none", "vignette", "neon", "scan", "dread", "noir"]
      };
      var MINIMA = { "text-bg": 4.5, "text-panel": 4.5, "muted-panel": 3, "ink-paper": 4.5 };
      var TOP = ["format", "v", "id", "name", "version", "author", "license", "description", "base", "colors", "fonts", "shape", "effects", "filter"];
      var isObj5 = function(v) {
        return v !== null && typeof v === "object" && !Array.isArray(v);
      };
      var has = function(list2, v) {
        return list2.indexOf(v) >= 0;
      };
      var strictKeys = function(o, allowed, where, out) {
        Object.keys(o).forEach(function(k) {
          if (!has(allowed, k)) out.push(say2("tableTheme.unknownField", { where, name: String(k).slice(0, 30) }));
        });
      };
      function validate(d) {
        var out = [];
        if (!isObj5(d)) return [say2("tableTheme.ceNEstPas")];
        strictKeys(d, TOP, say2("tableTheme.theme"), out);
        if (d.format !== FORMAT || d.v !== 1) out.push(say2("tableTheme.notTheme"));
        if (typeof d.id !== "string" || !ID_RE3.test(d.id)) out.push(say2("tableTheme.badId"));
        if (typeof d.name !== "string" || d.name.trim().length < 2 || d.name.length > 40) out.push(say2("tableTheme.badName"));
        if (typeof d.version !== "string" || !VERSION_RE3.test(d.version)) out.push(say2("tableTheme.badVersion"));
        ["author", "license"].forEach(function(k) {
          if (d[k] !== void 0 && (typeof d[k] !== "string" || d[k].length > 80)) out.push(say2("tableTheme.tooLong80", { name: k }));
        });
        if (d.description !== void 0 && (typeof d.description !== "string" || d.description.length > 300)) out.push(say2("tableTheme.badDescription"));
        if (!has(BUILTIN, d.base)) out.push(say2("tableTheme.badBase"));
        if (!isObj5(d.colors)) out.push(say2("tableTheme.noColors"));
        else {
          strictKeys(d.colors, COLOR_KEYS.map(function(c) {
            return c.k;
          }), say2("tableTheme.colors"), out);
          COLOR_KEYS.forEach(function(c) {
            if (typeof d.colors[c.k] !== "string" || !COLOR_RE.test(d.colors[c.k])) out.push(say2("tableTheme.badColor", { name: c.label }));
          });
        }
        if (!isObj5(d.fonts)) out.push(say2("tableTheme.noFonts"));
        else {
          strictKeys(d.fonts, ["display", "body", "mono"], say2("tableTheme.fonts"), out);
          ["display", "body", "mono"].forEach(function(k) {
            if (!has(FONT_KEYS, d.fonts[k])) out.push(say2("tableTheme.badFont", { name: k }));
          });
        }
        if (!isObj5(d.shape)) out.push(say2("tableTheme.noShape"));
        else {
          strictKeys(d.shape, ["corners", "cut", "tabs", "knots"], say2("tableTheme.shape"), out);
          if (!has(Object.keys(CHOICES.corners), d.shape.corners)) out.push(say2("tableTheme.badCorners"));
          if (!has(Object.keys(CHOICES.cut), d.shape.cut)) out.push(say2("tableTheme.badCut"));
          if (!has(CHOICES.tabs, d.shape.tabs)) out.push(say2("tableTheme.badTabs"));
          if (!has(CHOICES.knots, d.shape.knots)) out.push(say2("tableTheme.badKnots"));
        }
        if (!isObj5(d.effects)) out.push(say2("tableTheme.noEffects"));
        else {
          strictKeys(d.effects, ["glow", "texture", "grain", "capitals"], say2("tableTheme.effects"), out);
          if (!has(CHOICES.glow, d.effects.glow)) out.push(say2("tableTheme.badGlow"));
          if (!has(CHOICES.texture, d.effects.texture)) out.push(say2("tableTheme.badTexture"));
          if (!has(CHOICES.grain, d.effects.grain)) out.push(say2("tableTheme.badGrain"));
          if (typeof d.effects.capitals !== "boolean") out.push(say2("tableTheme.badCapitals"));
        }
        if (!has(CHOICES.filter, d.filter)) out.push(say2("tableTheme.badFilter"));
        return out;
      }
      function parse(text) {
        if (typeof text !== "string" || text.length > MAX_BYTES) return { ok: false, errors: [say2("tableTheme.tooBig")] };
        var d;
        try {
          d = JSON.parse(text.charCodeAt(0) === 65279 ? text.slice(1) : text);
        } catch (e) {
          return { ok: false, errors: [say2("tableTheme.unreadable")] };
        }
        var errors = validate(d);
        return errors.length ? { ok: false, errors } : { ok: true, doc: d };
      }
      var rgbOf = function(hex) {
        return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
      };
      var hexOf = function(rgb) {
        return "#" + rgb.map(function(n) {
          return ("0" + Math.max(0, Math.min(255, Math.round(n))).toString(16)).slice(-2);
        }).join("");
      };
      var mix = function(a, b, t) {
        var x = rgbOf(a), y = rgbOf(b);
        return hexOf([0, 1, 2].map(function(i) {
          return x[i] + (y[i] - x[i]) * t;
        }));
      };
      var triple = function(hex) {
        return rgbOf(hex).join(" ");
      };
      var rgba = function(hex, a) {
        var c = rgbOf(hex);
        return "rgba(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + a + ")";
      };
      function luminance(hex) {
        var c = rgbOf(hex).map(function(n) {
          n /= 255;
          return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
      }
      function ratio(a, b) {
        var x = luminance(a), y = luminance(b);
        return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
      }
      function contrasts(d) {
        var c = d.colors;
        var row = function(key, label, fg, bg) {
          var r = Math.round(ratio(fg, bg) * 100) / 100;
          return { key, label, ratio: r, min: MINIMA[key], ok: r >= MINIMA[key] };
        };
        return [
          row("text-bg", say2("tableTheme.contrast.textBg"), c.text, c.bg),
          row("text-panel", say2("tableTheme.contrast.textPanel"), c.text, c.panel),
          row("muted-panel", say2("tableTheme.contrast.mutedPanel"), c.muted, c.panel),
          row("ink-paper", say2("tableTheme.contrast.inkPaper"), c.paperInk, c.paper)
        ];
      }
      var ADVICE = {
        get "text-bg"() {
          return say2("tableTheme.texteSeLitMal");
        },
        get "text-panel"() {
          return say2("tableTheme.texteSeLitMal2");
        },
        get "muted-panel"() {
          return say2("tableTheme.texteAttenueSeLit");
        },
        get "ink-paper"() {
          return say2("tableTheme.encreSeLitMal");
        }
      };
      function readable(d) {
        var problems = contrasts(d).filter(function(x) {
          return !x.ok;
        }).map(function(x) {
          return say2("tableTheme.advice", { advice: ADVICE[x.key], ratio: x.ratio, min: x.min });
        });
        return { ok: problems.length === 0, problems };
      }
      var STARTS = {
        metier: {
          colors: { void: "#080a18", bg: "#10132b", panel: "#191e42", panel2: "#222956", line: "#303873", text: "#ece4d0", muted: "#9da0c4", accent: "#e0b64a", accent2: "#b8892a", ok: "#58b09f", warn: "#f0c860", bad: "#d0566a", paper: "#ece4d0", paperInk: "#2b2118" },
          fonts: { display: "alegreya", body: "alegreya", mono: "jetbrains" },
          shape: { corners: "doux", cut: "aucune", tabs: "droits", knots: "ronds" },
          effects: { glow: "aucun", texture: "aucune", grain: 0, capitals: false },
          filter: "none"
        },
        fantasy: {
          colors: { void: "#14100b", bg: "#1e1710", panel: "#34271a", panel2: "#453421", line: "#6b5232", text: "#e8d9b5", muted: "#b39d78", accent: "#c9962e", accent2: "#7a2a22", ok: "#7ea36a", warn: "#e6b84e", bad: "#b0433a", paper: "#d9c9a1", paperInk: "#2a1d14" },
          fonts: { display: "fell", body: "alegreya", mono: "jetbrains" },
          shape: { corners: "doux", cut: "aucune", tabs: "droits", knots: "ronds" },
          effects: { glow: "aucun", texture: "tissage", grain: 2, capitals: false },
          filter: "vignette"
        },
        cyberpunk: {
          colors: { void: "#04060c", bg: "#070b14", panel: "#0a1020", panel2: "#111a2f", line: "#1d2947", text: "#eef2ff", muted: "#a3afcf", accent: "#3ff0d2", accent2: "#8270ff", ok: "#4be3a5", warn: "#ffc857", bad: "#ff6b8a", paper: "#0a1020", paperInk: "#eef2ff" },
          fonts: { display: "barlow", body: "inter", mono: "jetbrains" },
          shape: { corners: "vifs", cut: "marquee", tabs: "coupes", knots: "losanges" },
          effects: { glow: "neon", texture: "lignes", grain: 0, capitals: true },
          filter: "neon"
        },
        espace: {
          colors: { void: "#050d12", bg: "#07131a", panel: "#0d212b", panel2: "#12303d", line: "#1f5566", text: "#dff3f2", muted: "#7fb0b6", accent: "#ffb547", accent2: "#5ee0b8", ok: "#5ee0b8", warn: "#ffd08a", bad: "#ff6a4a", paper: "#0b1c25", paperInk: "#dff3f2" },
          fonts: { display: "michroma", body: "exo2", mono: "jetbrains" },
          shape: { corners: "ronds", cut: "aucune", tabs: "coupes", knots: "carres" },
          effects: { glow: "doux", texture: "lignes", grain: 0, capitals: false },
          filter: "scan"
        },
        horreur: {
          colors: { void: "#090706", bg: "#0d0a09", panel: "#171210", panel2: "#241a17", line: "#4a2a26", text: "#e4d8c8", muted: "#9a8577", accent: "#a3282b", accent2: "#7d8f5a", ok: "#7d8f5a", warn: "#c9a35a", bad: "#d4362f", paper: "#14100f", paperInk: "#e4d8c8" },
          fonts: { display: "specialelite", body: "crimson", mono: "jetbrains" },
          shape: { corners: "doux", cut: "aucune", tabs: "droits", knots: "ronds" },
          effects: { glow: "aucun", texture: "aucune", grain: 3, capitals: false },
          filter: "dread"
        },
        noir: {
          colors: { void: "#070707", bg: "#0b0b0c", panel: "#151516", panel2: "#212123", line: "#3a3a3d", text: "#ecebe6", muted: "#9b9a94", accent: "#e8e6df", accent2: "#c8202f", ok: "#b9b7ad", warn: "#d8d6cf", bad: "#c8202f", paper: "#e6e2d5", paperInk: "#151412" },
          fonts: { display: "playfair", body: "courierprime", mono: "jetbrains" },
          shape: { corners: "vifs", cut: "aucune", tabs: "droits", knots: "carres" },
          effects: { glow: "aucun", texture: "aucune", grain: 3, capitals: false },
          filter: "noir"
        }
      };
      function fromBuiltin(base, o) {
        var s = o && o.from || STARTS[base] || STARTS.metier;
        var copy = JSON.parse(JSON.stringify(s));
        return {
          format: FORMAT,
          v: 1,
          id: o.id,
          name: o.name,
          version: "1.0.0",
          author: "",
          license: "CC-BY-4.0",
          description: "",
          base: has(BUILTIN, base) ? base : o && o.from && o.from.base || "metier",
          colors: copy.colors,
          fonts: copy.fonts,
          shape: copy.shape,
          effects: copy.effects,
          filter: copy.filter
        };
      }
      var GLOW = {
        aucun: function() {
          return "none";
        },
        doux: function(a) {
          return "0 0 10px " + rgba(a, 0.25);
        },
        neon: function(a) {
          return "0 0 12px " + rgba(a, 0.35) + ", 0 0 2px " + a;
        }
      };
      var TEXTURE = {
        aucune: function() {
          return "none";
        },
        tissage: function(t) {
          return "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.07) 0 2px, transparent 2px 9px), repeating-linear-gradient(90deg, " + rgba(t, 0.02) + " 0 1px, transparent 1px 3px)";
        },
        lignes: function() {
          return "repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 3px)";
        },
        papier: function(t) {
          return "radial-gradient(" + rgba(t, 0.04) + " 1px, transparent 1px)";
        }
      };
      var KNOTS = { ronds: { radius: "50%", turn: "0deg", size: "40px" }, losanges: { radius: "1px", turn: "45deg", size: "30px" }, carres: { radius: "2px", turn: "0deg", size: "34px" } };
      function tokens(d) {
        var c = d.colors, f = d.fonts, sh = d.shape, ef = d.effects;
        var cut = CHOICES.cut[sh.cut], radius = CHOICES.corners[sh.corners], knot = KNOTS[sh.knots];
        var onAccent = ratio("#000000", c.accent) >= ratio("#ffffff", c.accent) ? "#000000" : "#ffffff";
        return {
          void: c.void,
          bg: c.bg,
          panel: c.panel,
          panel2: c.panel2,
          line: c.line,
          lineSoft: mix(c.line, c.bg, 0.3),
          lineStrong: mix(c.line, c.text, 0.25),
          text: c.text,
          muted: c.muted,
          dim: mix(c.muted, c.bg, 0.3),
          accent: c.accent,
          accentDim: mix(c.accent, c.bg, 0.2),
          accentHi: mix(c.accent, "#ffffff", 0.3),
          accentDeep: mix(c.accent, c.bg, 0.8),
          accent2: c.accent2,
          onAccent,
          ok: c.ok,
          warn: c.warn,
          bad: c.bad,
          badDeep: mix(c.bad, c.bg, 0.8),
          paper: c.paper,
          paper2: mix(c.paper, c.paperInk, 0.06),
          paperInk: c.paperInk,
          paperMuted: mix(c.paperInk, c.paper, 0.45),
          paperLine: mix(c.paperInk, c.paper, 0.7),
          display: Theme.FONTS[f.display].css,
          body: Theme.FONTS[f.body].css,
          mono: Theme.FONTS[f.mono].css,
          radius: radius + "px",
          radiusSm: Math.round(radius * 0.66) + "px",
          cut: cut + "px",
          tabCut: sh.tabs === "coupes" ? "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" : "none",
          glow: GLOW[ef.glow](c.accent),
          texture: TEXTURE[ef.texture](c.text),
          grain: String(Math.round(ef.grain * 4) / 100),
          knot,
          caps: ef.capitals ? "uppercase" : "none",
          track: ef.capitals ? "1" : "0"
        };
      }
      function guarded2(css) {
        if (!Theme.isSafeCss(css)) throw new Error(say2("tableTheme.styleProduitParCe"));
        return css;
      }
      var pageName = function(id) {
        return "t-" + id;
      };
      function pageCss(d) {
        var t = tokens(d);
        var v = [
          "--loom-void: " + t.void,
          "--loom-void-rgb: " + triple(t.void),
          "--loom-bg: " + t.bg,
          "--loom-deep-rgb: " + triple(t.bg),
          "--loom-panel: " + rgba(t.panel, 0.95),
          "--loom-panel-rgb: " + triple(t.panel),
          "--loom-panel-solid: " + t.panel,
          "--loom-panel-2: " + t.panel2,
          "--loom-panel2-rgb: " + triple(t.panel2),
          "--loom-line: " + t.line,
          "--loom-line-rgb: " + triple(t.line),
          "--loom-line-soft: " + t.lineSoft,
          "--loom-line-strong: " + t.lineStrong,
          "--loom-grid-rgb: " + triple(mix(t.text, t.bg, 0.25)),
          "--loom-text: " + t.text,
          "--loom-muted: " + t.muted,
          "--loom-dim: " + t.dim,
          "--loom-accent: " + t.accent,
          "--loom-accent-rgb: " + triple(t.accent),
          "--loom-accent-dim: " + t.accentDim,
          "--loom-accent-hi: " + t.accentHi,
          "--loom-accent-deep: " + t.accentDeep,
          "--loom-on-accent: " + t.onAccent,
          "--loom-accent2: " + t.accent2,
          "--loom-accent2-rgb: " + triple(t.accent2),
          "--loom-pink: " + t.bad,
          "--loom-warn: " + t.warn,
          "--loom-bad: " + t.bad,
          "--loom-bad-deep: " + t.badDeep,
          "--loom-ok: " + t.ok,
          "--loom-display: " + t.display,
          "--loom-body: " + t.body,
          "--loom-mono: " + t.mono,
          "--loom-caps: " + t.caps,
          "--loom-track: " + t.track,
          "--loom-radius: " + t.radius,
          "--loom-radius-sm: " + t.radiusSm,
          "--loom-paper: " + t.paper,
          "--loom-paper-2: " + t.paper2,
          "--loom-paper-ink: " + t.paperInk,
          "--loom-paper-muted: " + t.paperMuted,
          "--loom-paper-line: " + t.paperLine,
          "--loom-cut: " + t.cut,
          "--loom-tab-cut: " + t.tabCut,
          "--loom-edge: 1px solid var(--loom-line)",
          "--loom-edge-strong: 1px solid var(--loom-line-strong)",
          "--loom-thread: 2px solid var(--loom-accent)",
          "--loom-stitch: 1px dashed " + rgba(t.text, 0.22),
          "--loom-glow: " + t.glow,
          "--loom-texture: " + t.texture,
          "--loom-paper-texture: none",
          "--loom-grain: " + t.grain,
          "--loom-shadow: 0 14px 40px rgba(0, 0, 0, 0.5)",
          "--loom-knot-radius: " + t.knot.radius,
          "--loom-knot-turn: " + t.knot.turn,
          "--loom-knot-clip: none",
          "--loom-knot-size: " + t.knot.size,
          "--loom-over-map: " + t.text,
          "color-scheme: dark"
        ];
        return guarded2('html.loom[data-loom-theme="' + pageName(d.id) + '"] {\n  ' + v.join(";\n  ") + ";\n}\n");
      }
      function launcherCss(d) {
        var t = tokens(d);
        var v = [
          "--void: " + t.void,
          "--bg: " + t.bg,
          "--panel: " + t.panel,
          "--panel-2: " + t.panel2,
          "--text: " + t.text,
          "--muted: " + t.muted,
          "--dim: " + t.dim,
          "--accent: " + t.accent,
          "--accent-rgb: " + triple(t.accent),
          "--accent-ink: " + t.onAccent,
          "--violet: " + t.accent2,
          "--violet-rgb: " + triple(t.accent2),
          "--pink: " + t.bad,
          "--pink-rgb: " + triple(t.bad),
          "--line: " + t.line,
          "--line-strong: " + t.lineStrong,
          "--ok: " + t.ok,
          "--warn: " + t.warn,
          "--bad: " + t.bad,
          "--radius: " + t.radius,
          "--display: " + t.display,
          "--body: " + t.body,
          "--mono: " + t.mono
        ];
        return guarded2(':root[data-loom-theme="' + pageName(d.id) + '"] {\n  ' + v.join(";\n  ") + ";\n}\n");
      }
      return {
        useTexts: useTexts2,
        FORMAT,
        MAX_BYTES,
        ID_RE: ID_RE3,
        BUILTIN,
        COLOR_KEYS,
        FONT_KEYS,
        CHOICES,
        MINIMA,
        parse,
        validate,
        contrasts,
        readable,
        fromBuiltin,
        pageCss,
        launcherCss,
        pageName
      };
    });
  }
});

// apps/desktop/renderer/translation-core.js
var require_translation_core = __commonJS({
  "apps/desktop/renderer/translation-core.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) module2.exports = factory();
      else root.OurdirTranslation = factory();
    })(typeof self !== "undefined" ? self : exports2, function() {
      "use strict";
      var FORMAT = "ourdir-translation";
      var MAX_BYTES = 1048576;
      var MAX_RAW = 4 * MAX_BYTES;
      var MAX_TEXT = 2e3;
      var ID_RE3 = /^[a-z0-9][a-z0-9-]{1,39}$/;
      var VERSION_RE3 = /^\d+\.\d+\.\d+$/;
      var LANG_RE2 = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/;
      var SECTIONS = ["engine", "launcher", "page"];
      var LATER = ["system", "compendium", "module"];
      var TOP = ["format", "v", "id", "name", "version", "author", "license", "description", "language", "target", "texts", "source"];
      var MARK_RE = /%?\{[A-Za-z0-9_]+\}/g;
      var TAG_RE2 = /<[^<>]*>/g;
      var own = function(o, k) {
        return Object.prototype.hasOwnProperty.call(o, k);
      };
      var isObj5 = function(v) {
        return !!v && typeof v === "object" && !Array.isArray(v);
      };
      var err = function(code, params) {
        return { code, params: params || {} };
      };
      var bytes = function(s) {
        var n = 0;
        for (var i = 0; i < s.length; i++) {
          var c = s.charCodeAt(i);
          n += c < 128 ? 1 : c < 2048 ? 2 : c >= 55296 && c <= 56319 ? (i++, 4) : 3;
        }
        return n;
      };
      function markers(text) {
        return (String(text).match(MARK_RE) || []).sort().join(" ");
      }
      function tags(text) {
        return (String(text).match(TAG_RE2) || []).sort().join("");
      }
      var strayOpen = function(v) {
        return v.replace(TAG_RE2, "").indexOf("<") >= 0;
      };
      var sameShape = function(v, english) {
        return markers(v) === markers(english) && tags(v) === tags(english);
      };
      function validate(d) {
        if (!isObj5(d) || d.format !== FORMAT || d.v !== 1) return [err("notTranslation")];
        var e = [];
        Object.keys(d).forEach(function(k) {
          if (TOP.indexOf(k) < 0) e.push(err("unknownField", { field: k }));
        });
        if (typeof d.id !== "string" || !ID_RE3.test(d.id)) e.push(err("badId"));
        if (typeof d.name !== "string" || !d.name.trim() || d.name.length > 40) e.push(err("badName"));
        if (typeof d.version !== "string" || !VERSION_RE3.test(d.version)) e.push(err("badVersion"));
        [["author", 80], ["license", 80], ["description", 300]].forEach(function(f) {
          if (d[f[0]] !== void 0 && (typeof d[f[0]] !== "string" || d[f[0]].length > f[1])) e.push(err("badMeta", { field: f[0] }));
        });
        if (typeof d.language !== "string" || !LANG_RE2.test(d.language)) e.push(err("badLanguage"));
        if (isObj5(d.target) && LATER.indexOf(d.target.kind) >= 0) e.push(err("targetLater", { kind: d.target.kind }));
        else if (!isObj5(d.target) || d.target.kind !== "ourdir" || Object.keys(d.target).length !== 1) e.push(err("badTarget"));
        if (!isObj5(d.texts)) e.push(err("badTexts"));
        else {
          Object.keys(d.texts).forEach(function(s) {
            if (SECTIONS.indexOf(s) < 0) return e.push(err("unknownSection", { section: s }));
            var sec = d.texts[s];
            if (!isObj5(sec)) return e.push(err("badSection", { section: s }));
            Object.keys(sec).forEach(function(k) {
              var v = sec[k];
              if (typeof v !== "string") e.push(err("notString", { section: s, key: k }));
              else if (v.length > MAX_TEXT) e.push(err("tooLong", { section: s, key: k }));
              else if (strayOpen(v)) e.push(err("markup", { section: s, key: k }));
            });
          });
        }
        if (d.source !== void 0 && !isObj5(d.source)) e.push(err("badSource"));
        return e.slice(0, 50);
      }
      function parse(text) {
        if (typeof text !== "string") return { ok: false, errors: [err("notText")] };
        if (text.length > MAX_RAW) return { ok: false, errors: [err("tooBig")] };
        var d;
        try {
          d = JSON.parse(text);
        } catch (x) {
          return { ok: false, errors: [err("notJson")] };
        }
        var errors = validate(d);
        if (errors.length) return { ok: false, errors };
        delete d.source;
        if (bytes(JSON.stringify(d)) > MAX_BYTES) return { ok: false, errors: [err("tooBig")] };
        return { ok: true, doc: d };
      }
      function check(doc, ref) {
        var texts = {}, unknown = [], mismatched = [], progress = {}, done = 0, all = 0;
        SECTIONS.forEach(function(s) {
          var src = doc.texts && doc.texts[s] || {}, base = ref[s] || {}, out = {}, have = 0, n = 0;
          Object.keys(src).forEach(function(k) {
            if (!own(base, k)) return unknown.push(s + ":" + k);
            var v = src[k];
            if (typeof v !== "string" || !v.trim()) return;
            if (!sameShape(v, base[k])) return mismatched.push(s + ":" + k);
            out[k] = v;
          });
          Object.keys(base).forEach(function(k) {
            n++;
            if (own(out, k)) have++;
          });
          texts[s] = out;
          progress[s] = n ? have / n : 1;
          done += have;
          all += n;
        });
        progress.total = all ? done / all : 1;
        return { texts, unknown, mismatched, progress };
      }
      function fits(v, english) {
        return typeof v === "string" && !!v.trim() && v.length <= MAX_TEXT && !strayOpen(v) && sameShape(v, english);
      }
      function template(ref, o) {
        var from = o.from ? check(o.from, ref).texts : {};
        var pre = o.prefill || {};
        var texts = {}, source = {};
        SECTIONS.forEach(function(s) {
          texts[s] = {};
          source[s] = {};
          Object.keys(ref[s] || {}).sort().forEach(function(k) {
            var english = ref[s][k];
            var mine = from[s] && from[s][k];
            var given2 = pre[s] && pre[s][k];
            texts[s][k] = mine ? mine : fits(given2, english) ? given2 : "";
            source[s][k] = english;
          });
        });
        return {
          format: FORMAT,
          v: 1,
          id: o.id,
          name: o.name,
          version: o.version || "1.0.0",
          author: o.author || "",
          license: o.license || "CC-BY-4.0",
          language: o.language,
          target: { kind: "ourdir" },
          texts,
          source
        };
      }
      var escapeRe = function(s) {
        return s.replace(/[.*+?^$()|[\]\\{}]/g, "\\$&");
      };
      function pattern(wording) {
        var names = [];
        var body = String(wording).split(/(\{[A-Za-z0-9_]+\})/).map(function(part) {
          var m = /^\{([A-Za-z0-9_]+)\}$/.exec(part);
          if (m) {
            names.push(m[1]);
            return "(.+?)";
          }
          return escapeRe(part);
        });
        return { re: new RegExp("^" + body.join("") + "$"), names };
      }
      function matcher(keys, wordings) {
        var all = [];
        keys.forEach(function(key) {
          [key].concat(wordings.map(function(d) {
            return d[key];
          })).forEach(function(w) {
            if (typeof w === "string" && w) {
              var p = pattern(w);
              all.push({ key, re: p.re, names: p.names });
            }
          });
        });
        return function(text) {
          for (var i = 0; i < all.length; i++) {
            var m = all[i].re.exec(String(text));
            if (m) {
              var vars = {};
              all[i].names.forEach(function(n, j) {
                vars[n] = m[j + 1];
              });
              return { key: all[i].key, vars };
            }
          }
          return null;
        };
      }
      function fill(template2, vars) {
        var out = String(template2);
        Object.keys(vars || {}).forEach(function(k) {
          out = out.split("{" + k + "}").join(vars[k]);
        });
        return out;
      }
      return { matcher, fill, FORMAT, MAX_BYTES, MAX_TEXT, ID_RE: ID_RE3, LANG_RE: LANG_RE2, SECTIONS, markers, tags, validate, parse, check, template };
    });
  }
});

// product/i18n/engine/en.json
var require_en = __commonJS({
  "product/i18n/engine/en.json"(exports2, module2) {
    module2.exports = {
      " -- shared by %{username}": " -- shared by %{username}",
      "${count} song": "${count} song",
      "${count} song_plural": "${count} song_plural",
      "${count} songs": "${count} songs",
      "${count} songs_plural": "${count} songs_plural",
      "%{count} song": "%{count} song",
      "%{count} song_plural": "%{count} song_plural",
      "%{count} songs": "%{count} songs",
      "%{count} songs_plural": "%{count} songs_plural",
      "%{itemcount} items": "%{itemcount} items",
      "%{total} entries": "%{total} entries",
      "%{used} / %{total}": "%{used} / %{total}",
      "%{usernames} are typing\u2026": "%{usernames} are typing\u2026",
      "%{username} is typing\u2026": "%{username} is typing\u2026",
      "%{width}x%{height} pixels": "%{width}x%{height} pixels",
      "(code: %{code})": "(code: %{code})",
      "(roll)": "(roll)",
      "-- shared by %{username}": "-- shared by %{username}",
      ADV: "ADV",
      "Action type": "Action type",
      Active: "Active",
      Adapt: "Adapt",
      "Adapt image to scene": "Adapt image to scene",
      "Adapt scene to image": "Adapt scene to image",
      Add: "Add",
      "Add a custom action": "Add a custom action",
      "Add a roll to the journal entry": "Add a roll to the journal entry",
      "Add roll to content": "Add roll to content",
      "Add text to aura...": "Add text to aura...",
      "Add to playlist": "Add to playlist",
      "Add to scene": "Add to scene",
      "Add to turn order": "Add to turn order",
      "Add turn": "Add turn",
      "Adding song(s) to the playlist, please wait...": "Adding song(s) to the playlist, please wait...",
      Advantage: "Advantage",
      All: "All",
      "All tables": "All tables",
      "All the content of this folder and the folder will be deleted. Are you sure?": "All the content of this folder and the folder will be deleted. Are you sure?",
      "All the content of this folder will be moved to the parent directory and the folder deleted. Are you sure?": "All the content of this folder will be moved to the parent directory and the folder deleted. Are you sure?",
      "All types": "All types",
      "An error occurred": "An error occurred",
      "An error occurred while connecting": "An error occurred while connecting",
      "An error occurred while connecting to the real-time server.": "An error occurred while connecting to the real-time server.",
      "An error occurred while sending your files.": "An error occurred while sending your files.",
      "An error occurred with the initial connection to the playing server.": "An error occurred with the initial connection to the playing server.",
      "Angle \xB0": "Angle \xB0",
      "Animated images": "Animated images",
      Apply: "Apply",
      Archive: "Archive",
      Archived: "Archived",
      "Are you sure you want to clone this craft?": "Are you sure you want to clone this craft?",
      "Are you sure you want to delete this craft?": "Are you sure you want to delete this craft?",
      "Are you sure you want to delete this entry?": "Are you sure you want to delete this entry?",
      "Are you sure you want to delete this folder? All folders and entries inside will be deleted.": "Are you sure you want to delete this folder? All folders and entries inside will be deleted.",
      "Are you sure you want to delete this media?": "Are you sure you want to delete this media?",
      "Are you sure you want to delete this playlist ?": "Are you sure you want to delete this playlist ?",
      "Are you sure you want to delete this playlist?": "Are you sure you want to delete this playlist?",
      "Are you sure you want to delete this recording?": "Are you sure you want to delete this recording?",
      "Are you sure you want to delete this scene ?": "Are you sure you want to delete this scene ?",
      "Are you sure you want to kick this character out of the table?": "Are you sure you want to kick this character out of the table?",
      Arrow: "Arrow",
      "Astronomical Unit": "Astronomical Unit",
      Audio: "Audio",
      Aura: "Aura",
      Auras: "Auras",
      "Avatars & tokens": "Avatars & tokens",
      Back: "Back",
      Background: "Background",
      "Background color": "Background color",
      "Bad Connection": "Bad Connection",
      "Bad Phone": "Bad Phone",
      "Bar 1": "Bar 1",
      "Bar 2": "Bar 2",
      Bars: "Bars",
      "Be careful not to modify the same entry simultaneously, or you may lose content.": "Be careful not to modify the same entry simultaneously, or you may lose content.",
      Blue: "Blue",
      Book: "Book",
      Books: "Books",
      Border: "Border",
      "Border color": "Border color",
      "Bring backward": "Bring backward",
      "Bring forward": "Bring forward",
      "Bring to back": "Bring to back",
      "Bring to front": "Bring to front",
      "Buy this dice set": "Buy this dice set",
      "By right-clicking on items in the list, you will have access to several actions, such as renaming or deleting folders and entries, or creating subfolders.": "By right-clicking on items in the list, you will have access to several actions, such as renaming or deleting folders and entries, or creating subfolders.",
      "Can edit": "Can edit",
      Cancel: "Cancel",
      "Cannot share with this user": "Cannot share with this user",
      Centimeter: "Centimeter",
      "Change Icon": "Change Icon",
      "Change Skin": "Change Skin",
      "Character sheet": "Character sheet",
      Chat: "Chat",
      "Check out <strong>%{partner}</strong> Patreon for more!": "Check out <strong>%{partner}</strong> Patreon for more!",
      "Choose Icon": "Choose Icon",
      "Choose icons pack": "Choose icons pack",
      Circle: "Circle",
      Clear: "Clear",
      "Clear all my drawings": "Clear all my drawings",
      "Clear formula": "Clear formula",
      "Click here to upload medias": "Click here to upload medias",
      "Click on a thumbnail to use that scene.": "Click on a thumbnail to use that scene.",
      "Click to add a custom roll, or drag'n drop an item from your character sheet here.": "Click to add a custom roll, or drag'n drop an item from your character sheet here.",
      "Click to add waypoints, double-click to close the shape.": "Click to add waypoints, double-click to close the shape.",
      "Click to open journal entry %{title}": "Click to open journal entry %{title}",
      "Click to play the sound effect %{title}": "Click to play the sound effect %{title}",
      "Click to roll for %{title}": "Click to roll for %{title}",
      "Click where you want the cone's origin, then move the mouse to change the orientation": "Click where you want the cone's origin, then move the mouse to change the orientation",
      Clone: "Clone",
      "Clone %{craft} into my library": "Clone %{craft} into my library",
      "Clone into my crafts": "Clone into my crafts",
      Close: "Close",
      Color: "Color",
      Cone: "Cone",
      Connect: "Connect",
      "Connect to": "Connect to",
      "Connect to a table": "Connect to a table",
      "Connected!": "Connected!",
      "Connection to the server has been lost.": "Connection to the server has been lost.",
      Console: "Console",
      Content: "Content",
      "Content Crafting": "Content Crafting",
      Continue: "Continue",
      "Convert to door": "Convert to door",
      "Convert to wall": "Convert to wall",
      "Copied to the clipboard!": "Copied to the clipboard!",
      "Copy to clipboard": "Copy to clipboard",
      "Could not reach the table's host.": "Could not reach the table's host.",
      Craft: "Craft",
      "Craft \xB7 %{name}": "Craft \xB7 %{name}",
      "Crafts: %{count}": "Crafts: %{count}",
      "Crafts: %{count}_plural": "Crafts: %{count}_plural",
      Create: "Create",
      "Create a": "Create a",
      "Create a new scene": "Create a new scene",
      "Create journal entry": "Create journal entry",
      "Create my dice roll easily": "Create my dice roll easily",
      "Create new playlist": "Create new playlist",
      "Create scene": "Create scene",
      "Create subfolder": "Create subfolder",
      Custom: "Custom",
      DISADV: "DISADV",
      Date: "Date",
      Default: "Default",
      Delete: "Delete",
      "Delete (%{count})": "Delete (%{count})",
      "Delete (%{count})_plural": "Delete (%{count})_plural",
      "Delete folder": "Delete folder",
      "Delete items": "Delete items",
      "Delete layer": "Delete layer",
      "Delete light": "Delete light",
      "Delete playlist": "Delete playlist",
      "Delete this entry": "Delete this entry",
      "Delete this media": "Delete this media",
      "Delete this media?": "Delete this media?",
      "Deleting....": "Deleting....",
      Demon: "Demon",
      Description: "Description",
      Devil: "Devil",
      "Dice Formula Maker": "Dice Formula Maker",
      "Dice Roller": "Dice Roller",
      "Dice formula": "Dice formula",
      "Dice log": "Dice log",
      "Dice roll": "Dice roll",
      "Disables all door interactions for all players at the table": "Disables all door interactions for all players at the table",
      Disadvantage: "Disadvantage",
      "Display the full map (m)": "Display the full map (m)",
      "Displays the entry on the screen of all the players currently connected and shares it in reading with the whole table.": "Displays the entry on the screen of all the players currently connected and shares it in reading with the whole table.",
      "Do not share status": "Do not share status",
      "Do not start a playlist": "Do not start a playlist",
      "Do you enjoy this content?": "Do you enjoy this content?",
      "Do you like this content? Find more on this partner's website: %{url}": "Do you like this content? Find more on this partner's website: %{url}",
      'Do you really want to delete the "%{name}" folder? All media contained in this folder and its subfolders will be deleted.': 'Do you really want to delete the "%{name}" folder? All media contained in this folder and its subfolders will be deleted.',
      "Do you really want to delete this entry?": "Do you really want to delete this entry?",
      "Dock to the left": "Dock to the left",
      "Dock to the right": "Dock to the right",
      Done: "Done",
      Door: "Door",
      Download: "Download",
      "Drag'n drop me onto a Character Sheet": "Drag'n drop me onto a Character Sheet",
      "Drag'n drop me onto the scene": "Drag'n drop me onto the scene",
      "Drag'n drop onto the QuickBar": "Drag'n drop onto the QuickBar",
      Draw: "Draw",
      Drawing: "Drawing",
      Drawings: "Drawings",
      Drop: "Drop",
      "Dynamic Lighting": "Dynamic Lighting",
      EXPL: "EXPL",
      "EXPL ADD": "EXPL ADD",
      Edit: "Edit",
      "Edit Quick Bar action": "Edit Quick Bar action",
      "Edit avatar": "Edit avatar",
      "Edit craft avatar": "Edit craft avatar",
      "Edit folder": "Edit folder",
      "Elements in this layer cannot be edited": "Elements in this layer cannot be edited",
      "Emits light": "Emits light",
      "Enable collisions": "Enable collisions",
      Enabled: "Enabled",
      "Enter each tag separated by a comma (,).": "Enter each tag separated by a comma (,).",
      "Entries from others": "Entries from others",
      'Error for file "%{filename}" : file too big (maximum size for this type: %{maxsize}MB).)': 'Error for file "%{filename}" : file too big (maximum size for this type: %{maxsize}MB).)',
      'Error for file "%{filename}" : file type "%{mime}" not allowed.': 'Error for file "%{filename}" : file type "%{mime}" not allowed.',
      'Error for file "%{filename}" : this extension "%{ext}" is not allowed.)': 'Error for file "%{filename}" : this extension "%{ext}" is not allowed.)',
      'Error for file "%{filename}": please use the journal to upload pdfs.': 'Error for file "%{filename}": please use the journal to upload pdfs.',
      "Everyone can edit": "Everyone can edit",
      "Everyone can read": "Everyone can read",
      "Everyone can see": "Everyone can see",
      "Ex: 5d6, keeph(2d20)": "Ex: 5d6, keeph(2d20)",
      Exit: "Exit",
      "Explode and sum the dice": "Explode and sum the dice",
      Exploding: "Exploding",
      Explore: "Explore",
      Faster: "Faster",
      "Feel free to visit the partner websites to see more content and thank them!": "Feel free to visit the partner websites to see more content and thank them!",
      "Fill Color": "Fill Color",
      "Filter folders...": "Filter folders...",
      "Find a scene...": "Find a scene...",
      "Find a sound...": "Find a sound...",
      "Find anything...": "Find anything...",
      "Find in %{book}...": "Find in %{book}...",
      "Find in your medias...": "Find in your medias...",
      "Find something in this PDF...": "Find something in this PDF...",
      "Find something\u2026": "Find something\u2026",
      "Find your unlocked content packs - by purchase or Play Pass - in the left column.": "Find your unlocked content packs - by purchase or Play Pass - in the left column.",
      "Fog of War": "Fog of War",
      "Fog of War enabled": "Fog of War enabled",
      Folder: "Folder",
      "Font Size": "Font Size",
      Foot: "Foot",
      Free: "Free",
      "Free drawing": "Free drawing",
      "Free polygon": "Free polygon",
      GM: "GM",
      "GM Only": "GM Only",
      "GM door": "GM door",
      "Genres:": "Genres:",
      "Give a name to this recording...": "Give a name to this recording...",
      "Give control to": "Give control to",
      "Go back": "Go back",
      "Go to page %{page}": "Go to page %{page}",
      "Grant edit": "Grant edit",
      "Grant read": "Grant read",
      "Greater than": "Greater than",
      Green: "Green",
      Grey: "Grey",
      Grid: "Grid",
      "Grid enabled": "Grid enabled",
      Height: "Height",
      "Height in": "Height in",
      Hide: "Hide",
      "Hide by polygon (double click to close the polygon)": "Hide by polygon (double click to close the polygon)",
      "Hide by rectangle": "Hide by rectangle",
      "Hide layer": "Hide layer",
      "Hide the whole map": "Hide the whole map",
      "Hide the whole map?": "Hide the whole map?",
      "High Pitch": "High Pitch",
      "Highlight the grid": "Highlight the grid",
      "I want to <strong>move</strong> all the content in the parent directory": "I want to <strong>move</strong> all the content in the parent directory",
      'I want to permanently <strong class="text-danger">delete</strong> all the content of the folder': 'I want to permanently <strong class="text-danger">delete</strong> all the content of the folder',
      "IRL Dice Roll": "IRL Dice Roll",
      Icon: "Icon",
      Icons: "Icons",
      "If unchecked, no one will see this layer": "If unchecked, no one will see this layer",
      "If you have any, please choose a scene pack on the left.": "If you have any, please choose a scene pack on the left.",
      Images: "Images",
      "Import files": "Import files",
      "Import scene": "Import scene",
      "Importing...": "Importing...",
      Inch: "Inch",
      Intensity: "Intensity",
      "Invalid Youtube URL": "Invalid Youtube URL",
      "Join a table by QR Code": "Join a table by QR Code",
      "Join a table by copying its URL": "Join a table by copying its URL",
      Journal: "Journal",
      "Keep left click down and move to add a wall. Use <kbd>Shift + click</kbd> to add multiple walls.": "Keep left click down and move to add a wall. Use <kbd>Shift + click</kbd> to add multiple walls.",
      "Kick character from the table": "Kick character from the table",
      Kilometer: "Kilometer",
      "Language:": "Language:",
      "Layer %{name}": "Layer %{name}",
      League: "League",
      "Less than": "Less than",
      Light: "Light",
      "Light Blue": "Light Blue",
      "Light Year": "Light Year",
      "Light color": "Light color",
      Line: "Line",
      Linked: "Linked",
      List: "List",
      Loading: "Loading",
      "Loading...": "Loading...",
      "Lock doors": "Lock doors",
      "Lock layer": "Lock layer",
      "Lock lights and walls": "Lock lights and walls",
      Locked: "Locked",
      Main: "Main",
      "Make read only": "Make read only",
      Maximum: "Maximum",
      "Media Manager": "Media Manager",
      Megaphone: "Megaphone",
      Menu: "Menu",
      Meter: "Meter",
      Metrics: "Metrics",
      Mile: "Mile",
      Millimeter: "Millimeter",
      Move: "Move",
      "Move an entry or a folder": "Move an entry or a folder",
      "Move folder to": "Move folder to",
      "Move to layer": "Move to layer",
      Movement: "Movement",
      "Moving....": "Moving....",
      "Multiple selection": "Multiple selection",
      Music: "Music",
      "Music Manager": "Music Manager",
      "My Content": "My Content",
      "My Medias": "My Medias",
      "My Playlists": "My Playlists",
      "My Recordings": "My Recordings",
      "My content": "My content",
      "My entries": "My entries",
      "My own": "My own",
      "My recordings": "My recordings",
      Name: "Name",
      "Name of the craft": "Name of the craft",
      "Name of the folder:": "Name of the folder:",
      "Name of the new playlist...": "Name of the new playlist...",
      "Nautical Mile": "Nautical Mile",
      "Need help with the journal?": "Need help with the journal?",
      "Need more help? Head over to the help center.": "Need more help? Head over to the help center.",
      "New Playlist": "New Playlist",
      "New entry": "New entry",
      "New folder": "New folder",
      "New layer": "New layer",
      "New name of the folder?": "New name of the folder?",
      "New scene": "New scene",
      Next: "Next",
      "Next page": "Next page",
      "No Transformation": "No Transformation",
      "No access": "No access",
      "No documents were found for this query.": "No documents were found for this query.",
      "No entries in the turn order": "No entries in the turn order",
      "No entry found": "No entry found",
      "No media to display, start by sending some!": "No media to display, start by sending some!",
      "No one to share this craft with": "No one to share this craft with",
      "No playlist selected.": "No playlist selected.",
      "No result for this query.": "No result for this query.",
      Node: "Node",
      None: "None",
      "Normal roll": "Normal roll",
      "Nothing - Manual": "Nothing - Manual",
      Ok: "Ok",
      "On layer %{layer}": "On layer %{layer}",
      "Only GMs can clear the chat": "Only GMs can clear the chat",
      "Only GMs can see": "Only GMs can see",
      "Only you and GMs can see": "Only you and GMs can see",
      Opacity: "Opacity",
      Open: "Open",
      "Open craft content": "Open craft content",
      "Open full PDF at page %{page}": "Open full PDF at page %{page}",
      "Open music manager": "Open music manager",
      "Optional...": "Optional...",
      Options: "Options",
      Orange: "Orange",
      "Order by date": "Order by date",
      "Order by name": "Order by name",
      Other: "Other",
      "PDF Library": "PDF Library",
      "PDFs: %{count}": "PDFs: %{count}",
      "PDFs: %{count}_plural": "PDFs: %{count}_plural",
      "Page %{page}": "Page %{page}",
      'Page %{page} - "%{term}" found <strong>%{time} times</strong>': 'Page %{page} - "%{term}" found <strong>%{time} times</strong>',
      'Page %{page} - "%{term}" found <strong>once</strong>': 'Page %{page} - "%{term}" found <strong>once</strong>',
      "Page not found": "Page not found",
      Parsec: "Parsec",
      "Partners Content": "Partners Content",
      Phone: "Phone",
      "Ping (p)": "Ping (p)",
      Pink: "Pink",
      "Play music when loading": "Play music when loading",
      "Play now": "Play now",
      "Play this song now": "Play this song now",
      Players: "Players",
      "Players can draw on this layer": "Players can draw on this layer",
      "Players cannot go trough walls": "Tokens cannot go trough walls",
      "Please act appropriately.": "Please act appropriately.",
      "Please provide a formula.": "Please provide a formula.",
      "Point of Interest": "Point of Interest",
      "Pointer at beginning": "Pointer at beginning",
      "Pointer size": "Pointer size",
      Popout: "Popout",
      "Prevent players from playing sounds": "Prevent players from playing sounds",
      Previous: "Previous",
      "Previous page": "Previous page",
      "Publication:": "Publication:",
      "Publisher:": "Publisher:",
      "Quick Bar": "Quick Bar",
      "Quick Bar Slot #%{index}": "Quick Bar Slot #%{index}",
      "Quick Play YouTube video URL...": "Quick Play YouTube video URL...",
      "Quick Play one of your playlist...": "Quick Play one of your playlist...",
      "Quick search ambiances & songs...": "Quick search ambiances & songs...",
      Radius: "Radius",
      "Radius in": "Radius in",
      "Range (%{unit})": "Range (%{unit})",
      Read: "Read",
      "Read full PDF": "Read full PDF",
      "Read only": "Read only",
      "Reconnected to servers": "Reconnected to servers",
      "Record Voice": "Record Voice",
      "Record your voice (up to 2 minutes) to play it back to your players later.": "Record your voice (up to 2 minutes) to play it back to your players later.",
      "Recordings are counted in your disk space quota.": "Recordings are counted in your disk space quota.",
      Rectangle: "Rectangle",
      Red: "Red",
      "Regular polygon": "Regular polygon",
      Remove: "Remove",
      "Remove from the playlist": "Remove from the playlist",
      "Remove icon": "Remove icon",
      "Remove sound": "Remove sound",
      "Remove sound %{sound}": "Remove sound %{sound}",
      Rename: "Rename",
      "Rename folder": "Rename folder",
      "Rename playlist": "Rename playlist",
      Repeat: "Repeat",
      Restore: "Restore",
      Reveal: "Reveal",
      "Reveal an entry": "Reveal an entry",
      "Reveal by polygon (double click to close the polygon)": "Reveal by polygon (double click to close the polygon)",
      "Reveal by rectangle": "Reveal by rectangle",
      "Reveal the whole map": "Reveal the whole map",
      "Reveal the whole map?": "Reveal the whole map?",
      "Reveal to everyone": "Reveal to everyone",
      "Revealed!": "Revealed!",
      Revoke: "Revoke",
      "Right click to edit": "Right click to edit",
      Robot: "Robot",
      Roll: "Roll",
      "Roll Maker": "Roll Maker",
      "Roll for GM & You": "Roll for GM & You",
      "Roll for GM only": "Roll for GM only",
      "Roll table": "Roll table",
      "Root folder": "Root folder",
      Rulers: "Rulers",
      "Ruleset:": "Ruleset:",
      SFX: "SFX",
      Save: "Save",
      "Save & apply": "Save & apply",
      "Save custom action": "Save custom action",
      "Save to my library": "Save to my library",
      "Saving...": "Saving...",
      Scene: "Scene",
      "Scene Explorer": "Scene Explorer",
      "Scene parameters": "Scene parameters",
      "Scenes browser": "Scenes browser",
      "Scenes provided by %{author}.": "Scenes provided by %{author}.",
      "Scenes provided by %{link}.": "Scenes provided by %{link}.",
      "Search a track or paste YouTube URL...": "Search a track or paste YouTube URL...",
      "Search in your PDF library...": "Search in your PDF library...",
      "Search in your crafts...": "Search in your crafts...",
      "Search in your music library...": "Search in your music library...",
      "Search my medias": "Search my medias",
      "Search results": "Search results",
      "Select a playlist": "Select a playlist",
      Selected: "Selected",
      Selection: "Selection",
      "Send a message...": "Send a message...",
      "Send a private message": "Send a private message",
      "Send files": "Send files",
      Set: "Set",
      Settings: "Settings",
      Share: "Share",
      "Share in the journal": "Share in the journal",
      "Share status with everyone at the table": "Share status with everyone at the table",
      "Share stuff": "Share stuff",
      "Share this bar with everyone at the table": "Share this bar with everyone at the table",
      "Share with everyone": "Share with everyone",
      "Shared by %{username}": "Shared by %{username}",
      "Shared with me": "Shared with me",
      "Show layer": "Show layer",
      "Show the entry on the player's screen now. The player must be connected. This will also share the entry with them in reading mode.": "Show the entry on the player's screen now. The player must be connected. This will also share the entry with them in reading mode.",
      "Show to everyone": "Show to everyone",
      "Show/Hide": "Show/Hide",
      Shuffle: "Shuffle",
      Sides: "Sides",
      "Simulate light": "Simulate light",
      Size: "Size",
      "Size in": "Size in",
      "Snap to grid": "Snap to grid",
      "Some <em>Let's Role</em> partners have agreed to share their content for free with the whole community! So, you can use these high definition media without restrictions.": "Some <em>Let's Role</em> partners have agreed to share their content for free with the whole community! So, you can use these high definition media without restrictions.",
      "Someone at the table used an": "Someone at the table used an",
      Sort: "Sort",
      "Sound Categories": "Sound Categories",
      "Sound Library": "Sound Library",
      "Start recording": "Start recording",
      Status: "Status",
      "Stop recording": "Stop recording",
      Tags: "Tags",
      Template: "Template",
      Text: "Text",
      "Text color": "Text color",
      "Text status...": "Text status...",
      Texture: "Texture",
      "The GM is not connected": "The GM is not connected",
      "The content of this entry is an uploaded PDF, so you can't edit it directly.": "The content of this entry is an uploaded PDF, so you can't edit it directly.",
      "The craft {name} is not shared anymore with user {username}": "The craft {name} is not shared anymore with user {username}",
      "The craft {name} is now shared with user {username}": "The craft {name} is now shared with user {username}",
      "The journal is where you save documents, write notes, share images and more.": "The journal is where you save documents, write notes, share images and more.",
      "The new playlist has been created!": "The new playlist has been created!",
      "The recording has been saved to your library!": "The recording has been saved to your library!",
      "There is no layer available to draw on.": "There is no layer available to draw on.",
      "They gave the following reason:": "They gave the following reason:",
      "This action cannot be cancelled": "This action cannot be cancelled",
      "This folder is shared with:": "This folder is shared with:",
      "This layer will only be visible by GMs": "This layer will only be visible by GMs",
      "This layer will receive character's tokens": "This layer will receive character's tokens",
      "This table": "This table",
      'This track is provided by <a href="%{url}" target="_blank">%{name}</a>': 'This track is provided by <a href="%{url}" target="_blank">%{name}</a>',
      Thumbnails: "Thumbnails",
      Title: "Title",
      "Title of the playlist": "Title of the playlist",
      'To share a whole folder, right-click on the list, then "Share". You can then give read access to the whole table or just some people. All subfolders and entries in that folder will be shared.': 'To share a whole folder, right-click on the list, then "Share". You can then give read access to the whole table or just some people. All subfolders and entries in that folder will be shared.',
      "To share just one entry, you can use the same process as for folders, or to have finer permissions: open the document, then open the share tab. From this screen, you can choose who to share it with, and if it is possible to modify the document.": "To share just one entry, you can use the same process as for folders, or to have finer permissions: open the document, then open the share tab. From this screen, you can choose who to share it with, and if it is possible to modify the document.",
      "Token configuration": "Token configuration",
      Tokens: "Tokens",
      Tools: "Tools",
      "Transport them here now.": "Transport them here now.",
      Troll: "Troll",
      "Turn order": "Turn order",
      "Type: Hex": "Type: Hex",
      "Type: Square": "Type: Square",
      "Unable to copy to the clipboard.": "Unable to copy to the clipboard.",
      Underwater: "Underwater",
      Undo: "Undo",
      Unit: "Unit",
      "Unknown duration": "Unknown duration",
      "Unlock layer": "Unlock layer",
      Unlocked: "Unlocked",
      Untitled: "Untitled",
      "Untitled %{type}": "Untitled %{type}",
      "Untitled playlist": "Untitled playlist",
      "Untitled recording": "Untitled recording",
      "Untitled scene": "Untitled scene",
      Update: "Update",
      Upload: "Upload",
      "Upload PDF": "Upload PDF",
      Use: "Use",
      "Use <kbd>Shift + click</kbd> to create waypoints.": "Use <kbd>Shift + click</kbd> to create waypoints.",
      "Use the Roll Maker": "Use the Roll Maker",
      "Use the context menu!": "Use the context menu!",
      "User: %{username}": "User: %{username}",
      Value: "Value",
      Videos: "Videos",
      View: "View",
      "View all crafts": "View all crafts",
      "View all emojis": "View all emojis",
      Visible: "Visible",
      "Visible by the GM & you only": "Visible by the GM & you only",
      "Visible by the GM only": "Visible by the GM only",
      "Vision (%{unit})": "Vision (%{unit})",
      Wall: "Wall",
      "We have <strong>%{total}</strong> results with the term <em>%{term}</em>.": "We have <strong>%{total}</strong> results with the term <em>%{term}</em>.",
      Weight: "Weight",
      "What name do you want to give to this media?": "What name do you want to give to this media?",
      Width: "Width",
      "Width in": "Width in",
      Wobble: "Wobble",
      "X-Card": "X-Card",
      Yard: "Yard",
      Yellow: "Yellow",
      "You are about to delete the folder <strong>%{name}</strong>": "You are about to delete the folder <strong>%{name}</strong>",
      'You can force an entry to be displayed on the screen of players who are currently logged in. This will also share the entry in read-only mode. To do this, right-click on the entry > Reveal, or, for more control, open the entry and go to the "Sharing" tab.': 'You can force an entry to be displayed on the screen of players who are currently logged in. This will also share the entry in read-only mode. To do this, right-click on the entry > Reveal, or, for more control, open the entry and go to the "Sharing" tab.',
      'You can send a PDF or an image and turn it into a journal entry in the process with the "Upload" button. The usual weight limits apply (32MB for PDFs, 16MB for images), and the files will count against your disk space.': 'You can send a PDF or an image and turn it into a journal entry in the process with the "Upload" button. The usual weight limits apply (32MB for PDFs, 16MB for images), and the files will count against your disk space.',
      "You can simply drag and drop entries and folders in the list to reorganize them as you wish!": "You can simply drag and drop entries and folders in the list to reorganize them as you wish!",
      "You do not have any unlocked scene packs at this time.": "You do not have any unlocked scene packs at this time.",
      "You don't have any character sheet skins at the moment. Visit our website to buy some!": "You don't have any character sheet skins at the moment. Visit our website to buy some!",
      "You don't have any dice skins at the moment. Visit our website to buy some!": "You don't have any dice skins at the moment. Visit our website to buy some!",
      "You haven't joined any tables yet.": "You haven't joined any tables yet.",
      "You rolled %{roll}. Roll again?": "You rolled %{roll}. Roll again?",
      "You will see the other players' dice rolls and your own will be sent to them.": "You will see the other players' dice rolls and your own will be sent to them.",
      "Your X-Card has been sent to the GM.": "Your X-Card has been sent to the GM.",
      'Your own entries and files are saved in the "My Content" tab, while those that other players at the table share with you are in the "Shared with Me" tab.': 'Your own entries and files are saved in the "My Content" tab, while those that other players at the table share with you are in the "Shared with Me" tab.',
      "Your players are on a different scene.": "Your players are on a different scene.",
      "Youtube video URL or playlist URL...": "Youtube video URL or playlist URL...",
      Zoom: "Zoom",
      "Zoom in": "Zoom in",
      "Zoom out": "Zoom out",
      d10: "d10",
      d100: "d100",
      d12: "d12",
      d20: "d20",
      d4: "d4",
      d6: "d6",
      d8: "d8",
      equals: "equals",
      h: "h",
      "is equal to": "is equal to",
      m: "m",
      s: "s",
      success: "success",
      successes: "successes",
      "used out of": "used out of",
      "{name} has joined the table": "{name} has joined the table",
      "{name} has left the table": "{name} has left the table",
      "{name} shared the document {doc} with you.": "{name} shared the document {doc} with you.",
      "{name} shared the folder {folder} with you.": "{name} shared the folder {folder} with you."
    };
  }
});

// apps/desktop/i18n/en.json
var require_en2 = __commonJS({
  "apps/desktop/i18n/en.json"(exports2, module2) {
    module2.exports = {
      "app.lang": "en",
      "app.name": "Ourdir",
      "app.quit": "Quit",
      "builder.affichageEntreeEstVide": "An entry's display is empty: the entries will show without content.",
      "builder.afficherTotalCote": "Show the total next to it",
      "builder.afficherValeurMax": "Show \u201Cvalue / max\u201D",
      "builder.ajouteMoinsOnglet": "Add at least one tab.",
      "builder.ajouteMoinsOption": "Add at least one option.",
      "builder.alignementInvalide": "Invalid alignment.",
      "builder.alignementNombre": "Number alignment",
      "builder.aucune": "None",
      "builder.badSize": "Invalid sheet size (300\u20131600 \xD7 200\u20131600).",
      "builder.caracteristiques": "Attributes",
      "builder.carte": "Card",
      "builder.caseCocher": "Checkbox",
      "builder.cellulesJaugeVont0": "A gauge's cells go from 0 to 40.",
      "builder.centre": "Centred",
      "builder.cetteFicheNPas": "This sheet has no main view.",
      "builder.champ": "Field",
      "builder.champEffetDoitEtre": "The effect's field must be a field.",
      "builder.champTexte": "Text field",
      "builder.chiffreCle": "Key figure",
      "builder.cleOngletInvalide": "Invalid tab key.",
      "builder.cleOptionInvalide": "Invalid option key.",
      "builder.cleSeriePastillesEst": "The key of a series of pips is limited to 12 characters (it names each pip).",
      "builder.cliquableLanceJet": "Clickable (makes a roll)",
      "builder.cliquableSansJetClic": "Clickable without a roll: the click will do nothing.",
      "builder.colonneParCaracteristiqueNom": "One column per attribute: a clickable name that rolls, a value, a computed modifier.",
      "builder.colonneSePlaceDans": "A column goes in a row.",
      "builder.colonnesSepareesParVirgules": "Columns (separated by commas)",
      "builder.columns.overflow": "This row's columns add up to {total}/12: they will wrap.",
      "builder.commentJetGagne": "How the roll wins",
      "builder.competences": "Skills",
      "builder.content.unreadable": "The sheet's content is unreadable.",
      "builder.contenuOngletIllisible": "Unreadable tab content.",
      "builder.context.noName": "\u201C#\u201D without a name.",
      "builder.context.notField": "\u201C#{name}\u201D is not a field of this list's form.",
      "builder.context.readOnly": "\u201C#{name}\u201D is used only in the display of a repeatable list's entry.",
      "builder.defenseCompareeDoitEtre": "The compared defence must be a field.",
      "builder.degats": "Damage",
      "builder.depenseRessourceChaqueClic": "Spends a resource on each click (a number field)",
      "builder.depenseRessourceNEst": "Spending a resource is only possible outside a repeatable list.",
      "builder.depenserRessourceDemandeTexte": "Spending a resource needs a clickable text with a roll.",
      "builder.dispositionEntrees": "Layout of the entries",
      "builder.dispositionInvalide": "Invalid layout.",
      "builder.donneJaugeChampMaximum": "Give the gauge a maximum field or a fixed maximum (1 to 9999).",
      "builder.donneNomMoins2": "Give the system a name of at least 2 characters.",
      "builder.droite": "Right",
      "builder.duel.notNumber": "The compared defence must be a number field of the sheet, outside a list (\u201C{field}\u201D is not one). The target has the same sheet: it must have this field.",
      "builder.duelComparerJetCe": "Duel: compare the roll with this field of the target (a defence)",
      "builder.duelDemandeTexteCliquable": "A duel needs a clickable text with a roll.",
      "builder.duelNEstPossible": "A duel is only possible outside a repeatable list.",
      "builder.effect.breaks": "An effect makes a computation invalid: {why}",
      "builder.effect.notComputed": "An effect adds to a computed number field, outside a list (\u201C{field}\u201D is not one). Make this field computed first.",
      "builder.effetNEstPossible": "An effect is only possible outside a repeatable list.",
      "builder.effetQuandCaseEst": "Effect: when the box is ticked, adds to this computed field",
      "builder.entreesCoteCote": "Entries side by side",
      "builder.entreesSousAutre": "Entries one under the other",
      "builder.equipement": "Equipment",
      "builder.equipment": "Equipment",
      "builder.forceDexteriteConstitutionIntelligence": "Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma",
      "builder.formula": "Formula",
      "builder.formula.emptyRef": "{what}: an \u201C@\u201D reference without a name.",
      "builder.formula.emptyVar": "{what}: a \u201C$\u201D variable without a name.",
      "builder.formula.error": "{what}: {error}",
      "builder.formula.inList": "{what}: \u201C@{id}\u201D is in a repeatable list; use \u201C#{id}\u201D in an entry's display.",
      "builder.formula.noRef": "{what}: \u201C@{id}\u201D does not exist.",
      "builder.formula.noValue": "{what}: \u201C@{id}\u201D has no value (it is a {kind}).",
      "builder.formula.noVar": "{what}: the variable \u201C${id}\u201D does not exist.",
      "builder.formulaireEditionCetteListe": "This list's edit form is empty: nothing can be typed in.",
      "builder.formuleTropLongue": "Formula too long.",
      "builder.gauche": "Left",
      "builder.geante": "Giant",
      "builder.iconeClasseFontAwesome": "Icon (Font Awesome class)",
      "builder.iconeJet": "Roll icon",
      "builder.identifiantSystemeInvalideMinuscules": "Invalid system id: lowercase letters, digits and hyphens (2 to 40 characters).",
      "builder.identite": "Identity",
      "builder.ifAttendIfCondition": "\u201Cif\u201D expects: if(condition, then, else).",
      "builder.ilFautFichePrincipale": "A main sheet is needed.",
      "builder.imbricationTropProfonde": "Nesting too deep.",
      "builder.imported": "Imported system",
      "builder.invalidSystem": "Invalid system: {why}",
      "builder.jaugeNePeutPas": "A gauge cannot be in a repeatable list.",
      "builder.jetContientCaracteresNon": "The roll holds characters that are not allowed.",
      "builder.jetDoitAtteindreDefense": "The roll must reach the defence (d20: AC, dodge, parry\u2026)",
      "builder.jetDoitResterSous": "The roll must stay under the value (percentage)",
      "builder.jetLanceClic": "Roll made on click",
      "builder.jetLanceClicEx": "Roll made on click (e.g. 1d20+@strength)",
      "builder.key.invalid": "Invalid key \u201C{id}\u201D: letters, digits and _ (40 at most).",
      "builder.key.reserved": "The key \u201C{id}\u201D is reserved for Ourdir.",
      "builder.key.taken": "Key \u201C{id}\u201D already taken.",
      "builder.key.twice": "Key \u201C{id}\u201D used twice.",
      "builder.largeurColonneVa1": "A column's width goes from 1 to 12.",
      "builder.largeurOngletsVerticauxSur": "Width of the vertical tabs (out of 12)",
      "builder.largeurOngletsVerticauxVa": "The width of the vertical tabs goes from 1 to 11.",
      "builder.largeurSur12": "Width (out of 12)",
      "builder.libelle": "Label",
      "builder.libelleDeuxiemeChamp": "Label of the second field",
      "builder.libelleNiveau": "Label of the level",
      "builder.libelleOptionVideTrop": "Option label empty or too long.",
      "builder.ligneCoteCote": "In a row (side by side)",
      "builder.ligneSePlaceDans": "A row goes in a column, a container or straight in the sheet.",
      "builder.listeCompetences": "Skill list",
      "builder.listeDontTuNommes": "A list whose columns you name (up to 5): contacts, allies, treasures, clues\u2026",
      "builder.listeObjetsAvecQuantite": "A list of items with quantity and weight.",
      "builder.listeQueJoueurRemplit": "A list the player fills in: name and bonus. A click on an entry rolls 1d20 + bonus.",
      "builder.listeRepetable": "Repeatable list",
      "builder.listeRepetableNePeut": "A repeatable list cannot go inside another repeatable list.",
      "builder.masquerBoutonAjouter": "Hide the \u201CAdd\u201D button",
      "builder.maximumChampNombre": "Maximum (a number field)",
      "builder.maximumDepart": "Starting maximum",
      "builder.maximumFixe": "\u2026or a fixed maximum",
      "builder.maximumInvalide": "Invalid maximum.",
      "builder.maximumJaugeDoitEtre": "A gauge's maximum must be a number field of the sheet, outside a list.",
      "builder.metierPapier": "Loom (paper)",
      "builder.minimumDepasseMaximum": "The minimum is above the maximum.",
      "builder.minimumInvalide": "Invalid minimum.",
      "builder.miseFormeMarkdownGras": "Markdown formatting (**bold**, *italic*, :icon:)",
      "builder.mySystem": "My system",
      "builder.nomBonusAttaqueDegats": "Name, attack bonus and damage. A click rolls 1d20 + bonus; the damage shows next to it.",
      "builder.nomClasseLigneeProfession": "Name, class (or lineage, profession...) and level on one row.",
      "builder.nomDansBarreRapide": "Name in the quick bar",
      "builder.nomNiveauEffetChaque": "Name, level and effect of each spell. The player adds their spells one by one.",
      "builder.nomOrigineDescriptionChaque": "Name, origin and description of each ability, feat or talent.",
      "builder.nomRoleAttitude": "Name, Role, Attitude",
      "builder.nomVariableInvalide": "Invalid variable name.",
      "builder.nombre": "Number",
      "builder.nombrePastilles": "Number of pips",
      "builder.nombrePastillesVa1": "The number of pips goes from 1 to 20.",
      "builder.nomsSeparesParVirgules": "Names (separated by commas)",
      "builder.ongletsGaucheVerticaux": "Tabs on the left (vertical)",
      "builder.options.duplicate": "Option \u201C{id}\u201D is duplicated.",
      "builder.options.tooMany": "Too many options ({max} at most).",
      "builder.parDefaut": "Default",
      "builder.parentheseFermanteAttendue": "Closing parenthesis expected.",
      "builder.parse.incomplete": "Incomplete formula.",
      "builder.parse.openAfter": "Opening parenthesis expected after \u201C{name}\u201D.",
      "builder.parse.unexpected": "Unexpected character \u201C{char}\u201D.",
      "builder.pastillesCocher": "Pips to tick",
      "builder.pastillesNePeuventPas": "Pips cannot be in a repeatable list.",
      "builder.peutEtreGlisseDans": "Can be dragged into the quick bar",
      "builder.pileSousAutre": "In a pile (one under the other)",
      "builder.placeInColumn": "\u201C{what}\u201D goes in a column or a container.",
      "builder.pointsVieManaMunitions": "Hit points, mana, ammunition...: current value out of the maximum, in big figures.",
      "builder.portraitNePeutPas": "The portrait cannot be in a repeatable list.",
      "builder.prop.tooLong": "\u201C{name}\u201D too long ({max} characters at most).",
      "builder.quantite": "Quantity",
      "builder.quantiteDepensee1Si": "Quantity spent (1 if empty)",
      "builder.quantiteDepenseeDoitEtre": "The quantity spent must be a whole number from 1 to 99.",
      "builder.quotesMarkup": "a text in quotes cannot contain angle brackets or an ampersand.",
      "builder.referenceVideDansJet": "Empty reference in the roll.",
      "builder.regle": "Rule",
      "builder.reserveMjDoitEtre": "\u201CReserved for the GM\u201D must be yes or no.",
      "builder.reserveMjJoueursNe": "Reserved for the GM: players cannot change it",
      "builder.reserveMjNeS": "\u201CReserved for the GM\u201D only applies to the fields the player fills in.",
      "builder.ressourceDepenseeDoitEtre": "The spent resource must be a field.",
      "builder.roll.context": "The roll: {problem}",
      "builder.roll.inList": "The roll names \u201C@{id}\u201D: this field is in a repeatable list, use \u201C#{id}\u201D in an entry's display.",
      "builder.roll.noField": "The roll names \u201C@{id}\u201D: this field does not exist or has no value.",
      "builder.roll.noVar": "The roll names the variable \u201C${id}\u201D: it does not exist.",
      "builder.rollTooLong": "Roll too long ({max} at most).",
      "builder.sensComparaisonEstInconnu": "The direction of the comparison is unknown.",
      "builder.seulEspaceEstAccepte": "Only the space is accepted as a separator (no tab nor line break).",
      "builder.seulPortraitParFiche": "A single portrait per sheet.",
      "builder.seuleFichePrincipaleOnglets": "A single main sheet (tabs and lists have their own sub-views, made automatically).",
      "builder.skills": "Skills",
      "builder.skin.badId": "{label}: invalid id (lowercase letters, digits and _, 24 at most).",
      "builder.skin.badName": "{label}: empty name or too long (40 characters at most).",
      "builder.skin.duplicate": "Skin \u201C{id}\u201D is duplicated.",
      "builder.skin.tooMany": "Too many skins ({max} at most).",
      "builder.spend.notNumber": "The spent resource must be a typed number field, outside a list (\u201C{field}\u201D is not one).",
      "builder.stressBlessuresEchecsMort": "Stress, wounds, death saves...: a series of pips of which you tick the number wanted.",
      "builder.style.unknown": "Unknown style \u201C{name}\u201D.",
      "builder.tabNoTable": "Tab (without a tab table)",
      "builder.table.notFound": "Table \u201C{id}\u201D not found.",
      "builder.tabs.duplicate": "Tab \u201C{id}\u201D is duplicated.",
      "builder.tabs.tooMany": "Too many tabs ({max} at most).",
      "builder.tailleTexteInconnue": "Unknown text size.",
      "builder.textTooLong": "Text too long ({max} at most).",
      "builder.texte": "Text",
      "builder.texteCote": "Text next to it",
      "builder.texteFormuleSiCalcule": "Text (or formula if computed)",
      "builder.titreGrandeZoneTexte": "A title and a large text area.",
      "builder.titreJet": "Title of the roll",
      "builder.titreOngletVideTrop": "Tab title empty or too long.",
      "builder.tooManyNodes": "Too many elements ({max} at most).",
      "builder.toutesOptionsVisibles": "All options visible",
      "builder.unknownBlock": "Unknown block: {id}",
      "builder.unknownComponent": "Unknown component: {name}",
      "builder.unsupported": "This sheet uses elements the editor does not handle yet: {list}.",
      "builder.valeurAjouteeNombreFormule": "Value added (a number, or a formula like @level)",
      "builder.valeurCalculee": "Computed value",
      "builder.valeurChampNombre": "Value (a number field)",
      "builder.valeurEffetEstTrop": "The effect's value is too long (120 characters at most).",
      "builder.valeurEstBonusDirectement": "The value is the bonus itself, roll 1d20 + value",
      "builder.valeurEstPourcentage0": "The value is a percentage (0 to 100), roll 1d100 to compare with the value",
      "builder.valeurJaugeDoitEtre": "A gauge's value must be a number field of the sheet, outside a list.",
      "builder.valeurParDefaut": "Default value",
      "builder.valeurParDefautDoit": "The default value must be a number.",
      "builder.valeurParDefautFormule": "Default value (or formula if computed)",
      "builder.var.duplicate": "Variable \u201C{id}\u201D is duplicated.",
      "builder.var.label": "Variable \u201C{id}\u201D",
      "builder.versionInvalideEx1": "Invalid version (e.g. 1.0.0).",
      "builder.warn.rightGroup": "\u201Ca {op} b {op2} c\u201D is computed by the game as \u201Ca {op} (b {op2} c)\u201D: add parentheses.",
      "builder.zoneTexte": "Text area",
      "builderTheme.adhesif": "Tape",
      "builderTheme.aereEcartEntreCartes": "Airy (a gap between the cards)",
      "builderTheme.afficheGrasCondense": "Poster (bold condensed)",
      "builderTheme.alignementBandeauInvalide": "Invalid banner alignment.",
      "builderTheme.angleDegrade0360": "Gradient angle: 0 to 360.",
      "builderTheme.assets.badName": "File {name}: invalid name.",
      "builderTheme.assets.badType": "File {name}: type not accepted (fonts woff2, woff, ttf, otf; images png, jpeg, webp).",
      "builderTheme.assets.contentMismatch": "File {name}: the content does not match the announced type.",
      "builderTheme.assets.duplicate": "Embedded file {name} is duplicated.",
      "builderTheme.assets.fontTooBig": "File {name} too heavy ({max} KB at most for a font).",
      "builderTheme.assets.imageTooBig": "File {name} too heavy ({max} KB at most for an image).",
      "builderTheme.assets.tooMany": "Too many embedded files ({max} at most).",
      "builderTheme.assets.total": "The embedded files exceed {max} MB in total.",
      "builderTheme.assets.typeMismatch": "File {name}: inconsistent type.",
      "builderTheme.assets.unreadable": "File {name}: unreadable content.",
      "builderTheme.aucun": "None",
      "builderTheme.aucune": "None",
      "builderTheme.badColor": "Invalid colour \u201C{name}\u201D (format #rrggbb).",
      "builderTheme.balayageEcran": "Screen scan lines",
      "builderTheme.bandeauTexte": "Banner (text)",
      "builderTheme.cadreInconnu": "Unknown frame.",
      "builderTheme.casseTitresInvalide": "Invalid title case.",
      "builderTheme.centre": "Centred",
      "builderTheme.centreeEntiere": "Centred, whole",
      "builderTheme.champsTexte": "Fields (text)",
      "builderTheme.choisisImageFondParmi": "Choose a background image among the embedded files.",
      "builderTheme.cibleThemeInconnue": "Unknown theme target.",
      "builderTheme.couleurMotifInvalide": "Invalid pattern colour.",
      "builderTheme.courierPrimeMachineEcrire": "Courier Prime (typewriter)",
      "builderTheme.crochetsVisee": "Targeting brackets",
      "builderTheme.decalee": "Offset",
      "builderTheme.degrade": "Gradient",
      "builderTheme.encadre": "Framed",
      "builderTheme.enqueteNoirPapier": "Investigation (noir, paper)",
      "builderTheme.espacementInconnu": "Unknown spacing.",
      "builderTheme.fichiersEmbarquesIllisibles": "Unreadable embedded files.",
      "builderTheme.fondFiche": "Sheet background",
      "builderTheme.gauche": "Left",
      "builderTheme.geometrique": "Geometric",
      "builderTheme.grimoireMedievalFantasy": "Grimoire (medieval fantasy)",
      "builderTheme.hudNeon": "Neon HUD",
      "builderTheme.identifiantFichierEmbarqueInvalide": "Invalid embedded file id.",
      "builderTheme.identifiantSkinInvalide": "Invalid skin id.",
      "builderTheme.invalid": "Invalid theme: {why}",
      "builderTheme.machineEcrire": "Typewriter",
      "builderTheme.manuscrite": "Handwritten",
      "builderTheme.metierPapier": "Loom (paper)",
      "builderTheme.modeImageFondInconnu": "Unknown background image mode.",
      "builderTheme.moderneSysteme": "Modern (system)",
      "builderTheme.neonCyberpunk": "Neon (cyberpunk)",
      "builderTheme.nomThemeInvalide": "Invalid theme name.",
      "builderTheme.ombreInconnue": "Unknown shadow.",
      "builderTheme.ornementTitresInconnu": "Unknown title ornament.",
      "builderTheme.playfairDisplayElegant": "Playfair Display (elegant)",
      "builderTheme.pointille": "Dotted",
      "builderTheme.policeTexteInconnue": "Unknown text font.",
      "builderTheme.policeTitresInconnue": "Unknown title font.",
      "builderTheme.range.borderWidth": "Border width: {min} to {max} px.",
      "builderTheme.range.chamfer": "Cut corners: {min} to {max} px.",
      "builderTheme.range.fontSize": "Text size: {min} to {max} px.",
      "builderTheme.range.patternOpacity": "Pattern opacity: {min} to {max} %.",
      "builderTheme.range.patternSize": "Pattern size: {min} to {max} px.",
      "builderTheme.range.spacing": "Letter spacing: {min} to {max}.",
      "builderTheme.remplitFiche": "Fills the sheet",
      "builderTheme.repeteeMosaique": "Tiled",
      "builderTheme.secondeCouleurFondInvalide": "Invalid second background colour.",
      "builderTheme.serreCartesSeTouchent": "Tight (the cards touch)",
      "builderTheme.specialEliteMachineUsee": "Special Elite (worn typewriter)",
      "builderTheme.styleBandeauInconnu": "Unknown banner style.",
      "builderTheme.styleBlocsStatInconnu": "Unknown stat block style.",
      "builderTheme.styleBordureInconnu": "Unknown border style.",
      "builderTheme.styleChampsInconnu": "Unknown field style.",
      "builderTheme.styleEtiquetteJetInconnu": "Unknown roll tag style.",
      "builderTheme.styleJaugeInconnu": "Unknown gauge style.",
      "builderTheme.texte": "Text",
      "builderTheme.texteDiscret": "Quiet text",
      "builderTheme.themeIllisible": "Unreadable theme.",
      "builderTheme.typeFondInconnu": "Unknown background kind.",
      "builderTheme.valeursCalculees": "Computed values",
      "dialog.firewall.failed": "Windows Firewall could not be updated. Accept the administrator prompt (UAC) and try again.",
      "dialog.friends.added": "{name} was added to your friends.",
      "dialog.friends.copied": "Your friend code is copied. Send it to whoever you want (Discord, SMS\u2026).",
      "dialog.hostFailed.title": "Host failed to start",
      "dialog.internet.cancel": "Cancel",
      "dialog.internet.confirm": "Open to the Internet",
      "dialog.internet.detail": "The port will be reachable from the Internet. Only keys you invite can connect and all traffic is encrypted (TLS, certificate pinned in the invitation): the host answers nobody else. Your router must forward the port, or your IPv6 must be reachable.",
      "dialog.internet.message": "Open the port to the whole Internet?",
      "dialog.internet.title": "Expose the table to the Internet",
      "dialog.invite.copied": "Invitation for {name} copied",
      "dialog.invite.detail": "It is encrypted for {name} only: send it any way you like (Discord, SMS\u2026). Nobody else can read the address inside. Valid for 7 days.",
      "dialog.invite.localWarning": 'Your network access is set to "Local": your friend will not be able to reach you. Change it in Settings, then create the invitation again.',
      "dialog.join.unknownSender": "This invitation comes from someone who is not in your friends. Add their friend code (Friends menu) first.",
      "err.bundle.absolute": "absolute path (Foundry's own)",
      "err.bundle.badType": "File type that cannot be bundled: {name}.",
      "err.bundle.dynamicImport": "Dynamic import() is forbidden in a module.",
      "err.bundle.entryMissing": "{entry}: file not found.",
      "err.bundle.entryOutside": "Entry point outside the module.",
      "err.bundle.external": "external dependency",
      "err.bundle.fichierIntrouvable": "File not found.",
      "err.bundle.fileTooBig": "File too big: {name}.",
      "err.bundle.notFound": "File not found: \u201C{path}\u201D.",
      "err.bundle.outside": "Import \u201C{path}\u201D outside the module's folder.",
      "err.bundle.tooBig": "The bundled module is over 4 MB.",
      "err.bundle.tooMany": "Too many files to bundle.",
      "err.bundle.unresolved": "Unresolved import \u201C{path}\u201D: {hint}. Only the module's files (relative paths) are bundled.",
      "err.catalog.badPath": "Path refused.",
      "err.catalog.devName": "Local catalogue (development)",
      "err.catalog.expired": "The online catalogue has expired: it is no longer updated.",
      "err.catalog.indexRefused": "Index refused: {why}",
      "err.catalog.noTiers": "No tiers file: everything is shown as Community.",
      "err.catalog.older": "The online catalogue is older than a version already seen (rollback refused).",
      "err.client.fichierTropVolumineux": "File too large.",
      "err.compat.canvas": "The map is drawn differently (Konva). Use scene.draw for overlays.",
      "err.compat.chatCommand": "Chat commands through chat.command.",
      "err.compat.chatMessage": "Simple messages; no custom template rendering.",
      "err.compat.config": "A few keys, read only.",
      "err.compat.dataModel": "The sheets' data model is the game system's.",
      "err.compat.dependency": "dependency: {id}",
      "err.compat.dialog": "Simple dialog boxes.",
      "err.compat.dynamicImport": "Loading code on the fly: forbidden.",
      "err.compat.escape": "The module cannot leave its isolated space.",
      "err.compat.eval": "Running text as code: forbidden.",
      "err.compat.events": "A few token, scene and sheet events.",
      "err.compat.foundryUi": "Interface elements of Foundry's own.",
      "err.compat.hooks": "Engine events.",
      "err.compat.i18n": "The module's translations.",
      "err.compat.jquery": "Available only in the module's panels, not on the game page.",
      "err.compat.libHotkeys": "Depends on Foundry's interface.",
      "err.compat.libLibWrapper": "Foundry's engine patching library: replaced here by the interceptors (engine.intercept).",
      "err.compat.libSocketlib": "Direct communication between clients: not supported.",
      "err.compat.libWrapper": "Replaced by the interceptors (engine.intercept).",
      "err.compat.macros": "Foundry macros are not run.",
      "err.compat.modules": "List of installed modules.",
      "err.compat.noNetwork": "No network access for modules.",
      "err.compat.noSystem": "No access to the system.",
      "err.compat.notifications": "On-screen notifications.",
      "err.compat.readOnly": "Read only, of a simplified view.",
      "err.compat.renders": "Only the chat and sheet renders are exposed.",
      "err.compat.roll": "The engine's dice syntax: most simple formulas work.",
      "err.compat.settings": "The module's settings, kept locally.",
      "err.compat.sockets": "No direct communication between clients.",
      "err.compat.storage": "Use the module's storage (storage.local).",
      "err.compat.system": "The system's name and version only.",
      "err.compat.templates": "Templates usable in the module's panels.",
      "err.compat.user": "Name, id and GM status only.",
      "err.compat.utils": "Data utilities.",
      "err.download.external": "The file is hosted outside the catalogue: download refused.",
      "err.download.failed": "Download failed: {why}",
      "err.download.hash": "The file's fingerprint does not match the catalogue's: download refused.",
      "err.download.morePermissions": "The package asks for more permissions than the catalogue announces ({list}): installation refused.",
      "err.download.otherId": "The archive holds \u201C{found}\u201D while the catalogue announces \u201C{announced}\u201D: installation refused.",
      "err.download.otherPublisher": "The package is signed by another publisher than the catalogue's: installation refused.",
      "err.download.otherVersion": "The archive is version {found} while the catalogue announces {announced}: installation refused.",
      "err.download.size": "The file's size does not match the catalogue's: download refused.",
      "err.download.unsigned": "This package is not signed: the catalogue only accepts signed packages.",
      "err.fetch.credentials": "The address must not contain credentials.",
      "err.fetch.httpsOnly": "Only https:// addresses are accepted.",
      "err.fetch.noAnswer": "The server does not answer.",
      "err.fetch.port": "Port not allowed.",
      "err.fetch.private": "Address not allowed (local or reserved network).",
      "err.fetch.status": "The server answered {status}.",
      "err.firewall.scriptPareFeuIntrouvable": "firewall script not found",
      "err.format.badAccess": "{id}: unknown access.",
      "err.format.badDate": "{id} {version}: invalid publication date.",
      "err.format.badDep": "{id}: invalid dependency.",
      "err.format.badEntryId": "Invalid entry id: {id}.",
      "err.format.badKind": "{id}: unknown kind.",
      "err.format.badPublisherKey": "{id}: invalid publisher key.",
      "err.format.badSha": "{id} {version}: invalid fingerprint.",
      "err.format.badSize": "{id} {version}: invalid size.",
      "err.format.badStatus": "{id} {version}: unknown status.",
      "err.format.badSystem": "{id}: invalid target system.",
      "err.format.badUrl": "{id} {version}: download address refused.",
      "err.format.badVersion": "{id}: invalid version number.",
      "err.format.badVersionKey": "{id} {version}: invalid version key.",
      "err.format.depLoop": "{id}: dependencies in a loop.",
      "err.format.duplicate": "Duplicate entry: {id}.",
      "err.format.expires": "Invalid expiry date.",
      "err.format.expiresFirst": "The index expires before it is generated.",
      "err.format.generated": "Invalid generation date.",
      "err.format.indexIllisibleJsonInvalide": "Unreadable index (invalid JSON).",
      "err.format.indexTropVolumineux": "Index too large.",
      "err.format.needStore": "{id}: paid content must give its shop.",
      "err.format.noEntries": "Missing entry list.",
      "err.format.noName": "{id}: name missing.",
      "err.format.noVersion": "{id}: no valid version.",
      "err.format.notIndex": "This is not an Ourdir catalogue index.",
      "err.format.sequence": "Invalid sequence number.",
      "err.format.tooMany": "Too many entries.",
      "err.format.tooManyDeps": "{id}: too many dependencies.",
      "err.format.tooManyVersions": "{id}: too many versions.",
      "err.format.unknownPublisher": "Unknown publisher",
      "err.format.unreadable": "Unreadable entry.",
      "err.format.version": "Index version not supported (update the app).",
      "err.foundry.compendiumTropVolumineux": "Compendium too large.",
      "err.foundry.leveldb": "LevelDB format (Foundry v11+): not supported yet.",
      "err.foundry.missing": "File not found: probably a compendium in LevelDB format (Foundry v11+), not supported yet.",
      "err.foundry.outside": "Path outside the module.",
      "err.foundry.tooManyDocs": "Compendium too big (more than {max} documents).",
      "err.handshake.silent": "The host did not answer: it cannot be reached, or your key is not invited to this table.",
      "err.install.archiveTropVolumineuse": "Archive too large.",
      "err.install.badJson": "module.json is not valid JSON.",
      "err.install.badSignature": "Unreadable signature: ignored.",
      "err.install.bundling": "file bundling",
      "err.install.cannotBundle": "The module's files could not be bundled:\n- {list}",
      "err.install.cannotRun": "This module cannot run: {why}",
      "err.install.choose": "Choose a module folder or a .zip archive.",
      "err.install.conflicts": "In conflict with: {list}",
      "err.install.couldNotBundle": "its files could not be bundled.",
      "err.install.filesNotBundled": "The module's files were not bundled.",
      "err.install.foundrySystem": "A Foundry system cannot be enabled here: it will be converted into a native sheet with the System Builder.",
      "err.install.manifestRefused": "Manifest refused:\n- {list}",
      "err.install.missingFiles": "Files declared but missing:\n- {list}",
      "err.install.moduleIntrouvable": "Module not found.",
      "err.install.moduleJsonTropVolumineux": "module.json too large.",
      "err.install.moduleTropVolumineux": "Module too large.",
      "err.install.neededBy": "Needed by: {list}",
      "err.install.needsDep": "Depends on \u201C{id}\u201D, which must be installed and enabled.",
      "err.install.needsDepVersion": "Depends on \u201C{id}\u201D {version} or later.",
      "err.install.newerInstalled": "A newer version ({version}) is already installed.",
      "err.install.noManifest": "module.json (or system.json) not found.",
      "err.install.noManifestAtRoot": "module.json (or system.json) not found at the root of the folder or the archive.",
      "err.install.notAsked": "Permission the module did not ask for: {list}",
      "err.install.notBundled": "bundling not done.",
      "err.install.permissionInconnueIndisponible": "Unknown or unavailable permission.",
      "err.install.publisher": "Publisher",
      "err.install.skipped": "{n} file(s) ignored for safety.",
      "err.install.skippedFolder": "{path}/ (folder ignored)",
      "err.install.skippedType": "{path} (file type not allowed)",
      "err.install.tampered": "The signature does not match the content: the package was changed.",
      "err.install.tooMany": "Too many files in the module.",
      "err.licensed.refusal": "This content is for sale: open it from Ourdir's catalogue.",
      "err.main.aucuneAdresse": "No address.",
      "err.main.aucuneVersionInstallable": "No installable version.",
      "err.main.badHost": "Invalid address: a domain name or an IP, without http:// or port.",
      "err.main.badSystem": "This system is not valid: {why}",
      "err.main.badTheme": "This theme is not valid: {why}",
      "err.main.catalogExpired": "The catalogue has expired: nothing can be installed from it until it is updated.",
      "err.main.entryGone": "This entry no longer exists in the catalogue.",
      "err.main.importFailed": "Import failed.",
      "err.main.inspectionExpired": "This check has expired. Start again.",
      "err.main.installFailed": "Installation failed.",
      "err.main.keyFirst": "Create your publisher key first.",
      "err.main.liteKeeps": "A Lite table keeps its sheet.",
      "err.main.liteSheet": "This sheet belongs to the Lite tables.",
      "err.main.modeInconnu": "Unknown mode.",
      "err.main.nextKeyFirst": "Create and save the new key first.",
      "err.main.noCert": "The local host has not created its certificate yet.",
      "err.main.notAnnounced": "The file is not the one the catalogue announces: installation refused.",
      "err.main.notForSale": "This content is for sale: selling is not open yet.",
      "err.main.notInstallable": "This kind of content cannot be installed yet.",
      "err.main.notRunning": "The table is not running.",
      "err.main.notSystem": "This file is not an Ourdir system.",
      "err.main.openCatalog": "Open the catalogue first.",
      "err.main.revoked": "This version was withdrawn from the catalogue.",
      "err.main.startFirst": "Start a table first.",
      "err.main.tableAmiIntrouvable": "Table or friend not found.",
      "err.main.tableInconnue": "Unknown table.",
      "err.main.tableIntrouvable": "Table not found.",
      "err.main.themeTooBig": "Theme too large (64 KB at most).",
      "err.main.unknownError": "unknown error",
      "err.main.unreadableTheme": "This theme reads badly: {why}",
      "err.main.urlMismatch": "This address no longer matches the installed module.",
      "err.manifest.api": 'tabletop.api must be "{api}".',
      "err.manifest.badCompendium": "compendium refused: {path}",
      "err.manifest.badId": "Invalid id: lowercase letters, digits, - and _ (2 to 64 characters).",
      "err.manifest.badLanguage": "language refused: {path}",
      "err.manifest.badScript": "script refused: {path}",
      "err.manifest.badStyle": "stylesheet refused: {path}",
      "err.manifest.moduleVideAucunScript": "empty module: no script, style, language nor compendium.",
      "err.manifest.needStyle": 'The module has stylesheets: it must ask for the "ui.style" permission.',
      "err.manifest.notObject": "module.json must be a JSON object.",
      "err.manifest.sockets": "The module declares sockets: communication between clients is not supported.",
      "err.manifest.tabletopEntryManquantInvalide": "tabletop.entry missing or invalid.",
      "err.manifest.versionInvalideEx1": "invalid version (e.g. 1.2.0).",
      "err.pack.empty": "The folder is empty.",
      "err.remote.cannotFetch": "The manifest could not be fetched:\n- {list}",
      "err.remote.noDownload": "This manifest does not say where to download the module (\u201Cdownload\u201D field).",
      "err.remote.notManifest": "This address does not return a valid JSON manifest.",
      "err.remote.otherId": "The archive holds \u201C{found}\u201D while the manifest announces \u201C{announced}\u201D: installation refused.",
      "err.remote.otherVersion": "The manifest announces version {announced} but the archive holds {found}.",
      "err.remote.paste": "Paste the address (https://\u2026) of a module.json or a system.json, or of a GitHub or GitLab repository.",
      "err.roles.nameTaken": "This name is already taken by another role.",
      "err.roles.needName": "A role needs a name.",
      "err.roles.noRole": "This role does not exist.",
      "err.roles.notEditable": "This role does not exist (or it is a base role, which is not changed).",
      "err.roles.tooMany": "Too many roles ({max} at most).",
      "err.roles.unknown": "Unknown role.",
      "err.safeFetch.adresseInvalide": "Invalid address.",
      "err.safeFetch.redirectionInvalide": "Invalid redirection.",
      "err.safeFetch.tropRedirections": "Too many redirections.",
      "err.share.badKeyFile": "Invalid key file.",
      "err.share.keyExists": "A publisher key already exists.",
      "err.share.nextWaiting": "A new key is already waiting for the change to be published.",
      "err.share.noKey": "No publisher key.",
      "err.share.noNext": "No new key.",
      "err.share.otherKey": "Another publisher key is already there: confirm to replace it.",
      "err.share.unreachable": "The share service cannot be reached.",
      "err.share.unreadableAnswer": "Unreadable answer from the service ({status}).",
      "err.signing.fichierSignatureIllisible": "Unreadable signature file.",
      "err.signing.fichierSignatureInvalide": "Invalid signature file.",
      "err.signing.fichierSignatureTropVolumineux": "Signature file too large.",
      "err.signing.mismatch": "The signature does not match the content ({what}).",
      "err.signing.noKeys": "No catalogue key is pinned: the catalogue cannot be checked.",
      "err.signing.unknownKey": "{What} carries the signature of a key the app does not know.",
      "err.signing.whatCatalog": "the catalogue",
      "err.signing.whatDelegation": "the delegation",
      "err.signing.whatSuccession": "the key replacement",
      "err.signing.whatTiers": "the tiers file",
      "err.social.noIdentity": "Identity not initialised.",
      "err.succession.already": "{key}: already succeeds another key.",
      "err.succession.badDelegation": "Invalid replacement delegation.",
      "err.succession.early": "Replacement signed before its delay was over.",
      "err.succession.fork": "{key}: already replaced (fork refused).",
      "err.succession.guarded": "An Ourdir, official or seller key is only replaced by the root.",
      "err.succession.invalid": "Invalid key replacement.",
      "err.succession.invalidDates": "Invalid key replacement (dates).",
      "err.succession.invalidHow": "Invalid key replacement (how).",
      "err.succession.invalidKeys": "Invalid key replacement (keys).",
      "err.succession.keys": "Invalid replacement keys.",
      "err.succession.noDelegation": "Replacement by e-mail without its delegation.",
      "err.succession.recovery": "Recovery delegation: {why}",
      "err.succession.tooBig": "Key replacement too large.",
      "err.succession.tooLong": "{key}: a chain of more than {max} links.",
      "err.succession.unreadable": "Unreadable key replacement.",
      "err.succession.waiting": "Waiting: this replacement will be signed on {date} at the earliest.",
      "err.systems.badId": "Invalid system id.",
      "err.systems.badIdInFile": "Invalid system id in the file.",
      "err.systems.exists": "A system \u201C{id}\u201D already exists.",
      "err.systems.fromCatalog": "This system comes from the catalogue: it serves your tables, but is never edited, exported or shared.",
      "err.systems.inUse": "One of your tables uses this system: change it or delete the table first.",
      "err.systems.newer": "This file comes from a newer version of the app.",
      "err.systems.notFound": "System not found.",
      "err.systems.notSystem": "This file is not a Tabletop system.",
      "err.systems.skins": "The skins produce a refused style (too heavy?).",
      "err.systems.tooBig": "The system is too large.",
      "err.systems.unreadable": "This file is not a Tabletop system (unreadable JSON).",
      "err.tls.pinMismatch": "The host's certificate does not match the invitation: connection refused.",
      "err.trust.ciKey": "Invalid CI key.",
      "err.trust.endsFirst": "The delegation ends before it starts.",
      "err.trust.expired": "The delegation has expired.",
      "err.trust.invalid": "Invalid delegation.",
      "err.trust.notYet": "The delegation is not valid yet.",
      "err.trust.older": "Delegation older than one already seen (rollback refused).",
      "err.trust.serial": "Invalid delegation number.",
      "err.trust.tiersExpired": "The tiers file has expired.",
      "err.trust.tiersExpiry": "Invalid tiers file (expiry).",
      "err.trust.tiersInvalid": "Invalid tiers file.",
      "err.trust.tiersInvalidWhy": "Invalid tiers file: {why}",
      "err.trust.tiersList": "Invalid tiers file (a list is malformed).",
      "err.trust.tiersOlder": "Tiers file older than one already seen (rollback refused).",
      "err.trust.tiersSequence": "Invalid tiers file (sequence).",
      "err.trust.tiersTooBig": "Tiers file too large.",
      "err.trust.tiersUnreadable": "Unreadable tiers file.",
      "err.trust.tooBig": "Delegation too large.",
      "err.trust.unreadable": "Unreadable delegation.",
      "err.upnp.tooBig": "answer too large",
      "err.userThemes.badId": "Invalid theme id.",
      "err.userThemes.exists": "A theme \u201C{id}\u201D already exists.",
      "err.userThemes.fromCatalog": "This theme comes from the catalogue: it serves your tables, but is never edited, exported or shared.",
      "err.userThemes.notFound": "Theme not found.",
      "err.worlds.name": "Give the table a name of at least 2 characters.",
      "err.worlds.notBackup": "This file is not a table backup.",
      "err.worlds.notBackupOurdir": "This file is not an Ourdir table backup.",
      "err.worlds.restored": "Restored table",
      "err.worlds.tooBig": "This table is too large for a single-file backup (over 1 GB).",
      "err.worlds.unknownSystem": "Unknown game system.",
      "err.worlds.unreadable": "Unreadable backup: {why}",
      "err.zip.archiveZipInvalide": "Invalid ZIP archive.",
      "err.zip.central": "Corrupt ZIP archive (central directory).",
      "err.zip.corrupt": "Corrupt or too large data: {name}",
      "err.zip.crc": "Invalid checksum: {name}",
      "err.zip.dangerous": "Dangerous path in the archive: {name}",
      "err.zip.data": "Corrupt ZIP archive (data).",
      "err.zip.duplicate": "Duplicate file in the archive: {name}",
      "err.zip.encrypted": "Encrypted archive: refused.",
      "err.zip.fileTooBig": "File too big: {name}",
      "err.zip.local": "Corrupt ZIP archive (local header).",
      "err.zip.method": "Compression method not supported ({method}): {name}",
      "err.zip.size": "Inconsistent size: {name}",
      "err.zip.symlink": "Symbolic link refused: {name}",
      "err.zip.tooBig": "Archive too large once decompressed.",
      "err.zip.tooManyEntries": "Archive too big: {n} files (at most {max}).",
      "menu.app": "Ourdir",
      "menu.edit": "Edit",
      "menu.edit.copy": "Copy",
      "menu.edit.cut": "Cut",
      "menu.edit.paste": "Paste",
      "menu.edit.redo": "Redo",
      "menu.edit.selectAll": "Select all",
      "menu.edit.undo": "Undo",
      "menu.friends": "Friends",
      "menu.friends.addFromClipboard": "Add a friend (code on the clipboard)",
      "menu.friends.copyCode": "Copy my friend code",
      "menu.friends.invite": "Invite to my table",
      "menu.friends.join": "Join a table (invitation on the clipboard)",
      "menu.friends.none": "No friends yet",
      "menu.friends.remove": "Remove",
      "menu.friends.uninvite": "Remove from my table",
      "menu.help": "Help",
      "menu.help.logs": "Open the logs folder",
      "menu.home": "Home",
      "menu.host": "Host",
      "menu.host.devTools": "DevTools",
      "menu.host.network": "Network access",
      "menu.host.network.internet": "Internet (remote players)",
      "menu.host.network.lan": "Local network (LAN)",
      "menu.host.network.local": "Local (this PC only)",
      "menu.host.openUserData": "Open userData",
      "menu.host.reachability": "Reachability (can my friends reach me?)",
      "menu.host.start": "Start host",
      "menu.host.stop": "Stop host",
      "menu.tables": "Tables",
      "menu.tables.forget": "Forget",
      "menu.tables.mine": "My table",
      "menu.tables.none": "No table joined yet",
      "menu.tables.open": "Open",
      "menu.view": "View",
      "menu.view.fullscreen": "Full screen",
      "menu.view.resetZoom": "Actual size",
      "menu.view.zoomIn": "Zoom in",
      "menu.view.zoomOut": "Zoom out",
      "offline.body": "The embedded host is not running. Use Host \u2192 Start host (127.0.0.1:3010).",
      "offline.hint": "Menu: Start host \xB7 Stop \xB7 Open userData \xB7 DevTools",
      "offline.lead": "The embedded host is not running yet.",
      "offline.statusLabel": "Host status",
      "offline.statusRunning": "Running",
      "offline.statusStopped": "Stopped",
      "offline.title": "Server not started",
      "offline.userDataLabel": "userData",
      "pkg.identity.badCode": "Invalid friend code.",
      "pkg.identity.badCodeCopy": "Invalid friend code (incomplete or altered copy).",
      "pkg.identity.noEncryption": "Encrypted identity: the system's encryption is unavailable.",
      "pkg.identity.ownCode": "That is your own friend code.",
      "pkg.identity.unreadableCode": "Unreadable friend code.",
      "pkg.invite.badRecipient": "Invalid recipient key.",
      "pkg.invite.badSignature": "Invalid invitation signature.",
      "pkg.invite.expired": "This invitation has expired. Ask for a new one.",
      "pkg.invite.incomplete": "Incomplete invitation, or of an unknown version.",
      "pkg.invite.invitationInvalide": "Invalid invitation.",
      "pkg.invite.invitationInvalideAdresse": "Invalid invitation (address).",
      "pkg.invite.invitationInvalideAdresses": "Invalid invitation (addresses).",
      "pkg.invite.invitationInvalideDate": "Invalid invitation (date).",
      "pkg.invite.invitationInvalideEmpreinte": "Invalid invitation (fingerprint).",
      "pkg.invite.notForYou": "This invitation is not meant for your identity, or it is damaged.",
      "pkg.invite.notInvitation": "This is not an invitation.",
      "pkg.roles.cogm": "Co-GM",
      "pkg.roles.gm": "GM",
      "pkg.roles.player": "Player",
      "pkg.roles.trusted": "Trusted player",
      "pkg.vision.bright": "Bright light",
      "pkg.vision.cone": "Cone: between 30 and 360.",
      "pkg.vision.dark": "Darkvision",
      "pkg.vision.dim": "Dim light",
      "pkg.vision.filter": "Filter: unknown.",
      "pkg.vision.filterRange": "Filter range",
      "pkg.vision.lightColor": "Light: colour #rrggbb.",
      "pkg.vision.lightFlicker": "Light: unknown flicker.",
      "pkg.vision.lightNotObject": "Light: an object is expected.",
      "pkg.vision.lightOn": "Light: on or not.",
      "pkg.vision.lightPreset": "Light: unknown preset.",
      "pkg.vision.needDistance": "{name}: a distance is expected.",
      "pkg.vision.notAllowed": "Vision: reserved for the GM and for whoever may set the vision of their sheets.",
      "pkg.vision.notObject": "Vision: an object is expected.",
      "pkg.vision.range": "{name}: between 0 and {max}.",
      "pkg.vision.sight": "Sight",
      "pkg.vision.unit": "{name}: unit ft, m or squares.",
      "pkg.vision.whole": "Vision: the settings are written whole.",
      "reach.cgnat": "Your router sits behind your provider's shared address (the router sees {ip}, which is not public). The port cannot be opened over IPv4: use IPv6 if you have it, or ask your provider for a public IPv4.",
      "reach.contact.never": "No proof yet: nobody has connected from the Internet since startup. Send a friend an invitation and ask them to join: it is the only real test.",
      "reach.contact.ok": "Proof: a friend connected from the Internet ({when}). Your table is reachable.",
      "reach.host.configured": "Address configured by hand: {host} (used in invitations).",
      "reach.ipv6.available": "You have a public IPv6 address ({addr}). It is used in invitations. Make sure your router firewall allows inbound IPv6 on port {port} (often off by default); only a real friend connection proves it.",
      "reach.lan.ok": "LAN mode: friends on the same network can join at {addr}. Switch to Internet mode to play remotely.",
      "reach.mode.local": 'Network access is "Local": nobody but you can connect. Switch to Local network (same network) or Internet in Settings.',
      "reach.title": "Your table's reachability",
      "reach.unreachable": 'No path from the Internet detected: no open port, no public IPv6, no configured address. Open port {port} in your router, or set "publicHost" (DDNS name or IPv4) in host.json.',
      "reach.upnp.mapped": "Your router opened port {port} automatically (UPnP). Your public address is {ip}: it goes into invitations.",
      "reach.upnp.none": 'No UPnP router found. Forward TCP port {port} to this PC by hand, then set your public address ("publicHost" in host.json).',
      "reach.upnp.refused": "Your router was found but refuses to open the port. Do it by hand: forward TCP port {port} to this PC.",
      "tableTheme.accentFil": "Accent (the thread)",
      "tableTheme.advice": "{advice} ({ratio} for {min}).",
      "tableTheme.badBase": "Base: one of the built-in themes.",
      "tableTheme.badCapitals": "Capitals: yes or no.",
      "tableTheme.badColor": "Colour \u201C{name}\u201D: #rrggbb (lowercase).",
      "tableTheme.badCorners": "Corners: vifs, doux or ronds.",
      "tableTheme.badCut": "Cut: aucune, legere or marquee.",
      "tableTheme.badDescription": "Description: 300 characters at most.",
      "tableTheme.badFilter": "Offered filter: an existing screen filter.",
      "tableTheme.badFont": "Font \u201C{name}\u201D: a font from the library.",
      "tableTheme.badGlow": "Glow: aucun, doux or neon.",
      "tableTheme.badGrain": "Grain: 0 to 3.",
      "tableTheme.badId": "Invalid id.",
      "tableTheme.badKnots": "Beads: ronds, losanges or carres.",
      "tableTheme.badName": "Name: 2 to 40 characters.",
      "tableTheme.badTabs": "Tabs: droits or coupes.",
      "tableTheme.badTexture": "Texture: aucune, tissage, lignes or papier.",
      "tableTheme.badVersion": "Version: x.y.z.",
      "tableTheme.ceNEstPas": "This is not a theme.",
      "tableTheme.colors": "Colours",
      "tableTheme.contrast.inkPaper": "Ink on the paper",
      "tableTheme.contrast.mutedPanel": "Muted text on the panels",
      "tableTheme.contrast.textBg": "Text on the background",
      "tableTheme.contrast.textPanel": "Text on the panels",
      "tableTheme.effects": "Effects",
      "tableTheme.encreSeLitMal": "the ink reads badly on the paper: darken the ink or lighten the paper",
      "tableTheme.encreSurPapier": "Ink on the paper",
      "tableTheme.fonts": "Fonts",
      "tableTheme.noColors": "Colours missing.",
      "tableTheme.noEffects": "Effects missing.",
      "tableTheme.noFonts": "Fonts missing.",
      "tableTheme.noShape": "Shape missing.",
      "tableTheme.notTheme": "This file is not an Ourdir theme (format).",
      "tableTheme.reussite": "Success",
      "tableTheme.shape": "Shape",
      "tableTheme.styleProduitParCe": "The style this theme makes is refused.",
      "tableTheme.texte": "Text",
      "tableTheme.texteAttenue": "Muted text",
      "tableTheme.texteAttenueSeLit": "the muted text reads badly on the panels: lighten it",
      "tableTheme.texteSeLitMal": "the text reads badly on the background: lighten the text or darken the background",
      "tableTheme.texteSeLitMal2": "the text reads badly on the panels: lighten the text or darken the panels",
      "tableTheme.theme": "Theme",
      "tableTheme.tooBig": "Theme too large (64 KB at most).",
      "tableTheme.tooLong80": "{name}: 80 characters at most.",
      "tableTheme.unknownField": "{where}: unknown field \u201C{name}\u201D.",
      "tableTheme.unreadable": "This file is not an Ourdir theme (unreadable JSON).",
      "ui.access.closed": "Your router did not open the door: your friends cannot reach you for now.",
      "ui.access.firewall": "Windows did not allow the app: your friends cannot reach you.",
      "ui.access.idle": "Ready. Your friends' access sets itself up when you launch a table.",
      "ui.access.ipv6Only": "Your router did not open the door by itself. Friends can still reach you if it allows IPv6.",
      "ui.access.lan": "Friends on the same network (Wi\u2011Fi, Ethernet) can join you.",
      "ui.access.off": "Only you can play for now. Turn on Internet access to invite friends.",
      "ui.access.proven": "A friend already connected from the Internet: everything works.",
      "ui.access.reachable": "Your router opened the door by itself (address {ip}). Send a friend an invitation to confirm.",
      "ui.access.reachableChecked": "Your friends can join you. Your router opened the door by itself (address {ip}).",
      "ui.access.relay": "Your friends can join you through the relay ({relay}): nothing to open on your router.",
      "ui.access.relayDown": "The relay ({relay}) is not answering right now, retrying. Friends can still join directly if your router lets them.",
      "ui.access.sharedAddress": "Your provider shares your address with other customers: your friends cannot reach you for now.",
      "ui.access.sharedAddressIpv6": "Your provider shares your regular address with other customers, but your IPv6 may be enough.",
      "ui.app.tagline": "Your tabletop RPG tables, hosted at home.",
      "ui.builder.add": "Add",
      "ui.builder.addColumn": "Add a column",
      "ui.builder.addHint": "Click to add, or drag onto the sheet",
      "ui.builder.addOption": "Add an option",
      "ui.builder.addTab": "Add a tab",
      "ui.builder.addVariable": "Add a variable",
      "ui.builder.author": "Author",
      "ui.builder.back": "Systems",
      "ui.builder.base": "Starting point",
      "ui.builder.baseHint": "You can change everything: add, remove and rearrange fields.",
      "ui.builder.blank": "Blank sheet",
      "ui.builder.blocksBack": "Back to blocks",
      "ui.builder.blocksHint": "Pre-built pieces of sheet (attributes, lists, pips...). They go into the selected column, container or tab, then edit like anything else.",
      "ui.builder.blocksInsert": "Insert into the sheet",
      "ui.builder.blocksTitle": "Ready-made blocks",
      "ui.builder.cannotSave": "Fix the errors listed under the sheet first.",
      "ui.builder.canvasEmpty": "The sheet is empty: add a row, then fields.",
      "ui.builder.checksErrors": "{n} error(s) to fix",
      "ui.builder.checksOk": "No errors: the sheet is ready to be saved.",
      "ui.builder.copySuffix": "(copy)",
      "ui.builder.create": "Create a system",
      "ui.builder.delete": "Delete",
      "ui.builder.deleteConfirm": "Permanently delete the system \u201C{name}\u201D?",
      "ui.builder.description": "Description",
      "ui.builder.dice.advantage": "Advantage: 2d20, keep the best",
      "ui.builder.dice.disadvantage": "Disadvantage: 2d20, keep the worst",
      "ui.builder.dice.exploding": "Exploding d6 (roll again on the maximum)",
      "ui.builder.dice.keep3": "4d6, keep the best 3",
      "ui.builder.dice.min3": "d6 with a minimum of 3",
      "ui.builder.dice.percent": "d100 (percentage)",
      "ui.builder.down": "Move down",
      "ui.builder.dropHere": "Drop a field here",
      "ui.builder.duplicate": "Duplicate",
      "ui.builder.edit": "Edit",
      "ui.builder.export": "Export",
      "ui.builder.exportFail": "Export failed.",
      "ui.builder.exportTitle": "Export the system",
      "ui.builder.exported": "System exported: {path}",
      "ui.builder.formulaHint": "@name = a field\u2019s value, $name = a variable. Example: floor((@strength-10)/2)",
      "ui.builder.height": "Height (px)",
      "ui.builder.id": "Technical key",
      "ui.builder.idHint": "Used in formulas (@key). It is made from the name; changing it updates the formulas.",
      "ui.builder.import": "Import a system\u2026",
      "ui.builder.importFail": "Import failed.",
      "ui.builder.importTitle": "Import a system",
      "ui.builder.imported": "System \u201C{name}\u201D imported.",
      "ui.builder.insertDice": "Insert a die or roll rule\u2026",
      "ui.builder.insertRef": "Insert a value\u2026",
      "ui.builder.keyInvalid": "Invalid key: letters, digits and _ (40 at most).",
      "ui.builder.keyTaken": "This key is already used.",
      "ui.builder.leaveConfirm": "Leave without saving your changes?",
      "ui.builder.license": "License",
      "ui.builder.loadFail": "Could not load this system.",
      "ui.builder.more": "More options",
      "ui.builder.multiline": "Several lines",
      "ui.builder.needName": "Give it a name of at least 2 characters.",
      "ui.builder.option": "Option",
      "ui.builder.optionId": "Option key",
      "ui.builder.optionLabel": "Displayed text",
      "ui.builder.options": "Options",
      "ui.builder.paletteHint": "Select a column or a field on the sheet: the new element goes inside it or right after it.",
      "ui.builder.redoHint": "Redo (Ctrl+Y)",
      "ui.builder.remove": "Remove",
      "ui.builder.repeaterDisplay": "Display of each entry",
      "ui.builder.repeaterDisplayHint": "What the player sees in the list. \u201C#field\u201D gives the entry\u2019s value.",
      "ui.builder.repeaterForm": "Entry form",
      "ui.builder.repeaterFormHint": "The fields to fill when adding or editing an entry.",
      "ui.builder.repeaterHint": "Each entry has its own values. In the display, write \u201C#field\u201D (not \u201C@field\u201D) to read them; rolls too: 1d20+#damage.",
      "ui.builder.roll": "Roll",
      "ui.builder.rollShown": "{title}: {text}",
      "ui.builder.rowHint": "A row holds columns; fields go inside columns.",
      "ui.builder.save": "Save",
      "ui.builder.saved": "Saved",
      "ui.builder.savedToast": "\u201C{name}\u201D is saved: you can use it for a table.",
      "ui.builder.sheetName": "Sheet name",
      "ui.builder.sheetTitle": "Sheet settings",
      "ui.builder.skinAdd": "Add a skin",
      "ui.builder.skinCopy": "(copy)",
      "ui.builder.skinDefault": "default",
      "ui.builder.skinDelete": "Delete",
      "ui.builder.skinDeleteConfirm": "Delete the skin \u201C{name}\u201D? Characters who picked it will wear the default one.",
      "ui.builder.skinDown": "Move down",
      "ui.builder.skinDuplicate": "Duplicate",
      "ui.builder.skinName": "Skin name",
      "ui.builder.skinNew": "New skin",
      "ui.builder.skinNone": "No skin: the sheet keeps the game's look.",
      "ui.builder.skinPick": "Skin",
      "ui.builder.skinUp": "Move up",
      "ui.builder.skinsFull": "{n} skins at most.",
      "ui.builder.skinsHint": "Skins dress the sheet and its rolls. Each character picks one, among these only; the first is the default. The preview on the left shows the skin picked here.",
      "ui.builder.start": "Open the editor",
      "ui.builder.startFrom": "Start from \u201C{name}\u201D",
      "ui.builder.sysId": "System identifier",
      "ui.builder.sysIdHint": "Set at creation, cannot be changed afterwards.",
      "ui.builder.sysIdLocked": "Locked: existing tables rely on it.",
      "ui.builder.sysName": "System name",
      "ui.builder.tabDefault": "Tab {n}",
      "ui.builder.tabRemoveConfirm": "Delete the tab \u201C{name}\u201D and everything in it?",
      "ui.builder.tabTitle": "Tab title",
      "ui.builder.tabsHint": "Click a tab on the sheet to fill it: what you add next goes inside.",
      "ui.builder.tabsLabel": "Tabs",
      "ui.builder.templateFail": "This template cannot be opened in the editor.",
      "ui.builder.themeAddFile": "Add a file (font woff2, woff, ttf, otf; image png, jpg, webp)",
      "ui.builder.themeAngle": "Gradient angle",
      "ui.builder.themeAssets": "Embedded fonts and images",
      "ui.builder.themeAssetsHint": "Add a font or a background image: it travels with the system and every player sees it. Make sure you may redistribute it (font licence, image rights).",
      "ui.builder.themeBackground": "Sheet background",
      "ui.builder.themeBodyFont": "Body font",
      "ui.builder.themeBorderStyle": "Border style",
      "ui.builder.themeBorderWidth": "Border width",
      "ui.builder.themeCase": "Heading case",
      "ui.builder.themeChamfer": "Cut corners",
      "ui.builder.themeColor2": "Second color (gradient)",
      "ui.builder.themeColors": "Colors",
      "ui.builder.themeCustom": "Custom",
      "ui.builder.themeDetails": "Details",
      "ui.builder.themeFields": "Field style",
      "ui.builder.themeFileBig": "file too large (font 400 KB, image 800 KB at most)",
      "ui.builder.themeFileRefused": "File refused: {reason}",
      "ui.builder.themeFileTypes": "only woff2, woff, ttf, otf, png, jpg and webp are accepted",
      "ui.builder.themeFonts": "Fonts",
      "ui.builder.themeFontsHint": "Fonts already installed on the computer: a player without them gets a similar one.",
      "ui.builder.themeFrame": "Frame of cards and lists",
      "ui.builder.themeFrames": "Frames and stats",
      "ui.builder.themeGaugeColor": "Colour",
      "ui.builder.themeGaugeStyle": "Look",
      "ui.builder.themeGauges": "Gauges",
      "ui.builder.themeHeader": "Title bar",
      "ui.builder.themeHeaderAlign": "Title bar alignment",
      "ui.builder.themeHeadingFont": "Heading font",
      "ui.builder.themeHint": "The visual identity of the sheet: colors, fonts, background, shapes. The preview updates live.",
      "ui.builder.themeImage": "Background image",
      "ui.builder.themeImageMode": "Image display",
      "ui.builder.themeImported": "(imported)",
      "ui.builder.themeKind": "Background type",
      "ui.builder.themeKindFont": "font",
      "ui.builder.themeKindImage": "image",
      "ui.builder.themeNoImages": "Add an image first in \u201CEmbedded fonts and images\u201D below.",
      "ui.builder.themeNone": "None (the game's basic look)",
      "ui.builder.themePatternColor": "Pattern color",
      "ui.builder.themePatternOpacity": "Pattern strength",
      "ui.builder.themePatternSize": "Pattern size",
      "ui.builder.themePreset": "Starting template",
      "ui.builder.themeRadius": "Corner radius",
      "ui.builder.themeReplace": "Replace your custom theme with this template? Your settings will be lost.",
      "ui.builder.themeShadow": "Card shadow",
      "ui.builder.themeShapes": "Shapes",
      "ui.builder.themeSize": "Text size",
      "ui.builder.themeSpacing": "Letter spacing (headings)",
      "ui.builder.themeStat": "Stat blocks",
      "ui.builder.themeTag": "Roll tag",
      "ui.builder.themeTagHint": "A roll's result in the chat, in its window and in the history: a sample shows under the sheet.",
      "ui.builder.themeTagSample": "Sample roll tag",
      "ui.builder.themeTagSampleTitle": "Sample roll",
      "ui.builder.themeTagStyle": "Look",
      "ui.builder.themeTitle": "Appearance",
      "ui.builder.themeTitleRule": "Ornament under titles",
      "ui.builder.tokenizable": "Can become a token on the map",
      "ui.builder.undoHint": "Undo (Ctrl+Z)",
      "ui.builder.unsaved": "Unsaved changes",
      "ui.builder.up": "Move up",
      "ui.builder.useAsBase": "Use as a base",
      "ui.builder.value": "Value",
      "ui.builder.variables": "Variables",
      "ui.builder.variablesHint": "Constants usable in formulas as $name.",
      "ui.builder.version": "Version",
      "ui.builder.width": "Width (px)",
      "ui.cat.alreadyThere": "A system with this identifier already exists on your computer: installing makes a copy and overwrites nothing.",
      "ui.cat.by": "By {name}",
      "ui.cat.cached": "You are looking at the copy saved on your computer: {reason}",
      "ui.cat.changelog": "What's new",
      "ui.cat.closedText": "It is coming soon. Meanwhile you can install a module from an address or a folder (Modules page) and import a system you were given (Game systems page).",
      "ui.cat.closedTitle": "The catalog is not open yet.",
      "ui.cat.communityCode": "Not reviewed by Ourdir: this module runs in the sandbox, with the permissions below.",
      "ui.cat.deprecated": "obsolete",
      "ui.cat.details": "Details",
      "ui.cat.dev": "development catalog",
      "ui.cat.disabled": "Removed from the catalog and switched off for safety: {list}.",
      "ui.cat.error": "The catalog is unavailable: {reason}",
      "ui.cat.expired": "This catalog expired on {date}: you can browse it, but nothing installs until it is updated.",
      "ui.cat.fingerprint": "Publisher fingerprint: {fp}",
      "ui.cat.fromCatalog": "From the {source} catalog \xB7 {tier} \xB7 {name}",
      "ui.cat.hide": "Hide",
      "ui.cat.homepage": "Page: {url}",
      "ui.cat.install": "Install",
      "ui.cat.installed": "Installed \xB7 v{v}",
      "ui.cat.kind.adventure": "Adventures",
      "ui.cat.kind.all": "All types",
      "ui.cat.kind.compendium": "Compendiums",
      "ui.cat.kind.maps": "Map packs",
      "ui.cat.kind.module": "Modules",
      "ui.cat.kind.system": "Systems",
      "ui.cat.kind.theme": "Table themes",
      "ui.cat.kind.translation": "Translations",
      "ui.cat.kindFilter": "Type",
      "ui.cat.lang.all": "All languages",
      "ui.cat.langFilter": "Language",
      "ui.cat.lead": "Signed modules and systems, ready to install. Nothing is installed before the review screen.",
      "ui.cat.loading": "Loading the catalog\u2026",
      "ui.cat.no": "no",
      "ui.cat.none": "No results.",
      "ui.cat.offline": "offline",
      "ui.cat.pending": "v{v} is being reviewed by Ourdir.",
      "ui.cat.replaces": "This update replaces your version {v}. Tables that use this system keep their sheets; if you changed it yourself, your changes will be lost.",
      "ui.cat.report": "Report",
      "ui.cat.reportHint": "\u201CReport\u201D opens the catalogue's report form; without a GitHub account, write to signalement@ourdir.fr.",
      "ui.cat.retry": "Try again",
      "ui.cat.reviewSystem": "Review before installing",
      "ui.cat.reviewTheme": "Table theme from the catalog",
      "ui.cat.reviewTranslation": "Translation to install",
      "ui.cat.revoked": "withdrawn",
      "ui.cat.revokedNotice": "The catalog withdrew modules you had installed: {list}. They were switched off for safety.",
      "ui.cat.search": "Search modules and systems\u2026",
      "ui.cat.soonKind": "Install coming soon",
      "ui.cat.soonLicensed": "Coming soon",
      "ui.cat.sourceLine": "Source: {name} \xB7 issue {n} \xB7 published {date}",
      "ui.cat.system.all": "All systems",
      "ui.cat.systemContents": "{n} elements \xB7 theme: {theme} \xB7 embedded files: {files}",
      "ui.cat.systemFilter": "System",
      "ui.cat.systemInstalled": "System \u201C{name}\u201D installed.",
      "ui.cat.systemNote": "A system contains no code: it is a sheet and its look. It is fully checked again before it is saved.",
      "ui.cat.tab.browse": "Browse",
      "ui.cat.tab.mine": "My publications",
      "ui.cat.themeInstalled": 'Theme "{name}" installed: pick it when you create a table, or in Settings in the game.',
      "ui.cat.themeNote": "A theme holds no code: only colours, fonts and shape settings, checked by the app. It never touches the map.",
      "ui.cat.tier.all": "All origins",
      "ui.cat.tier.community": "Community",
      "ui.cat.tier.official": "Official",
      "ui.cat.tier.ourdir": "Ourdir",
      "ui.cat.tier.validated": "Validated",
      "ui.cat.tierFilter": "Origin",
      "ui.cat.title": "Catalog",
      "ui.cat.translationInstalled": "\u201C{name}\u201D installed: pick it in Settings \u2192 Language.",
      "ui.cat.translationNote": "A translation holds text only: it changes Ourdir\u2019s words, nothing else.",
      "ui.cat.translationTarget": "Translates Ourdir into \u201C{language}\u201D.",
      "ui.cat.update": "Update",
      "ui.cat.updateAvailable": "Update available",
      "ui.cat.updates": "{n} update(s) available.",
      "ui.cat.versions": "Versions",
      "ui.cat.yes": "yes",
      "ui.common.cancel": "Cancel",
      "ui.common.copied": "Copied",
      "ui.common.copy": "Copy",
      "ui.common.loading": "Loading\u2026",
      "ui.common.paste": "Paste",
      "ui.friends.accessBad": "Your table is probably not reachable from the Internet yet (see Settings). The invitation will work once that is fixed.",
      "ui.friends.add": "Add a friend",
      "ui.friends.addPlaceholder": "Paste their friend code (td1_\u2026)",
      "ui.friends.addSubmit": "Add",
      "ui.friends.code": "My friend code",
      "ui.friends.codeHint": "Send this code to someone so they can add you. It is not secret: it only holds your public key.",
      "ui.friends.confirmRemove": "Remove {name} from your friends?",
      "ui.friends.invitation": "Invitation for {name}",
      "ui.friends.invitationHint": "Encrypted for them only: nobody else can read the address. Send it (Discord, SMS\u2026). Valid for 7 days.",
      "ui.friends.invite": "Invite to my table",
      "ui.friends.invited": "Invited to your table",
      "ui.friends.list": "My friends",
      "ui.friends.localWarn": 'Your network access is "Local": they will not be able to reach you. Change it in Settings, then create the invitation again.',
      "ui.friends.me": "My identity",
      "ui.friends.name": "Display name",
      "ui.friends.needTable": "Launch a table to invite friends.",
      "ui.friends.none": "No friends yet.",
      "ui.friends.presence": `There is no "online" status for friends: the app uses no central server. A table's state is shown in the Tables tab.`,
      "ui.friends.remove": "Delete",
      "ui.friends.save": "Save",
      "ui.friends.uninvite": "Remove from my table",
      "ui.guide.eyebrow": "Welcome",
      "ui.guide.lead": "Ourdir hosts your game at home: no account, no subscription to play with your friends.",
      "ui.guide.s1": "Pick your name",
      "ui.guide.s1b": "Change my name",
      "ui.guide.s1t": "This is what your friends will see. For now: {name}.",
      "ui.guide.s2": "Create your table",
      "ui.guide.s2t": "Give it a name and choose a game system. You can build your own later.",
      "ui.guide.s3": "Invite your friends",
      "ui.guide.s3b": "Add friends",
      "ui.guide.s3t": "Swap friend codes with them, then send them an invitation to your table.",
      "ui.guide.title": "Your first table in three steps",
      "ui.hero.live": "Live",
      "ui.hero.resume": "Resume",
      "ui.home.resume": "Resume a template",
      "ui.home.resumeNone": "You have no sheet of your own yet.",
      "ui.home.resumeText": "Carry on with one of your own sheets.",
      "ui.home.template": "Start from a template",
      "ui.home.templateText": "A blank sheet or an included system (5e SRD, OSR\u2026) that you then change.",
      "ui.home.title": "How do you want to start?",
      "ui.home.zero": "Start from scratch",
      "ui.home.zeroText": "A wizard asks a few questions and gives you a sheet that is already playable.",
      "ui.key.addRecovery": "Add a recovery e-mail",
      "ui.key.alert": "Someone asks to replace your publisher key from your e-mail ({date}). If it is not you:",
      "ui.key.alertNotice": "Someone asks to replace your publisher key: open Ourdir's Catalog to cancel if it is not you.",
      "ui.key.backup": "Back up my key",
      "ui.key.cancel": "Cancel the request",
      "ui.key.cancelled": "Request cancelled: your key does not change.",
      "ui.key.choose": "Choose",
      "ui.key.chooseText": "Several keys use this address. Which one did you lose?",
      "ui.key.confirmRotate": "Confirm the change",
      "ui.key.done": "Done: your packages belong to your new key.",
      "ui.key.eyebrow.changer": "Change key",
      "ui.key.eyebrow.perdu": "Lost key",
      "ui.key.eyebrow.secours": "Recovery e-mail",
      "ui.key.lost": "I lost my key",
      "ui.key.lostText": "A new key will be made. The code goes to the old key's recovery e-mail; your packages move to the new key 7 days later, unless the old key cancels.",
      "ui.key.noPackages": "(no package published)",
      "ui.key.noRecovery": "Add a recovery e-mail: it gives your packages back if you lose your key.",
      "ui.key.none": "No key yet: it is made at your first share.",
      "ui.key.recovery": "Recovery e-mail: {email}",
      "ui.key.recoveryAdded": "{email} is your recovery e-mail.",
      "ui.key.recoveryAddedPlain": "This address is also your recovery e-mail: it gives your packages back if you lose your key.",
      "ui.key.remove": "Remove the recovery e-mail",
      "ui.key.request.attente": "Replacement requested, due on {date}",
      "ui.key.request.fait": "Key replaced",
      "ui.key.request.signe": "Replacement signed, being published",
      "ui.key.rotate": "Change key",
      "ui.key.rotateText": "A new key replaces the current one. Versions already published stay valid; the next ones will be signed by the new key. Back it up before confirming.",
      "ui.key.setRecovery": "Change the recovery e-mail",
      "ui.key.signed": "Signed: the catalog is publishing the replacement.",
      "ui.key.step.choose": "Choice",
      "ui.key.step.confirm": "Confirm",
      "ui.key.step.done": "Follow-up",
      "ui.key.step.email": "E-mail",
      "ui.key.step.key": "New key",
      "ui.key.title": "My publisher key",
      "ui.key.waiting": "Replacement due on {date}. You can close: the app follows the request.",
      "ui.mod.bundleFailed": "Several files: assembling failed (see warnings). The module will not be able to run.",
      "ui.mod.bundled": "Several files: assembled into one script ({n} files).",
      "ui.mod.by": "by {authors}",
      "ui.mod.canDo": "This module can: {list}.",
      "ui.mod.checkUpdate": "Check for updates",
      "ui.mod.compat": "Foundry compatibility (estimated)",
      "ui.mod.compat.compatible": "Should work",
      "ui.mod.compat.data-only": "Data only",
      "ui.mod.compat.incompatible": "Incompatible",
      "ui.mod.compat.note": "Static analysis of the scripts: it estimates what the compatibility layer supports. The module runs isolated (no network, no access to the page) with only the permissions you grant; a module that uses a missing API stops with a visible error.",
      "ui.mod.compat.partial": "Partly compatible",
      "ui.mod.confirmUninstall": 'Uninstall "{title}"?',
      "ui.mod.contents": "Contents: {scripts} script(s), {styles} stylesheet(s), {langs} language(s), {packs} compendium(s).",
      "ui.mod.disable": "Disable",
      "ui.mod.disabled": "Disabled",
      "ui.mod.enable": "Enable",
      "ui.mod.enabled": "Enabled",
      "ui.mod.from": "Downloaded from {host}",
      "ui.mod.fromUrl": "Install",
      "ui.mod.hash": "Fingerprint: {hash}\u2026",
      "ui.mod.install": "Install",
      "ui.mod.installFolder": "Install a folder",
      "ui.mod.installZip": "Install an archive (.zip)",
      "ui.mod.kind.foundry": "Foundry VTT",
      "ui.mod.kind.native": "Native",
      "ui.mod.kind.system": "Foundry system",
      "ui.mod.lead": "Extend the game: interface, commands, rolls, sheets. Everything you installed is here, systems from the catalog included; each module runs isolated.",
      "ui.mod.license": "License: {license}",
      "ui.mod.noSource": "This module was not installed from an address.",
      "ui.mod.none": "No module installed.",
      "ui.mod.noneText": "Install a native module or a Foundry VTT module: the converter shows what will work before installing.",
      "ui.mod.ownedSystem": "Game system",
      "ui.mod.ownedTheme": "Table theme",
      "ui.mod.ownedTranslation": "Translation",
      "ui.mod.packs": "Compendiums: {done} converted, {skipped} skipped.",
      "ui.mod.perms": "Requested permissions",
      "ui.mod.permsNone": "No permission requested.",
      "ui.mod.pickFile": "Choose a module (.zip)",
      "ui.mod.pickFolder": "Choose a module folder",
      "ui.mod.plain.dice.intercept": "change dice results",
      "ui.mod.plain.engine.intercept": "change or cancel game actions",
      "ui.mod.plain.host.script": "run code on the GM's computer",
      "ui.mod.plain.scene.modify": "change scenes",
      "ui.mod.plain.sheet.write": "change character sheets",
      "ui.mod.plain.tokens.modify": "move or change tokens",
      "ui.mod.requires": "Requires: {list}",
      "ui.mod.review": "Review before installing",
      "ui.mod.risk.high": "high",
      "ui.mod.risk.low": "low",
      "ui.mod.risk.medium": "medium",
      "ui.mod.runtime.pending": "Installed \xB7 old version, reinstall it to run it",
      "ui.mod.runtime.ready": "Ready: runs in games, isolated",
      "ui.mod.runtime.unsupported": "Cannot run: {reason}",
      "ui.mod.skipped": "{n} file(s) skipped for safety.",
      "ui.mod.status.blocked": "Blocked (security)",
      "ui.mod.status.partial": "Partial",
      "ui.mod.status.supported": "Supported",
      "ui.mod.status.unsupported": "Unsupported",
      "ui.mod.systemNote": "A Foundry system ships its own sheets as code: it cannot run here. It is kept so it can be converted into a native sheet with the System Builder (coming).",
      "ui.mod.tech": "Technical details",
      "ui.mod.trust.official": "Official",
      "ui.mod.trust.signed": "Signed (community)",
      "ui.mod.trust.unsigned": "Unsigned",
      "ui.mod.trustHint.official": "Signed by an official project key or a verified rights holder.",
      "ui.mod.trustHint.signed": "The author is authentic ({name}) but the project has not reviewed the content.",
      "ui.mod.trustHint.unsigned": "No guarantee about the author or the content. Only install what you know.",
      "ui.mod.uninstall": "Uninstall",
      "ui.mod.upToDate": '"{title}" is up to date.',
      "ui.mod.updateTitle": "Update {from} \u2192 {to}",
      "ui.mod.urlHint": "Paste the address of a module.json or system.json (as in Foundry VTT), or of a GitHub or GitLab repository.",
      "ui.mod.urlLabel": "Install from an address",
      "ui.mod.version": "Version {v}",
      "ui.mod.warnings": "Warnings",
      "ui.modules.empty": "No module installed.",
      "ui.modules.text": "Modules (scenes, handouts, extensions) arrive with the module manager. They will run in a sandbox and ask for explicit permissions.",
      "ui.modules.title": "Modules",
      "ui.nav.catalog": "Catalog",
      "ui.nav.friends": "Friends",
      "ui.nav.modules": "Modules",
      "ui.nav.settings": "Settings",
      "ui.nav.systems": "Game systems",
      "ui.nav.tables": "Tables",
      "ui.nav.themes": "Themes",
      "ui.roles.base.gm": "GM",
      "ui.roles.base.player": "Player",
      "ui.roles.baseHint.gm": "Sees what the GM sees (hidden scenes, secret rolls) and moves every token; take away rights below.",
      "ui.roles.baseHint.player": "Sees and does what a player does; the rights below come on top.",
      "ui.roles.baseLabel": "Built on",
      "ui.roles.builtin.cogm": "Co-GM",
      "ui.roles.builtin.gm": "GM",
      "ui.roles.builtin.player": "Player",
      "ui.roles.builtin.trusted": "Trusted player",
      "ui.roles.builtinHint.cogm": "The GM's rights, except those that destroy: deleting scenes, layers, playlists.",
      "ui.roles.builtinHint.gm": "Every right. That is you, the owner of the table.",
      "ui.roles.builtinHint.player": "The basics: plays their character, moves their tokens, chats and rolls dice.",
      "ui.roles.builtinHint.trusted": "A player who can also send pictures and change the picture and token of the sheets they control.",
      "ui.roles.cap.critical": "Destroy",
      "ui.roles.cap.look": "Change pictures and tokens",
      "ui.roles.cap.moderate": "Moderate",
      "ui.roles.cap.music": "Music and sounds",
      "ui.roles.cap.scenes": "Build scenes",
      "ui.roles.cap.tokens": "Move every token",
      "ui.roles.cap.upload": "Send files",
      "ui.roles.cap.vision": "Their sheets' vision",
      "ui.roles.capHint.critical": "delete a scene, a layer, a playlist",
      "ui.roles.capHint.look": "the picture and token of the sheets they control",
      "ui.roles.capHint.moderate": "clear the chat and the dice history, remove a player",
      "ui.roles.capHint.music": "play and manage playlists",
      "ui.roles.capHint.scenes": "walls, lights, fog, layers, images, tokens",
      "ui.roles.capHint.tokens": "not only their own",
      "ui.roles.capHint.upload": "pictures, maps, sounds; manage the media library",
      "ui.roles.capHint.vision": "set the sight, darkvision, filter and light of the sheets they edit",
      "ui.roles.capsLabel": "Rights",
      "ui.roles.confirmDelete": 'Delete the role "{name}"? Those who have it become players again.',
      "ui.roles.customHint": "A role you made.",
      "ui.roles.delete": "Delete",
      "ui.roles.edit": "Edit",
      "ui.roles.everything": "Every right",
      "ui.roles.lead": "Who can do what at this table. A role gives rights on top of a player's; the GM (you) has every right, and only you rename or delete the table, manage its roles and invite people.",
      "ui.roles.loadFail": "Could not read this table's roles.",
      "ui.roles.members": "Members",
      "ui.roles.name": "Role name",
      "ui.roles.new": "New role",
      "ui.roles.noCaps": "No right beyond the base's",
      "ui.roles.noMembers": "No friends yet. Add them under Friends, then invite them to this table.",
      "ui.roles.notInvited": "not invited yet",
      "ui.roles.roleOf": "Role of {name}",
      "ui.roles.roles": "Roles",
      "ui.roles.running": "The table is running: a change of role applies at once, and the member concerned is reconnected so that their page matches their new role.",
      "ui.roles.save": "Save",
      "ui.settings.advanced": "Advanced options",
      "ui.settings.data": "Data",
      "ui.settings.details": "Technical details",
      "ui.settings.display": "Display",
      "ui.settings.friendsAccess": "My friends can join me over the Internet",
      "ui.settings.friendsAccessDesc": "On by default. Everything is set up automatically: router, firewall and address. Only friends you invite can get in. If your router does not let them in, they come through Ourdir\u2019s relay: nothing to open.",
      "ui.settings.graphics": "Board graphics quality",
      "ui.settings.graphics.high": "High",
      "ui.settings.graphics.low": "Low: faster, coarser pictures",
      "ui.settings.graphics.medium": "Medium",
      "ui.settings.graphics.ultra": "Ultra: the real quality of the pictures",
      "ui.settings.graphicsAuto": "Automatic (suited to this PC: {level})",
      "ui.settings.graphicsAutoMeasured": "Automatic (measured: {level})",
      "ui.settings.graphicsDetected": "This PC: {gpu}, {cores} cores, {mem} GB of memory.",
      "ui.settings.graphicsHint": "On a powerful PC, maps and tokens keep all their detail, even zoomed out. The more modest the PC, the more the picture is simplified to stay smooth.",
      "ui.settings.graphicsName.fallback": "Fallback",
      "ui.settings.graphicsName.high": "High",
      "ui.settings.graphicsName.low": "Low",
      "ui.settings.graphicsName.medium": "Medium",
      "ui.settings.graphicsName.ultra": "Ultra",
      "ui.settings.language": "Language",
      "ui.settings.languageAuto": "Automatic ({name})",
      "ui.settings.mode.internet": "Internet (recommended)",
      "ui.settings.mode.internet.desc": "Invited friends can play from anywhere.",
      "ui.settings.mode.lan": "Local network",
      "ui.settings.mode.lan.desc": "Only friends on the same Wi\u2011Fi or network.",
      "ui.settings.mode.local": "Only me",
      "ui.settings.mode.local.desc": "Nobody else can connect.",
      "ui.settings.network": "Network access",
      "ui.settings.openData": "Open the data folder",
      "ui.settings.port": "Port: {port}",
      "ui.settings.publicHost": "Custom address (DDNS name)",
      "ui.settings.publicHostHint": "For advanced users. Normally the address is detected automatically. No http:// and no port.",
      "ui.settings.reach": "Can my friends reach me?",
      "ui.settings.reachRun": "Check",
      "ui.settings.recheck": "Check again now",
      "ui.settings.reduceMotion": "Reduce animations",
      "ui.settings.relay": "Relay",
      "ui.settings.relay.custom": "Another relay",
      "ui.settings.relay.custom.desc": "Your own, or a community's.",
      "ui.settings.relay.default": "Ourdir's relay",
      "ui.settings.relay.none": "No relay",
      "ui.settings.relay.none.desc": "Friends will have to reach you directly (open router, IPv6 or UPnP).",
      "ui.settings.relayCustomHint": "A host name (with a port if needed) or a ws(s):// address. It must run Ourdir's relay program.",
      "ui.settings.relayDesc": "When your router does not let friends in, they come through the relay: your table stays on your PC, the relay only carries encrypted bytes it cannot read. A direct path is always tried first.",
      "ui.settings.relayInvalid": "Invalid relay: a host name (with a port if needed) or a ws(s):// address.",
      "ui.settings.restartNote": "Changing access restarts the running table.",
      "ui.settings.save": "Save",
      "ui.settings.textSize": "Interface size",
      "ui.settings.title": "Settings",
      "ui.settings.uiMode": "Interface in game",
      "ui.settings.uiMode.full": "Full: every menu and window",
      "ui.settings.uiMode.hidden": "Hidden: the board alone (immersion)",
      "ui.settings.uiMode.reduced": "Reduced: icons only",
      "ui.settings.uiModeHint": "During a game: Alt+1 full, Alt+2 reduced, Alt+3 hidden, Alt+H hides or shows again. The game's menu offers the same choices. When the interface is hidden, the top edge of the window brings the Menu tab back.",
      "ui.share.accept": "I have the right to share this content and I accept the catalogue's rules.",
      "ui.share.backupText": "Without it, you can no longer publish a new version of your packages. Keep the file somewhere safe: password manager, USB stick.",
      "ui.share.backupTitle": "Back up your key",
      "ui.share.button": "Share to the catalogue",
      "ui.share.close": "Close",
      "ui.share.code": "6-digit code",
      "ui.share.codeHint": "It arrives within a minute; check your spam folder too.",
      "ui.share.codeTitle": "Code sent to {email}",
      "ui.share.createKey": "Create my key",
      "ui.share.description": "Description",
      "ui.share.doneTitle": "Sent!",
      "ui.share.email": "E-mail address",
      "ui.share.emailText": "A 6-digit code is sent to you. The address is never published; it is kept for one year (a host's legal duty).",
      "ui.share.emailTitle": "Your e-mail address",
      "ui.share.exportKey": "Export my key",
      "ui.share.exportTitle": "Save your publisher key",
      "ui.share.exported": "Key saved: {path}",
      "ui.share.eyebrow": 'Share "{name}"',
      "ui.share.fail": "Sharing failed.",
      "ui.share.haveVerified": "Already verified",
      "ui.share.importKey": "I already have a key (import)",
      "ui.share.importTitle": "Import a publisher key",
      "ui.share.keyText": "It signs your shares and proves they come from you. It is separate from your player identity (friend codes).",
      "ui.share.keyTitle": "Your publisher key",
      "ui.share.lang.en": "English",
      "ui.share.lang.fr": "Fran\xE7ais",
      "ui.share.language": "Language",
      "ui.share.license": "Licence",
      "ui.share.licenseAllRights": "All rights reserved (free sharing)",
      "ui.share.licenseOther": "Under a publisher's licence\u2026",
      "ui.share.licenseOtherHint": "e.g. Homebrew Content Policy (R. Talsorian Games)",
      "ui.share.mine": "My publications",
      "ui.share.mustAccept": "Tick the box to accept the catalogue's rules.",
      "ui.share.name": "Name",
      "ui.share.newCode": "New code",
      "ui.share.next": "Continue",
      "ui.share.none": "You have not published anything yet.",
      "ui.share.noneText": 'Share a system you made: Game systems page, "Share to the catalogue" button.',
      "ui.share.privacy": "Kept for one year: your e-mail address, your IP address and your public key (a host's legal duty). Rules: github.com/ourdirvtt/catalogue/blob/main/RULES.md",
      "ui.share.publisher": "Publisher name shown",
      "ui.share.publisherHint": "a nickname: never your address",
      "ui.share.savedHint": "Key saved.",
      "ui.share.seeInCatalog": "See in the catalog",
      "ui.share.send": "Send to the catalogue",
      "ui.share.sendCode": "Get a code",
      "ui.share.sending": "Sending\u2026",
      "ui.share.sentOn": "Sent on {date}",
      "ui.share.sheetTitle": "Its page in the catalog",
      "ui.share.state.efface": "Removed",
      "ui.share.state.en-controle": "Being checked",
      "ui.share.state.ferme": "Closed",
      "ui.share.state.publie": "Published \u2714",
      "ui.share.state.refuse": "Refused",
      "ui.share.stateText.efface": "Removed from the catalog.",
      "ui.share.stateText.en-controle": "The automatic check is running: usually a few minutes.",
      "ui.share.stateText.ferme": "The request was closed without publishing.",
      "ui.share.stateText.publie": "It is live: anyone can install it from the Catalog.",
      "ui.share.stateText.refuse": "The check refused it.",
      "ui.share.step.done": "Follow-up",
      "ui.share.step.email": "E-mail",
      "ui.share.step.key": "Key",
      "ui.share.step.sheet": "Sheet",
      "ui.share.summary": "Summary (one sentence)",
      "ui.share.tags": "Tags (comma separated)",
      "ui.share.track.check": "Automatic check",
      "ui.share.track.published": "Published",
      "ui.share.track.refused": "Refused by the check",
      "ui.share.track.sent": "Sent",
      "ui.share.verify": "Verify",
      "ui.sheets.bright": "Bright light",
      "ui.sheets.color": "Colour",
      "ui.sheets.cone": "Cone",
      "ui.sheets.dark": "Darkvision",
      "ui.sheets.dim": "Dim light",
      "ui.sheets.filter": "Filter",
      "ui.sheets.filterRange": "Filter reach",
      "ui.sheets.filters.blindsight": "Blindsight",
      "ui.sheets.filters.grey": "Black and white",
      "ui.sheets.filters.nightvision": "Night vision",
      "ui.sheets.filters.none": "None",
      "ui.sheets.filters.thermal": "Thermal",
      "ui.sheets.hint": "The lighting settings every new sheet takes (its Settings tab). The sheets already made keep theirs.",
      "ui.sheets.kind": "Kind of light",
      "ui.sheets.light": "Carried light lit",
      "ui.sheets.none": "none",
      "ui.sheets.preset.candle": "Candle",
      "ui.sheets.preset.custom": "Custom",
      "ui.sheets.preset.lantern": "Lantern",
      "ui.sheets.preset.spell": "Light spell",
      "ui.sheets.preset.torch": "Torch",
      "ui.sheets.saveFail": "The sheets' defaults could not be saved.",
      "ui.sheets.sceneSight": "no limit",
      "ui.sheets.sight": "Sight reach",
      "ui.sheets.title": "Sheets",
      "ui.sheets.unit.case": "cells",
      "ui.sheets.unit.ft": "ft",
      "ui.sheets.unit.m": "m",
      "ui.step.askProvider": "Ask your provider for a public IPv4 address, or use IPv6.",
      "ui.step.enableUpnp": 'In your router settings, turn on "UPnP" (often under "NAT" or "Ports").',
      "ui.step.forwardPort": "Or forward TCP port {port} to this computer.",
      "ui.step.ipv6Firewall": "Make sure your router allows inbound IPv6 connections on port {port}.",
      "ui.step.retryFirewall": "Launch the table again and accept the Windows prompt.",
      "ui.systems.fromCatalog": "From the catalog, by {name}",
      "ui.systems.included": "Included",
      "ui.systems.lead": "The rules and sheets a table uses.",
      "ui.systems.license": "License: {license}",
      "ui.systems.manage": "Manage in Modules",
      "ui.systems.mine": "Mine",
      "ui.systems.official": "Official",
      "ui.systems.rights": "D&D 5e, Warhammer and other licensed games: only with the rights holders' agreement.",
      "ui.systems.title": "Game systems",
      "ui.systems.usable": "Ready to play",
      "ui.tables.backedUp": "Backup saved.",
      "ui.tables.backup": "Back up",
      "ui.tables.backupTitle": "Back up the table",
      "ui.tables.changedHint": "This table's certificate changed. Do not connect unless your friend reinstalled the app.",
      "ui.tables.compendium.dnd5e": "D&D 5e (SRD)",
      "ui.tables.compendium.none": "None",
      "ui.tables.compendiumHint": "What the Compendium window offers at this table: nothing (an empty one), or a game system\u2019s. Changed here, applied the next time the table is launched.",
      "ui.tables.compendiumLabel": "Compendium",
      "ui.tables.compendiumRestart": "The compendium changes the next time the table is launched.",
      "ui.tables.confirmDelete": "Delete the table \u201C{name}\u201D? It goes to the recycle bin: you can get it back from there.",
      "ui.tables.crashed": "The table \u201C{name}\u201D stopped unexpectedly. You can start it again; details are in the log (Help menu).",
      "ui.tables.create": "Create a table",
      "ui.tables.createSubmit": "Create",
      "ui.tables.delete": "Delete",
      "ui.tables.deleted": "Table \u201C{name}\u201D moved to the recycle bin.",
      "ui.tables.duplicate": "Duplicate",
      "ui.tables.duplicateSuffix": "(copy)",
      "ui.tables.duplicated": "Copy created: \u201C{name}\u201D.",
      "ui.tables.forget": "Forget",
      "ui.tables.friends": "My friends' tables",
      "ui.tables.friendsNone": "You have not joined any table. Paste an invitation below.",
      "ui.tables.host": "Hosted by {name}",
      "ui.tables.join": "Join",
      "ui.tables.joinHint": "Paste the invitation a friend sent you (it starts with td1i_). They must be in your friends.",
      "ui.tables.joinInvite": "Join with an invitation",
      "ui.tables.joinOwn": "Join",
      "ui.tables.joinSubmit": "Join",
      "ui.tables.lastJoined": "Last visit: {date}",
      "ui.tables.lastPlayed": "Last session: {date}",
      "ui.tables.launch": "Launch",
      "ui.tables.mine": "My tables",
      "ui.tables.name": "Table name",
      "ui.tables.neverPlayed": "Never launched",
      "ui.tables.none": "You are not hosting any table yet. Create one to get started.",
      "ui.tables.offlineHint": "Offline: the table is stopped or unreachable, or your access was removed.",
      "ui.tables.open": "Open",
      "ui.tables.openFolder": "Open folder",
      "ui.tables.others": "Other tables",
      "ui.tables.preset.full": "Full",
      "ui.tables.preset.lite": "Lite",
      "ui.tables.presetForever": "Chosen now and never changed: a Lite table stays light, a Full table keeps everything.",
      "ui.tables.presetHint.full": "Everything Ourdir does, today and tomorrow: dynamic lighting and walls, vision, compendium, full sheets, modules.",
      "ui.tables.presetHint.lite": "Simple, Owlbear-style: the map, the grid and ruler, a simple fog, four lighting ambiences, a minimal sheet, dice, initiative, macros and music. Nothing else to set up.",
      "ui.tables.presetLabel": "Type of table",
      "ui.tables.presetShort.full": "Full",
      "ui.tables.presetShort.lite": "Lite",
      "ui.tables.refused": "The table refused the entry: {reason}",
      "ui.tables.refusedNoReason": "The table refused the entry. Check that you are still invited, then try again.",
      "ui.tables.rename": "Rename",
      "ui.tables.renameSave": "Save",
      "ui.tables.restore": "Restore a backup",
      "ui.tables.restoreTitle": "Restore a table",
      "ui.tables.restored": "Table \u201C{name}\u201D restored.",
      "ui.tables.restoredNoSystem": "Table \u201C{name}\u201D restored, but its game system is not installed here: it uses the Generic system. Import the system first.",
      "ui.tables.settings": "Settings",
      "ui.tables.startFailed": "The table could not start ({detail}). Check that no other program uses the same port, then look at the log (Help menu).",
      "ui.tables.starting": "Starting\u2026",
      "ui.tables.status.changed": "Certificate changed",
      "ui.tables.status.checking": "Checking\u2026",
      "ui.tables.status.hosting": "Online \xB7 you host it",
      "ui.tables.status.offline": "Offline",
      "ui.tables.status.online": "Online",
      "ui.tables.status.stopped": "Stopped",
      "ui.tables.stop": "Stop",
      "ui.tables.stopFirst": "Stop this table first.",
      "ui.tables.system": "Game system",
      "ui.tables.systemHint": "Sheets already made keep their old layout; new ones will use this system.",
      "ui.tables.theme.cyberpunk": "Cyberpunk",
      "ui.tables.theme.espace": "Space opera",
      "ui.tables.theme.fantasy": "Fantasy",
      "ui.tables.theme.horreur": "Horror",
      "ui.tables.theme.metier": "Ourdir",
      "ui.tables.theme.noir": "Film noir",
      "ui.tables.themeHint": "How the interface looks for the whole table, never the map. The game master can change it in the game, in Settings.",
      "ui.tables.themeLabel": "Interface theme",
      "ui.themes.builtin": "Built-in",
      "ui.themes.choice.corners.doux": "Soft",
      "ui.themes.choice.corners.ronds": "Round",
      "ui.themes.choice.corners.vifs": "Sharp",
      "ui.themes.choice.cut.aucune": "None",
      "ui.themes.choice.cut.legere": "Light",
      "ui.themes.choice.cut.marquee": "Strong",
      "ui.themes.choice.filter.dread": "Gloom",
      "ui.themes.choice.filter.neon": "Neon",
      "ui.themes.choice.filter.noir": "Black and white",
      "ui.themes.choice.filter.none": "None",
      "ui.themes.choice.filter.scan": "Scan lines",
      "ui.themes.choice.filter.vignette": "Vignette",
      "ui.themes.choice.glow.aucun": "None",
      "ui.themes.choice.glow.doux": "Soft",
      "ui.themes.choice.glow.neon": "Neon",
      "ui.themes.choice.grain.0": "None",
      "ui.themes.choice.grain.1": "Light",
      "ui.themes.choice.grain.2": "Medium",
      "ui.themes.choice.grain.3": "Strong",
      "ui.themes.choice.knots.carres": "Square",
      "ui.themes.choice.knots.losanges": "Diamonds",
      "ui.themes.choice.knots.ronds": "Round",
      "ui.themes.choice.tabs.coupes": "Cut",
      "ui.themes.choice.tabs.droits": "Straight",
      "ui.themes.choice.texture.aucune": "None",
      "ui.themes.choice.texture.lignes": "Lines",
      "ui.themes.choice.texture.papier": "Paper",
      "ui.themes.choice.texture.tissage": "Weave",
      "ui.themes.close": "Close",
      "ui.themes.copySuffix": "(copy)",
      "ui.themes.create": "Create a theme",
      "ui.themes.delete": "Delete",
      "ui.themes.deleteConfirm": 'Delete "{name}"? The tables using it will go back to the theme it started from.',
      "ui.themes.duplicate": "Duplicate",
      "ui.themes.edit": "Edit",
      "ui.themes.editorTitle": 'Theme "{name}"',
      "ui.themes.effects.capitals": "Headings in capitals",
      "ui.themes.effects.filter": "Suggested screen filter (Lighting)",
      "ui.themes.effects.glow": "Accent glow",
      "ui.themes.effects.grain": "Grain",
      "ui.themes.effects.texture": "Panel weave",
      "ui.themes.export": "Export",
      "ui.themes.exportTitle": "Export the theme",
      "ui.themes.exported": "Theme exported: {path}",
      "ui.themes.fellBack": '{n} table(s) go back to the theme "{name}" started from.',
      "ui.themes.font.body": "Text",
      "ui.themes.font.display": "Headings",
      "ui.themes.font.mono": "Numbers and codes",
      "ui.themes.from": "Start from",
      "ui.themes.fromCatalog": "From the catalog, by {name}",
      "ui.themes.import": "Import a theme\u2026",
      "ui.themes.importTitle": "Import an Ourdir theme",
      "ui.themes.imported": 'Theme "{name}" imported.',
      "ui.themes.lead": "The look of your tables: colours, fonts, signature. A theme never touches the map.",
      "ui.themes.leaveConfirm": "Some changes are not saved. Leave anyway?",
      "ui.themes.mine": "Mine",
      "ui.themes.name": "Theme name",
      "ui.themes.needName": "Give the theme a name (2 characters at least).",
      "ui.themes.preview": "Theme preview",
      "ui.themes.readability": "Readability",
      "ui.themes.sample.bad": "down",
      "ui.themes.sample.button": "Roll",
      "ui.themes.sample.chat": "Chat",
      "ui.themes.sample.gm": "The door creaks on its hinges.",
      "ui.themes.sample.hp": "HP 12 / 14",
      "ui.themes.sample.music": "Music",
      "ui.themes.sample.ok": "success",
      "ui.themes.sample.player": "I listen at the door.",
      "ui.themes.sample.roll": "Perception",
      "ui.themes.sample.scene": "The crypt",
      "ui.themes.sample.sheets": "Sheets",
      "ui.themes.sample.warn": "wounded",
      "ui.themes.sample.whisper": "(whispered)",
      "ui.themes.save": "Save",
      "ui.themes.saved": "Theme saved.",
      "ui.themes.shape.corners": "Corners",
      "ui.themes.shape.cut": "Corner cut",
      "ui.themes.shape.knots": "Beads of the cord",
      "ui.themes.shape.tabs": "Ribbons (tabs)",
      "ui.themes.sheet.description": "Description",
      "ui.themes.sheet.license": "Licence",
      "ui.themes.sheet.version": "Version",
      "ui.themes.start": "Create",
      "ui.themes.tab.colors": "Colours",
      "ui.themes.tab.effects": "Effects",
      "ui.themes.tab.fonts": "Fonts",
      "ui.themes.tab.shape": "Shape",
      "ui.themes.tab.sheet": "Details",
      "ui.themes.title": "Table themes",
      "ui.themes.unreadable": "Fix the readability to save.",
      "ui.themes.useAsBase": "Use as a base",
      "ui.toile.aria": "Table {table}: {n} friend(s), {i} invited.",
      "ui.toile.caption": "{n} friend(s) \xB7 {i} invited to this table",
      "ui.toile.manage": "Manage friends",
      "ui.toile.none": "No one invited yet.",
      "ui.toile.you": "You",
      "ui.tr.delete": "Delete",
      "ui.tr.deleteConfirm": "Delete the translation \u201C{name}\u201D?",
      "ui.tr.err.badId": "Invalid id (lowercase letters, digits, hyphens).",
      "ui.tr.err.badLanguage": "Invalid language code (for example es, pt-BR).",
      "ui.tr.err.badMeta": "Invalid author, license or description.",
      "ui.tr.err.badName": "The language name is missing or longer than 40 characters.",
      "ui.tr.err.badSection": "A section is not a list of texts.",
      "ui.tr.err.badSource": "The English column (source) is damaged.",
      "ui.tr.err.badTarget": "This translation does not say what it translates.",
      "ui.tr.err.badTexts": "The texts are missing.",
      "ui.tr.err.badVersion": "Invalid version (for example 1.0.0).",
      "ui.tr.err.fromCatalog": "This translation comes from the catalogue: it serves Ourdir, but is never edited, exported or shared.",
      "ui.tr.err.markup": "A text has an opening angle bracket outside the English text\u2019s own tags: a translation brings text only.",
      "ui.tr.err.notFound": "Translation not found.",
      "ui.tr.err.notJson": "This file is not valid JSON.",
      "ui.tr.err.notString": "A text is not text.",
      "ui.tr.err.notText": "This file cannot be read.",
      "ui.tr.err.notTranslation": "This file is not an Ourdir translation.",
      "ui.tr.err.targetLater": "Translations of systems, compendiums and modules are coming soon.",
      "ui.tr.err.tooBig": "Translation too large (1 MB at most, without the English column).",
      "ui.tr.err.tooLong": "A text is longer than 2,000 characters.",
      "ui.tr.err.unknownField": "The file has an unknown field.",
      "ui.tr.err.unknownSection": "Unknown section (only engine, launcher and page exist).",
      "ui.tr.export": "Export",
      "ui.tr.exportTitle": "Export the translation",
      "ui.tr.from": "Start from",
      "ui.tr.fromCatalog": "From the catalogue, by {name}.",
      "ui.tr.fromNothing": "Nothing (or Let\u2019s Role\u2019s texts for de, es, it, pt)",
      "ui.tr.hint": "Translate Ourdir into your language: export the template, fill it in (a JSON file, with the English beside it), import it. What is missing stays in English.",
      "ui.tr.import": "Import a translation\u2026",
      "ui.tr.importTitle": "Choose a translation",
      "ui.tr.imported": "\u201C{name}\u201D imported ({pct} %).",
      "ui.tr.importedWarn": "\u201C{name}\u201D imported ({pct} %). {unknown} unknown text(s) ignored, {mismatched} text(s) whose variables or tags differ from the English left aside.",
      "ui.tr.language": "Language code",
      "ui.tr.languageHint": "For example es, pt-BR, oc.",
      "ui.tr.mine": "My translations",
      "ui.tr.name": "Name of the language, in that language",
      "ui.tr.none": "No translation yet.",
      "ui.tr.option": "{name} \xB7 {pct} %",
      "ui.tr.progress": "{pct} % \xB7 engine {engine} % \xB7 launcher {launcher} % \xB7 table {page} %",
      "ui.tr.template": "Export the template",
      "ui.tr.templateSaved": "Template saved: {path}",
      "ui.tr.templateTitle": "Save the translation template",
      "ui.tr.title": "Translations",
      "ui.wizard.attrs.hint": "Rename, remove or add some (twelve at most).",
      "ui.wizard.attrs.label": "Characteristics (separated by commas)",
      "ui.wizard.attrs.q": "Which characteristics?",
      "ui.wizard.back": "Back",
      "ui.wizard.combat.no": "No",
      "ui.wizard.combat.q": "Is there tactical combat?",
      "ui.wizard.combat.yes": "Yes: armour class, initiative and attacks",
      "ui.wizard.finish": "Create my sheet",
      "ui.wizard.genre.more": "Dice pools and narrative dice will come later: for those, pick \u201CI decide\u201D and set the rolls afterwards.",
      "ui.wizard.genre.q": "What kind of game?",
      "ui.wizard.inventory.q": "An inventory?",
      "ui.wizard.look.hint": "You can adjust everything afterwards in the editor. Your sheet will be ready to play as soon as it opens.",
      "ui.wizard.look.q": "What look?",
      "ui.wizard.magic.q": "Is there magic?",
      "ui.wizard.name": "Name of your system",
      "ui.wizard.next": "Next",
      "ui.wizard.no": "No",
      "ui.wizard.resources.hint": "Hit points, fate, mana\u2026 Each has a current value and a maximum (six at most).",
      "ui.wizard.resources.label": "Resources (separated by commas)",
      "ui.wizard.resources.q": "Which resources?",
      "ui.wizard.skills.q": "Add a list of skills?",
      "ui.wizard.stepOf": "Step {n} of {total}",
      "ui.wizard.title": "Creation wizard",
      "ui.wizard.yes": "Yes",
      "wizard.bonusInitiative": "Initiative bonus",
      "wizard.chaqueCaracteristiqueEstPourcentage": "Each attribute is a percentage; a click rolls 1d100, to compare with the value.",
      "wizard.chaqueCaracteristiqueScoreModificateur": "Each attribute has a score; the modifier is computed by itself ((score \u2212 10) \xF7 2) and a click rolls 1d20 + modifier.",
      "wizard.classeArmure": "Armour class",
      "wizard.competences": "Skills",
      "wizard.d20AvecBonusDirect": "A d20 with a direct bonus, and you name everything yourself.",
      "wizard.d20ScoreModificateur": "d20: score and modifier",
      "wizard.equipement": "Equipment",
      "wizard.forceConstitutionTailleDexterite": "Strength, Constitution, Size, Dexterity, Appearance, Intelligence, Power, Education",
      "wizard.forceDexteriteConstitutionIntelligence": "Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma",
      "wizard.invalid": "The assistant made an invalid sheet: {why}",
      "wizard.jeDecide": "I decide",
      "wizard.pasMagie": "No magic",
      "wizard.physiqueAdresseEspritPresence": "Body, Agility, Mind, Presence",
      "wizard.pointsVieSanteMentale": "Hit points, Sanity",
      "wizard.ressourceActuelMaxListe": "A current / max resource, and a list of spells.",
      "wizard.seriePastillesCocherListe": "A series of pips to tick, and a list of spells.",
      "wizard.valeurCaracteristiqueEstBonus": "The attribute's value is the bonus: a click rolls 1d20 + value.",
      "ui.cat.showCommunity": "Show community content",
      "ui.cat.verifiedOnly": "Only verified content is shown (Ourdir, Official, Validated).",
      "ui.cat.hiddenOne": "1 community item matches: show it",
      "ui.cat.hiddenMany": "{n} community items match: show them",
      "ui.grades.title": "Why move up a grade?",
      "ui.grades.intro": "Everything published starts as Community: the automatic checks accepted it, nobody has read it yet. Validated means a person read it: it is Ourdir's mark of quality.",
      "ui.grades.visibility": "Visibility: Validated content is shown to everyone as soon as the Catalogue opens; community content only to those who choose to see it.",
      "ui.grades.trust": "Trust: the Validated badge says a person read it, and the file is hosted by Ourdir (it stays available even if your own hosting goes away).",
      "ui.grades.updates": "Updates without waiting: a Validated creator publishes updates without a new review, except a module asking for a new permission.",
      "ui.grades.sales": "Selling, later: being Validated is the condition to apply as an approved seller, once selling opens.",
      "ui.grades.criteriaTitle": "What we review",
      "ui.grades.criteria": "It works as described; rights are respected (no protected content without a licence); nothing harmful; a clear sheet (name, summary, languages); for a module, justified permissions.",
      "ui.grades.delay": "Every request is read by a person, case by case. It can take several days, even a few weeks. Validation is never automatic nor guaranteed. You get the answer by e-mail and in the app."
    };
  }
});

// product/client/i18n/en.json
var require_en3 = __commonJS({
  "product/client/i18n/en.json"(exports2, module2) {
    module2.exports = {
      "access.banner": "Read only: you can see this sheet, not change it.",
      "accessButton.allRead": "everyone reads",
      "accessButton.button": "Access",
      "accessButton.creator": "Creator: always changes it",
      "accessButton.edit": "Can change it",
      "accessButton.editN": "{n} change it",
      "accessButton.everyone": "All players",
      "accessButton.failed": "The setting could not be saved.",
      "accessButton.hidden": "hidden",
      "accessButton.loading": "Loading\u2026",
      "accessButton.noPlayers": "No player invited yet.",
      "accessButton.none": "Does not see it",
      "accessButton.read": "Read only",
      "accessButton.readN": "{n} read it",
      "accessButton.title": "Who sees this sheet",
      "actions.busy": "One moment: the previous spending is being saved.",
      "actions.noRoll": "The roll did not happen: nothing is spent.",
      "actions.notSaved": "The spending could not be saved.",
      "actions.tooFast": "Too many clicks: wait a moment.",
      "ambiencePanel.dark": "Dark",
      "ambiencePanel.darkHint": "Nearly black: you only see right next to you.",
      "ambiencePanel.day": "Day",
      "ambiencePanel.dayHint": "Everything is visible.",
      "ambiencePanel.hint": "How the scene looks. One click, and the whole table sees it.",
      "ambiencePanel.night": "Night",
      "ambiencePanel.nightHint": "A bluish twilight: everyone sees far, the rest stays readable.",
      "ambiencePanel.title": "Ambience",
      "ambiencePanel.torch": "Torch",
      "ambiencePanel.torchHint": "A dark scene: each character carries a torch and sees only by it.",
      "bubble.angle": "Opening",
      "bubble.bright": "Bright light",
      "bubble.candle": "Candle",
      "bubble.cells": "cells",
      "bubble.clear": "Clear",
      "bubble.close": "Close",
      "bubble.closed": "Closed",
      "bubble.color": "Colour",
      "bubble.dim": "Dim light",
      "bubble.door": "Door",
      "bubble.duplicate": "Duplicate",
      "bubble.exterior": "Exterior",
      "bubble.faulty": "Faulty neon",
      "bubble.flame": "Flame",
      "bubble.glass": "Stained",
      "bubble.intensity": "Intensity",
      "bubble.interior": "Interior",
      "bubble.length": "Length",
      "bubble.light": "Light",
      "bubble.locked": "Locked",
      "bubble.name": "Name",
      "bubble.on": "On",
      "bubble.open": "Open",
      "bubble.pulse": "Pulse",
      "bubble.remove": "Remove",
      "bubble.rotation": "Direction",
      "bubble.secret": "Secret (the players do not see its icon)",
      "bubble.size": "Source size",
      "bubble.sizeAuto": "by its flame",
      "bubble.steady": "Steady",
      "bubble.torch": "Torch",
      "bubble.wall": "Wall",
      "bubble.window": "Window",
      "chat.placeholder": "Write to the table\u2026 /me to act",
      "collision.off": "Ghost: let tokens go through walls",
      "collision.on": "Ghost: tokens go through walls (click to stop)",
      "compendium.add": "Add to the sheet",
      "compendium.added": "\u201C{what}\u201D added to {who}.",
      "compendium.back": "\u2190 Back to the list",
      "compendium.countOf": "{shown} of {total} {many}",
      "compendium.dock": "Dock",
      "compendium.dockHint": "Put back in the sidebar",
      "compendium.failed": "This content could not be loaded.",
      "compendium.loading": "Loading\u2026",
      "compendium.noSheet": "Open a character sheet to add this entry to it (or drag it onto the sheet).",
      "compendium.none": "No entry matches.",
      "compendium.refused": "The sheet did not accept this entry.",
      "compendium.source": "SRD 5.1 (French), Donjon Lib\xE9r\xE9, CC-BY 4.0 \u2014 Wizards of the Coast LLC",
      "compendium.title": "Compendium",
      "compendium.window": "Window",
      "compendium.windowHint": "Open in a window",
      "contextMenu.makeManyMany": "Mass creation ({n} images)",
      "contextMenu.makeManyOne": "Mass creation ({n} image)",
      "contextMenu.makeOne": "Create an NPC with this image",
      "contextMenu.open": "Open the sheet",
      "contextMenu.target": "Target",
      "contextMenu.untarget": "Stop targeting",
      "craftFolders.create": "Create",
      "dnd.classes.adopt": "Take up the subclass: {name}",
      "dnd.classes.leveled": "{who}: {summary}.",
      "dnd.classes.leveledRoll": "{who}: {summary} (die: {roll}).",
      "dnd.classes.nextAverage": "Next level in {class} (average HP)",
      "dnd.classes.nextRoll": "Next level in {class} (HP rolled)",
      "dnd.levelUp.alreadyThere": "\u201C{name}\u201D is already on this sheet.",
      "dnd.levelUp.max": "The total level is already 20.",
      "dnd.levelUp.noLevel": "This class has no level {level}.",
      "dnd.levelUp.noSubclass": "This class has no subclass in the SRD.",
      "dnd.levelUp.notInClass": "This sheet does not have the {class} class: level it up once first.",
      "dnd.levelUp.tooEarly": "{name} is chosen at level {first} (this sheet is level {level} in {class}).",
      "dnd.levelUp.twoClasses": "This sheet already has two classes, other than this one.",
      "dnd.monsters.create": "Create the NPC sheet",
      "dnd.monsters.created": "Sheet \u201C{name}\u201D created.",
      "dnd.monsters.createdNoScene": "Sheet \u201C{name}\u201D created, but there is no open scene to place its token on.",
      "dnd.monsters.failed": "The sheet could not be created.",
      "dnd.monsters.placed": "\u201C{name}\u201D placed on the map, with its sheet.",
      "floorsModel.moved": "\u201C{name}\u201D goes to {level}",
      "floorsModel.movedSomeone": "A token goes to {level}",
      "floorsModel.noAnswer": "The server does not answer.",
      "floorsModel.refused": "Refused.",
      "floorsTools.arrival": "arrival",
      "floorsTools.broken": "Its other end no longer exists: it leads nowhere.",
      "floorsTools.hintOff": "To take a staircase: bring the token next to it (a square and a half at most), then click the staircase's icon.",
      "floorsTools.hintOn": "Drag a rectangle on the map to place a staircase. Click a staircase to select it, drag it to move it, pull a corner to resize it. Esc to finish.",
      "floorsTools.leadsTo": "Leads to",
      "floorsTools.name": "Name",
      "floorsTools.namePlaceholder": "Service stairs, trapdoor\u2026",
      "floorsTools.none": "No staircase.",
      "floorsTools.nowhere": "Nowhere (arrival only)",
      "floorsTools.oneWay": "One way",
      "floorsTools.plain": "First organise the scene into floors (Scene window, \u201CNew floor\u201D) to place staircases in it.",
      "floorsTools.remove": "Remove the staircase",
      "floorsTools.round": "Both ways",
      "floorsTools.secret": "Secret (players do not see the icon)",
      "floorsTools.stair": "Staircase",
      "floorsTools.stairs": "Staircases",
      "floorsTools.title": "Tools",
      "floorsUi.cancel": "Cancel",
      "floorsUi.create": "Create the floor",
      "floorsUi.drag": "Drag to change the order",
      "floorsUi.entry": "Entry floor",
      "floorsUi.floors": "Floors",
      "floorsUi.keys": "Page Up / Page Down: floor above / below",
      "floorsUi.level": "Level",
      "floorsUi.levelHint": "Ground floor, 1st floor, Basement\u2026",
      "floorsUi.makeEntry": "Make it the entry floor",
      "floorsUi.newFloor": "New floor",
      "floorsUi.organise": "Organise into floors",
      "floorsUi.organiseText": "The scene becomes its first floor: the background layer becomes its map, the token layer its tokens, the drawings move onto the tokens and the drawing layer is removed. The scene's lighting becomes this floor's.",
      "floorsUi.others": "Other layers",
      "floorsUi.place": "Place",
      "floorsUi.placeHint": "Lobby, Laboratory\u2026",
      "floorsUi.remove": "Remove the floor",
      "floorsUi.removeAsk": "Remove \u201C{n}\u201D? Its two layers and everything on them, its lighting and its staircases go away.",
      "floorsUi.rename": "Rename",
      "floorsUi.save": "Save",
      "floorsUi.selector": "Floor shown",
      "floorsUi.subtitle": "Subtitle",
      "floorsUi.subtitleHint": "The scene's subtitle (optional)",
      "floorsUi.yes": "Remove",
      "folders.create": "Create",
      "folders.delete": "Delete",
      "folders.failed": "The folder did not answer.",
      "folders.namePrompt": "Folder name",
      "folders.newFolder": "New folder",
      "folders.rename": "Rename",
      "folders.save": "Rename",
      "folders.unfile": "Take out of the folder",
      "host.access.creator": "This sheet is its creator's: they always edit it.",
      "host.access.editForAll": "Editing is not shared with everyone: choose players.",
      "host.access.gmOnly": "Only the GM sets access to sheets.",
      "host.accessOps.ficheIntrouvable": "Sheet not found.",
      "host.accessOps.joueurInconnu": "Unknown player.",
      "host.auth.badInvite": "Invitation link invalid or revoked.",
      "host.auth.gmExists": "The GM account already exists.",
      "host.auth.gmName": "This name is reserved for the GM.",
      "host.auth.gmOnlyOpen": "Only GMs can open the table as GM.",
      "host.auth.identifiantMotPasseIncorrect": "Wrong login or password.",
      "host.auth.motPasseTropLong": "Password too long.",
      "host.auth.nameTaken": "This name is already taken.",
      "host.auth.noCharacter": "No character linked to this player.",
      "host.auth.nomTropCourt": "Name too short.",
      "host.auth.notOnTable": "This account is not at the table.",
      "host.auth.password": "The password must be at least 8 characters long.",
      "host.bulk.needName": "A sheet needs a name.",
      "host.bulk.nothing": "Nothing to create.",
      "host.bulk.tooMany": "Too many sheets at once ({max} at most).",
      "host.bulkParse.imageInvalide": "Invalid image.",
      "host.bulkParse.typeFicheInvalide": "Invalid sheet kind.",
      "host.common.badScene": "Invalid scene.",
      "host.common.badSceneOrFloor": "Invalid scene or floor.",
      "host.common.gmOnly": "Only the GM can change that.",
      "host.common.noData": "Data not found.",
      "host.common.noSheet": "This sheet does not exist.",
      "host.common.notYours": "This character is not yours.",
      "host.common.notYoursTu": "This sheet is not yours.",
      "host.common.nothing": "Nothing to change.",
      "host.common.refused": "Refused.",
      "host.common.tooManyConnections": "Too many connections.",
      "host.common.unknownOp": "Unknown operation.",
      "host.compendium.cannotKeep": "This sheet cannot be kept (no name, or too heavy).",
      "host.compendium.cannotKeepNote": "This note cannot be kept (no title, or too long).",
      "host.compendium.damaged": "This entry is damaged.",
      "host.compendium.full": "The table's compendium is full.",
      "host.compendium.gmOnlyAdd": "Only the GM fills the table's compendium.",
      "host.compendium.gmOnlyCreate": "Only the GM creates from the table's compendium.",
      "host.compendium.gmOnlyRemove": "Only the GM removes from the table's compendium.",
      "host.compendium.gone": "This entry no longer exists.",
      "host.compendium.noteElsewhere": "This note is not from this table.",
      "host.compendium.otherTable": "This sheet is not from this table ({table} \u2260 {here}).",
      "host.compendium.tableIntrouvable": "Table not found.",
      "host.contentFolders.dossierIntrouvable": "Folder not found.",
      "host.contentFolders.dossierParentIntrouvable": "Parent folder not found.",
      "host.craft.gmOnlyBulk": "Only the GM creates sheets in bulk.",
      "host.craft.listFull": "This list is full.",
      "host.craftAdd.cibleIntrouvable": "Target not found.",
      "host.craftAdd.contenuIntrouvable": "Content not found.",
      "host.exploration.cleared": "The exploration was cleared.",
      "host.exploration.gmOnlyClear": "Only the GM can clear the exploration.",
      "host.exploration.invalid": "Invalid exploration memory.",
      "host.exploration.tooBig": "Exploration memory too large.",
      "host.fieldRules.gmOnly": "This field is reserved for the GM.",
      "host.fieldRules.tooBig": "(too large to be checked)",
      "host.filter.gmOnly": "Only the GM sets the filter.",
      "host.floors.already": "This scene is already organised into floors.",
      "host.floors.comeCloser": "Bring your token closer to the staircase.",
      "host.floors.invalid": "Invalid floor.",
      "host.floors.keepOne": "A scene with floors keeps at least one floor.",
      "host.floors.max": "A scene has {max} floors at most.",
      "host.floors.needLevel": "Give the floor a level (ground floor, 1st floor\u2026).",
      "host.floors.noFloor": "This floor does not exist.",
      "host.floors.noRoom": "This scene has too many layers for one more floor.",
      "host.floors.noStair": "This staircase does not exist.",
      "host.floors.order": "The order must name every floor, once each.",
      "host.floors.organiseFirst": "First organise the scene into floors.",
      "host.floors.stairBroken": "The other end of this staircase no longer exists.",
      "host.floors.stairNowhere": "This staircase leads nowhere.",
      "host.floors.streamElsewhere": "A floor's stream goes through /loom/floors/stream.",
      "host.floors.targetGone": "The floor this staircase leads to no longer exists.",
      "host.floors.tokenElsewhere": "This token is not on this floor.",
      "host.floors.tooManyLayers": "This scene has too many layers to be organised into floors.",
      "host.floorsCore.demandeInvalide": "Invalid request.",
      "host.floorsCore.ordreInvalide": "Invalid order.",
      "host.floorsCore.sousTitreInvalide": "Invalid subtitle.",
      "host.folders.intoItself": "A folder cannot go inside itself.",
      "host.folders.needName": "A folder needs a name.",
      "host.httpApp.actionInconnue": "Unknown action.",
      "host.httpApp.filtreInconnu": "Unknown filter.",
      "host.httpApp.genreDossierInvalide": "Invalid folder kind.",
      "host.httpApp.imageIntrouvable": "Image not found.",
      "host.httpApp.tourInvalide": "Invalid turn.",
      "host.httpApp.tropDemandesPatienteInstant": "Too many requests: wait a moment.",
      "host.keyAuth.impossibleTrouverNomLibre": "Could not find a free name.",
      "host.keys.bad": "Invalid key.",
      "host.keys.badOwner": "Invalid owner key.",
      "host.keys.gm": "That is the GM's key.",
      "host.lighting.already": "This scene already has its lighting.",
      "host.lighting.badLight": "Invalid light.",
      "host.lighting.badLightPos": "Invalid light position.",
      "host.lighting.badStairLink": "Invalid staircase link.",
      "host.lighting.badStairPos": "Invalid staircase position.",
      "host.lighting.badWall": "Invalid wall coordinates.",
      "host.lighting.fogTooDetailed": "Fog too detailed.",
      "host.lighting.gmOnly": "Only the GM can change the lighting.",
      "host.lighting.lite": "A Lite table has no lighting editor: the ambiences light it.",
      "host.lighting.locked": "This door is locked.",
      "host.lighting.noDoor": "This door does not exist.",
      "host.lighting.stairSize": "A staircase must be at least 10 units on each side.",
      "host.lighting.tooManyItems": "Too many elements in this scene.",
      "host.lighting.tooManyOps": "Too many changes at once.",
      "host.lighting.wallLength": "A wall must have a length.",
      "host.lightingSchema.brouillardInvalide": "Invalid fog.",
      "host.lightingSchema.escalierInvalide": "Invalid staircase.",
      "host.lightingSchema.murInvalide": "Invalid wall.",
      "host.lightingSchema.porteInvalide": "Invalid door.",
      "host.lightingSchema.suppressionInvalide": "Invalid removal.",
      "host.lobby.cannotOpen": "Cannot open the table.",
      "host.lobby.gmOnlyOther": "Only the GM can open another account.",
      "host.lobby.noPlayer": "Player not found.",
      "host.lobby.signIn": "Sign in first.",
      "host.media.badType": "File type not allowed.",
      "host.media.tooBig": "Request too large.",
      "host.music.gmOnlyClock": "Only the GM sets the music clock.",
      "host.people.sheetN": "Sheet {id}",
      "host.roles.noLook": "Your role at this table does not allow changing a sheet's image or token.",
      "host.roles.noUpload": "Your role at this table does not allow sending files.",
      "host.scene.exploration": "Exploration fog: yes, no, or the table's default.",
      "host.scene.skyEast": "Sky: invalid east direction.",
      "host.scene.skyEvent": "Sky: unknown event.",
      "host.scene.skyNothing": "Sky: nothing to change.",
      "host.scene.skyOnOff": "Sky: on or off.",
      "host.scene.tableExploration": "The table's exploration fog: yes or no.",
      "host.scene.viewDistance": "View distance: a whole number of squares, from 0 (no limit) to {max}.",
      "host.scene.visionPreset": "Unknown vision preset.",
      "host.sceneSettingsSchema.ambianceInconnue": "Unknown ambience.",
      "host.sceneSettingsSchema.cielDemandeInvalide": "Sky: invalid request.",
      "host.sceneSettingsSchema.cielHeureInvalide": "Sky: invalid time.",
      "host.sceneSettingsSchema.cielModeAutomatiqueManuel": "Sky: automatic or manual mode.",
      "host.sceneSettingsSchema.cielPauseNon": "Sky: paused or not.",
      "host.sceneSettingsSchema.cielVitesse110": "Sky: speed \xD71, \xD710, \xD760 or \xD7360.",
      "host.sceneSettingsSchema.styleBrouillardInconnu": "Unknown fog style.",
      "host.sheetVisionAccess.visionFicheInconnue": "Vision: unknown sheet.",
      "host.sheets.gmOnlyDefaults": "Only the GM sets the sheets' defaults.",
      "host.sheets.noDefaults": "No defaults file for this table.",
      "host.sheets.tooMany": "Too many sheets at once.",
      "host.skins.unknown": "Unknown skin for this system.",
      "host.theme.gmOnly": "Only the GM can change the theme.",
      "host.theme.unknown": "Unknown theme.",
      "host.turn.gmOnly": "Only the GM changes the turn.",
      "host.youtube.keyNeeded": "A YouTube API key is needed for playlists (links to single videos work without a key).",
      "hud.next": "Next turn",
      "hud.people": "At the table",
      "hud.previous": "Previous turn",
      "hud.round": "Round",
      "hud.turnOf": "{n}\u2019s turn",
      "journal.all": "All",
      "journal.books": "Books",
      "journal.help": "Journal help",
      "journal.importPdf": "Import a PDF",
      "journal.newFolder": "New folder",
      "journal.notes": "Notes",
      "journal.openPdf": "Open the PDF",
      "journal.search": "Search the journal\u2026",
      "lightEngine.lighter": "Lighting lightened to stay smooth.",
      "lightingPanel.asPlayers": "See as the players do",
      "lightingPanel.auto": "Auto",
      "lightingPanel.autoHint": "Follows the scene's lighting.",
      "lightingPanel.classic": "Classic",
      "lightingPanel.edit": "Edit walls and lights",
      "lightingPanel.editing": "Stop editing",
      "lightingPanel.enabled": "Dynamic lighting",
      "lightingPanel.exploration": "Exploration fog",
      "lightingPanel.explorationClear": "Clear the players' exploration",
      "lightingPanel.explorationClearAsk": "Clear what every player explored of this scene?",
      "lightingPanel.explorationCleared": "Players' exploration cleared.",
      "lightingPanel.explorationHint": "Each player keeps what they explored, from one session to the next. Unchecked: what leaves sight turns black again.",
      "lightingPanel.explorationTable": "(table default)",
      "lightingPanel.fogLook": "Look of the fog",
      "lightingPanel.fogTool": "Fog of war",
      "lightingPanel.full": "Full",
      "lightingPanel.fullHint": "Line of sight and lights, with memory.",
      "lightingPanel.gmFog": "Your fog",
      "lightingPanel.gmFogHint": "What no player sees, darkened on your screen only.",
      "lightingPanel.importUvtt": "Import walls and lights (.dd2vtt, .uvtt)",
      "lightingPanel.importUvttHint": "The walls, doors, windows and lights of a map exported by Dungeondraft, Dungeon Alchemist, DungeonFog\u2026 laid onto the placed map.",
      "lightingPanel.imported": "{w} walls and openings, {l} lights imported.",
      "lightingPanel.keys": "Alt+V next vision \xB7 Alt+P see as the players do",
      "lightingPanel.lightN": "Light",
      "lightingPanel.lights": "Lights of the scene",
      "lightingPanel.mist": "Mist",
      "lightingPanel.needFull": "Vision must be \u201CFull\u201D for lights to count.",
      "lightingPanel.noLights": "This scene has no light. \xAB Edit walls and lights \xBB, then the Light tool.",
      "lightingPanel.off": "None",
      "lightingPanel.offHint": "Everyone sees the whole map.",
      "lightingPanel.parchment": "Parchment",
      "lightingPanel.simple": "Simple",
      "lightingPanel.simpleHint": "Line of sight only, no lights.",
      "lightingPanel.skySoon": "The sky and the hour of the scene are set here.",
      "lightingPanel.smoke": "Smoke",
      "lightingPanel.tabFog": "Fog",
      "lightingPanel.tabLights": "Lights",
      "lightingPanel.tabSky": "Sky",
      "lightingPanel.tabVision": "Vision",
      "lightingPanel.title": "Lighting",
      "lightingPanel.unreadableFile": "Unreadable file.",
      "lightingPanel.viewCells": "{n} squares",
      "lightingPanel.viewDistance": "View distance",
      "lightingPanel.viewDistanceHint": "How far what is lit is seen clearly, for the whole table; beyond, the view greys, then fades out.",
      "lightingPanel.viewUnlimited": "no limit",
      "lightingPanel.vision": "Players' vision",
      "lightingToolbar.done": "Done (Esc)",
      "lightingToolbar.door": "Door",
      "lightingToolbar.doorLocked": "Locked door",
      "lightingToolbar.doorSecret": "Secret door",
      "lightingToolbar.glass": "Stained glass",
      "lightingToolbar.hintDoor": "Click a wall to set the door in it (drag for its width), or draw it like a wall.",
      "lightingToolbar.hintDoorLocked": "Like the door, set locked: the players cannot open it.",
      "lightingToolbar.hintDoorSecret": "Like the door, set secret: the players do not see its icon.",
      "lightingToolbar.hintGlass": "Like the window, stained: the light going through takes its colour (set it afterwards).",
      "lightingToolbar.hintLight": "Click to place a light; click it afterwards to set it.",
      "lightingToolbar.hintSelect": "Click an item to set it beside it. Drag a light or a wall corner. Delete removes it.",
      "lightingToolbar.hintWall": "Interior wall: it stops sight, lamps and the sky. One click per point; double-click, Enter or right-click to finish.",
      "lightingToolbar.hintWallOut": "Exterior wall (a low wall, a place with no roof): it stops sight and lamps, not the sky. One click per point; Enter to finish.",
      "lightingToolbar.hintWindow": "Click a wall to cut the window in it: it lets sight and light through.",
      "lightingToolbar.label": "Lighting",
      "lightingToolbar.light": "Light",
      "lightingToolbar.redo": "Redo (Ctrl+Y)",
      "lightingToolbar.select": "Select",
      "lightingToolbar.undo": "Undo (Ctrl+Z)",
      "lightingToolbar.wall": "Interior wall",
      "lightingToolbar.wallOut": "Exterior wall",
      "lightingToolbar.window": "Window",
      "liteFog.hide": "Hide",
      "liteFog.on": "Fog turned on for this scene.",
      "liteFog.reveal": "Reveal",
      "liteMacros.advantage": "Advantage",
      "liteMacros.disadvantage": "Disadvantage",
      "lookThrough.banner": "{name}'s view \xB7 Ctrl+L or Escape to come back",
      "lookThrough.bannerVowel": "{name}'s view \xB7 Ctrl+L or Escape to come back",
      "lookThrough.someone": "the character",
      "massCreate.doneMany": "{n} NPCs created. All that is left is to edit them.",
      "massCreate.doneOne": "{n} NPC created. All that is left is to edit it.",
      "massCreate.failed": "The mass creation failed.",
      "massCreate.noPath": "One of the images is not in the table's media library: it cannot become a sheet.",
      "massCreate.none": "First select images on the map.",
      "massCreate.working": "Mass creation: {done} of {total}\u2026",
      "people.colour": "My colour",
      "people.failed": "The choice could not be saved.",
      "people.me": "You",
      "people.noSheet": "No sheet",
      "people.none": "None",
      "people.people": "At the table",
      "people.sheet": "My sheet",
      "people.sheetN": "Sheet {id}",
      "people.whisper": "Whisper to {n}",
      "picker.bad": "This file is not a readable picture.",
      "picker.cancel": "Cancel",
      "picker.drag": "Drag the picture to frame it",
      "picker.failed": "The upload failed.",
      "picker.ok": "Confirm",
      "picker.pick": "Choose a file\u2026",
      "picker.round": "Round token",
      "picker.sending": "Sending\u2026",
      "picker.zoom": "Zoom",
      "pkg.identity.badCode": "Invalid friend code.",
      "pkg.identity.badCodeCopy": "Invalid friend code (incomplete or altered copy).",
      "pkg.identity.noEncryption": "Encrypted identity: the system's encryption is unavailable.",
      "pkg.identity.ownCode": "That is your own friend code.",
      "pkg.identity.unreadableCode": "Unreadable friend code.",
      "pkg.invite.badRecipient": "Invalid recipient key.",
      "pkg.invite.badSignature": "Invalid invitation signature.",
      "pkg.invite.expired": "This invitation has expired. Ask for a new one.",
      "pkg.invite.incomplete": "Incomplete invitation, or of an unknown version.",
      "pkg.invite.invitationInvalide": "Invalid invitation.",
      "pkg.invite.invitationInvalideAdresse": "Invalid invitation (address).",
      "pkg.invite.invitationInvalideAdresses": "Invalid invitation (addresses).",
      "pkg.invite.invitationInvalideDate": "Invalid invitation (date).",
      "pkg.invite.invitationInvalideEmpreinte": "Invalid invitation (fingerprint).",
      "pkg.invite.notForYou": "This invitation is not meant for your identity, or it is damaged.",
      "pkg.invite.notInvitation": "This is not an invitation.",
      "pkg.roles.cogm": "Co-GM",
      "pkg.roles.gm": "GM",
      "pkg.roles.player": "Player",
      "pkg.roles.trusted": "Trusted player",
      "pkg.vision.bright": "Bright light",
      "pkg.vision.cone": "Cone: between 30 and 360.",
      "pkg.vision.dark": "Darkvision",
      "pkg.vision.dim": "Dim light",
      "pkg.vision.filter": "Filter: unknown.",
      "pkg.vision.filterRange": "Filter range",
      "pkg.vision.lightColor": "Light: colour #rrggbb.",
      "pkg.vision.lightFlicker": "Light: unknown flicker.",
      "pkg.vision.lightNotObject": "Light: an object is expected.",
      "pkg.vision.lightOn": "Light: on or not.",
      "pkg.vision.lightPreset": "Light: unknown preset.",
      "pkg.vision.needDistance": "{name}: a distance is expected.",
      "pkg.vision.notAllowed": "Vision: reserved for the GM and for whoever may set the vision of their sheets.",
      "pkg.vision.notObject": "Vision: an object is expected.",
      "pkg.vision.range": "{name}: between 0 and {max}.",
      "pkg.vision.sight": "Sight",
      "pkg.vision.unit": "{name}: unit ft, m or squares.",
      "pkg.vision.whole": "Vision: the settings are written whole.",
      "playlistImport.adding": "Music: {done} of {total} added\u2026",
      "playlistImport.doneCut": "{n} tracks added (the first {max}).",
      "playlistImport.doneMany": "{n} tracks added.",
      "playlistImport.doneOne": "{n} track added.",
      "playlistImport.empty": "This YouTube playlist is empty, private or not found.",
      "playlistImport.reading": "Reading the YouTube playlist\u2026",
      "rollTags.failure": "Failure",
      "rollTags.hit": "Hit",
      "rollTags.miss": "Miss",
      "rollTags.success": "Success",
      "rollsToChat.attack": "attack",
      "rollsToChat.damage": "damage",
      "rollsToChat.damageOrHealing": "damage or healing",
      "rollsToChat.hit": "hit",
      "rollsToChat.roll": "roll",
      "rollsToChat.test": "{what} check",
      "screenFilter.auto": "As the theme says",
      "screenFilter.dread": "Gloom and desaturation",
      "screenFilter.failed": "The filter could not be saved.",
      "screenFilter.hint": "A veil over the map area, for the mood. The map itself is never changed.",
      "screenFilter.neon": "Neon veil",
      "screenFilter.noir": "Black and white",
      "screenFilter.none": "None",
      "screenFilter.scan": "Scan lines",
      "screenFilter.title": "Screen filter",
      "screenFilter.vignette": "Warm vignette",
      "settings.full": "Full",
      "settings.fullHint": "All the windows.",
      "settings.hidden": "Hidden",
      "settings.hiddenHint": "Only the map, for immersion.",
      "settings.interface": "Interface",
      "settings.keys": "Alt+1 full \xB7 Alt+2 reduced \xB7 Alt+3 hidden \xB7 Alt+H hide or restore",
      "settings.reduced": "Reduced",
      "settings.reducedHint": "Windows fold into icons.",
      "settings.sheets": "Sheets",
      "settings.sheetsHint": "The lighting settings every new sheet takes (its Settings tab). The sheets already made keep theirs.",
      "settings.theme": "Theme",
      "settings.themeHint": "How the interface looks, for the whole table. The map never changes.",
      "settings.title": "Settings",
      "sheetModel.tooManyOutfits": "Too many outfits.",
      "sheetTabs.addLine": "Add a line",
      "sheetTabs.affiliation": "Affiliation",
      "sheetTabs.age": "Age",
      "sheetTabs.appearance": "Appearance",
      "sheetTabs.bio": "Bio & Info",
      "sheetTabs.bioText": "Biography",
      "sheetTabs.changePortrait": "Change the picture\u2026",
      "sheetTabs.changeToken": "Change the token\u2026",
      "sheetTabs.create": "Create",
      "sheetTabs.eyes": "Eyes",
      "sheetTabs.goals": "Goals and ties",
      "sheetTabs.hair": "Hair",
      "sheetTabs.height": "Height",
      "sheetTabs.images": "Pictures",
      "sheetTabs.info": "Information",
      "sheetTabs.labelPh": "Label",
      "sheetTabs.moreInfo": "Other information",
      "sheetTabs.newOutfit": "New outfit",
      "sheetTabs.notes": "Notes",
      "sheetTabs.occupation": "Occupation",
      "sheetTabs.origin": "Origin",
      "sheetTabs.outfitName": "Outfit name",
      "sheetTabs.outfits": "Outfits",
      "sheetTabs.outfitsHint": "An outfit is a picture and a token. Change it any time: the token on the map follows.",
      "sheetTabs.params": "Settings",
      "sheetTabs.personality": "Personality",
      "sheetTabs.portrait": "Picture",
      "sheetTabs.portraitTitle": "Character picture",
      "sheetTabs.readOnly": "You can read this sheet, not change it.",
      "sheetTabs.remove": "Delete",
      "sheetTabs.removeAsk": "Delete this outfit?",
      "sheetTabs.rename": "Rename",
      "sheetTabs.sheet": "Sheet",
      "sheetTabs.skin": "Skin",
      "sheetTabs.story": "Biography",
      "sheetTabs.token": "Token",
      "sheetTabs.tokenFromPortrait": "Token from the picture",
      "sheetTabs.tokenTitle": "Character token",
      "sheetTabs.valuePh": "Value",
      "sheetTabs.wear": "Wear",
      "sheetTabs.weight": "Weight",
      "sheetTabs.worn": "Worn",
      "shell.actions": "Actions",
      "shell.audio": "Audio",
      "shell.close": "Close",
      "shell.content": "Content",
      "shell.craft": "Character",
      "shell.hidden": "Hidden",
      "shell.hint": "Each window is an icon of the bar on the left, a tab on the right, or hidden.",
      "shell.left": "Left",
      "shell.main": "Main",
      "shell.menu": "Interface",
      "shell.modules": "Modules and others",
      "shell.other": "Other",
      "shell.restore": "Restore the interface",
      "shell.right": "Right",
      "shell.tabs": "Right panels",
      "shell.title": "Interface",
      "shell.tool": "Tools",
      "shell.tools": "Left windows",
      "skyPanel.afternoon": "afternoon",
      "skyPanel.auto": "Auto",
      "skyPanel.autoHint": "The astre moves on by itself, at the chosen speed.",
      "skyPanel.blood": "Blood moon",
      "skyPanel.dawn": "dawn",
      "skyPanel.dawnAt": "Dawn",
      "skyPanel.dusk": "dusk",
      "skyPanel.duskAt": "Dusk",
      "skyPanel.enabled": "Sky",
      "skyPanel.evening": "evening",
      "skyPanel.event": "The night",
      "skyPanel.failed": "The sky could not be changed.",
      "skyPanel.full": "Full moon",
      "skyPanel.intro": "The sky gives the map its hour: the sun by day, the moon by night. Off, the scene keeps its darkness and its lamps.",
      "skyPanel.manual": "Manual",
      "skyPanel.manualHint": "The astre stays where you put it.",
      "skyPanel.mode": "Time",
      "skyPanel.moments": "Go to",
      "skyPanel.morning": "morning",
      "skyPanel.new": "New moon",
      "skyPanel.night": "night",
      "skyPanel.nightAt": "Night",
      "skyPanel.none": "None",
      "skyPanel.noon": "noon",
      "skyPanel.noonAt": "Noon",
      "skyPanel.pause": "Pause",
      "skyPanel.paused": "paused",
      "skyPanel.resume": "Resume",
      "skyPanel.ring": "Drag the astre on the ring around the map to change the hour; the E handle tells where east is.",
      "skyPanel.speed": "Speed",
      "spend.notEnough": "Not enough {name}: {left} left, {need} needed.",
      "spend.notFound": "Resource not found on this sheet: {name}.",
      "spend.spends": "{who} spends {what}",
      "spend.spent": "Spent: {what}",
      "stairs.comeCloser": "Bring your token next to the staircase, then click its icon.",
      "stairs.nowhere": "This staircase leads nowhere.",
      "tableCompendium.empty": "Nothing yet: a right click on a sheet of the list keeps it here.",
      "tableCompendium.failed": "The table's compendium did not answer.",
      "tableCompendium.fromSheet": "From the sheet",
      "tableCompendium.keep": "Keep in the table's compendium",
      "tableCompendium.keepNote": "Keep the note in the compendium",
      "tableCompendium.kept": "\u201C{n}\u201D kept in the table's compendium.",
      "tableCompendium.keptOn": "Kept on",
      "tableCompendium.kind": "Kind of sheet",
      "tableCompendium.made": "Sheet \u201C{n}\u201D created from the compendium.",
      "tableCompendium.make": "Create on the table",
      "tableCompendium.makeNote": "Create the note on the table",
      "tableCompendium.many": "entries",
      "tableCompendium.note": "Journal note",
      "tableCompendium.remove": "Remove from the compendium",
      "tableCompendium.removed": "\u201C{n}\u201D removed from the compendium.",
      "tableCompendium.search": "Search the table's compendium\u2026",
      "tableCompendium.tagNote": "note",
      "tableCompendium.tagSheet": "sheet",
      "tableCompendium.title": "Table",
      "target.chip": "Target",
      "target.none": "This is not a target: it has no sheet.",
      "target.remove": "Remove the target",
      "themes.cyberpunk": "Cyberpunk",
      "themes.espace": "Space opera",
      "themes.fantasy": "Fantasy",
      "themes.horreur": "Horror",
      "themes.metier": "Loom",
      "themes.noir": "Film noir",
      "uvtt.notUvtt": "This file is not a Universal VTT map (.dd2vtt, .uvtt, .df2vtt).",
      "vision.gpuLost": "Lighting: the graphics card dropped out, simplified rendering.",
      "vision.notChanged": "The setting could not be changed ({status}).",
      "vision.notCleared": "The exploration could not be cleared ({status}).",
      "vision.simplified": "Lighting simplified: this machine struggles to keep up.",
      "visionForm.blindsight": "Blindsight",
      "visionForm.bright": "Bright",
      "visionForm.candle": "Candle",
      "visionForm.case": "cells",
      "visionForm.color": "Colour",
      "visionForm.cone": "Cone",
      "visionForm.custom": "Custom",
      "visionForm.dark": "In the dark",
      "visionForm.darkHint": "Within this distance, darkness shows as grey dim light.",
      "visionForm.darkReach": "Distance",
      "visionForm.defaults": "Take the table's defaults back",
      "visionForm.dim": "Dim",
      "visionForm.faulty": "faulty",
      "visionForm.filter": "Filter",
      "visionForm.filterReach": "Filter reach",
      "visionForm.filterReachHint": "= the sight",
      "visionForm.flicker": "Flicker",
      "visionForm.grey": "Black and white",
      "visionForm.k-candle": "candle",
      "visionForm.k-torch": "torch",
      "visionForm.lantern": "Lantern",
      "visionForm.light": "Carried light",
      "visionForm.lightOn": "Lit",
      "visionForm.nightvision": "Night vision",
      "visionForm.none": "None",
      "visionForm.preset": "Kind",
      "visionForm.pulse": "pulse",
      "visionForm.reach": "Reach",
      "visionForm.readonly": "Read only: set by the game master, or by whoever has the right \xAB Their sheets' vision \xBB.",
      "visionForm.sceneReach": "no limit",
      "visionForm.sight": "Sight",
      "visionForm.spell": "Light spell",
      "visionForm.steady": "steady",
      "visionForm.thermal": "Thermal",
      "visionForm.torch": "Torch",
      "visionForm.unitHint": "ft and m are converted by the scene's grid."
    };
  }
});

// apps/desktop/verifier/cli.ts
var cli_exports = {};
__export(cli_exports, {
  sayFrench: () => sayFrench
});
module.exports = __toCommonJS(cli_exports);
var import_node_fs6 = __toESM(require("node:fs"));
var import_node_path6 = __toESM(require("node:path"));

// apps/desktop/src/catalog/pipeline.ts
var import_node_crypto3 = __toESM(require("node:crypto"));
var import_node_fs4 = __toESM(require("node:fs"));
var import_node_os2 = __toESM(require("node:os"));
var import_node_path4 = __toESM(require("node:path"));

// apps/desktop/src/modules/install.ts
var import_node_crypto = __toESM(require("node:crypto"));
var import_node_fs2 = __toESM(require("node:fs"));
var import_node_os = __toESM(require("node:os"));
var import_node_path2 = __toESM(require("node:path"));

// apps/desktop/src/identity.ts
var import_crypto = __toESM(require("crypto"));

// apps/desktop/src/say.ts
var given = null;
var french = null;
function useTexts(fn) {
  given = fn;
}
function frenchTexts() {
  if (french) return french;
  french = {};
  const proc = globalThis.process;
  const fs7 = proc && typeof proc.getBuiltinModule === "function" ? proc.getBuiltinModule("node:fs") : null;
  const path7 = proc && fs7 && proc.getBuiltinModule ? proc.getBuiltinModule("node:path") : null;
  if (!proc || !fs7 || !path7) return french;
  for (const base of [proc.cwd(), path7.resolve(proc.cwd(), ".."), path7.resolve(proc.cwd(), "..", "..")]) {
    const files = [path7.join(base, "product", "client", "i18n", "fr.json"), path7.join(base, "apps", "desktop", "i18n", "fr.json")];
    if (!files.every((f) => fs7.existsSync(f))) continue;
    for (const f of files) Object.assign(french, JSON.parse(fs7.readFileSync(f, "utf8")));
    break;
  }
  return french;
}
function say(key, vars) {
  if (given) return given(key, vars);
  let text = frenchTexts()[key] || key;
  if (vars) for (const k of Object.keys(vars)) text = text.split("{" + k + "}").join(String(vars[k]));
  return text;
}

// apps/desktop/src/identity.ts
var SPKI_ED25519_PREFIX = Buffer.from("302a300506032b6570032100", "hex");
var MAX_NAME = 32;
var b64u = (buf) => buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
var fromB64u = (text) => Buffer.from(text.replace(/-/g, "+").replace(/_/g, "/"), "base64");
function generateIdentity() {
  const pair = import_crypto.default.generateKeyPairSync("ed25519");
  const spki = pair.publicKey.export({ type: "spki", format: "der" });
  const pkcs8 = pair.privateKey.export({ type: "pkcs8", format: "der" });
  return { publicKey: b64u(spki.slice(spki.length - 32)), privateKey: b64u(pkcs8) };
}
function isValidPublicKey(publicKey) {
  if (typeof publicKey !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(publicKey)) {
    return false;
  }
  return fromB64u(publicKey).length === 32;
}
function sanitizeName(raw) {
  return String(raw == null ? "" : raw).replace(/'/g, "\u2019").replace(/[\u0000-\u001f\u007f<>&"`]/g, "").replace(/\s+/g, " ").trim().slice(0, MAX_NAME);
}
function signedBytes(context, data) {
  return Buffer.concat([Buffer.from("tabletop/v1/" + context + "\0", "utf8"), data]);
}
function sign(identity, context, data) {
  const key = import_crypto.default.createPrivateKey({
    key: fromB64u(identity.privateKey),
    format: "der",
    type: "pkcs8"
  });
  return b64u(import_crypto.default.sign(null, signedBytes(context, data), key));
}
function verify(publicKey, context, data, signature) {
  if (!isValidPublicKey(publicKey) || typeof signature !== "string" || signature.length > 128) {
    return false;
  }
  try {
    const key = import_crypto.default.createPublicKey({
      key: Buffer.concat([SPKI_ED25519_PREFIX, fromB64u(publicKey)]),
      format: "der",
      type: "spki"
    });
    return import_crypto.default.verify(null, signedBytes(context, data), key, fromB64u(signature));
  } catch (e) {
    return false;
  }
}

// apps/desktop/src/modules/compat.ts
var RULES = [
  // ---- shimmed
  { api: "Hooks", re: /\bHooks\.(on|once|off|call|callAll)\b/g, status: "supported", note: "err.compat.hooks", permission: "engine.hook" },
  { api: "game.settings", re: /\bgame\.settings\.(register|registerMenu|get|set)\b/g, status: "supported", note: "err.compat.settings", permission: "storage.local" },
  { api: "game.i18n", re: /\bgame\.i18n\.(localize|format|has)\b/g, status: "supported", note: "err.compat.i18n" },
  { api: "game.modules", re: /\bgame\.modules\.(get|has)\b/g, status: "supported", note: "err.compat.modules" },
  { api: "game.user", re: /\bgame\.(user|users)\b/g, status: "partial", note: "err.compat.user" },
  { api: "ui.notifications", re: /\bui\.notifications\.(info|warn|error|notify)\b/g, status: "supported", note: "err.compat.notifications", permission: "ui.panel" },
  { api: "ChatMessage", re: /\bChatMessage\.(create|getSpeaker)\b/g, status: "partial", note: "err.compat.chatMessage", permission: "chat.write" },
  { api: "Hooks chatMessage", re: /["']chatMessage["']/g, status: "partial", note: "err.compat.chatCommand", permission: "chat.command" },
  { api: "Roll", re: /\bnew\s+Roll\s*\(|\bRoll\.(create|validate|fromTerms)\b/g, status: "partial", note: "err.compat.roll", permission: "dice.formula" },
  { api: "Dialog", re: /\bnew\s+Dialog\s*\(|\bDialog\.(prompt|confirm|wait)\b/g, status: "partial", note: "err.compat.dialog", permission: "ui.panel" },
  { api: "foundry.utils", re: /\bfoundry\.utils\.\w+|\b(mergeObject|deepClone|duplicate|randomID|isEmpty|getProperty|setProperty|hasProperty|expandObject|flattenObject)\s*\(/g, status: "supported", note: "err.compat.utils" },
  { api: "Handlebars / templates", re: /\bHandlebars\.register(Helper|Partial)\b|\b(loadTemplates|renderTemplate)\s*\(/g, status: "partial", note: "err.compat.templates", permission: "ui.panel" },
  { api: "jQuery", re: /\bjQuery\b|\$\s*\(\s*["'`<]/g, status: "partial", note: "err.compat.jquery" },
  { api: "CONFIG", re: /\bCONFIG\.\w+/g, status: "partial", note: "err.compat.config" },
  { api: "game.actors/items/scenes/journal", re: /\bgame\.(actors|items|scenes|journal|tables|folders|combats)\b/g, status: "partial", note: "err.compat.readOnly", permission: "sheet.read" },
  { api: "render hooks", re: /["']render(Actor|Item|Chat|Journal|Application|Dialog|Scene|Token|Player)\w*["']/g, status: "partial", note: "err.compat.renders", permission: "ui.sheet" },
  { api: "document hooks", re: /["'](pre|update|create|delete)(Actor|Token|Item|Scene|Combat|Combatant|Journal)\w*["']/g, status: "partial", note: "err.compat.events", permission: "engine.hook" },
  { api: "game.system", re: /\bgame\.system\b/g, status: "partial", note: "err.compat.system" },
  // ---- not available
  { api: "canvas / PIXI", re: /\bcanvas\.(tokens|stage|scene|grid|walls|lighting|drawings|app|primary|effects|interface|hud|controls|templates)\b|\bPIXI\./g, status: "unsupported", note: "err.compat.canvas" },
  { api: "Actor / Item classes", re: /\bextends\s+(Actor|Item|ActorSheet|ItemSheet|Token|TokenDocument|Application|ApplicationV2|FormApplication|DocumentSheet|Combat|Combatant)\b|\bCONFIG\.(Actor|Item)\.(documentClass|sheetClasses)\b/g, status: "unsupported", note: "err.compat.dataModel" },
  { api: "libWrapper", re: /\blibWrapper\b/g, status: "unsupported", note: "err.compat.libWrapper" },
  { api: "sockets", re: /\bgame\.socket\b|\bsocketlib\b/g, status: "unsupported", note: "err.compat.sockets" },
  { api: "FilePicker / UI classes", re: /\bFilePicker\b|\bContextMenu\b|\bSettingsConfig\b|\bTabs\b\s*\(/g, status: "unsupported", note: "err.compat.foundryUi" },
  { api: "Macros", re: /\bgame\.macros\b|\bMacro\.\w+|\bexecuteMacro\b/g, status: "unsupported", note: "err.compat.macros" },
  // ---- blocked by the sandbox, on purpose
  { api: "eval / Function", re: /\beval\s*\(|\bnew\s+Function\s*\(|\bFunction\s*\(\s*["'`]/g, status: "blocked", note: "err.compat.eval" },
  { api: "network", re: /\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\b|\bEventSource\b|\bsendBeacon\b/g, status: "blocked", note: "err.compat.noNetwork" },
  { api: "dynamic import", re: /\bimport\s*\(/g, status: "blocked", note: "err.compat.dynamicImport" },
  { api: "browser storage / cookies", re: /\bdocument\.cookie\b|\blocalStorage\b|\bsessionStorage\b|\bindexedDB\b/g, status: "blocked", note: "err.compat.storage" },
  { api: "window escape", re: /\bwindow\.(open|top|parent|opener)\b|\bparent\.postMessage\b/g, status: "blocked", note: "err.compat.escape" },
  { api: "node access", re: /\brequire\s*\(|\bprocess\.(env|binding|mainModule)\b|\bchild_process\b/g, status: "blocked", note: "err.compat.noSystem" }
];
function stripComments(src) {
  let out = "";
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const d = src[i + 1];
    if (c === "/" && d === "/") {
      while (i < n && src[i] !== "\n") i++;
    } else if (c === "/" && d === "*") {
      i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) {
        if (src[i] === "\n") out += "\n";
        i++;
      }
      i += 2;
    } else if (c === '"' || c === "'" || c === "`") {
      const q = c;
      out += c;
      i++;
      while (i < n && src[i] !== q) {
        if (src[i] === "\\") {
          out += src[i++];
        }
        if (i < n) out += src[i++];
      }
      if (i < n) out += src[i++];
    } else {
      out += c;
      i++;
    }
  }
  return out;
}
function analyzeScripts(sources) {
  const found = /* @__PURE__ */ new Map();
  for (const file of sources) {
    const text = stripComments(file.text);
    for (const rule of RULES) {
      const matches = text.match(new RegExp(rule.re.source, "g"));
      if (!matches) continue;
      const entry = found.get(rule.api) ?? {
        api: rule.api,
        status: rule.status,
        note: say(rule.note),
        // the notes are keys, said in the language of the moment
        count: 0,
        files: [],
        permission: rule.permission
      };
      entry.count += matches.length;
      if (!entry.files.includes(file.path)) entry.files.push(file.path);
      found.set(rule.api, entry);
    }
  }
  return summarize([...found.values()].sort((x, y) => y.count - x.count), sources.length > 0);
}
function summarize(apis, hasScripts) {
  const counts = { supported: 0, partial: 0, unsupported: 0, blocked: 0 };
  for (const a of apis) counts[a.status]++;
  const weight = { supported: 1, partial: 0.5, unsupported: 0, blocked: 0 };
  const score = apis.length ? apis.reduce((s, a) => s + weight[a.status], 0) / apis.length : 1;
  const suggested = /* @__PURE__ */ new Set();
  for (const a of apis) {
    if (a.permission && (a.status === "supported" || a.status === "partial")) suggested.add(a.permission);
  }
  let verdict;
  if (!hasScripts && !apis.length) verdict = "data-only";
  else if (counts.unsupported === 0 && counts.blocked === 0 && score >= 0.75) verdict = "compatible";
  else if (score >= 0.4 && counts.unsupported <= 2) verdict = "partial";
  else verdict = "incompatible";
  if (verdict === "compatible" && counts.blocked > 0) verdict = "partial";
  return { verdict, score: Math.round(score * 100) / 100, apis, suggestedPermissions: [...suggested].sort(), counts };
}
var UNSUPPORTED_LIBS = {
  "lib-wrapper": "err.compat.libLibWrapper",
  socketlib: "err.compat.libSocketlib",
  "lib-df-hotkeys": "err.compat.libHotkeys"
};
function withDependencies(report, requires, hasScripts) {
  const extra = requires.filter((r) => UNSUPPORTED_LIBS[r.id]).map((r) => ({ api: say("err.compat.dependency", { id: r.id }), status: "unsupported", note: say(UNSUPPORTED_LIBS[r.id]), count: 1, files: ["module.json"] }));
  return extra.length ? summarize([...report.apis, ...extra], hasScripts) : report;
}

// apps/desktop/src/modules/foundry.ts
var MAX_PACK_BYTES = 50 * 1024 * 1024;

// apps/desktop/src/modules/permissions.ts
var PERMISSIONS = [
  // interface
  { id: "ui.panel", risk: "low", group: "ui" },
  // own panels / windows / dialogs
  { id: "ui.toolbar", risk: "low", group: "ui" },
  // buttons, menus, keybindings
  { id: "ui.style", risk: "low", group: "ui" },
  // CSS scoped to the app
  { id: "ui.sheet", risk: "medium", group: "ui" },
  // tabs and blocks on character sheets
  // events and interception
  { id: "engine.hook", risk: "low", group: "engine" },
  // observe events
  { id: "engine.intercept", risk: "high", group: "engine" },
  // change or cancel an action before it happens
  // chat and dice
  { id: "chat.write", risk: "low", group: "chat" },
  { id: "chat.command", risk: "low", group: "chat" },
  { id: "chat.read", risk: "medium", group: "chat" },
  { id: "dice.formula", risk: "low", group: "dice" },
  // new functions / modifiers in formulas
  { id: "dice.intercept", risk: "high", group: "dice" },
  // alter roll results
  // scene and tokens
  { id: "scene.read", risk: "low", group: "scene" },
  { id: "scene.draw", risk: "medium", group: "scene" },
  // overlays drawn on the map
  { id: "scene.modify", risk: "high", group: "scene" },
  { id: "tokens.read", risk: "low", group: "scene" },
  { id: "tokens.modify", risk: "high", group: "scene" },
  // characters
  { id: "sheet.read", risk: "medium", group: "sheet" },
  { id: "sheet.write", risk: "high", group: "sheet" },
  // misc
  { id: "storage.local", risk: "low", group: "misc" },
  // its own key/value store
  { id: "audio.play", risk: "low", group: "misc" },
  { id: "host.script", risk: "high", group: "misc" }
  // run code in the GM's host sandbox
];
var RESERVED_PERMISSIONS = ["net.fetch", "fs.read", "fs.write", "dom.raw"];
var BY_ID = new Map(PERMISSIONS.map((p) => [p.id, p]));
function classify(requested) {
  const known = [];
  const reserved = [];
  const unknown = [];
  for (const id of new Set(requested)) {
    if (BY_ID.has(id)) known.push(id);
    else if (RESERVED_PERMISSIONS.includes(id)) reserved.push(id);
    else unknown.push(id);
  }
  return { known, reserved, unknown };
}

// apps/desktop/src/modules/manifest.ts
var MAX_MANIFEST_BYTES = 256 * 1024;
var SUPPORTED_API = "1";
var ID_RE = /^[a-z0-9_][a-z0-9_-]{1,63}$/;
var VERSION_RE = /^\d+(\.\d+){0,3}(-[0-9A-Za-z.-]+)?$/;
var ALLOWED_EXT = /* @__PURE__ */ new Set([
  ".js",
  ".mjs",
  ".css",
  ".json",
  ".html",
  ".hbs",
  ".md",
  ".txt",
  ".db",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".mp3",
  ".ogg",
  ".wav",
  ".webm",
  ".woff",
  ".woff2",
  ".ttf",
  ".svg",
  ".map",
  ".yml",
  ".yaml"
]);
var CONTROL = /[\u0000-\u001f\u007f]/g;
var clean = (v, max) => typeof v === "string" ? v.replace(CONTROL, "").trim().slice(0, max) : "";
function safeRelPath(p, allowNoExt = false) {
  if (typeof p !== "string" || p.length === 0 || p.length > 240) {
    return null;
  }
  if (/[\u0000-\u001f\u007f:*?"<>|]/.test(p)) {
    return null;
  }
  const norm = p.replace(/\\/g, "/").replace(/^\.\//, "");
  if (norm.startsWith("/") || /^[a-zA-Z]:/.test(norm) || norm.includes("//")) {
    return null;
  }
  const parts = norm.split("/");
  if (parts.some((s) => s === ".." || s === "." || s === "")) {
    return null;
  }
  const dot = parts[parts.length - 1].lastIndexOf(".");
  const ext = dot >= 0 ? parts[parts.length - 1].slice(dot).toLowerCase() : "";
  if (!ext ? !allowNoExt : !ALLOWED_EXT.has(ext)) {
    return null;
  }
  return norm;
}
function isAllowedExtension(file) {
  const dot = file.lastIndexOf(".");
  return dot >= 0 && ALLOWED_EXT.has(file.slice(dot).toLowerCase());
}
function normalizeVersion(v) {
  const s = typeof v === "number" ? String(v) : typeof v === "string" ? v.trim().replace(/^v/i, "") : "";
  if (!VERSION_RE.test(s)) {
    return null;
  }
  const [core2, pre] = s.split(/-(.+)/);
  const nums = core2.split(".");
  while (nums.length < 3) nums.push("0");
  return nums.join(".") + (pre ? "-" + pre : "");
}
function compareVersions(a, b) {
  const pa = a.split("-")[0].split(".").map(Number);
  const pb = b.split("-")[0].split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) < (pb[i] || 0) ? -1 : 1;
  }
  const preA = a.includes("-"), preB = b.includes("-");
  return preA === preB ? 0 : preA ? -1 : 1;
}
var asArray = (v) => Array.isArray(v) ? v : v == null ? [] : [v];
function parseManifest(raw) {
  const errors = [];
  const warnings = [];
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, errors: [say("err.manifest.notObject")] };
  }
  const m = raw;
  const tt = m.tabletop && typeof m.tabletop === "object" ? m.tabletop : null;
  const kind = tt ? "native" : "foundry";
  const id = clean(m.id ?? m.name, 64).toLowerCase();
  if (!ID_RE.test(id)) {
    errors.push(say("err.manifest.badId"));
  }
  const version = normalizeVersion(m.version);
  if (!version) {
    errors.push(say("err.manifest.versionInvalideEx1"));
  }
  const title = clean(m.title ?? m.name, 100) || id;
  const scriptsRaw = [...asArray(m.esmodules), ...asArray(m.scripts)];
  const scripts = [];
  for (const s of scriptsRaw) {
    const p = safeRelPath(s);
    if (!p || !/\.m?js$/i.test(p)) errors.push(say("err.manifest.badScript", { path: String(s).slice(0, 80) }));
    else scripts.push(p);
  }
  const styles = [];
  for (const s of asArray(m.styles)) {
    const p = safeRelPath(s);
    if (!p || !/\.css$/i.test(p)) errors.push(say("err.manifest.badStyle", { path: String(s).slice(0, 80) }));
    else styles.push(p);
  }
  const languages = [];
  for (const l of asArray(m.languages)) {
    const o = l || {};
    const p = safeRelPath(o.path);
    const lang = clean(o.lang, 12);
    if (!p || !/\.json$/i.test(p) || !/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})?$/.test(lang)) {
      errors.push(say("err.manifest.badLanguage", { path: clean(o.path, 60) }));
    } else languages.push({ lang, name: clean(o.name, 40) || lang, path: p });
  }
  const packs = [];
  for (const pk of asArray(m.packs)) {
    const o = pk || {};
    const p = safeRelPath(o.path, true);
    const name = clean(o.name, 64);
    if (!p || !/^[a-zA-Z0-9_-]{1,64}$/.test(name)) {
      errors.push(say("err.manifest.badCompendium", { path: clean(o.path ?? o.name, 60) }));
    } else packs.push({ name, label: clean(o.label, 100) || name, type: clean(o.type, 24) || "unknown", path: p });
  }
  const requires = [];
  const requiresSystem = [];
  const rel = m.relationships && typeof m.relationships === "object" ? m.relationships : {};
  for (const r of [...asArray(rel.requires), ...asArray(m.dependencies)]) {
    const o = r || {};
    const rid = clean(o.id ?? o.name, 64).toLowerCase();
    if (!ID_RE.test(rid)) continue;
    if (o.type === "system") requiresSystem.push(rid);
    else requires.push({ id: rid, minVersion: normalizeVersion(o.compatibility?.minimum) || void 0 });
  }
  const conflicts = asArray(rel.conflicts).map((c) => clean((c || {}).id, 64).toLowerCase()).filter((c) => ID_RE.test(c));
  const authors = [
    ...asArray(m.authors).map((a) => clean(typeof a === "string" ? a : a?.name, 60)),
    clean(m.author, 60)
  ].filter(Boolean);
  let api;
  let permissions = [];
  if (tt) {
    const apiVersion = clean(tt.api, 8);
    if (apiVersion !== SUPPORTED_API) errors.push(say("err.manifest.api", { api: SUPPORTED_API }));
    const entry = safeRelPath(tt.entry);
    if (!entry || !/\.m?js$/i.test(entry)) errors.push(say("err.manifest.tabletopEntryManquantInvalide"));
    else api = { version: apiVersion, entry };
    const requested = asArray(tt.permissions).map((p) => clean(p, 40));
    const split = classify(requested);
    if (split.unknown.length) errors.push("permissions inconnues : " + split.unknown.join(", "));
    if (split.reserved.length) errors.push("permissions non disponibles : " + split.reserved.join(", "));
    permissions = split.known;
    if (styles.length && !permissions.includes("ui.style")) {
      errors.push(say("err.manifest.needStyle"));
    }
    if (api && !scripts.includes(api.entry)) scripts.push(api.entry);
  } else if (!scripts.length && !styles.length && !languages.length && !packs.length) {
    errors.push(say("err.manifest.moduleVideAucunScript"));
  }
  if (m.socket === true) warnings.push(say("err.manifest.sockets"));
  const compat = m.compatibility && typeof m.compatibility === "object" ? m.compatibility : {};
  if (errors.length || !version) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    warnings,
    manifest: {
      id,
      title,
      version,
      description: clean(m.description, 1e3),
      authors,
      license: clean(m.license, 60),
      url: /^https:\/\//i.test(String(m.url || "")) ? clean(m.url, 200) : "",
      kind,
      api,
      files: { scripts, styles, languages, packs },
      requires,
      requiresSystem,
      conflicts,
      permissions,
      access: tt && tt.access === "licensed" ? "licensed" : "free",
      foundryCompat: kind === "foundry" ? {
        minimum: clean(compat.minimum ?? m.minimumCoreVersion, 20) || void 0,
        verified: clean(compat.verified ?? m.compatibleCoreVersion, 20) || void 0,
        maximum: clean(compat.maximum, 20) || void 0
      } : void 0
    }
  };
}

// apps/desktop/src/modules/bundle.ts
var MAX_BUNDLE_BYTES = 4 * 1024 * 1024;
var MAX_FILE_BYTES = 2 * 1024 * 1024;
var usesModuleSyntax = (text) => /^\s*(import\s*[\w{*"']|export\s)/m.test(text);

// apps/desktop/src/modules/zip.ts
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_node_zlib = __toESM(require("node:zlib"));
var DEFAULT_LIMITS = {
  maxEntries: 5e3,
  maxFileBytes: 128 * 1024 * 1024,
  maxTotalBytes: 512 * 1024 * 1024,
  maxRatio: 200,
  ratioFloor: 1024 * 1024
};
var ZipError = class extends Error {
};
var u16 = (b, o) => b.readUInt16LE(o);
var u32 = (b, o) => b.readUInt32LE(o);
function safeEntryName(raw) {
  if (!raw || raw.includes("\0")) {
    return null;
  }
  const name = raw.replace(/\\/g, "/");
  if (name.startsWith("/") || /^[a-zA-Z]:/.test(name)) {
    return null;
  }
  const parts = name.split("/").filter((p, i, a) => !(p === "" && i === a.length - 1));
  if (parts.some((p) => p === "" || p === "." || p === ".." || /[<>:"|?*]/.test(p) || /[. ]$/.test(p))) {
    return null;
  }
  return parts.join("/");
}
function listZip(buf, limits = DEFAULT_LIMITS) {
  const min = Math.max(0, buf.length - 65557);
  let eocd = -1;
  for (let i = buf.length - 22; i >= min; i--) {
    if (u32(buf, i) === 101010256) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) {
    throw new ZipError(say("err.zip.archiveZipInvalide"));
  }
  const total = u16(buf, eocd + 10);
  const cdSize = u32(buf, eocd + 12);
  const cdOffset = u32(buf, eocd + 16);
  if (total === 65535 || cdSize === 4294967295 || cdOffset === 4294967295) {
    throw new ZipError("ZIP64 non pris en charge.");
  }
  if (total > limits.maxEntries) {
    throw new ZipError(say("err.zip.tooManyEntries", { n: total, max: limits.maxEntries }));
  }
  if (cdOffset + cdSize > buf.length) {
    throw new ZipError("Archive ZIP corrompue.");
  }
  const entries = [];
  let p = cdOffset;
  for (let i = 0; i < total; i++) {
    if (p + 46 > buf.length || u32(buf, p) !== 33639248) {
      throw new ZipError(say("err.zip.central"));
    }
    const flags = u16(buf, p + 8);
    const method = u16(buf, p + 10);
    const nameLen = u16(buf, p + 28);
    const extraLen = u16(buf, p + 30);
    const commentLen = u16(buf, p + 32);
    const madeBy = u16(buf, p + 4) >> 8;
    const extAttr = u32(buf, p + 38);
    const rawName = buf.subarray(p + 46, p + 46 + nameLen).toString("utf8");
    if (flags & 1) {
      throw new ZipError(say("err.zip.encrypted"));
    }
    if (madeBy === 3 && (extAttr >>> 16 & 61440) === 40960) {
      throw new ZipError(say("err.zip.symlink", { name: rawName.slice(0, 80) }));
    }
    const name = safeEntryName(rawName);
    if (name === null) {
      throw new ZipError(say("err.zip.dangerous", { name: rawName.slice(0, 80) }));
    }
    entries.push({
      name,
      method,
      compressedSize: u32(buf, p + 20),
      size: u32(buf, p + 24),
      crc: u32(buf, p + 16),
      offset: u32(buf, p + 42),
      isDir: rawName.endsWith("/")
    });
    p += 46 + nameLen + extraLen + commentLen;
  }
  const seen = /* @__PURE__ */ new Set();
  for (const e of entries) {
    const key = e.name.toLowerCase();
    if (seen.has(key)) {
      throw new ZipError(say("err.zip.duplicate", { name: e.name }));
    }
    seen.add(key);
  }
  return entries;
}
function readEntry(buf, e, limits) {
  if (e.size > limits.maxFileBytes) {
    throw new ZipError(say("err.zip.fileTooBig", { name: e.name }));
  }
  if (e.size > limits.ratioFloor && e.compressedSize > 0 && e.size / e.compressedSize > limits.maxRatio) {
    throw new ZipError(`Taux de compression suspect (bombe ?) : ${e.name}`);
  }
  if (e.offset + 30 > buf.length || u32(buf, e.offset) !== 67324752) {
    throw new ZipError(say("err.zip.local"));
  }
  const start = e.offset + 30 + u16(buf, e.offset + 26) + u16(buf, e.offset + 28);
  if (start + e.compressedSize > buf.length) {
    throw new ZipError(say("err.zip.data"));
  }
  const packed = buf.subarray(start, start + e.compressedSize);
  let data;
  if (e.method === 0) {
    data = Buffer.from(packed);
  } else if (e.method === 8) {
    try {
      data = import_node_zlib.default.inflateRawSync(packed, { maxOutputLength: Math.max(1, e.size + 1) });
    } catch {
      throw new ZipError(say("err.zip.corrupt", { name: e.name }));
    }
  } else {
    throw new ZipError(say("err.zip.method", { method: e.method, name: e.name }));
  }
  if (data.length !== e.size) {
    throw new ZipError(say("err.zip.size", { name: e.name }));
  }
  if (import_node_zlib.default.crc32(data) !== e.crc) {
    throw new ZipError(say("err.zip.crc", { name: e.name }));
  }
  return data;
}
function extractZip(buf, dest, limits = DEFAULT_LIMITS) {
  const entries = listZip(buf, limits);
  const root = import_node_path.default.resolve(dest);
  import_node_fs.default.mkdirSync(root, { recursive: true });
  let total = 0;
  const written = [];
  for (const e of entries) {
    const target = import_node_path.default.resolve(root, e.name);
    if (target !== root && !target.startsWith(root + import_node_path.default.sep)) {
      throw new ZipError(say("err.zip.dangerous", { name: e.name }));
    }
    if (e.isDir) {
      import_node_fs.default.mkdirSync(target, { recursive: true });
      continue;
    }
    total += e.size;
    if (total > limits.maxTotalBytes) {
      throw new ZipError(say("err.zip.tooBig"));
    }
    const data = readEntry(buf, e, limits);
    import_node_fs.default.mkdirSync(import_node_path.default.dirname(target), { recursive: true });
    import_node_fs.default.writeFileSync(target, data);
    written.push(e.name);
  }
  return written;
}

// apps/desktop/src/catalog/licensed.ts
var licensedRefusal = () => say("err.licensed.refusal");

// apps/desktop/src/modules/install.ts
var officialKeys = [];
var SIGNATURE_FILE = "SIGNATURE.json";
var GENERATED_DIR = ".tabletop";
var MAX_FILES = 5e3;
var MAX_TOTAL = 512 * 1024 * 1024;
var MAX_SCRIPT_READ = 5 * 1024 * 1024;
var InstallError = class extends Error {
};
function copyTree(src, dest) {
  import_node_fs2.default.mkdirSync(dest, { recursive: true });
  for (const e of import_node_fs2.default.readdirSync(src, { withFileTypes: true })) {
    const from = import_node_path2.default.join(src, e.name);
    const to = import_node_path2.default.join(dest, e.name);
    const st = import_node_fs2.default.lstatSync(from);
    if (st.isSymbolicLink()) continue;
    if (st.isDirectory()) copyTree(from, to);
    else if (st.isFile()) import_node_fs2.default.copyFileSync(from, to);
  }
}
var sha256 = (data) => import_node_crypto.default.createHash("sha256").update(data).digest("hex");
function walk(dir, base = dir) {
  const out = [];
  for (const e of import_node_fs2.default.readdirSync(dir, { withFileTypes: true })) {
    const full = import_node_path2.default.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full, base));
    else out.push(import_node_path2.default.relative(base, full).split(import_node_path2.default.sep).join("/"));
  }
  return out;
}
function hashPackage(root) {
  const files = walk(root).filter((f) => f !== SIGNATURE_FILE && !f.startsWith(GENERATED_DIR + "/")).sort();
  const h = import_node_crypto.default.createHash("sha256");
  for (const f of files) {
    h.update(`${f}\0${sha256(import_node_fs2.default.readFileSync(import_node_path2.default.join(root, f)))}
`);
  }
  return { hash: h.digest("hex"), files };
}
var signedPayload = (id, version, hash) => Buffer.from(`${id}|${version}|${hash}`, "utf8");
function signPackage(root, publisher, name) {
  const parsed = readManifest(root);
  const { hash } = hashPackage(root);
  const body = {
    v: 1,
    publisher: { name: sanitizeName(name), publicKey: publisher.publicKey },
    hash,
    signature: sign(publisher, "module", signedPayload(parsed.id, parsed.version, hash)),
    signedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  import_node_fs2.default.writeFileSync(import_node_path2.default.join(root, SIGNATURE_FILE), JSON.stringify(body, null, 2), "utf8");
}
var MANIFEST_FILES = ["module.json", "system.json"];
function manifestFile(root) {
  for (const name of MANIFEST_FILES) {
    const file = import_node_path2.default.join(root, name);
    if (import_node_fs2.default.existsSync(file)) return { file, packageType: name === "system.json" ? "system" : "module" };
  }
  return null;
}
function readManifest(root) {
  const found = manifestFile(root);
  if (!found) throw new InstallError(say("err.install.noManifest"));
  const file = found.file;
  if (import_node_fs2.default.statSync(file).size > MAX_MANIFEST_BYTES) throw new InstallError(say("err.install.moduleJsonTropVolumineux"));
  let raw;
  try {
    raw = JSON.parse(import_node_fs2.default.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
  } catch {
    throw new InstallError(say("err.install.badJson"));
  }
  const parsed = parseManifest(raw);
  if (!parsed.ok) throw new InstallError(say("err.install.manifestRefused", { list: parsed.errors.join("\n- ") }));
  return parsed.manifest;
}
function verifySignature(root, m, hash) {
  const file = import_node_path2.default.join(root, SIGNATURE_FILE);
  if (!import_node_fs2.default.existsSync(file)) return { trust: "unsigned" };
  try {
    const s = JSON.parse(import_node_fs2.default.readFileSync(file, "utf8"));
    const key = s.publisher?.publicKey;
    if (s.v !== 1 || !isValidPublicKey(key) || typeof s.signature !== "string") {
      return { trust: "unsigned", warning: say("err.install.badSignature") };
    }
    if (s.hash !== hash || !verify(key, "module", signedPayload(m.id, m.version, hash), s.signature)) {
      return { trust: "unsigned", warning: say("err.install.tampered") };
    }
    const publisher = { name: sanitizeName(s.publisher?.name) || say("err.install.publisher"), publicKey: key };
    return { trust: officialKeys.includes(key) ? "official" : "signed", publisher };
  } catch {
    return { trust: "unsigned", warning: say("err.install.badSignature") };
  }
}
function copyClean(src, dest, skipped) {
  let count = 0;
  let total = 0;
  const visit = (dir, rel) => {
    for (const e of import_node_fs2.default.readdirSync(dir, { withFileTypes: true })) {
      const from = import_node_path2.default.join(dir, e.name);
      const to = rel ? `${rel}/${e.name}` : e.name;
      const lst = import_node_fs2.default.lstatSync(from);
      if (lst.isSymbolicLink()) {
        skipped.push(`${to} (lien symbolique)`);
      } else if (lst.isDirectory()) {
        if (e.name === ".git" || e.name === "node_modules" || e.name === GENERATED_DIR) {
          skipped.push(say("err.install.skippedFolder", { path: to }));
        } else visit(from, to);
      } else if (lst.isFile()) {
        const okName = isAllowedExtension(e.name) || /^(LICENSE|README|CHANGELOG|NOTICE)$/i.test(e.name);
        if (!okName) {
          skipped.push(say("err.install.skippedType", { path: to }));
          continue;
        }
        if (++count > MAX_FILES) throw new InstallError(say("err.install.tooMany"));
        total += lst.size;
        if (total > MAX_TOTAL) throw new InstallError(say("err.install.moduleTropVolumineux"));
        import_node_fs2.default.mkdirSync(import_node_path2.default.dirname(import_node_path2.default.join(dest, to)), { recursive: true });
        import_node_fs2.default.copyFileSync(from, import_node_path2.default.join(dest, to));
      }
    }
  };
  visit(src, "");
  return count;
}
function findRoot(dir) {
  if (manifestFile(dir)) return dir;
  const subs = import_node_fs2.default.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory());
  if (subs.length === 1 && manifestFile(import_node_path2.default.join(dir, subs[0].name))) {
    return import_node_path2.default.join(dir, subs[0].name);
  }
  throw new InstallError(say("err.install.noManifestAtRoot"));
}
function prepare(source, tmpBase = import_node_os.default.tmpdir(), opts = {}) {
  const work = import_node_fs2.default.mkdtempSync(import_node_path2.default.join(tmpBase, "td-mod-"));
  const dispose = () => import_node_fs2.default.rmSync(work, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  try {
    const stat = import_node_fs2.default.statSync(source);
    const skipped = [];
    const raw = import_node_path2.default.join(work, "raw");
    if (stat.isDirectory()) {
      import_node_fs2.default.mkdirSync(raw);
      copyTree(source, raw);
    } else if (/\.zip$/i.test(source)) {
      if (stat.size > DEFAULT_LIMITS.maxTotalBytes) throw new InstallError(say("err.install.archiveTropVolumineuse"));
      extractZip(import_node_fs2.default.readFileSync(source), raw);
    } else {
      throw new InstallError(say("err.install.choose"));
    }
    const clean2 = import_node_path2.default.join(work, "clean");
    import_node_fs2.default.mkdirSync(clean2);
    const fileCount = copyClean(findRoot(raw), clean2, skipped);
    const manifest = readManifest(clean2);
    if (manifest.access === "licensed" && !opts.allowLicensed) throw new InstallError(licensedRefusal());
    const warnings = [];
    const missing = [];
    const refs = [
      ...manifest.files.scripts,
      ...manifest.files.styles,
      ...manifest.files.languages.map((l) => l.path)
    ];
    for (const r of refs) if (!import_node_fs2.default.existsSync(import_node_path2.default.join(clean2, r))) missing.push(r);
    if (missing.length) throw new InstallError(say("err.install.missingFiles", { list: missing.join("\n- ") }));
    const { hash } = hashPackage(clean2);
    const sig = verifySignature(clean2, manifest, hash);
    if (sig.warning) warnings.push(sig.warning);
    if (skipped.length) warnings.push(say("err.install.skipped", { n: skipped.length }));
    const parsedAgain = parseManifest(JSON.parse(import_node_fs2.default.readFileSync(manifestFile(clean2).file, "utf8")));
    if (parsedAgain.ok) warnings.push(...parsedAgain.warnings);
    let multiFile = false;
    for (const rel of manifest.files.scripts) {
      const full = import_node_path2.default.join(clean2, rel);
      if (import_node_fs2.default.statSync(full).size <= MAX_SCRIPT_READ && usesModuleSyntax(import_node_fs2.default.readFileSync(full, "utf8"))) multiFile = true;
    }
    let compat;
    if (manifest.kind === "foundry") {
      const scripts = walk(clean2).filter((f) => /\.m?js$/i.test(f) && !f.startsWith(GENERATED_DIR + "/")).slice(0, 400);
      const sources = scripts.map((p) => {
        const full = import_node_path2.default.join(clean2, p);
        return { path: p, text: import_node_fs2.default.statSync(full).size > MAX_SCRIPT_READ ? "" : import_node_fs2.default.readFileSync(full, "utf8") };
      });
      compat = withDependencies(analyzeScripts(sources), manifest.requires, sources.length > 0);
    }
    return {
      root: clean2,
      manifest,
      warnings,
      skipped,
      hash,
      trust: sig.trust,
      publisher: sig.publisher,
      compat,
      fileCount,
      packageType: manifestFile(clean2).packageType,
      multiFile,
      dispose
    };
  } catch (err) {
    dispose();
    if (err instanceof ZipError) throw new InstallError(err.message);
    throw err;
  }
}

// apps/desktop/src/modules/safeFetch.ts
var import_node_dns = __toESM(require("node:dns"));
var import_node_http = __toESM(require("node:http"));
var import_node_https = __toESM(require("node:https"));
var import_node_net = __toESM(require("node:net"));
var FetchError = class extends Error {
};
var v4 = (ip) => {
  const m = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(ip);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])] : null;
};
function isBlockedAddress(raw) {
  const ip = raw.toLowerCase().replace(/^\[|\]$/g, "").split("%")[0];
  const mapped = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/.exec(ip);
  if (mapped) {
    return isBlockedAddress(mapped[1]);
  }
  const a = v4(ip);
  if (a) {
    const [p, q] = a;
    return p === 0 || p === 10 || p === 127 || p >= 224 || p === 100 && q >= 64 && q <= 127 || p === 169 && q === 254 || p === 172 && q >= 16 && q <= 31 || p === 192 && q === 168 || p === 192 && q === 0 && a[2] === 0 || p === 198 && (q === 18 || q === 19);
  }
  if (import_node_net.default.isIPv6(ip)) {
    return ip === "::" || ip === "::1" || /^f[cd]/.test(ip) || /^fe[89ab]/.test(ip) || /^ff/.test(ip);
  }
  return true;
}
function checkUrl(u, opts) {
  if (u.protocol !== "https:" && !(opts.allowHttp && u.protocol === "http:")) {
    throw new FetchError(say("err.fetch.httpsOnly"));
  }
  if (u.username || u.password) {
    throw new FetchError(say("err.fetch.credentials"));
  }
  const port2 = u.port ? Number(u.port) : u.protocol === "https:" ? 443 : 80;
  const okPort = port2 === 443 || (opts.allowedPorts || []).includes(port2);
  if (!okPort) {
    throw new FetchError(say("err.fetch.port"));
  }
  const host = u.hostname.replace(/^\[|\]$/g, "");
  if (!opts.allowPrivate && import_node_net.default.isIP(host) && isBlockedAddress(host)) {
    throw new FetchError(say("err.fetch.private"));
  }
}
function guardedLookup(allowPrivate) {
  return (hostname, options, cb) => {
    import_node_dns.default.lookup(hostname, options, (err, address, family) => {
      if (err) {
        return cb(err, address, family);
      }
      const list2 = Array.isArray(address) ? address.map((a) => a.address) : [address];
      if (!allowPrivate && list2.some((a) => isBlockedAddress(a))) {
        return cb(new FetchError(say("err.fetch.private")), "", 0);
      }
      cb(null, address, family);
    });
  };
}
async function fetchLimited(url, opts) {
  const deadline = Date.now() + (opts.timeoutMs ?? 3e4);
  let current;
  try {
    current = new URL(url);
  } catch {
    throw new FetchError(say("err.safeFetch.adresseInvalide"));
  }
  for (let hop = 0; hop <= (opts.maxRedirects ?? 5); hop++) {
    checkUrl(current, opts);
    const step = await once(current, opts, Math.max(1e3, deadline - Date.now()));
    if (step.redirect) {
      try {
        current = new URL(step.redirect, current);
      } catch {
        throw new FetchError(say("err.safeFetch.redirectionInvalide"));
      }
      continue;
    }
    return { body: step.body, finalUrl: current.href };
  }
  throw new FetchError(say("err.safeFetch.tropRedirections"));
}
function once(u, opts, timeoutMs) {
  return new Promise((resolve, reject) => {
    const lib = u.protocol === "https:" ? import_node_https.default : import_node_http.default;
    const req = lib.request(
      u,
      {
        method: "GET",
        agent: false,
        timeout: timeoutMs,
        lookup: guardedLookup(!!opts.allowPrivate),
        headers: { "user-agent": "Ourdir", accept: "*/*", "accept-encoding": "identity" }
      },
      (res) => {
        const status = res.statusCode || 0;
        if ([301, 302, 303, 307, 308].includes(status) && res.headers.location) {
          res.resume();
          resolve({ redirect: String(res.headers.location) });
          return;
        }
        if (status !== 200) {
          res.resume();
          reject(new FetchError(say("err.fetch.status", { status })));
          return;
        }
        const declared = Number(res.headers["content-length"] || 0);
        if (declared > opts.maxBytes) {
          res.resume();
          reject(new FetchError(say("err.client.fichierTropVolumineux")));
          return;
        }
        const chunks = [];
        let size = 0;
        res.on("data", (c) => {
          size += c.length;
          if (size > opts.maxBytes) {
            req.destroy(new FetchError(say("err.client.fichierTropVolumineux")));
            return;
          }
          chunks.push(c);
        });
        res.on("end", () => resolve({ body: Buffer.concat(chunks) }));
        res.on("error", reject);
      }
    );
    req.on("timeout", () => req.destroy(new FetchError(say("err.fetch.noAnswer"))));
    req.on("error", (e) => reject(e instanceof FetchError ? e : new FetchError(`Connexion impossible : ${e.message}`)));
    req.end();
  });
}

// apps/desktop/src/catalog/builder.ts
var import_node_crypto2 = __toESM(require("node:crypto"));
var import_node_fs3 = __toESM(require("node:fs"));
var import_node_path3 = __toESM(require("node:path"));

// apps/desktop/src/catalog/format.ts
var CATALOG_FORMAT = "ourdir-catalog";
var CATALOG_VERSION = 2;
var INDEX_FILE = "index.json";
var SIGNATURE_FILE2 = "index.json.sig";
var KINDS = ["system", "theme", "compendium", "maps", "adventure", "translation", "module"];
var MB = 1024 * 1024;
var LIMITS = {
  indexBytes: 8 * MB,
  entries: 2e3,
  versions: 100,
  tags: 8,
  name: 80,
  summary: 300,
  description: 4e3,
  changelog: 2e3,
  permissions: 40,
  revokedKeys: 500,
  revokedPackages: 2e3,
  successions: 500,
  languages: 12,
  dependencies: 20,
  packageBytes: 256 * MB,
  systemBytes: 10 * MB
};
var KIND_BYTES = {
  module: LIMITS.packageBytes,
  system: LIMITS.systemBytes,
  theme: 64 * 1024,
  // a theme is a small document of values (spec « thèmes de table » §2)
  translation: MB,
  // texts only (spec « traductions » §2): 1 MB without its English column
  compendium: 256 * MB,
  maps: 512 * MB,
  adventure: 512 * MB
};
var ID_RE2 = /^[a-z0-9][a-z0-9_-]{1,63}$/;
var VERSION_RE2 = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]{1,30})?$/;
var SHA_RE = /^[0-9a-f]{64}$/;
var TAG_RE = /^[a-z0-9][a-z0-9-]{0,23}$/;
var PERM_RE = /^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*){1,3}$/;
var REL_URL_RE = /^(?!\/)(?!.*\.\.)(?!.*\/\/)[A-Za-z0-9._\-/]{1,200}$/;
var LANG_RE = /^[a-z]{2,3}(-[A-Z]{2})?$/;
var CONTROL_RE = new RegExp("[" + [[0, 8], [11, 12], [14, 31], [127, 133], [8232, 8233]].map(([a, b]) => String.fromCharCode(a) + "-" + String.fromCharCode(b)).join("") + "]", "g");
var isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
function cleanText(v, max) {
  return (typeof v === "string" ? v : "").replace(CONTROL_RE, "").trim().slice(0, max);
}
function isoDate(v) {
  if (typeof v !== "string" || v.length > 40) return null;
  const t = Date.parse(v);
  return Number.isFinite(t) ? new Date(t).toISOString() : null;
}
function isAcceptableUrl(url, opts = {}) {
  if (typeof url !== "string") return false;
  if (REL_URL_RE.test(url)) return true;
  try {
    const u = new URL(url);
    if (u.username || u.password || url.length > 500) return false;
    if (u.protocol === "https:") return true;
    return !!opts.loopbackPort && u.protocol === "http:" && u.hostname === "127.0.0.1" && Number(u.port) === opts.loopbackPort;
  } catch {
    return false;
  }
}
function requirement(v) {
  if (!isObj(v) || typeof v.id !== "string" || !ID_RE2.test(v.id)) return null;
  if (v.minVersion === void 0) return { id: v.id };
  return typeof v.minVersion === "string" && VERSION_RE2.test(v.minVersion) ? { id: v.id, minVersion: v.minVersion } : null;
}
function parseIndex(bytes, opts = {}) {
  const errors = [];
  const err = (m) => {
    if (errors.length < 8) errors.push(m);
  };
  const size = typeof bytes === "string" ? Buffer.byteLength(bytes) : bytes.length;
  if (size > LIMITS.indexBytes) return { ok: false, errors: [say("err.format.indexTropVolumineux")] };
  let raw;
  try {
    const text = typeof bytes === "string" ? bytes : bytes.toString("utf8");
    raw = JSON.parse(text.charCodeAt(0) === 65279 ? text.slice(1) : text);
  } catch {
    return { ok: false, errors: [say("err.format.indexIllisibleJsonInvalide")] };
  }
  if (!isObj(raw) || raw.format !== CATALOG_FORMAT) return { ok: false, errors: [say("err.format.notIndex")] };
  if (raw.v !== CATALOG_VERSION) return { ok: false, errors: [say("err.format.version")] };
  const sequence = raw.sequence;
  if (!(typeof sequence === "number" && Number.isSafeInteger(sequence) && sequence >= 0)) err(say("err.format.sequence"));
  const generatedAt = isoDate(raw.generatedAt);
  const expiresAt = isoDate(raw.expiresAt);
  if (!generatedAt) err(say("err.format.generated"));
  if (!expiresAt) err(say("err.format.expires"));
  if (generatedAt && expiresAt && Date.parse(expiresAt) <= Date.parse(generatedAt)) err(say("err.format.expiresFirst"));
  const entries = [];
  const rawEntries = Array.isArray(raw.entries) ? raw.entries : (err(say("err.format.noEntries")), []);
  if (rawEntries.length > LIMITS.entries) err(say("err.format.tooMany"));
  const seenIds = /* @__PURE__ */ new Set();
  for (const e of rawEntries.slice(0, LIMITS.entries)) {
    if (!isObj(e)) {
      err(say("err.format.unreadable"));
      continue;
    }
    const id = e.id;
    if (typeof id !== "string" || !ID_RE2.test(id)) {
      err(say("err.format.badEntryId", { id: String(id).slice(0, 40) }));
      continue;
    }
    if (seenIds.has(id)) {
      err(say("err.format.duplicate", { id }));
      continue;
    }
    seenIds.add(id);
    const kind = e.kind;
    if (typeof kind !== "string" || !KINDS.includes(kind)) {
      err(say("err.format.badKind", { id }));
      continue;
    }
    const system = e.system === void 0 ? void 0 : requirement(e.system);
    if (system === null) {
      err(say("err.format.badSystem", { id }));
      continue;
    }
    const languages = (Array.isArray(e.languages) ? e.languages : []).filter((l) => typeof l === "string" && LANG_RE.test(l)).slice(0, LIMITS.languages);
    const access = e.access === void 0 ? "free" : e.access;
    if (access !== "free" && access !== "licensed") {
      err(say("err.format.badAccess", { id }));
      continue;
    }
    const store = typeof e.store === "string" && e.store.startsWith("https://") && isAcceptableUrl(e.store) ? e.store : void 0;
    if (access === "licensed" && !store) {
      err(say("err.format.needStore", { id }));
      continue;
    }
    const rawDeps = Array.isArray(e.dependencies) ? e.dependencies : [];
    if (rawDeps.length > LIMITS.dependencies) {
      err(say("err.format.tooManyDeps", { id }));
      continue;
    }
    const deps2 = rawDeps.map(requirement);
    if (deps2.some((d) => !d || d.id === id)) {
      err(say("err.format.badDep", { id }));
      continue;
    }
    const dependencies = deps2;
    const name = cleanText(e.name, LIMITS.name);
    if (name.length < 2) {
      err(say("err.format.noName", { id }));
      continue;
    }
    const pub = isObj(e.publisher) ? e.publisher : {};
    if (!isValidPublicKey(pub.key)) {
      err(say("err.format.badPublisherKey", { id }));
      continue;
    }
    const tags = (Array.isArray(e.tags) ? e.tags : []).filter((t) => typeof t === "string" && TAG_RE.test(t)).slice(0, LIMITS.tags);
    const homepage = typeof e.homepage === "string" && isAcceptableUrl(e.homepage) && e.homepage.startsWith("https://") ? e.homepage : void 0;
    const versions = [];
    const seenVersions = /* @__PURE__ */ new Set();
    const rawVersions = Array.isArray(e.versions) ? e.versions : [];
    if (rawVersions.length > LIMITS.versions) err(say("err.format.tooManyVersions", { id }));
    for (const v of rawVersions.slice(0, LIMITS.versions)) {
      if (!isObj(v)) {
        err(`${id} : version illisible.`);
        continue;
      }
      const version = v.version;
      if (typeof version !== "string" || !VERSION_RE2.test(version)) {
        err(say("err.format.badVersion", { id }));
        continue;
      }
      if (seenVersions.has(version)) {
        err(`${id} ${version} : version en double.`);
        continue;
      }
      const sha2564 = v.sha256;
      if (typeof sha2564 !== "string" || !SHA_RE.test(sha2564)) {
        err(say("err.format.badSha", { id, version }));
        continue;
      }
      const cap = KIND_BYTES[kind];
      const vsize = v.size;
      if (!(typeof vsize === "number" && Number.isInteger(vsize) && vsize > 0 && vsize <= cap)) {
        err(say("err.format.badSize", { id, version }));
        continue;
      }
      if (!isAcceptableUrl(v.url, opts)) {
        err(say("err.format.badUrl", { id, version }));
        continue;
      }
      const publishedAt = isoDate(v.publishedAt);
      if (!publishedAt) {
        err(say("err.format.badDate", { id, version }));
        continue;
      }
      const status = v.status === void 0 ? "active" : v.status;
      if (status !== "active" && status !== "deprecated" && status !== "revoked") {
        err(say("err.format.badStatus", { id, version }));
        continue;
      }
      const permissions = (Array.isArray(v.permissions) ? v.permissions : []).filter((p) => typeof p === "string" && PERM_RE.test(p)).slice(0, LIMITS.permissions);
      const minApp = typeof v.minApp === "string" && VERSION_RE2.test(v.minApp) ? v.minApp : void 0;
      const vkey = v.key;
      if (vkey !== void 0 && !isValidPublicKey(vkey)) {
        err(say("err.format.badVersionKey", { id, version }));
        continue;
      }
      seenVersions.add(version);
      versions.push({ version, sha256: sha2564, size: vsize, url: v.url, publishedAt, permissions, minApp, changelog: cleanText(v.changelog, LIMITS.changelog) || void 0, status, ...vkey ? { key: vkey } : {} });
    }
    if (!versions.length) {
      err(say("err.format.noVersion", { id }));
      continue;
    }
    entries.push({
      id,
      kind,
      name,
      summary: cleanText(e.summary, LIMITS.summary),
      description: cleanText(e.description, LIMITS.description),
      license: cleanText(e.license, LIMITS.name),
      tags,
      homepage,
      system,
      languages,
      access,
      store,
      dependencies,
      publisher: { name: cleanText(pub.name, LIMITS.name) || say("err.format.unknownPublisher"), key: pub.key },
      versions
    });
  }
  const graph = new Map(entries.map((x) => [x.id, x.dependencies.map((d) => d.id)]));
  const seen = /* @__PURE__ */ new Map();
  const loops = (n) => {
    if (seen.get(n) === 2) return false;
    if (seen.get(n) === 1) return true;
    seen.set(n, 1);
    for (const m of graph.get(n) ?? []) if (loops(m)) return true;
    seen.set(n, 2);
    return false;
  };
  for (const x of entries) if (loops(x.id)) {
    err(say("err.format.depLoop", { id: x.id }));
    break;
  }
  const rev = isObj(raw.revoked) ? raw.revoked : {};
  const keys = (Array.isArray(rev.keys) ? rev.keys : []).filter((k) => isValidPublicKey(k)).slice(0, LIMITS.revokedKeys);
  const packages = (Array.isArray(rev.packages) ? rev.packages : []).filter(isObj).filter((p) => typeof p.id === "string" && ID_RE2.test(p.id) && (p.version === void 0 || typeof p.version === "string" && VERSION_RE2.test(p.version))).slice(0, LIMITS.revokedPackages).map((p) => ({ id: p.id, version: p.version }));
  const successions = (Array.isArray(raw.successions) ? raw.successions : []).filter(isObj).filter((f) => typeof f.body === "string" && f.body.length <= 1024 && (f.sig === null || isObj(f.sig)) && (f.delegation === void 0 || typeof f.delegation === "string" && f.delegation.length <= 4096)).slice(0, LIMITS.successions).map((f) => ({ body: f.body, sig: f.sig, ...typeof f.delegation === "string" ? { delegation: f.delegation } : {} }));
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    index: { format: CATALOG_FORMAT, v: CATALOG_VERSION, sequence, generatedAt, expiresAt, entries, revoked: { keys, packages }, successions }
  };
}

// apps/desktop/src/catalog/signing.ts
var INDEX_CONTEXT = "ourdir-catalog/v2";
function signBytes(bytes, identity, context, now = /* @__PURE__ */ new Date()) {
  const body = { v: 1, publicKey: identity.publicKey, signature: sign(identity, context, bytes), signedAt: now.toISOString() };
  return JSON.stringify(body, null, 2);
}
function verifyBytes(bytes, signatureText, keys, context, what = say("err.signing.whatCatalog")) {
  const What = what.charAt(0).toUpperCase() + what.slice(1);
  if (!keys.length) return { ok: false, reason: say("err.signing.noKeys") };
  let sig;
  try {
    const text = signatureText.toString();
    if (text.length > 2048) return { ok: false, reason: say("err.signing.fichierSignatureTropVolumineux") };
    sig = JSON.parse(text);
  } catch {
    return { ok: false, reason: say("err.signing.fichierSignatureIllisible") };
  }
  if (sig.v !== 1 || !isValidPublicKey(sig.publicKey) || typeof sig.signature !== "string") return { ok: false, reason: say("err.signing.fichierSignatureInvalide") };
  if (!keys.includes(sig.publicKey)) return { ok: false, reason: say("err.signing.unknownKey", { What }) };
  if (!verify(sig.publicKey, context, bytes, sig.signature)) return { ok: false, reason: say("err.signing.mismatch", { what }) };
  return { ok: true, publicKey: sig.publicKey };
}
var signIndex = (indexBytes, identity, now = /* @__PURE__ */ new Date()) => signBytes(indexBytes, identity, INDEX_CONTEXT, now);
var verifyIndex = (indexBytes, signatureText, keys) => verifyBytes(indexBytes, signatureText, keys, INDEX_CONTEXT);

// apps/desktop/src/catalog/trust.ts
var DELEGATION_FILE = "delegation.json";
var TIERS_FILE = "tiers.json";
var TIERS_SIGNATURE_FILE = "tiers.json.sig";
var DELEGATION_CONTEXT = "ourdir-delegation/v1";
var TIERS_CONTEXT = "ourdir-tiers/v1";
var TIERS_LIMITS = { bytes: 1024 * 1024, keys: 500, versions: 5e3, name: 80 };
var isObj2 = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
var bad = (reason) => ({ ok: false, reason });
function checkDelegation(text, rootKeys, now, minSerial = 0, opts = {}) {
  const s = text.toString();
  if (s.length > 4096) return bad(say("err.trust.tooBig"));
  let file;
  try {
    file = JSON.parse(s);
  } catch {
    return bad(say("err.trust.unreadable"));
  }
  if (!isObj2(file) || typeof file.body !== "string" || !isObj2(file.sig)) return bad(say("err.trust.invalid"));
  const v = verifyBytes(Buffer.from(file.body), JSON.stringify(file.sig), rootKeys, opts.context ?? DELEGATION_CONTEXT, say("err.signing.whatDelegation"));
  if (!v.ok) return v;
  let d;
  try {
    d = JSON.parse(file.body);
  } catch {
    return bad(say("err.trust.invalid"));
  }
  if (!isObj2(d) || d.v !== 1 || !isValidPublicKey(d.key) || !(Number.isSafeInteger(d.serial) && d.serial >= 1)) return bad(say("err.trust.invalid"));
  const from = Date.parse(String(d.notBefore));
  const to = Date.parse(String(d.notAfter));
  if (!Number.isFinite(from) || !Number.isFinite(to)) return bad(say("err.trust.invalid"));
  if (now < from) return bad(say("err.trust.notYet"));
  if (now > to && !opts.allowExpired) return bad(say("err.trust.expired"));
  if (d.serial < minSerial) return bad(say("err.trust.older"));
  return { ok: true, delegation: { v: 1, key: d.key, serial: d.serial, notBefore: new Date(from).toISOString(), notAfter: new Date(to).toISOString() } };
}
var named = (list2) => {
  if (!Array.isArray(list2) || list2.length > TIERS_LIMITS.keys) return null;
  const out = [];
  for (const n of list2) {
    if (!isObj2(n) || !isValidPublicKey(n.key) || typeof n.name !== "string") return null;
    out.push({ key: n.key, name: n.name.slice(0, TIERS_LIMITS.name) });
  }
  return out;
};
function parseTiers(bytes) {
  const size = typeof bytes === "string" ? Buffer.byteLength(bytes) : bytes.length;
  if (size > TIERS_LIMITS.bytes) return bad(say("err.trust.tiersTooBig"));
  let raw;
  try {
    raw = JSON.parse(bytes.toString());
  } catch {
    return bad(say("err.trust.tiersUnreadable"));
  }
  if (!isObj2(raw) || raw.v !== 1) return bad(say("err.trust.tiersInvalid"));
  if (!(Number.isSafeInteger(raw.sequence) && raw.sequence >= 0)) return bad(say("err.trust.tiersSequence"));
  const expires = Date.parse(String(raw.expiresAt));
  if (!Number.isFinite(expires)) return bad(say("err.trust.tiersExpiry"));
  const ourdir = Array.isArray(raw.ourdir) && raw.ourdir.length <= TIERS_LIMITS.keys && raw.ourdir.every((k) => isValidPublicKey(k)) ? raw.ourdir : null;
  const official = named(raw.official);
  const sellers = named(raw.sellers);
  const val = isObj2(raw.validated) ? raw.validated : null;
  const publishers = val ? named(val.publishers) : null;
  const versions = val && Array.isArray(val.versions) && val.versions.length <= TIERS_LIMITS.versions && val.versions.every((x) => isObj2(x) && typeof x.id === "string" && ID_RE2.test(x.id) && typeof x.version === "string" && VERSION_RE2.test(x.version) && typeof x.sha256 === "string" && SHA_RE.test(x.sha256)) ? val.versions.map((x) => ({ id: x.id, version: x.version, sha256: x.sha256 })) : null;
  if (!ourdir || !official || !sellers || !publishers || !versions) return bad(say("err.trust.tiersList"));
  return { ok: true, tiers: { v: 1, sequence: raw.sequence, expiresAt: new Date(expires).toISOString(), ourdir, official, validated: { versions, publishers }, sellers } };
}
function checkTiers(bytes, signatureText, rootKeys, now, minSequence = 0) {
  const v = verifyBytes(bytes, signatureText, rootKeys, TIERS_CONTEXT, say("err.signing.whatTiers"));
  if (!v.ok) return v;
  const p = parseTiers(bytes);
  if (!p.ok) return p;
  if (Date.parse(p.tiers.expiresAt) < now) return bad(say("err.trust.tiersExpired"));
  if (p.tiers.sequence < minSequence) return bad(say("err.trust.tiersOlder"));
  return p;
}
function tierOf(tiers, kind, id, publisherKey, version, line = [publisherKey], siblings = []) {
  if (!tiers) return "community";
  if (tiers.ourdir.includes(publisherKey)) return "ourdir";
  if (tiers.official.some((o) => o.key === publisherKey)) return "official";
  const reviewed = (v) => tiers.validated.versions.some((x) => x.id === id && x.version === v.version && x.sha256 === v.sha256);
  if (reviewed(version)) return "validated";
  if (!tiers.validated.publishers.some((p) => line.includes(p.key))) return "community";
  if (kind !== "module") return "validated";
  const ref = siblings.filter((s) => compareVersions(s.version, version.version) < 0 && reviewed(s)).sort((a, b) => compareVersions(b.version, a.version))[0];
  if (!ref) return "community";
  const allowed = new Set(ref.permissions ?? []);
  return (version.permissions ?? []).every((p) => allowed.has(p)) ? "validated" : "community";
}
function maySell(tiers, publisherKey) {
  if (!tiers) return false;
  return tiers.ourdir.includes(publisherKey) || tiers.official.some((o) => o.key === publisherKey) || tiers.sellers.some((s) => s.key === publisherKey);
}

// apps/desktop/src/catalog/succession.ts
var SUCCESSION_CONTEXT = "ourdir-succession/v1";
var RECOVERY_DELEGATION_CONTEXT = "ourdir-recovery-delegation/v1";
var RECOVERY_DELEGATION_FILE = "recovery-delegation.json";
var SUCCESSION_PATH_RE = /^successions\/([A-Za-z0-9_-]{43})\.json$/;
var EMAIL_DELAY_MS = 7 * 24 * 3600 * 1e3;
var PR_SLACK_MS = 3600 * 1e3;
var MAX_CHAIN = 10;
var MAX_FILE = 8192;
var isObj3 = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
var bad2 = (reason) => ({ ok: false, reason });
var delayOf = (how) => how === "email" ? EMAIL_DELAY_MS : 0;
function parseSuccession(text) {
  let t = text.toString();
  if (t.charCodeAt(0) === 65279) t = t.slice(1);
  if (t.length > MAX_FILE) return bad2(say("err.succession.tooBig"));
  let raw;
  try {
    raw = JSON.parse(t);
  } catch {
    return bad2(say("err.succession.unreadable"));
  }
  if (!isObj3(raw) || typeof raw.body !== "string" || raw.body.length > 1024 || !(raw.sig === null || isObj3(raw.sig))) return bad2(say("err.succession.invalid"));
  if (raw.delegation !== void 0 && (typeof raw.delegation !== "string" || raw.delegation.length > 4096)) return bad2(say("err.succession.badDelegation"));
  let s;
  try {
    s = JSON.parse(raw.body);
  } catch {
    return bad2(say("err.succession.invalid"));
  }
  if (!isObj3(s) || s.v !== 1 || !isValidPublicKey(s.from) || !isValidPublicKey(s.to) || s.from === s.to) return bad2(say("err.succession.invalidKeys"));
  if (s.how !== "cle" && s.how !== "email" && s.how !== "racine") return bad2(say("err.succession.invalidHow"));
  const req = Date.parse(String(s.requestedAt));
  const nb = Date.parse(String(s.notBefore));
  if (!Number.isFinite(req) || !Number.isFinite(nb) || nb < req + delayOf(s.how)) return bad2(say("err.succession.invalidDates"));
  const file = { body: raw.body, sig: raw.sig, ...typeof raw.delegation === "string" ? { delegation: raw.delegation } : {} };
  return { ok: true, file, s: { v: 1, from: s.from, to: s.to, how: s.how, requestedAt: new Date(req).toISOString(), notBefore: new Date(nb).toISOString() } };
}
var guarded = (tiers, key) => !!tiers && (tiers.ourdir.includes(key) || tiers.official.some((o) => o.key === key) || tiers.sellers.some((x) => x.key === key));
function checkSuccession(p, ctx) {
  const { file, s } = p;
  if (!file.sig) return bad2(say("err.succession.waiting", { date: s.notBefore }));
  const signedAt = Date.parse(String(file.sig.signedAt));
  if (!Number.isFinite(signedAt) || signedAt < Date.parse(s.notBefore) || ctx.now < Date.parse(s.notBefore)) return bad2(say("err.succession.early"));
  if (s.how !== "racine" && guarded(ctx.tiers, s.from)) return bad2(say("err.succession.guarded"));
  let keys;
  if (s.how === "cle") keys = [s.from];
  else if (s.how === "racine") keys = ctx.rootKeys;
  else {
    if (!file.delegation) return bad2(say("err.succession.noDelegation"));
    const when = checkDelegation(file.delegation, ctx.rootKeys, signedAt, 0, { context: RECOVERY_DELEGATION_CONTEXT });
    if (!when.ok) return bad2(say("err.succession.recovery", { why: when.reason }));
    if (ctx.currentDelegation) {
      const today = checkDelegation(file.delegation, ctx.rootKeys, ctx.now, 0, { context: RECOVERY_DELEGATION_CONTEXT });
      if (!today.ok) return bad2(say("err.succession.recovery", { why: today.reason }));
    }
    keys = [when.delegation.key];
  }
  const v = verifyBytes(Buffer.from(file.body), JSON.stringify(file.sig), keys, SUCCESSION_CONTEXT, say("err.signing.whatSuccession"));
  return v.ok ? { ok: true } : bad2(v.reason);
}
function chainOf(list2) {
  const next = /* @__PURE__ */ new Map();
  const prev = /* @__PURE__ */ new Map();
  const problems = [];
  const head = (k) => {
    for (let i = 0; i <= MAX_CHAIN + 1 && next.has(k); i++) k = next.get(k);
    return k;
  };
  const line = (k) => {
    const out = [k];
    for (let i = 0; i <= MAX_CHAIN + 1 && prev.has(k); i++) out.push(k = prev.get(k));
    return out;
  };
  for (const s of [...list2].sort((x, y) => x.requestedAt.localeCompare(y.requestedAt))) {
    if (next.has(s.from)) problems.push(say("err.succession.fork", { key: s.from.slice(0, 12) }));
    else if (prev.has(s.to)) problems.push(say("err.succession.already", { key: s.to.slice(0, 12) }));
    else if (head(s.to) === s.from || line(s.from).includes(s.to)) problems.push(`${s.from.slice(0, 12)} : remplacement en boucle.`);
    else if (line(s.from).length + line(head(s.to)).length > MAX_CHAIN + 1) problems.push(say("err.succession.tooLong", { key: s.from.slice(0, 12), max: MAX_CHAIN }));
    else {
      next.set(s.from, s.to);
      prev.set(s.to, s.from);
    }
  }
  return { next, prev, head, line, problems };
}

// apps/desktop/src/catalog/client.ts
var MARKS = new RegExp("[" + String.fromCharCode(768) + "-" + String.fromCharCode(879) + "]", "g");

// apps/desktop/src/catalog/download.ts
function requestedPermissions(p) {
  const m = p.manifest;
  return m.kind === "native" ? m.permissions : [.../* @__PURE__ */ new Set([...p.compat?.suggestedPermissions ?? [], ...m.files.styles.length ? ["ui.style"] : []])];
}

// apps/desktop/src/catalog/builder.ts
var dirs = (root) => ({
  entries: import_node_path3.default.join(root, "entries"),
  packages: import_node_path3.default.join(root, "packages"),
  revoked: import_node_path3.default.join(root, "revoked.json"),
  state: import_node_path3.default.join(root, "state.json"),
  out: import_node_path3.default.join(root, "public")
});
var sha2562 = (b) => import_node_crypto2.default.createHash("sha256").update(b).digest("hex");
var readJson = (file, fallback) => {
  try {
    return JSON.parse(import_node_fs3.default.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
};
var writeJson = (file, data) => {
  import_node_fs3.default.mkdirSync(import_node_path3.default.dirname(file), { recursive: true });
  import_node_fs3.default.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
};
var CatalogError = class extends Error {
};
function build2(root, identity, opts = {}) {
  const d = dirs(root);
  const now = opts.now ?? /* @__PURE__ */ new Date();
  const days = opts.days ?? 30;
  const entries = import_node_fs3.default.existsSync(d.entries) ? import_node_fs3.default.readdirSync(d.entries).filter((f) => f.endsWith(".json")).sort().map((f) => readJson(import_node_path3.default.join(d.entries, f), null)) : [];
  const tiersFile = import_node_path3.default.join(root, TIERS_FILE);
  const tiers = import_node_fs3.default.existsSync(tiersFile) ? parseTiers(import_node_fs3.default.readFileSync(tiersFile)) : null;
  for (const e of entries) {
    if (e.access === "licensed" && !maySell(tiers && tiers.ok ? tiers.tiers : null, e.publisher.key)) {
      throw new CatalogError(`\xAB ${e.id} \xBB est payant, mais son \xE9diteur n\u2019est ni Ourdir, ni Officiel, ni vendeur agr\xE9\xE9 : publication refus\xE9e.`);
    }
  }
  const sequence = opts.sequence ?? (readJson(d.state, {}).sequence ?? 0) + 1;
  const index = {
    format: CATALOG_FORMAT,
    v: CATALOG_VERSION,
    sequence,
    generatedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + days * 864e5).toISOString(),
    entries: entries.map((e) => ({ ...e, versions: e.versions.map(({ file, url, ...rest }) => ({ ...rest, url: url ?? file })) })),
    revoked: readJson(d.revoked, { keys: [], packages: [] }),
    // key replacements the CI kept (spec « clé perdue » §2.4); a maintainer's folder has none
    successions: readJson(import_node_path3.default.join(root, "successions.json"), [])
  };
  const bytes = Buffer.from(JSON.stringify(index, null, 2) + "\n", "utf8");
  const parsed = parseIndex(bytes, { loopbackPort: opts.loopbackPort });
  if (!parsed.ok) throw new CatalogError("L\u2019index produit serait refus\xE9 par l\u2019application : " + parsed.errors.join(" ; "));
  import_node_fs3.default.rmSync(d.out, { recursive: true, force: true });
  import_node_fs3.default.mkdirSync(d.out, { recursive: true });
  for (const e of entries) {
    for (const v of e.versions) {
      if (!v.file) continue;
      const dest = import_node_path3.default.join(d.out, v.file);
      import_node_fs3.default.mkdirSync(import_node_path3.default.dirname(dest), { recursive: true });
      import_node_fs3.default.copyFileSync(import_node_path3.default.join(root, v.file), dest);
    }
  }
  import_node_fs3.default.writeFileSync(import_node_path3.default.join(d.out, INDEX_FILE), bytes);
  import_node_fs3.default.writeFileSync(import_node_path3.default.join(d.out, SIGNATURE_FILE2), signIndex(bytes, identity, now));
  for (const f of [DELEGATION_FILE, TIERS_FILE, TIERS_SIGNATURE_FILE, RECOVERY_DELEGATION_FILE]) {
    if (import_node_fs3.default.existsSync(import_node_path3.default.join(root, f))) import_node_fs3.default.copyFileSync(import_node_path3.default.join(root, f), import_node_path3.default.join(d.out, f));
  }
  writeJson(d.state, { sequence });
  return { sequence, entries: entries.length, versions: entries.reduce((n, e) => n + e.versions.length, 0), expiresAt: index.expiresAt };
}
function verifyPublished(outDir, rootKeys, opts = {}) {
  const errors = [];
  const now = (opts.now ?? /* @__PURE__ */ new Date()).getTime();
  let bytes, sig;
  try {
    bytes = import_node_fs3.default.readFileSync(import_node_path3.default.join(outDir, INDEX_FILE));
    sig = import_node_fs3.default.readFileSync(import_node_path3.default.join(outDir, SIGNATURE_FILE2));
  } catch {
    return { ok: false, errors: ["index.json ou index.json.sig manquant."] };
  }
  let keys = rootKeys;
  const delegationFile = import_node_path3.default.join(outDir, DELEGATION_FILE);
  if (import_node_fs3.default.existsSync(delegationFile)) {
    const dl = checkDelegation(import_node_fs3.default.readFileSync(delegationFile), rootKeys, now);
    if (!dl.ok) return { ok: false, errors: ["D\xE9l\xE9gation refus\xE9e : " + dl.reason] };
    keys = [...rootKeys, dl.delegation.key];
  }
  const v = verifyIndex(bytes, sig, keys);
  if (!v.ok) return { ok: false, errors: [v.reason] };
  const parsed = parseIndex(bytes, { loopbackPort: opts.loopbackPort });
  if (!parsed.ok) return { ok: false, errors: parsed.errors };
  const tiersFile = import_node_path3.default.join(outDir, TIERS_FILE);
  if (import_node_fs3.default.existsSync(tiersFile)) {
    let t;
    try {
      t = checkTiers(import_node_fs3.default.readFileSync(tiersFile), import_node_fs3.default.readFileSync(import_node_path3.default.join(outDir, TIERS_SIGNATURE_FILE)), rootKeys, now);
    } catch {
      t = { ok: false, reason: "tiers.json.sig manquant." };
    }
    if (!t.ok) errors.push("Fichier des niveaux refus\xE9 : " + t.reason);
  }
  let files = 0;
  let external = 0;
  for (const e of parsed.index.entries) {
    for (const ver of e.versions) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(ver.url)) {
        external++;
        continue;
      }
      const f = import_node_path3.default.join(outDir, ver.url);
      try {
        const b = import_node_fs3.default.readFileSync(f);
        if (b.length !== ver.size || sha2562(b) !== ver.sha256) errors.push(`${e.id} ${ver.version} : le fichier ne correspond pas \xE0 l\u2019index.`);
        files++;
      } catch {
        errors.push(`${e.id} ${ver.version} : fichier manquant (${ver.url}).`);
      }
    }
  }
  return errors.length ? { ok: false, errors } : { ok: true, sequence: parsed.index.sequence, files, external };
}

// apps/desktop/src/catalog/package.ts
var PACKAGE_CONTEXT = "ourdir-package/v1";
function signPackageFile(bytes, identity) {
  return sign(identity, PACKAGE_CONTEXT, bytes);
}
function verifyPackageFile(bytes, publicKey, signature) {
  return isValidPublicKey(publicKey) && typeof signature === "string" && verify(publicKey, PACKAGE_CONTEXT, bytes, signature);
}

// apps/desktop/src/catalog/submission.ts
var OPEN_KINDS = ["module", "system", "theme", "translation"];
var MAX_SUBMISSIONS_PER_PR = 10;
var SUBMISSION_PATH_RE = /^entries\/([a-z0-9][a-z0-9_-]{1,63})\/(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]{1,30})?)\.json$/;
var PERM_RE2 = /^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*){1,3}$/;
var MAX_SUBMISSION_BYTES = 64 * 1024;
var isObj4 = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
function requirement2(v) {
  if (!isObj4(v) || typeof v.id !== "string" || !ID_RE2.test(v.id)) return null;
  if (v.minVersion === void 0) return { id: v.id };
  return typeof v.minVersion === "string" && VERSION_RE2.test(v.minVersion) ? { id: v.id, minVersion: v.minVersion } : null;
}
function parseSubmission(file, text, opts = {}) {
  const where = SUBMISSION_PATH_RE.exec(file);
  if (!where) return { ok: false, errors: [`\xAB ${file.slice(0, 120)} \xBB : une soumission est un fichier entries/<id>/<version>.json.`] };
  if (text.length > MAX_SUBMISSION_BYTES) return { ok: false, errors: ["Soumission trop volumineuse."] };
  let raw;
  try {
    raw = JSON.parse(text.charCodeAt(0) === 65279 ? text.slice(1) : text);
  } catch {
    return { ok: false, errors: ["Soumission illisible (JSON invalide, ou pas en UTF-8)."] };
  }
  if (!isObj4(raw) || raw.v !== 1) return { ok: false, errors: ["Soumission invalide (format)."] };
  const errors = [];
  const [, id, version] = where;
  if (raw.id !== id || raw.version !== version) errors.push("Le nom du fichier ne correspond pas \xE0 l\u2019identifiant et \xE0 la version.");
  const kind = raw.kind;
  const known = typeof kind === "string" && KINDS.includes(kind);
  if (!known) errors.push("Type inconnu.");
  else if (!OPEN_KINDS.includes(kind)) errors.push(`Le type \xAB ${kind} \xBB n\u2019est pas encore ouvert au catalogue.`);
  const name = cleanText(raw.name, LIMITS.name);
  if (name.length < 2) errors.push("Nom manquant.");
  const url = raw.url;
  if (typeof url !== "string" || !/^[a-z][a-z0-9+.-]*:/i.test(url) || !isAcceptableUrl(url, opts)) errors.push("Adresse du fichier refus\xE9e : une adresse https compl\xE8te, sans identifiants.");
  const cap = known ? KIND_BYTES[kind] : 0;
  const size = raw.size;
  if (!(typeof size === "number" && Number.isInteger(size) && size > 0 && size <= cap)) errors.push("Taille invalide.");
  if (typeof raw.sha256 !== "string" || !SHA_RE.test(raw.sha256)) errors.push("Empreinte SHA-256 invalide.");
  const pub = isObj4(raw.publisher) ? raw.publisher : {};
  if (!isValidPublicKey(pub.key)) errors.push("Cl\xE9 d\u2019\xE9diteur invalide.");
  const publisherName = cleanText(pub.name, LIMITS.name);
  if (!publisherName) errors.push("Nom d\u2019\xE9diteur manquant.");
  if (kind === "system" && typeof raw.signature !== "string") errors.push("Un syst\xE8me doit porter sa signature (node scripts/sign-module.js --system).");
  if (kind === "theme" && typeof raw.signature !== "string") errors.push("Un th\xE8me doit porter sa signature (tools/verifier.js entry \u2026 --key).");
  if (kind === "translation" && typeof raw.signature !== "string") errors.push("Une traduction doit porter sa signature (tools/verifier.js entry \u2026 --key).");
  const perms = Array.isArray(raw.permissions) ? raw.permissions : [];
  if (perms.length > LIMITS.permissions || !perms.every((p) => typeof p === "string" && PERM_RE2.test(p))) errors.push("Liste de permissions invalide.");
  const license = cleanText(raw.license, LIMITS.name);
  if (!license) errors.push("Licence manquante.");
  const summary = cleanText(raw.summary, LIMITS.summary);
  if (!summary) errors.push("R\xE9sum\xE9 manquant.");
  const system = raw.system === void 0 ? void 0 : requirement2(raw.system);
  if (system === null) errors.push("Syst\xE8me vis\xE9 invalide.");
  const access = raw.access === void 0 ? "free" : raw.access;
  if (access !== "free" && access !== "licensed") errors.push("Acc\xE8s inconnu.");
  const store = typeof raw.store === "string" && raw.store.startsWith("https://") && isAcceptableUrl(raw.store) ? raw.store : void 0;
  if (access === "licensed" && !store) errors.push("Un contenu payant doit indiquer sa boutique.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    sub: {
      id,
      version,
      kind,
      name,
      url,
      size,
      sha256: raw.sha256,
      publisher: { name: publisherName, key: pub.key },
      signature: typeof raw.signature === "string" ? raw.signature.slice(0, 200) : void 0,
      permissions: perms,
      license,
      summary,
      description: cleanText(raw.description, LIMITS.description),
      tags: (Array.isArray(raw.tags) ? raw.tags : []).filter((t) => typeof t === "string" && TAG_RE.test(t)).slice(0, LIMITS.tags),
      system: system ?? void 0,
      languages: (Array.isArray(raw.languages) ? raw.languages : []).filter((l) => typeof l === "string" && LANG_RE.test(l)).slice(0, LIMITS.languages),
      homepage: typeof raw.homepage === "string" && raw.homepage.startsWith("https://") && isAcceptableUrl(raw.homepage) ? raw.homepage : void 0,
      changelog: cleanText(raw.changelog, LIMITS.changelog) || void 0,
      access,
      store
    }
  };
}
function filePolicy(changes) {
  if (!changes.length) return ["La pull request n\u2019ajoute aucun fichier."];
  const out = [];
  if (changes.some((c) => SUCCESSION_PATH_RE.test(c.filename)) && changes.length > 1) out.push("Un remplacement de cl\xE9 voyage seul dans sa pull request.");
  if (changes.length > MAX_SUBMISSIONS_PER_PR) out.push(`Au plus ${MAX_SUBMISSIONS_PER_PR} soumissions par pull request.`);
  for (const c of changes.slice(0, 50)) {
    const name = String(c.filename).slice(0, 120);
    if (!SUBMISSION_PATH_RE.test(c.filename) && !SUCCESSION_PATH_RE.test(c.filename)) out.push(`\xAB ${name} \xBB : seuls des fichiers entries/<id>/<version>.json (ou un remplacement de cl\xE9 successions/<cl\xE9>.json) peuvent \xEAtre ajout\xE9s ; le reste passe par le mainteneur.`);
    else if (c.status !== "added") out.push(`\xAB ${name} \xBB : on ne modifie ni ne supprime une soumission publi\xE9e (ajoute une nouvelle version).`);
  }
  return out;
}
function ownership(sub, existing, chain) {
  const head = (k) => chain ? chain.head(k) : k;
  const same = existing.filter((e) => e.id === sub.id);
  const out = [];
  if (chain && chain.next.has(sub.publisher.key)) out.push("Cette cl\xE9 a \xE9t\xE9 remplac\xE9e par une autre : publie avec ta nouvelle cl\xE9.");
  else if (same.some((e) => head(e.key) !== sub.publisher.key)) out.push(`\xAB ${sub.id} \xBB appartient \xE0 un autre \xE9diteur.`);
  if (same.some((e) => e.kind !== sub.kind)) out.push(`\xAB ${sub.id} \xBB est d\xE9j\xE0 un autre type de paquet.`);
  if (same.some((e) => e.version === sub.version)) out.push(`La version ${sub.version} de \xAB ${sub.id} \xBB est d\xE9j\xE0 publi\xE9e : les versions ne changent jamais.`);
  return out;
}
function mergeDecision(o) {
  if (o.conclusion !== "success") return { merge: false, reason: "Le contr\xF4le n\u2019a pas r\xE9ussi." };
  if (!o.checkedSha || o.checkedSha !== o.headSha) return { merge: false, reason: "La pull request a chang\xE9 depuis le contr\xF4le : il sera refait." };
  const policy = filePolicy(o.changes);
  if (policy.length) return { merge: false, reason: policy.join(" ") };
  if (o.successionProblem) return { merge: false, reason: o.successionProblem };
  return { merge: true, reason: "Contr\xF4le r\xE9ussi." };
}
function successionMergeProblem(s, createdAt, now) {
  if (now < Date.parse(s.notBefore)) return `Pas avant le ${s.notBefore}.`;
  if (s.how === "email" && !(Date.parse(createdAt) <= Date.parse(s.requestedAt) + PR_SLACK_MS)) return "La pull request a \xE9t\xE9 ouverte plus d\u2019une heure apr\xE8s la demande : refus\xE9e.";
  return null;
}
var publishSequence = (now) => Math.floor(now.getTime() / 1e3);
var safe = (s) => String(s).replace(/[`\r\n]+/g, " ").replace(/@/g, "@\u200B").slice(0, 300);
function renderReport(r) {
  const lines = ["### Contr\xF4le du catalogue / Catalogue check", ""];
  const waiting = !r.ok && !r.policy.length && r.results.length > 0 && r.results.every((e) => e.ok || e.waiting);
  const until = r.results.find((e) => e.waiting)?.waiting ?? "";
  lines.push(
    r.ok ? "\u2714 Tout est bon : la soumission va \xEAtre fusionn\xE9e. / All good: it will be merged." : waiting ? `\u23F3 En attente jusqu\u2019au ${safe(until.slice(0, 10))} : ce remplacement de cl\xE9 sera sign\xE9 puis fusionn\xE9 automatiquement, sauf annulation. / Waiting until ${safe(until.slice(0, 10))}: this key replacement will be signed and merged automatically, unless cancelled.` : "\u2718 La soumission est refus\xE9e pour l\u2019instant. / The submission is refused for now."
  );
  lines.push("");
  for (const p of r.policy.slice(0, 10)) lines.push("- \u2718 " + safe(p));
  for (const e of r.results.slice(0, 10)) {
    lines.push(`- ${e.ok ? "\u2714" : e.waiting ? "\u23F3" : "\u2718"} ${safe(e.file)}${e.ok ? "" : " : " + e.errors.slice(0, 4).map(safe).join(" ; ")}`);
  }
  lines.push("", "R\xE8gles : RULES.md \xB7 Guide : CONTRIBUTING.md");
  return lines.join("\n");
}

// apps/desktop/src/catalog/pipeline.ts
var sha2563 = (b) => import_node_crypto3.default.createHash("sha256").update(b).digest("hex");
var message = (err) => err instanceof Error ? err.message : String(err);
var extOf = (kind) => kind === "module" ? "zip" : kind === "theme" ? "ourdir-theme.json" : kind === "translation" ? "ourdir-translation.json" : "ttsystem.json";
var PUBLISH_MIN = 0.8;
function fetcher(deps2) {
  if (deps2.fetchBytes) return deps2.fetchBytes;
  return async (url, maxBytes) => {
    const u = new URL(url);
    const loop = !!deps2.loopbackPort && u.protocol === "http:" && u.hostname === "127.0.0.1" && Number(u.port) === deps2.loopbackPort;
    const dev = loop ? { allowHttp: true, allowPrivate: true, allowedPorts: [deps2.loopbackPort] } : {};
    return (await fetchLimited(url, { maxBytes, timeoutMs: 6e4, ...dev })).body;
  };
}
function readSubmissions(repoDir, deps2 = {}) {
  const top = import_node_path4.default.join(repoDir, "entries");
  if (!import_node_fs4.default.existsSync(top)) return [];
  const out = [];
  for (const id of import_node_fs4.default.readdirSync(top).sort()) {
    const dir = import_node_path4.default.join(top, id);
    if (!import_node_fs4.default.statSync(dir).isDirectory()) continue;
    for (const f of import_node_fs4.default.readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
      const p = parseSubmission(`entries/${id}/${f}`, import_node_fs4.default.readFileSync(import_node_path4.default.join(dir, f), "utf8"), deps2);
      if (p.ok) out.push(p.sub);
    }
  }
  return out;
}
function readTiers(repoDir) {
  const f = import_node_path4.default.join(repoDir, TIERS_FILE);
  if (!import_node_fs4.default.existsSync(f)) return null;
  const p = parseTiers(import_node_fs4.default.readFileSync(f));
  return p.ok ? p.tiers : null;
}
function repoRootKeys(repoDir) {
  const f = import_node_path4.default.join(repoDir, "root.pub");
  return import_node_fs4.default.existsSync(f) ? import_node_fs4.default.readFileSync(f, "utf8").split(/[\s,]+/).filter(Boolean) : [];
}
var STATUS_KEY_RE = /^[a-z0-9][a-z0-9_-]{1,63}@\d+\.\d+\.\d+(-[0-9A-Za-z.-]{1,30})?$/;
function readStatuses(repoDir) {
  const out = /* @__PURE__ */ new Map();
  const f = import_node_path4.default.join(repoDir, "status.json");
  if (!import_node_fs4.default.existsSync(f)) return out;
  try {
    const raw = JSON.parse(import_node_fs4.default.readFileSync(f, "utf8"));
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      for (const [k, v] of Object.entries(raw)) if (v === "deprecated" && STATUS_KEY_RE.test(k)) out.set(k, "deprecated");
    }
  } catch {
  }
  return out;
}
function readSuccessionFiles(repoDir) {
  const dir = import_node_path4.default.join(repoDir, "successions");
  if (!import_node_fs4.default.existsSync(dir)) return [];
  const out = [];
  for (const f of import_node_fs4.default.readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
    const p = parseSuccession(import_node_fs4.default.readFileSync(import_node_path4.default.join(dir, f)));
    if (p.ok && `${p.s.from}.json` === f) out.push(p.file);
  }
  return out;
}
function repoChain(repoDir, now) {
  const ctx = { rootKeys: repoRootKeys(repoDir), tiers: readTiers(repoDir), now };
  const ok = [];
  for (const f of readSuccessionFiles(repoDir)) {
    const p = parseSuccession(JSON.stringify(f));
    if (p.ok && checkSuccession(p, ctx).ok) ok.push(p.s);
  }
  return chainOf(ok);
}
function checkSuccessionFile(file, text, repoDir, now) {
  const where = SUCCESSION_PATH_RE.exec(file);
  const p = parseSuccession(text);
  if (!p.ok) return { file, ok: false, errors: [p.reason] };
  if (!where || where[1] !== p.s.from) return { file, ok: false, errors: ["Le fichier doit porter le nom de l\u2019ancienne cl\xE9 : successions/<ancienne cl\xE9>.json."] };
  if (!p.file.sig) return { file, ok: false, errors: [`Sign\xE9 au plus t\xF4t le ${p.s.notBefore.slice(0, 10)}, si personne ne l\u2019annule.`], waiting: p.s.notBefore };
  const c = checkSuccession(p, { rootKeys: repoRootKeys(repoDir), tiers: readTiers(repoDir), now, currentDelegation: true });
  if (!c.ok) return { file, ok: false, errors: [c.reason] };
  const before = repoChain(repoDir, now);
  const known = [...before.next].map(([from, to]) => ({ v: 1, from, to, how: "cle", requestedAt: "1970-01-01T00:00:00.000Z", notBefore: "1970-01-01T00:00:00.000Z" }));
  const after = chainOf([...known, p.s]);
  if (after.problems.length) return { file, ok: false, errors: after.problems };
  return { file, ok: true, errors: [] };
}
function withPackage(bytes, fn) {
  const tmp = import_node_path4.default.join(import_node_os2.default.tmpdir(), `ourdir-check-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.zip`);
  import_node_fs4.default.writeFileSync(tmp, bytes);
  let p;
  try {
    p = prepare(tmp, void 0, { allowLicensed: true });
  } finally {
    import_node_fs4.default.rmSync(tmp, { force: true });
  }
  try {
    return fn(p);
  } finally {
    p.dispose();
  }
}
async function makeSubmission(bytes, o, _deps) {
  let id;
  let version;
  let permissions = [];
  let access;
  let publisher;
  let signature;
  let kind;
  let docLanguages;
  if (bytes.subarray(0, 2).toString("latin1") === "PK") {
    kind = "module";
    const info = withPackage(bytes, (p) => {
      if (p.trust === "unsigned" || !p.publisher) throw new Error("Ce module n\u2019est pas sign\xE9 : node scripts/sign-module.js <dossier> --key <cl\xE9.json>.");
      return {
        id: p.manifest.id,
        version: p.manifest.version,
        permissions: requestedPermissions(p),
        access: p.manifest.access === "licensed" ? "licensed" : "free",
        publisher: { name: p.publisher.name, key: p.publisher.publicKey }
      };
    });
    ({ id, version, permissions, access, publisher } = info);
  } else if (JSON.parse(bytes.toString("utf8"))?.format === "ourdir-translation") {
    kind = "translation";
    const doc = JSON.parse(bytes.toString("utf8"));
    if (!o.identity) throw new Error("Une traduction se signe avec la cl\xE9 de son \xE9diteur (--key).");
    id = String(doc.id);
    version = String(doc.version);
    access = "free";
    docLanguages = typeof doc.language === "string" ? [doc.language] : void 0;
    publisher = { name: o.publisherName || "\xC9diteur", key: o.identity.publicKey };
    signature = signPackageFile(bytes, o.identity);
  } else if (JSON.parse(bytes.toString("utf8"))?.format === "ourdir-theme") {
    kind = "theme";
    const doc = JSON.parse(bytes.toString("utf8"));
    if (!o.identity) throw new Error("Un th\xE8me se signe avec la cl\xE9 de son \xE9diteur (--key).");
    id = String(doc.id);
    version = String(doc.version);
    access = "free";
    publisher = { name: o.publisherName || "\xC9diteur", key: o.identity.publicKey };
    signature = signPackageFile(bytes, o.identity);
  } else {
    kind = "system";
    const file = JSON.parse(bytes.toString("utf8"));
    if (!file || file.format !== "tabletop-system" || !file.doc) throw new Error("Ce fichier n\u2019est pas un syst\xE8me Ourdir.");
    if (!o.identity) throw new Error("Un syst\xE8me se signe avec la cl\xE9 de son \xE9diteur (--key).");
    id = String(file.doc.id);
    version = String(file.doc.version);
    access = file.doc.access === "licensed" ? "licensed" : "free";
    publisher = { name: o.publisherName || "\xC9diteur", key: o.identity.publicKey };
    signature = signPackageFile(bytes, o.identity);
  }
  return {
    v: 1,
    id,
    version,
    kind,
    name: o.name,
    url: o.url,
    size: bytes.length,
    sha256: sha2563(bytes),
    publisher,
    ...signature ? { signature } : {},
    permissions,
    license: o.license,
    summary: o.summary,
    description: o.description ?? "",
    tags: o.tags ?? [],
    system: o.system,
    languages: o.languages ?? docLanguages ?? [],
    homepage: o.homepage,
    changelog: o.changelog,
    access,
    store: o.store
  };
}
function checkSystem(bytes, s, deps2) {
  if (!verifyPackageFile(bytes, s.publisher.key, s.signature)) return ["La signature du syst\xE8me ne correspond pas \xE0 la cl\xE9 de l\u2019\xE9diteur."];
  let file;
  try {
    file = JSON.parse(bytes.toString("utf8"));
  } catch {
    return ["Ce fichier n\u2019est pas un syst\xE8me Ourdir (JSON illisible)."];
  }
  if (!file || file.format !== "tabletop-system" || file.v !== 1 || !file.doc || typeof file.doc !== "object") return ["Ce fichier n\u2019est pas un syst\xE8me Ourdir."];
  const out = [];
  if (file.doc.id !== s.id || file.doc.version !== s.version) out.push("Le syst\xE8me annonce un autre identifiant ou une autre version que la soumission.");
  if (file.doc.access === "licensed" !== (s.access === "licensed")) out.push("L\u2019acc\xE8s d\xE9clar\xE9 ne correspond pas \xE0 celui du syst\xE8me.");
  const invalid = deps2.validateSystem(file.doc);
  if (invalid) out.push("Syst\xE8me invalide : " + invalid);
  return out;
}
function checkTheme(bytes, s, deps2) {
  if (!verifyPackageFile(bytes, s.publisher.key, s.signature)) return ["La signature du th\xE8me ne correspond pas \xE0 la cl\xE9 de l\u2019\xE9diteur."];
  if (!deps2.themeCore) return ["Le contr\xF4le des th\xE8mes n\u2019est pas disponible."];
  const p = deps2.themeCore.parse(bytes.toString("utf8"));
  if (!p.ok) return ["Th\xE8me invalide : " + p.errors.slice(0, 3).join(" ; ")];
  const out = [];
  if (p.doc.id !== s.id || p.doc.version !== s.version) out.push("Le th\xE8me annonce un autre identifiant ou une autre version que la soumission.");
  const r = deps2.themeCore.readable(p.doc);
  if (!r.ok) out.push("Th\xE8me peu lisible : " + r.problems[0]);
  try {
    deps2.themeCore.pageCss(p.doc);
  } catch (err) {
    out.push(message(err));
  }
  return out;
}
function checkTranslation(bytes, s, deps2) {
  if (!verifyPackageFile(bytes, s.publisher.key, s.signature)) return ["La signature de la traduction ne correspond pas \xE0 la cl\xE9 de l\u2019\xE9diteur."];
  if (!deps2.translationCore || !deps2.reference) return ["Le contr\xF4le des traductions n\u2019est pas disponible."];
  const p = deps2.translationCore.parse(bytes.toString("utf8"));
  if (!p.ok) return ["Traduction invalide : " + p.errors.slice(0, 3).map((e) => e.code).join(", ")];
  const out = [];
  if (p.doc.id !== s.id || p.doc.version !== s.version) out.push("La traduction annonce un autre identifiant ou une autre version que la soumission.");
  if (p.doc.target.kind === "ourdir") {
    const pct = Math.floor(deps2.translationCore.check(p.doc, deps2.reference).progress.total * 100);
    if (pct < PUBLISH_MIN * 100) out.push(`Traduction d\u2019Ourdir compl\xE8te \xE0 ${pct} % : il en faut ${PUBLISH_MIN * 100} % pour la publier.`);
  }
  return out;
}
function checkModule(bytes, s) {
  try {
    return withPackage(bytes, (p) => {
      const out = [];
      if (p.manifest.id !== s.id || p.manifest.version !== s.version) out.push("Le module annonce un autre identifiant ou une autre version que la soumission.");
      if (p.trust === "unsigned" || !p.publisher) out.push("Le module n\u2019est pas sign\xE9 (node scripts/sign-module.js).");
      else if (p.publisher.publicKey !== s.publisher.key) out.push("Le module est sign\xE9 par une autre cl\xE9 que celle d\xE9clar\xE9e.");
      const real = [...requestedPermissions(p)].sort().join(",");
      if (real !== [...s.permissions].sort().join(",")) out.push(`Les permissions d\xE9clar\xE9es ne sont pas celles du module (${real || "aucune"}).`);
      if (p.manifest.access === "licensed" !== (s.access === "licensed")) out.push("L\u2019acc\xE8s d\xE9clar\xE9 ne correspond pas \xE0 celui du module.");
      return out;
    });
  } catch (err) {
    return ["Module refus\xE9 : " + message(err)];
  }
}
async function checkSubmission(file, text, repoDir, deps2) {
  const p = parseSubmission(file, text, { loopbackPort: deps2.loopbackPort });
  if (!p.ok) return { file, ok: false, errors: p.errors };
  const s = p.sub;
  const errors = ownership(s, readSubmissions(repoDir, deps2).map((x) => ({ id: x.id, version: x.version, kind: x.kind, key: x.publisher.key })), repoChain(repoDir, Date.now()));
  if (s.access === "licensed" && !maySell(readTiers(repoDir), s.publisher.key)) errors.push("Contenu payant : seuls Ourdir, les \xE9diteurs officiels et les vendeurs agr\xE9\xE9s peuvent vendre.");
  if (errors.length) return { file, id: s.id, version: s.version, ok: false, errors };
  let bytes;
  try {
    bytes = await fetcher(deps2)(s.url, s.size + 1);
  } catch (err) {
    return { file, id: s.id, version: s.version, ok: false, errors: ["T\xE9l\xE9chargement impossible : " + message(err)] };
  }
  if (bytes.length !== s.size) errors.push(`Taille : ${bytes.length} octets au lieu de ${s.size}.`);
  else if (sha2563(bytes) !== s.sha256) errors.push("Empreinte SHA-256 diff\xE9rente de celle d\xE9clar\xE9e.");
  else errors.push(...s.kind === "system" ? checkSystem(bytes, s, deps2) : s.kind === "theme" ? checkTheme(bytes, s, deps2) : s.kind === "translation" ? checkTranslation(bytes, s, deps2) : checkModule(bytes, s));
  return { file, id: s.id, version: s.version, ok: errors.length === 0, errors };
}
async function checkPullRequest(o, deps2) {
  const policy = filePolicy(o.changes);
  if (policy.length) return { ok: false, policy, results: [] };
  const results = [];
  for (const c of o.changes) {
    const isSuccession = SUCCESSION_PATH_RE.test(c.filename);
    if (!SUBMISSION_PATH_RE.test(c.filename) && !isSuccession) continue;
    const full = import_node_path4.default.resolve(o.prDir, c.filename);
    if (!full.startsWith(import_node_path4.default.resolve(o.prDir) + import_node_path4.default.sep)) continue;
    let text;
    try {
      text = import_node_fs4.default.readFileSync(full, "utf8");
    } catch {
      results.push({ file: c.filename, ok: false, errors: ["Fichier introuvable dans la pull request."] });
      continue;
    }
    results.push(isSuccession ? checkSuccessionFile(c.filename, text, o.repoDir, Date.now()) : await checkSubmission(c.filename, text, o.repoDir, deps2));
  }
  return { ok: results.length > 0 && results.every((r) => r.ok), policy: [], results };
}
async function problemWith(fetch2, s) {
  try {
    const b = await fetch2(s.url, s.size + 1);
    if (b.length !== s.size) return "la taille du fichier a chang\xE9";
    if (sha2563(b) !== s.sha256) return "le fichier a chang\xE9 (empreinte diff\xE9rente)";
    return null;
  } catch (err) {
    return "injoignable : " + message(err);
  }
}
async function publishCatalog(o, deps2) {
  const now = o.now ?? /* @__PURE__ */ new Date();
  const fetch2 = fetcher(deps2);
  const tiers = readTiers(o.repoDir);
  const chain = repoChain(o.repoDir, now.getTime());
  const statuses = readStatuses(o.repoDir);
  const seen = /* @__PURE__ */ new Map();
  if (o.previousIndex) {
    try {
      const idx = JSON.parse(o.previousIndex.toString("utf8"));
      for (const e of idx.entries ?? []) for (const v of e.versions ?? []) seen.set(`${e.id}@${v.version}`, String(v.publishedAt));
    } catch {
    }
  }
  const work = import_node_fs4.default.mkdtempSync(import_node_path4.default.join(import_node_os2.default.tmpdir(), "ourdir-publish-"));
  const broken = [];
  const entries = /* @__PURE__ */ new Map();
  let hosted = 0;
  let external = 0;
  const submissions = readSubmissions(o.repoDir, deps2);
  for (const s of submissions) {
    const key = `${s.id}@${s.version}`;
    const siblings = submissions.filter((x) => x.id === s.id).map((x) => ({ version: x.version, sha256: x.sha256, permissions: x.permissions }));
    const tier = tierOf(tiers, s.kind, s.id, s.publisher.key, s, chain.line(s.publisher.key), siblings);
    let where;
    if (tier !== "community") {
      const rel = `packages/${s.id}/${s.version}.${extOf(s.kind)}`;
      const mirror = import_node_path4.default.join(o.hostedDir, s.id, `${s.version}.${extOf(s.kind)}`);
      let bytes = import_node_fs4.default.existsSync(mirror) ? import_node_fs4.default.readFileSync(mirror) : null;
      if (!bytes || sha2563(bytes) !== s.sha256) {
        const why = await problemWith(fetch2, s);
        if (why) {
          broken.push({ id: s.id, version: s.version, reason: why });
          continue;
        }
        bytes = await fetch2(s.url, s.size + 1);
      }
      import_node_fs4.default.mkdirSync(import_node_path4.default.dirname(import_node_path4.default.join(work, rel)), { recursive: true });
      import_node_fs4.default.writeFileSync(import_node_path4.default.join(work, rel), bytes);
      where = { file: rel };
      hosted++;
    } else {
      if (o.links === "all" || !seen.has(key)) {
        const why = await problemWith(fetch2, s);
        if (why) {
          broken.push({ id: s.id, version: s.version, reason: why });
          continue;
        }
      }
      where = { url: s.url };
      external++;
    }
    const e = entries.get(s.id) ?? { versions: [] };
    Object.assign(e, {
      id: s.id,
      kind: s.kind,
      name: s.name,
      summary: s.summary,
      description: s.description,
      license: s.license,
      tags: s.tags,
      homepage: s.homepage,
      system: s.system,
      languages: s.languages,
      access: s.access,
      store: s.store,
      dependencies: [],
      // the package belongs to the key at the end of its chain; each version keeps the key that signed it
      publisher: { name: s.publisher.name, key: chain.head(s.publisher.key) }
    });
    e.versions.push({ version: s.version, sha256: s.sha256, size: s.size, ...where, publishedAt: seen.get(key) ?? now.toISOString(), permissions: s.permissions, changelog: s.changelog, status: statuses.get(key) ?? "active", key: s.publisher.key });
    entries.set(s.id, e);
  }
  import_node_fs4.default.mkdirSync(import_node_path4.default.join(work, "entries"), { recursive: true });
  for (const [id, e] of entries) import_node_fs4.default.writeFileSync(import_node_path4.default.join(work, "entries", `${id}.json`), JSON.stringify(e, null, 2));
  for (const f of [DELEGATION_FILE, TIERS_FILE, TIERS_SIGNATURE_FILE, "revoked.json", RECOVERY_DELEGATION_FILE]) {
    if (import_node_fs4.default.existsSync(import_node_path4.default.join(o.repoDir, f))) import_node_fs4.default.copyFileSync(import_node_path4.default.join(o.repoDir, f), import_node_path4.default.join(work, f));
  }
  const valid = readSuccessionFiles(o.repoDir).filter((f) => {
    const p = parseSuccession(JSON.stringify(f));
    return p.ok && chain.next.get(p.s.from) === p.s.to;
  });
  import_node_fs4.default.writeFileSync(import_node_path4.default.join(work, "successions.json"), JSON.stringify(valid));
  const sequence = publishSequence(now);
  build2(work, o.identity, { now, days: 7, sequence, loopbackPort: deps2.loopbackPort });
  const check = verifyPublished(import_node_path4.default.join(work, "public"), o.rootKeys, { now, loopbackPort: deps2.loopbackPort });
  if (!check.ok) throw new Error("Le catalogue produit serait refus\xE9 par l\u2019application : " + check.errors.join(" ; "));
  import_node_fs4.default.rmSync(o.outDir, { recursive: true, force: true });
  copyDir(import_node_path4.default.join(work, "public"), o.outDir);
  import_node_fs4.default.rmSync(work, { recursive: true, force: true });
  return { sequence, entries: entries.size, hosted, external, broken };
}
function copyDir(from, to) {
  import_node_fs4.default.mkdirSync(to, { recursive: true });
  for (const name of import_node_fs4.default.readdirSync(from)) {
    const a = import_node_path4.default.join(from, name);
    const b = import_node_path4.default.join(to, name);
    if (import_node_fs4.default.statSync(a).isDirectory()) copyDir(a, b);
    else import_node_fs4.default.copyFileSync(a, b);
  }
}

// apps/desktop/src/catalog/pack.ts
var import_node_fs5 = __toESM(require("node:fs"));
var import_node_path5 = __toESM(require("node:path"));
var import_node_zlib2 = __toESM(require("node:zlib"));
var SKIP = /* @__PURE__ */ new Set(["node_modules"]);
function walk2(root, rel = "") {
  const out = [];
  for (const e of import_node_fs5.default.readdirSync(import_node_path5.default.join(root, rel), { withFileTypes: true })) {
    if (e.name.startsWith(".") || SKIP.has(e.name) || e.isSymbolicLink()) continue;
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walk2(root, r));
    else if (e.isFile()) out.push(r);
  }
  return out;
}
function packFolder(dir) {
  const files = walk2(dir).sort();
  if (!files.length) throw new Error(say("err.pack.empty"));
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const f of files) {
    const data = import_node_fs5.default.readFileSync(import_node_path5.default.join(dir, f));
    const packed = import_node_zlib2.default.deflateRawSync(data, { level: 9 });
    const name = Buffer.from(f, "utf8");
    const crc = import_node_zlib2.default.crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(67324752, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(2048, 6);
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(0, 10);
    local.writeUInt16LE(33, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(packed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    locals.push(local, name, packed);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(33639248, 0);
    central.writeUInt16LE(3 << 8 | 20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(2048, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(33, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(packed.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(33188 << 16 >>> 0, 38);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);
    offset += local.length + name.length + packed.length;
  }
  const centralBytes = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(101010256, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralBytes.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, centralBytes, end]);
}

// apps/desktop/verifier/cli.ts
var core = require_builder_core();
var FR_TEXTS = { ...require_fr2(), ...require_fr() };
function sayFrench(key, vars) {
  let text = FR_TEXTS[key] || key;
  for (const [k, v] of Object.entries(vars || {})) text = text.split("{" + k + "}").join(String(v));
  return text;
}
useTexts(sayFrench);
var USAGE = [
  "Ourdir catalogue verifier",
  "  gen-key <key.json>                                  your publisher key (keep it secret, out of any package)",
  "  sign-module <folder> --key <key.json> --name N      sign a module folder (module.json at its root)",
  "  pack <folder> --out <file.zip>                      zip it, the same bytes on every machine",
  "  entry <package> --url <https> --name N --summary S --license L [--key k.json --publisher-name P] [--tags a,b]",
  '        [--system id[@min]] [--languages fr,en] [--homepage https] [--changelog "..."] [--store https]',
  "        [--out <repository folder>]      writes entries/<id>/<version>.json there (UTF-8)",
  "  check --repo <base> --pr <pr folder> --files <files.json> --report <report.json> --markdown <report.md>",
  "  merge-decision --conclusion C --checked-sha S --head-sha H --files <files.json> [--succession <file> --created-at <iso>]",
  "  publish --repo <dir> --hosted <mirror> --out <dir> --links all|new [--previous <index.json>] --broken <broken.json> --pin <root key>",
  "  issues --broken <broken.json> --mode all|new --repo-name owner/name",
  "  sign-system <file> --key <key.json>"
].join("\n");
var args = process.argv.slice(2);
var flag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : void 0;
};
var need = (v, what) => {
  if (!v) throw new Error(`Il manque ${what}.`);
  return v;
};
var list = (s) => s ? s.split(",").map((x) => x.trim()).filter(Boolean) : void 0;
var requirement3 = (s) => {
  const [id, minVersion] = s.split("@");
  return minVersion ? { id, minVersion } : { id };
};
var readKey = (file) => {
  const k = JSON.parse(import_node_fs6.default.readFileSync(file, "utf8"));
  if (!k.publicKey || !k.privateKey) throw new Error("Fichier de cl\xE9 invalide.");
  return k;
};
var port = flag("--loopback-port") ? Number(flag("--loopback-port")) : void 0;
var deps = {
  themeCore: require_theme_core(),
  // a translation is weighed against the English texts of the version of Ourdir this verifier is built from: rebuild it with each
  translationCore: require_translation_core(),
  reference: { engine: require_en(), launcher: require_en2(), page: require_en3() },
  validateSystem: (doc) => {
    const r = core.validate(doc);
    return r.ok ? null : r.errors[0]?.message ?? "erreur inconnue";
  },
  loopbackPort: port
};
var readChanges = (file) => JSON.parse(import_node_fs6.default.readFileSync(file, "utf8")).map((c) => ({ filename: String(c.filename), status: String(c.status) }));
async function github(method, url, body) {
  const r = await fetch("https://api.github.com" + url, {
    method,
    headers: { authorization: `Bearer ${need(process.env.GH_TOKEN, "GH_TOKEN")}`, accept: "application/vnd.github+json", "user-agent": "ourdir-catalogue" },
    body: body === void 0 ? void 0 : JSON.stringify(body)
  });
  if (!r.ok) throw new Error(`${method} ${url} : ${r.status}`);
  return r.status === 204 ? null : r.json();
}
async function main() {
  const [command, first] = args;
  switch (command) {
    case "entry": {
      const bytes = import_node_fs6.default.readFileSync(need(first, "le fichier du paquet"));
      const sub = await makeSubmission(
        bytes,
        {
          url: need(flag("--url"), "--url"),
          name: need(flag("--name"), "--name"),
          summary: need(flag("--summary"), "--summary"),
          license: need(flag("--license"), "--license"),
          description: flag("--description"),
          tags: list(flag("--tags")),
          system: flag("--system") ? requirement3(flag("--system")) : void 0,
          languages: list(flag("--languages")),
          homepage: flag("--homepage"),
          changelog: flag("--changelog"),
          store: flag("--store"),
          identity: flag("--key") ? readKey(flag("--key")) : void 0,
          publisherName: flag("--publisher-name")
        },
        deps
      );
      const text = JSON.stringify(sub, null, 2) + "\n";
      const out = flag("--out");
      if (out) {
        const target = out.endsWith(".json") ? out : import_node_path6.default.join(out, "entries", sub.id, `${sub.version}.json`);
        import_node_fs6.default.mkdirSync(import_node_path6.default.dirname(target), { recursive: true });
        import_node_fs6.default.writeFileSync(target, text, "utf8");
        console.log(`Soumission \xE9crite : ${target}`);
      } else {
        process.stdout.write(text);
        console.error(`\xC0 enregistrer sous entries/${sub.id}/${sub.version}.json (ou utilise --out <dossier du d\xE9p\xF4t>)`);
      }
      return;
    }
    case "check": {
      const report = await checkPullRequest({ repoDir: need(flag("--repo"), "--repo"), prDir: need(flag("--pr"), "--pr"), changes: readChanges(need(flag("--files"), "--files")) }, deps);
      import_node_fs6.default.writeFileSync(need(flag("--report"), "--report"), JSON.stringify(report, null, 2));
      import_node_fs6.default.writeFileSync(need(flag("--markdown"), "--markdown"), renderReport(report));
      console.log(renderReport(report));
      if (!report.ok) process.exitCode = 1;
      return;
    }
    case "merge-decision": {
      const succFile = flag("--succession");
      let successionProblem = null;
      if (succFile) {
        const p = parseSuccession(import_node_fs6.default.readFileSync(succFile));
        successionProblem = p.ok ? successionMergeProblem(p.s, String(flag("--created-at") ?? ""), Date.now()) : p.reason;
      }
      const d = mergeDecision({ conclusion: String(flag("--conclusion")), checkedSha: String(flag("--checked-sha") ?? ""), headSha: String(flag("--head-sha") ?? ""), changes: readChanges(need(flag("--files"), "--files")), successionProblem });
      console.log(d.merge ? "merge" : "skip: " + d.reason);
      return;
    }
    case "publish": {
      const identity = JSON.parse(need(process.env.CATALOG_CI_KEY, "CATALOG_CI_KEY"));
      const prev = flag("--previous");
      const r = await publishCatalog(
        {
          repoDir: need(flag("--repo"), "--repo"),
          hostedDir: need(flag("--hosted"), "--hosted"),
          outDir: need(flag("--out"), "--out"),
          identity,
          rootKeys: need(flag("--pin"), "--pin").split(",").map((k) => k.trim()).filter(Boolean),
          links: flag("--links") === "all" ? "all" : "new",
          previousIndex: prev && import_node_fs6.default.existsSync(prev) ? import_node_fs6.default.readFileSync(prev) : null
        },
        deps
      );
      import_node_fs6.default.writeFileSync(need(flag("--broken"), "--broken"), JSON.stringify(r.broken, null, 2));
      console.log(`Publi\xE9 : s\xE9quence ${r.sequence}, ${r.entries} paquets, ${r.hosted} fichiers chez nous, ${r.external} chez leurs cr\xE9ateurs, ${r.broken.length} lien(s) cass\xE9(s).`);
      return;
    }
    case "issues": {
      const repo = need(flag("--repo-name"), "--repo-name");
      if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) throw new Error("Nom de d\xE9p\xF4t invalide.");
      const broken = JSON.parse(import_node_fs6.default.readFileSync(need(flag("--broken"), "--broken"), "utf8"));
      const open = await github("GET", `/repos/${repo}/issues?labels=lien-casse&state=open&per_page=100`);
      const titleOf = (b) => `Lien cass\xE9 : ${b.id} ${b.version}`;
      for (const b of broken) {
        if (open.some((i) => i.title === titleOf(b))) continue;
        const commits = await github("GET", `/repos/${repo}/commits?path=${encodeURIComponent(`entries/${b.id}/${b.version}.json`)}&per_page=1`);
        const who = commits[0]?.author?.login ? `@${commits[0].author.login} ` : "";
        await github("POST", `/repos/${repo}/issues`, {
          title: titleOf(b),
          labels: ["lien-casse"],
          body: `${who}Le fichier de **${b.id} ${b.version}** n\u2019est plus disponible (${b.reason}) : la version est retir\xE9e de l\u2019index jusqu\u2019\xE0 son retour. Remets le fichier tel quel, ou publie une nouvelle version.

The file is no longer available: the version is left out of the index until it comes back.`
        });
      }
      if (flag("--mode") === "all") {
        for (const i of open) {
          if (!broken.some((b) => i.title === titleOf(b))) await github("PATCH", `/repos/${repo}/issues/${i.number}`, { state: "closed", state_reason: "completed" });
        }
      }
      return;
    }
    case "gen-key": {
      const file = need(first, "le fichier de cl\xE9");
      if (import_node_fs6.default.existsSync(file)) throw new Error(`${file} existe d\xE9j\xE0 : je ne l\u2019\xE9crase pas.`);
      const id = generateIdentity();
      import_node_fs6.default.writeFileSync(file, JSON.stringify(id, null, 2), { mode: 384 });
      console.log(`Cl\xE9 cr\xE9\xE9e : ${file}
Cl\xE9 publique : ${id.publicKey}
Garde ce fichier secret et sauvegard\xE9 : un paquet appartient \xE0 la cl\xE9 qui l\u2019a publi\xE9.`);
      return;
    }
    case "sign-module": {
      const dir = need(first, "le dossier du module");
      const keyFile = need(flag("--key"), "--key");
      if (import_node_path6.default.resolve(keyFile).startsWith(import_node_path6.default.resolve(dir) + import_node_path6.default.sep)) throw new Error("La cl\xE9 est DANS le dossier du module : elle serait publi\xE9e. D\xE9place-la.");
      signPackage(dir, readKey(keyFile), flag("--name") || "\xC9diteur");
      console.log(`Sign\xE9 : ${dir}`);
      return;
    }
    case "pack": {
      const out = need(flag("--out"), "--out");
      import_node_fs6.default.writeFileSync(out, packFolder(need(first, "le dossier")));
      console.log(`Archive \xE9crite : ${out}`);
      return;
    }
    case "sign-system": {
      console.log(signPackageFile(import_node_fs6.default.readFileSync(need(first, "le fichier")), readKey(need(flag("--key"), "--key"))));
      return;
    }
    default:
      console.log(USAGE);
      if (command) process.exitCode = 1;
  }
}
main().catch((err) => {
  console.error("Erreur : " + (err instanceof Error ? err.message : String(err)));
  process.exit(1);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sayFrench
});
