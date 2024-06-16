function sortSelect() {
    let select = document.getElementById('mySelect');
    let options = Array.from(select.options);
    
    options.sort((a, b) => a.textContent.localeCompare(b.textContent));
    
    select.innerHTML = '';
    
    options.forEach(option => {
        select.appendChild(option);
    });
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        const select = select.value
        const newdata =[
            ...data,
            {
            select : select
        }  
        ]
    
        index ++;
        setdata(newdata)
        modal.classList.add("open")
    })
}