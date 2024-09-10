# 🦁 Desafio - Recintos do Zoológico 🐒

Este repositório contém a solução para o desafio proposto pela StartDB.O desafio é uma organização de recintos de um zoológico, desenvolvido em JavaScript. A tarefa é encontrar recintos adequados para novos animais de acordo com as regras estabelecidas.

## 📜 Descrição do Desafio

Você foi contratado para ajudar na organização de um zoológico. Sua missão foi construir a lógica para indicar os recintos onde novos animais se sintam confortáveis. 

### 🏟 Recintos Existentes

O zoológico possui os seguintes recintos disponíveis:

| Número | Bioma        | Tamanho Total | Animais Existentes  |
|--------|--------------|---------------|----------------------|
| 1      | savana       | 10            | 3 macacos 🐒         |
| 2      | floresta     | 5             | vazio                |
| 3      | savana e rio | 7             | 1 gazela 🦌          |
| 4      | rio          | 8             | vazio                |
| 5      | savana       | 9             | 1 leão 🦁            |

### 🐾 Animais

O zoológico só está habilitado a tratar dos seguintes animais:

| Espécie       | Tamanho | Bioma                   |
|---------------|---------|-------------------------|
| LEÃO          | 3       | savana                  |
| LEOPARDO      | 2       | savana                  |
| CROCODILO     | 3       | rio                     |
| MACACO        | 1       | savana ou floresta      |
| GAZELA        | 2       | savana                  |
| HIPOPOTAMO    | 4       | savana ou rio           |

### 📋 Regras para Encontrar um Recinto

1. Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo.
2. Animais carnívoros devem habitar somente com a própria espécie.
3. Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s).
4. Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio.
5. Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie.
6. Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado.
7. Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto.

### ⚙️ Funcionamento do Código

A classe `RecintosZoo` possui um método chamado `analisaRecintos` que recebe o tipo e a quantidade de animais e retorna uma estrutura contendo:

- **recintosViaveis**: Lista de todos os recintos viáveis ordenada pelo número do recinto, com a descrição do espaço livre que restaria após a inclusão dos animais e o espaço total.
- **erro**: Mensagem de erro caso haja um animal inválido, quantidade inválida ou se não houver recinto possível.

### 🗂 Estrutura do Código

- `src/recintos-zoo.js`: Contém a lógica para a análise dos recintos.
- `src/recintos-zoo.test.js`: Contém os testes para validar a solução.

### 🛠 Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github
