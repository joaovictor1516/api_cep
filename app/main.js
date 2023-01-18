const cep = document.querySelector("#cep");


cep.addEventListener("blur", (event) => {
    
    const search = cep.value.replace("-", "");

    const showData = (result) =>{
        for(const field in result){
            const fieldData = document.querySelector(`#${field}`);
            if(fieldData){
                fieldData.value = result[field];
            }
        }
    }
    
    const options = {
        method: "get",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
        response.json()
        .then((data) => {
            showData(data);
        })
        .catch((error) => {
            console.log(error.menssage);
        })
    })
    .catch((error) => {
        if(search.length < 8){
            window.alert("CEP inválido");
        }
    })
    });