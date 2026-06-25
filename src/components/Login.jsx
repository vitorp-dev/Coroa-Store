import { useEffect, useState } from 'react';
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

function TopBar({ onOpenRegister }) {
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

      <div className="login-topbar__actions">
        <button type="button" className="login-topbar__register" onClick={onOpenRegister}>
          Cadastrar-se
        </button>

        <button type="button" className="login-topbar__action">
          <span className="login-icon">
            <Icon type="user-plus" />
          </span>
          Solicitar acesso
        </button>
      </div>
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

function RegisterModal({ onClose }) {
  const [status, setStatus] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [stateRegistration, setStateRegistration] = useState('');
  const [responsibleName, setResponsibleName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateUf, setStateUf] = useState('');
  const [password, setPassword] = useState('');
  const [cnpjStatus, setCnpjStatus] = useState('');
  const [isLoadingCnpj, setIsLoadingCnpj] = useState(false);

  const cnpjDigits = cnpj.replace(/\D/g, '');

  useEffect(() => {
    if (cnpjDigits.length !== 14) {
      setCnpjStatus('');
      setIsLoadingCnpj(false);
      return undefined;
    }

    const controller = new AbortController();

    async function fetchCompanyData() {
      setIsLoadingCnpj(true);
      setCnpjStatus('Consultando CNPJ...');

      try {
        const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjDigits}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('CNPJ nao encontrado.');
        }

        const data = await response.json();
        const primaryPhone = [data.ddd_telefone_1, data.ddd_telefone_2].find(Boolean);
        const addressParts = [
          data.descricao_tipo_de_logradouro,
          data.logradouro,
          data.numero,
          data.complemento,
          data.bairro,
        ].filter(Boolean);

        setCompanyName(data.razao_social || data.nome_fantasia || '');
        setTradeName(data.nome_fantasia || '');
        setEmail(data.email || '');
        setPhone(primaryPhone || '');
        setZipCode(formatZipCode(data.cep || ''));
        setAddress(addressParts.join(', '));
        setCity(data.municipio || '');
        setStateUf(data.uf || '');
        setCnpjStatus('Dados preenchidos automaticamente.');
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        setCnpjStatus('Nao foi possivel consultar este CNPJ. Preencha os dados manualmente.');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingCnpj(false);
        }
      }
    }

    fetchCompanyData();

    return () => controller.abort();
  }, [cnpjDigits]);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Cadastro enviado para analise comercial.');
  }

  function handleCnpjChange(event) {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 14);
    setCnpj(formatCnpj(digits));
  }

  function handleZipCodeChange(event) {
    setZipCode(formatZipCode(event.target.value));
  }

  function formatCnpj(value) {
    return value
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  function formatZipCode(value) {
    return value
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/^(\d{5})(\d)/, '$1-$2');
  }

  return (
    <div className="login-register-modal" role="presentation" onClick={onClose}>
      <section
        className="login-register-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="login-register-modal__close"
          aria-label="Fechar cadastro"
          onClick={onClose}
        >
          x
        </button>

        <div className="login-register-modal__header">
          <span className="login-pill">
            <span className="login-icon login-icon--small">
              <Icon type="user-plus" />
            </span>
            NOVO CADASTRO
          </span>
          <h2 id="register-title">Cadastrar empresa</h2>
          <p>Preencha os dados abaixo para solicitar a criacao do acesso.</p>
        </div>

        <form className="login-register-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <span>CNPJ</span>
            <div className="login-input">
              <input
                type="text"
                inputMode="numeric"
                placeholder="00.000.000/0000-00"
                autoComplete="off"
                value={cnpj}
                onChange={handleCnpjChange}
                required
              />
            </div>
            {cnpjStatus ? (
              <small className={isLoadingCnpj ? 'login-field__hint is-loading' : 'login-field__hint'}>
                {cnpjStatus}
              </small>
            ) : null}
          </label>

          <label className="login-field">
            <span>Razao Social</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="Nome da empresa"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                required
              />
            </div>
          </label>

          <label className="login-field">
            <span>Nome Fantasia</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="Nome comercial"
                value={tradeName}
                onChange={(event) => setTradeName(event.target.value)}
              />
            </div>
          </label>

          <label className="login-field">
            <span>Inscricao Estadual</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="Inscricao estadual"
                value={stateRegistration}
                onChange={(event) => setStateRegistration(event.target.value)}
              />
            </div>
          </label>

          <label className="login-field">
            <span>Nome do responsavel</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="Responsavel pelo cadastro"
                value={responsibleName}
                onChange={(event) => setResponsibleName(event.target.value)}
                required
              />
            </div>
          </label>

          <label className="login-field">
            <span>Telefone / WhatsApp</span>
            <div className="login-input">
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
          </label>

          <label className="login-field">
            <span>E-mail</span>
            <div className="login-input">
              <input
                type="email"
                placeholder="contato@empresa.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </label>

          <label className="login-field">
            <span>CEP</span>
            <div className="login-input">
              <input
                type="text"
                inputMode="numeric"
                placeholder="00000-000"
                autoComplete="postal-code"
                value={zipCode}
                onChange={handleZipCodeChange}
                required
              />
            </div>
          </label>

          <label className="login-field login-field--wide">
            <span>Endereco</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="Rua, numero, complemento e bairro"
                autoComplete="street-address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </div>
          </label>

          <label className="login-field">
            <span>Cidade</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </div>
          </label>

          <label className="login-field">
            <span>Estado</span>
            <div className="login-input">
              <input
                type="text"
                placeholder="UF"
                maxLength="2"
                value={stateUf}
                onChange={(event) => setStateUf(event.target.value.toUpperCase().slice(0, 2))}
                required
              />
            </div>
          </label>

          <label className="login-field login-field--wide">
            <span>Senha</span>
            <div className="login-input">
              <input
                type="password"
                placeholder="Crie uma senha"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </label>

          {status ? <p className="login-register-form__status">{status}</p> : null}

          <div className="login-register-form__actions">
            <button type="button" className="login-register-form__cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="login-submit">
              Enviar cadastro
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default function Login({ onLogin }) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <main
      className="login-page"
      style={{ '--login-bg': `url(${backgroundImage})` }}
    >
      <div className="login-stage">
        <TopBar onOpenRegister={() => setIsRegisterOpen(true)} />

        <div className="login-layout">
          <HeroSection />
          <div className="login-layout__panel">
            <LoginPanel onLogin={onLogin} />
          </div>
        </div>
      </div>
      {isRegisterOpen ? <RegisterModal onClose={() => setIsRegisterOpen(false)} /> : null}
      <Produtos />
    </main>
  );
}
