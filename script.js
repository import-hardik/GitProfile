let name="import-hardik"
function addText(){
    name=document.getElementById("name").value;
    console.log(name);
    console.log("jay ho api baba ke")
    const url=`https://api.github.com/users/${name}`
    const xhr =new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const data =JSON.parse(this.responseText)
            document.getElementById("userimg").src=data.avatar_url;
            document.getElementById("uname").innerHTML=data.login;
            document.getElementById("followers").innerHTML=data.followers;
            document.getElementById("following").innerHTML=data.following;
            document.getElementById("bio").innerHTML=data.bio;
            document.getElementById("place").innerHTML=data.location;
            let a = document.createElement("a");
            document.getElementById("gitlink").innerHTML="";
            document.getElementById("gitlink").setAttribute("onclick","window.location.href='https://github.com/"+name+"';");
            a.innerHTML="Github Link"
            console.log(a);
            document.getElementById("gitlink").appendChild(a);
            console.log(data);
        }
    }
    xhr.send();
}