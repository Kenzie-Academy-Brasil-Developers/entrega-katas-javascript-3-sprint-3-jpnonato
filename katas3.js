const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showresults (x){
   let sec = document.getElementById("show")
   let parag = document.createElement("p")
   let content = document.createTextNode(x)
   
   sec.appendChild(parag)
   parag.appendChild(content)
}



function kata1() {
    let y =[]
    for (i =1; i <= 25; i++){
        y.push(i) 
    }
    return showresults(y)
}

kata1()




function kata2() {
    let y =[]
    for (i =25; i >= 1; i--){
        y.push(i) 
    }
    return showresults(y)
}

kata2()




function kata3() {
    let y =[]
    for (i =-1; i >= -25; i--){
        y.push(i) 
    }
    return showresults(y)
}

kata3()




function kata4() {
    let y =[]
    for (i =-25; i <= -1; i++){
        y.push(i) 
    }
    return showresults(y)
}

kata4()




function kata5() {
    let y =[]
    for (i =25; i >= -25; i = i-2){
        y.push(i) 
    }
    return showresults(y)
}

kata5 ()



function kata6() {
    let y =[]
    for (i =3; i < 100; i = i+3){
        y.push(i) 
    }
    return showresults(y)
}

kata6()



function kata7() {
    let y =[]
    for (i =7; i < 100; i = i+7){
        y.push(i) 
    }
    return showresults(y)
}

kata7()    



function kata8() {
    let y =[]
    for (i =100; i >= 1; i = i-1){
        if (i %3 === 0 ){
           y.push(i)
        }else if (i %7 == 0 ){
           y.push(i)
        }   
    }
    return showresults(y)
}

kata8()



function kata9() {
    let y = []
    for (i=1; i <= 100; i++){
        if(i%5 === 0 && i%2 !== 0){
        y.push(i)
        }
    }
    return showresults(y)
}

kata9()



function kata10() {
    let y =[]
    for (i = 0; i < 21; i++){
        y.push(sampleArray[i]) 
    }
    return showresults(y)
}

kata10()



function kata11() {
    let y =[]
    for (i = 0; i < 21; i++){
        if (sampleArray[i] %2 === 0){
          y.push(sampleArray[i])
        } 
    }
    return showresults(y)
}

kata11()



function kata12() {
    let y =[]
    for (i = 0; i < 21; i++){
        if (sampleArray[i] %2 !== 0){
          y.push(sampleArray[i])
        } 
    }
    return showresults(y)
}

kata12()



function kata13() {
    let y =[]
    for (i = 0; i < 21; i++){
        if (sampleArray[i] %8 === 0){
          y.push(sampleArray[i])
        } 
    }
    return showresults(y)
}

kata13()



function kata14() {
    let y =[]
    for (i = 0; i < 20; i++){
        y.push(sampleArray[i]*sampleArray[i]) 
    }
    return showresults(y)
}

kata14()



function kata15() {
    let y = 0
    for (i = 0; i <= 20; i++){
        y += i
    }
    return showresults(y)
}

kata15()



function kata16() {
    let y = 0
    for (i = 0; i < 20; i++){
        y += sampleArray[i]
    }
    return showresults(y)
}

kata16()



function kata17() {
    let y = []
    for (i = 0; i < 20; i++){
       if(sampleArray[i] <= 20){
           y.push(sampleArray[i]) 
        }
    }
    return showresults(y)
}

kata17()



function kata18() {
    let y = []
    for (i = 0; i < 20; i++){
       if(sampleArray[i] >= 940){
           y.push(sampleArray[i]) 
        }
    }
    return showresults(y)
}

kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
