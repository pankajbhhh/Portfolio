# Pankaj Kumar Bharti — Java Developer Portfolio

React + Vite, plain CSS (no Tailwind), no backend. Content is taken from the resume.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Edit your content — one file
`src/data/portfolioData.js` holds everything: profile, projects, experience,
skills, coding profiles, certifications, education.

### Things to finish
1. **GitHub username** — the resume link was `github.com/REPLACE-ME`. Set
   `GITHUB_USERNAME` at the top of `portfolioData.js`; the GitHub icon (hero,
   footer) and the ERP repo link then appear automatically.
2. **Photo (optional)** — put `photo.jpg` in `/public` and set `photo: '/photo.jpg'`.
3. **Striver A2Z link (optional)** — add a `url` to that row in `codingProfiles`.
4. **Resume** — `public/Pankaj_Kumar_Bharti_Resume.pdf` is served by the
   Resume / Download Resume buttons. Replace the file to update it.

## Notes
- Skill, platform and social logos come from `simple-icons`; items without an
  official logo (JPA, WebSocket, VS Code, LinkedIn, …) use small custom icons
  in `src/data/techIcons.js`. Skill names in the data must match keys there.
- Contact form opens the visitor's email app with the message pre-filled
  (`mailto:`), so messages genuinely reach your inbox without a backend.
- Responsive: laptop (1180), tablet landscape (1024), tablet portrait (900),
  phone (640) and small phone (420).
