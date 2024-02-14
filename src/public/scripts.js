//Inputs
const id = document.querySelector("#id")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
const price = document.querySelector("#price")
/* --------------------------- */
//Buttons
const search = document.querySelector("#search")
const btn_clean = document.querySelector("#clean")
const btn_save = document.querySelector("#save")
const btn_delete = document.querySelector("#delete")

//Funções

const getData = async (id) => {
    try {
        const url = `http://localhost:3000/products/${id}`
        const res = await fetch(url);

        if (res.status != 200) {
            alert('Verifique o ID')
        } else if (res.status == 200) {
            const data = await res.json(); 
            return data;
        } 
    } catch (error) {
        console.log(error)   
    }    
    
}

const sendData = async (data) => {
    const url = `http://localhost:3000/products`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData) 
}

const updateData = async(id, data) => {
    const url = `http://localhost:3000/products/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData) 
}

const deleteData = async(id) => {
    console.log(id)
    const url = `http://localhost:3000/products/${id}`
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData)
}

const clear_fields = () => {
    id.value = ""
    title.value = ""
    description.value = ""
    price.value = ""
}

const show_get_data = (data)=> {
    console.log(data)
    title.value = data.title
    description.value = data.description
    price.value = data.price
}

//Botão Pesquisar
search.addEventListener('click', async () =>{
    try {
        const id_input = id.value
        const data = await getData(id_input)
        show_get_data(data)
    } catch (error) {
        console.log(error)   
    }  
})

//Salvar
btn_save.addEventListener('click', async () => {
    const id_value = id.value
    if (id_value == "") {
        const post_title = title.value
        const post_description = description.value
        const post_price = price.value
    
        const data = {
            title: post_title,
            description: post_description,
            price: post_price
          }
    
        sendData(data)
    } else {
        const data = await getData(id_value)
        if (id_value == data._id) {
        
        const post_title = title.value
        const post_description = description.value
        const post_price = price.value
    
        const data = {
            title: post_title,
            description: post_description,
            price: post_price
          }
          updateData(id_value, data)
        }
    }    
})

//Limpar
btn_clean.addEventListener('click',() => {
    clear_fields()
})

//Excluir
btn_delete.addEventListener('click',()=>{
    const id_value = id.value
    if (id.value == "") {
        alert('Para deletar informe o ID.')
    } else {
        try {
            deleteData(id_value)
        } catch (error) {
            console.log(error)
        } 
    }
})

