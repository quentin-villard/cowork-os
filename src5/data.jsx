// v3 data. Benefit-led, aligned with copy-v1 brief but keeping v2 chat-driven storytelling.
// No technical vocabulary outside FAQ. No refund language anywhere.


const TRUST_ITEMS = [
  "Built by Quentin Villard",
  "41,000+ templates rated 4.9★",
  "Notion and AI builder",
];

const PAINS_TITLE = {
  main: ["You use AI every day. But it feels like it ", <span key="p" style={{color:'var(--ink-3)', fontStyle:'italic'}}>never quite gets you.</span>],
  lead: "And you end up typing the same thing again and again.",
};
const PAINS = [
  "Why do I have to re-explain my business every single time?",
  "You keep mixing up my clients and my projects.",
  "This doesn't sound like me at all. Rewrite it.",
  "Where did you put the brief I sent you last week?",
];
const PAINS_CLOSER = "You don't need better prompts. You need a real system.";

// Top-level workspace view. Presented as a simple workspace,
// not as file-system jargon. Used in Simplicity section A.
const SIMPLICITY_TREE = [
  { name: "Your workspace",    note: "the root of your coworker" },
  { name: "About you",         note: "who you are, how you write" },
  { name: "Your projects",     note: "one space per client" },
  { name: "Your resources",    note: "assets, templates, brand" },
  { name: "Your outputs",      note: "finished work, ready to ship" },
];

// Three headline benefits. Voice section is removed — "Ready to send" carries the voice message.
const BENEFITS = [
  {
    id: "memory",
    label: "Advanced memory",
    headline: <>Claude <em className="ital">actually knows you.</em> And keeps track.</>,
    sub: "Who you are, how you work, what you're working on, what you did last week — all remembered between sessions. No re-briefing, no starting from zero.",
    accent: "orange",
    demo: {
      user: "What are we doing today?",
      searched: "Loaded context from 3 sources",
      claude: [
        "You're wrapping up the Dupont brand narrative — yesterday's draft is ready for review.",
        "Marie sent a reply last night, still open. Friday's proposal for Harlan isn't started yet.",
        "Want to finish Dupont first, or clear Marie's reply?"
      ],
    },
    proofKind: "memory",
  },
  {
    id: "ready",
    label: "Your voice",
    headline: <>Claude <em className="ital">writes in your voice.</em> With your brand.</>,
    sub: "Your tone, your rhythm, your words, your brand rules — captured once. Every draft reads like you wrote it, on-brand and ready to send.",
    accent: "sage",
    demo: {
      user: "Put together a one-pager for Harlan",
      files: [
        { action: "Read",   path: "about-me/writing-rules.md" },
        { action: "Read",   path: "resources/brand-kit.md" },
        { action: "Create", path: "projects/harlan-proposal/one-pager.pdf" },
      ],
      // Badge label shown above the timeline.
      badge: "Used 2 tools, created a file",
      // Reply paragraphs — nested arrays of strings + {chip} nodes, so we
      // can render file references as code-chips (same treatment as Memory).
      reply: [
        ["This is a standard one-pager."],
        [
          "Pulled your ", { chip: "writing-rules.md" }, ". Applied your ",
          { chip: "brand-kit.md" }, ": colors, typography. Used your ",
          { chip: "one-pager.md" }, " template.",
        ],
        ["Here's the draft — quick look below."],
      ],
      file: {
        name: "one-pager.pdf",
        subtitle: "Document · PDF",
      },
    },
    proofKind: "voice",
  },
  {
    id: "tools",
    label: "Your tools",
    headline: <>Claude <em className="ital">works with your tools.</em> And knows how.</>,
    sub: "Your Notion, your Drive, your Gmail — mapped once. Claude pulls the right doc, the right thread, the right page, without you re-explaining your stack.",
    accent: "straw",
    demo: {
      user: "Help me prep my Dupont call tomorrow",
      badge: "Read a file, used 3 integrations",
      integrations: [
        { tool: "md",     action: "Read",   target: "about-me/tool-map.md" },
        { tool: "notion", action: "Search", target: "Notion database" },
        { tool: "gmail",  action: "Search", target: "for email threads" },
        { tool: "drive",  action: "Search", target: "for Drive files" },
      ],
      reply: [
        ["Here's what I pulled for tomorrow's call:"],
        { bullet: true, label: "Notion", text: "your Dupont notes" },
        { bullet: true, label: "Gmail",  text: "your last email to them" },
        { bullet: true, label: "Drive",  text: "the rebrand deck you delivered" },
        ["I have the full context. Want me to draft talking points?"],
      ],
    },
    proofKind: "tools",
  },
];

