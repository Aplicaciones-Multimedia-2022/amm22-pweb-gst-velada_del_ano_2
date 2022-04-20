(function(){
    const sliders = [...document.querySelectorAll('.deslizar-body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () =>{
    changePosition(1);
    });
    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const currentdeslizar = document.querySelector('.deslizar-body--show').dataset.id;
        value = Number(currentdeslizar);
        value+= add;

        sliders[Number(currentdeslizar)-1].classList.remove('deslizar-body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('deslizar-body--show');
    }
})();
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});