var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];


//   menuLinks.forEach(function(link){



 
  //   console.log(topMenuEl)
    
  //   var anchors = document.createElement('a');
  //   console.log(anchors);
  //   anchors.setAttribute("href","value")
  //   for(let i=0; i<menuLinks; i++){
  //     //   anchors.href = menuLinks[i].href
  //     //   anchors.getAttribute(menuLinks[i].href)
  //     const arr=[];
  //     arr[i]=menuLinks[i].href;
      
  //   }
  //   console.log(arr)
//   })
// menuLinks.forEach(function(link){}

  // document.createELement(a);   
  
  // link.setAttribute(kora,caleu)
//     for(let i=0; i<menuLinks.length;i++){
//         const href= menuLinks[i].href;
//         const attr = menuLinks.getAttribute('href');
//         console.log(href)
//         anchor.setAttribute("href",href)
//                 anchor.setAttribute("href")
// var result = anchor.setAttribute(`"href,${href}`)
//         console.log(anchor);
//         console.log(result)
  
// })
// console.log(menulinks)

// for (let i=0; i<menuLinks.length; i++){
//     menuLinks[0].setAttribute(`href,${menuLinks[0].href}` )
//     console.log(menuLinks)
// }





const mainEl = document.querySelector("main");
mainEl.style.backgroundColor ='var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add('flex-ctr');
// console.log(mainEl)

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height='100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around');

menuLinks.forEach(function(link){
let element = document.createElement('a');
element.setAttribute('href',link.href);
element.textContent = link.text;
topMenuEl.appendChild(element)
})






    // menuLinks.forEach(link => {
    //     let newA = document.createElement(‘a’);
    //      newA.setAttribute(‘href’, 'link.href');
    //      newA.textContent = link.text;
    //      topMenuEl.appendChild(newA);
    //   });
    //   console.log(topMenuEl)
      
    //   var anchors = document.createElement('a');
    //   console.log(anchors);
    //   anchors.setAttribute("href","value")
    //   for(let i=0; i<menuLinks; i++){
    //     //   anchors.href = menuLinks[i].href
    //     //   anchors.getAttribute(menuLinks[i].href)
    //     const arr=[];
    //     arr[i]=menuLinks[i].href;
        
    //   }
    //   console.log(arr)
//   })
// menuLinks.forEach(function(link){}

    // document.createELement(a);   
    
    // link.setAttribute(kora,caleu)
//     for(let i=0; i<menuLinks.length;i++){
//         const href= menuLinks[i].href;
//         const attr = menuLinks.getAttribute('href');
//         console.log(href)
//         anchor.setAttribute("href",href)
//                 anchor.setAttribute("href")
// var result = anchor.setAttribute(`"href,${href}`)
//         console.log(anchor);
//         console.log(result)
    
// })
// console.log(menulinks)

// for (let i=0; i<menuLinks.length; i++){
//     menuLinks[0].setAttribute(`href,${menuLinks[0].href}` )
//     console.log(menuLinks)
// }






