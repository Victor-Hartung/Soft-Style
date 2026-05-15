# Maison Lumière

Landing page profissional para a Maison Lumière — uma casa de moda brasileira ultra-premium com identidade visual sofisticada, animações elaboradas e paleta bege/off-white.

## Run & Operate

- `pnpm --filter @workspace/maison-landing run dev` — rodar a landing page em dev
- `pnpm run typecheck` — typecheck completo em todos os pacotes

## Stack

- pnpm workspaces, Node.js 22, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Animações: Framer Motion
- Roteamento: Wouter
- UI: shadcn/ui + Radix UI

## Where things live

- `artifacts/maison-landing/` — landing page da Maison Lumière
- `artifacts/maison-landing/src/pages/home.tsx` — página principal (todas as seções)
- `artifacts/maison-landing/src/index.css` — tema e variáveis de cor
- `artifacts/maison-landing/public/images/` — imagens geradas por IA
- `artifacts/maison-landing/vite.cloudflare.config.ts` — config Vite para build no Cloudflare

## Cloudflare Pages — Deploy via GitHub

### Configurações no painel do Cloudflare Pages

> **Importante:** expanda a seção **"Advanced"** ao configurar o projeto para ver o campo "Install command".

| Campo | Valor |
|---|---|
| **Framework preset** | None |
| **Install command** | `pnpm install --no-frozen-lockfile` |
| **Build command** | `pnpm --filter @workspace/maison-landing run build:cf` |
| **Build output directory** | `artifacts/maison-landing/dist` |
| **Root directory** | `/` (deixar vazio / padrão) |

### Variáveis de ambiente necessárias no Cloudflare

| Variável | Valor |
|---|---|
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10.11.1` |

### Passo a passo

1. Faça push do repositório para o GitHub
2. Acesse [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**
3. Selecione o repositório
4. Clique em **"Advanced"** para expandir as opções extras
5. Preencha **Install command**, **Build command** e **Build output directory** conforme a tabela acima
6. Adicione as variáveis de ambiente `NODE_VERSION=22` e `PNPM_VERSION=10.11.1`
7. Clique em **Save and Deploy**

Se o projeto já estava criado, vá em **Settings → Builds & deployments → Build configuration → Edit** e atualize os campos.

### Por que o erro acontece

O Cloudflare Pages executa `pnpm install --frozen-lockfile` automaticamente, mas a versão do pnpm deles (10.11.1) interpreta as overrides do `pnpm-workspace.yaml` de forma diferente da versão local (10.26.1), causando mismatch. Definir `--no-frozen-lockfile` no Install command resolve isso definitivamente.

### Observações importantes

- O arquivo `public/_redirects` já está configurado para SPA routing (`/* /index.html 200`), garantindo que navegação direta por URL funcione corretamente
- O `vite.cloudflare.config.ts` é separado do config do Replit — não usa `PORT` nem `BASE_PATH`, usa `base: "/"` e gera output em `dist/`
- O Cloudflare Pages detecta automaticamente o `.node-version` na pasta do artifact, mas adicionar `NODE_VERSION=22` como env var garante consistência

## Architecture decisions

- Vite config dupla: `vite.config.ts` (Replit, com PORT/BASE_PATH) e `vite.cloudflare.config.ts` (Cloudflare, sem variáveis de ambiente especiais)
- Imagens servidas como arquivos estáticos em `public/images/` — copiadas automaticamente para `dist/` no build
- SPA routing garantido via `_redirects` no Cloudflare Pages

## Product

Landing page institucional da Maison Lumière com 7 seções: hero, filosofia, coleções (Éclat e Ombra), materiais, serviços, contato. Identidade visual premium com paleta bege/off-white/ouro.

## User preferences

- Paleta: bege, off-white, carvão profundo, ouro antigo — sem cores vibrantes
- Tipografia: Playfair Display (serif) + DM Sans (sans-serif)
- Animações Framer Motion em todas as seções
- Sem emojis no UI
- Conteúdo em pt-BR com toques em francês

## Gotchas

- Nunca rodar `pnpm dev` na raiz do workspace — usar `restart_workflow`
- Para build local de teste: `pnpm --filter @workspace/maison-landing run build:cf` (não usa PORT/BASE_PATH)
- O `vite.config.ts` original lança erro se `PORT` ou `BASE_PATH` não estiverem definidos — é intencional para o ambiente Replit

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
