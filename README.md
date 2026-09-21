# Lucineia Gomes

Site da terapeuta de casais Lucineia Gomes, com apresentação da aula gratuita sobre autonomia emocional e a foto da terapeuta na abertura.

[Acessar o site](https://lucineia-autonomia-emocional.grupopasdiora.chatgpt.site)

## Tecnologias

TypeScript, React, HTML semântico, CSS responsivo e Vinext/Vite. A versão atual é preparada para execução em Cloudflare Workers através de Sites.

## Executar localmente

Requer Node.js 22.13 ou superior e npm.

```sh
npm run install:ci
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Gerar a versão de produção

```sh
npm run build
```

O resultado é gravado em `dist/`. Para visualizar a versão de produção localmente:

```sh
npm start
```

## Arquivos principais

- `app/page.tsx`: conteúdo e estrutura da página.
- `app/globals.css`: cores, tipografia e estilos responsivos.
- `app/layout.tsx`: idioma, título e descrição.
- `public/lucineia-gomes.jpeg`: foto da terapeuta.
- `public/favicon.svg`: ícone do site.
- `.openai/hosting.json`: identificação da publicação existente em Sites.

O botão final da aula usa um endereço de e-mail provisório. Substitua seu destino em `app/page.tsx` pelo link definitivo de acesso ou pelo contato confirmado antes de divulgar a campanha.

Este repositório contém o código-fonte. A inclusão dos arquivos no GitHub não ativa automaticamente uma publicação no GitHub Pages.
