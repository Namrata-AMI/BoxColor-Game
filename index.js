document.addEventListener("DOMContentLoaded",()=>{


    const grid = document.getElementById("grid");

    const clickedcells = [];


    // create matrix
    for(let i=0; i<9; i++){
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.dataset.index = i;
        grid.appendChild(cell);



        cell.addEventListener("click",function(){
            if(!this.style.backgroundColor && clickedcells.length < 9){
                this.style.backgroundColor = "#00FF00";
                clickedcells.push(this);

                if(clickedcells.length === 9){
                    orangeColor();
                }
            }
        });
    }



    function orangeColor(){
        clickedcells.forEach((cells,index)=>{

            setTimeout(()=>{
                cells.style.backgroundColor = "#FFA500";
            }, index*500);

        })
    }


})