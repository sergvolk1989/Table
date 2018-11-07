
function SearchItem()
{
  var TableSearch = document.getElementById('ThisTable'); // получили таблицу

  var IntrPhrase = document.getElementById("search_id"); // поле ввода
  var filter = IntrPhrase.value.toLowerCase();   // введенное значение

  var tr = TableSearch.getElementsByTagName("tr");   // получаем строки

  for (var i = 1; i < tr.length; i++)   // перебираем все строки, кроме первой в которой содержится title
  {
    for (var j = (TableSearch.rows[i].cells.length - 1); j >= 0; j--)  //столбцы
    {
      if (TableSearch.rows[i].cells[j].innerHTML.toLowerCase().indexOf(filter) > -1) //Если indexOf выдал любую цифру > -1, значит в строке имеется совпадение, иначе скрываем ее
      {
        tr[i].style.display = "";
      }
      else
      {
        tr[i].style.display = "none"; // скрываем строку
      }
    }
  }
}
