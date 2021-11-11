const passwordField = document.querySelector('.password')
const visibility = document.querySelector('.visibility')
const visibility_off = document.querySelector('.visibility_off')

//show the password
visibility.addEventListener('click',()=>{
    passwordField.type = 'text'
    visibility_off.style.display = 'block'
    visibility.style.display = 'none'
})

//hide the password
visibility_off.addEventListener('click',()=>{
    passwordField.type = 'password'
    visibility_off.style.display = 'none'
    visibility.style.display = 'block'
})