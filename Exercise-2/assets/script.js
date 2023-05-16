document.addEventListener('DOMContentLoaded', function() {
    let textContainer = document.getElementById('text_container');
    let nameInput = document.getElementById('nameInput');
    let sendBtn = document.getElementById('sendBtn');
    let resultDiv = document.createElement('div');
    resultDiv.id = 'resultDiv';

    sendBtn.addEventListener('click', function() {
      let name = nameInput.value;
      fetch('https://api.agify.io/?name=' + name)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
            resultDiv.innerHTML = '';

            let resultText = document.createElement('p');
            resultText.textContent = 'Name: ' + data.name + ', Age: ' + data.age + ', Count: ' + data.count;
            resultDiv.appendChild(resultText);

            let totoContainer = document.getElementById('toto');
            totoContainer.appendChild(resultDiv);
        })
        .catch(function(error) {
            console.log('There was an error!', error);
        });
    });
  });