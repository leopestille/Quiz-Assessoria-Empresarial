# Quiz-Assessoria-Empresarial

# Quiz Assessoria Empresarial

Aplicação web de quiz para assessoria de finanças empresariais. O usuário responde a um questionário e recebe um diagnóstico com os resultados apresentados em gráficos, além da opção de exportar o relatório em PDF.

🔗 **Demo:** [quiz-assessoria-empresarial.vercel.app](https://quiz-assessoria-empresarial.vercel.app)

## Funcionalidades

- Questionário interativo dividido por etapas
- Cálculo automático do diagnóstico a partir das respostas
- Visualização dos resultados em gráficos (Chart.js)
- Exportação do relatório final em PDF (jsPDF)
- Integração com API via axios
- Navegação entre telas com React Router
- Layout responsivo

## Tecnologias

| Categoria | Ferramentas |
| --- | --- |
| Front-end | React 18, React Router DOM 6 |
| Build | Vite 4 |
| Gráficos | Chart.js, chartjs-plugin-datalabels |
| PDF | jsPDF, jspdf-autotable |
| HTTP | axios |
| Qualidade | ESLint (react, react-hooks, react-refresh) |
| Deploy | Vercel (+ Vercel Analytics) |

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 16+ e npm.

```bash
# clonar o repositório
git clone https://github.com/leopestille/Quiz-Assessoria-Empresarial.git
cd Quiz-Assessoria-Empresarial

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a build de produção na pasta `dist` |
| `npm run preview` | Serve localmente a build de produção |
| `npm run lint` | Roda o ESLint em `src` |

## Variáveis de ambiente

Caso a aplicação consuma uma API externa, crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://sua-api.com
```

No Vite, apenas variáveis com o prefixo `VITE_` ficam acessíveis no código, via `import.meta.env.VITE_API_URL`.

## Estrutura do projeto

```
├── public/            # Arquivos estáticos
├── src/               # Código-fonte da aplicação
├── index.html         # HTML de entrada
├── vite.config.js     # Configuração do Vite
├── vercel.json        # Configuração de deploy na Vercel
└── package.json
```

## Deploy

O projeto está hospedado na Vercel. Qualquer push na branch `main` dispara um novo deploy automaticamente. Para publicar manualmente:

```bash
npm run build
vercel --prod
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Envie a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Desenvolvido por [Leonardo Pestille](https://github.com/leopestille).
