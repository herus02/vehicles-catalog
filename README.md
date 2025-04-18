# Catálogo de veículos

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

Criei o projeto usando o Angular 19, para mostrar o uso dos recursos: inject(), o novo Control Flow (condições no template) e signals()

Organizei os componentes em diretórios de `core` e `features`.

Outra coisa é mostrar como me comunico também dentro do ambiente profissional. Então neste momento, estou fazendo um _status report_ do que estou produzindo, assim como estou usando o README.md para documentar (em forma de ata) do que se trata o projeto. Acredito que a comunicação é algo importante dentro de uma equipe.

17:13 - Adicionei bootstrap <br>
18:20 - Criei um topo e um footer para receber o componente
18:21 - Criei o component `vehicle.component.ts`, adicionei um componente com uma lista vazia
19:20 - Criei o service `vehicle.service.ts` e o model, organizei em diretórios para facili
20:40 - Estou publicando uma versão, e com isso, consigo colocar um screenshot. Para isso, fiz um build com o comando `ng build --output-path docs --base-href https://herus02.github.io/vehicles-catalog/` <br>
Isso possibilitou a publicação do 
![Screenshot do projeto até aqui](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-1.png) <br>
É possível visualizar o projeto neste link: ![Link do projeto](https://herus02.github.io/vehicles-catalog/)
