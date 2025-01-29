window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'creat'){

        var Name = document.getElementById("Creat_Name").value;
        console.log(Name);

        var ID = document.getElementById("Creat_ID").value;
        console.log(ID);

        var Gr = document.getElementById("Creat_GR").value;
        console.log(Gr);

        var Prise = document.getElementById("Creat_Prise").value;
        console.log(Prise);

        var F = document.getElementById("Creat_F").value;
        console.log(F);


      

        let Send = {
            "id": ID,
            "title": Name,
            "weight": Gr,
            "price": Prise,
            "imgSrc": F
        };
        
        
        import Json from './products.json';
        const fs = require("fs");
        Json.push(Send);
        fs.writeFileSync("./products.json", JSON.stringify(Json))
    }
});