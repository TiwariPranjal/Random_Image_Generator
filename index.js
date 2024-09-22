const image=document.querySelector(".img-container")
const button=document.querySelector(".btn")

button.addEventListener('click',()=>{
    num=4
    updateImage()
})


function updateImage(){
    for(let i=0;i<num;i++){
        const newImage=document.createElement('img')
        newImage.src=`https://picsum.photos/300?random=8${Math.floor(Math.random()*1000)}`
        image.appendChild(newImage)
    }
  
}