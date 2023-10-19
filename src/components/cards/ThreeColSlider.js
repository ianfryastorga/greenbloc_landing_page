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
import { useTranslation } from "react-i18next";

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
    display: flex;
    margin: 0 -16px;
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
    margin: 0 40px;
  }
  .slick-list {
    overflow: hidden;
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
  const { t } = useTranslation();
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3, // Mostrar solo una carta a la vez en dispositivos móviles
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
          centerMode: true,
          centerPadding: '15px',
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://riegopro.com/blog/wp-content/uploads/2021/05/ventajas-del-riego-enterrado.jpg",
      title: "titleDripIrrigation",
      description: "descriptionDripIrrigation",
      locationText: "locationDripIrrigation",
    },
    {
      imageSrc: "https://blogger.googleusercontent.com/img/a/AVvXsEjkY-H_F6OCMXph4jXsZ4n3pGhuq4wEfM6i4aCOdIr_o5N7_5TLkG9xvsxfjUxejuR91YKpZcI_jnfvlpu8BxRrYLB1XQk7-mQA4jvxfCjbgoRn40Z6Cs6C_RSpRxGFhiWzomXSLhPB4jRN8EClBWGDu4TAex1uO62QpG0jTF4Vqi0TUp6lDzKugZbYYg=s16000",
      title: "titleHydrogel",
      description: "descriptionHydrogel",
      locationText: "locationHydrogel",
    },
    {
      imageSrc: "https://www.adslzone.net/app/uploads-adslzone.net/2022/03/diferencias-hardware-software.jpg",
      title: "titleSoilSensors",
      description: "descriptionSoilSensors",
      locationText: "locationSoilSensors",
    },
    {
      imageSrc: "https://www.thedigitalspeaker.com/content/images/2023/02/Sustainable-AI-greener-future.jpg",
      title: "titleAI",
      description: "descriptionAI",
      locationText: "locationAI",
    },

    {
      imageSrc: "https://www.movilzona.es/app/uploads-movilzona.es/2021/05/apps-movil.jpg",
      title: "titleMobileApp",
      description: "descriptionMobileApp",
      locationText: "locationMobileApp",
    },

    {
      imageSrc: "https://www.greatbigstuff.com/cdn/shop/products/umbrella_5-860x860_1200x1200.jpg?v=1576102634",
      title: "titleSpecializedTablets",
      description: "descriptionSpecializedTablets",
      locationText: "locationSpecializedTablets",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>{t('headingSolForEverybody')}</Heading>
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
                  <Title>{t(card.title)}</Title>
                  <RatingsInfo>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{t(card.locationText)}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{t(card.description)}</Description>
              </TextInfo>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
