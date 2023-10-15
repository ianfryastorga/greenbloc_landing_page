import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "images/store.svg";
import { ReactComponent as LocationIcon } from "images/water.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;

const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://riegopro.com/blog/wp-content/uploads/2021/05/ventajas-del-riego-enterrado.jpg",
      title: "Riego por Goteo",
      description: "Imagina un jardín perfectamente regado, sin zonas secas ni charcos. Con el riego por goteo subterráneo de GreenBloc Gardens, este sueño se convierte en realidad. Este sistema avanzado canaliza el agua directamente a las raíces de tus plantas, asegurando una hidratación óptima y un crecimiento saludable.",
      locationText: "Riego Sostenible",
    },
    {
      imageSrc: "https://blogger.googleusercontent.com/img/a/AVvXsEjkY-H_F6OCMXph4jXsZ4n3pGhuq4wEfM6i4aCOdIr_o5N7_5TLkG9xvsxfjUxejuR91YKpZcI_jnfvlpu8BxRrYLB1XQk7-mQA4jvxfCjbgoRn40Z6Cs6C_RSpRxGFhiWzomXSLhPB4jRN8EClBWGDu4TAex1uO62QpG0jTF4Vqi0TUp6lDzKugZbYYg=s16000",
      title: "Hidrogel",
      description: "Este avanzado polímero absorbe y retiene el agua en el suelo, liberándola gradualmente para mantener las raíces de tus plantas constantemente hidratadas. Di adiós a las zonas secas y al estrés por el riego constante.",
      locationText: "Eficiencia Hídrica",
    },
    {
      imageSrc: "https://www.adslzone.net/app/uploads-adslzone.net/2022/03/diferencias-hardware-software.jpg",
      title: "Sensores de Suelo",
      description: "Nuestra tecnología de sensores para césped garantiza un riego eficiente al evaluar continuamente las condiciones del suelo. Esto significa que tu césped recibe agua solo cuando realmente lo necesita, lo que resulta en un césped más saludable y exuberante.",
      locationText: "Hidratación Inteligente",
    },
    {
      imageSrc: "https://www.thedigitalspeaker.com/content/images/2023/02/Sustainable-AI-greener-future.jpg",
      title: "Inteligencia Artificial",
      description: "Conoce a Greenie, el cerebro detrás de tu jardín. Greenie es nuestra inteligencia artificial personalizada que utiliza datos globales como la temperatura y datos locales, como la humedad del suelo y los niveles de nutrientes, para tomar decisiones inteligentes sobre cuándo activar el riego.",
      locationText: "Hidratación Inteligente",
    },

    {
      imageSrc: "https://www.movilzona.es/app/uploads-movilzona.es/2021/05/apps-movil.jpg",
      title: "Aplicación Móvil",
      description: "Controla tu oasis verde desde la palma de tu mano con nuestra aplicación móvil GreenBloc Gardens. Nuestra aplicación intuitiva te permite monitorear en tiempo real el estado de tu jardín, desde la humedad del suelo hasta el estado de las plantas. Además, podrás hacer un seguimiento de tu gasto recurrente de forma fácil y conveniente, ayudándote a mantener tu jardín de manera eficiente y sostenible.",
      locationText: "Uso Responsable del Agua",
    },

    {
      imageSrc: "https://www.greatbigstuff.com/cdn/shop/products/umbrella_5-860x860_1200x1200.jpg?v=1576102634",
      title: "Pastillas Especializadas",
      description: "Descubre el secreto de jardines exuberantes y saludables con nuestras Pastillas Especializadas GreenBoost Tab. Estas pequeñas maravillas están diseñadas para fortalecer tus plantas, controlar plagas y reducir la necesidad de riego constante. Con GreenBoost Tab, tu jardín estará más resistente y vibrante que nunca, sin complicaciones ni preocupaciones. Simplifica el cuidado de tus plantas y disfruta de un jardín siempre en su mejor forma.",
      locationText: "Uso Sostenible del Agua",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Soluciones para Todos</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
