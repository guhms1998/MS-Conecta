import {
  faMobileButton,
  faLaptopCode,
  faServer,
  faBrain,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  
  {
    title: "Desenvolvimento de Sites Responsivos",
    icon: faMobileButton,
    shortDescription:
      "Desenvolvemos sites responsivos para celular e computador de forma rápida e versátil.",
    description:
      "Seu site é a porta de entrada para o seu negócio online. Desenvolvemos sites responsivos que se adaptam a qualquer dispositivo, garantindo uma experiência de navegação excepcional para seus clientes. Conte com nossa expertise para destacar sua marca na web.",
  },
  {
    title: "Destaque Online Personalizado",
    icon: faLaptopCode,
    shortDescription:
      "Destaque online personalizado para o seu site e negócio.",
    description:
      "Sua presença online é crucial para o sucesso do seu negócio. Criamos soluções personalizadas para destacar sua marca na internet, desde websites informativos até plataformas de comércio eletrônico. Conte com nosso conhecimento para impulsionar seu negócio na web.",
  },
  {
    title: "Reformulação de Design Online",
    icon: faCopyright,
    shortDescription:
      "Reformule seus designs online, incluindo redes sociais e aplicativos.",
    description:
      "A imagem da sua marca na internet é essencial. Reformulamos o design do seu site, redes sociais e aplicativos para garantir uma presença online moderna e atrativa. Conte com nossa experiência para renovar sua identidade digital e conquistar mais clientes.",
  },
  {
    title: "Suporte em Tecnologia da Informação",
    icon: faBrain,
    shortDescription:
      "Oferecemos suporte em TI para o seu negócio.",
    description:
      "A tecnologia da informação é a base do seu negócio digital. Oferecemos suporte especializado para garantir que sua infraestrutura de TI seja confiável, segura e eficiente. Conte com nossa equipe para manter seu negócio funcionando sem problemas.",
  },
  
];

export default services;
