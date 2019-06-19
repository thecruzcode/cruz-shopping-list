function myShoppingListHtml(val){
    return `<li>
    <span class="shopping-item">${val}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}

function crossOutItem(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
        e.preventDefault();
        $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item shopping-item__checked');
    })
}

function deleteMyShoppingList(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        e.preventDefault();
        $(e.target).closest('li').remove();
    })
}

function createMyShoppingListItems(){
    $('#js-shopping-list-form').on('submit', function(e){
        e.preventDefault();

        const val = $('#shopping-list-entry').val();
        console.log(val);

        $('.shopping-list').append($(myShoppingListHtml(val)));
        $('#shopping-list-entry').val('');
    });
};

$(createMyShoppingListItems)
$(crossOutItem)
$(deleteMyShoppingList)