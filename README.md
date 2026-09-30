# Portfolio — Raul Domingos

Site estático (HTML/CSS/JS puro, sem build, sem dependências pagas) com toggle PT/EN em todos os textos.

## Estrutura
```
index.html
assets/
  css/style.css
  js/i18n.js     -> dicionário de traduções PT/EN
  js/main.js     -> interações (idioma, menu, scroll reveal, cursor)
```

## Ver localmente
Basta abrir o `index.html` direto no navegador (duplo clique) — não precisa de servidor nem instalação.

## Deploy gratuito (recomendado: Vercel)
1. Crie uma conta em https://vercel.com (login com GitHub).
2. Suba esta pasta para um repositório no GitHub (pode ser público ou privado).
3. No Vercel: "Add New Project" → selecione o repositório → Framework Preset: "Other" → Deploy.
4. Pronto: você recebe uma URL gratuita (ex: `raul-domingos.vercel.app`). Custo: **R$0**.
5. (Opcional) Compre um domínio próprio (~R$40–60/ano) e aponte no Vercel em Settings → Domains.

## Alternativas gratuitas
- **GitHub Pages**: Settings → Pages → Branch `main` → salvar. URL tipo `usuario.github.io/portfolio`.
- **Cloudflare Pages** / **Netlify**: mesmo fluxo do Vercel, "conectar repositório e ir".

## Editar conteúdo
- Textos em português e inglês ficam em `assets/js/i18n.js`, dentro dos objetos `pt` e `en`.
- Elementos com `data-i18n="chave.aninhada"` no `index.html` são atualizados automaticamente ao trocar o idioma.
- Cor de destaque, fontes e espaçamentos ficam nas variáveis no topo de `assets/css/style.css` (`:root`).

## Pendências sugeridas
- Adicionar vídeo/prints do ConnectTop em `projects.connecttop` quando disponíveis.
- Confirmar URL real do LinkedIn em `index.html` (atualmente `linkedin.com/in/raul-domingos`).
