//ID contrato
function cambioContrato(str) {
  console.log('cambioContrato');
  var elem = document.getElementById('contract_contract_id');
  auxC = document.getElementById('contract_contract_number').value;
  elem.value = auxC != '' ?  "C" + auxC : '';
}
    
// ID poliza
function cambioPoliza(str) {
    console.log('cambioPoliza');
  var elem = document.getElementById('policy_policy_id');
  p_contract = document.getElementById('policy_contract_number').value;
  p_policy = document.getElementById('policy_policy_number').value;

  elem.value = "C" + p_contract + "P" +  p_policy;
    
}

// ID endoso
function cambioEndoso(str) {
    console.log('cambioEndoso');
    var elem = document.getElementById('endorsement_endorsement_id');
    e_contract = document.getElementById('policy_contract_number').value;
    e_policy = document.getElementById('policy_policy_number').value;
    e_endorsement = document.getElementById('policy_endorsement_number').value; 

  elem.value = "C" + e_contract + "P" + e_policy + "E" + e_endorsement;
}

// ID siniestro
function cambioSiniestro(str) {
  console.log('cambioSiniestro');
  var elem = document.getElementById('claims_claims_id');
  s_contract = document.getElementById('claims_contract_number').value;
  s_policy = document.getElementById('claims_policy_number').value;
  s_claim = document.getElementById('claims_claim_number').value;
  elem.value = "C" + s_contract + "P" + s_policy + "S" + s_claim;
  

}



