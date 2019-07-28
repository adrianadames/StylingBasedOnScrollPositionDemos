let outerContainer = document.querySelector('.outer-container');
console.log('outerContainer: ', outerContainer);

let view1 = document.querySelector('.view1');
let view2 = document.querySelector('.view2');
let view3 = document.querySelector('.view3');
let view4 = document.querySelector('.view4');
let view5 = document.querySelector('.view5');
let view6 = document.querySelector('.view6');
let view7 = document.querySelector('.view7');


let view1Measure = document.querySelectorAll('.view1-measure');
console.log('view1Measure: ', view1Measure);

let view1Header1 = document.querySelector('.view1-header1');
console.log('view1Header1: ', view1Header1);

let view1Header2 = document.querySelector('.view1-header2');
console.log('view1Header2: ', view1Header2);

let view1Header3 = document.querySelector('.view1-header3');
console.log('view1Header3: ', view1Header3);


let scrollTop1 = window.pageYOffset;
console.log('scrollTop1: ', scrollTop1);

let scrollTop2=document.documentElement.scrollTop;
console.log('scrollTop2: ', scrollTop2);



let body = document.querySelector('body');
console.log('body: ', body);

let vpHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log('vpHeight: ', vpHeight);

let v1Height = 2360;
let v2Height = 2175;
let v3Height = 2970;
let v4Height = 9410;
let v5Height = 3200;
let v6Height = 1565;
let v7Height = 675;


window.addEventListener('scroll', () => {
    setTimeout(200)


    for (let i = 0; i < view1Measure.length; i++) {
        view1Measure[i].textContent = '(window.pageYOffset: ' + window.pageYOffset +'px)';
    }



    view1Header1.style.transform =`translateY(${-window.pageYOffset}px)`;
    view1Header2.style.transform =`translateX(${window.pageYOffset}px)`;
    


    if (window.pageYOffset <= v1Height) {
        view2.style.transform = `translateY(${v1Height-window.pageYOffset}px)`;
    }
    if (window.pageYOffset >= v1Height && window.pageYOffset <= v1Height + v2Height) {
        view2.style.top =0;
        view2.style.transform = `translateY(0px)`;
    }
    console.log('amountBeforeView2Appears: ', amountBeforeView2Appears(vpHeight,v1Height));
    if (amountBeforeView2Appears(vpHeight,v1Height) <= 0) {
        console.log('start scrolling view 1 up');
        view1.style.transform = `translateY(${amountBeforeView2Appears(vpHeight,v1Height)}px)`;
    } else {
        view1.style.top =0;
        view1.style.transform = `translateY(0px)`;
    }



    if (window.pageYOffset <= v1Height + v2Height) {
        view3.style.transform = `translateY(${v1Height + v2Height-window.pageYOffset}px)`;
    }
    if (window.pageYOffset >= v1Height + v2Height && window.pageYOffset <= v1Height + v2Height+ v3Height) {
        view3.style.top =0;
        view3.style.transform = `translateY(0px)`;
    }
    console.log('amountBeforeView3Appears: ', amountBeforeView3Appears(vpHeight,v2Height));
    if (amountBeforeView3Appears(vpHeight,v2Height) <= 0) {
        console.log('start scrolling view 2 up');
        view2.style.transform = `translateY(${amountBeforeView3Appears(vpHeight,v2Height)}px)`;
    } 



    if (window.pageYOffset <= v1Height + v2Height+v3Height) {
        view4.style.transform = `translateY(${v1Height + v2Height+v3Height-window.pageYOffset}px)`;
    }
    if (window.pageYOffset >= v1Height + v2Height+v3Height && window.pageYOffset <= v1Height + v2Height+ v3Height+v4Height) {
        view4.style.top =0;
        view4.style.transform = `translateY(0px)`;
    }
    console.log('amountBeforeView4Appears: ', amountBeforeView4Appears(vpHeight,v3Height));
    if (amountBeforeView4Appears(vpHeight,v3Height) <= 0) {
        console.log('start scrolling view 3 up');
        
        view3.style.transform = `translateY(${amountBeforeView4Appears(vpHeight,v3Height)}px)`;
    }



    if (window.pageYOffset <= v1Height + v2Height+v3Height+v4Height) {
        view5.style.transform = `translateY(${v1Height + v2Height+v3Height+v4Height-window.pageYOffset}px)`;
        console.log(`view5 has translated up ${window.pageYOffset}`)
    }
    if (window.pageYOffset >= v1Height + v2Height+v3Height+v4Height && window.pageYOffset <= v1Height + v2Height+ v3Height+v4Height+v5Height) {
        view5.style.top =0;
        view5.style.transform = `translateY(0px)`;
    }
    console.log('amountBeforeView5Appears: ', amountBeforeView5Appears(vpHeight,v4Height));
    if (amountBeforeView5Appears(vpHeight,v4Height) <= 0) {
        console.log('start scrolling view 4 up');
        
        view4.style.transform = `translateY(${amountBeforeView5Appears(vpHeight,v4Height)}px)`;
    }



    if (window.pageYOffset <= v1Height + v2Height+v3Height+v4Height+v5Height) {
        view6.style.transform = `translateY(${v1Height + v2Height+v3Height+v4Height+v5Height-window.pageYOffset}px)`;
    }
    if (window.pageYOffset >= v1Height + v2Height+v3Height+v4Height+v5Height && window.pageYOffset <= v1Height + v2Height+ v3Height+v4Height+v5Height+v6Height) {
        view6.style.top =0;
        view6.style.transform = `translateY(0px)`;
    }
    console.log('amountBeforeView6Appears: ', amountBeforeView6Appears(vpHeight,v5Height));
    if (amountBeforeView6Appears(vpHeight,v5Height) <= 0) {
        console.log('start scrolling view 5 up');
        
        view5.style.transform = `translateY(${amountBeforeView6Appears(vpHeight,v5Height)}px)`;
    }



    if (window.pageYOffset <= v1Height + v2Height+v3Height+v4Height+v5Height+v6Height) {
        view7.style.transform = `translateY(${v1Height + v2Height+v3Height+v4Height+v5Height+v6Height-window.pageYOffset}px)`;
    }
    console.log('amountBeforeView7Appears: ', amountBeforeView7Appears(vpHeight,v6Height));
    if (amountBeforeView7Appears(vpHeight,v6Height) <= 0) {
        console.log('start scrolling view 6 up');
        
        view6.style.transform = `translateY(${amountBeforeView7Appears(vpHeight,v6Height)}px)`;
    }
})



