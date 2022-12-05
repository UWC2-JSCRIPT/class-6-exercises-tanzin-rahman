
$(document).ready(function X(){

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $('img');
    const imgColor = $img.data('color') 
    console.log(imgColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
        
    const $listItems = $('li')
    $listItems[2].className = "highlight"
    
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>

    const main = $('main')
    const a = $('<a>');
    a.attr('id', 'cta');
    a.text('Buy Now!');
    main.append(a);
    
    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")

    const $paras = $('p')
    const lastP = $paras[$paras.length-1]
    lastP.remove();
    
    
    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"

    a.click(function(){
        const main = $('main')
        const text = $(document.createTextNode('Added to cart'));
        main.append(text);
        a.remove()
    })    
});