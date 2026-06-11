"use strict";

// FormELements
// inputs
const cpfInput = document.querySelector("#CPF");
const clienteInput = document.querySelector("#CLIENTE");
const telefoneInput = document.querySelector("#telefone");
const veiculoInput = document.querySelector("#veiculo");
const anoInput = document.querySelector("#ano");
const placaInput = document.querySelector("#PLACA");
const statusInput = document.querySelector("#Status");
const serviçosInput = document.querySelector("#serviçosPeças");
const atendenteInput = document.querySelector("#atendente");
const mecanicoInput = document.querySelector("#MECANICO");
const dataInput = document.querySelector("#data");
const orçamentoInput = document.querySelector("#Orçamento");
// buttons
const btnCadastrar = document.querySelector("#cadastrar");
const btnEdit = document.querySelector("#editar");
const btnExcluir = document.querySelector("#excluir");

// Table
const btnSearchEl = document.querySelector("#searchBtn");
const btnDeleteAll = document.querySelector("#deleteAll");
const inputSearchEl = document.querySelector("#search");
const tableBodyEl = document.querySelector("#tableClientes");

//Storage
const clientesStorage = JSON.parse(localStorage.getItem("clientes")) || [];

// Delete All Data ⚠️
btnDeleteAll.addEventListener("click", function () {
  localStorage.clear();
  tableBodyEl.innerHTML = "";
});

// Refactoring
const addRow = function (cliente) {
  const row = `
 <tr id=${cliente.cpf}>
   <td>${cliente.cpf}</td>
   <td>${cliente.clienteNome}</td>
   <td>${cliente.veiculo}</td>
   <td>${cliente.anoModelo}</td>
   <td>${cliente.placa}</td>
   <td>${cliente.status}</td>
   <td>${cliente.data}</td>
   <td>${cliente.orçamento}</td>
   <td>${cliente.serviços}</td>
 </tr>
  `;
  console.log("addRow did:");
  console.log(row);
  tableBodyEl.insertAdjacentHTML("afterbegin", row);
};

// Rendering
clientesStorage.forEach((cliente) => {
  console.log(cliente);

  const clienteRow = `
  <tr id=${cliente.cpf}>
   <td>${cliente.cpf}</td>
   <td>${cliente.clienteNome}</td>
   <td>${cliente.veiculo}</td>
   <td>${cliente.anoModelo}</td>
   <td>${cliente.placa}</td>
   <td>${cliente.status}</td>
   <td>${cliente.data}</td>
   <td>${cliente.orçamento}</td>
   <td>${cliente.serviços}</td>
 </tr>  
  `;

  tableBodyEl.insertAdjacentHTML("afterbegin", clienteRow);
});

btnCadastrar.addEventListener("click", function () {
  const cliente = {
    cpf: cpfInput.value,
    clienteNome: clienteInput.value,
    veiculo: veiculoInput.value,
    anoModelo: anoInput.value,
    placa: placaInput.value,
    status: statusInput.value,
    telefone: telefoneInput.value,
    data: dataInput.value,
    orçamento: orçamentoInput.value,
    mecanico: mecanicoInput.value,
    atendente: atendenteInput.value,
    serviços: serviçosInput.value,
  };

  clientesStorage.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientesStorage));
  console.log("AFTER REGISTER");
  console.log(clientesStorage);

  // const clienteRow = `
  //   <tr id=${cliente.cpf}>
  //    <td>${cliente.cpf}</td>
  //    <td>${cliente.clienteNome}</td>
  //    <td>${cliente.veiculo}</td>
  //    <td>${cliente.anoModelo}</td>
  //    <td>${cliente.placa}</td>
  //    <td>${cliente.status}</td>
  //   <td>${cliente.data}</td>
  //  <td>${cliente.orçamento}</td>
  //  <td>${cliente.serviços}</td>
  //    </tr>
  //   `;

  addRow(cliente);

  // tableBodyEl.insertAdjacentHTML("afterbegin", clienteRow);

  cpfInput.value = "";
  clienteInput.value = "";
  veiculoInput.value = "";
  anoInput.value = "";
  placaInput.value = "";
  statusInput.value = "";
  telefoneInput.value = "";
  dataInput.value = "";
  orçamentoInput.value = "";
  mecanicoInput.value = "";
  atendenteInput.value = "";
  serviçosInput.value = "";
});

