//Taken Text
let text = "Hello, World!";

async function getData(text) {
    //API call
    const response = await fetch("https://chart.apis.google.com/chart?cht=qr&chs=500x500&chl=" + text);
    const data = await response.blob();
    
    //Create the QR image
    let img = document.createElement('img')
    img.id = "QRimage"
    img.src = URL.createObjectURL(data);
    
    //Add it to the website
    document.getElementById("imagePlace").appendChild(img);
  }

//Called when we need to generate a QR code
function generate(){
  if(document.getElementById("QRimage")){
    let img = document.getElementById('QRimage');
    img.parentElement.removeChild(img)
  }
  
  text = document.getElementById("textBox").value;
  getData(text);
}

//Generate when the website loads
generate();