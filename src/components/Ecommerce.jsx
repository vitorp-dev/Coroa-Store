import { useState } from 'react';
import titleCrownIcon from '../assets/Imagenslogin/icon_coroa.png';
import bgProdutos from '../assets/ImgProduto/bg_produtos.png';
import kitRefri from '../assets/ImgProduto/kit_refri.png';
import KitBw from '../assets/ImgProduto/kit_bw.png';
import kitCampinho from '../assets/ImgProduto/kit_campinho.png';
import KitTeresense from '../assets/ImgProduto/kit_teresense.png';
import AcompanhamentoPedidos from './AcompanhamentoPedidos';

const ecommerceProducts = [
  {
    name: 'Linha de Refrigerantes',
    description: 'Linha completa para giro rapido no ponto de venda.',
    price: 'R$ 128,90',
    image: kitRefri,
    icon: 'bubbles',
    category: 'Refrigerantes',
  },
  {
    name: 'Linha Bad Wolf',
    description: 'Energeticos para campanhas e oportunidades.',
    price: 'R$ 142,50',
    image: KitBw,
    icon: 'bolt',
    category: 'Energeticos',
  },
  {
    name: 'Linha Campinho',
    description: 'Produtos em destaque para ofertas comerciais.',
    price: 'R$ 96,40',
    image: kitCampinho,
    icon: 'drop',
    category: 'Aguas',
  },
  {
    name: 'Linha Artesanal',
    description: 'Embalagens para abastecimento recorrente.',
    price: 'R$ 174,20',
    image: KitTeresense,
    icon: 'barrel',
    category: 'Artesanais',
  },
  {
    name: 'Kit Refri Familia',
    description: 'Combinacao pratica para reposicao de refrigerantes.',
    price: 'R$ 156,80',
    image: kitRefri,
    icon: 'bubbles',
    category: 'Refrigerantes',
  },
  {
    name: 'Kit Bad Wolf Mix',
    description: 'Selecao de energeticos para giro em campanhas.',
    price: 'R$ 188,40',
    image: KitBw,
    icon: 'bolt',
    category: 'Energeticos',
  },
  {
    name: 'Kit Campinho Agua',
    description: 'Opcoes leves para abastecimento diario do ponto.',
    price: 'R$ 82,90',
    image: kitCampinho,
    icon: 'drop',
    category: 'Aguas',
  },
  {
    name: 'Pack Artesanais',
    description: 'Rotulos especiais para clientes de maior valor.',
    price: 'R$ 219,70',
    image: KitTeresense,
    icon: 'barrel',
    category: 'Artesanais',
  },
  {
    name: 'Combo Promocional',
    description: 'Mix estrategico para montar ofertas comerciais.',
    price: 'R$ 132,60',
    image: kitRefri,
    icon: 'cart',
    category: 'Refrigerantes',
  },
  {
    name: 'Reposicao Express',
    description: 'Produtos selecionados para pedidos recorrentes.',
    price: 'R$ 164,30',
    image: KitBw,
    icon: 'chart',
    category: 'Energeticos',
  },
  {
    name: 'Selecao Ponto Alto',
    description: 'Mix premium para pontos com maior volume de venda.',
    price: 'R$ 246,90',
    image: KitTeresense,
    icon: 'barrel',
    category: 'Artesanais',
  },
  {
    name: 'Combo Giro Rapido',
    description: 'Itens campeoes para acelerar a reposicao da loja.',
    price: 'R$ 118,50',
    image: kitCampinho,
    icon: 'cart',
    category: 'Sucos',
  },
];

const categories = ['Todas', 'Energeticos', 'Sucos', 'Refrigerantes', 'Artesanais', 'Aguas'];

function parseCurrency(price) {
  return Number(price.replace('R$ ', '').replace('.', '').replace(',', '.'));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function StoreIcon({ type }) {
  if (type === 'search') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </svg>
    );
  }

  if (type === 'cart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h15l-2 8H7Z" />
        <path d="M5 6 4 3H2" />
        <circle cx="8" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    );
  }

  if (type === 'chart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 16v-5" />
        <path d="M12 16V7" />
        <path d="M17 16v-8" />
      </svg>
    );
  }

  if (type === 'bubbles') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="2.2" />
        <circle cx="15" cy="7" r="1.7" />
        <circle cx="15.5" cy="15" r="3.2" />
        <circle cx="7" cy="16" r="1.8" />
      </svg>
    );
  }

  if (type === 'bolt') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 5 13h6l-1 9 9-13h-6Z" />
      </svg>
    );
  }

  if (type === 'drop') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" />
      </svg>
    );
  }

  if (type === 'barrel') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h8" />
        <path d="M7 7h10" />
        <path d="M7 17h10" />
        <path d="M8 20h8" />
        <path d="M8 4c-1 3-1 13 0 16" />
        <path d="M16 4c1 3 1 13 0 16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h14v14H5Z" />
      <path d="M9 9h6v6H9Z" />
    </svg>
  );
}

