const cep = document.querySelector("#cep");


cep.addEventListener("blur", (event) => {
    
    const search = cep.value.replace("-", "");

    const showData = (result) =>{
        for(const field in result){
            const fieldData = document.querySelector(`#${field}`);
            if(fieldData){
                fieldData.value = result[field];
                fieldData.addEventListener("click", () => {
                    fieldData.classList.add("click");
                    console.log(fieldData);
                })
            }

            if(field === "erro" && result[field] === true){
                window.alert("Indereço correspondente ao CEP não encontrado.");
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
        window.alert("CEP inválido.")
        console.log(`Teve o erro: ${error}`);
    })
    });