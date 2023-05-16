document.addEventListener('DOMContentLoaded', function() {
    let btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = 'Press me';
    btn.className = 'btn-style';
    btn.onclick = function() {
        fetch("./Exercise-1/assets/squad.json")
            .then((response) => response.json())
            .then((data) => {
                const list = document.createElement("ul");
                data.members.forEach((member) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = "Name: " + member.name + ", Age: " + member.age + ", Secret Identity: " + member.secretIdentity + ", Power: " + member.power;
                    list.appendChild(listItem);
                });
                document.body.appendChild(list);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
    };

    let content = document.getElementById('container');
    content.appendChild(btn);
    
}, false);