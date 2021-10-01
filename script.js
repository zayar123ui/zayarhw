function getData(){
        fetch ("http://localhost:3001/api/employee")
        .then(res=> res.json( ))
        .then(data=>{
            $("body").attr("style",data.body.style )

            let card ="";
            //let imgContainer="";
            for (const iterator of data.body.child) {
                card = `<${iterator.element} style="${iterator.style}">
                            <${iterator.child[0].element} style="${iterator.child[0].style}">
                            <${iterator.child[0].child[0].element} style="${iterator.child[0].child[0].style}" src="${iterator.child[0].child[0].src}" >
                            </${iterator.child[0].element}>

                            
                            <${iterator.child[1].element} style="${iterator.child[1].style}">

                            <${iterator.child[1].child[0].element} style="${iterator.child[1].child[0].style}">
                            ${iterator.child[1].child[0].text}
                            <${iterator.child[1].child[0].child[0].element} style="${iterator.child[1].child[0].child[0].style}">
                            ${iterator.child[1].child[0].child[0].text}
                            </${iterator.child[1].child[0].child[0].element}>
                            </${iterator.child[1].child[0].element}>

                            <${iterator.child[1].child[1].element} style="${iterator.child[1].child[1].style}">
                            ${iterator.child[1].child[1].text}
                            <${iterator.child[1].child[1].child[0].element} style="${iterator.child[1].child[1].child[0].style}">
                            ${iterator.child[1].child[1].child[0].text}
                            </${iterator.child[1].child[1].child[0].element}>
                            </${iterator.child[1].child[1].element}>

                            <${iterator.child[1].child[2].element} style="${iterator.child[1].child[2].style}">
                            ${iterator.child[1].child[2].text}
                            <${iterator.child[1].child[2].child[0].element} style="${iterator.child[1].child[2].child[0].style}">
                            ${iterator.child[1].child[2].child[0].text}
                            </${iterator.child[1].child[2].child[0].element}>
                            </${iterator.child[1].child[2].element}>

                            </${iterator.child[1].element}>
                            </${iterator.element}>`
                
                
            }
            $("body").prepend(card)

            /*for (const iterator of data.body.child.child) {
                imgContainer= `<${iterator.element} style="${iterator.style}"> </${iterator.element}>`
            }*/
           // $("#card").prepend(imgContainer)
        })
        .catch(error => console.log(error))
}
getData();