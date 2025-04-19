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

A criação desse README.md como relatório documental para demonstrar como foi o processo de criação.É um _status report_ do que estou produzindo, assim como para comunicar do que se trata o projeto. Acredito que a comunicação é algo importante dentro de uma equipe.

18/04 às 17:13 - Adicionei bootstrap e adicionei o loading no index.html<br>
18/04 às 18:20 - Criei um topo e um footer para receber o componente
18/04 às 18:21 - Criei o component `vehicle.component.ts`, adicionei um componente com uma lista vazia<br>
18/04 às 19:20 - Criei o service `vehicle.service.ts` e o model, organizei em diretórios para demonstrar uma arquitetura que eu acredito estar pronta pra evolução do projeto<br>
O service bate num endpoint que eu criei no serviço MockAPI, esse é o endpoint: https://64a46b29c3b509573b5780f1.mockapi.io/pub/v1/veiculos <br>
Optei pelo seu uso pois eu posso gerar os dados com um clique.
18/04 às 20:40 - Estou publicando uma versão e com isso, consigo colocar um screenshot no README.md. Para isso, fiz um build com o comando <br> `ng build --output-path docs --base-href https://herus02.github.io/vehicles-catalog/` <br>

Isso possibilitou a publicação do screenshot:
![Screenshot versão 1](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-1.png)

18/04 às 20:50 - Criei um loading e o carregamento no `vehicles.component.ts` e bloco onde vou importar o `vehicle-card.component.ts` que irá conter os dados do . Gero novamente um build e movo os arquivos para o diretório `/docs/`. A geração cria um diretório chamado browser e isso atrapalha a pipeline do Github Pages.<br>
Então quando eu crio um build, em favor da apresentação do meu README.md, eu preciso copiar os screenshots também.<br>

![Screenshot versão 2](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-2.png)

19/04 às 09:41 - Criei o component que vai listar os dados do carro/veículo.
<br> Estou tentando utilizar um serviço chamado Unsplash para colocar uma imagem randômica de carro mas acredito que vai me dar mais trabalho, vou usar um link que já foi muito popular, que coloca uma imagem randômica, mas os parâmetros estão depreciados, agora o serviço demanda um acesso com token e uma chamada a uma API. Vamos ver.<br>
Eu pretendia fazer a API em node.js se desse tempo, mas creio que ambos vão atrasar a entrega se eu tentar entregar hoje<br>
19/04 - 10:46 - Adicionei o vehicle-component na listagem (que usa RxJS e signals() para setar a listagem) e usando o novo Control Flow, fiz algumas condições para tratar erros, loading e retorno vazio (sem dados da API). <br>

![Screenshot versão 3](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-3.png)

19/04 às 11:01 - Vou adicionar uma imagem randômica ao card do veículo e criar uma paginação e enviar o teste. Quem gostar gostou, quem não gostou... vai gostar. Vou adicionar a paginação ao componente, pois como ele não é reutilizado em outras features, vai ficar ali mesmo. <br>
19/04 às 11:30 - Notei uma falha na minha organização à respeito do gerenciamento de _branches_, pois eu usei só a branch main, sem usar um gitflow para organizar a publicação. Mas como eu estou publicando o projeto desde o início, creio que não preciso levar isso em conta. Mas foi faltou esse cuidado para demonstração de gitflow. <br>

![Screenshot versão 4](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-4.png)
19/04 às 11:50 - Coloquei a imagem no card do veículo. Ficou visualmente bem atraente, creio que vai criar um impacto visual positivo, já que eu decidi não fazer os endpoints em node.js conforme o teste pedia como opcional.<br>

![Screenshot versão 5](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-5.png)

19/04 às 13:10 - Adicionei a paginação com quantidade de itens totais e com a função de goTo page. Dou como finalizado o teste.<br>

![Screenshot versão 6](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-6.png)

19/04 às 13:10 - Atualização importante: eu quase esqueci de apresentar o campo id no HTML! Isso implicaria em ausência do requisito, levando numa possível reprovação do teste.
<br>

## Conclusão e Publicação
![Screenshot versão final](https://herus02.github.io/vehicles-catalog/assets/img/screenshot-7.png)

O projeto foi publicado usando a pipeline do Github Pages. É possível visualizar o projeto neste link:<br>
[Link do projeto](https://herus02.github.io/vehicles-catalog/)
