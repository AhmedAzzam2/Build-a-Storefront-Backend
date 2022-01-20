document.getElementById('generate').addEventListener('click', (e) => {

    e.preventDefault();
    let data = {
        "id": document.getElementById('id').value,
        "title": document.getElementById('title').value,
        "total_pages": document.getElementById('total_pages').value,
        "author": document.getElementById('author').value,
        "summary": document.getElementById('summary').value
    }

    const newLocal = document.localhost = '#footer';
    return fetch('http://localhost:3000/books/up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(response => response.json()).then(data =>
            document.getElementById('card').innerHTML +=
            `<tr id="book${data.id}" class="alert alert-success">
                    <th scope="row">${data.id}</th>
                    <td>${data.title}</td>
                    <td>${data.author}</td>
                    <td>${data.total_pages}</td>
                    <td>${data.summary}</td>
                    <td class="btn btn-danger" onclick="deletBook( ${data.id} )">del</td>
                </tr>`
        ).then(
            window.location = '#footer'
        )

});

document.getElementById('generate2').addEventListener('click', (e) => {

    e.preventDefault();
    let data = {
        "id": document.getElementById('id').value,
        "title": document.getElementById('title2').value,
        "total_pages": document.getElementById('total_pages2').value,
        "author": document.getElementById('author2').value,
        "summary": document.getElementById('summary2').value
    }

    const newLocal = document.localhost = '#footer';
    return fetch('http://localhost:3000/books/up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(response => response.json()).then(data =>
            document.getElementById('card').innerHTML +=
            `<tr id="book${data.id}" class="alert alert-success">
                    <th scope="row">${data.id}</th>
                    <td>${data.title}</td>
                    <td>${data.author}</td>
                    <td>${data.total_pages}</td>
                    <td>${data.summary}</td>
                    <td class="btn btn-danger" onclick="deletBook( ${data.id} )">del</td>
                </tr>`
        ).then(
            window.location = '#footer'
        )

});


let UL = async () => {
    let res = await fetch(`http://localhost:3000/books`);
    try {
        res.json().then(mydata => {
            console.log(mydata)
            let data
            for (const key in mydata) {
                data += `
                <tr id="book${mydata[key].id}">
                    <th scope="row">${mydata[key].id}</th>
                    <td>${mydata[key].title}</td>
                    <td>${mydata[key].author}</td>
                    <td>${mydata[key].total_pages}</td>
                    <td>${mydata[key].summary}</td>
                    
    <td><button type="button" id="btn${mydata[key].id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showBook( ${mydata[key].id} )"
    data-bs-whatever="${mydata[key].id}" data-bs-whatever2="${mydata[key].title}" data-bs-whatever3="${mydata[key].author}" data-bs-whatever4="${mydata[key].total_pages}"  data-bs-whatever5="${mydata[key].summary}">Open</button></td>

                    <td class="btn bg-danger p-1" onclick="deletBook( ${mydata[key].id} )">delete</td>
              </tr> 
            `;
            }
            document.getElementById('card').innerHTML = data
        })
    } catch (error) {
        catchErr(error);
    }
}

UL()



/// edit
// function showBook(id) {
//     const formData = new FormData();
//     formData.append('id', id);

//     return fetch(`http://localhost:3000/books/${id}`, { 
//     }).then(data => console.log(data.json())

//         )
// }


let showBook = async (id) => {
    let res = await fetch(`http://localhost:3000/books/${id}`);
    try {
        res.json().then(mydata => { 
            let data
            data += `
            <div id="book${mydata.id}">
                <div scope="row">${mydata.id}</div>
                <div>${mydata.title}</div>
                <div>${mydata.author}</div>
                <div>${mydata.total_pages}</div>
                <div>${mydata.summary}</div>
          </div`;
            document.getElementById('formElem2').innerHTML = data
        })
    } catch (error) {
        catchErr(error);
    }
}


/// delet
function deletBook(id) {
    const formData = new FormData();
    formData.append('id', id);

    return fetch('http://localhost:3000/books', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id": id }),
        // body: {"id":id}
    }).then(
        document.querySelector(`#book${id}`).remove()
    )
        .then(
            document.getElementById('alert').innerHTML += `<div  class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>done delete it </strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        )
}




// var exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', function (event) {
//     // Button that triggered the modal
//     var button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     var recipient = button.getAttribute('data-bs-whatever')
//     var recipient2 = button.getAttribute('data-bs-whatever2')
//     var recipient3 = button.getAttribute('data-bs-whatever3')
//     var recipient4 = button.getAttribute('data-bs-whatever4')
//     var recipient5 = button.getAttribute('data-bs-whatever5')
//     // If necessary, you could initiate an AJAX request here
//     // and then do the updating in a callback.
//     //
//     // Update the modal's content.
//     var modalTitle = exampleModal.querySelector('.modal-title')
//     document.querySelector("#title2").value = recipient2
//     document.querySelector("#author2").value = recipient3
//     document.querySelector("#total_pages2").value = recipient4
//     document.querySelector("#summary2").value = recipient5
//     document.querySelector("#title2").value = recipient
// })
