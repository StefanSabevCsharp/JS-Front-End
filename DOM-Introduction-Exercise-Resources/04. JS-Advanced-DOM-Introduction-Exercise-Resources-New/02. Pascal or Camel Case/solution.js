function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  let naming = document.getElementById("naming-convention").value;

  text = text.split(" ");
  let result = [];

  if (naming === "Camel Case") {

    result.push(text[0]);
    for (let index = 1; index < text.length; index++) {
      result.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));

    }
    document.getElementById("result").textContent = result.join("");

  } else if (naming === "Pascal Case") {
    for (let index = 0; index < text.length; index++) {
      result.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
      document.getElementById("result").textContent = result.join("");

    }
  } else if (naming !== "Camel Case" && naming !== "Pascal Case") {
    document.getElementById("result").textContent = "Error!";
  }

 

}