const MEET = {
  // Inline folder icon appears after "Cowork OS" in the title.
  titleParts: {
    lead: "Meet Cowork OS",
    tail: ", the Claude system that changes everything.",
  },
  leadA: "A ready-to-use Claude setup that holds your voice, your projects, and your way of working. Simple to install. Powerful to live with.",
  leadB: "A ready-to-use Claude setup that holds your voice, your projects, and your way of working.",
  leadC: "A Claude folder that already knows your voice, your clients, and your way of working. Simple to install.",
};

const DAY = [
  {
    time: "Monday, 9:04 AM",
    title: "You open Claude. It already knows.",
    user: "Morning. What's on my plate this week?",
    claude: [
      "Welcome back, Sarah.",
      "You've got the Acme rebrand kickoff on Wednesday, Harlan's proposal due Friday, and three warm leads waiting on a follow-up.",
      "I've drafted Monday's email replies for you to review. Where do you want to start?"
    ],
    color: "orange",
  },
  {
    time: "Tuesday, 11:22 AM",
    title: "You write. It sounds like you.",
    user: "Draft the follow-up to Harlan — short, direct, no fluff.",
    claude: [
      "Here — three lines, the way you usually open.",
      "« Saw you hired two more writers. Congrats. Quick one: we ship voice kits in exactly that moment. Worth a fifteen on Thursday? »",
      "Want me to check the calendar and suggest a time?"
    ],
    color: "sage",
  },
  {
    time: "Wednesday, 3:40 PM",
    title: "You reopen the Acme project. No re-briefing.",
    user: "Where did we land on the Acme tone last time?",
    claude: [
      "From our last session: warmer than their current site, not sugary. Three anchors — crafted, grown-up, no jargon.",
      "You wanted examples from their Q3 newsletter pulled for the kickoff deck. They're in the brief already.",
      "Ready to build the deck or keep refining the tone?"
    ],
    color: "straw",
  },
  {
    time: "Friday, 5:12 PM",
    title: "You close the laptop. It takes notes for Monday.",
    user: "Wrapping up. Anything I should flag for next week?",
    claude: [
      "Sent Harlan's proposal — waiting on his reply (expected Monday).",
      "Acme deck v1 sitting at 80%; Sarah asked for two more tone examples.",
      "Three new leads came in Thursday — none followed up yet. I've queued a draft.",
      "Have a good weekend."
    ],
    color: "sky",
  },
];

const VOICE = {
  prompt: "Write a cold email to a prospect about our new service.",
  generic: [
    "Hi [Name],",
    "I hope this email finds you well! I wanted to reach out because I believe our cutting-edge new service could truly revolutionize the way you approach your business in today's ever-evolving landscape.",
    "Our team is passionate about helping businesses like yours unlock their full potential through tailored, innovative solutions.",
    "Would you be open to a quick 15-minute call to explore how we can add value to your operations?",
    "Best regards,"
  ],
  yours: [
    "Saw you just hired two writers — congrats.",
    "Quick one: we ship brand-voice starter kits for teams in exactly that moment. A week of work, flat fee, your new hires stop sounding like the last agency you fired.",
    "Worth a fifteen-minute call next week?",
  ]
};

const HOW = [
  {
    n: "1",
    title: "Download",
    body: "Download your system folder. Setup guide and video included. Select it as your working folder in Cowork.",
  },
  {
    n: "2",
    title: "Set up your system",
    body: "Launch the onboarding prompt. Claude asks about your work, your voice, your clients. You answer, it becomes yours.",
  },
  {
    n: "3",
    title: "Start working",
    body: "Open a conversation. Claude already knows you. Add context, connect your tools, and it gets better every session.",
  },
];

