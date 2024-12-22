let list = document.getElementsByTagName("li");

function supp() {
  if (list.length != 0) {
    list[list.length - 1].remove();
  } else alert("Plus d'éléments à supprimer");
}

