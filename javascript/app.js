
$('#button').click(function fetchBooks(){

    const searchText = $('input').val();

    console.log(searchText);

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyAR-RLGGQwIV6RbrR8fRIfWTBZKKvdZRCo`, true, );




xhr.onload= function() {
   if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        
            response.items.forEach(function(bookSearch){ 

                console.log("searchResults", $('.searchResults'));

                const output = `<img src=${bookSearch.volumeInfo.imageLinks.thumbnail} alt="bookcover">`; 
                const output1 = `<p>${bookSearch.volumeInfo.authors}</p>`;

                $('.searchResults').append(output);
            });
        
        }

        
    }


xhr.send();


});