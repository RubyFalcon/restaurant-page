export const  homePage = () => {
    console.log("homepage was run");
    
    const content = document.querySelector(".content");
    const h1 = document.createElement("h1");
    h1.id  = "restaurant-title";
    h1.textContent = "Falcon's Fabolous Taverna"

    const p  = document.createElement("p");
    p.id= "restaurant-description";
    p.textContent = "Welcome to Falcon's Fabolous Taverna, opened in the 80s in Holborn, a staple of Greek quisine in London";
    content.append(h1, p);
  

}