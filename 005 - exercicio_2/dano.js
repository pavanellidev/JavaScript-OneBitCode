const char1 = prompt("Nome do personagem 1:");
const powerChar1 = prompt("Poder de Ataque:");

const char2 = prompt("Nome do personagem 2:");
let lifeChar2 = prompt("Pontos de vida:");
const defChar2 = prompt("Poder de defesa:");
const shield = prompt("Tem escudo? S / N");

let damage = 0;

if (powerChar1 > defChar2 && shield === "n") {
   damage = powerChar1 - defChar2;
} else if (powerChar1 > defChar2 && shield === "s") {
   damage = (powerChar1 - defChar2) / 2;
}

lifeChar2 -= damage

alert(`O dano é: ${damage}`);

alert(
   char1 + "\nPoder de ataque " + powerChar1 + "\n\n" + char2 + "\nPontos de vida: " + lifeChar2 + "\nPoder de defesa: " + defChar2 + "\nPossui Escudo: "
   + shield
);