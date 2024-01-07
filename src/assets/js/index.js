let lista = document.getElementById('productTable')
window.addEventListener('load', carregaProdutos);

function carregaProdutos() {

    fetch(`https://run.mocky.io/v3/6ba6c52f-0ce4-4e12-9427-680388a9613b`)
    .then((response) => response.json())
    .then(data => {
      data.map((produto) => {
        lista.innerHTML +=
        `<tr>
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.preco}</td>
        <td>
        <a href="edicao.html"><button id="editar"><i class="fa-regular fa-pen-to-square"></i></button></a>
        </td>
        <td>
        <button id="apagar"><i class="fa-solid fa-trash-can"></i></button>
        </td>
      </tr>`
 }
      )
       }
    ) 
     }
