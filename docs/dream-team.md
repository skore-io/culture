## Dream Team

Nossa página com todas as pessoas de todas as
áreas do LXM: https://skore-io.github.io/culture/dream-team/index.html

Como parte do onboarding de um novo colaborador, nós usamos essa página do dream team para que a pessoa faça seu `first commit`. Assim ela já testa seu acesso ao GitHub, abre seu primeiro Pull Request e conta um pouco de si mesma como forma de apresentação 🙂

### Adicionando seu perfil

Se você é uma pessoa técnica, siga os próximos passos para adicionar seu perfil.

Caso não seja, peça orientação para o Renato Augusto (rames@uoledtech.com).

🚨 Você precisa ter acesso a organização `skore-io` no GitHub. Caso ainda não tenha, fale com o seu Engineering Manager.

1. Clone o projeto na sua máquina

```bash
git clone git@github.com:skore-io/culture.git
```

2. Abra uma nova branch

```bash
git checkout -b docs/{SEU_NOME}-profile
```

3. Procure pelo arquivo que representa sua área em `/dream-team`

```
📂 dream-team
┣ 📃 team-data.js
┣ 📃 team-dev.js
┣ 📃 team-operation.js
┣ 📃 team-product.js
```

4. Abra o arquivo e ao final dele adicione seus dados

```js
{
  name: 'Et Bilu',
  role: devRoles.full_stack,
  description: 'Lorem Ipsum...',
  social: 'URL do linkedin ou github',
  avatar: 'URL de uma imagem'
}
```

Caso queira adicionar idade ou tempo em que atua na área, use `getTotalYears('dd/mm/yyyy')`

```js
{
  description: "Oi, eu tenho getTotalYears('dd/mm/yyyy') anos e gosto de yada yada...",
}
```

5. Siga os passos do README.md para rodar o projeto, e abra o caminho `/culture/dream-team/` no seu navegador para validar se está tudo correto!

   Validar o que fazemos é uma ação muito importante em nosso dia-a-dia 😉

6. Faça o commit

```bash
git add .
git commit -m "docs(dream_team): add {YOUR_NAME} profile"
git push origin docs/{SEU_NOME}-profile
```

7. Abra o Pull Request usando o template

```md
![gif-or-image]()

### What?

Adicionando meu perfil ao Dream Team.

### Why?

Meu primeiro PR 🚀
```

8. Após receber 2 aprovações, pode mergear seu PR e verificar se o perfil já aparece na página 🍻
