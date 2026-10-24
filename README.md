# CV Profile Templates

This folder contains three visual templates for presenting a CV as a simple web page. Choose one, replace the example prompts with your own details, and open it in a web browser.

## Start here

1. Make a copy of this whole folder first. That gives you a clean original to return to.
2. Open `index.html` in a web browser to see the three designs.
3. Pick one:
   - `glyph-os/index.html` — full profile with experience, skills, projects, education, and contact details.
   - `device-dossier/index.html` — profile arranged in clickable panels.
   - `career-signal/index.html` — a scrolling career story with expandable roles.
4. Open the chosen `index.html` file in a text editor. A code editor such as Visual Studio Code is helpful, but a plain text editor works too.
5. Use the editor’s Find feature (`Ctrl+F` on Windows/Linux or `Cmd+F` on Mac) to search for `[`. Replace each bracketed prompt with your own information, including the square brackets. Save the file, then refresh the browser page.

## What to edit

### Profile

Replace `[FULL NAME]` or `[YOUR NAME]`, `[TARGET ROLE]`, `[CITY, COUNTRY]`, `[AVAILABILITY]`, and similar prompts with the profile owner’s details. The initials `YN` are decorative placeholders; change them to the person’s initials too.

### About me

Look for `[ABOUT ME: ...]`. Write a short introduction of two or three sentences. Mention relevant experience, strengths, and the kind of work the person wants to do. Keep it truthful and specific.

### Experience

Fill in the dates, job title, company, location, and a few achievements for each role. Start achievement descriptions with an action, then explain the result. For more roles, copy the whole role block and paste it nearby:

- In Glyph OS, copy one `<article class="g-job"> ... </article>` block.
- In Device Dossier, copy the role’s `<button class="record"> ... </button>` and the `<div class="record-detail"> ... </div>` immediately after it.
- In Career Signal, copy one `<article class="s-stop"> ... </article>` block.

If copying code feels unfamiliar, keep the number of roles already shown and replace those prompts instead.

### Skills category

Replace `[SKILLS CATEGORY: ...]` or `[CATEGORY]` with a useful group name, such as Technical Skills, Communication, Leadership, or Tools. Add only skills the person can discuss with a real example. Change the `[Skill / proficiency]` prompts to the actual skills and, where useful, a level of proficiency.

### Education and contact

Add degrees, certificates, schools, languages, and language levels where they apply. Replace sample email and profile links with the person’s real links. For a link, update both the visible text and its `href` value. For example, change `href="mailto:your.email@example.com"` to the person’s email address. Remove any contact method they do not want to share.

## Things to leave alone at first

- `styles.css` controls colors, spacing, and layout.
- `script.js` controls clickable panels, theme buttons, and animations.
- `prototypes.css` styles the template selection page.

These files have been formatted to be easier to read, but you do not need to change them to fill in a profile. The comments inside each HTML file point out the main areas to edit.

## PDF worksheet

`glyph-os/curriculum.pdf` is a blank one-page CV worksheet. It is separate from the web templates, so changing the web page does not automatically change the PDF. Edit or print the worksheet separately if you want a PDF CV.

## Open and share

After saving your edits, open the chosen HTML file in a browser and review every section. The links between sections work locally. To publish the profile online, upload the chosen template folder and its files together to a web host; keep its `styles.css` and `script.js` beside the HTML file.
