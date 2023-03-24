const accordionItems  = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item=>{
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', ()=>{
        const isActive = item.classList.contains('active');
        closeAllAccordions();
        if(!isActive){
            item.classList.toggle('active');

            const content = item.querySelector('.accordion-content');
            content.style.display = 'block';
        }
    });
});

function closeAllAccordions(){
    accordionItems.forEach(item=>{
        item.classList.remove('active');
        const content = item.querySelector('.accordion-content');
        content.style.display = 'none';
    });
}