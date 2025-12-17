// JavaScript for sending wishes via WhatsApp
alert('Script loaded');
const buttons = document.querySelectorAll('.btn button');
alert('Found ' + buttons.length + ' buttons');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Button clicked');
        const textarea = document.getElementById('wishme');
        if (textarea) {
            const message = textarea.value.trim();
            if (message) {
                alert('Your message: ' + message); // Temporary alert for testing
                // const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
                // window.open(url, '_blank');
            } else {
                alert('Please write a wish message first!');
            }
        }
    });
});</content>
<parameter name="filePath">c:\Users\mawia\Desktop\literate_happiness\script.js