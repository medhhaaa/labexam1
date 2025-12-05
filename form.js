document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('myForm');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const username=document.getElementById('username');

    const emailFeedback=document.getElementById('emailFeedback');
    const passwordFeedback=document.getElementById('passwordFeedback');
    const usernameFeedback=document.getElementById('usernameFeedback');

    email.addEventListener('input',()=>{
        if(email.validity.valid){
            emailFeedback.textContent='valid email'
            emailFeedback.className='valid'
        }else{
            emailFeedback.textContent='pls enter valid'
            emailFeedback.className='error'
        }
    });

    password.addEventListener('input',()=>{
        if(password.value.length>=8){
            passwordFeedback.textContent='proper pass'
            passwordFeedback.className='valid'
        }else{
            passwordFeedback.textContent='pls enter proper pass'
            passwordFeedback.className='error'
        }
    });
     username.addEventListener('input',()=>{
        if(username.value.length>=3){
            usernameFeedback.textContent='proper username'
            usernameFeedback.className='valid'
        }else{
            usernameFeedback.textContent='pls enter proper username'
            usernameFeedback.className='error'
        }
    });
    form.addEventListener('submit',(event)=>{
        if(!email.validity.valid||password.value.length<8||username.value.length<3){
            event.preventDefault();
            alert('pls fill all the req details');
        }
    });

});