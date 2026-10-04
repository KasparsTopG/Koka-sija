# Koka sijas nestspēja (Electron + Vue 3 + three.js + Node.js/SQLite)

Palaišana (nepieciešams Node.js 20+):

    npm install
    npm run dev      # sāk serveri (3000), Vite (5173) un Electron

Ražošanas režīms: `npm start`

Testa licences (tabula `licenses`, fails server/beam.db):
- Test User / test@example.com  -> derīga
- Expired User / expired@example.com -> beigusies termiņš (programma aizvērsies)

Jaunu licenci pievieno ar SQL: INSERT INTO licenses (name,email,valid_until) VALUES ('Vārds','epasts@x.lv','2030-01-01');
