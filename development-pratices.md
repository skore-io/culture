# Best development practices

O documento a seguir descreve as regras de escrita nas linguagens de desenvolvimento no Learning.Rocks, que são utilizadas no projeto estruturado em Nuxt/Vue. Nosso maior desafio é permitir que os desenvolvedores de front-end façam que cada linha de código deva parecer ter sido escrita por uma única pessoa, não importando o número de contribuidores. Isso tem como objetivo facilitar a legibilidade e manter padrões que beneficiam o projeto como um todo, permitindo assim uma fácil inclusão de novos contribuidores, e melhorando a leitura e a escrita no momento de desenvolvimento.

Este é um documento ativo e alterações podem ocorrer a qualquer momento.

## Sumário

1. [Commits](#commits)
1. [Revisão de código](#code-review)
1. [HTML](#html)
1. [Style](#style)
1. [JavaScript](#js)
1. [Traduções](#translations)

<a name="commits"></a>
## 1. Commits

Para facilitar a contribuição de qualquer pessoa em um projeto, todas os commits e títulos de _pull request_ devem estar em **inglês**.

A seguir há uma ADR que detalha melhor como deve ser seguido esses padrões:
[Ler Padrões de Commits](https://github.com/skore-io/adrs/blob/master/doc/adr/0005-padroes-de-commits.md)

```javascript
// Good
git commit -m "feat(doc): add best development practices"

// Bad
git commit -m "Added Best development practices"
```

<a name="code-review"></a>
## 2. Revisão de código

Escreva comentários e faça o code review de _Pull Requests_ em **português**.

A seguir há uma ADR que detalha melhor como deve ser seguido esses padrões:
[Ler Revisão de código em português](https://github.com/skore-io/adrs/blob/master/doc/adr/0010-revisao-de-codigo-em-portugues.md)

<a name="html"></a>
## 3. HTML


### Sumário HTML

1. [Sintaxe HTML](#html-syntax)
1. [Comentários HTML](#html-comments)

<a name="html-syntax"></a>
### 3.1. Sintaxe HTML

Matenha o formato do código com dois espaços. Você pode configurar seu editor para isso.

```html
<!-- Good -->
<Row>
  <UserList>
    <li class="nav-item">
      <a class="nav-link">

<!-- Bad-->
<Row>
      <UserList>
            <li class="nav-item">
                  <a class="nav-link">
```

Sempre use aspas duplas.

```html
<!-- Good -->
<Button class="primary" />

<!-- Bad-->
<Button class='primary' />
```

Separe o elemento do bloco por uma linha em branco e agrupe os elementos internos do bloco.

```html
<!-- Good -->
<ul class="nav-tabs">
  <li>...</li>
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>

<div class="tab-content">
  ...
</div>

<!-- Bad-->
<ul class="nav-tabs">

  <li>...</li>

  <li>...</li>

  <li>...</li>

  <li>...</li>

</ul>
<div class="tab-content">
  ...
</div>
```

<a name="html-comments"></a>
### 3.2. Comentários HTML

Nossa estrutura em HTML não utiliza comentários entre os blocos, evite esta prática.

```html
<!-- Good -->
<div class="container">
  <div class="row">
    <UserItem />
  </div>
</div>

<!-- Bad -->
<div class="container">
  <div class="row">
    <!-- user item -->
    <UserItem />
  </div><!-- end row -->
</div><!-- end container -->
```

<a name="style"></a>
## 4. Style

### Sumário

1. [Sintaxe](#style-syntax)
1. [Ordem de declaração](#css-order)
1. [Nome de classe CSS](#css-class-name)
1. [Performance](#css-performance)
1. [Media Queries](#css-media-queries)
1. [Variáveis](#css-variables)

<a name="style-syntax"></a>
### 4.1. Sintaxe

Sempre que utilizar o style em seu componente, ele deve ser escopado no mesmo, para evitar conflitos de estilos com outras partes do projeto. Além disto, a linguagem definida deve ser como SCSS, permitindo utilizar recursos que melhoram a agilidade de desenvolvimento na hora de criar seu layout.

```html
<style lang="scss" scoped>
 ...
</style>
```

Matenha o formato do código com dois espaços. Você pode configurar seu editor para isso.

```css
/* Good */
.nav-item {
  display: inline-block;
  margin: 0 5px;
}

/* Bad */
.nav-item {
    display: inline-block;
    margin: 0 5px;
}
```

Sempre use aspas duplas para manter a semântica.

```css
/* Good */
[type="text"]
[class^="..."]

.nav-item:after {
  content: "bilú";
}

/* Bad */
[type='text']
[class^='...']

.nav-item:after {
  content: 'bilú';
}
```

Inclua um único espaço antes do colchete de abertura de um conjunto de regras.

```css
/* Good */
.header {
  ...
}

/* Bad */
.header{
  ...
}
```

Inclua um único espaço após os dois pontos de uma declaração.

```css
/* Good */
.header {
  margin-bottom: 20px;
}

/* Bad */
.header{
  margin-bottom:20px;
}
```

Inclua um ponto e vírgula (;) no final da última declaração em seu bloco.

```css
/* Good */
.header {
  margin-bottom: 20px;
}

/* Bad */
.header{
  margin-bottom:20px
}
```

Mantenha uma declaração por linha.

```css
/* Good */
.selector-1,
.selector-2,
.selector-3 {
  ...
}

/* Bad */
.selector-1, .selector-2, .selector-3 {
  ...
}
```

Separe cada conjunto de regras por uma linha em branco, assim como seu aninhamento (_nesting_).

```css
/* Good */
.selector-1 {
  ...

  .other {
      ...
  }
}

.selector-2 {
  ...
}

/* Bad */
.selector-1 {
  ...
  .other {
      ...
  }
}
.selector-2 {
  ...
}
```

<a name="css-order"></a>
### 4.2. Ordem de declaração

O ideal é que as declarações de propriedades sejam adicionadas em ordem alfabética, facilitando a leitura.

```css
/* Good */
.selector-1 {
  background: #fff;
  border: 1px solid #333333;
  color: #333;
  display: block;
  height: 200px;
  margin: 5px;
  padding: 5px;
  width: 200px;
}

/* Bad */
.selector-1 {
  padding: 5px;
  width: 200px;
  height: 200px;
  background: #fff;
  margin: 5px;
  color: #333;
  border: 1px solid #333333;
  display: block;
}
```

<a name="css-class-name"></a>
### 4.3. Nome de classe CSS

Mantenha a classe em letras minúsculas e use hífens para separar o nome da classe.

```css
/* Good */
.page-header { ... }

/* Bad */
.pageHeader { ... }
.page_header { ... }
```

Evite dar nomes muito curtos para a classe e sempre escolha nomes significativos que forneçam a função da classe.

```css
/* Good */
.btn { ... }
.page-header { ... }
.progress-bar { ... }

/* Bad */
.s { ... }
.ph { ... }
.block { ... }
```

<a name="css-performance"></a>
### 4.4. Performance CSS

Evite usar IDs.

```css
/* Good */
.header { ... }
.section { ... }

/* Bad */
#header { ... }
#section { ... }
```

Evite aninhamento (_nesting_) com mais de três elementos, isso deixa mais complexo o seu código, de preferência sempre use classes únicas nestes casos.

```css
/* Good */
.navbar-link { ... }

/* Bad */
.navbar {
  ul {
    li {
      a { ... }
    }
  }
}
```

<a name="css-media-queries"></a>
### 4.5 Media Queries

Inicie o desenvolvimento com regras genéricas das propriedades e adicione consultas de mídia com dispositivos móveis primeiro.

```css
/* Good */
.navbar {
  margin-bottom: 20px;

  @media (min-width: 992px) {
    left: 0;
    position: fixed;
    top: 0;
  }
}


/* Bad */
.navbar {
  margin-bottom: 20px;
  left: 0;
  position: fixed;
  top: 0;

  @media (max-width: 991px) {
    position: static;
  }
}
```

<a name="css-variables"></a>
### 4.6 Variáveis

Utilize sempre as váriaveis SCSS globais declaradas no projeto como breakpoints, colors etc.

```css
/* Good */
.title {
  color: $blue-main;
}

/* Bad */
.title {
  color: #8DA0BE;
}
```

Evite utilizar variáveis CSS nos componentes escopados para declarações e complexidades simples. Em vez disto, escreva diretamente o valor ou utilize os assets declarados no projeto como informado no exemplo acima.

```css
/* Good */
.title {
  color: $blue-main;
  border: 1px solid $blue-main;
}

/* Bad */
.title {
  --color: #8DA0BE;
  color: var(--color);
  border: 1px solid var(--color);
}
```

<a name="js"></a>
## 5. JavaScript

Atualmente são utilizadas em nosso projeto bibliotecas como ESLint e Prettier, então muitas regras de códigos são corrigidas automaticamente ao utiliza-las no editor de código. Nos assuntos abaixo, são regras personalizadas que devem ser observadas no momento do desenvolvimento, sendo elas seguidas pela equipe.

### Sumário

1. [4.1. Sintaxe do script](#js-syntax)
1. [4.2. Variáveis](#js-variables)
1. [4.3. Comentários](#js-comments)
1. [4.4. Imports](#js-comments)

<a name="js-syntax"></a>
### 5.1. Sintaxe

Matenha o formato do código com dois espaços. Você pode configurar seu editor para isso.

```js
// Good
try {
  code...
} catch (e) {
  code...
}

// Bad
try {
    code...
} catch (e) {
    code...
}
```

Para várias condicionais, sempre use colchetes {}.

```js
// Good
if (condition) {
  statement
} else if (condition) {
  statement
} else {
  statement
}

// Bad
if (condition) statement
else if (condition) statement
else statement
```

Caso a condicional tenha somente uma linha, o uso dos colchetes não é preciso, deixando mais legível a escrita.

```js
// Good
if (condition) return

// Bad
if (condition) {
  return
}
```


Para verificações de igualdade estrita, === deve ser usado em favor de ==.

```js
// Good
if (foo === 'foo') {
  statement
}

// Bad
if (foo == 'foo') {
  statement
}
```

Defina nomes simples e genéricos para os emits, mas mantendo a semância do evento que ele realizará.

```js
// Good
$emit('back')
$emit('return')

// Bad
$emit('back_screen')
$emit('previous_step')

```


<a name="js-variables"></a>
### 5.2. Variáveis

Todas as variáveis devem ser escritas uma ao lado da outra, antes de serem usadas, facilitando a leitura do que foi declarado.

Há exceções caso a variável seja usada em um bloco maior de código, podendo ser declarada mais próxima a ele.

```js
// Good
const { name, age } = this.getUser(this.id)
const minAge = 18

console.log(`Oi ${name}, bem-vindo.`)
console.log(`Você deve ter no mínimo ${minAge}`)
...

// Bad
const { name, age } = this.getUser(this.id)
console.log(`Oi ${name}, bem-vindo.`)

const minAge = 18
console.log(`Você deve ter no mínimo ${minAge}`)
...

```

<a name="js-comments"></a>
### 5.3. Comentários

Use apenas comentários caso o código terá uma futura atualização em sua estrutura, onde será removido posteriomente.

Recomendamos usar uma extensão que ajuda na escrita, veja: [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

```js
try {
  // TODO: Add mutation to update a class
} catch (e) {
  this.$toast.error(this.$t('error'))
}
```

### 5.4. Imports

Sempre utiliza caminhos absolutos na chamada de outros arquivos, evitando refatorações caso o arquivo seja movido de pasta e facilitando entender de onde está sendo sua origem.

```js
/* Good */
import Modal from '@/components/UI/Modal'
import TextField from '@/components/UI/TextField'
import AudienceModal from '@/modules/players/LiveCourse/components/LiveClass/Modal/Audience/Enrollment/Type'

/* Bad */
import Modal from '../../../../../../../../components/UI/Modal'
import TextField from '@/components/UI/TextField'
import AudienceModal from '../Enrollment/Type'

```

<a name="translations"></a>
## 6. Traduções

### 6.1. Sintaxe

Sempre utilize o padrão de abertura de tags para i18n com a linguagem em yaml. A sequência de traduções atual é en, pt e es.

```html
<i18n lang="yaml">
en:
  title: '...'
pt:
  title: '...'
es:
  title: '...'
</i18n>
```

### 6.2. Aspas

Utilize aspas simples em todas linhas de traduções. Não utilize aspas duplas e frases sem aspas.

```html
<!--- Good --->
en:
  title: 'Manage the list to "all users"'
  description: 'Lorem ipsum dolor sit amet'
pt:
  title: 'Gerencie a lista para "todos os usuários"'
  description: 'Lorem ipsum dolor sit amet'
es:
  title: 'Gestione la lista a "todos los usuarios"'
  description: 'Lorem ipsum dolor sit amet'

<!--- Bad --->
en:
  title: Manage the list to "all users"
  description: Lorem ipsum dolor sit amet
pt:
  title: "Gerencie a lista para todos os usuários"
  description: Lorem ipsum dolor sit amet
es:
  title: Gestione la lista a "todos los usuarios"
  description: "Lorem ipsum dolor sit amet"
```

### 6.3. Escopo de escrita

Utilize subníveis para descrever cada bloco de tradução sempre que possível.

```html
<!--- Good --->
pt:
  dropdown:
    label: '...'
    description: '...'


<!--- Bad --->
pt:
  dropdown_label: '...'
  dropdown_description: '...'

```
