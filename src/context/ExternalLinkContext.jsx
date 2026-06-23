import { createContext, useContext, useState } from 'react';

const ExternalLinkContext = createContext(null);

export function ExternalLinkProvider({ children }) {
  const [modalData, setModalData] = useState({
    isOpen: false,
    siteName: '',
    url: '',
  });

  const openExternalLink = (event, siteName, url) => {
    event.preventDefault();
    setModalData({ isOpen: true, siteName, url });
  };

  const closeModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const continueToLink = () => {
    window.open(modalData.url, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <ExternalLinkContext.Provider
      value={{ modalData, openExternalLink, closeModal, continueToLink }}
    >
      {children}
    </ExternalLinkContext.Provider>
  );
}

export function useExternalLink() {
  const context = useContext(ExternalLinkContext);

  if (!context) {
    throw new Error('useExternalLink must be used within ExternalLinkProvider');
  }

  return context;
}
