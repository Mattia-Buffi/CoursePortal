// let cardPin = document.querySelectorAll('div.courseBox');
// for (const iterator of cardPin) {
//     iterator.classList.add('shadow-sm');
//     iterator.addEventListener('mouseenter',(event)=>{
//         event.target.classList.remove('shadow-sm');
//         event.target.classList.add('shadow-lg'); 
//     console.log(event.target);  })
//     iterator.addEventListener('mouseout',(event)=>{
//         event.target.classList.remove('shadow-lg');
//         event.target.classList.add('shadow-sm');
//     })
// }

// fa-bookmark class i da prender per l'hover
let bookmarkPin = document.querySelectorAll('div.userBookmark');
for (const iterator of bookmarkPin) {
    iterator.addEventListener('mouseenter',(event)=>{
        //assegno la classe con l'essetto grafico
        event.target.classList.add('overBookmark');
    })
    iterator.addEventListener('mouseout',(event)=>{
        event.target.classList.remove('overBookmark');
    })
    iterator.addEventListener('click',(event)=>{
        event.target.setAttribute('data-prefix','fas');
        event.target.parentNode.setAttribute('data-prefix','far');})  
    }

