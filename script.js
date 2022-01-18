const btn = document.getElementById('button');
const things = document.querySelectorAll('.small');

btn.addEventListener('click', function expand() {
    things.style.visibility = 'visible'
})