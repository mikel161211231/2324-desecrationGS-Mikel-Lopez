
// Funcion que devuelve la informacion que esta al macenada en
  let response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  export const data = await response.json();

  // console.log("Data client.mjs length 1 --> "+ data.length);
  // 

  for (let i = 0; i < 550; i++) {
    const num = Math.floor(Math.random()*data.length);
    const element = data[num];
    if (element.name !== "Junkpile") {
      data.splice(num, 1);
    }
  }

  // console.log("Data client.mjs length 2 --> "+ data.length);
  // console.log(data);