import { useExternalLink } from '../../context/ExternalLinkContext';
import './ExternalLinkModal.css';

export default function ExternalLinkModal() {
  const { modalData, closeModal, continueToLink } = useExternalLink();

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`modal-overlay ${modalData.isOpen ? 'show' : ''}`}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h3 className="modal-title" id="modal-title">
          Leaving Elkawas.Dev
        </h3>

        <p className="modal-text">
          {modalData.siteName
            ? `You are about to visit ${modalData.siteName}.`
            : 'You are about to visit an external website.'}
        </p>

        <div className="modal-buttons">
          <button type="button" className="modal-btn cancel-btn" onClick={closeModal}>
            Stay Here
          </button>

          <button type="button" className="modal-btn continue-btn" onClick={continueToLink}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
