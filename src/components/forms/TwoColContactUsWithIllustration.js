import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const FormContainer = tw.div`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row justify-center items-center`;
const ResponsiveIframe = styled.iframe`
  ${tw`w-full lg:w-3/4 max-w-2xl`}
  border: none;
  overflow: hidden;
`;

export default ({
  subheading = "Suscribirse",
  heading = <>Siéntete Libre de <span tw="text-primary-500">Contactarnos</span><wbr/></>,
  description = "No te pierdas las últimas novedades, consejos de jardinería y ofertas exclusivas de GreenBloc Gardens. Mantente en sintonía con nosotros proporcionando tu correo electrónico a continuación. Estaremos encantados de compartir contigo nuestro compromiso con la sostenibilidad y todas las formas en que puedes disfrutar de un jardín más verde e inteligente. Únete a nuestra comunidad y juntos trabajaremos hacia un futuro más sostenible.",
  submitButtonText = "Suscribirse",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on the left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <FormContainer>
              <ResponsiveIframe src="https://docs.google.com/forms/d/e/1FAIpQLSc66x5tH-tWko5vNrPhBAAMkXqGxMUcIuGWbOMAaJOUZx1fsg/viewform?embedded=true" width="600" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">
                Cargando…
              </ResponsiveIframe>
            </FormContainer>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
