import coroaIcon from '../assets/images/coroa.png';

export default function LoginTitle() {
  return (
    <div className="login-title-hero" aria-label="Coroa Store">
      <div className="login-title-hero__inner">
        <h1 className="login-title-hero__wordmark">
          <span className="login-title-hero__word login-title-hero__word--coroa">
            Coroa
          </span>
          <span className="login-title-hero__word login-title-hero__word--store">
            Store
          </span>
          <span className="login-title-hero__icon" aria-hidden="true">
            <img src={coroaIcon} alt="" />
          </span>
        </h1>
      </div>
    </div>
  );
}
