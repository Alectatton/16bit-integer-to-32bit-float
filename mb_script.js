
function calculation() {
    //Creating variables for each input
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    //Creating a blank arrayBuffer of 4 bytes
    var buffer = new ArrayBuffer(4);
    var view = new DataView(buffer);

    //inserting num1 to the 0th postion (1st byte) of arrayBuffer
    view.setInt16(0, num1, false);
    
    //inserting num2 to the 2nd position (3rd byte) of arrayBuffer
    view.setInt16(2, num2, false);

    //converting 4 byte arrayBuffer into a float and saving to variable val
    var val = view.getFloat32(0, false);

    //output to HTML
    document.getElementById("value").innerHTML = val;

    //To console log for debugging
    console.log("num1:" + num1)
    console.log("num2:" + num2)
    console.log("output:" + val)
};