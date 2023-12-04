const btns = document.querySelectorAll('.btn');
const signInLi = document.querySelector('.signin-active');
const signUpLi = document.querySelector('.signup-inactive');

btns.forEach((item) => {
    item.addEventListener('click', () => {
        if(item.innerHTML === 'Sign in') {
            signUpLi.classList.remove('signup-active');
            signUpLi.classList.add('signup-inactive');
            signInLi.classList.remove('signin-inactive');
            signInLi.classList.add('signin-active');
        }
        else if(item.innerHTML === 'Sign up') {
            signInLi.classList.remove('signin-active');
            signInLi.classList.add('signin-inactive');
            signUpLi.classList.remove('signup-inactive');
            signUpLi.classList.add('signup-active');
        }
    })
})