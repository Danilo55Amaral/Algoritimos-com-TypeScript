// Criando um Algoritmo que utiliza a Equação da Dilatação Temporal de Albert Einstein 

/* A formula da dilatação temporal descrita pela teoria da relativida geral 
considera dois observadores um em repouso outro em movimento próximo a 
velocidade da luz. A formula descreve o seguinte:

∆t = ∆t0 / √(1 - v²/c²)

∆t é o intervalo de tempo medido pelo observador em movimento
∆t0 é o intervalo de tempo medido pelo observador em repouso
v é a velocidade relativa entre os dois observadores 
c é a velocidade da luz 

Exemplo prático 

Vamos utilizar um exemplo prático para utilizar essa equação proposta pela 
relatividade geral de Einstein, nesse exemplo temos dois observadores 
um em repouso na Terra e o outro em uma nave espacial viajando a uma velocidade 
de 0,8c em relação à Terra, c é a velocidade da luz no vácuo.

O observador na Terra mede um intervalo de tempo de 1 segundo para um evento que 
ocorre no mesmo local. Conseguimos calcular o intervalo de tempo medido pelo 
observador na nave espacial usando a equação da dilatação temporal, ∆t é o intervalo
de tempo  medido pelo observador na nave espacial, ∆t0 é o intervalo de tempo medido 
pelo observador na Terra 1 segundo, v é a velocidade relativa entre os dois observadores 
0,8c e c é a velocidade da luz no vácuo.

Aplicando os valores na formula ===> ∆t = 1 / √(1 - (0,8c)²/c²) = 1 / √(1 - 0,64) = 1 / √0,36 = 1 / 0,6 ≈ 1,67 segundos.

Aplicando o calculo da dilatação temporal o intervalo de tempo medido pelo observador na nave 
espacial é apróximadamente 1,67 segundos, já o intervalo de tempo medido pelo observador na Terra
é de apenas 1 segundo. Isso mostra que o tempo pode ser medido de forma diferente por diferentes
observadores em movimento relativo. */

/*Abaixo eu peguei a equação da dilatação temporal e construir um algoritimo 
que consegue utilizar essa aquação e fazer o calculo baseado no exemplo a cima. */ 

// Explicando o algoritimo 

/* O algoritmo consiste em uma função que chamo de timeDilation essa função recebe 
como parâmetros o intervalo de tempo medido pelo observador na Terra t0, a velocidade
relativa entre os dois observadores v e a velocidade da luz c. 

A função calcula e retorna o intervalo de tempo medido pelo observador na nave espacial 
utilizando a equação da dilatação temporal. 

A função Math.sqrt é utilizada para calcular a raiz quadrada de um número e nesse 
algoritimo é usada para calcular o denominador da fórmula da dilatação temporal
o denominador na formula é a raiz quadrada de (1 - v²/c²) por isso a função Math.sqrt
é necessária para poder calcular essa raiz quadrada, o resultado é utilizado como 
denominador na divisão que calcula o intervalo de tempo medido pelo observador na 
nave espacial.

Após isso o algoritimo define valores para t0, v e c com base no exemplo descrito 
anteriormente. O algoritimo chama a função timeDilation com esses valores como 
parametros e armazena o resultado na variável t. Em seguida o algoritimo imprime 
o resultado no console.*/


// Algoritmo que utiliza a equação  
function timeDilation(t0: number, v: number, c: number) : number {
    return t0 / Math.sqrt(1 - (v * v) / (c * c));
}

const t0 = 1; // intervalo de tempo medido pelo observador na Terra em segundos 
const v = 0.8 * 299792458; // Velocidade da nave espacial em metros por segundo
const c = 299792458; // Velocidade da luz em metros por segundo 

const t = timeDilation(t0, v, c); 

console.log(`O intervalo de tempo medido pelo observador na nave espacial é de ${t} segundos`);
