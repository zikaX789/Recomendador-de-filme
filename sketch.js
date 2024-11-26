// Idade 18 anos:
// 1) As tranças do Careca, 18 anos, romance
// 2) Bastardos Inglorios, açao
// 3) Annabelle, terror

// Idade 12 anos:
// 1) As Branquelas, açao
// 2) Coraline e o mundo Secreto, terror
// 3) A barraca do beijo, romance

// Idade Livre:
// 1) Erolados, romance
// 2) Orion e o escuro, terror
// 3) Carros, açao

let campoIdade;
let campoAcao;
let campoTerror;
let campoRomance;
let Filme;


function setup() {
  createCanvas(400, 400);
  createElement('h2', 'Recomendador de filmes');
  createSpan('idade: ')
  campoIdade = createInput('15');
  createElement('h4','Escholha somente um gênero:')
  campoAcao = createCheckbox('Açao');
  campoTerror = createCheckbox('Terror');
  campoRomance = createCheckbox('Romance');
 
}

function draw() {
  background('orange');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('black')

  let idade = campoIdade.value();
  let acao = campoAcao. checked();
  let terror = campoTerror. checked();
  let romance = campoRomance. checked();
 
  filme = geraRecomendacao(idade, acao, terror, romance);
 
  text(filme, width/2, height/2);
}

  function geraRecomendacao(idade, acao, terror,romance){
  if (idade >= 18){
    if(acao){
      return 'Bastardos Inglorios'
  }else if (terror){
      return'Annabelle';
    }else if(romance){
      return 'As tranças do Careca';
    }else{
      return 'Bastardos Inglorios';
  }
  }else if (idade >= 12){
    return'As Branquelas';
  }else{
    return 'Carros';
   }
    if(acao){
      return 'As Branquelas'
  }else if (terror){
      return'Coraline e o mundo secreto';
    }else if(romance){
      return 'A barraca do beijo';
    }else{
      return 'Carros';
  }
    if(acao){
      return 'carros'
  }else if (terror){
      return'Orion e o Escuro';
    }else if(romance){
      return 'Enrolados';
    }else{
      return 'Carros';
    }
  }
