function skillsMember() {    
    var member = document.getElementById("member").value;
    var memberList = document.getElementById("memberList");
    var memberArray = member.split(",");
    var memberArrayLength = memberArray.length;

    if (memberArrayLength < 1) {
        memberList.innerHTML = "Please enter a valid name";
        return;
    }

    memberList.innerHTML = "";

    for (var i = 0; i < memberArrayLength; i++) {
        memberList.innerHTML += "<li>" + memberArray[i] + "</li>";
    }
}