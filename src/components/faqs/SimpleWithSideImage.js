import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "Questions",
  description = "En nuestra búsqueda de brindarte la mejor experiencia y comprensión sobre nuestros productos y servicios en GreenBloc Gardens, hemos recopilado algunas de las preguntas más comunes que nuestros clientes han planteado. Aquí encontrarás respuestas concisas y útiles para aclarar cualquier inquietud que puedas tener.",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "¿Cuándo esperan comenzar a vender sus productos y servicios?",
      answer:
        "Planeamos lanzar nuestros productos y servicios a mediados de 2024. Estamos trabajando arduamente para asegurarnos de que nuestra oferta sea la mejor para ti cuando llegue ese momento."
    },
    {
      question: "¿Cómo funciona el sistema de riego por goteo subterráneo?",
      answer:
        "Nuestro sistema de riego por goteo subterráneo canaliza el agua directamente a las raíces de tus plantas, garantizando una hidratación precisa y eficiente. Funciona en conjunto con sensores y tecnología de vanguardia para optimizar el riego según las necesidades de tus plantas y las condiciones climáticas locales."
    },
    {
      question: "¿Qué diferencia a las Pastillas Especializadas GreenBoost Tab de otros productos de jardinería?",
      answer:
        "Nuestras pastillas están diseñadas para fortalecer tus plantas, controlar plagas y reducir la necesidad de riego constante, todo en uno. Utilizamos una fórmula única respaldada por la ciencia para ofrecer resultados excepcionales y un jardín siempre saludable."
    },
    {
      question: "¿Cómo puedo monitorear y controlar mi sistema de riego y gastos a través de la aplicación móvil?",
      answer:
        "Con nuestra aplicación móvil, puedes supervisar el estado de tu jardín y el consumo de agua en tiempo real. También puedes ajustar la configuración de riego y recibir notificaciones personalizadas para un control total de tu oasis verde."
    },
    {
      question: "¿Cuál es la vida útil del sistema de riego por goteo subterráneo y las pastillas GreenBoost Tab?",
      answer:
        "Nuestro sistema de riego y pastillas están diseñados para ser duraderos. La vida útil puede variar según el uso y el mantenimiento, pero puedes esperar que nuestros productos duren varios años con un mantenimiento adecuado (más de 15 años)."
    },
    {
      question: "¿Ofrecen servicios de instalación y mantenimiento para el sistema de riego por goteo subterráneo?",
      answer:
        "Sí, ofrecemos servicios profesionales de instalación y mantenimiento para garantizar que tu sistema funcione de manera óptima a lo largo del tiempo. Nuestro equipo capacitado se encargará de todo."
    },
    {
      question: "¿Ofrecen garantías para sus productos y servicios?",
      answer:
        "Sí, respaldamos la calidad de nuestros productos y servicios con garantías sólidas. Si tienes algún problema o inquietud, no dudes en contactarnos y estaremos encantados de resolverlo de manera oportuna."
    },
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
