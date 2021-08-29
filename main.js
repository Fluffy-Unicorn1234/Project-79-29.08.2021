menu_list_array = ["Margherita Pizza",
"Chicken Pizza",
"Pepperoni Pizza",
"Veg Delight Pizza",
"Chicken Heaven Pizza",
"All You Can Eat Salad Pizza",
"Dough Balls",
"French Fries",
"Chicken Wings",
"Garlic Bread",
"Veg Extravaganza Pizza",
"Paneer Tikka Pizza"
//add more items
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;

menu_list_array.sort();
console.log(menu_list_array);
document.getElementById("display_menu").innerHTML = menu_list_array;
}
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
