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
    return fetch('http://localhost:3000/books', {
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




// user start 
document.getElementById('generateUser').addEventListener('click', (e) => {

    e.preventDefault();
    let data = {
        "id": document.getElementById('id').value,
        "firstName": document.getElementById('firstName').value,
        "lastName": document.getElementById('lastName').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "password": document.getElementById('password').value
    }

    // const newLocal = document.localhost = '#footer';
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(response => response.json()).then(data =>
            document.getElementById('carduser').innerHTML +=
            `<tr id="user${data.id}" class="alert alert-success">
                    <th scope="row">${data.id}</th>
                    <td>${data.firstname}</td>
                    <td>${data.lastname}</td>
                    <td>${data.email}</td>
                    <td>${data.phone}</td>
                    <td class="btn btn-danger" onclick="deletUser( ${data.id} )">del</td>
                </tr>`,
                window.location = '#footer'
        )

});

 

let ULuser = async () => {
    let res = await fetch(`http://localhost:3000/users`);
    try {
        res.json().then(mydata => {
            console.log(mydata)
            let data
            for (const key in mydata) { 
                data += `
                <tr id="user${mydata[key].id}">
                    <th scope="row">${mydata[key].id}</th>
                    <td>${mydata[key].firstname}</td>
                    <td>${mydata[key].lastname}</td>
                    <td>${mydata[key].email}</td>
                    <td>${mydata[key].phone}</td>
                    
    <td><button type="button" id="btn${mydata[key].id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showUser( ${mydata[key].id} )"
    data-bs-whatever="${mydata[key].id}" data-bs-whatever2="${mydata[key].firstname}" data-bs-whatever3="${mydata[key].email}" data-bs-whatever4="${mydata[key].lastname}"  data-bs-whatever5="${mydata[key].phone}">Open</button></td>

                    <td class="btn bg-danger p-1" onclick="deletUser( ${mydata[key].id} )">delete</td>
              </tr> 
            `;
            }
            document.getElementById('carduser').innerHTML = data
        })
    } catch (error) {
        catchErr(error);
    }
}

ULuser()



/// edit
// function showUser(id) {
//     const formData = new FormData();
//     formData.append('id', id);

//     return fetch(`http://localhost:3000/users/${id}`, { 
//     }).then(data => console.log(data.json())

//         )
// }


let showUser = async (id) => {
    let res = await fetch(`http://localhost:3000/users/${id}`);
    try {
        res.json().then(mydata => { 
            let data
            data += `
            <div id="user${mydata.id}">
                <div scope="row">${mydata.id}</div>
                <div>${mydata.firstName}</div>
                <div>${mydata.lastName}</div>
                <div>${mydata.email}</div>
                <div>${mydata.phone}</div>
          </div`;
            document.getElementById('formElem2').innerHTML = data
        })
    } catch (error) {
        catchErr(error);
    }
}


/// delet
function deletUser(id) {
    const formData = new FormData();
    formData.append('id', id);

    return fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id": id }),
        // body: {"id":id}
    }).then(
        document.querySelector(`#user${id}`).remove()
    )
        .then(
            document.getElementById('alert').innerHTML += `<div  class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>done delete it </strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        )
}

// user end



// order start 
document.getElementById('generateOrder').addEventListener('click', (e) => {

    e.preventDefault();
    let data = {
        "id": document.getElementById('id').value,
        "quantity": document.getElementById('quantity').value,
        "order_id": document.getElementById('order_id').value,
        "books_id": document.getElementById('books_id').value,
        "status": document.getElementById('status').value,
    }

    // const newLocal = document.localhost = '#footer';
    return fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(response => response.json()).then(data =>
            document.getElementById('cardorder').innerHTML +=
            `<tr id="order${data.id}" class="alert alert-success">
                    <th scope="row">${data.id}</th>
                    <td>${data.quantity}</td>
                    <td>${data.order_id}</td>
                    <td>${data.books_id}</td>
                    <td>${data.status}</td>
                    <td class="btn btn-danger" onclick="deletOrder( ${data.id} )">del</td>
                </tr>`,
                window.location = '#footer'
        )

});

 

let ULorder = async () => {
    let res = await fetch(`http://localhost:3000/orders`);
    try {
        res.json().then(mydata => {
            console.log(mydata)
            let data
            for (const key in mydata) { 
                data += `
                <tr id="order${mydata[key].id}">
                    <th scope="row">${mydata[key].id}</th>
                    <td>${mydata[key].quantity}</td>
                    <td>${mydata[key].order_id}</td>
                    <td>${mydata[key].books_id}</td>
                    <td>${mydata[key].status}</td>
                    
    <td><button type="button" id="btn${mydata[key].id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showOrder( ${mydata[key].id} )"
    data-bs-whatever="${mydata[key].id}" data-bs-whatever2="${mydata[key].quantity}" data-bs-whatever3="${mydata[key].books_id}" data-bs-whatever4="${mydata[key].order_id}"  data-bs-whatever5="${mydata[key].status}">Open</button></td>

                    <td class="btn bg-danger p-1" onclick="deletOrder( ${mydata[key].id} )">delete</td>
              </tr> 
            `;
            }
            document.getElementById('cardorder').innerHTML = data
        })
    } catch (error) {
        catchErr(error);
    }
}

ULorder()



/// edit
// function showOrder(id) {
//     const formData = new FormData();
//     formData.append('id', id);

//     return fetch(`http://localhost:3000/orders/${id}`, { 
//     }).then(data => console.log(data.json())

//         )
// }


let showOrder = async (id) => {
    let res = await fetch(`http://localhost:3000/orders/${id}`);
    try {
        res.json().then(mydata => { 
            let data
            data += `
            <div id="order${mydata.id}">
                <div scope="row">${mydata.id}</div>
                <div>${mydata.quantity}</div>
                <div>${mydata.order_id}</div>
                <div>${mydata.books_id}</div>
                <div>${mydata.status}</div>
          </div`;
            document.getElementById('formElem2').innerHTML = data
        })
    } catch (error) {
        catchErr(error);
    }
}


/// delet
function deletOrder(id) {
    const formData = new FormData();
    formData.append('id', id);

    return fetch('http://localhost:3000/orders', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id": id }),
        // body: {"id":id}
    }).then(
        document.querySelector(`#order${id}`).remove()
    )
        .then(
            document.getElementById('alert').innerHTML += `<div  class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>done delete it </strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        )
}

// order end

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
