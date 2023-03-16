# Código fonte do website da [Lab Ótica](https://labotica.com.br)

Esse website é feito com o framework [Astro](https://astro.build/) baseado em um
template.

## Como desenvolver

Para desenvolver, você precisa do Node.js instalado. A forma mais fácil de
configurar isso é instalando o [Volta](https://volta.sh/). Quando instalado, a
versão correta do Node.js será instalada automaticamente baseado no
`package.json`.

Após o Node.js está instalado, você pode instalar as dependências com:`

```shell
npm install
```

Depois disso, é só rodar o servidor de desenvolvimento com:

```shell
npm run dev
```

O site estará disponível em `localhost:3000`.

## Deploy do site

Qualquer mudança feita na branch `main` será automaticamente enviada para
deployment com nossa integração do Cloudflare pages. O site será atualizado
automaticamente e estará disponível em
[labotica.com.br](https://labotica.com.br).
