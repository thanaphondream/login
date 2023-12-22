
function add(){
    const dv = document.getElementById('demo')
    var username = document.getElementById('username').value;
    const password = document.querySelector('.password').value
    const demo = document.getElementById('demo1')
    const div = document.querySelector('.id')
    const role = document.getElementById('role')

    let xtext
    if(username === "ream" || password === "123"){
        dv.innerText = "ชื่อถูกต้อง"
        dv.style.color = 'green'
        demo.innerHTML = "<p>รหัสผ่านถูกต้อง</p>"
        demo.style.color = "green"
        alert('Login successful!\nUsername: ' + username + '\nPassword: ' + password);
        window.location.href = 'https://www.example.com/?fbclid=IwAR1cwb7yuA2AdAQhp93MP2kTMuiv62qT29DTdERUIJXfpdc-aG7f7lneQI8';
    }
    else if(username == ""|| password == ""){
        dv.innerText = "กรุณนากรอกชื่อด้วย"
        dv.style.color = 'yellow'
        demo.innerHTML = "<p>กรุณนากรอกรหัสผ่าน</p>"
        demo.style.color = "yellow"
    }
    else{
        dv.innerText = "ชื่อไม่ถูกต้อง"
        dv.style.color = 'red'
        demo.innerHTML = "<p>รหัสผ่านไม่ถูกต้อง</p>"
        demo.style.color = "red"
    }

}
