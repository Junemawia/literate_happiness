// JavaScript for sending wishes via WhatsApp
const buttons = document.querySelectorAll('.btn button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const textarea = document.getElementById('wishme');
        if (textarea) {
            const message = textarea.value.trim();
            if (message) {
                const url = `https://wa.me/254706564588?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            } else {
                alert('Please write a wish message first!');
            }
        }
    });
});</content>
<parameter name="filePath">c:\Users\mawia\Desktop\literate_happiness\script.js