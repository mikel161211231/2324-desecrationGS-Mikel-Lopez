
// Funcion que devuelve la informacion que esta al macenada en
export function getData(){

  const data = fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then(response => response.json());


  return data;
}