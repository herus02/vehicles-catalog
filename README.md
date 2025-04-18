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

Outra coisa é mostrar como me comunico também dentro do ambiente profissional. Então neste momento, estou fazendo um _status report_ do que estou produzindo, assim como estou usando o README.md para documentar (em forma de ata) do que se trata o projeto. Acredito que a comunicação é algo iumportante dentro de uma equipe.

17:13 - Adicionei bootstrap
18:20 - Criei um topo e um footer para receber o componente
18:21 - Criei o component `vehicle.component.ts`, adicionei um componente com uma lista vazia:
![Screenshot do projeto até aqui](https://raw.githubusercontent.com/herus02/vehicles-catalog/refs/heads/main/public/screenshot-1.png)
18:23 - Criei o service  `vehicle.service.ts`