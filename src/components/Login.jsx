import { useState } from 'react';
import backgroundImage from '../assets/Imagenslogin/bg_login.jpg';
import titleCrownIcon from '../assets/Imagenslogin/icon_coroa.png';
import Produtos from './Produtos';

const demoCredentials = {
  email: 'cliente@coroastore.com',
  password: 'coroa123',
};

const navItems = [
  { label: 'Acessar', href: '#login-email' },
  { label: 'Destaques', href: '#produtos' },
  { label: 'Fale Conosco', target: '_blank', href: 'https://coroa.com.br/fale-conosco/' },
  { label: 'Ajuda', href: '#ajuda' },
];

const featureItems = [
  {
    title: 'Pedidos Rápidos',
    description: 'Agilidade para comprar quando você precisa.',
    icon: 'speed',
  },
  {
    title: 'Ofertas Exclusivas',
    description: 'Condições especiais para o seu negócio.',
    icon: 'tag',
  },
  {
    title: 'Suporte Comercial',
    description: 'Conte com nosso time sempre que precisar.',
    icon: 'headset',
  },
];

function Icon({ type }) {
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

  if (type === 'user-plus') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
        <path d="M5 20a7 7 0 0 1 10.6-6" />
        <path d="M19 8v6" />
        <path d="M16 11h6" />
      </svg>
    );
  }

  if (type === 'truck') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h11v9H3Z" />
        <path d="M14 9h3l4 4v2h-7Z" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  }

  if (type === 'speed') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 5 13h6l-1 9 9-13h-6Z" />
        <path d="M3 7h4" />
        <path d="M2 12h3" />
        <path d="M4 17h3" />
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

  if (type === 'headset') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
        <path d="M5 13h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z" />
        <path d="M19 13h-3v5h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z" />
        <path d="M16 18v1.5A2.5 2.5 0 0 1 13.5 22H11" />
        <path d="M9 9.5a3.5 3.5 0 0 1 6 0" />
        <path d="M9 14c1.5 1.4 4.5 1.4 6 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 16 0v6h-4v-4a4 4 0 1 0-8 0v4H4Z" />
      <path d="M8 18v1" />
      <path d="M16 18v1" />
    </svg>
  );
}

function BrandMark() {
  return (
    <div className="login-brandmark" aria-label="Grupo Coroa">
      <span>
        <strong>Coroa</strong> Store
      </span>
      <span className="login-brandmark__icon">
        <img src={titleCrownIcon} alt="Icone Coroa" />
      </span>
    </div>
  );
}

function TopBar() {
  return (
    <header className="login-topbar">
      <BrandMark />

      <nav className="login-nav" aria-label="Principal">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target}
            rel={item.target === '_blank' ? 'noreferrer' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button type="button" className="login-topbar__action">
        <span className="login-icon">
          <Icon type="user-plus" />
        </span>
        Solicitar acesso
      </button>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="login-hero" aria-labelledby="login-hero-title">
      <div className="login-hero__content">
        <h1 id="login-hero-title" className="login-hero__title">
          <span>Conecte-se</span>
          <span>Com o Melhor</span>
          <span className="login-hero__title-glow">do</span>
          <span className="login-hero__title-accent">Grupo Coroa</span>
        </h1>

        <span className="login-hero__divider" />

        <p className="login-hero__copy">
          Centralize e acompanhe seus pedidos!
        </p>

        <div className="login-hero__features" aria-label="Beneficios principais">
          {featureItems.map((item) => (
            <article key={item.title} className="login-feature">
              <div className="login-feature__icon">
                <Icon type={item.icon} />
              </div>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoginPanel({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const isValidLogin =
      email.trim().toLowerCase() === demoCredentials.email &&
      password === demoCredentials.password;

    if (!isValidLogin) {
      setError('E-mail ou senha invalidos. Use cliente@coroastore.com / coroa123.');
      return;
    }

    setError('');
    onLogin();
  }

  return (
    <section id="login-card" className="login-panel" aria-labelledby="login-title">
      <div className="login-panel__badge">
        <img src={titleCrownIcon} alt="" />
      </div>

      <div className="login-panel__header">
        <span className="login-pill">
          <span className="login-icon login-icon--small">
            <Icon type="lock" />
          </span>
          ACESSO SEGURO
        </span>

        <h2 id="login-title">Acessar plataforma</h2>
        <p>Entre com suas credenciais para continuar</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-field">
          <span>E-mail</span>
          <div className="login-input">
            <span className="login-icon login-icon--muted">
              <Icon type="mail" />
            </span>
            <input
              id="login-email"
              type="email"
              placeholder="voce@empresa.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </label>

        <label className="login-field">
          <span>Senha</span>
          <div className="login-input">
            <span className="login-icon login-icon--muted">
              <Icon type="lock" />
            </span>
            <input
              type="password"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="button" className="login-input__toggle" aria-label="Mostrar senha">
              <span className="login-icon login-icon--muted">
                <Icon type="eye" />
              </span>
            </button>
          </div>
        </label>

        <div className="login-form__meta">
          <label className="login-checkbox">
            <input type="checkbox" defaultChecked />
            <span>Manter sessao ativa</span>
          </label>

          <button type="button" className="login-link">
            Esqueci minha senha
          </button>
        </div>

        {error ? <p className="login-form__error">{error}</p> : null}

        <button type="submit" className="login-submit">
          Entrar agora
          <span aria-hidden="true">→</span>
        </button>

        <button type="button" className="login-request-access">
          <span className="login-icon login-icon--small">
            <Icon type="user-plus" />
          </span>
          Solicitar acesso
        </button>
      </form>

      <div className="login-panel__footer">
        <span className="login-icon login-icon--tiny">
          <Icon type="shield" />
        </span>
        <span>Seus dados estao protegidos com criptografia de ponta.</span>
        <button type="button" className="login-link">
          Saiba mais
        </button>
      </div>
    </section>
  );
}

export default function Login({ onLogin }) {
  return (
    <main
      className="login-page"
      style={{ '--login-bg': `url(${backgroundImage})` }}
    >
      <div className="login-stage">
        <TopBar />

        <div className="login-layout">
          <HeroSection />
          <div className="login-layout__panel">
            <LoginPanel onLogin={onLogin} />
          </div>
        </div>
      </div>
      <Produtos />
    </main>
  );
}
