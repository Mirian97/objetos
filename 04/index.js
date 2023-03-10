const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

let objetoFundido = {};

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade > 17) {
        maior_idade = true;
    } else {
        maior_idade = false;
    }
    objetoFundido = {
        ...usuarios[i],
        maior_idade
    }
    console.log(objetoFundido);
}

