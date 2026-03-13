# Pale Shelter — Official Website

Official website for the band **Pale Shelter**.

Built as a fast, lightweight React site designed to showcase music, photography, and show information while integrating with the Crossworld Creative ecosystem.

**Live Site**  
https://paleshelter.crossworldcreative.com

---

# Features

- Music streaming with play tracking
- Photo gallery with filtering and randomized layout
- Show listings and upcoming events
- Electronic Press Kit (EPK)
- Responsive mobile design
- Hosted media via cloud storage
- Deployed to a Linux VM using Nginx

---

# Tech Stack

**Frontend**

- React
- Vite
- JavaScript
- CSS

**Infrastructure**

- Nginx
- Linux VM
- Google Cloud Storage

**Backend (shared API)**

- Node.js
- Express

---

# Development

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/pale-shelter-site.git
cd pale-shelter-site
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file in the root of the project:

```
VITE_API_BASE_URL=https://api.crossworldcreative.com
```

This is used for tracking song plays and future backend integrations.

---

# Production Build

Build the production bundle:

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

---

# Deployment

The site is deployed to a Linux VM and served through **Nginx**.

Typical deployment flow:

```
git push → pull on VM → rebuild → Nginx serves /dist
```

---

# Future Improvements

- Show ticket integration
- Mailing list signup
- Embedded Spotify player
- Merch store
- Fan accounts and comments

---

# Part of Crossworld Creative

This project is part of the **Crossworld Creative** ecosystem, which includes:

- Squash — QA bug tracking platform
- WTWR — Weather-based clothing app
- Sanguine Archipelago — RPG project
- Crossworld Creative portfolio

---

# License

All music, artwork, and branding are property of Pale Shelter.

Site code may be used for educational purposes.

Site made by Romain Duffard
