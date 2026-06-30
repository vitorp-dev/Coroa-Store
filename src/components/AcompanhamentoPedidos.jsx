import { useState } from 'react';

export const initialTrackedOrders = [];

export default function AcompanhamentoPedidos({
  onBackToCatalog,
  onEditOrder,
  trackedOrders = initialTrackedOrders,
}) {
  const [expandedOrderId, setExpandedOrderId] = useState('');

  return (
    <section className="order-tracking order-tracking--screen" aria-labelledby="tracking-title">
      <div className="store-section-heading">
        <div className="store-section-title">
          <span>Acompanhamento</span>
          <h2 id="tracking-title">Pedidos em tempo real</h2>
        </div>
        <button type="button" className="store-view-all" onClick={onBackToCatalog}>
          Novo pedido
        </button>
      </div>

      {trackedOrders.length ? (
        <div className="order-tracking__grid">
          {trackedOrders.map((order) => (
            <article key={order.id} className="order-tracking__card">
              <div className="order-tracking__header">
                <div>
                  <span>{order.id}</span>
                  <strong>{order.status}</strong>
                </div>
                <small>{order.items}</small>
              </div>

              <div className="order-tracking__meta">
                <span>{order.customer}</span>
                <strong>{order.total}</strong>
                <small>{order.eta}</small>
              </div>

              <div className="order-tracking__progress" aria-label={`Progresso ${order.progress}%`}>
                <span style={{ width: `${order.progress}%` }} />
              </div>

              <ol className="order-tracking__timeline">
                {order.steps.map((step) => (
                  <li key={`${order.id}-${step.label}`} className={step.done ? 'is-done' : ''}>
                    <span aria-hidden="true" />
                    <div>
                      <strong>{step.label}</strong>
                      <small>{step.time}</small>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="order-tracking__actions">
                <button
                  type="button"
                  className="order-tracking__action"
                  onClick={() =>
                    setExpandedOrderId((currentOrderId) =>
                      currentOrderId === order.id ? '' : order.id,
                    )
                  }
                >
                  {expandedOrderId === order.id ? 'Ocultar itens' : 'Ver itens do pedido'}
                </button>

                {order.canEdit && onEditOrder ? (
                  <button
                    type="button"
                    className="order-tracking__action order-tracking__action--secondary"
                    onClick={() => onEditOrder?.(order)}
                  >
                    Editar pedido
                  </button>
                ) : null}
              </div>

              {expandedOrderId === order.id ? (
                <div className="order-tracking__details">
                  <strong>Itens do pedido</strong>
                  <ul className="order-tracking__items">
                    {order.lineItems?.map((item) => (
                      <li key={`${order.id}-${item.cartKey || item.name}`}>
                        <div>
                          <span>{item.name}</span>
                          <small>{item.quantity} unidade(s)</small>
                        </div>
                        <strong>{item.price}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="store-catalog__empty">
          <strong>Nenhum pedido criado ainda</strong>
          <span>Finalize um pedido no carrinho para acompanhar o status por aqui.</span>
        </div>
      )}
    </section>
  );
}
