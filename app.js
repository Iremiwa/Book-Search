
$('#button').click(function fetchBooks(){

    const searchText = $('input').val();

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyAR-RLGGQwIV6RbrR8fRIfWTBZKKvdZRCo&maxResults=12`, true, );

xhr.onload= function() {
   if(this.status === 200) {
        const response = JSON.parse(this.responseText);
           
            response.items.forEach(function(bookSearch){ 

                const output =
                `
                
                
                <div class="card " style="width: 300px; height:800px; 
                position: relative; float: left; padding: 20px; margin:10px;" >
                                        
                        <img class="card-img-top" src=${bookSearch.volumeInfo.imageLinks.thumbnail} alt="bookcover" style="height: 300px;"> 
              
                        <div class= "card-body">
                        <h5 class ="card-title">${bookSearch.volumeInfo.title}</p>
                        <p class ="card-text">Author(s): ${bookSearch.volumeInfo.authors}</p>
                        <p class ="card-text"> Category: ${bookSearch.volumeInfo.categories}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Pages: ${bookSearch.volumeInfo.pageCount}</li>
                        <li class="list-group-item">Publisher: ${bookSearch.volumeInfo.publisher}</li>
                        <li class="list-group-item">Year: ${bookSearch.volumeInfo.publishedDate}</li>
                        </ul>
                        <div class="card-body">
                        <a href="${bookSearch.volumeInfo.previewLink}" class="btn btn-primary">Preview</a>
                        
                        </div>
                    
                    </div>
                    </div>
                   </div>
                 `;

                $('.searchResults').append(output);
                
            });
        
        }

        
    }
xhr.send();

});

