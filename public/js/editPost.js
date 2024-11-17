const editButtonHandler = async (event) => {
  event.preventDefault()
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const name = document.getElementById('name-edit').value
    const description = document.getElementById('description-edit').value


    if (name && description) {


      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/view-posts');
      } else {
        alert('Failed to delete project');
      }
    }
  }
};

document
  .querySelector('.edit-form')
  .addEventListener('submit', editButtonHandler);