function amountBeforeView2Appears(viewportHeight,currentViewHeight) {
    let totalAmount = currentViewHeight - viewportHeight;
    let remainingAmount = totalAmount - window.pageYOffset;
    return remainingAmount;
}

function amountBeforeView3Appears(viewportHeight,currentViewHeight) {
    let totalAmount = v1Height+currentViewHeight - viewportHeight;
    let remainingAmount = totalAmount - window.pageYOffset;
    return remainingAmount;
}

function amountBeforeView4Appears(viewportHeight,currentViewHeight) {
    let totalAmount = v1Height+v2Height+currentViewHeight - viewportHeight;
    let remainingAmount = totalAmount - window.pageYOffset;
    return remainingAmount;
}

function amountBeforeView5Appears(viewportHeight,currentViewHeight) {
    let totalAmount = v1Height+v2Height+v3Height+currentViewHeight - viewportHeight;
    let remainingAmount = totalAmount - window.pageYOffset;
    return remainingAmount;
}

function amountBeforeView6Appears(viewportHeight,currentViewHeight) {
    let totalAmount = v1Height+v2Height+v3Height+v4Height+currentViewHeight - viewportHeight;
    let remainingAmount = totalAmount - window.pageYOffset;
    return remainingAmount;
}

function amountBeforeView7Appears(viewportHeight,currentViewHeight) {
    let totalAmount = v1Height+v2Height+v3Height+v4Height+v5Height+currentViewHeight - viewportHeight;
    let remainingAmount = totalAmount - window.pageYOffset;
    return remainingAmount;
}


