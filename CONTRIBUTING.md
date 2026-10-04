# Soumettre un paquet

*English below.*

Types ouverts pour l'instant : **module**, **système**, **thème de table** et **traduction d'Ourdir**. Les compendiums, packs de cartes et aventures arrivent plus tard. Une traduction est un fichier `.ourdir-translation.json` fait depuis le modèle d'Ourdir (Paramètres → Traductions, « Exporter le modèle ») : elle se signe et se soumet comme un thème, et la CI la lit avec les règles de l'appli (texte seul, mêmes variables que l'anglais) et exige 80 % des textes d'Ourdir. Un thème est un fichier `.ourdir-theme.json` fait avec l'éditeur de thèmes d'Ourdir (page **Thèmes**, « Exporter ») : il se signe et se soumet comme un système (`entry <fichier> … --key <clé.json>`), et la CI le lit avec les mêmes règles que l'appli (listes fermées, lisibilité).

Tu n'as pas GitHub ? Pour un système, un thème ou une traduction faits dans l'appli Ourdir : page **Systèmes de jeu** ou **Thèmes**, ou Paramètres → Traductions, bouton « Partager au catalogue ». L'appli signe, envoie et suit le contrôle pour toi (voir [RULES.md](RULES.md#partager-depuis-lappli)).

Tout se fait avec l'outil de ce dépôt, `tools/verifier.js` (Node 20 ou plus, aucune installation) : clone le dépôt, ou télécharge ce seul fichier.

**Ta clé** : si tu la perds, tu ne peux plus publier de nouvelle version. Pour la protéger, importe-la une fois dans l'appli Ourdir (Catalogue → *Mes publications* → « Ma clé d'éditeur ») et ajoute un **e-mail de secours** : « J'ai perdu ma clé » te rendra alors tes paquets en 7 jours (voir [RULES.md](RULES.md#partager-depuis-lappli)). Pour changer de clé en gardant l'ancienne, ouvre une pull request `successions/<ancienne clé>.json` signée par elle, ou passe par « Changer de clé » dans l'appli.

## 1. Signer ton paquet

Une clé d'éditeur prouve que le paquet vient de toi. Crée-la une fois : `node tools/verifier.js gen-key ma-cle.json`. Garde-la secrète, hors de tout dossier de module, et **garde toujours la même** : un identifiant de paquet appartient à la clé qui l'a publié en premier.

- **Un module** (dossier avec `module.json`) : `node tools/verifier.js sign-module <dossier> --key ma-cle.json --name "Mon nom"`, puis `node tools/verifier.js pack <dossier> --out mon-module.zip`.
- **Un système** (fichier `.ttsystem.json` exporté du builder) : la signature se fait à l'étape 3.

## 2. Héberger le fichier

N'importe où en **https**, à une adresse qui ne changera pas : une *release* GitHub est idéale. Le fichier publié ne doit plus jamais changer ; pour corriger, publie une nouvelle version.

## 3. Écrire la soumission

```
node tools/verifier.js entry mon-paquet.zip --url https://…/mon-paquet.zip --name "Mon paquet" --summary "Ce qu'il fait" --license MIT [--tags qol,combat] [--system cpred] [--languages fr]
```

Pour un système, ajoute `--key ma-cle.json --publisher-name "Mon nom"` : la signature est calculée et ajoutée.

Lancé depuis ton clone du dépôt, ajoute `--out .` : l'outil écrit lui-même `entries/<id>/<version>.json` (en UTF-8 ; évite `>` dans PowerShell, qui change l'encodage).

## 4. Ouvrir la pull request

