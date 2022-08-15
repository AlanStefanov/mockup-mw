//let URL = 'https://middleware.blockchain.julasoft.com/';
var URL = 'https://middleware.blockchain.julasoft.com/';
var HEADERS = new Headers();
HEADERS.append('Content-Type', 'application/json');
HEADERS.append('Accept', 'application/json');
HEADERS.append('Access-Control-Allow-Origin', '*');

const blockchain_status = async() => {
  try {
    console.log('blockchain_status');  
    var respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = 'Consultando . '

    const result = await fetch(URL, {
    method: 'GET',
    headers: HEADERS
    });

    console.log(result);
    if (result.status === 200) {
        const datos = await result.text();
        console.log(datos)
        respuesta.innerHTML = datos
    } else if(result.status === 401){
        console.log('Error de autenticación');
        respuesta.innerHTML = 'Error de autenticación'
    } else if(result.status === 404){
        console.log('Dato no encontrado');
        respuesta.innerHTML = 'Dato no encontrado'
    } else {
        console.log('Hubo un error desconocido');
        respuesta.innerHTML = 'Hubo un error desconocido'    
    }

  } catch(error){
    console.log(error);
    respuesta.innerHTML = 'Error interno: ' + error
  }
};

const read_data = async(event) => {
try {
    event.preventDefault();
    console.log('read_data');
    var respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = 'Consultando . '
    
    const valor = document.getElementById('number_id').value;
    console.log(valor)
    const result = await fetch(URL + '/data/read/' + valor, {
    method: 'GET',
    headers: HEADERS
    });

    console.log(result);
    if (result.status === 200) {
        const datos = await result.text();
        console.log(datos)
        respuesta.innerHTML = datos
    } else if(result.status === 503){
        console.log('Error de autenticación');
        respuesta.innerHTML = 'Error de autenticación'
    } else if(result.status === 400){
        console.log('Dato no encontrado');
        respuesta.innerHTML = 'Dato no encontrado'
    } else {
        console.log('Hubo un error desconocido');
        respuesta.innerHTML = 'Hubo un error desconocido'    
    }

  } catch(error){
    console.log(error);
    respuesta.innerHTML = 'Error interno: ' + error
  }
};


const save_contract = async(event) => {
//    body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
try {
    event.preventDefault();
    console.log('save_contract');
    var respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = 'Consultando . '

    //{"id":"87654321","lat":-34.61315,"lon":-58.37723,"state":"ok","valid":true}'
    contract_id = document.getElementById('contract_id').value;;
    final_insured = document.getElementById('final_insured').value;
    valid_since = document.getElementById('valid_since').value;
    valid_until = document.getElementById('valid_since').value;
    user_acepts = document.getElementById('user_acepts').value;
    acceptance_date = document.getElementById('acceptance_date').value;

  
    body = {"id":contract_id,
           "lat":'-34.61315',
           "lon":'-58.37723',
           "state":"ok",
           "valid":'true',
           'contract' : {
            'contract_id': contract_id,
            'final_insured': final_insured,
            'valid_since': valid_since,
            'valid:until': valid_until,
            'user_acepts':user_acepts,
            'acceptance_date': acceptance_date,
            
           }
           };


    console.log(body)
    

    const result = await fetch(URL + '/data/save', {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body)
    });

    console.log(result);
    if (result.status === 200) {
        const datos = await result.text();
        console.log(datos)
        respuesta.innerHTML = datos
    } else if(result.status === 503){
        console.log('Error de autenticación');
        respuesta.innerHTML = 'Error de autenticación'
    } else if(result.status === 400){
        console.log('Dato no encontrado');
        respuesta.innerHTML = 'Dato no encontrado'
    } else {
        console.log('Hubo un error desconocido');
        respuesta.innerHTML = 'Hubo un error desconocido'    
    }

  } catch(error){
    console.log(error);
    respuesta.innerHTML = 'Error interno: ' + error
  }
};

//blockchain_status();
//read_data()