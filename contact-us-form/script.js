const form=document.querySelector('form');
form.addEventListener('submit',function(e){ 
e.preventDefault();

const formData = new FormData(e.target);
    const formObject = {
        name: formData.get('first-name') + ' ' + formData.get('last-name'),
        email: formData.get('email'),
        phone: formData.get('phone-part-1') + formData.get('phone-part-2') + formData.get('phone-part-3'),
        subject: formData.get('subject'),
        message: formData.get('message').trim().replace(/\s+/g, ' ')
    };
})

