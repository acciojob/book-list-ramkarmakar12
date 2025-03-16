//your JS code here. If required.
//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function (event) {
      event.preventDefault();

      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const isbn = document.getElementById('isbn').value;

      if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields.');
        return;
      }

      const newRow = document.createElement('tr');

      newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger">Clear</button></td>
      `;

      document.getElementById('book-list').appendChild(newRow);

      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';

      newRow.querySelector('.delete').addEventListener('click', function () {
        newRow.remove();
      });
    });
