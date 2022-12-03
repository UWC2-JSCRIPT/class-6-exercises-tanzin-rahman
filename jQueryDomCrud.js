
$(document).ready(function X(){
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>

    const main = $('main')
    const a = $('<a>');
    a.attr('id', 'cta');
    a.text('Buy Now!');
    main.append = a;

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    
    a[0].click(function(){$(this).text('Added to cart')})   

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $('img');
    const imgColor = $img.data('color') 
    console.log(imgColor);
    
    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
        
    const $listItems = $('li')
    $listItems[2].className = "highlight"
    
    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")

    const $paras = $('p')
    const lastP = $paras[$paras.length-1]
    lastP.remove();
    
    
});
   
 /*   

$(document).ready (function X(params) {
    
    //const $listItems = document.querySelectorAll('li');
    

    listItems
    const $img = $('img')
    const imgColor = $img.data('color')
    console.log(imgColor)

    const $h1 = $('h1')
    console.log($h1.text("Hot Car for sale"))_
    $h1.html(<b>Something</b>)

    const $h2 = $("<h2>") //CREATES AN ELEMENT
    $h2.text(`Here's that h2`)
    const $main = $('main')
    $main.prepand = ($h2)
    $main.append = ($h2)

    $('img').remove

    const $cta = $('<a>')
    const $a = $('<a>')
    $a.attr('id','cta')
    $a.text('Buy Now')
    $('main').append($a)

    
    const $paras = $('p')
    const lastP = $paras[$paras.length-1]
    lastP.remove()  
    $('p').remove()

    const $aTextNode = $("Buy Now!");
cta.appendChild(aTextNode);
const main = document.querySelector('main');
const pElem = document.querySelector('p')
main.appendChild(cta);

    const $href = $("h2") // REtrieves an element 
});


// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
*/