document.getElementById('logVisitButton').addEventListener('click', function() {
    fetch('/logs')
        .then(response => response.json())
        .then(data => {
            alert('Logs: ' + JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error('Error fetching logs:', error);
        });
});
