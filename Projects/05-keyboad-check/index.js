const insert = document.querySelector('#insert')
window.addEventListener('keydown', function(e){
    console.log(e);
    
    insert.innerHTML = `<div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'space': e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>`
    
})