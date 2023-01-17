const cep = document.querySelector("#cep");


cep.addEventListener("blur", (event) => {
    
    const search = cep.value.replace("-", "");

    
    const options = {
        method: "get",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
        response.json()
        .then((data) => {
            console.lgo(data);
        })
        .catch((error) => {
            console.log(error.menssage);
        })
    })
    .catch((error) => {
        console.log("Teve o erro: " + error.menssage);
    })
    });