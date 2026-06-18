const trackedOrders = [
  {
    id: '#GC-1048',
    status: 'Em separacao',
    customer: 'Cliente Coroa',
    total: 'R$ 1.254,30',
    items: '12 itens',
    eta: 'Entrega prevista hoje, 17:30',
    progress: 68,
    steps: [
      { label: 'Pedido recebido', time: 'Hoje, 10:42', done: true },
      { label: 'Pagamento aprovado', time: 'Hoje, 10:49', done: true },
      { label: 'Separacao', time: 'Em andamento', done: true },
      { label: 'Saiu para entrega', time: 'Proxima etapa', done: false },
    ],
  },
  {
    id: '#GC-1047',
    status: 'Aguardando faturamento',
    customer: 'Distribuidora Norte',
    total: 'R$ 842,60',
    items: '8 itens',
    eta: 'Previsao para amanha, 09:00',
    progress: 42,
    steps: [
      { label: 'Pedido recebido', time: 'Ontem, 16:18', done: true },
      { label: 'Validacao comercial', time: 'Ontem, 16:31', done: true },
      { label: 'Faturamento', time: 'Em analise', done: false },
      { label: 'Separacao', time: 'Aguardando', done: false },
    ],
  },
  {
    id: '#GC-1046',
    status: 'Entregue',
    customer: 'Mercado Primavera',
    total: 'R$ 1.678,90',
    items: '15 itens',
    eta: 'Entregue em 22/05, 11:03',
    progress: 100,
    steps: [
      { label: 'Pedido recebido', time: '22/05, 08:14', done: true },
      { label: 'Separacao concluida', time: '22/05, 09:02', done: true },
      { label: 'Saiu para entrega', time: '22/05, 09:48', done: true },
      { label: 'Entregue', time: '22/05, 11:03', done: true },
    ],
  },
];

export default function AcompanhamentoPedidos({ onBackToCatalog }) {
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
          </article>
        ))}
      </div>
    </section>
  );
}
