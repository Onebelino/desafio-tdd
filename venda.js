function calcularVenda(venda) {
  let subtotal = 0;

  venda.itens.forEach(item => {
    let valorComDesconto = item.valorItem;

    //DESAFIO 01 - DESCONTO PERCENTUAL
    if (item.descontoPercentual > 0) {
      valorComDesconto -= (item.valorItem * item.descontoPercentual) / 100;
    }

    //DESAFIO 02 - DESCONTO REAL
    if (item.descontoReal > 0) {
      valorComDesconto -= item.descontoReal;
    }

    if(item.descontoPercentual > item.descontoReal) {

    }

    subtotal += valorComDesconto;
  });

  return {
    totalFinal: subtotal
  };
}

module.exports = calcularVenda;