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
        const selectedTitle = names.value;
        const type = types.value;
        let info = document.getElementById('info');
        info.innerHTML = ''; 

        data[type].forEach(movie => {
            if(movie.titre === selectedTitle) {
                const p = document.createElement('p');
                p.textContent = movie.realisateur;
                info.appendChild(p);
            }
        });
    })
})