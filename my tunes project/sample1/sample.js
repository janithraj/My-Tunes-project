


// let int=[inpt1, inpt2, inpt3, inpt4, inpt5]

// console.log(int);

// function submit(){

//     for(i=)

//  }

function submit(){

    let inpt1= document.getElementById("inpt1");
let inpt2= document.getElementById("inpt2");
let inpt3= document.getElementById("inpt3");
let inpt4= document.getElementById("inpt4");
let inpt5= document.getElementById("inpt5");
let inpt6= document.getElementById("inpt6");
let footer= document.getElementById("footer");
let container= document.getElementById("continor1");


  let input1=inpt1.value;
  let input2=inpt2.value;
  let input3=inpt3.value;
  let input4=inpt4.value;
  let input5=inpt5.value;
  let input6=inpt6.value;

  let small1=document.getElementsByTagName("small")[0];
  let small2=document.getElementsByTagName("small")[1];
  let small3=document.getElementsByTagName("small")[2];
  let small4=document.getElementsByTagName("small")[3];
  let small5=document.getElementsByTagName("small")[4];
  let small6=document.getElementsByTagName("small")[5];
  let small7=document.getElementsByTagName("small")[6];


  if(input1===""){

      inpt1.style.borderColor="red";
      small1.style.visibility="visible";


  }
  else{
    inpt1.style.borderColor="green";
    small1.style.visibility="hidden";
  }


  
  if(input2===""){

      inpt2.style.borderColor="red";
          small2.style.visibility="visible";


  }
  else{
    inpt2.style.borderColor="green";
    small2.style.visibility="hidden";
  }


  if(input3===""){

    inpt3.style.borderColor="red";
    small3.style.visibility="visible"


}
else{
  inpt3.style.borderColor="green";
  small3.style.visibility="hidden";
}


if(input4===""){

    inpt4.style.borderColor="red";
    small4.style.visibility="visible"


}

else if(input4 !== input3){

    inpt4.style.borderColor="red";
    small4.style.visibility="visible"


}
else{
  inpt4.style.borderColor="green";
  small4.style.visibility="hidden";
}

if(input5===""){

    inpt5.style.borderColor="red";
    small5.style.visibility="visible"


}
else{
  inpt5.style.borderColor="green";
  small5.style.visibility="hidden";
}

if(input6===""){

    inpt6.style.borderColor="red";
    small6.style.visibility="visible"


}
else{
  inpt6.style.borderColor="green";
  small6.style.visibility="hidden";
footer.style.display="block";
container.style.opacity="0.4";

  
}

}
function btn1(){



}

function reset(){

   window.location.reload()

}