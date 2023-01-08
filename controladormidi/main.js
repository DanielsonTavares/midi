  // Enable WEBMIDI.js and trigger the onEnabled() function when ready
  WebMidi
    .enable({sysex:true})
    .then(onEnabled)
    .catch(err => alert(err));

  // Function triggered when WEBMIDI.js is ready
   function  onEnabled() {




    //Display available MIDI input devices
    if (WebMidi.inputs.length < 1) {
      document.body.innerHTML+= "No device detected.";
    } else {
      WebMidi.inputs.forEach((device, index) => {
        //document.body.innerHTML+= `${index}: ${device.name} <br>`;
        document.getElementById('nomeDispositivos').innerHTML += `${index}: ${device.name} <br>`;
      });

      // WebMidi.inputs[0].addForwarder(WebMidi.outputs[1]); 

      WebMidi.outputs[0].sendControlChange(0,87,1);
      WebMidi.outputs[0].sendControlChange(32, 64,1);
      WebMidi.outputs[0].sendProgramChange(10,1);
      
    }

  }
  

  function PlayNota(){
    let output = WebMidi.outputs[0];
    let channel = output.channels[1];
    channel.playNote("C3", {duration: 1000});
      
}