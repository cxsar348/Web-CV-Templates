# Web CV Templates

A collection of three editable, Nothing-inspired web CV templates built with plain HTML, CSS, and JavaScript. Choose the layout that fits your professional story, replace the sample prompts with your information, and open it in a browser.

The design direction is minimal and monochrome, with strong typography, structured layouts, subtle interface details, and a focus on readability.

## Templates

| Template | Layout | Best for |
| --- | --- | --- |
| **[Glyph OS](glyph-os/index.html)** | A full profile with summary, experience, skills, projects, education, and contact sections. | A comprehensive professional profile or portfolio. |
| **[Device Dossier](device-dossier/index.html)** | A modular profile organized into selectable panels and expandable work records. | A compact profile with information grouped into sections. |
| **[Career Signal](career-signal/index.html)** | A scroll-led career story with expandable roles, a progress indicator, skills, education, and contact details. | Presenting career progression as a visual narrative. |

Start at **[the template gallery](index.html)** to preview and choose a design.

## Features

- Three distinct CV layouts in one repository.
- Plain HTML, CSS, and JavaScript — no framework, package installation, or build step required.
- Dark and light theme toggles on the individual templates.
- Interactive sections, including expandable work experience and selectable panels where applicable.
- Responsive layouts for different screen sizes.
- Bracketed prompts and inline comments to guide customization.
- A separate blank, one-page CV worksheet in PDF format at `glyph-os/curriculum.pdf`.

## Quick start

1. Download or clone this repository.
2. Open the root `index.html` file in a browser.
3. Select **Glyph OS**, **Device Dossier**, or **Career Signal**.
4. Open that template's `index.html` in a text editor.
5. Replace the bracketed prompts (for example, `[FULL NAME]`, `[JOB TITLE]`, and `[SKILLS CATEGORY]`) with your own details.
6. Save the file and refresh the browser to review your changes.

No local server is required for basic editing and previewing. A code editor such as Visual Studio Code can make editing easier, but any plain-text editor will work.

## Customize your profile

### Personal details and summary

Search the chosen HTML file for bracketed text. Replace each prompt with accurate information about the profile owner. Write a concise introduction that explains their professional focus, relevant strengths, and the value they bring. Remove optional sections or details that do not apply.

### Work experience

Add dates, role titles, company names, locations, responsibilities, and achievements. Prefer clear action statements and specific outcomes; include numbers only when they are accurate.

To add more roles:

- **Glyph OS:** duplicate an `<article class="g-job">...</article>` block.
- **Device Dossier:** duplicate a `<button class="record">...</button>` and its corresponding `<div class="record-detail">...</div>`.
- **Career Signal:** duplicate an `<article class="s-stop">...</article>` block.

### Skills, education, projects, and contact

Use relevant skill categories and include tools or proficiency levels only when useful. Add education, certifications, languages, and projects that support the professional profile.

When changing a contact link, update both the visible text and its destination (the `href` attribute). For example, use `mailto:you@example.com` for an email link. Remove any personal contact details you do not want to publish.

### Visual styling and interactions

- Each template's `styles.css` controls its colors, typography, spacing, and layout.
- Each template's `script.js` handles its interactive behavior.
- The root `prototypes.css` styles the template gallery.

You can personalize the visual style by editing these files, but they are not required for replacing the profile prompts.

## Publish online

To host a template, publish the selected template folder and its files together using a static web host such as GitHub Pages or Cloudflare Pages. Keep its `index.html`, `styles.css`, and `script.js` in their existing relative locations so the page's assets continue to load.

Before publishing, test the page on desktop and mobile, check every link, and remove any prompts or sample contact details.

## Project structure

```text
.
├── index.html                 # Gallery for choosing a template
├── prototypes.css             # Gallery styles
├── glyph-os/
│   ├── index.html             # Full professional profile
│   ├── styles.css
│   ├── script.js
│   └── curriculum.pdf          # Blank CV worksheet
├── device-dossier/
│   ├── index.html             # Modular profile
│   ├── styles.css
│   └── script.js
└── career-signal/
    ├── index.html             # Scroll-led career story
    ├── styles.css
    └── script.js
```

## Design note

The templates take visual inspiration from Nothing's minimalist design language. This is an independent project and is not affiliated with, sponsored by, or endorsed by Nothing.

## License

No license has been specified yet. Until a license is added, do not assume that the repository grants permission to redistribute or reuse the code.
