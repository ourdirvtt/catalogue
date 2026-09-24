# Règles du catalogue Ourdir

*English below.*

Ces règles s'appliquent à tout paquet listé dans le catalogue d'Ourdir, qu'il soit hébergé par Ourdir ou par son créateur.

## Interdit

- **Du contenu copié sans droit** : texte, images, cartes ou données d'un livre de règles, d'un supplément ou d'un site, sans l'autorisation de ses ayants droit. Une licence libre (SRD, Creative Commons…) doit être citée dans le champ `license`, avec ses mentions obligatoires dans le paquet.
- **Du code malveillant** : un module qui cherche à contourner son bac à sable, à tromper l'utilisateur, à miner, à espionner ou à détruire.
- **La collecte de données personnelles** sans le dire clairement dans la description, ou sans nécessité pour ce que fait le module.
- **L'usurpation** d'une marque, d'un éditeur ou d'une personne : nom, logo, présentation qui laissent croire à un contenu officiel ou à un autre auteur.
- **Tout contenu illégal** en France ou dans l'Union européenne.

## Contenu adulte

Permis, à condition de porter l'étiquette `nsfw`. Un contenu adulte sans cette étiquette est retiré.

## Retrait

- Un paquet qui enfreint ces règles est retiré **sans préavis** dès qu'un signalement fondé est reçu ; les versions installées sont désactivées dans l'appli.
- Un éditeur qui récidive voit **sa clé révoquée** : tous ses paquets disparaissent du catalogue.
- Un lien mort ou un fichier modifié après publication écarte la version de l'index jusqu'à ce que le fichier revienne à l'identique.

## Signaler

- Sur GitHub : [formulaire de signalement](../../issues/new?template=signalement.yml).
- Sans compte GitHub : **signalement@ourdir.fr**.

## Partager depuis l'appli

Un créateur sans compte GitHub peut partager un système qu'il a fait dans l'appli Ourdir (bouton « Partager au catalogue »). Le service `partage.ourdir.fr` héberge alors le fichier sous `catalogue.ourdir.fr/v2/partages/` et ouvre la pull request à sa place ; les mêmes contrôles et les mêmes règles s'appliquent, le paquet est listé en **Communautaire**.

- **Limites** : systèmes seulement ; 10 Mo par fichier, 100 Mo par clé d'éditeur ; 5 partages par jour et par clé, 20 par adresse IP ; une version publiée n'est jamais remplacée (on en publie une nouvelle).
- **Clé d'éditeur** : créée dans l'appli, distincte de l'identité de joueur. Elle seule peut publier une nouvelle version d'un paquet. Perdue, elle ne se remplace pas : sauvegarde-la.
- **Données conservées** : l'adresse e-mail vérifiée (jamais publiée), la clé publique et l'adresse IP de chaque envoi, **un an**, comme la loi le demande à un hébergeur (LCEN). Elles ne servent qu'à répondre à une réquisition judiciaire ou à traiter un signalement. Le fichier d'un partage refusé ou fermé est effacé au bout de 7 jours.
- **Sous-traitants** : Cloudflare (service et hébergement des fichiers), Brevo (envoi du code par e-mail), GitHub (pull request et historique publics).
- **Accès, suppression** : écrire à **signalement@ourdir.fr** depuis l'adresse concernée. Un paquet publié se retire de la même façon.

- Pour une soumission par pull request directe : on garde ce que GitHub montre publiquement (compte, historique) et la clé publique de l'éditeur.

---

# Ourdir catalogue rules

These rules apply to every package listed in the Ourdir catalogue, hosted by Ourdir or by its creator.

## Forbidden

- **Content copied without the right to**: text, images, maps or data from a rulebook, supplement or website, without its rights holders' permission. An open licence (SRD, Creative Commons…) must be named in the `license` field, with its required notices inside the package.
- **Malicious code**: a module that tries to escape its sandbox, deceive the user, mine, spy or destroy.
- **Collecting personal data** without saying so clearly in the description, or without need for what the module does.
- **Impersonating** a brand, a publisher or a person: a name, logo or presentation that suggests official content or another author.
- **Any content illegal** in France or in the European Union.

## Adult content

Allowed, with the `nsfw` tag. Adult content without it is removed.

## Removal

- A package that breaks these rules is removed **without notice** once a well-founded report is received; installed versions are switched off in the app.
- A repeat offender's **key is revoked**: all of their packages leave the catalogue.
- A dead link, or a file changed after publication, keeps the version out of the index until the very same file comes back.

## Report

- On GitHub: [report form](../../issues/new?template=signalement.yml).
- Without a GitHub account: **signalement@ourdir.fr**.

## Sharing from the app

A creator without a GitHub account can share a system they made in the Ourdir app ("Share to the catalogue" button). The `partage.ourdir.fr` service then hosts the file under `catalogue.ourdir.fr/v2/partages/` and opens the pull request for them; the same checks and rules apply, and the package is listed as **Community**.

- **Limits**: systems only; 10 MB per file, 100 MB per publisher key; 5 shares a day per key, 20 per IP address; a published version is never replaced (publish a new one).
- **Publisher key**: made in the app, separate from the player identity. Only it can publish a new version of a package. If lost, it cannot be replaced: back it up.
- **Data kept**: the verified e-mail address (never published), the public key and each upload's IP address, for **one year**, as French law requires of a host (LCEN). They are only used to answer a court order or to handle a report. The file of a refused or closed share is erased after 7 days.
- **Processors**: Cloudflare (service and file hosting), Brevo (sending the e-mail code), GitHub (public pull request and history).
- **Access, erasure**: write to **signalement@ourdir.fr** from the address concerned. A published package is removed the same way.

- For a direct pull request: we keep what GitHub shows publicly (account, history) and the publisher's public key.
