
$('#button').click(function fetchBooks(){

    const searchText = $('input').val();

    console.log(searchText);

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyAR-RLGGQwIV6RbrR8fRIfWTBZKKvdZRCo`, true, );




xhr.onload= function() {
   if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        let output = '';
        
       // if(response.type === 'success') {

       // if(xhr.status === 200) {
            response.value.forEach(function(bookSearch){ 
                output += `<li>${bookSearch.response.items}</li>`;
            });
        } else {
            output += `<li>Something went wrong</li>`;
        }

        $('.books').append(output);
    }


xhr.send();


});