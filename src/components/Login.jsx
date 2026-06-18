
import coroaIcon from '../assets/images/coroa.png';

const premiumSignals = [
  {
    title: 'Acesso seguro',
    description: 'Seus dados protegidos',
  },
  {
    title: 'Suporte comercial',
    description: 'Conte com nosso time',
  },
  {
    title: 'Sistema conectado',
    description: 'Tudo funcionando',
  },
];

const premiumHighlights = [
  {
    title: 'Mais agilidade',
    description: 'Pedidos rapidos e sem erros',
    icon: 'chart',
  },
  {
    title: 'Melhores condicoes',
    description: 'Campanhas e ofertas exclusivas',
    icon: 'tag',
  },
  {
    title: 'Relacionamento forte',
    description: 'Mais proximidade e resultados',
    icon: 'user',
  },
];

function FeatureIcon({ type }) {
  if (type === 'chart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 16V9" />
        <path d="M12 16V5" />
        <path d="M17 16v-7" />
        <path d="m5 14 4-4 3 2 5-5" />
      </svg>
    );
  }

  if (type === 'tag') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10 11 19 4 12V4h8Z" />
        <circle cx="9" cy="9" r="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function InputIcon({ type }) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v10H4Z" />
        <path d="m5 8 7 6 7-6" />
      </svg>
    );
  }

  if (type === 'lock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 11h10v9H7Z" />
        <path d="M9 11V8a3 3 0 1 1 6 0v3" />
      </svg>
    );
  }

  if (type === 'eye') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6Z" />
        <path d="m9.5 12 1.7 1.7L14.8 10" />
      </svg>
    );
  }

  if (type === 'lock-mini') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 11h8v7H8Z" />
        <path d="M10 11V9a2 2 0 1 1 4 0v2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function BrandHeader() {
  return (
    <div className="login-wordmark" aria-label="Coroa Store">
      <span className="login-wordmark__text">
        <span className="login-wordmark__coroa">Coroa</span>
        <span className="login-wordmark__store">Store</span>
      </span>
      <span className="login-wordmark__icon">
        <img src={coroaIcon} alt="" />
      </span>
    </div>
  );
}

function BrandPanel() {
  return (
    <div className="login-brand">
      <BrandHeader />

      <div className="login-brand__content">
        <h1
          className="login-brand__title"
          aria-label="Tudo o que sua equipe comercial precisa para vender mais e melhor."
        >
          <span className="login-brand__title-line">Tudo o que</span>
          <span className="login-brand__title-line">Você</span>
          <span className="login-brand__title-line login-brand__title-line--accent">
            precisa para vender
          </span>
          <span className="login-brand__title-line login-brand__title-line--accent">
            mais e melhor.
          </span>
        </h1>
        <span className="login-brand__divider" />
        <p className="login-brand__copy">
          Centralize pedidos, acompanhe campanhas, consulte condicoes
          exclusivas e fortaleça o relacionamento com seus clientes em um só
          lugar.
        </p>
      </div>

      <div className="login-brand__spotlight" aria-label="Pilares principais">
        {premiumHighlights.map((item) => (
          <article key={item.title} className="login-brand__feature-card">
            <span className="login-brand__feature-icon">
              <FeatureIcon type={item.icon} />
            </span>
            <div>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="login-brand__signals" aria-label="Diferenciais da experiencia">
        {premiumSignals.map((signal) => (
          <div key={signal.title} className="login-brand__signal-item">
            <span className="login-brand__signal-icon" />
            <div>
              <strong>{signal.title}</strong>
              <span>{signal.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoginFormPanel() {
  return (
    <section className="login-panel" aria-labelledby="login-title">
      <div className="login-panel__badge-icon">
        <img src={coroaIcon} alt="" />
      </div>
      <div className="login-panel__glow" aria-hidden="true" />

      <div className="login-panel__header">
        <span className="login-pill">
          <span className="login-pill__icon">
            <InputIcon type="lock-mini" />
          </span>
          Acesso seguro
        </span>
        <h2 id="login-title">Acessar plataforma</h2>
        <p>Entre com suas credenciais para continuar</p>
      </div>

      <form className="login-form">
        <label className="login-field">
          <span>E-mail</span>
          <div className="login-input-wrap">
            <span className="login-input-icon">
              <InputIcon type="mail" />
            </span>
            <input type="email" placeholder="voce@empresa.com" />
          </div>
        </label>

        <label className="login-field">
          <span>Senha</span>
          <div className="login-input-wrap">
            <span className="login-input-icon">
              <InputIcon type="lock" />
            </span>
            <input type="password" placeholder="Digite sua senha" />
            <span className="login-input-icon login-input-icon--end">
              <InputIcon type="eye" />
            </span>
          </div>
        </label>

        <div className="login-form__meta">
          <label className="login-checkbox">
            <input type="checkbox" defaultChecked />
            <span>Manter sessão ativa</span>
          </label>
          <button type="button" className="login-link">
            Esqueci minha senha
          </button>
        </div>

        <button type="submit" className="login-submit">
          <span>Entrar agora</span>
          <span className="login-submit__arrow">→</span>
        </button>

        <button type="button" className="login-secondary-action">
          <span>Solicitar acesso para equipe comercial</span>
          <span className="login-secondary-action__icon">↗</span>
        </button>
      </form>

      <div className="login-panel__footer">
        <span className="login-panel__footer-icon">
          <InputIcon type="shield" />
        </span>
        <span>Seus dados estão protegidos com criptografia de ponta.</span>
        <button type="button" className="login-panel__footer-link">
          Saiba mais
        </button>
      </div>
    </section>
  );
}

export default function Login() {
  return (
    <main className="login-page">
      <div
        className="login-background"
        aria-hidden="true"
        
      >
        <span className="login-orb login-orb--primary" />
        <span className="login-orb login-orb--secondary" />
        <span className="login-grid" />
      </div>

      <section className="login-shell">
        <div className="login-content">
          <aside className="login-showcase">
            <BrandPanel />
          </aside>
          <div className="login-side">
            <LoginFormPanel />
          </div>
        </div>
      </section>
    </main>
  );
}
