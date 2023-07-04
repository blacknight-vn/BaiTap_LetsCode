const inputs = document.getElementsByTagName('input');

function changeImage() {
    document.documentElement.style.setProperty(`--${this.name}`, this.name === 'base' ? this.value : this.value + 'px');    
}

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', changeImage)
}
