console.log('Javascript up and running!');
window.onload = function() {
    const button = document.querySelector('button');

    button.onclick = function() {
        //alert('button clicked');
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        const color = `rgb(${r}, ${g}, ${b})`;
        document.body.style.backgroundColor = color;
    }

}