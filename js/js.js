// // contact section

// function sendToWhatsApp() {
//     var name = document.getElementById("Name").value;
//     var email = document.getElementById("Email").value;
//     var phone = document.getElementById("Phone").value;
//     var message = document.getElementById("message").value;
    
//     var whatsappNumber = "201211346257"; 
    
//     var text = "New Contact Message:%0A"
//     + "Name: " + name + "%0A"
//     + "Email: " + email + "%0A"
//     + "Phone: " + phone + "%0A"
//     + "Message: " + message;
    
//     var url = "https://wa.me/" + whatsappNumber + "?text=" + text;
    
//     window.open(url, "_blank");
// }

// msg



function sendToWhatsApp() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("Phone").value;
  var message = document.getElementById("message").value;
  
  // تحقق من الحقول
  if (name === "" || email === "" || phone === "") {
    document.getElementById("none-msg").style.display = "block";
    return; 
  }
  
  var whatsappNumber = "201211346257"; 
  
  var text = "New Contact Message:%0A"
  + "Name: " + name + "%0A"
  + "Email: " + email + "%0A"
  + "Phone: " + phone + "%0A"
  + "Message: " + message;
  
  var url = "https://wa.me/" + whatsappNumber + "?text=" + text;
  
  window.open(url, "_blank");
}

function closeClick() {
 document.getElementById("none-msg").style.display="none";   
}


// loader
window.onload = function() {
    document.getElementById("loader-wrapper").style.display = "none";
};
// loader