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

const jovens = [];
const adultos = [];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade > 17) {
        adultos.push(usuarios[i].nome);
    } else {
        jovens.push(usuarios[i].nome);
    }
}

console.log(jovens);
console.log(adultos);


