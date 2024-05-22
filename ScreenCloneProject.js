
function openNewPage(pageUrl) {
    window.location.href = pageUrl;
}
function clearSearchText() {
    document.getElementById('searchInput').value = '';
}
function search() {
    let text =  document.getElementById('searchInput').value;
    alert("[ "+text+" ] 과정을 검색합니다.");
    document.getElementById('searchInput').value = '';
}

    // 배열로 만들어보기 인덱스에 값줘서
    
    let leftBtn = document.getElementById('left');
    let rightBtn = document.getElementById('right');
    let centerImg = document.getElementById('center');
    let btncount=0;

    rightBtn.addEventListener("click", function() {

        btncount++;
            if(btncount > 2){
                btncount --;
                alert("마지막..");

            }else{
                updataImg();
            }
    });

    leftBtn.addEventListener("click", function() {

        btncount--;
            if(btncount < 0){
                btncount ++;
                alert("처음..");
            }else{
                updataImg();
            }
    });



//centerImg.setAttribute('src','img/마감임박2.png');

function updataImg(){

    switch(btncount){
        case 0 :    
            console.log("case 0: " + btncount);
            centerImg.setAttribute('src','img/마감1.png');
            break
        case 1 : 
            console.log("case 1: " + btncount);
            centerImg.setAttribute('src','img/마감2.png');
            break
        case 2 : 
            console.log("case 2: " + btncount);
            centerImg.setAttribute('src','img/마감3.png');
            break
    } 
 }




function tableValues() {
    var campus = document.querySelector('.cmapusStyle').value;    
    var userNameInput = document.getElementById('userName').value;

    var tellInput1 = document.querySelector('.tellSelect').value;
    var tellInput2 = document.getElementById('tell_2').value;
    var tellInput3 = document.getElementById('tell_3').value;
    var tellInput = (tellInput1+"-"+tellInput2+"-"+tellInput3);

    var checkSub = document.getElementsByClassName('subname');
    var checkItem = [];
    var checkPersonalInformation = document.getElementById('a1');

    tableValuesCmapus(); 
    tableValuesTellInput(); 
    tableValuesCheckwrap();
    // tableValuesPersonalInformation()
    tableValuesInputCheck()

    function tableValuesCmapus(){
        switch(campus){
            case '1' : 
                campus = "지점을 선택하세요"
                break
            case '2' : 
                campus = "종로"
                break
            case '3' : 
                campus = "역삼"
                break
            case '4' : 
                campus = "신촌"
                break
            case '5' : 
                campus = "노원"
                break
            case '6' : 
                campus = "인천부평"
                break
            case '7' : 
                campus = "인천구월"
                break
            case '8' : 
                campus = "인천청라"
                break
            case '9' : 
                campus = "부천"
                break
            case '10' : 
                campus = "안산"
                break
            case '11' : 
                campus = "안양"
                break
            case '12' : 
                campus = "수원"
                break
            default : 
                campus = "없음"    
        }
    }    
    function tableValuesTellInput(){
        switch(tellInput1){
            case '010' : 
                tellInput1 = "010"
                break

            case '011' : 
                tellInput1 = "011"
                break

            case '011' : 
                tellInput1 = "011"
                break

            case '011' : 
                tellInput1 = "011"
                break

            case '016' : 
                tellInput1 = "016"
                break

            case '017' : 
                tellInput1 = "017"
                break
                
            case '018' : 
                tellInput1 = "018"
                break

            case '019' : 
                tellInput1 = "019"
                break

            default : 
                cmapus = "없음"    
        }
    }
    function tableValuesCheckwrap(){        
        for(let i=0; i<checkSub.length; i++){
            if(checkSub[i].checked){
                checkItem.push(checkSub[i].value);
                console.log(checkItem[i]);
            }else console.log("Checkwrap오류");
        }
    }
    function tableValuesInputCheck(){

        if(campus==="지점을 선택하세요"){
            alert("지점을 선택하세요");
        }else if(tellInput2 ==="" || tellInput3 ===""){
            alert("휴대폰 번호를 확인하세요");
        }else if(checkItem.length===0){
            alert("희망분야를체크하세요");    
        }else if(userNameInput===""){
            alert("이름을 입력하세요");    
        }else if(!(checkPersonalInformation.checked)){
            alert("동의하세요");   
        }else{
            alert(
            "지점선택 :" + campus +
            "\n희망분야 :" + checkItem + 
            "\n이름 :" + userNameInput + 
            "\n연락처 : "+ tellInput + 
            "\n동의: 동의함" 
            )
        }





                    // (
            //     "지점선택 :" + cmapus +
            //     "\n희망분야 :" + checkItem + 
            //     "\n이름 :" + userNameInput + 
            //     "\n연락처 : "+ tellInput + 
            //     "\n동의: 동의함" 
            // )





    }
}

// 긴급속보 

let upButton = document.getElementById("quickUpArrow_btn");
let downButton = document.getElementById("quickDownArrow_btn");
let textSpan = document.getElementById("quickTitleSpan");

let count = 0;

textSpan.innerText = "[긴급속보] 배가 조금 고픕니다.";


upButton.addEventListener("click", function() {
    count++;
        if(count > 3){
            count --;
            console.log("if" + count);
            alert("마지막..");
        }else{
            updataText();
        }
});
    
downButton.addEventListener("click", function() {
    count --;
    if(count < 0){
        count ++;
        alert("처음..");
    }else{
        updataText();
    }        
});

function updataText(){
    switch(count){
    case 0 :    
        console.log("case 0: " + count);
        textSpan.innerText = "[긴급속보] 배가 조금 고픕니다.";
        break
    case 1 : 
        console.log("case 1: " + count);
        textSpan.innerText = "[긴급속보] 배가 고픕니다.";
        console.log(count);
        break
    case 2 : 
        console.log("case 2: " + count);
        textSpan.innerText = "[긴급속보] 배가 많이 고픕니다.";
        console.log(count);
        break
    case 3 : 
        console.log("case 3: " + count);
        textSpan.innerText = "[긴급속보] 배가 많이 고픕니다.!!!!!";
        break;  
    } 

    if(count==3){
        textSpan.style.color="red";
        textSpan.style.fontWeight="700";
    }else{
        textSpan.style.color="black";
        textSpan.style.fontWeight="normal";
    }
}



