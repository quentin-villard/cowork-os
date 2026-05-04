# Cowork OS Landing Page — Copy v1

> **Status** : Phase 1 (Copy & Structure) complete, ready for Phase 2 (Design / Wireframes).
> **Date** : 2026-04-20
> **Language** : English (product language)
> **Tone charter** : see `.agents/product-marketing-context.md` — "Locked Decisions" section.

## Quick reference

- **H1 primary** : `Turn Claude into your personal coworker who thinks and works like you.`
- **H1 secondary** (kept for A/B or fallback) : `The system that turns Claude into your personal coworker.`
- **Primary CTA** : `Get Founding Member access · $47`
- **Offer** : $47 Founding Members (cap 100) → $97 once sold out
- **Sections** : 12 total

---

## Section 1 — Hero

**H1**
Turn Claude into your personal coworker who thinks and works like you.

**Subhero**
A ready-to-use Claude system that holds your voice, your projects, and your way of working. Set up in 15 minutes. Work with it instantly.

**CTA**
Get Founding Member access · $47

**Design notes**
- Dark mode, Instrument Serif for H1, Inter for subhero.

---

## Section 2 — Maker Trust Bar

Built by Quentin Villard · 40,000+ templates rated 4.9★ · Notion and AI builder

**Design notes**
- Bandeau horizontal discret sous le hero.
- Portrait circulaire (40-48px) à gauche + text droit, middle-dot separators.
- Alternative à tester : `★★★★★ 4.9/5` au lieu de `4.9★` compact.

---

## Section 3 — Problem Recognition

**Header**
Claude is smart. It just doesn't know you yet.

**Body**

Every new Claude session starts from zero. You re-explain your business, your voice, your current projects. By the time Claude catches up, you've already lost an hour.

Then Claude writes something. You can smell the AI from ten feet away. The output doesn't sound like you. You rewrite it anyway.

You've tried prompt libraries, custom GPTs, Notion stacks. Nothing stuck. Your ideas live here, your tools live there, and Claude never has the right context at the right moment.

**Transition** (italic ou faded, petit)
What's missing is a system that carries you into every Claude conversation.

**Design notes**
- Pas de visuel, texte seul (section émotionnelle).

---

## Section 4 — Simplicity

**Header**
Simple to install. Powerful to live with.

**Body**
Cowork OS is lean by design. A handful of files, the right structure, only what you'll actually use. Install it. Claude asks you a few questions. You're running.

**Visual — top-level file tree**

```
workspace/
├── claude.md
├── about-me/
├── resources/
├── projects/
└── quick-outputs/
```

**Design notes**
- Tree en monospace dans un encart léger. Optionnel "That's it." en légende.

---

## Section 5 — Product Reveal

**Section header**
See Cowork OS at work.

**Lead-in**
(aucun — "Three ways you stop being Claude's assistant" rejeté comme trop abstrait).

### Card 1

**Label** : Advanced Memory
**Headline** : Claude that already knows what you're working on. No more starting from zero.
**Subtitle** : *Bonus: smart loading, lower Claude usage.*

**Animation**
User type : *"What are we doing today?"*
Workflow panel anime : ✓ `about-me.md`, ✓ `projects/dupont-rebranding/brief.md`, ✓ `activity-log.md`
Claude répond : *"You're wrapping up the Dupont brand narrative. Yesterday's draft is in outputs/. Want me to check your Gmail, Google Calendar, and Notion workspace for today's tasks?"*

### Card 2

**Label** : Ready to send
**Headline** : It ships docs you can send, not drafts to rewrite.
**Subtitle** : *Newsletters. Quotes. Decks. All in your voice, with your brand.*

**Animation**
Carousel 3 scénarios (4-5s chacun, loop ~15s) :
1. Newsletter : `writing-rules.md` → `newsletter-template.md` → `your-author-photo.jpg` → newsletter preview avec photo
2. Quote : `writing-rules.md` → `quote-template.md` → `your-logo.svg` → devis pro avec logo
3. Deck : `writing-rules.md` → `deck-template.md` → `your-brand-guidelines.pdf` → slides stylées

Panneau `resources/assets/` persistant à droite, 3 thumbnails (your-author-photo, your-logo, your-brand-guidelines). Thumbnail en cours d'usage s'illumine.

Assets anonymisés (`your-X` naming).

### Card 3

**Label** : Connected to your tools
**Headline** : Works with the tools you already use. Notion, Drive, Gmail, and more.

**Animation** — Daily brief scenario
Claude (proactive) : *"Here's your daily brief for today:"*

```
📧  GMAIL — 3 emails need a response
    • Dupont : "Quick question on the draft..."
    • Studio XYZ : partnership inquiry
    • Newsletter subscriber question

📅  CALENDAR — 3 events today
    • 10:00  Dupont team call
    • 14:00  Deep work block
    • 16:00  Partnership strategy session

📝  NOTION — 5 tasks due today
    • Finalize brand narrative
    • Review partner proposal
    ...
```