// consult
btnSearchEl.addEventListener("click", function () {
  clientesStorage.forEach((cliente) => {
    if (inputSearchEl.value === cliente.cpf) {
      console.log(cliente);

      // selecting row(coloring)
      const row = document.getElementById(cliente.cpf);
      console.log(row);
      console.log(row.tagName);
      console.log(row.parentElement.tagName);
      row.style.backgroundColor = "yellow";

      // move row up
      const tbody = row.parentElement;
      tbody.prepend(row);

      // puttig info onto the form
      cpfInput.value = cliente.cpf;
      clienteInput.value = cliente.clienteNome;
      veiculoInput.value = cliente.veiculo;
      anoInput.value = cliente.anoModelo;
      placaInput.value = cliente.placa;
      statusInput.value = cliente.status;
      telefoneInput.value = cliente.telefone;
      dataInput.value = cliente.data;
      orçamentoInput.value = cliente.orçamento;
      mecanicoInput.value = cliente.mecanico;
      atendenteInput.value = cliente.atendente;
      serviçosInput.value = cliente.serviços;

      btnEdit.addEventListener("click", function () {
        // update current client object
        cliente.cpf = cpfInput.value;
        cliente.clienteNome = clienteInput.value;
        cliente.veiculo = veiculoInput.value;
        cliente.anoModelo = anoInput.value;
        cliente.placa = placaInput.value;
        cliente.status = statusInput.value;
        cliente.telefone = telefoneInput.value;
        cliente.data = dataInput.value;
        cliente.orçamento = orçamentoInput.value;
        cliente.mecanico = mecanicoInput.value;
        cliente.atendente = atendenteInput.value;
        cliente.serviços = serviçosInput.value;

        localStorage.setItem("clientes", JSON.stringify(clientesStorage));

        //update row
        const html = `
    <tr id=${cliente.cpf}>
     <td>${cliente.cpf}</td>
     <td>${cliente.clienteNome}</td>
     <td>${cliente.veiculo}</td>
     <td>${cliente.anoModelo}</td>
     <td>${cliente.placa}</td>
     <td>${cliente.status}</td>
         <td>${cliente.data}</td>
   <td>${cliente.orçamento}</td>
   <td>${cliente.serviços}</td>
   </tr>
        
        `;
        row.innerHTML = html;
        // reseting
        btnEdit.style.display = "none ";
        btnExcluir.style.display = "none ";

        row.style.backgroundColor = "white";
        inputSearchEl.value = "";
        //
        cpfInput.value = "";
        clienteInput.value = "";
        veiculoInput.value = "";
        anoInput.value = "";
        placaInput.value = "";
        statusInput.value = "";
        telefoneInput.value = "";
        dataInput.value = "";
        orçamentoInput.value = "";
        mecanicoInput.value = "";
        atendenteInput.value = "";
        serviçosInput.value = "";
      });
      btnEdit.style.display = "block";
      btnExcluir.style.display = "block";
    }
  });
});

btnExcluir.addEventListener("click", function () {
  clientesStorage.forEach((c, i) => {
    console.log(i);
    // sel row
    if (c.cpf === inputSearchEl.value) {
      console.log(i);
      const deleted = clientesStorage.splice(i, 1);
      console.log("deleted");
      console.log(deleted);

      const row = document.getElementById(c.cpf);

      localStorage.setItem("clientes", JSON.stringify(clientesStorage));
      console.log(row);
      row.remove();
    }
  });
  btnExcluir.style.display = "none";
  btnEdit.style.display = "none";
  inputSearchEl.value = "";
  //
  cpfInput.value = "";
  clienteInput.value = "";
  veiculoInput.value = "";
  anoInput.value = "";
  placaInput.value = "";
  statusInput.value = "";
  telefoneInput.value = "";
  dataInput.value = "";
  orçamentoInput.value = "";
  mecanicoInput.value = "";
  atendenteInput.value = "";
  serviçosInput.value = "";
});
