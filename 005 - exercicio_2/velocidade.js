const veicle1 = prompt("Nome do veículo 1:");
const veicle1speed = prompt("Velocidade do veículo 1:");

const veicle2 = prompt("Nome do veículo 2:");
const veicle2speed = prompt("Velocidade do veículo 2:");


if (veicle1speed > veicle2speed) {
   alert("O " + veicle1 + " é mais rápido");
} else if (veicle2speed > veicle1speed) {
   alert("O " + veicle2 + " é mais rápido");
} else {
   alert("Eles empataram");
}