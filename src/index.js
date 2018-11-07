
var CurrentColumn = 0;  // переменная для проверки текущего активного столбца

function sortTable(n) {

  var table, rows, switching, i, x, y, shouldSwitch, directionSort, switchcount = 0;
  table = document.getElementById("ThisTable");
  switching = true;

  directionSort = "asc"; //  Устанавливаем начальное значение сортировки "по убыванию"
  /*Делаем пока не было переключения*/

  var CurrentColumnArray = document.getElementsByTagName('th');  // удаляем псевдоэлементы
  CurrentColumnArray[n].className = "";


  while (switching)
  {

    switching = false;  // переключение было сделано, возвращаем в false
    rows = table.getElementsByTagName("TR");

    /*Перебираем все строки таблицы кроме первой, в которой содержится title таблицы*/
    for (i = 1; i < (rows.length - 1); i++)
    {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];     // сравниваем текущий элемент с последующим
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (directionSort == "asc")
      {
        CurrentColumnArray[n].className = "title_after";  // если выбран другой столбец, то восстанавливаем для предыдущего удаленные классы псевдоэлементов
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) // сравниваем, преобразовав в нижний регистр
        {
          shouldSwitch= true;
          break;
        }
      }
      else if (directionSort == "desc")
      {
        CurrentColumnArray[n].className = "title_before";
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
        {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch)
    {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); // если последующий элемент 'больше' текущего, то ставим его перед текущим
      switching = true;
      switchcount ++;
    }
    else
    {
      if (switchcount == 0 && directionSort == "asc")
      {
        directionSort = "desc";
        switching = true;
      }
    }
  }

  if (CurrentColumn != n) {
    CurrentColumnArray[CurrentColumn].className = "title_table";  // если выбран другой столбец, то восстанавливаем для предыдущего удаленные классы псевдоэлементов
  }

  CurrentColumn = n;
}
