//let URL = 'http://localhost:8080/';
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
    respuesta.innerHTML = 'El server Middleware BlockChain no responde. [' + error + ']';
  }
};

const read_data = async(event) => {
try {
    event.preventDefault();
    console.log('read_data');
    var respuesta = document.getElementById('respuesta');
    respuesta.className = 'text-danger';
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
        respuesta.className = 'text-success';
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
    respuesta.innerHTML = 'El server Middleware BlockChain no responde. [' + error + ']';
  }
};

const save_contract = async(event) => {

try {
    event.preventDefault();
    console.log('save_contract');
    var respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = 'Enviando . '


    contract_contract_id = document.getElementById('contract_contract_id').value;
    contract_contract_number = document.getElementById('contract_contract_number').value;
    contract_final_insured = document.getElementById('contract_final_insured').value;
    contract_valid_since = document.getElementById('contract_valid_since').value;
    contract_valid_until = document.getElementById('contract_valid_until').value;
    contract_user_accepts = document.getElementById('contract_user_accepts').value;
    contract_acceptance_date = document.getElementById('contract_acceptance_date').value;

  
    body = {"id"  : contract_contract_id,
            // "lat" : "0",
            // "lon" : "0",
            // "state": "ok",
            // "valid": "true",
            "contract" : {
              "contract_number": contract_contract_number,
              "final_insured": contract_final_insured,
              "valid_since": contract_valid_since,
              "valid_until": contract_valid_until,
              "user_accepts": contract_user_accepts,
              "acceptance_date": contract_acceptance_date, 
            
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

const save_contract_and_policy = async(event) => {
try {
    event.preventDefault();
    console.log('save_contract_and_policy');
    var respuesta = document.getElementById('respuesta');
    respuesta.className = 'text-danger';
    respuesta.innerHTML = 'Enviando ... '

    // Contratos
    contract_contract_id = document.getElementById('contract_contract_id').value;
    contract_final_insured = document.getElementById('contract_final_insured').value;
    contract_valid_since = document.getElementById('contract_valid_since').value;
    contract_valid_until = document.getElementById('contract_valid_until').value;
    contract_user_accepts = document.getElementById('contract_user_accepts').value;
    contract_acceptance_date = document.getElementById('contract_acceptance_date').value;
    // Polizas
    policy_policy_number = document.getElementById('policy_policy_number').value;
    policy_valid_since = document.getElementById('policy_valid_since').value;
    policy_final_insured = document.getElementById('policy_final_insured').value;
    policy_source = document.getElementById('policy_source').value;
    policy_destiny = document.getElementById('policy_destiny').value;
    policy_conveyance = document.getElementById('policy_conveyance').value;
    policy_container_type = document.getElementById('policy_container_type').value;
    policy_merchandise = document.getElementById('policy_merchandise').value;
    policy_insured_amount = document.getElementById('policy_insured_amount').value;
    policy_currency = document.getElementById('policy_currency').value;
    policy_reference_document = document.getElementById('policy_reference_document').value;



  
    body = {"id"  : contract_contract_id,
            // "lat" : "0",
            // "lon" : "0",
            // "state": "ok",
            // "valid": "true",
            "contract" : {
              "contract_id": contract_contract_id,
              "final_insured": contract_final_insured,
              "valid_since": contract_valid_since,
              "valid_until": contract_valid_until,
              "user_accepts": contract_user_accepts,
              "acceptance_date": contract_acceptance_date, 
            "policy": {
                "policy_id": policy_policy_number,
                "policy_number":policy_policy_number,
                "valid_since":policy_valid_since,
                "final_insured":policy_final_insured, 
                "source":policy_source,
                "destiny":policy_destiny, 
                "conveyance":policy_conveyance,
                "container_type":policy_container_type,
                "merchandise": policy_merchandise,
                "insured_amount": policy_insured_amount,
                "currency": policy_currency,
                "reference_document":policy_reference_document,
                
            }
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
        respuesta.className = 'text-success';
        respuesta.innerHTML = datos
    } else if(result.status === 503){
        console.log('Error de autenticación.');
        respuesta.innerHTML = 'Error de autenticación.'
    } else if(result.status === 400){
        console.log('Este contrato ya se encuentra registrado.');
        respuesta.innerHTML = 'Este contrato ya se encuentra registrado.'
    } else {
        console.log('Hubo un error desconocido.');
        respuesta.innerHTML = 'Hubo un error desconocido.'    
    }

  } catch(error){
    console.log(error);
    respuesta.innerHTML = 'El server Middleware BlockChain no responde. [' + error + ']';
  }
};



const save_policy = async (event) => {
  try {
      event.preventDefault();
      console.log('save_policy');
      var respuesta = document.getElementById('respuesta');
      respuesta.className = 'text-danger';
      respuesta.innerHTML = 'Enviando ... '
  
      // Contratos
      policy_policy_id = document.getElementById('policy_policy_id').value;
    
      // Polizas
      policy_contract_number = document.getElementById('policy_contract_number').value;
      policy_policy_number = document.getElementById('policy_policy_number').value;
      policy_valid_since = document.getElementById('policy_valid_since').value;
      policy_valid_since_hour = document.getElementById('policy_valid_since_hour').value;
      policy_valid_until = document.getElementById('policy_valid_until').value;
      policy_valid_until_hour = document.getElementById('policy_valid_until_hour').value;
      policy_final_insured = document.getElementById('policy_final_insured').value;
      policy_source = document.getElementById('policy_source').value;
      policy_destiny = document.getElementById('policy_destiny').value;
      policy_conveyance = document.getElementById('policy_conveyance').value;
      policy_container_type = document.getElementById('policy_container_type').value;
      policy_merchandise = document.getElementById('policy_merchandise').value;
      policy_insured_amount = document.getElementById('policy_insured_amount').value;
      policy_currency = document.getElementById('policy_currency').value;
      policy_reference_document = document.getElementById('policy_reference_document').value;
  
  
  
    
      body = {"id"  : policy_policy_id,
              // "lat" : "0",
              // "lon" : "0",
              // "state": "ok",
              // "valid": "true",
              "contract": {
              "contract_number": policy_contract_number,
                
              "policy": {
                  "policy_id": policy_policy_number,
                  "policy_number":policy_policy_number,
                "valid_since": policy_valid_since,
                "valid_since_hour": policy_valid_since_hour, 
                "valid_until": policy_valid_until,        
                "valid_until_hour": policy_valid_until_hour,
                  "final_insured":policy_final_insured, 
                  "source":policy_source,
                  "destiny":policy_destiny, 
                  "conveyance":policy_conveyance,
                  "container_type":policy_container_type,
                  "merchandise": policy_merchandise,
                  "insured_amount": policy_insured_amount,
                  "currency": policy_currency,
                  "reference_document":policy_reference_document,
                  
              }
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
          respuesta.className = 'text-success';
          respuesta.innerHTML = datos
      } else if(result.status === 503){
          console.log('Error de autenticación.');
          respuesta.innerHTML = 'Error de autenticación.'
      } else if(result.status === 400){
          console.log('Este contrato ya se encuentra registrado.');
          respuesta.innerHTML = 'Este contrato ya se encuentra registrado.'
      } else {
          console.log('Hubo un error desconocido.');
          respuesta.innerHTML = 'Hubo un error desconocido.'    
      }
  
    } catch(error){
      console.log(error);
      respuesta.innerHTML = 'El server Middleware BlockChain no responde. [' + error + ']';
    }
  };
  

  const save_endorsement = async (event) => {
    try {
        event.preventDefault();
        console.log('save_endorsement');
        var respuesta = document.getElementById('respuesta');
        respuesta.className = 'text-danger';
        respuesta.innerHTML = 'Enviando ... '
    
        //ID
        endorsement_endorsement_id = document.getElementById('endorsement_endorsement_id').value;
      
        // Endoso
      policy_contract_number = document.getElementById('policy_contract_number').value;
      policy_policy_number = document.getElementById('policy_policy_number').value;
      policy_endorsement_number = document.getElementById('policy:endorsement_number').value;
      policy_valid_since = document.getElementById('policy_valid_since').value;
      policy_valid_since_hour = document.getElementById('policy_valid_since_hour').value;
      policy_valid_until = document.getElementById('policy_valid_until').value;
      policy_valid_until_hour = document.getElementById('policy_valid_until_hour').value;
      policy_final_insured = document.getElementById('policy_final_insured').value;
      policy_source = document.getElementById('policy_source').value;
      policy_destiny = document.getElementById('policy_destiny').value;
      policy_conveyance = document.getElementById('policy_conveyance').value;
      policy_container_type = document.getElementById('policy_container_type').value;
      policy_merchandise = document.getElementById('policy_merchandise').value;
      policy_insured_amount = document.getElementById('policy_insured_amount').value;
      policy_currency = document.getElementById('policy_currency').value;
      policy_reference_document = document.getElementById('policy_reference_document').value;
    
    
    
      
        body = {"id"  : endorsement_endorsement_id,
                // "lat" : "0",
                // "lon" : "0",
                // "state": "ok",
                // "valid": "true",
                "contract": {
                "contract_number": policy_contract_number,
                  
                "endorsement": {
                  "policy_id": policy_policy_number,
                  "policy_number": policy_policy_number,
                  "endorsement_number": policy_endorsement_number,
                "valid_since": policy_valid_since,
                "valid_since_hour": policy_valid_since_hour, 
                "valid_until": policy_valid_until,        
                "valid_until_hour": policy_valid_until_hour,
                  "final_insured":policy_final_insured, 
                  "source":policy_source,
                  "destiny":policy_destiny, 
                  "conveyance":policy_conveyance,
                  "container_type":policy_container_type,
                  "merchandise": policy_merchandise,
                  "insured_amount": policy_insured_amount,
                  "currency": policy_currency,
                  "reference_document":policy_reference_document,
                  
              }
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
            respuesta.className = 'text-success';
            respuesta.innerHTML = datos
        } else if(result.status === 503){
            console.log('Error de autenticación.');
            respuesta.innerHTML = 'Error de autenticación.'
        } else if(result.status === 400){
            console.log('Este contrato ya se encuentra registrado.');
            respuesta.innerHTML = 'Este contrato ya se encuentra registrado.'
        } else {
            console.log('Hubo un error desconocido.');
            respuesta.innerHTML = 'Hubo un error desconocido.'    
        }
    
      } catch(error){
        console.log(error);
        respuesta.innerHTML = 'El server Middleware BlockChain no responde. [' + error + ']';
      }
    };
    



  
  //Siniestros
  const save_claims = async(event) => {
    try {
        event.preventDefault();
        console.log('save_claims');
        var respuesta = document.getElementById('respuesta');
        respuesta.className = 'text-danger';
        respuesta.innerHTML = 'Enviando ... '
    
        //  ID
        claims_claims_id = document.getElementById('claims_claims_id').value;
      
        // Contrato
        claims_contract_number = document.getElementById('claims_contract_number').value;
      
        // Polizas
        claims_policy_number = document.getElementById('claims_policy_number').value;

        // Siniestros
        claims_claim_number = document.getElementById('claims_claim_number').value;
        claims_date_complaint = document.getElementById('claims_date_complaint').value;
        claims_date_claim = document.getElementById('claims_date_claim').value;
        claims_type_claim = document.getElementById('claims_type_claim').value;
        claims_crash_site = document.getElementById('claims_crash_site').value;
        claims_crash_hour = document.getElementsByClassName('claims_crash_hour').value;
        claims_reclaimed_amount = document.getElementById('claims_reclaimed_amount').value;
        claims_currency = document.getElementById('claims_currency').value;
        claims_claimed_status = document.getElementById('claims_claimed_status').value;
  
        body = {"id"  : claims_claims_id,
                // "lat" : "0",
                // "lon" : "0",
                // "state": "ok",
                // "valid": "true",
                "contract" : {
                  "contract_id": claims_contract_number,
                  
                "policy": {
                    "policy_id": claims_policy_number,
                  
                  "claims": {
                    "claim_number": claims_claim_number,                                     
                    "date_claim": claims_date_claim,
                    "type_claim": claims_type_claim,
                    "crash_site": claims_crash_site, 
                    "crash_hour": claims_crash_hour,
                    "reclaimed_amount": claims_reclaimed_amount,
                    "currency": claims_currency,
                    "claimed_status": claims_claimed_status,            
                                      
                } 
                  
                }
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
            respuesta.className = 'text-success';
            respuesta.innerHTML = datos
        } else if(result.status === 503){
            console.log('Error de autenticación.');
            respuesta.innerHTML = 'Error de autenticación.'
        } else if(result.status === 400){
            console.log('Este contrato ya se encuentra registrado.');
            respuesta.innerHTML = 'Este contrato ya se encuentra registrado.'
        } else {
            console.log('Hubo un error desconocido.');
            respuesta.innerHTML = 'Hubo un error desconocido.'    
        }
    
      } catch(error){
        console.log(error);
        respuesta.innerHTML = 'El server Middleware BlockChain no responde. [' + error + ']';
        }
  };