Elle ne doit **ajouter que** ce fichier (jusqu'à 10 soumissions à la fois). La CI :

- télécharge ton paquet et vérifie sa taille, son empreinte et sa signature ;
- le contrôle comme l'appli l'installerait (module préparé, permissions exactement celles déclarées ; système validé comme un import) ;
- vérifie que l'identifiant est à toi et que la version est nouvelle ;
- poste son rapport, puis **fusionne toute seule** si tout est bon. Le paquet apparaît dans le catalogue quelques minutes plus tard, au niveau **Communautaire**.

## Niveau « Validé »

Validé veut dire qu'une personne a relu ton contenu : c'est la marque de qualité d'Ourdir, montrée à tous dès l'ouverture du Catalogue. Demande-le depuis l'appli (Catalogue → *Mes publications*, « Demander la validation », pour une version ou pour ton compte), ou avec le formulaire « Demande de validation » des issues. Les grades, ce qu'ils apportent, ce qu'on relit et les délais sont dans les [règles](RULES.md#grades) : chaque demande est relue par une personne, au cas par cas, et cela peut prendre plusieurs jours, voire quelques semaines.

## Quelle licence mettre (champ `license`)

Le champ `license` est l'identifiant SPDX de ta licence (`MIT`, `CC-BY-4.0`…). Les utilisateurs se servent du paquet sous cette licence ; Ourdir ne reçoit que le droit de l'héberger. **Les licences non commerciales (NC) sont refusées**, pour le paquet comme pour tout ce qu'il contient.

| Type | Ce qu'on attend |
|---|---|
| Module (code) | Ta licence. Le code tiers que tu embarques garde ses mentions. |
| Système de jeu | Ta licence pour le code et la mise en page. Les textes de règles seulement sous licence libre (SRD en CC BY 4.0, ORC, OGL 1.0a), avec leurs mentions dans le paquet. Aucun texte, logo ni illustration officiels sans l'accord de l'éditeur. |
| Compendium | La licence de la source (CC BY 4.0, ORC…). Une source CC BY-SA oblige le paquet à rester en CC BY-SA. |
| Thème de table | Ta licence pour le CSS. Polices en OFL ou Apache 2.0, images en CC0 ou CC BY. |
| Pack de cartes | CC0, CC BY, CC BY-SA, ou ta création. Les packs d'assets du commerce ne se redistribuent pas. |
| Aventure | Ta création, ou un contenu sous licence libre. Pas d'aventure publiée par un éditeur. |
| Traduction | Ta licence. La traduction d'un livre suit la licence du livre. |

En ouvrant une pull request, tu acceptes que ce que tu y ajoutes à ce dépôt (règles, outils, workflows) soit sous la licence de la partie concernée (voir [LICENSE](LICENSE)). Les fiches `entries/` sont publiées en CC0.

Lis aussi les [règles](RULES.md).

---

# Submitting a package

Open kinds for now: **module**, **system**, **table theme** and **Ourdir translation**. Compendiums, map packs and adventures come later. A translation is an `.ourdir-translation.json` file made from Ourdir's template (Settings → Translations, "Export the template"): it is signed and submitted like a theme, and the CI reads it with the app's rules (text only, the English text's variables) and asks for 80 % of Ourdir's texts. A theme is an `.ourdir-theme.json` file made with Ourdir's theme editor (**Themes** page, "Export"): it is signed and submitted like a system (`entry <file> … --key <key.json>`), and the CI reads it with the app's own rules (closed lists, readability).

No GitHub account? For a system, a theme or a translation made in the Ourdir app: **Game systems** or **Themes** page, or Settings → Translations, "Share to the catalogue" button. The app signs, uploads and follows the checks for you (see [RULES.md](RULES.md#sharing-from-the-app)).

Everything is done with this repository's tool, `tools/verifier.js` (Node 20+, nothing to install).

**Your key**: lose it and you can no longer publish a new version. To protect it, import it once into the Ourdir app (Catalog → *My publications* → "My publisher key") and add a **recovery e-mail**: "I lost my key" then gives your packages back within 7 days (see [RULES.md](RULES.md#sharing-from-the-app)). To change key while keeping the old one, open a `successions/<old key>.json` pull request signed by it, or use "Change key" in the app.

1. **Sign** your package: create your key once with `node tools/verifier.js gen-key my-key.json` (keep it secret, and always the same one: a package id belongs to the key that first published it). A module: `node tools/verifier.js sign-module <folder> --key my-key.json --name "My name"`, then `node tools/verifier.js pack <folder> --out my-module.zip`. A system is signed in step 3.
2. **Host** the file over **https** at an address that will not change (a GitHub release is ideal). A published file never changes; publish a new version instead.
3. **Write** the submission: `node tools/verifier.js entry my-package.zip --url https://… --name "…" --summary "…" --license MIT` (for a system, add `--key my-key.json --publisher-name "…"`), and save it as `entries/<id>/<version>.json` (or add `--out .` from your clone: the tool writes it, in UTF-8).
4. **Open a pull request** that only adds that file (up to 10 at once). The CI checks the package like the app would install it, posts its report, and merges on its own when everything is right. The package shows up as **Community** a few minutes later.

**Validated** means a person read your content: Ourdir's mark of quality, shown to everyone as soon as the Catalog opens. Request it from the app (Catalog → *My publications*, "Request validation", for a version or for your account), or with the "Validation request" issue form. Grades, what they bring, what we review and the delays are in the [rules](RULES.md#grades): every request is read by a person, case by case, and it can take several days, even a few weeks.

## Which licence to use (`license` field)

The `license` field is the SPDX identifier of your licence (`MIT`, `CC-BY-4.0`…). Users use the package under that licence; Ourdir only receives the right to host it. **Non-commercial (NC) licences are refused**, for the package and for anything inside it.

| Kind | What we expect |
|---|---|
| Module (code) | Your licence. Third-party code you bundle keeps its notices. |
| Game system | Your licence for your code and layout. Rules text only under an open licence (SRD under CC BY 4.0, ORC, OGL 1.0a), with its notices inside the package. No official text, logo or artwork without the publisher's agreement. |
| Compendium | The source's licence (CC BY 4.0, ORC…). A CC BY-SA source keeps the package CC BY-SA. |
| Table theme | Your licence for the CSS. Fonts under OFL or Apache 2.0, images under CC0 or CC BY. |
| Map pack | CC0, CC BY, CC BY-SA, or your own creation. Commercial asset packs cannot be redistributed. |
| Adventure | Your own creation, or openly licensed content. No publisher-released adventure. |
| Translation | Your licence. A translation of a book follows the book's licence. |

By opening a pull request you agree that what you add to this repository (rules, tools, workflows) is under the licence of the part it belongs to (see [LICENSE](LICENSE)). `entries/` sheets are released under CC0.
