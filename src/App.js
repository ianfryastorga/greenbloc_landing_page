import React, { useState } from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColWithSideImage.js";

import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Solution from "components/cards/ThreeColSlider.js"

export default () => (
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
      subheading="Preguntas"
      heading={
        <>
         ¿ Tienes <span tw="text-primary-500">Preguntas ?</span>
        </>
      }
    />
    <div id="contact">
    <ContactUsForm />
    </div>
    <Footer />
  </AnimationRevealPage>
);

