
const MyDavidFamily = [
    {
      name: "John",
      children: ["Ali","Mohsin","Alex","Tajwar"]
  },
    {
      name: "Alx",
      children: ["Ayaz","Faizan","Kareem","Sajjad"]
  },
    {
      name: "Cendrella",
      children: ["Michelle","Sarah","Shireen","Sajjad"]
  }
  ];
  
  
  let h1 = document.createElement("h1");
  h1.innerHTML = "Mr David";
  h1.style.fontSize = "40px";
  document.body.append(h1);
  
  let ul = document.createElement("ul");
  document.body.append(ul);
  
  
  MyDavidFamily.forEach(family => {
       let li = document.createElement("li");
       li.style.marginTop = "40px"    
       li.innerHTML = family.name;
       ul.appendChild(li);
       let inul = document.createElement("ul");
       li.appendChild(inul);
       
      for (let a = 0; a < 4; a++) { 
       inli = document.createElement("li");
       inli.innerHTML = family.children[a];
       inul.appendChild(inli)
      }
        });