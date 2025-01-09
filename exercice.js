fetch('exercice.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const types=document.getElementById('types');
    const names=document.getElementById('name')

    Object.keys(data).forEach(type => {
        const option = document.createElement('option')
        option.value=type;
        option.textContent=type;
        types.appendChild(option);

        
    });

    types.addEventListener('change',()=>{
        const type = types.value;
        names.innerHTML='<option value="">shoose a film</option>'
        data[type].forEach(name => {
            const option = document.createElement('option')
            option.value=name.titre;
            option.textContent=name.titre;
            names.appendChild(option);
        });
    })
    names.addEventListener('change',()=>{
        
        const name = names.value;
        const type=types.value
        let info=document.getElementById('info')
        data[type].forEach(name => {
            const p = document.createElement('p')
            p.textContent=name.realisateur
            info.appendChild(p)
        });
    })
})