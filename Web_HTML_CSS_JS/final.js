var bmi =[
    { 
        id : 1,
        tinhtrang : "Gầy",
    },
    { 
        id : 2,
        tinhtrang : "Bình thường",
    },
    {
        id : 3,
        tinhtrang : "Thừa cân",
    },
    { 
        id : 4,
        tinhtrang : "béo phì",
    }
]
var reg = /^[\p{L}\s-]{8,26}$/u;

var i = 0

var info = []
 
function addInfo () {
    
    var getname = document.getElementById("getname").value;
       
    var getgender = document.getElementById("getgender").vaule;
        

    var getdate = document.getElementById("getdate").value


    var height = document.getElementById("getheight").value
        

    var weight = document.getElementById("getweight").value
      
    var nameInfo = document.getElementById("getname").value;
            info.push({
            id: i++,
            getname,
            getgender,
            getdate,
            height,
            weight,
            nameInfo
          });
          let isValidate = true;
          let error = '';
          if (getgender === "0") {
            error += "Chưa Chọn Giới Tính. ";
            isValidate = false;
          }
          if(getdate === "0" ) {
            error += "Chưa Chọn Ngày. "
            isValidate = false;
          }
          if(height.length == "0" ) {
            error += "Nhập Chiều Cao. "
            isValidate = false;
          }
          if(weight.length == "0" ) {
            error += "Nhập Chiều Cao. "
            isValidate = false;
          }
          if (getname == '' || !reg.test(getname) ) {
            error += "Tên Chưa Hợp Lệ.";
            isValidate = false;
          }
          
          if (!isValidate) {
            alert(error);
            return;
          }
        document.getElementById("result").innerHTML += ` 
       
        <td>${getname}</td>
        <td>${getgender}</td>
        <td>${getdate}</td>
        <td>${height}</td>
        <td>${weight}</td>
        `;
    //     alert("Kiểm Tra Thành Công");
        
    }
function deletePlayer(btn) {
        var row =btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
}
function bmi {

}