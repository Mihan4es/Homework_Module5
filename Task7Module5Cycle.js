let array= [0, 1, 2, 3, 4, 5, 6, null, 'Buy'];
function cycle(array) {
    let zero = 0;
    let odd = 0;
    let even = 0;
    let another = 0;
    for(let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0) {
                zero++;
            }
            else if(array[i] % 2 === 0) {
                even++;
            }


            else{
                odd++;
            }
        }


        else{
            another++;
        }
    }
    console.log(zero);
    console.log(even);
    console.log(odd);
    console.log(another);
}


cycle(array);