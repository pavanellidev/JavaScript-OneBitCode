const medida = prompt("Digite medida em metros:");
const convert = prompt("Deseja converter em? mm, cm, dm, dam, hm ou km ?")

switch (convert) {
   case "mm":
      alert(medida * 1000 + "mm");
      break
   case "cm":
      alert(medida * 100 + "cm");
      break
   case "dm":
      alert(medida * 10 + "dm");
      break
   case "dam":
      alert(medida / 10 + "dam");
      break
   case "hm":
      alert(medida / 100 + "hm");
      break
   case "km":
      alert(medida / 1000 + "km");
      break
   default:
      alert("Valor inválido");
}