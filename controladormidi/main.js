  

  // Enable WEBMIDI.js and trigger the onEnabled() function when ready
  WebMidi
    .enable({sysex:true})
    .then(onEnabled)
    .catch(err => alert(err));

    const listaInputs   = [];
    const listaOutputs   = [];

  // Function triggered when WEBMIDI.js is ready
   function  onEnabled() {




    //Display available MIDI input devices
    if (WebMidi.inputs.length < 1) {
      document.body.innerHTML+= "No device detected.";
    } else {
      WebMidi.inputs.forEach((device, index) => {
        //document.body.innerHTML+= `${index}: ${device.name} <br>`;
        document.getElementById('inputs').innerHTML += `${index}: ${device.name} <br>`;
        listaInputs.push( {idpc: index, name: device.name} );
      });

      WebMidi.outputs.forEach((device, index) => {
        //document.body.innerHTML+= `${index}: ${device.name} <br>`;
        document.getElementById('outputs').innerHTML += `${index}: ${device.name} <br>`;
        listaOutputs.push( {idpc: index, name: device.name} );
      });
      // WebMidi.inputs[0].addForwarder(WebMidi.outputs[1]); 

      // WebMidi.outputs[0].sendControlChange(0,87,1);
      // WebMidi.outputs[0].sendControlChange(32, 64,1);
      // WebMidi.outputs[0].sendProgramChange(118,1);


      


      //console.log('listaOutputs',listaOutputs);
      carregaLista('listaInstrumentosInput', listaInputs);
      carregaLista('listaInstrumentosOutput', listaOutputs);
      
    }

  }
  

  function PlayNota(){
    let dispositivoSelecionado = parseInt( getSelectedValue('listaInstrumentosOutput') );
    let output = WebMidi.outputs[dispositivoSelecionado];
    let channel = output.channels[1];
    channel.playNote("C3", {duration: 1000});
      
}

function setInstrumento(){
  let idInstrumento = getSelectedValue('listaInstrumentos');
  let dispositivoSelecionado = parseInt( getSelectedValue('listaInstrumentosOutput') );
  WebMidi.outputs[dispositivoSelecionado].sendControlChange(0,87,1);
  WebMidi.outputs[dispositivoSelecionado].sendControlChange(32, 64,1);
  WebMidi.outputs[dispositivoSelecionado].sendProgramChange(parseInt(idInstrumento)-1,1);
}

function carregaLista(listaId, itens){
  const lista = document.getElementById(listaId);

  itens.forEach(item => {
  const opcao = document.createElement('option');
  opcao.value = item.idpc;
  opcao.text = `${item.idpc} - ${item.name}`;
  lista.add(opcao);
  });
}

function getSelectedText(elementId) {
  var elt = document.getElementById(elementId);

  if (elt.selectedIndex == -1)
      return null;

  return elt.options[elt.selectedIndex].text;
}

function getSelectedValue(elementId) {
  var elt = document.getElementById(elementId);

  if (elt.selectedIndex == -1)
      return null;

  return elt.options[elt.selectedIndex].value;
}

// function listaInstrumentos(){
//   console.log('Qtd Instrumentos:', bankInstruments.length)
// }

// listaInstrumentos()

carregaLista('listaInstrumentos', bankInstruments);