export const menu = () => {
  
    const content = document.querySelector(".content")
    content.textContent = "";
    const h1 = document.createElement("h1");
    h1.id  = "menu-title";
    h1.textContent = "Falcon's Fabolous Taverna Menu"

    const p  = document.createElement("p");
    p.id= "menu-description";
    p.textContent = "We have our menu";
    content.append(h1, p);
  
}