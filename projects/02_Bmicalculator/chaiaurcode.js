 const form=document.querySelector(`form`)
//  this use case give an empty value
//  const height=parseInt(document.querySelector(`#height`).value)
 form.addEventListener(`submit`,function(e) {
     e.preventDefault()
     const height=parseInt(document.querySelector(`#height`).value)
     const weight=parseInt(document.querySelector(`#weight`).value)
     const results=document.querySelector(`#results`)

     if (height=== '' || height<0 || isNaN(height) ) {
          results.innerHTML=`please give a valid height${height}`
     }
     else if (weight=== '' || weight<0 || isNaN(weight) ) {
          results.innerHTML=`please give a valid height${weight}`
     }
    else
    {
     const bmi=(weight/((height*height)/10000).toFixed(2))
     //show result
     // results.innerHTML=`<span>${bmi}</span>`
     results.innerHTML=`<span>${bmi}</span>`
    }
    if (bmi<=18.6) {
          results.innerHTML(`underweigth`)
    }
    else if (bmi>18.6 || bmi<=24.9 ) {
          document.writeln(`normal range`);
    } else {
        document.writeln(`Overwright`);
    }
//     results.innerHTML=`<span>${bmi}</span>`

 })