export default function Ecommerce({ onLogout }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [cartItems, setCartItems] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const [currentScreen, setCurrentScreen] = useState('catalogo');

  const cartTotal = cartItems.reduce(
    (total, item) => total + parseCurrency(item.price) * item.quantity,
    0,
  );
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const filteredProducts = selectedCategory === 'Todas'
    ? ecommerceProducts
    : ecommerceProducts.filter((product) => product.category === selectedCategory);

  function addToCart(product) {
    setCartItems((currentItems) => {
      const productInCart = currentItems.find((item) => item.name === product.name);

      if (productInCart) {
        return currentItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    setOrderStatus('');
  }

  function decreaseCartItem(productName) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
    setOrderStatus('');
  }

  function removeCartItem(productName) {
    setCartItems((currentItems) => currentItems.filter((item) => item.name !== productName));
    setOrderStatus('');
  }

  function confirmOrder() {
    if (!cartItems.length) {
      setOrderStatus('Adicione pelo menos um produto para confirmar o pedido.');
      return;
    }

    setOrderStatus(`Pedido confirmado com ${cartQuantity} item(ns), total de ${formatCurrency(cartTotal)}.`);
    setCartItems([]);
  }

  return (
    <main
      className="store-page"
      style={{ '--products-bg': `url(${bgProdutos})` }}
    >
      <header className="store-topbar">
        <div className="store-brand">
          <img src={titleCrownIcon} alt="" />
          <div>
            <strong>Coroa Store</strong>
            <span>E-commerce B2B</span>
          </div>
        </div>

        <nav className="store-nav" aria-label="E-commerce">
          <button
            type="button"
            className={`store-nav__link ${currentScreen === 'catalogo' ? 'store-nav__link--active' : ''}`}
            onClick={() => setCurrentScreen('catalogo')}
          >
            Catalogo
          </button>
          <button
            type="button"
            className={`store-nav__link ${currentScreen === 'pedidos' ? 'store-nav__link--active' : ''}`}
            onClick={() => setCurrentScreen('pedidos')}
          >
            Pedidos
          </button>
          <a
            className="store-nav__link"
            href="#resumo"
            onClick={() => setCurrentScreen('catalogo')}
          >
            Resumo
          </a>
          <a
            className="store-nav__link"
            href="#carrinho"
            onClick={() => setCurrentScreen('catalogo')}
          >
            Carrinho
          </a>
        </nav>

        <div className="store-search">
          <label className="store-search__field">
            <span aria-hidden="true">
              <StoreIcon type="search" />
            </span>
            <input type="search" placeholder="Pesquisar produtos, linhas ou SKUs..." />
          </label>

          <div className="store-category">
            <button
              type="button"
              className="store-category__trigger"
              aria-expanded={isCategoryOpen}
              aria-haspopup="menu"
              onClick={() => setIsCategoryOpen((current) => !current)}
            >
              {selectedCategory}
              <span aria-hidden="true">v</span>
            </button>

            {isCategoryOpen ? (
              <div className="store-category__menu" role="menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    role="menuitem"
                    className={category === selectedCategory ? 'is-active' : ''}
                    onClick={() => {
                      setCurrentScreen('catalogo');
                      setSelectedCategory(category);
                      setIsCategoryOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="store-session">
          <button type="button" className="store-notification" aria-label="Notificacoes">
            <span>{cartQuantity}</span>
          </button>

          <div className="store-session__user" aria-label="Usuario logado">
            <span>GC</span>
            <div>
              <strong>Cliente Coroa</strong>
              <small>Online agora</small>
            </div>
          </div>

          <button type="button" className="store-logout" onClick={onLogout}>
            Sair
          </button>
        </div>
      </header>

      {currentScreen === 'pedidos' ? (
        <AcompanhamentoPedidos onBackToCatalog={() => setCurrentScreen('catalogo')} />
      ) : (
        <>
          <section className="store-hero" aria-labelledby="store-title">
            <div className="store-hero__content">
              <span className="store-eyebrow">Area interna</span>
              <h1 id="store-title">
                Monte pedidos com <span>velocidade comercial.</span>
              </h1>
              <p>
                Simulacoes de e-commerce B2B para consultar linhas, adicionar itens e
                acompanhar o resumo do pedido.
              </p>

              <div className="store-hero__features" aria-label="Recursos da plataforma">
                <article>
                  <StoreIcon type="catalog" />
                  <div>
                    <strong>Catalogo completo</strong>
                    <span>Explore nossas linhas</span>
                  </div>
                </article>
                <article>
                  <StoreIcon type="cart" />
                  <div>
                    <strong>Adicione seus itens</strong>
                    <span>Monte seu pedido</span>
                  </div>
                </article>
                <article>
                  <StoreIcon type="chart" />
                  <div>
                    <strong>Acompanhe tudo</strong>
                    <span>Resumo e historico</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="store-hero__media" aria-hidden="true">
              <img src={kitRefri} alt="" />
            </div>

            <aside className="store-summary" id="resumo" aria-label="Resumo do pedido">
              <span>Resumo do pedido</span>
              <small>Total estimado</small>
              <strong>{formatCurrency(cartTotal)}</strong>
              <small>{cartQuantity} item(ns) no carrinho</small>
              <a href="#carrinho">
                Ver carrinho
                <span aria-hidden="true">-&gt;</span>
              </a>
              <small>Ambiente seguro e confiavel</small>
            </aside>
          </section>

          <section id="catalogo" className="store-catalog" aria-labelledby="catalog-title">
            <div className="store-section-heading">
              <div className="store-section-title">
                <span>Catalogo</span>
                <h2 id="catalog-title">Produtos disponiveis</h2>
              </div>
              <button
                type="button"
                className="store-view-all"
                onClick={() => setSelectedCategory('Todas')}
              >
                Ver todas as linhas
              </button>
            </div>

            <div className="store-product-grid">
              {filteredProducts.map((product) => (
                <article key={product.name} className="store-product-card">
                  <div className="store-product-card__image">
                    <span className="store-product-card__icon">
                      <StoreIcon type={product.icon} />
                    </span>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="store-product-card__body">
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.description}</span>
                    </div>
                    <div className="store-product-card__footer">
                      <div>
                        <small>A partir de</small>
                        <span>{product.price}</span>
                      </div>
                      <button type="button" onClick={() => addToCart(product)}>
                        <StoreIcon type="cart" />
                        Adicionar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {!filteredProducts.length ? (
              <div className="store-catalog__empty">
                <strong>Nenhum produto encontrado</strong>
                <span>Selecione outra categoria para continuar montando o pedido.</span>
              </div>
            ) : null}
          </section>

          <section id="carrinho" className="store-cart" aria-labelledby="cart-title">
            <div className="store-section-heading">
              <div className="store-section-title">
                <span>Carrinho</span>
                <h2 id="cart-title">Pedido em montagem</h2>
              </div>
              <strong className="store-cart__total">{formatCurrency(cartTotal)}</strong>
            </div>

            {cartItems.length ? (
              <div className="store-cart__content">
                <div className="store-cart__items">
                  {cartItems.map((item) => (
                    <article key={item.name} className="store-cart__item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.description}</span>
                        <small>{item.price} por unidade</small>
                      </div>
                      <div className="store-cart__actions" aria-label={`Quantidade de ${item.name}`}>
                        <button type="button" onClick={() => decreaseCartItem(item.name)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => addToCart(item)}>
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="store-cart__remove"
                        onClick={() => removeCartItem(item.name)}
                      >
                        Remover
                      </button>
                    </article>
                  ))}
                </div>

                <aside className="store-cart__checkout" aria-label="Fechamento do pedido">
                  <span>Resumo comercial</span>
                  <strong>{formatCurrency(cartTotal)}</strong>
                  <small>{cartQuantity} item(ns) selecionado(s)</small>
                  <button type="button" onClick={confirmOrder}>
                    Confirmar pedido
                  </button>
                </aside>
              </div>
            ) : (
              <div className="store-cart__empty">
                <StoreIcon type="cart" />
                <strong>Seu carrinho esta vazio</strong>
                <span>Adicione produtos do catalogo para montar e confirmar o pedido.</span>
              </div>
            )}

            {orderStatus ? <p className="store-cart__status">{orderStatus}</p> : null}
          </section>
        </>
      )}
    </main>
  );
}
