let outerContainer = document.querySelector('.outer-container');
console.log('outerContainer: ', outerContainer);

let view1 = document.querySelector('.view1');
console.log('view1: ', view1);

let view1Header1 = document.querySelector('.view1-header1');
console.log('view1Header1: ', view1Header1);

let view1Header2 = document.querySelector('.view1-header2');
console.log('view1Header2: ', view1Header2);

let view1Header3 = document.querySelector('.view1-header3');
console.log('view1Header3: ', view1Header3);

// let view1HeaderPosition = document.querySelector('.view1-header-position');
// console.log('view1HeaderPosition: ', view1HeaderPosition);

// view1Header.addEventListener('click', () => {
//     console.log('beep')
//     view1Header.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,250,0,0,1)';
// })

let view2 = document.querySelector('.view2');
console.log('view2: ', view2);


let scrollTop1 = window.pageYOffset;
console.log('scrollTop1: ', scrollTop1);

let scrollTop2=document.documentElement.scrollTop;
console.log('scrollTop2: ', scrollTop2);



let body = document.querySelector('body');
console.log('body: ', body);

window.addEventListener('scroll', () => {
    setTimeout(500)
    console.log('beep')
    view1Header1.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,-${window.pageYOffset},0,1)`;
    view1Header2.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${window.pageYOffset},0,0,1)`;

    // view2.style.transform = `translateY(${2360-window.pageYOffset}) translateZ(0px)`;
    view2.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${window.pageYOffset},0,1)`;
})

// window.addEventListener('wheel', () => {
//     console.log('wheel')
//     // view1HeaderPosition.textContent = 'window.pageYOffset: ' + window.pageYOffset;
//     // view1Header.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${window.pageYOffset},0,0,1)`;
//     view2.style.transform = `translateY(${2360-window.pageYOffset})`;
//     console.log('view2.style.transform: ', `translateY(${2360-window.pageYOffset})`)
// })




