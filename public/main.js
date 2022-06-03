const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const trash = document.getElementsByClassName("fa-trash-o");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const miles = this.parentNode.parentNode.childNodes[1].innerText
        const date = this.parentNode.parentNode.childNodes[3].innerText
        console.log(miles,date)
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'miles': miles,
            'date': date
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
