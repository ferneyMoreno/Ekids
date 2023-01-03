
const name="Prohor";
const age=13;
const loveCats=true;
const study=" 45 Poland school";
let country= "Belarus";
console.log(10+20);
console.log("my name is " + name);
console.log(typeof name);
console.log(typeof age);
console.log(typeof loveCats);
  
console.log( " HELLO my name is " + name + " and im " + age + " years old and i from " + country + "And i love cats");


const winterDegrees=-3;
const summerDegrees=29;
const gloves="gloves";
const coat="coat";
const isSnowing=true;

if (isSnowing===true){
     console.log("today is snowing a lot and I need to wear my " + gloves +" and my " + coat +
     ", it is " + winterDegrees )
     console.log(typeof winterDegrees);
     console.log(typeof summerDegrees);
     console.log(gloves);
     console.log(coat);
     console.log(isSnowing);
} else {
     alert('it is summer, I do not need to wear my' + gloves + ' and ' + coat + ', it is '+ summerDegrees+' degrees')
}

const PotterBtn = document.querySelector('.Potter-btn ');
const VonkaBtn = document.querySelector('.Vonka-btn ');
const PoterGallery = document.querySelector('.Potter-gallery');
const VonkaGallery = document.querySelector('.Vonka-gallery');
PotterBtn.addEventListener('click', function(){
     if (!PoterGallery.className.includes('show-gallery')){
          VonkaGallery.classList.remove('show-gallery');
          PoterGallery.classList.add('show-gallery');
     }
})
VonkaBtn.addEventListener('click', function(){
     if (!VonkaGallery.className.includes('show-gallery')){
          PoterGallery.classList.remove('show-gallery');
          VonkaGallery.classList.add('show-gallery');
     }
})



// string;
// number;
// boolean;
//null;
//underfined;
//BigInt;