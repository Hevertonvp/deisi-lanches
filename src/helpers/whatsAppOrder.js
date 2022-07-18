

function WhatsAppOrder(     
    cartState,
    costumerData,                                              
    isDelivery,                                                         //Dont format this!
    cartValue) {
    let wpOrder = []
    cartState?.orders.forEach(((order, index) => {
        let { name, price, quantity } = order
        var selected = order.selected.length > 0 ?
            order.selected.map(selected => `${selected.name}`) : ""
        wpOrder.push([
            `*${name}* ${selected.length === 0 ? "comum"
                : "com ingrediente(s) extra(s)"}
            ${quantity > 1 ? quantity + "unidades"
                : ""}
${selected}, R$${price.toFixed(2).replace('.', ',')}\n
******************************** \n\n`
        ])
    }))
    return (
        `
*Endereço:* ${costumerData.address}\n
*Forma de pagamento:* ${costumerData.paymentType}\n
*Deseja entrega:* ${isDelivery ? "Sim" : "Não"}\n\n
*Total de itens: ${cartState.orders.length}*\n\n
${wpOrder} \n *VALOR TOTAL: RS ${cartValue}* 
`
    )
}

export default WhatsAppOrder