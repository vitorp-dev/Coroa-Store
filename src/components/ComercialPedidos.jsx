import { useMemo, useState } from 'react';
import brandImage from '../assets/icones/coroa_store.png';

const statusOptions = [
  'Aguardando aprovação do pedido',
  'Aprovado',
  'Faturado',
  'Em separação',
  'Saiu para entrega',
  'Entregue',
];

const workspaceSections = [
  'Dashboard',
  'Pedidos',
  'Clientes',
  'Catálogo',
  'Financeiro',
  'Relatórios',
  'Configurações',
];

function parseCurrency(price) {
  return Number(price.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function buildOrderStep(label, activeLabel, completedLabels) {
  const done = completedLabels.includes(label);

  if (done) {
    return { label, time: 'Concluído', done: true };
  }

  return {
    label,
    time: label === activeLabel ? 'Em andamento' : 'Aguardando',
    done: false,
  };
}

function getOrderPresentation(status) {
  if (status === 'Aguardando aprovação do pedido') {
    return {
      progress: 18,
      eta: 'Pedido em análise comercial',
      canEdit: true,
      steps: [
        { label: 'Pedido enviado', time: 'Concluído', done: true },
        { label: 'Aguardando aprovação do pedido', time: 'Em andamento', done: false },
        { label: 'Faturamento', time: 'Aguardando', done: false },
        { label: 'Separação', time: 'Aguardando', done: false },
      ],
    };
  }

  if (status === 'Aprovado') {
    return {
      progress: 32,
      eta: 'Pedido aprovado pela equipe comercial',
      canEdit: true,
      steps: [
        { label: 'Pedido enviado', time: 'Concluído', done: true },
        { label: 'Aprovação comercial', time: 'Concluído', done: true },
        { label: 'Faturamento', time: 'Em andamento', done: false },
        { label: 'Separação', time: 'Aguardando', done: false },
      ],
    };
  }

  if (status === 'Faturado') {
    return {
      progress: 48,
      eta: 'Pedido faturado e aguardando separação',
      canEdit: false,
      steps: [
        { label: 'Pedido enviado', time: 'Concluído', done: true },
        { label: 'Aprovação comercial', time: 'Concluído', done: true },
        { label: 'Faturamento', time: 'Concluído', done: true },
        { label: 'Separação', time: 'Em andamento', done: false },
      ],
    };
  }

  if (status === 'Em separação') {
    return {
      progress: 68,
      eta: 'Pedido em separação no centro de distribuição',
      canEdit: false,
      steps: [
        buildOrderStep('Pedido enviado', '', ['Pedido enviado']),
        buildOrderStep('Aprovação comercial', '', ['Pedido enviado', 'Aprovação comercial']),
        buildOrderStep('Faturamento', '', ['Pedido enviado', 'Aprovação comercial', 'Faturamento']),
        buildOrderStep('Separação', 'Separação', ['Pedido enviado', 'Aprovação comercial', 'Faturamento']),
      ],
    };
  }

  if (status === 'Saiu para entrega') {
    return {
      progress: 86,
      eta: 'Pedido saiu para entrega',
      canEdit: false,
      steps: [
        buildOrderStep('Pedido enviado', '', ['Pedido enviado']),
        buildOrderStep('Aprovação comercial', '', ['Pedido enviado', 'Aprovação comercial']),
        buildOrderStep('Faturamento', '', ['Pedido enviado', 'Aprovação comercial', 'Faturamento']),
        buildOrderStep('Saiu para entrega', 'Saiu para entrega', ['Pedido enviado', 'Aprovação comercial', 'Faturamento']),
      ],
    };
  }

  return {
    progress: 100,
    eta: 'Pedido entregue ao cliente',
    canEdit: false,
    steps: [
      buildOrderStep('Pedido enviado', '', ['Pedido enviado']),
      buildOrderStep('Aprovação comercial', '', ['Pedido enviado', 'Aprovação comercial']),
      buildOrderStep('Faturamento', '', ['Pedido enviado', 'Aprovação comercial', 'Faturamento']),
      buildOrderStep('Entregue', '', ['Pedido enviado', 'Aprovação comercial', 'Faturamento', 'Entregue']),
    ],
  };
}

function Icon({ type }) {
  const commonProps = { viewBox: '0 0 24 24', 'aria-hidden': 'true' };

  switch (type) {
    case 'search':
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case 'chevron-left':
      return (
        <svg {...commonProps}>
          <path d="m14.5 6-6 6 6 6" />
        </svg>
      );
    case 'bell':
      return (
        <svg {...commonProps}>
          <path d="M6 9a6 6 0 0 1 12 0v4l1.6 2.2a1 1 0 0 1-.8 1.6H5.2a1 1 0 0 1-.8-1.6L6 13.1Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      );
    case 'user':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19a7 7 0 0 1 14 0" />
        </svg>
      );
    case 'package':
      return (
        <svg {...commonProps}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z" />
          <path d="m12 3 8 4.5-8 4.5L4 7.5Z" />
          <path d="M12 12v9" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6Z" />
          <path d="m9.5 12 1.7 1.7L14.8 10" />
        </svg>
      );
    case 'credit-card':
      return (
        <svg {...commonProps}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h3" />
        </svg>
      );
    case 'logout':
      return (
        <svg {...commonProps}>
          <path d="M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" />
          <path d="m14 16 4-4-4-4" />
          <path d="M18 12H9" />
        </svg>
      );
    case 'plus':
      return (
        <svg {...commonProps}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export default function ComercialPedidos({
  currentUser,
  onLogout,
  trackedOrders,
  setTrackedOrders,
}) {
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const totalOrders = trackedOrders.length;
  const approvalOrders = trackedOrders.filter(
    (order) => order.status === 'Aguardando aprovação do pedido',
  ).length;
  const invoicedOrders = trackedOrders.filter((order) => order.status === 'Faturado').length;

  const selectedOrder = useMemo(
    () => trackedOrders.find((order) => order.id === selectedOrderId) || null,
    [trackedOrders, selectedOrderId],
  );

  const filteredOrders = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return trackedOrders;
    }

    return trackedOrders.filter((order) =>
      [order.id, order.customer, order.customerEmail, order.status]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedSearch)),
    );
  }, [searchTerm, trackedOrders]);

  const selectedOrderTotal = selectedOrder
    ? selectedOrder.lineItems.reduce(
        (sum, item) => sum + parseCurrency(item.price) * item.quantity,
        0,
      )
    : 0;

  const selectedOrderItemsCount = selectedOrder
    ? selectedOrder.lineItems.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  function selectOrder(orderId) {
    setSelectedOrderId(orderId);
    setStatusMessage('');
  }

  function updateSelectedOrderStatus(nextStatus) {
    setTrackedOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === selectedOrderId ? { ...order, status: nextStatus } : order,
      ),
    );
  }

  function updateSelectedOrderItemQuantity(itemName, nextQuantity) {
    if (nextQuantity < 1) {
      return;
    }

    setTrackedOrders((currentOrders) =>
      currentOrders.map((order) => {
        if (order.id !== selectedOrderId) {
          return order;
        }

        return {
          ...order,
          lineItems: order.lineItems.map((item) =>
            item.name === itemName ? { ...item, quantity: nextQuantity } : item,
          ),
        };
      }),
    );
  }

  function saveSelectedOrder() {
    if (!selectedOrder) {
      return;
    }

    const totalItems = selectedOrder.lineItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalValue = selectedOrder.lineItems.reduce(
      (sum, item) => sum + parseCurrency(item.price) * item.quantity,
      0,
    );
    const presentation = getOrderPresentation(selectedOrder.status);

    setTrackedOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === selectedOrder.id
          ? {
              ...order,
              total: formatCurrency(totalValue),
              items: `${totalItems} item(ns)`,
              progress: presentation.progress,
              eta: presentation.eta,
              canEdit: presentation.canEdit,
              steps: presentation.steps,
            }
          : order,
      ),
    );

    setStatusMessage(`Pedido ${selectedOrder.id} atualizado e disponível para o cliente.`);
  }

  return (
    <main className="manager-page">
      <header className="manager-topbar">
        <div className="manager-topbar__brand">
          <div className="manager-brand">
            <img src={brandImage} alt="Coroa Store" />
          </div>

          <div className="manager-workspace">
            <span>Workspace {currentUser.role}</span>
            <strong>Central de Pedidos</strong>
          </div>
        </div>

        <label className="manager-search" aria-label="Buscar pedidos">
          <span className="manager-icon manager-icon--muted">
            <Icon type="search" />
          </span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar pedidos, clientes ou produtos..."
          />
          <span className="manager-search__shortcut">K</span>
        </label>

        <div className="manager-topbar__actions">
          <button type="button" className="manager-notification" aria-label="Notificações">
            <span className="manager-icon">
              <Icon type="bell" />
            </span>
            <span className="manager-notification__badge">{approvalOrders}</span>
          </button>

          <div className="manager-usercard">
            <span className="manager-usercard__avatar">{currentUser.name.slice(0, 2).toUpperCase()}</span>
            <div>
              <strong>{currentUser.name}</strong>
              <span>{currentUser.role}</span>
            </div>
          </div>

          <button type="button" className="manager-logout" onClick={onLogout}>
            <span className="manager-icon">
              <Icon type="logout" />
            </span>
            Sair
          </button>
        </div>
      </header>

      <section className="manager-layout">
        <aside className="manager-sidebar">
          <div className="manager-sidebar__nav">
            {workspaceSections.map((section) => (
              <button
                key={section}
                type="button"
                className={`manager-sidebar__link ${section === 'Pedidos' ? 'is-active' : ''}`}
              >
                <span className="manager-icon">
                  <Icon type={section === 'Pedidos' ? 'package' : 'user'} />
                </span>
                {section}
              </button>
            ))}
          </div>

          <div className="manager-sidebar__support">
            <span className="manager-icon manager-icon--soft">
              <Icon type="shield" />
            </span>
            <div>
              <strong>Precisa de ajuda?</strong>
              <span>Fale com o suporte</span>
            </div>
          </div>
        </aside>

        <div className="manager-panel manager-panel--sidebar">
          <div className="manager-panel__intro">
            <div className="manager-heading">
              <span>Pedidos</span>
              <h2>Centralizados para análise</h2>
            </div>

            <div className="manager-kpis" aria-label="Resumo operacional">
              <article>
                <strong>{totalOrders}</strong>
                <span>Total de pedidos</span>
              </article>
              <article>
                <strong>{approvalOrders}</strong>
                <span>Aguardando aprovação</span>
              </article>
              <article>
                <strong>{invoicedOrders}</strong>
                <span>Faturados</span>
              </article>
            </div>
          </div>

          {filteredOrders.length ? (
            <div className="manager-order-list">
              {filteredOrders.map((order) => (
                <button
                  key={order.id}
                  type="button"
                  className={`manager-order-card ${selectedOrderId === order.id ? 'is-active' : ''}`}
                  onClick={() => selectOrder(order.id)}
                >
                  <div className="manager-order-card__content">
                    <div>
                      <span>{order.id}</span>
                      <strong>{order.customer}</strong>
                    </div>
                    <small className="manager-order-card__status">{order.status}</small>
                  </div>

                  <div className="manager-order-card__amount">
                    <strong>{order.total}</strong>
                    <small>{order.createdAt}</small>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="store-catalog__empty">
              <strong>Nenhum pedido recebido</strong>
              <span>Assim que um cliente finalizar um pedido, ele aparecerá aqui.</span>
            </div>
          )}
        </div>

        <div className="manager-panel manager-panel--details">
          <div className="manager-panel__intro manager-panel__intro--row">
            <div className="manager-details-heading">
              <button type="button" className="manager-back-button" aria-label="Voltar">
                <span className="manager-icon">
                  <Icon type="chevron-left" />
                </span>
              </button>

              <div className="manager-heading">
                <span>Detalhes</span>
                <h2>{selectedOrder ? `Editar pedido ${selectedOrder.id}` : 'Selecione um pedido'}</h2>
                {selectedOrder ? <small>Criado em {selectedOrder.createdAt}</small> : null}
              </div>
            </div>

            {selectedOrder ? (
              <div className="manager-order-chip">
                <span>{selectedOrder.status}</span>
                <strong>{selectedOrder.total}</strong>
              </div>
            ) : null}
          </div>

          {selectedOrder ? (
            <div className="manager-editor">
              <div className="manager-editor__meta">
                <div className="manager-editor__customer">
                  <div className="manager-customer-badge">
                    <span className="manager-icon">
                      <Icon type="user" />
                    </span>
                  </div>

                  <div>
                    <span>Dados do cliente</span>
                    <strong>{selectedOrder.customer}</strong>
                    <small>{selectedOrder.customerEmail}</small>
                    <em>{selectedOrder.items}</em>
                  </div>
                </div>

                <div className="manager-editor__controls">
                  <label className="manager-field">
                    <span>Status do pedido</span>
                    <select
                      value={selectedOrder.status}
                      onChange={(event) => updateSelectedOrderStatus(event.target.value)}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="manager-field">
                    <span>Data de entrega</span>
                    <input type="text" value={selectedOrder.createdAt} readOnly />
                  </label>
                </div>
              </div>

              <div className="manager-editor__block">
                <div className="manager-editor__block-head">
                  <strong>Itens do pedido</strong>
                  <small>Atualize as quantidades antes de salvar.</small>
                </div>

                <div className="manager-editor__items">
                  {selectedOrder.lineItems.map((item) => (
                    <article key={`${selectedOrder.id}-${item.name}`} className="manager-item-row">
                      <div className="manager-item-row__content">
                        <strong>{item.name}</strong>
                        <small>{item.price} por unidade</small>
                      </div>

                      <strong className="manager-item-row__unit-price">{item.price}</strong>

                      <label className="manager-field manager-field--compact">
                        <span>Qtd.</span>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(event) =>
                            updateSelectedOrderItemQuantity(item.name, Number(event.target.value))
                          }
                        />
                      </label>

                      <strong className="manager-item-row__subtotal">
                        {formatCurrency(parseCurrency(item.price) * item.quantity)}
                      </strong>
                    </article>
                  ))}
                </div>

                <button type="button" className="manager-add-item">
                  <span className="manager-icon">
                    <Icon type="plus" />
                  </span>
                  Adicionar produto
                </button>
              </div>

              <div className="manager-editor__footer">
                <button
                  type="button"
                  className="login-submit manager-save-button"
                  onClick={saveSelectedOrder}
                >
                  Salvar alterações
                </button>
                {statusMessage ? <p className="store-cart__status">{statusMessage}</p> : null}
              </div>
            </div>
          ) : (
            <div className="store-catalog__empty">
              <strong>Escolha um pedido para editar</strong>
              <span>Admin e comercial podem revisar itens e atualizar o status antes de salvar.</span>
            </div>
          )}
        </div>

        <aside className="manager-summary">
          <div className="manager-summary__panel">
            <div className="manager-summary__heading">
              <strong>Resumo do pedido</strong>
            </div>

            {selectedOrder ? (
              <>
                <div className="manager-summary__total">
                  <span>Total do pedido</span>
                  <strong>{formatCurrency(selectedOrderTotal)}</strong>
                </div>

                <div className="manager-summary__totals">
                  <div>
                    <span>Subtotal ({selectedOrderItemsCount} itens)</span>
                    <strong>{formatCurrency(selectedOrderTotal)}</strong>
                  </div>
                  <div>
                    <span>Descontos</span>
                    <strong>R$ 0,00</strong>
                  </div>
                  <div>
                    <span>Frete</span>
                    <strong>R$ 0,00</strong>
                  </div>
                  <div className="is-total">
                    <span>Total</span>
                    <strong>{formatCurrency(selectedOrderTotal)}</strong>
                  </div>
                </div>

                <div className="manager-summary__status">
                  <article>
                    <span className="manager-icon manager-icon--soft">
                      <Icon type="package" />
                    </span>
                    <div>
                      <strong>Status de entrega</strong>
                      <small>{selectedOrder.status}</small>
                    </div>
                  </article>

                  <article>
                    <span className="manager-icon manager-icon--soft">
                      <Icon type="credit-card" />
                    </span>
                    <div>
                      <strong>Status de pagamento</strong>
                      <small>{selectedOrder.status === 'Faturado' ? 'Pago' : 'Pendente'}</small>
                    </div>
                  </article>
                </div>

                <button
                  type="button"
                  className="login-submit manager-save-button manager-save-button--summary"
                  onClick={saveSelectedOrder}
                >
                  Salvar alterações
                </button>
              </>
            ) : (
              <div className="store-catalog__empty">
                <strong>Nenhum pedido selecionado</strong>
                <span>Selecione um pedido para ver o resumo financeiro.</span>
              </div>
            )}
          </div>

          <div className="manager-summary__panel manager-summary__panel--security">
            <span className="manager-icon manager-icon--soft">
              <Icon type="shield" />
            </span>
            <div>
              <strong>Segurança</strong>
              <span>Todas as alterações são registradas com data, hora e usuário.</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
