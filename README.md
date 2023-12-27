# Criando e Consumindo uma Simples API com Node.js

![GitHub repo size](https://img.shields.io/github/repo-size/diogosflorencio/criacao-e-consumo-de-API?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/diogosflorencio/criacao-e-consumo-de-API?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/diogosflorencio/criacao-e-consumo-de-API?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/diogosflorencio/criacao-e-consumo-de-API?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/diogosflorencio/criacao-e-consumo-de-API?style=for-the-badge)

<img src="https://github.com/diogosflorencio/criacao-e-consumo-de-API-parte-2/assets/33941005/609ead28-8a1e-443e-b9d6-65ec0025271d" style="width:100%" alt="Exemplo de imagem">

> Explorando os conceitos de requisições GET e POST em uma API que armazena valores do usuário no backend e os exibe no frontend. A API é implementada e hospedada no Replit, enquanto o frontend faz uso da promise `fetch` para interagir com a API e manipular os dados

<br>

 **Código da API:**

```javascript
import http from "http";
import Database from "@replit/database";

const db = new Database();

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });

    if (req.method === "POST") {
      let body = "";
      req.on("data", (parte) => {
        body += parte;
      });

      req.on("end", () => {
        const bodyJSON = JSON.parse(body);
        if (!db["nomes"]) {
          db["nomes"] = [bodyJSON];
        } else {
          db["nomes"].push(bodyJSON);
        }
        res.end(JSON.stringify({ success: true }));
      });
    } else if (req.method === "GET") {
      const nomesData = db['nomes'] || {};
      res.end(JSON.stringify(nomesData));
      console.log(nomesData);
    }
  })
  .listen(8080, () => {
  });

```

---

Link: https://consumindo-api-2.diogoflorencio.repl.co

---

### Ajustes e Melhorias

O projeto ainda está em desenvolvimento, e as próximas atualizações serão focadas nas seguintes tarefas:

- [x] Criar API
- [x] Consumir com fetch no front
- [x] Criar front e hospedar tudo
- [x] Modificar o back para selecionar palavras de um array
- [x] Modificar o front para permitir a adição de novas palavras via API
- [x] Modificar a API para aceitar POST ou PUT
- [x] Finalizar o projeto

## 💻 Pré-requisitos

Não há pré-requisitos para começar. Basta clicar no [link do projeto](https://consumindo-api-2.diogoflorencio.repl.co/).

## 🚀 Instalando "Criando e Consumindo uma API com Node.js"

Para instalar o projeto, basta clonar o repositório:

```
git clone https://github.com/diogosflorencio/criacao-e-consumo-de-API-parte-2
```

## ☕ Usando Criando e Consumindo uma API com Node.js

Para utilizar o projeto, siga estas etapas:

```
Basta clicar em "GERAR"
```

## 📫 Contribuindo para "Criando e Consumindo uma API com Node.js"

Para contribuir com o projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto>/<local>`
5. Crie a solicitação de merge.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/diogosflorencio" title="Diogo Florencio">
        <img src="https://avatars.githubusercontent.com/u/33941005" width="100px;" alt="Foto do Diogo Florencio no GitHub"/><br>
        <sub>
          <b>Diogo Florencio</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<!--## 🤝 Colaboradores

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.-->

## 📝 Licença

Este projeto é livre e não possui uma licença específica.
