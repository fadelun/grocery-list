const input = document.querySelector('input');
const listItem = document.querySelector('.list-item');

input.addEventListener('keydown', event => {
    if(event.key == "Enter"){
        if(input.value){
            addItem()
        }
    }

    
})

const addItem = () => {
    // create new element
    const element = document.createElement('li');
    // create new text
    const node = document.createTextNode(input.value);

    // masukan text tadi ke new element
    element.appendChild(node)
    // tambahkan new element ke daftar belanja
    listItem.appendChild(element);

    // hapus value yang ada di input;
    input.value = '';

    const allItems = document.querySelectorAll('li')
    for(let i = 0; i < allItems.length; i++){
        
        if(allItems.length - 1 == i){
            allItems[i].addEventListener('click' , () => {
                allItems[i].classList.toggle('line-through');
            })
        }
    }

}