//RESUELVE LOS EJERCICIOS AQUI

const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => {
  const result1 = numbers.map(n => n ** n);
  return result1;
}

console.log(elevados());

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let result2;
function comer() {
  result2 = foodList.map((element, index) => {
    if (index === 0) return `Como soy de Italia, amo comer ${element}`;
    if (index === 1) return `Como soy de Japón, amo comer ${element}`;
    if (index === 2) return `Como soy de Valencia, amo comer ${element}`;
    if (index === 3) return `Aunque no como carne, el ${element} es sabroso`;
  });
  return result2;
}

console.log(comer());

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];
let result3;
const crearFrases = () => {
  result3 = staff.map(({ name, role, hobbies }) => {
    [uno, dos] = hobbies;
    return `${name} es ${role} y le gusta ${uno} y ${dos}`;
  });
  return result3;
}

console.log(crearFrases());


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4;
const conseguirImpares = () => {
  result4 = numbers2.filter((n) => n % 2 !== 0);
  return result4;
}

console.log(conseguirImpares());

const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];
let result5;
const serVegano = () => {
  const step = foodList2.filter((element) => {
    return element.isVeggie;
  });
  result5 = step.map((element) => {
   if (element.name === 'Tempeh') return `Que rico ${element.name} me voy a comer!`;
   if (element.name === 'Tofu burguer') return `Que rica ${element.name} me voy a comer!`;
  });
  return result5;
}

console.log(serVegano());


const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
let result6;
const filtrarPrecio = () => {
  const mayores300 = inventory.filter(({ name, price }) => {
    return price > 300;
  });
  result6 = mayores300.map(({ name, price }) => {
    return name;
  });
  return result6;
}

console.log(filtrarPrecio(inventory));

const numeros3 = [39, 2, 4, 25, 62];
let result7;
const usarReduce = () => {
  result7 = numeros3.reduce((acc, vi) => {
    return acc * vi;
  });
  return result7;
}

console.log(usarReduce());

const sentenceElements = [
  'Me',
  'llamo',
  'Melquíades',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
let result8;
const concatenateStr = () => {
  result8 = sentenceElements.reduce((acc, vi) => {
    return acc + ' ' + vi;
  });
  return result8;
}

console.log(concatenateStr());

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let result9;
const sumarPrecios = () => {
  const filtered = books.filter(({ name, auhtor, price, category }) => {
    return category === 'code';
  });
  result9 = filtered.reduce((acc, vi) => {
    return acc.price + vi.price;
  });
  return result9;
}

console.log(sumarPrecios());

