class claseCarton {
  constructor() {
    const longitudCarton = 9;
    this.carton = [];

    let numero = 0;

    let fila1 = [];
    let fila2 = [];
    let fila3 = [];

    this.carton.push(fila1);
    this.carton.push(fila2);
    this.carton.push(fila3);

    for (let i = 0; i < this.carton.length; i++) {
      for (let j = 0; j < longitudCarton; j++) {
        numero = this.getNumeroInt();
        if (j === 0) {
          this.carton[i].push(numero);
        } else {
          this.carton[i].push(parseInt(`${j}${numero}`));
        }
      }
    }
    console.log(this.carton);
    this.ordenarCasillas();
    this.taparCasillas();
  }

  getNumeroInt() {
    return Math.floor(Math.random() * 9) + 1;
  }

  ordenarCasillas() {
    let numeros = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        numeros[j] = this.carton[j][i];
      }
      numeros.sort((a, b) => a - b);
      for (let j = 0; j < 3; j++) {
        this.carton[j][i] = numeros[j];
      }
    }
  }

  taparCasillas() {
    let numero = 0;
    let totalTapados = [];
    let fila1 = [];
    let fila2 = [];
    let fila3 = [];

    totalTapados.push(fila1);
    totalTapados.push(fila2);
    totalTapados.push(fila3);

    for (let i = 0; i < totalTapados.length; i++) {
      for (let j = 0; j < 9; j++) {
        totalTapados[i].push(0);
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        do {
          numero = this.getNumeroInt() - 1;
          console.log(totalTapados);
        } while (
          totalTapados[i][numero] === 1 ||
          (totalTapados[0][numero] === 1 && totalTapados[1][numero] === 1)
        );

        this.carton[i][numero] = 0;
        totalTapados[i][numero] = 1;
      }
    }
  }
}

/*
                     
                                               
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
                                                                 
                     
      */
