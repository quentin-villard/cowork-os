# Brief Landing Page — Cowork OS (v2)

> **Document de travail** pour le projet de landing page de vente de Cowork OS.
> Version 2 — 20 avril 2026. Intègre les évolutions produit (ajout de Tool Map et Activity Log) et les décisions prises pendant la révision (offre Founding Members, liberté laissée à Claude Design sur l'identité visuelle, nuance sur le ton éditorial).
> Doc vivant — à enrichir au fil des phases (cadrage → architecture narrative → rédaction → mise en forme).

---

## 1. Identité du produit

**Nom** : Cowork OS (à écrire précisément ainsi, sans W majuscule — le produit de Simon s'écrit *CoWork OS* avec W majuscule, et la différence de graphie est un élément de distinction à maintenir dans toute la copy)
**Domaine** : cowork-os.com (acheté)
**Nature** : template de structure fichiers/dossiers pour Claude Cowork (compatible Claude Code, mais cible principale = Cowork).

**Fonction** :
- **Mémoire persistante** : profil, voix de marque, préférences, historique d'activité conservés entre sessions
- **Pont vers tes outils externes** : un map de ton Notion, Drive, Gmail pour que Claude sache où chercher sans re-briefer
- **Création de contenu à ta voix** : writing-rules + templates + exemples pour que Claude produise comme toi, pas comme une IA générique
- **Architecture optimisée** : fichiers chargés à la demande pour préserver la fenêtre de contexte

**Idée centrale** : *tu configures le système une fois, et Claude te connaît à chaque session — tes projets, ta voix, tes outils, tes préférences.*

**Positionnement revendiqué par Quentin** : *"C'est l'OS layer qui manquait à Cowork."*

**Piliers non-négociables** :
- **Simplicité** — toute complexité doit se justifier
- **Structure** — organisation claire, lisible
- **Pédagogie** — le template enseigne, ne suppose pas

**Double usage** :
1. Accélérer l'onboarding client de Quentin (consulting)
2. Fonctionner comme produit commercial autonome (self-serve)

**Langue** : anglais pour le produit **et pour la landing**. La totalité du contenu public (copy, interface, documentation) est en anglais. Traduction FR envisagée plus tard, hors scope v1.

**État d'avancement** : pratiquement terminé. **Lancement imminent — dans les prochains jours.**

---

## 2. Cible v0

### Avatar précis (confirmé par le doc Rémi + la cible Simon)

**Qui c'est** :
- Solopreneur / founder / indie maker / freelance
- Opère seul (éventuellement 1–2 collaborateurs ponctuels, VAs, freelances)
- Porte plusieurs casquettes : stratégie, production, vente, ops
- **100% non-technique** : refuse le bricolage, pas de terminal, pas d'API, pas d'infra
- **Niveau IA : débutant à intermédiaire** — a testé Claude / ChatGPT, peut-être quelques GPTs, mais **sans système** donc résultats décevants

**Ce qu'il vit** :
- Surchargé mentalement, beaucoup de projets, pas de système
- Dépend de son énergie du jour
- Veut vendre plus cher / livrer mieux / aller plus vite sans se cramer ni recruter

**Ce à quoi il est sensible** :
- Méthode propriétaire
- Voix personnelle / voix de marque
- Avantage concurrentiel individuel (pas juste "prompts")

**Probablement** :
- Déjà un plan Claude Pro/Max (pré-requis technique pour Cowork)
- Connaît l'écosystème Claude / Cowork
- A vu passer BetterCreating ou des concurrents

### Distinction cible v0 vs cible long terme

- **Cible v0 (landing Founding Members)** : early adopters tech-adjacent, tels que décrits ci-dessus.
- **Cible long terme (à 12+ mois)** : "solopreneurs non-techniques au sens large", "Monsieur Madame Tout le Monde" du segment pro.
- **Conséquence** : la landing v1 doit parler aux early adopters. Elle s'élargira dans une v2/v3 quand Cowork sera mainstream.

---

## 3. Concurrence

### 3.1 Simon — CoWork OS (BetterCreating)

- **URL** : https://www.bettercreating.com/coworkos
- **Format** : template (même format que nous)
- **Prix** : $97 beta / $149 régulier — *"35% off pre-sale"*
- **Cible revendiquée** : *"non-technical creators, consultants, freelancers, and small business owners — comfortable with ideas and willing to learn systems, but you've never touched a terminal in your life."*
- **Pitch produit** : *"Turns Claude Desktop into a scalable second brain, and personal assistant."*
- **Différenciateurs revendiqués** : self-improving system, scheduled tasks, persistent identity files, *"no coding, no configuration headaches"*.

**Structure de page** :
1. Hero + tagline + pricing
2. Problem / solution
3. How-it-works walkthrough
4. Requirements checklist
5. Deliverables breakdown
6. Testimonial
7. FAQ
8. Newsletter signup

**Ton** : conversationnel, approachable, rassurant. *"That's it!"* — simplicité revendiquée.

### 3.2 Rémi — Bootcamp Système IA (HyperFreelance)

- **URL** : https://ai-bootcamp.hyperfreelance.co/
- **Format** : bootcamp 6 semaines (pas un template — **format très différent**)
- **Prix** : 1 990€ HT (paiement unique) ou 3× 390€ HT
- **Cible** : *"Freelances, agences et indépendants B2B"*
- **Promesses** : *"x5 votre clarté, décuple votre productivité"*, *"2 à 3× plus vite"*
- **NB importante** : Rémi n'est **pas un concurrent direct** sur l'acte d'achat (format et prix incomparables). Mais il cible le **même bassin d'audience**, et la page Notion d'extraction de sa vente est une **mine d'insights copywriting** (cf. §4).

**Structure de page (Rémi)** :
Hero + social proof → problem diagnosis → market opportunity → framework (6-level AI maturity) → curriculum semaine par semaine → comparison → bonuses → fit → founder → pricing table → FAQ → CTA final.

**Ton** : direct, confiant, pratique, **hard-sell émotionnel** (chiffres-chocs, urgence, langage d'opportunité).

### 3.3 Positionnement vs concurrents

**vs Simon** :
- **Prix** : durablement ~35% moins cher ($47/$97 vs $97/$149). Différenciateur réel mais fragile (copiable).
- **Simplicité / accessibilité** : à pousser comme différenciateur durable, au-delà du prix.
- **Identité visuelle** : distincte requise (impératif dû à la collision de nom avec Simon). Specs concrètes volontairement laissées ouvertes à ce stade — Claude Design aura la latitude de proposer.

*Note interne : Tool Map et Activity Log sont des parités fonctionnelles avec Simon (Context Map + système de mémoire). Ne pas les survendre comme points de supériorité concurrentielle. Restent des forces produit tangibles vs un utilisateur sans système — angle à exploiter en copy landing pour une cible qui vient souvent de rien.*

**vs Rémi** :
- Produit complètement différent ($47 template vs 1 990€ bootcamp).
- Pas de compétition sur l'acte d'achat.
- Attention à **ne pas importer son ton hard-sell** (voir §5 — ton éditorial).

---

## 4. Insights consommateurs

> Source principale : page Notion *"Rémi — Extraction vente (Cowork OS) + tableau"*.
> Qualifications croisées avec la page de Simon.

### 4.1 Pains (émotionnels + opérationnels)

**Chaos & charge mentale**
- *"L'IA n'a jamais le bon contexte au bon moment."*
- Infos éparpillées : Notion, Drive, Slack, notes perso → personne ne sait où est la vérité.
- *"Je passe plus de temps à réfléchir à mon système qu'à exécuter."* → brouillard mental.

**Usine à gaz IA**
- *"Bazooka pour tuer une fourmi"* : prompts gigantesques, réponses lentes, tokens qui explosent.
- Peur d'un système trop lourd qui finit inutilisé.

**Essais ratés & regret**
- A déjà acheté des outils inutiles, testé des setups qui ne servent à rien.
- Doutes permanents : *"je ne sais pas si je rêve ou si c'est vraiment possible."*
- Peur de se tromper **encore**.

**Absence de méthode reproductible**
- Chaque projet repart de zéro.
- Pas de découpage, pas de roadmap, pas de template de livrable.
- Output IA générique (*"slop"*) qui ne ressemble pas à sa marque.

**Peur d'être dépassé**
- Les écarts de productivité **×10** arrivent vite.
- *"Si je copie un système sans le personnaliser, je me fais rattraper par la moyenne du marché."*
- Sentiment d'urgence : la fenêtre se referme.

### 4.2 Désirs / résultats attendus

- Gagner du temps **dès la semaine 1** (plusieurs heures/jour).
- Livrer **3 à 5× plus vite** sans baisse de qualité.
- Arriver en kick-off avec **des heures de livrables déjà préparés**.
- Augmenter la valeur perçue (nouveaux livrables, meilleure visibilité client, positionnement premium).
- Avoir un **système IA propriétaire** — pas une stack de prompts copiés.
- **Voix de marque préservée** (anti-slop, ton reconnaissable).
- **Confiance** : savoir où est la vérité, savoir ce que l'IA va faire.
- **Continuité** : pouvoir reprendre un projet après une pause (2 jours, 2 semaines) sans ré-expliquer le contexte à Claude.

### 4.3 Anti-désirs (qualification d'audience)

- ✘ Pas un truc *"plug-and-play qui automatise tout pendant qu'ils sirotent un cocktail"* → non crédible.
- ✘ Pas un SaaS de posts LinkedIn / d'acquisition magique.
- ✘ Pas d'installation locale, pas de serveur, pas de code.
- ✘ Pas un template *"joli"* mais non personnalisable.

### 4.4 Objections récurrentes & recadrages

| Objection | Recadrage |
|---|---|
| *"J'ai déjà Notion, pourquoi un template de plus ?"* | Ce n'est pas un dossier Notion — c'est **l'architecture qui rend l'IA enfin utile**. |
| *"Peur de devoir tout réorganiser."* | **Modulaire** : tu migres par brique, sans tout casser. |
| *"Et si je me trompe encore ?"* | Le template **cadre les décisions** — moins de choix, plus d'exécution. |
| *"Mes use cases changent tout le temps."* | Le framework est stable ; **tu ne changes que les exemples**. |
| *"Je veux du plug-and-play."* | Le socle **est** plug-and-play ; la valeur durable vient de ta personnalisation. |
| *"L'IA écrit comme une IA, point."* | Avec les **bonnes règles et les bons exemples**, la différence est évidente. |
| *"Encore un système à maintenir à la main."* | Le map d'outils et la mémoire **se remplissent via tes conversations** ; le log d'activité peut tourner en automatique. Tu ne gères rien à la main. |

### 4.5 Phrases miroir (leur voix — à utiliser en hook / problem section)

- *"J'utilise l'IA, mais sans système ça me fait perdre du temps."*
- *"Tout est éparpillé, l'IA n'a jamais le bon contexte."*
- *"J'ai déjà perdu du temps et de l'argent pour rien."*
- *"Je veux un truc efficient, pas une IA qui tourne 3h."*
- *"Si je ne m'équipe pas, je me fais rattraper."*
- *"Ça sent l'IA à 10 mètres, ça ne me ressemble pas."*
- *"Quand je reprends un projet après une pause, je ne sais plus où j'en étais."*
- *"Mes outils ne se parlent pas, je perds 10 min à chercher où j'ai mis quoi."*

### 4.6 Mécanismes de crédibilité

- **Temps R&D déjà payé** : années d'expérience templates Notion Everything + tests Cowork (équivalent des *"200h d'erreurs évitées"* de Rémi).

- **Architecture en trois tiers, lisible d'un coup d'œil** :
  1. *Qui tu es* (`about-me/`) — personnalité de l'agent, profil, règles d'écriture, map d'outils externes, log d'activité, mémoire cross-projet
  2. *Tes ressources* (`resources/`) — templates, exemples, assets réutilisables
  3. *Ton travail* (`projects/`, `quick-outputs/`) — briefs, inputs, outputs

  Mécanisme clé : les fichiers les plus lourds (règles d'écriture, map d'outils, log d'activité) se chargent à la demande, jamais tous en même temps.

- **Un système qui grandit avec toi sans maintenance** : le map d'outils et la mémoire se remplissent via les interactions ; le log d'activité peut tourner automatiquement en scheduled task. Tu n'édites rien à la main.

- **Métaphore candidate** : *"stagiaire Polytechnique"* — output haut niveau, mais toi tu restes le stratège. À retravailler en anglais.

- **Preuve par la démo** : montrer un projet qui passe de 0 à kick-off en 30 min.

---

## 5. Positionnement & différenciation

### 5.1 Différenciateurs

1. **Simplicité / accessibilité** — différenciateur durable, si bien exécuté. Clé du produit.
2. **Pédagogie** — le template enseigne l'utilisateur, prompts de customisation, documentation pas-à-pas.
3. **Pont vers tes outils externes** — Tool Map : Claude sait où vit l'info dans ton Notion, Drive, Gmail sans que tu aies à ré-expliquer.
4. **Continuité opérationnelle** — Activity Log, optionnellement automatisé : tu retrouves où tu en étais, le système te prépare le terrain.
5. **Sécurité par défaut** — maximum de garde-fous out of the box, allégeable par utilisateurs avancés.
6. **Prix** — durablement ~35% moins cher que Simon. Différenciateur réel mais fragile.

### 5.2 Distinction visuelle (vs Simon, indispensable)

Impératif : **ne pas imiter Simon visuellement**, pour ne pas brouiller l'identité (cf. collision de nom — §3.1).

Au-delà de cet impératif, les specs concrètes sont volontairement laissées ouvertes à ce stade. Claude Design aura la latitude de proposer ses propres directions.

**Préférences de départ** (pour ne pas partir d'une page blanche — à challenger, pas à verrouiller) :
- Palette orientée univers Claude/Anthropic : intuitions `#1C1917` (fond), `#CC785C` (accent), `#F5F0EB` (texte)
- Typo serif + sans-serif, avec intuition Instrument Serif (titres) + Inter (texte)
- Dark mode comme point de départ, light mode envisageable

Logo et charte complète : à définir après les premières explorations Claude Design.

### 5.3 Ton éditorial

**Registre visé** : conversationnel, rassurant, pédagogique — aligné avec Simon, **PAS avec le hard-sell caricatural de Rémi**.

**Rationale** :
- Le produit est à $47 early access, pas un bootcamp à 1 990€
- Les piliers Simplicité + Pédagogie sont incompatibles avec un ton agressif
- Un registre hard-sell serait dissonant avec la cible non-technique

**Nuance importante** : pas de scam ni d'artifices, **mais les leviers marketing qui fonctionnent restent pleinement utilisables** — spécificité, démonstration, contraste, preuve par l'exemple, formulations vives, économie de mots, tension bien posée. C'est le **ton** qui reste conversationnel, pas l'**efficacité copy** qui est sacrifiée.

**À piquer de Rémi** : les insights (pains, désirs, objections, phrases miroir) + la structure de copywriting.
**À ne pas piquer de Rémi** : l'agressivité caricaturale, les claims chiffrés non-étayés, l'urgence artificielle, les promesses scammy.

---

## 6. Offre & pricing

**Concept** : offre **Founding Members** limitée en nombre au prix de lancement. Une fois le quota atteint, bascule automatique sur le prix régulier.

| Phase | Prix | Statut |
|---|---|---|
| **Founding Members** (quota limité) | $47 | Prix de lancement, scarcity réelle par quantité |
| **Prix régulier** | $97 | Après épuisement du quota Founding Members |
| **Prix post-lancement officiel** | $127 potentiellement | À confirmer |

- **Quota Founding Members** : à définir — assez atteignable pour le lancement, assez contraint pour que la rareté soit crédible.
- **Plateforme de paiement** : Lemon Squeezy envisagé.
- **Affichage landing** : la scarcity doit être **réelle et honnête** (compteur "X places restantes sur [quota]") — pas d'urgence artificielle type "2 personnes regardent cette page". Cohérent avec §5.3 (leviers marketing oui, artifice non).

---

## 7. Landing page — décisions actées

### 7.1 Objectif

- **Langue** : anglais. L'intégralité de la landing est rédigée en anglais (copy, CTA, microcopy, métadonnées). Aucune partie en français dans cette v1.
- **CTA principal** : achat direct Founding Members (pas waitlist).
- **Rationale** : produit prêt à sortir dans les prochains jours — pas de waitlist nécessaire pour tester l'intérêt ou construire du momentum long.
- **Plan de repli** : si retard imprévu côté produit, bascule possible sur waitlist simple (formulaire Tally ou lien Notion) sans refonte majeure.

### 7.2 Stack technique

- **Hébergement** : Vercel (compte existant)
- **Framework** : Next.js / React
- **Repo** : GitHub
- **Design tool** : **Claude Design** (Anthropic Labs, lancé le 17 avril 2026) — pour générer les premières explorations visuelles + itérer. Handoff vers Claude Code pour la production. *Caveat : produit sorti récemment, attendre des rough edges.*
- **Paiement** : Lemon Squeezy (envisagé)

### 7.3 Design

**Impératif** : identité visuelle distincte de Simon (collision de nom).

**Approche** : laisser Claude Design proposer ses propres directions à partir du brief. Les éléments ci-dessous sont des **préférences de départ**, pas des contraintes figées.

- Intuitions palette : univers Claude/Anthropic — `#1C1917` / `#CC785C` / `#F5F0EB` (à challenger)
- Intuitions typo : Instrument Serif (titres) + Inter (texte) — à challenger
- Mode : dark comme point de départ (light v2 envisageable)
- Logo et charte complète : à définir après les premières explorations

### 7.4 Évolutivité envisagée

La landing peut évoluer vers un site complet (blog, tutos, ressources) selon succès. À garder à l'esprit pour les choix structurants, mais **hors scope v1**.

---

## 8. Décisions en cours

### 8.1 Promesse / headline principal

**État** : en cours de formulation.
**Direction validée** :
- Angle **macro / catégoriel** (pas bénéfice tactique, pas use case)
- Intuition Quentin : *"un système qui fonctionne, un coworker IA"*
- Modèle mental proposé : transformation d'état *"from chatbot to coworker"*, avec le mécanisme *"OS / système"* qui porte le "comment".

**Candidats à tester** (EN, langue de la landing) :

*Transformation directe*
1. *"Turn Claude into a real coworker."*
2. *"Claude, but as a coworker."*

*Système qui tient*
3. *"The operating system that makes Claude work."*
4. *"A system, not a prompt. A coworker, not a chatbot."*

*Continuité / mémoire*
5. *"An AI that knows you. A system that remembers."*
6. *"Your context. Your voice. Your coworker."*

*Accessibilité (piliers Simplicité + Pédagogie)*
7. *"The simplest way to turn Claude into your coworker. Setup in 30 minutes. No code."*

*Contexte & continuité élargis (intègre Tool Map / Activity Log)*
8. *"Your voice, your projects, your tools — all in one coworker."*
9. *"Never explain yourself twice."*
10. *"A coworker who remembers yesterday, knows your tools, and writes like you."*

**Pronostic Claude** : variante de #2 ou #4 — opposition catégorielle explicite, typiquement le plus convertissant sur ce type de produit. #9 est un outsider intéressant pour sa densité (condense les trois briques en une promesse).
**Décision** : à trancher, puis affiner en 3 variations serrées avant de figer.

### 8.2 Nom de l'offre beta

**Décision** : **Founding Members**.

Rationale : cadre communautaire + valorisation du client précoce + justification naturelle du quota limité (cf. §6). Plus chaud que "Early Access", plus sobre que "Pioneers".

### 8.3 Tone of voice précis

Direction définie (cf. §5.3) mais pas encore formalisée en guidelines d'écriture (do / don't, vocabulaire, règles anti-slop).

---

## 9. Questions ouvertes / backlog

### Liées à la landing page
- **Logo et charte graphique** : pas encore définis. À faire après premières explorations Claude Design.
- **Light mode** : v2 envisagée.
- **Site évolutif** (blog, tutos, ressources) : à décider selon succès.
- **Mentions légales, CGV, politique de confidentialité** : obligatoires avec paiement — à produire avant mise en ligne.
- **Gestion post-achat** : flow d'onboarding, emails, support, mises à jour produit. Outil à choisir (ConvertKit, Beehiiv, Mailchimp, intégré à Lemon Squeezy ?).
- **Social proof au lancement** : pas de témoignages clients à la sortie. Comment positionner honnêtement sans tomber dans le bluff ? (Options : testimonials beta testers si recrutés, citations de pairs, rien + assumer, vidéo démo du créateur, etc.)
- **Screenshots / démo visuelle** du produit sur la landing — à produire.
- **Stratégie de lancement / diffusion** — hors scope landing, mais impacte son ton et son angle.

### Liées à l'offre Founding Members
- **Quota Founding Members** : nombre à trancher avant mise en ligne.
- **Mécanisme d'affichage scarcity** : compteur temps réel, badge, ou mention simple ? Intégration technique avec Lemon Squeezy à vérifier.

### Liées aux nouvelles briques (copy landing)
- **Activity Log sur la landing** : comment l'expliquer simplement ? (Mot-clé, micro-démo, screenshot d'un log rempli, ou laisser dans les détails du système ?)
- **Tool Map sur la landing** : même question. Risque de paraître technique si mal expliqué ("map des outils") — travailler la formulation grand-public.

### Liées au produit
- Structure interne de `templates/` : plat ou sous-structuré ?
- Initiative de promotion outputs → templates : Claude qui propose, ou utilisateur décide seul ?

Ces deux dernières ne bloquent pas la landing, mais sont à trancher sur le template lui-même.

---

## 10. Sources & références

### Internes
- `../cowork-os-test/` — **source de vérité du produit actuel**. Contient `claude.md` (system instructions), `about-me/` (briques persistantes : soul, about-me, writing-rules, tool-map, activity-log, memory), `docs/` (prompts de setup), `resources/`, `projects/`. À consulter pour comprendre exactement ce qu'est le produit et comment il s'installe.

### Externes
- **Page Notion — "Rémi — Extraction vente (Cowork OS) + tableau"** : https://www.notion.so/ne-templates/R-mi-Extraction-vente-Cowork-OS-tableau-9afccc6868a3438ea2ad9bf8a20ba10e
  → mine d'insights copywriting (pains, désirs, objections, phrases miroir).
- **Landing Simon — BetterCreating CoWork OS** : https://www.bettercreating.com/coworkos
  → référence structure + ton + différenciation concurrentielle.
- **Landing Rémi — Bootcamp Système IA (HyperFreelance)** : https://ai-bootcamp.hyperfreelance.co/
  → référence copywriting émotionnel (à filtrer, pas à imiter).
- **Annonce Claude Design — Anthropic Labs** : https://www.anthropic.com/news/claude-design-anthropic-labs
  → outil candidat pour la mise en forme visuelle (Phase 3/4).

---

*Fin du brief v2 — 20 avril 2026.*
