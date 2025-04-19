## Catálogo de veículos

Esse projeto está sendo criado especialmente para A RH Info, que me convidou para participar do seu processo seletivo.
O objetivo desse projeto é contemplar uma listagem de veículos com:
- id
- placa
- chassi
- renavam
- modelo
- marca
- ano

E como farei? Eu vou usar um serviço de MockAPI colocando estes campos, porque usando esse serviço, eu consigo gerar dados temporários com facilidade (usando Faker.js que o serviço me disponibiliza), assim, posso focar em criar a interface. 
Vou usar o Bootstrap para criar um layout mais atraente.
Poderia ter feito usando algo como json-placeholder, mas quero mostrar a aplicação rodando e conectando em uma API externa. 

## TL;DR

[Link do projeto publicado](https://herus02.github.io/vehicles-catalog/)

## Relatório da produção

Criei o projeto usando o Angular 19, para mostrar o uso dos recursos: inject(), o novo Control Flow (condições no template) e signals()

Criei um loading no `index.html` e no `vehicles.component.ts`

Organizei os componentes em diretórios de `core` e `features`.

A criação desse README.md como relatório documental para demonstrar como foi o processo de criação.É um  _status report_ do que estou produzindo, assim como para comunicar  do que se trata o projeto. Acredito que a comunicação é algo importante dentro de uma equipe.

17:13 - Adicionei bootstrap e adicionei o loading<br>
18:20 - Criei um topo e um footer para receber o componente
18:21 - Criei o component `vehicle.component.ts`, adicionei um componente com uma lista vazia
19:20 - Criei o service `vehicle.service.ts` e o model, organizei em diretórios para demonstrar uma arquitetura que eu acredito estar
20:40 - Estou publicando uma versão e com isso, consigo colocar um screenshot no README.md. Para isso, fiz um build com o comando <br> `ng build --output-path docs --base-href https://herus02.github.io/vehicles-catalog/` <br>
Isso possibilitou a publicação do screenshot: 
![Screenshot versão 1](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-1.png) <br>

20:50 - Criei um loading e o carregamento no `vehicles.component.ts` e bloco onde vou importar o `vehicle-card.component.ts` que irá conter os dados do . Gero novamente um build e movo os arquivos para o diretório `/docs/`. A geração cria um diretório chamado browser e isso atrapalha a pipeline do Github Pages.
Então quando eu crio um build, em favor da apresentação do meu README.md, eu preciso copiar os screenshots também.<br>
![Screenshot versão 2](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-2.png) <br>

É possível visualizar o projeto neste link: [Link do projeto](https://herus02.github.io/vehicles-catalog/)
