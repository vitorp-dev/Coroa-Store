import titleCrownIcon from '../assets/Imagenslogin/icon_coroa.png';
import kitRefri from '../assets/ImgProduto/kit_refri.png';
import KitBw from '../assets/ImgProduto/kit_bw.png';
import kitCampinho from '../assets/ImgProduto/kit_campinho.png';
import KitTeresense from '../assets/ImgProduto/kit_teresense.png';
import bgProdutos from '../assets/ImgProduto/kit_refri.png';

const productImages = import.meta.glob('../assets/ImgProduto/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const fallbackProducts = [
  {
    name: 'Linha de Refrigerantes',
    description: 'Linha completa para giro rapido no ponto de venda.',
    image: kitRefri,
  },
  {
    name: 'Linha Bad Wolf',
    description: 'Opcoes selecionadas para campanhas e oportunidades.',
    image: KitBw,
  },
  {
    name: 'Linha Campinho',
    description: 'Produtos em destaque para ofertas comerciais.',
    image: kitCampinho,
  },
  {
    name: 'Linha Artesanal',
    description: 'Embalagens pensadas para abastecimento recorrente.',
    image: KitTeresense,
  },
];

function formatProductName(filePath) {
  const fileName = filePath.split('/').pop()?.replace(/\.[^.]+$/, '') ?? 'Produto';

  return fileName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

const productList = Object.entries(productImages).map(([path, image]) => ({
  name: formatProductName(path),
  image,
  description: 'Disponivel para pedidos na plataforma Coroa Store.',
}));

export default function Produtos() {
  const extraProducts = productList.filter(
    (product) => !['Bg Produtos', 'Icon Guarana', 'Kit Coroa Cola', 'Kit Refri', 'Kit Bw', 'Kit Campinho', 'Kit Teresense', 'Bw Original'].includes(product.name),
  );
  const products = [...fallbackProducts, ...extraProducts];

  return (
    <section id="produtos" className="products-section" aria-labelledby="products-title">
      <div
        className="products-section__inner"
        style={{ '--products-bg': `url(${bgProdutos})` }}
      >
        <div className="products-section__header">
          <div className="products-section__headline">
            <span className="products-section__eyebrow">Catalogo</span>
            <h2 id="products-title">Produtos em destaque</h2>
            <p>
              Confira as principais linhas para abastecer seu negócio!
            </p>
          </div>

          <a className="products-section__action" href="#login-email">
            Solicitar pedido
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article
              key={product.name}
              className={`product-card${product.imageMode === 'original' ? ' product-card--original-image' : ''}`}
            >
              <div className="product-card__image">
                <img src={product.image ?? titleCrownIcon} alt={product.name} />
              </div>
              <div className="product-card__content">
                <strong>{product.name}</strong>
                <span>{product.description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