Claude termine : *"Want me to prioritize these or start with one?"*

### Design (all 3 cards)
- **One-section-per-card** (full-width, ~80-90% viewport height).
- Alternance text/animation : Card 1 (text left / animation right), Card 2 (animation left / text right), Card 3 (text left / animation right).
- Animations style Claude Cowork UI : dark theme, streaming text, chat bubbles, file browser sidebar, tool badges.

---

## Section 6 — How It Works

**Label** : How it works
**Header** : Get your system running. Three steps, 15 minutes.

**Body** (3 colonnes desktop, stack mobile)

**1 — Install**
Drop Cowork OS into your Claude workspace.

**2 — Set up**
Claude asks a few questions. You answer. That's 15 minutes.

**3 — Start**
Open a conversation. Claude already knows you. And it gets sharper over time.

**Design notes**
- Mini-animations possibles par step (Phase 2, selon budget) :
  - Step 1 : file drop animation
  - Step 2 : mini-dialogue Claude ↔ user streaming
  - Step 3 : première conversation avec contexte chargé
- Simplicité d'abord, si budget serré skip les animations.

---

## Section 7 — What's in the Package

**Label** : What's included
**Header** : Everything you get on day one.

**Body**

1. **The Cowork OS template**
   A ready-to-install template for Claude Cowork.

2. **The installation guide**
   A step-by-step document with every prompt you'll need.

3. **The video tutorial**
   A full walkthrough, from install to your first working session.

**Bonus 1 — Voice-to-text setup**
My daily voice-to-text workflow. Free, local, no Whisperflow subscription needed.

**Bonus 2 — Daily brief automation**
Tutorial and prompt template for a scheduled daily brief. Pulls from your Notion, Calendar, and Gmail.

**Design notes**
- 3 items core + 2 bonus distingués visuellement (label "Founding Member bonus" éventuel).
- Bonus 1 : option design lock icon qui "unlock" au hover/purchase — à tester.
- **Pas de folder preview ici** (dropé pour IP + maintenance).

---

## Section 8 — Who It's For / Not For

**Header**
Is Cowork OS for you?

**For you if**
- You use Claude already, but you feel like it's not fully yours yet.
- You're a solopreneur, creator, consultant, or freelance running the show alone.
- You know your voice, your judgment, your perspective is what makes your work valuable.
- You want a system you can shape and make your own.
- You want every draft Claude produces to sound like you wrote it.

**Not for you if**
- You're waiting for AI to run your business while you sleep.
- You're after code, APIs, or developer tooling.
- You'd rather Claude did your thinking for you.
- You think your case is too special for any system to work.
- You won't spare 15 minutes to set it up.

**Design notes**
- Layout **stacked** (blocs empilés verticalement), pas 2 colonnes côte à côte.
- Green checks pour "for you", neutral X pour "not for you".

---

## Section 9 — About the Creator

**Label** : About the creator
**Header** : Hi, I'm Quentin.

**Portrait** : gauche (photo fournie par Quentin)

**Body**

Before Claude, I was using ChatGPT every day. I tried everything: custom GPTs, projects, long prompts. But I always ended up rewriting outputs, adding more context, reminding ChatGPT of things it had forgotten.

Three months ago, Claude Cowork came out.

I spent days on YouTube studying how creators were building their setups. Some were barely systems. Others were so complex I knew I'd never stick with them.

So I started building my own, draft after draft on my actual projects, until I had something that held up.

That's the Cowork OS you see on this page today.

The first time it really clicked was replying to a complex client email. Claude pulled together my voice, my context, my full Gmail history with the client. It drafted the reply in seconds, and it sounded exactly like me.

This isn't my first system. I've been building templates at Notion Everything for three years, and 40,000+ people use them today. Those systems are great for organizing information. Now with Claude, I finally have one that executes too.

Cowork OS follows my usual principles: lean, pedagogical, no hype. I've been using it every day.

If you want one of your own, it's right below.

Quentin

**Design notes**
- Layout asymétrique : photo gauche, texte droite.
- Pas de signature manuscrite pour v1.

---

## Section 10 — Pricing / Founding Members

**Label** : Pricing
**Header** : Become a Founding Member.

**Pricing display**
$47 today, for Founding Members.
$97 later.

**What you get**
- The Cowork OS template
- Installation guide
- Video tutorial
- Bonus 1: Voice-to-text setup
- Bonus 2: Daily brief automation

**And as a Founding Member, you also get**
- Free access to all future updates
- A direct feedback channel with me for 3 months

**CTA**
Get Founding Member access · $47

**Reassurance**
One-time payment. Secured checkout.

