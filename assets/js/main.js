// // SHOW MENU
// const showMenu = (toggleId, navbarId,bodyId) =>{
//     const toggle = document.getElementById(toggleId),
//     navbar = document.getElementById(navbarId),
//     bodypadding = document.getElementById(bodyId)

//     if(toggle && navbar){
//         toggle.addEventListener('click', ()=>{
//             // APARECER MENU
//             navbar.classList.toggle('show')
//             // ROTATE TOGGLE
//             toggle.classList.toggle('rotate')
//             // PADDING BODY
//             bodypadding.classList.toggle('expander')
//         })
//     }
// }
// showMenu('nav-toggle','navbar','body')

// // LINK ACTIVE COLOR
// const linkColor = document.querySelectorAll('.nav__link');   
// function colorLink(){
//     linkColor.forEach(l => l.classList.remove('active'));
//     this.classList.add('active');
// }

// linkColor.forEach(l => l.addEventListener('click', colorLink));

let navT = document.querySelectorAll('.nav__text')

navT.addEventListener('click' , () =>{
    navT.style.background = '#303749'  
    // `color: #bcfa02; border: none;`
})

var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    const righter = document.querySelector('.right-fas');
    const inPut = document.querySelector('.in-put');
    const iNput = inPut.input.value;

    righter.addEventListener('click', () =>{
        inPut.input.value = ''
    })


//     /*===== LOGIN SHOW and HIDDEN =====*/
// const signUp = document.getElementById('sign-up'),
// signIn = document.getElementById('sign-in'),
// loginIn = document.getElementById('login-in'),
// loginUp = document.getElementById('login-up')


// signUp.addEventListener('click', ()=>{
// // Remove classes first if they exist
// loginIn.classList.remove('block')
// loginUp.classList.remove('none')

// // Add classes
// loginIn.classList.toggle('none')
// loginUp.classList.toggle('block')
// })

// signIn.addEventListener('click', ()=>{
// // Remove classes first if they exist
// loginIn.classList.remove('none')
// loginUp.classList.remove('block')

// // Add classes
// loginIn.classList.toggle('block')
// loginUp.classList.toggle('none')
// })
