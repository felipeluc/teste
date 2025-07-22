function enviarComprovante() {
  const numero = document.getElementById("numeroCliente").value.trim();
  const valor = document.getElementById("valorVenda").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  if (!numero || !valor || !descricao) {
    alert("Preencha todos os campos antes de enviar o comprovante.");
    return;
  }

  const mensagem = `Olá! Segue o comprovante da sua compra:\n\nProduto/Serviço: ${descricao}\nValor: R$ ${valor}\n\nAgradecemos pela preferência! 😊`;

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}