import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n'; // Asegúrate de importar tu configuración de i18n

import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/BackgroundAsImage.js';
import Features from 'components/features/ThreeColWithSideImage.js';
import FAQ from 'components/faqs/SimpleWithSideImage.js';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustration.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import customerSupportIllustrationSrc from 'images/customer-support-illustration.svg';
import Solution from 'components/cards/ThreeColSlider.js';

function App() {
  const { t } = useTranslation(); // Usamos useTranslation para acceder a las traducciones

  return (
    <I18nextProvider i18n={i18n}>
      <AnimationRevealPage>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <Solution />
        <FAQ
          imageSrc={customerSupportIllustrationSrc}
          imageContain={true}
          imageShadow={false}
          subheading={t('faqSubheading')} // Traducir el subheading
          heading={t('faqHeading')} // Traducir el heading
        />
        <div id="contact">
          <ContactUsForm />
        </div>
        <Footer />
      </AnimationRevealPage>
    </I18nextProvider>
  );
}

export default App;
