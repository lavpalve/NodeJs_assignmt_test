
var addItem;
var editItem;
var deleteItem;

addItem = () =>{
    document.getElementById("inputBox").style.border = 'none';
    var createItemRow = document.createElement("div");
    var inputTextValue = document.getElementById("inputBox").value;
    if(inputTextValue == ''){
        document.getElementById("inputBox").style.border = '2px solid red';
        return;
    }
    document.getElementById("inputBox").value = '';
    postData(inputTextValue);
}

editItem = (editItemId) =>{ 
    //console.log(editItemId);
    document.getElementById('inputBox'+editItemId).removeAttribute("disabled");
    document.getElementById('inputBox'+editItemId).focus();
    document.getElementById('inputBox'+editItemId).addEventListener('focusout', ()=>{
        putData(editItemId);
    });
}

deleteItem = (editItemId) =>{
    document.getElementById(editItemId).remove();
    deleteData(editItemId);
}

// MockAPI and PostMan

// Get all data   (GET)
var getData = () =>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://61caeaaa194ffe0017788a3b.mockapi.io/bookmyshow/api/v1/to-do_List", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            result = JSON.parse(result);
            //console.log(result[0]);
            for(let i=0;i<result.length;i++){
                var createItemRow = document.createElement("div");
                createItemRow.className = 'row justify-content-center mt-4';
                createItemRow.id = result[i].id;
                createItemRow.innerHTML = '<div class="col-11  bg-success py-2 rounded">'+
                                        '<div class="row listRow">'+
                                        '<div class="col-8">'+
                                        '<input type="text" id="inputBox'+result[i].id+'" class="form-control" value="'+result[i].name+'" disabled>'+
                                        '</div>'+
                                        '<div class="col-2">'+
                                        '<button type="submit" onclick="editItem('+result[i].id+')" class="btn btn-warning">'+
                                        '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                                        '</button>'+
                                        '</div>'+
                                        '<div class="col-2">'+
                                        '<button type="submit" onclick="deleteItem('+result[i].id+')" class="btn btn-danger">'+
                                        '<i class="fa fa-trash" aria-hidden="true"></i>'+
                                        '</button>'+
                                        '</div>'+
                                        '</div>';
                var parentDiv = document.getElementById("mainDiv");
                parentDiv.append(createItemRow);
            }
        })
        .catch(error => console.log('error', error));
    }

getData();

// add data (POST) 
var postData = (inputValue)=>{
    var currentDate = new Date(); //use your date here
    currentDate.toLocaleDateString('en-US');
    let mockData = {
        "createdAt": currentDate,
        "name": inputValue
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(mockData);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://61caeaaa194ffe0017788a3b.mockapi.io/bookmyshow/api/v1/to-do_List", requestOptions)
    .then(response => response.text())
    .then(result =>{
        result = JSON.parse(result);
        console.log(result);
        var createItemRow = document.createElement("div");
        createItemRow.className = 'row justify-content-center mt-4';
        createItemRow.id = result.id;
        createItemRow.innerHTML = '<div class="col-11  bg-success py-2 rounded">'+
                                '<div class="row listRow">'+
                                '<div class="col-8">'+
                                '<input type="text" id="inputBox'+result.id+'" class="form-control" value="'+result.name+'" disabled>'+
                                '</div>'+
                                '<div class="col-2">'+
                                '<button type="submit" onclick="editItem('+result.id+')" class="btn btn-warning">'+
                                '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                                '</button>'+
                                '</div>'+
                                '<div class="col-2">'+
                                '<button type="submit" onclick="deleteItem('+result.id+')" class="btn btn-danger">'+
                                '<i class="fa fa-trash" aria-hidden="true"></i>'+
                                '</button>'+
                                '</div>'+
                                '</div>';
        var parentDiv = document.getElementById("mainDiv");
        parentDiv.append(createItemRow);
        document.getElementById("inputBox").value = '';
    })
    .catch(error => console.log('error', error));
    }

    // update data (PUT)
    var putData = (id)=>{
        var inputupdatedValue =  document.getElementById('inputBox'+id).value;
        var currentDate = new Date(); //use your date here
        currentDate.toLocaleDateString('en-US');

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "createdAt": currentDate,
        "name": inputupdatedValue
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://61caeaaa194ffe0017788a3b.mockapi.io/bookmyshow/api/v1/to-do_List/"+id+"", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    // Delete Data (DELETE)
    var deleteData = (id)=>{

        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch("https://61caeaaa194ffe0017788a3b.mockapi.io/bookmyshow/api/v1/to-do_List/"+id+"", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    }
