window.addEventListener('click', function(event){



    if (event.target.dataset.action === 'plus'){

        const counter = event.target.closest(".counter-wrapper");
        const count = counter.querySelector("[data-counter]");
        count.innerText = ++count.innerText;


    }

    if (event.target.dataset.action === 'minus'){
        const counter = event.target.closest(".counter-wrapper");
        const count = counter.querySelector("[data-counter]");
   

        if (parseInt(count.innerText) >1)
        {count.innerText = --count.innerText;}

    }


    if (event.target.dataset.action === 'burger'){
        console.log("burger-click");
        var obj = document.getElementById('bugrer-menu'); 
        if (obj.style.display != "block") {
             
            obj.style.display = "block"; //Показываем элемент
        }
            else obj.style.display = "none"; //Скрываем элемент
        }




});