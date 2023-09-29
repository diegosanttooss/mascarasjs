


function  cpf ()

{


    const  input = document.querySelector("input")

    input.addEventListener("keypress", () => {
    
    let inputlength = input.value.length 
    if 
    ( inputlength == 3 || inputlength==7) {
        input.value+="."
    }
    
    else if (inputlength==11) {
        input.value += "-"
    }
    
    }
    )

    
}


// query selector: tag, id, classe
//  para id e classe utilizar a mesma 
// OII




{


    const  cnpj = document.querySelector(".cnpj")

    cnpj.addEventListener("keypress", () => {
    
    let cnpjlength = cnpj.value.length 
    if 
    ( cnpjlength == 2 || cnpjlength==6) {
        cnpj.value+="."
    }
    
    else if (cnpjlength==10) {
        cnpj.value += "/"
    }
    else if (cnpjlength == 15) {

        cnpj.value += "-"
    }
    }
    )








}