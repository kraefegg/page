# Kraefegg M.O.

Site institucional (React 19 + Vite 6 + Tailwind 4). Roteamento por hash — funciona em GitHub Pages sem configuração extra.

## Rodar localmente
```bash
npm install
npm run dev          # front-end apenas (modo estático)
npm run dev:server   # front-end + API Express (vagas, avaliação, marketplace)
```

## Publicar no GitHub Pages
1. Suba o repositório (branch `main`).
2. *Settings → Pages → Source: GitHub Actions*.
3. O workflow `.github/workflows/deploy.yml` faz lint + build + deploy a cada push.

## Modo estático vs. backend
GitHub Pages é estático: vagas usam dados embarcados; candidatura, banco de talentos e LGPD abrem o e-mail corporativo. Para ativar a API completa, hospede `server.ts` (`npm run build:server && npm start`) e defina `VITE_API_URL=https://sua-api` no build.

## Variáveis (`.env.example`)
`VITE_API_URL` (opcional), `RECRUITMENT_EMAIL`, `APP_URL`, `RECRUITMENT_DATA_RETENTION_DAYS` (somente backend).
