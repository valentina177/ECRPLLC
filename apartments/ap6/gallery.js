var num = 0;

//Replace with your own values and add additional lines for more images
imgArray = [
  ['images/1.png'],
  ['images/2.png'],
  ['images/3.png'],
  ['images/4.png'],
  ['images/5.png'],
  ['images/6.png'],
  ['images/7.png'],
  ['images/8.png'],
  ['images/9.png'],
  ['images/10.png'],
  
]

//Function called by clicking on 'next' link
//Replace id name with the id name you gave to the img
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  document.getElementById('slide_show').src=imgArray[num];
}

//Function called by clicking on 'previous' link
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  document.getElementById('slide_show').src=imgArray[num];
}
