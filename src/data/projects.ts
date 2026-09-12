export interface Project {
  name: string;
  meta: string;
  href: string;
  desc: string;
  status?: string;
}

// Maintained (or at least not archived) projects — shown on home and /projects.
export const projects: Project[] = [
  {
    name: 'unraid-passkey',
    meta: 'PHP · 2026',
    href: 'https://github.com/fhirschmann/unraid-passkey',
    desc: "Adds passwordless passkey (WebAuthn) login to the Unraid web GUI — self-contained in Unraid's own nginx/PHP stack, with no cloud service, Docker container, or OIDC provider involved.",
  },
  {
    name: 'leoino',
    meta: 'C++ · 2026',
    href: 'https://github.com/fhirschmann/leoino',
    desc: 'An ESP32 music player driven entirely by RFID tags — tap a card and a playlist starts, no screen or buttons needed.',
  },
  {
    name: 'clozegen',
    meta: 'Java · 2012–2014',
    status: 'unmaintained',
    href: 'https://github.com/fhirschmann/clozegen',
    desc: 'Generates cloze (fill-in-the-blank) exercises for language learners, using Apache UIMA to analyze real text and decide which words to blank out.',
  },
];

// Repositories archived (read-only) on GitHub — listed in their own section on /projects.
export const archived: Project[] = [
  {
    name: 'knitron',
    meta: 'R · 2014–2016',
    href: 'https://github.com/fhirschmann/knitron',
    desc: "Lets knitr reports run Python: it executes IPython code chunks and embeds the resulting matplotlib figures right inside R's dynamic-report workflow.",
  },
  {
    name: 'rdp',
    meta: 'Python · 2014–2016',
    href: 'https://github.com/fhirschmann/rdp',
    desc: 'An implementation of the Ramer–Douglas–Peucker algorithm — simplifies a curve by dropping points that barely change its shape, handy for thinning GPS tracks and polylines.',
  },
  {
    name: 'Flask-FlatPages-Knitr',
    meta: 'Python · 2014–2015',
    href: 'https://github.com/fhirschmann/Flask-FlatPages-Knitr',
    desc: 'A Flask-FlatPages preprocessor that runs each page through knitr first, so embedded code chunks are executed and their output baked in before rendering.',
  },
  {
    name: 'Flask-FlatPages-Pandoc',
    meta: 'Python · 2014–2015',
    href: 'https://github.com/fhirschmann/Flask-FlatPages-Pandoc',
    desc: 'An HTML renderer for Flask-FlatPages backed by pandoc, letting flat pages be authored in Markdown, reStructuredText, or anything else pandoc can read.',
  },
  {
    name: 'sleeptimer',
    meta: 'C · 2013',
    href: 'https://github.com/fhirschmann/sleeptimer',
    desc: 'A countdown shutdown timer with an on-screen display, armed from a single infrared-remote or keyboard key — LIRC-aware, so you can trigger it from the couch.',
  },
  {
    name: 'vohttp',
    meta: 'Lua · 2013',
    href: 'https://github.com/fhirschmann/vohttp',
    desc: "An HTTP library and mini web framework for the game Vendetta Online, serving dynamic web pages over the game's in-client TCP sockets.",
  },
  {
    name: 'penchy',
    meta: 'Python · 2011–2012',
    href: 'https://github.com/fhirschmann/penchy',
    desc: 'Automates benchmarking of Java virtual machines — coordinates the runs and funnels their results through a configurable processing pipeline.',
  },
];
