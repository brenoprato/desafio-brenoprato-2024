class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanho: 10, ocupacao: 3, animais: ['MACACO', 'MACACO', 'MACACO'] },
            { numero: 2, bioma: 'floresta', tamanho: 5, ocupacao: 0, animais: [] },
            { numero: 3, bioma: ['savana', 'rio'], tamanho: 7, ocupacao: 2, animais: ['GAZELA'] }, // Biomas compostos como array
            { numero: 4, bioma: 'rio', tamanho: 8, ocupacao: 0, animais: [] },
            { numero: 5, bioma: 'savana', tamanho: 9, ocupacao: 3, animais: ['LEAO'] }
        ];
        
        this.animais = {
            LEAO: { tamanho: 3, bioma: 'savana', carnivoro: true },
            LEOPARDO: { tamanho: 2, bioma: 'savana', carnivoro: true },
            CROCODILO: { tamanho: 3, bioma: 'rio', carnivoro: true },
            MACACO: { tamanho: 1, bioma: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { tamanho: 2, bioma: 'savana', carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, bioma: ['savana', 'rio'], carnivoro: false }
        };
    }

    analisaRecintos(tipoAnimal, quantidade) {
        tipoAnimal = tipoAnimal.toUpperCase();
    
        // Validações
        if (!this.animais[tipoAnimal]) {
            return { erro: 'Animal inválido' };
        }
        if (isNaN(quantidade) || quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }
    
        const animal = this.animais[tipoAnimal];
        const recintosViaveis = [];
        
        this.recintos.forEach(recinto => {
            const espacoDisponivel = recinto.tamanho - recinto.ocupacao;
            // Corrigido: Considera espaço extra apenas se houver outras espécies no recinto
            const espacoNecessario = (animal.tamanho * quantidade) +
                (recinto.animais.length > 0 && !recinto.animais.every(a => a === tipoAnimal) ? 1 : 0);

            // Verificação das regras
            const biomasRecinto = Array.isArray(recinto.bioma) ? recinto.bioma : [recinto.bioma];
            const biomaAnimal = Array.isArray(animal.bioma) ? animal.bioma : [animal.bioma];
            
            // Verifica se o recinto tem um dos biomas do animal
            const biomaCompatível = biomasRecinto.some(bioma => biomaAnimal.includes(bioma));
            
            if (biomaCompatível && espacoDisponivel >= espacoNecessario) {
                // Regra: Carnívoros só podem dividir o recinto com a mesma espécie
                if (animal.carnivoro) {
                    // Verifica se há outros animais no recinto que não sejam da mesma espécie
                    const outrosAnimais = recinto.animais.filter(a => a !== tipoAnimal);
                    if (outrosAnimais.length > 0 ) {
                        return;
                    }
                } else {
                    // Se o animal não é carnívoro, verifica se há animais carnívoros no recinto
                    if (recinto.animais.some(a => this.animais[a].carnivoro)) {
                        return;
                    }
                }
                
                // Regra: Hipopótamos só toleram outros animais em savana e rio
                if (tipoAnimal === 'HIPOPOTAMO' && !biomasRecinto.includes('savana') && !biomasRecinto.includes('rio')) {
                    return;
                }
                // Regra: Macacos precisam de pelo menos outro animal
                if (tipoAnimal === 'MACACO' && quantidade < 1) {
                    return;
                }
                // Regra: Macacos podem ocupar recintos vazios ou com outros macacos
                if (tipoAnimal === 'MACACO' && recinto.animais.length === 0) {
                    // Não é necessário rejeitar se o recinto estiver vazio
                }

                // Adiciona o recinto como viável
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - espacoNecessario} total: ${recinto.tamanho})`);
            }
        });
    
        if (recintosViaveis.length > 0) {
            return { recintosViaveis };
        } else {
            return { erro: 'Não há recinto viável' };
        }
    }
}

export { RecintosZoo as RecintosZoo };
