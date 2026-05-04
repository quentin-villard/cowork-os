# How It Works section update

_Started 2026-04-24 10:28 UTC_

---

## User

Tu peux mettre à jour la section How It Works avec les éléments aussi dessous 

--

Subtitle: A step-by-step guide walks you through everything. No guesswork, no tech skills.
Card 1 title: Download
Card 1 body: Download your system folder. Full architecture, setup guide, and walkthrough video included. Then select it as your working folder in Cowork.
Card 2 title: Set up your system
Card 2 body: Launch the onboarding prompt. Claude walks you through a series of questions to learn your work, your voice, your clients. You answer, it becomes yours.
Card 3 title: Start working
Card 3 body: Open a conversation. Claude already knows you. Add more context over time, connect your tools, and the system gets better with every session.

## Assistant

I'll update the How It Works section with your new content.

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

Now let me find where HOW is defined.

_[tool: grep]_

_[tool: read_file]_

Now I'll update both the HOW data and the subtitle/lead in the HowItWorks section.

_[tool: str_replace_edit]_

Now update the subtitle/lead in the howitworks section:

_[tool: str_replace_edit]_

_[tool: done]_

That's a browser extension error, not related to the code. The update is done.

Updated the How It Works section:
- New subtitle/lead copy
- Card 1: Download
- Card 2: Set up your system
- Card 3: Start working

_[tool: fork_verifier_agent]_

_[tool: done]_

The only error is from a browser extension (not the page itself), so it's safe to proceed.

_[tool: fork_verifier_agent]_

How It Works section updated with your new subtitle and three cards (Download / Set up your system / Start working).

## User

Verifier agent check completed

## Assistant

Verified ✓ — How It Works section updated with the new subtitle and three cards (Download, Set up your system, Start working).

## User

Tu peux mettre à jour les textes avec ça. 

Card 1

"Download your system folder. Setup guide and video included. Select it as your working folder in Cowork."

Card 2

"Launch the onboarding prompt. Claude asks about your work, your voice, your clients. You answer, it becomes yours."

Card 3

"Open a conversation. Claude already knows you. Add context, connect your tools, and it gets better every session."

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

Card copy updated ✓ (only error is a browser extension, not page-related).

## User

Apply comment

## Assistant

Let me investigate the SectionHead component to understand the alignment issue.

_[tool: grep]_

_[tool: read_file]_

The `<p>` has `maxWidth: 640` but no auto margin — so when `align="center"`, the text container is narrower than 780 but not centered within it. Let me fix this so the lead paragraph centers properly when align is center.

_[tool: str_replace_edit]_

Now the lead paragraph will be centered within the SectionHead container when `align="center"` — which applies to all the centered section subtitles.

_[tool: done]_

Fixed — the lead paragraph (subtitle) now centers properly under centered section titles. This applies to all the sections using `align="center"`.

