let library=[['Book1','Author1'],['Book2','Author2']];
let book_infos=document.querySelector('.book-infos');
let book_cards=document.querySelector('.book-cards');
let form=document.querySelector('form');
let book_name=document.querySelector('#Book-name');
let book_author=document.querySelector('#Author-name');
let inputs=document.querySelectorAll('input');
class book{
    constructor(name,author){
        this.name=name;
        this.author=author;
    }
}
class interact_books{
    //add book into the container
    static create_book(x){
        let Book=new book(x[0],x[1]);
        let Book_Card=book_infos.cloneNode(true);
        Book_Card.querySelector('ul').querySelector('.name').innerText=Book.name;
        Book_Card.querySelector('ul').querySelector('.author').innerText=Book.author;
        //create toogle read and unread
        Book_Card.querySelector('ul').querySelector('.status').addEventListener('click',()=>{
            Book_Card.querySelector('ul').querySelector('.status').classList.toggle('read');
            if(Book_Card.querySelector('ul').querySelector('.status').className==='status read'){
                Book_Card.querySelector('ul').querySelector('.status').innerText='Read';
            }else{
                Book_Card.querySelector('ul').querySelector('.status').innerText='Haven\'t Read';
            }
        })
        Book_Card.querySelector('ul').querySelector('.status').innerText='Haven\'t Read';
        //create delete button
        Book_Card.querySelector('ul').querySelector('.delete').addEventListener('click',()=>{
            Book_Card.querySelector('ul').querySelector('.delete').parentElement.parentElement.remove();
        })
        Book_Card.querySelector('ul').querySelector('.delete').innerText='X';
        book_cards.appendChild(Book_Card);
    }
    //display filler books
    display_books(){
        library.forEach(x=>interact_books.create_book(x))
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(book_name.value===''||book_author.value===''){
        if(book_name.value===''){
            book_name.nextElementSibling.innerText='*Title can\'t be blank';
        }
        if(book_author.value===''){
            book_author.nextElementSibling.innerText='*Author name can\'t be empty';
        }
    }
    else{
        library.push([book_name.value,book_author.value]);
        interact_books.create_book(library[library.length-1]);
        book_name.value='';
        book_author.value='';
    }
    console.log(1);
})
inputs.forEach(input=>{
    input.addEventListener('input',()=>{
        input.nextElementSibling.innerText='';
    })
})
a=new interact_books();
a.display_books();