const INSIDE_CORE = [
  {
    t: "The Cowork OS template",
    d: "A ready-to-install system for Claude Cowork. Drop in, set up, run.",
  },
  {
    t: "The installation guide",
    d: "A step-by-step document with every prompt you'll need. No guessing.",
  },
  {
    t: "The video tutorial",
    d: "A full walkthrough — from install to your first working session.",
  },
];
const INSIDE_BONUS = [
  {
    t: "Voice-to-text setup",
    d: "My daily voice-to-text workflow. Free, local, no subscription.",
  },
  {
    t: "Daily brief automation",
    d: "A scheduled daily brief. Pulls from your Notion, Calendar, and Gmail.",
  },
];

const FOR_YOU = [
  "You use Claude or ChatGPT, but output never quite lands.",
  "You want an AI that actually knows you, not one you brief daily.",
  "You wear every hat and need AI that pulls real weight.",
  "You know AI could do more for you. You haven't cracked it.",
  "You want a simple system you can shape and make your own.",
];
const NOT_FOR_YOU = [
  "You're waiting for AI to run your business while you sleep.",
  "You want autonomous agents that ship work without your input.",
  "You think your case is too special for any system to work.",
  "You work in a big corp or regulated field with locked-down AI.",
  "You won't spare 15 minutes to set your system up.",
];

const FOUNDER_PARAGRAPHS = [
  "Before Claude, I was using ChatGPT every day.",
  "I tried everything: custom GPTs, projects, long prompts. But I always ended up rewriting outputs, adding more context, reminding ChatGPT of things it had forgotten.",
  "Then, Claude Cowork came out.",
  "I spent months studying how creators were building their setups. Some were barely systems. Others were way too complex. So I started building my own, draft after draft on my actual projects, until I had something that held up.",
  "The first time it really clicked: replying to a complex client email. Claude pulled together my voice, my context, my Gmail history with the client, and drafted the reply in seconds. It read exactly like I wrote it. I didn't.",
  "Well, that's Cowork OS.",
  "And it's not my first shot. I've been building templates for Notion for 3 years (41,000+ people use them today). Those systems are great for organization.",
  "Now with Cowork OS and Claude, I have one that executes too.",
];

const FAQS = [
  {
    q: "Do I need Claude Pro or Max?",
    a: "Yes. Cowork OS runs inside Claude Cowork, which requires a Claude Pro or Max subscription from Anthropic. You'll need one before you install the template."
  },
  {
    q: "I'm not technical. Can I really set this up?",
    a: "Yes. You download the template, paste a prompt into Claude, and answer the questions it asks. No terminal, no API keys, no code. If you can drag a file into a folder, you can install Cowork OS."
  },
  {
    q: "Does it work with Notion, Drive, Gmail, and my other tools?",
    a: "Yes. Cowork OS includes a tool map where your external tools are listed. Claude reads it only when needed, so it stays aware of your stack without crowding every conversation."
  },
  {
    q: "What if my work changes over time?",
    a: "The system learns from every correction. Your memory, your writing rules, and your project briefs evolve as you work. Your setup stays current without you rebuilding it."
  },
  {
    q: "What's the refund policy?",
    a: "Since Cowork OS is a digital product you download and own, I don't offer refunds after purchase. Once it's on your machine, access can't be taken back. Please review everything on this page carefully before you buy. If anything's unclear, email me and I'll answer directly."
  },
  {
    q: "What if Anthropic updates Cowork?",
    a: "Cowork OS is a set of files that live in your workspace, not a plugin tied to Cowork's internals. If Anthropic ships changes, I update the template accordingly."
  },
  {
    q: "Do I get updates?",
    a: "Yes. Every buyer gets free access to all future updates, including major versions."
  },
  // Added from v2
  {
    q: "Does it work with Claude Code too?",
    a: "Cowork OS is built for Claude Cowork. The tutorials and setup guide are written for it. If you prefer Claude Code, the file structure works the same way — but you'll be on your own for the configuration steps."
  },
  {
    q: "Does it work in other languages?",
    a: "Yes. Claude responds in whatever language you write in. The template, setup guide, and tutorials are in English — but nothing stops you from running the system in French, Spanish, or any other language."
  },
];

Object.assign(window, {
  TRUST_ITEMS, PAINS, PAINS_TITLE, PAINS_CLOSER, SIMPLICITY_TREE,
  BENEFITS, MEET, VOICE, HOW, INSIDE_CORE, INSIDE_BONUS,
  FOR_YOU, NOT_FOR_YOU, FOUNDER_PARAGRAPHS, FAQS,
});