**Design notes**
- Pricing card visuellement démarquée.
- "$47" très grand (Instrument Serif).
- CTA accent corail `#CC785C`.
- **Progress bar live** : compteur Founding Members pris / 100 restants. Le prix passe à $97 au sell-out (100 spots atteints).
- Technical integration : Lemon Squeezy API ou custom backend pour le compteur live (à setup Phase 3).

---

## Section 11 — FAQ

**Label** : FAQ
**Header** : Before you buy.

**Format** : accordion (questions collapsibles)

**Q&As**

**Do I need Claude Pro or Max?**
Yes. Cowork OS runs inside Claude Cowork, which requires a Claude Pro or Max subscription. You'll need one before you install the template.

**I'm not technical. Can I really set this up?**
Yes. You download the template, paste a prompt into Claude, and answer the questions it asks. No terminal, no API keys, no code. If you can drag a file into a folder, you can install Cowork OS.

**Does it work with Notion, Drive, Gmail, and my other tools?**
Yes. Cowork OS includes a `tool-map.md` file where your external tools are mapped. Claude reads it only when needed, so it stays aware of your stack without crowding the context on every conversation.

**What if my work changes over time?**
The system learns from every correction. Your memory, your writing rules, and your project briefs evolve as you work. Your setup stays current without you having to rebuild it.

**What's the refund policy?**
Since Cowork OS is a digital product you download and own, I don't offer refunds after purchase. Once it's on your machine, access can't be taken back. Please review everything on this page carefully before you buy. If anything's unclear, email me and I'll answer directly.

**What if Anthropic updates Cowork?**
Cowork OS is a set of files that live in your workspace, not a plugin tied to Cowork's internals. If Anthropic ships changes, I update the template accordingly.

**Do I get updates?**
Yes. Everyone gets minor updates under the same version. Founding Members get free access to all future updates, including major versions.

---

## Section 12 — Final CTA

**Header**
Turn Claude into your personal coworker.

**Body**
Set up in 15 minutes. $47 for Founding Members, $97 later.

**CTA**
Get Founding Member access · $47

**Reassurance**
One-time payment. Secured checkout.

**Design notes**
- Header hero-size (Instrument Serif large).
- Air généreux avant/après la section.
- CTA visible et contrasté.
- Bookend narratif avec le H1 du Hero (reprend *"Turn Claude into your personal coworker"*).

---

## Design decisions — Global

### Palette
- Background : `#1C1917`
- Accent : `#CC785C` (corail)
- Text : `#F5F0EB`

### Typography
- Display / headers : **Instrument Serif**
- Body / UI : **Inter**

### Mode
- Dark mode first. Light mode v2 (TBD).

### Case
- Sentence case dans tous les headers (per charte tone).

### Animations
- Style Claude Cowork UI : dark theme, chat bubbles, streaming text, tool badges.
- Code-réalisables (React / Framer Motion ou CSS).
- Pas de vidéos — tout en animation code.

### Layouts
- **Hero** : centré, H1 prominent
- **Maker Trust Bar** : bandeau horizontal compact
- **Problem Recognition** : texte seul, aéré
- **Simplicity** : header + body + file tree minimal
- **Product Reveal** : one-section-per-card, alternance gauche/droite
- **How It Works** : 3 colonnes desktop
- **What's in the Package** : grid ou liste verticale
- **Who It's For / Not For** : stacked (blocs verticaux)
- **About the Creator** : asymétrique (photo + texte)
- **Pricing** : pricing card centrale, progress bar live
- **FAQ** : accordion
- **Final CTA** : centré, aéré

---

## Locked decisions (hors copy)

1. **Founding Members cap** : 100
2. **Price switch trigger** : sell-out (100 spots atteints → $97)
3. **Section 6 (Use Cases)** : dropped (redondance avec Card 2, peut revenir en v2 si pertinent)
4. **Section 9 portrait** : Quentin fournit la photo
5. **Section 9 signature manuscrite** : pas en v1
6. **Refund policy** : pas de refund (digital product), expliqué dans FAQ

---

## Phase 2 — Next steps

1. **Wireframes** via Claude Design (Anthropic Labs) — générer les premières explorations visuelles basées sur cette copy.
2. **Design animations** Product Reveal (3 cards) + How It Works mini-animations.
3. **Design progress bar** Pricing (compteur live, cap 100, switch au sell-out).
4. **Préparer asset portrait** Quentin.
5. **Iteration design** jusqu'à lock.

## Phase 3 — Implementation

1. Code Next.js (sur GitHub).
2. Intégration Lemon Squeezy (checkout + compteur live Founding Members).
3. Déploiement Vercel (cowork-os.com).
4. Mentions légales + CGV + politique de confidentialité (obligatoires avec paiement).
5. Flow post-achat (emails, delivery, support — outil à choisir).
