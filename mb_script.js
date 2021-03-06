//Initializing the variables
var num1;
var num2;
var val;

//Creating a blank arrayBuffer of 4 bytes
var buffer = new ArrayBuffer(4);
var view = new DataView(buffer);

function calculation() {
    //Creating variables for each input
    num1 = document.querySelector("#num1").value;
    num2 = document.querySelector("#num2").value;

    //inserting num1 to the 0th postion (1st byte) of arrayBuffer
    view.setInt16(0, num1, false);
    
    //inserting num2 to the 2nd position (3rd byte) of arrayBuffer
    view.setInt16(2, num2, false);

    //converting 4 byte arrayBuffer into a float and saving to variable val
    val = view.getFloat32(0, false);

    var node1 = document.createElement("li");
    node1.appendChild(document.createTextNode(num1));
    document.querySelector('#list1').appendChild(node1);

    var node2 = document.createElement("li");
    node2.appendChild(document.createTextNode(num2));
    document.querySelector('#list2').appendChild(node2);

    var node3 = document.createElement("li");
    node3.appendChild(document.createTextNode(val));
    document.querySelector('#list3').appendChild(node3);

    //output to HTML
    //document.querySelector("#value").innerHTML = val;
};