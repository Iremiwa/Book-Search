
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

                const output =
                 `  <div class="row">
                    <img src=${bookSearch.volumeInfo.imageLinks.thumbnail} alt="bookcover"> 

                        <div class=" col-sm-4 column">
                        <p>${bookSearch.volumeInfo.title}</p>
                        <p>${bookSearch.volumeInfo.description}</p>
                        <p>${bookSearch.volumeInfo.authors}</p>
                        <p><input type="button" src="${bookSearch.volumeInfo.title}" value="Preview" class="btn btn-primary"></p>
                        
                        </div>
                    </div>
                 `;

                $('.searchResults').append(output);
                
            });
        
        }

        
    }
xhr.send();


});