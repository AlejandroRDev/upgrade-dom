//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement("div");
document.body.appendChild(div$$);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const p$$ = document.createElement("p");
const divP = document.createElement("div");
divP.appendChild(p$$);
document.body.appendChild(divP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div6P = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const P6 = document.createElement("p");
  div6P.appendChild(P6);
}
document.body.appendChild(div6P);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const soyDinamico = document.createElement("p");
soyDinamico.innerHTML = "Soy dinámico!";
document.body.appendChild(soyDinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector(".fn-insert-here");
h2$$.innerHTML = "Wubba Lubba dub dub";
document.body.appendChild(h2$$);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul$$ = document.createElement("ul");

for (const app of apps) {
  const li$$ = document.createElement("li");
  li$$.innerHTML = app;
  ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const nodesToRemove = document.querySelectorAll('.fn-remove-me');
for (const toRemove of nodesToRemove) {
    toRemove.remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.
const divsMedio = document.querySelectorAll('div');
const pMedio = document.createElement('p');
pMedio.innerHTML = 'Voy en medio!';
document.body.insertBefore(pMedio, divsMedio[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here//

const divInsertMedio = document.querySelectorAll('.fn-insert-here');
const pInsertMedio = document.createElement('p');
pInsertMedio.innerHTML = 'Voy en medio!';
for (const insertMedio of divInsertMedio) {
    insertMedio.appendChild(pInsertMedio);
};
