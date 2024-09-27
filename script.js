//your JS code here. If required.
let squares = document.querySelectorAll(".square");
for(let t of squares){
    t.addEventListener("mouseover",(e)=>{
        for(let t of squares){
            if(e.target !=t){
                t.style.backgroundColor = "#6F4E37"
            }
        }
    })
    t.addEventListener("mouseout",(e)=>{
        for(let t of squares){
            if(e.target !=t){
                t.style.backgroundColor = "#E6E6FA"
            }
        }
    })
}