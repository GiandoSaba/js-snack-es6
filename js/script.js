// Scrivere una funzione(e lanciarla) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const min = 5;
const max = 11;

const newArray = getRangedArray(numbers, min, max);


function getRangedArray(array, min, max) {
    const newArray = [];
    array.forEach((number,index) => {  
        if (index > min && index < max) {
            newArray.push(number); 
        }
    });

    return newArray;
}

console.log(numbers, newArray);