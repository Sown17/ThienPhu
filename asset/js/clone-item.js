function Show_list_item(cardList, cardItem, amount) {
    for (i = 1; i <= amount; i++) {
      cardItem.clone().appendTo(cardList);
    }
  }

  Show_list_item($(".product .row"), $(".product .col-lg-3"), 3);
  Show_list_item($(".related .row"), $(".related .col-lg-3"), 1);