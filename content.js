//var images = document.getElementsByTagName('img');
//for (var i = 0, l = images.length; i < l; i++) {
  //images[i].src = 'https://static.wikia.nocookie.net/floppapedia-revamped/images/f/fe/Floppa_II.jpg';
//}

//var ogtxt = document.getElementsByTagName('p', 'h1', 'h2');
//for (var i = 0, l = ogtxt.length; i < l; i++) {

//var floppa = ogtxt[i].cloneNode(true);
//floppa.textContent = 'FLOPPA!!!! SUSSY';
//ogtxt[i].replaceWith(floppa);

//}

//replacetext v2 code by musiconstereo:
document.querySelectorAll("img").forEach((item) => {item.src = "https://static.wikia.nocookie.net/floppapedia-revamped/images/f/fe/Floppa_II.jpg";});
var node, iterator = document.createNodeIterator(document, NodeFilter.SHOW_ALL); 
while(node = iterator.nextNode()) { 
  if (node.nodeType === Node.TEXT_NODE) {
    if (!(["style", "script"].includes(node.parentElement.tagName.toLowerCase()))) {
      if (/[^\s]/.test(node.nodeValue)) {
        node.nodeValue = "FLOPPA!!!!! SUSSY BAKA ";
      }
    }
  }; 
} 

var lol = Math.round(Math.random());
console.log(lol)

if (lol == 0){
document.body.style.backgroundImage = "url('https://i1.sndcdn.com/avatars-grC0peyujyxZaqmO-U12e1g-t500x500.jpg')";
} else {
document.body.style.backgroundImage = "url('https://glitchy-scratch.js.org/Glitchy%20Scratch_files/2755634.png')";
}

