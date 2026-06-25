import { useEffect, useState } from 'react';
// import bgProdutos from '../assets/ImgProduto/bg_produtos.png';
import iconColaPremium from '../assets/Icones/icon_cola_premium.png';
import iconGuarana from '../assets/Icones/icon_guarana.png';
import iconBadWolf from '../assets/Icones/icon_bw.png';
import titleCrownIcon from '../assets/Imagenslogin/icon_coroa.png';
import cardGuarana from '../assets/Catalogo/card_guarana.png';
// iports de imagens individuais
import pet2LImage from '../assets/Individuais/Guarana/pet_2L.png';
import LataZeroImage from '../assets/Individuais/Guarana/lata_zero350ml.png';
import PetZeroImage from '../assets/Individuais/Guarana/guarana_pet_zero.png';
import pet25LImage from '../assets/Individuais/Guarana/pet_2,5L.png';
import pet250mlImage from '../assets/Individuais/Guarana/pet _250ml.png';
import pet600mlImage from '../assets/Individuais/Guarana/pet_600ml.png';
import lata350mlImage from '../assets/Individuais/Guarana/lata_350ml.png';
import pet15LImage from '../assets/Individuais/Guarana/pet_1,5L.png';
import cola15LImage from '../assets/Individuais/ColaPremium/cola_15.png';
import Cola2LImage from '../assets/Individuais/ColaPremium/cola_2.png';
import Cola250Image from '../assets/Individuais/ColaPremium/cola_250.png';
import ColaLataZeroImage from '../assets/Individuais/ColaPremium/cola_lata_z.png';
import Cola600Image from '../assets/Individuais/ColaPremium/cola_600.png';
import BadWolfLata269Image from '../assets/Individuais/BadWolf/original/bw_lata269.png';
import BadWolfLata473Image from '../assets/Individuais/BadWolf/original/bw_lata473.png';
import BadWolfPet270Image from '../assets/Individuais/BadWolf/original/bw_pet270.png';
import BadWolfPet2Image from '../assets/Individuais/BadWolf/original/bw_pet2.png';
import BadWolfMacaVerdeLata269Image from '../assets/Individuais/BadWolf/MacaVerde/lata269.png';
import BadWolfMacaVerdeLata473Image from '../assets/Individuais/BadWolf/MacaVerde/lata473.png';
import BadWolfMacaVerdePet270Image from '../assets/Individuais/BadWolf/MacaVerde/pet270.png';
import BadWolfMacaVerdePet2Image from '../assets/Individuais/BadWolf/MacaVerde/pet2.png';
import BadWolfMelanciaLata269Image from '../assets/Individuais/BadWolf/Melancia/lata269.png';
import BadWolfMelanciaLata473Image from '../assets/Individuais/BadWolf/Melancia/lata473.png';
import BadWolfMelanciaPet270Image from '../assets/Individuais/BadWolf/Melancia/pet270.png';
import BadWolfMelanciaPet2Image from '../assets/Individuais/BadWolf/Melancia/pet2.png';
import BadWolfTropicalLata269Image from '../assets/Individuais/BadWolf/Tropical/lata269.png';
import BadWolfTropicalLata473Image from '../assets/Individuais/BadWolf/Tropical/lata473.png';
import BadWolfTropicalPet270Image from '../assets/Individuais/BadWolf/Tropical/pet270.png';
import BadWolfTropicalPet2Image from '../assets/Individuais/BadWolf/Tropical/pet2.png';
import CoroaSaboresLaranjaPet250Image from '../assets/Individuais/Sabores/Laranja/pet250.png';
import CoroaSaboresLaranjaPet2Image from '../assets/Individuais/Sabores/Laranja/pet2l.png';
import CoroaSaboresLimaoPet250Image from '../assets/Individuais/Sabores/Limao/pet250.png';
import CoroaSaboresLimaoPet2Image from '../assets/Individuais/Sabores/Limao/pet2.png';
import CoroaSaboresUvaPet250Image from '../assets/Individuais/Sabores/Uva/pet250.png';
import CoroaSaboresUvaPet2Image from '../assets/Individuais/Sabores/Uva/pet2.png';
import FriishColaPet2Image from '../assets/Individuais/Friish/pet_cola.png';
import FriishGuaranaPet2Image from '../assets/Individuais/Friish/pet_guaraná.png';
import FriishLaranjaPet2Image from '../assets/Individuais/Friish/pet_laranja.png';
import FriishLimaoPet2Image from '../assets/Individuais/Friish/pet_limao.png';
import FriishUvaPet2Image from '../assets/Individuais/Friish/pet_uva.png';
import IateColaPet250Image from '../assets/Individuais/Iate/Cola/pet250.png';
import IateColaPet2Image from '../assets/Individuais/Iate/Cola/pet2.png';
import IateGuaranaPet250Image from '../assets/Individuais/Iate/Guarana/pet250.png';
import IateGuaranaPet2Image from '../assets/Individuais/Iate/Guarana/pet2.png';
import IateLaranjaPet250Image from '../assets/Individuais/Iate/Laranja/pet250.png';
import IateLaranjaPet2Image from '../assets/Individuais/Iate/Laranja/pet2.png';
import IateLimaoPet250Image from '../assets/Individuais/Iate/Limao/pet250.png';
import IateLimaoPet2Image from '../assets/Individuais/Iate/Limao/pet2.png';
import IateUvaPet250Image from '../assets/Individuais/Iate/Uva/pet250.png';
import IateUvaPet2Image from '../assets/Individuais/Iate/Uva/pet2.png';
import CampinhoNaturalPet500Image from '../assets/Individuais/LinhaCampinho/Natual/pet500.png';
import CampinhoNaturalCopo200Image from '../assets/Individuais/LinhaCampinho/Natual/copo200.png';
import CampinhoNaturalPet15Image from '../assets/Individuais/LinhaCampinho/Natual/pet1,5.png';
import CampinhoNaturalPet25Image from '../assets/Individuais/LinhaCampinho/Natual/pet2,5.png';
import CampinhoNaturalPet5Image from '../assets/Individuais/LinhaCampinho/Natual/pet5.png';
import CampinhoGaseificadaPet500Image from '../assets/Individuais/LinhaCampinho/Gaseificada/pet500.png';
import CampinhoGaseificadaPet15Image from '../assets/Individuais/LinhaCampinho/Gaseificada/pet1,5.png';
import LemonTonicaLemonPet500Image from '../assets/Individuais/LemonTonica/lemon500.png';
import LemonTonicaTonicaLata350Image from '../assets/Individuais/LemonTonica/lata_tonica350.png';
import LemonTonicaTonicaPet600Image from '../assets/Individuais/LemonTonica/pet_tonica600.png';
import CoroaBeerGarrafa600Image from '../assets/Individuais/CoroaBeer/coroa_beer.png';
// imports Catálogo
import cardBadWolf from '../assets/Catalogo/card_bw.png';
import AcompanhamentoPedidos from './AcompanhamentoPedidos';
import CardCampinho from "../assets/Catalogo/card_campinho.png";
import CardCoroaColaPremium from "../assets/Catalogo/card_coroacola_premium.png";
import CardSabores from "../assets/Catalogo/card_sabores.png";
import CardFrish from "../assets/Catalogo/card_frish.png";
import CardTampico from "../assets/Catalogo/card_tampico.png";
import CardKlas from "../assets/Catalogo/card_klas.png";
import CardIate from "../assets/Catalogo/card_iate.png";
import CampinhoTonica from "../assets/Catalogo/card_campinho_tonica.png";
import CampinhoPremium from "../assets/Catalogo/card_premium.png";
import CardCoroaBeer from "../assets/Catalogo/card_coroa_beer.png";
import CardArtesanais from "../assets/Catalogo/card_artesanais.png";
import CardLafruit from "../assets/Catalogo/card_lafruit.png";


const ecommerceProducts = [
  // card 01 Guarana Coroa
  {
    name: 'Guaraná Coroa',
    description: 'Linha Completa de Refrigerantes Sabor Guaraná.',
    price: 'R$ 12,50',
    image: cardGuarana,
    showImage: true,
    icon: 'bubbles',
    category: 'Refrigerantes',
  },
  // card 02 Coroa Cola Premium
  {
    name: 'Linha Coroa Cola Premium',
    description: 'Embalagens para abastecimento recorrente.',
    price: 'R$ 174,20',
    image: CardCoroaColaPremium,
    showImage: true,
    icon: 'barrel',
    category: 'Refrigerantes',
  },
  // card 03 linha Bad Wolf
  {
    name: 'Linha Bad Wolf',
    description: 'Energeticos para campanhas e oportunidades.',
    price: 'R$ 142,50',
    image: cardBadWolf,
    showImage: true,
    icon: 'bolt',
    category: 'Energeticos',
  },
  
  // card 04 Linha Coroa Sabores
  {
    name: 'Linha Coroa Sabores',
    description: 'Combinacao pratica para reposicao de refrigerantes.',
    price: 'R$ 156,80',
    image: CardSabores,
    showImage: true,
    icon: 'bubbles',
    category: 'Refrigerantes',
  },
  // card 05 Linha Frish
   {
    name: 'Linha Friish',
    description: 'Selecao de energeticos para giro em campanhas.',
    price: 'R$ 188,40',
    image: CardFrish,
    showImage: true,
    icon: 'bolt',
    category: 'Refrigerantes',
  },
  // card 06 Linha Iate
  {
    name: 'Linha Iate',
    description: 'Selecao de energeticos para giro em campanhas.',
    price: 'R$ 188,40',
    image: CardIate,
    showImage: true,
    icon: 'bolt',
    category: 'Refrigerantes',
  },
   // card 07 Linha Campinho
  {
    name: 'Linha Campinho',
    description: 'Produtos em destaque para ofertas comerciais.',
    price: 'R$ 96,40',
    image: CardCampinho,
    showImage: true,
    icon: 'drop',
    category: 'Aguas',
  },
 // card 08 Lemon e Tônica
  {
    name: 'Linha Lemon e Tônica',
    description: 'Opcoes leves para abastecimento diario do ponto.',
    price: 'R$ 82,90',
    image: CampinhoTonica,
    showImage: true,
    icon: 'drop',
    category: 'Aguas',
  },
  // 09Campinho Premium
   {
    name: 'Linha Campinho Premium',
    description: 'Opcoes leves para abastecimento diario do ponto.',
    price: 'R$ 82,90',
    image:CampinhoPremium,
    showImage: true,
    icon: 'drop',
    category: 'Aguas',
  },
  // 10 Linha Agua Klass
  {
    name: 'Linha Agua Klass',
    description: 'Rotulos especiais para clientes de maior valor.',
    price: 'R$ 219,70',
    image: CardKlas,
    showImage: true,
    icon: 'barrel',
    category: 'Aguas',
  },
  // card 11 Coroa Beer
  {
    name: 'Coroa Beer',
    description: 'Mix estrategico para montar ofertas comerciais.',
    price: 'R$ 132,60',
    image: CardCoroaBeer,
    showImage: true,
    icon: 'cart',
    category: 'Artesanais',
  },
  // card 12 teresense
  {
    name: 'Cerveja Teresense',
    description: 'Produtos selecionados para pedidos recorrentes.',
    price: 'R$ 164,30',
    image: CardArtesanais,
    showImage: true,
    icon: 'chart',
    category: 'Artesanais',
  },
  // card 13 Linha La Fuit
  {
    name: 'Linha La Fuit',
    description: 'Mix premium para pontos com maior volume de venda.',
    price: 'R$ 246,90',
    image: CardLafruit,
    showImage: true,
    icon: 'barrel',
    category: 'Sucos',
  },
  // Linha Tampico
  {
    name: 'Linha Tampico',
    description: 'Itens campeoes para acelerar a reposicao da loja.',
    price: 'R$ 118,50',
    image: CardTampico,
    showImage: true,
    icon: 'cart',
    category: 'Sucos',
  }
];

const guaranaTraditionalOptions = [
  'PET 250ML',
  'PET 600ML',
  'PET 1,5L',
  'PET 2L',
  'PET 2,5L',
  'LATA 350ML',
];

const guaranaZeroOptions = [
  'LATA 350ML',
  'PET 2L ZERO'
];

const coroaColaTraditionalOptions = [
  'Coroa Cola 1,5L',
  'Coroa Cola 2L',
  'Coroa Cola 250ML',
  'Coroa Cola LATA 350ML',
  'Coroa Cola 600ML',
];

const coroaColaZeroOptions = [
  'Coroa Cola 2L ',
  'Coroa Cola 250ML',
  'Coroa Cola 600ML ',
  'Coroa Cola LATA 350ML ',
];

const badWolfPackageOptions = [
  'Lata 269ML',
  'Lata 473ML',
  'PET 270ML',
  'PET 2L',
];

const coroaSaboresPackageOptions = [
  'PET 250ML',
  'PET 2L',
];

const coroaSaboresFlavorCategories = [
  'Laranja',
  'Limão',
  'Uva',
];

const friishPackageOptions = [
  'PET 2L',
];

const friishFlavorCategories = [
  'Cola',
  'Guaraná',
  'Laranja',
  'Limão',
  'Uva',
];

const iatePackageOptions = [
  'PET 250ML',
  'PET 2L',
];

const iateFlavorCategories = [
  'Cola',
  'Guaraná',
  'Laranja',
  'Limão',
  'Uva',
];

const campinhoNaturalOptions = [
  'PET 500ML',
  'COPO 200ML',
  'PET 1,5L',
  'PET 2,5L',
  'PET 5L',
];

const campinhoGaseificadaOptions = [
  'PET 500ML',
  'PET 1,5L',
];

const lemonTonicaLemonOptions = [
  'PET 500ML',
];

const lemonTonicaTonicaOptions = [
  'LATA 350ML',
  'PET 600ML',
];

const coroaBeerOptions = [
  'GARRAFA 600ML',
];

const badWolfFlavorCategories = [
  'Original',
  'Maçã verde',
  'Melancia',
  'Tropical',
];

const categories = ['Todas', 'Energeticos', 'Sucos', 'Refrigerantes', 'Artesanais', 'Aguas'];

function parseCurrency(price) {
  return Number(price.replace('R$ ', '').replace('.', '').replace(',', '.'));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function StoreIcon({ type }) {
  if (type === 'search') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </svg>
    );
  }

  if (type === 'cart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h15l-2 8H7Z" />
        <path d="M5 6 4 3H2" />
        <circle cx="8" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    );
  }

  if (type === 'chart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 16v-5" />
        <path d="M12 16V7" />
        <path d="M17 16v-8" />
      </svg>
    );
  }

  if (type === 'bubbles') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="2.2" />
        <circle cx="15" cy="7" r="1.7" />
        <circle cx="15.5" cy="15" r="3.2" />
        <circle cx="7" cy="16" r="1.8" />
      </svg>
    );
  }

  if (type === 'bolt') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 5 13h6l-1 9 9-13h-6Z" />
      </svg>
    );
  }

  if (type === 'drop') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" />
      </svg>
    );
  }

  if (type === 'barrel') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h8" />
        <path d="M7 7h10" />
        <path d="M7 17h10" />
        <path d="M8 20h8" />
        <path d="M8 4c-1 3-1 13 0 16" />
        <path d="M16 4c1 3 1 13 0 16" />
      </svg>
    );
  }

  if (type === 'bottle') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 3h4" />
        <path d="M10.5 3.5v4.1c0 .6-.2 1.1-.6 1.5l-.8.9c-.5.6-.8 1.3-.8 2.1V20c0 .8.7 1.5 1.5 1.5h4.4c.8 0 1.5-.7 1.5-1.5v-7.9c0-.8-.3-1.5-.8-2.1l-.8-.9c-.4-.4-.6-.9-.6-1.5V3.5" />
        <path d="M8.5 15h7" />
      </svg>
    );
  }

  if (type === 'bottle-600') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 2.5h2" />
        <path d="M10.8 4.5h2.4" />
        <path d="M11 4.5v3.2c0 .6-.2 1.1-.6 1.5l-.9.9a2.6 2.6 0 0 0-.7 1.8v7.4c0 1 .8 1.8 1.8 1.8h2.8c1 0 1.8-.8 1.8-1.8v-7.4c0-.7-.3-1.3-.7-1.8l-.9-.9a2.2 2.2 0 0 1-.6-1.5V4.5" />
        <path d="M9.2 14.2h5.6" />
      </svg>
    );
  }

  if (type === 'can') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 5.5c0-1 1.6-1.8 3.5-1.8s3.5.8 3.5 1.8v13c0 1-1.6 1.8-3.5 1.8s-3.5-.8-3.5-1.8Z" />
        <path d="M8.5 5.5c0 1 1.6 1.8 3.5 1.8s3.5-.8 3.5-1.8" />
        <path d="M9.5 15.5h5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h14v14H5Z" />
      <path d="M9 9h6v6H9Z" />
    </svg>
  );
}

function getPackageIcon(option) {
  if (option === 'PET 600ML') {
    return 'bottle-600';
  }

  return option.includes('LATA') ? 'can' : 'bottle';
}

function getPackageImage(option, fallbackImage = CardCoroaColaPremium) {
  if (option.includes('Coroa Sabores Laranja') && option.includes('PET 250ML')) return CoroaSaboresLaranjaPet250Image;
  if (option.includes('Coroa Sabores Laranja') && option.includes('PET 2L')) return CoroaSaboresLaranjaPet2Image;
  if (option.includes('Coroa Sabores Limão') && option.includes('PET 250ML')) return CoroaSaboresLimaoPet250Image;
  if (option.includes('Coroa Sabores Limão') && option.includes('PET 2L')) return CoroaSaboresLimaoPet2Image;
  if (option.includes('Coroa Sabores Uva') && option.includes('PET 250ML')) return CoroaSaboresUvaPet250Image;
  if (option.includes('Coroa Sabores Uva') && option.includes('PET 2L')) return CoroaSaboresUvaPet2Image;
  if (option.includes('Friish Cola')) return FriishColaPet2Image;
  if (option.includes('Friish Guaraná')) return FriishGuaranaPet2Image;
  if (option.includes('Friish Laranja')) return FriishLaranjaPet2Image;
  if (option.includes('Friish Limão')) return FriishLimaoPet2Image;
  if (option.includes('Friish Uva')) return FriishUvaPet2Image;
  if (option.includes('Iate Cola') && option.includes('PET 250ML')) return IateColaPet250Image;
  if (option.includes('Iate Cola') && option.includes('PET 2L')) return IateColaPet2Image;
  if (option.includes('Iate Guaraná') && option.includes('PET 250ML')) return IateGuaranaPet250Image;
  if (option.includes('Iate Guaraná') && option.includes('PET 2L')) return IateGuaranaPet2Image;
  if (option.includes('Iate Laranja') && option.includes('PET 250ML')) return IateLaranjaPet250Image;
  if (option.includes('Iate Laranja') && option.includes('PET 2L')) return IateLaranjaPet2Image;
  if (option.includes('Iate Limão') && option.includes('PET 250ML')) return IateLimaoPet250Image;
  if (option.includes('Iate Limão') && option.includes('PET 2L')) return IateLimaoPet2Image;
  if (option.includes('Iate Uva') && option.includes('PET 250ML')) return IateUvaPet250Image;
  if (option.includes('Iate Uva') && option.includes('PET 2L')) return IateUvaPet2Image;
  if (option.includes('Campinho Natural') && option.includes('PET 500ML')) return CampinhoNaturalPet500Image;
  if (option.includes('Campinho Natural') && option.includes('COPO 200ML')) return CampinhoNaturalCopo200Image;
  if (option.includes('Campinho Natural') && option.includes('PET 1,5L')) return CampinhoNaturalPet15Image;
  if (option.includes('Campinho Natural') && option.includes('PET 2,5L')) return CampinhoNaturalPet25Image;
  if (option.includes('Campinho Natural') && option.includes('PET 5L')) return CampinhoNaturalPet5Image;
  if (option.includes('Campinho Gaseificada') && option.includes('PET 500ML')) return CampinhoGaseificadaPet500Image;
  if (option.includes('Campinho Gaseificada') && option.includes('PET 1,5L')) return CampinhoGaseificadaPet15Image;
  if (option.includes('Lemon e Tônica Lemon') && option.includes('PET 500ML')) return LemonTonicaLemonPet500Image;
  if (option.includes('Lemon e Tônica Tônica') && option.includes('LATA 350ML')) return LemonTonicaTonicaLata350Image;
  if (option.includes('Lemon e Tônica Tônica') && option.includes('PET 600ML')) return LemonTonicaTonicaPet600Image;
  if (option.includes('Coroa Beer') && option.includes('GARRAFA 600ML')) return CoroaBeerGarrafa600Image;
  if (option.includes('Bad Wolf Maçã verde') && option.includes('Lata 269ML')) return BadWolfMacaVerdeLata269Image;
  if (option.includes('Bad Wolf Maçã verde') && option.includes('Lata 473ML')) return BadWolfMacaVerdeLata473Image;
  if (option.includes('Bad Wolf Maçã verde') && option.includes('PET 270ML')) return BadWolfMacaVerdePet270Image;
  if (option.includes('Bad Wolf Maçã verde') && option.includes('PET 2L')) return BadWolfMacaVerdePet2Image;
  if (option.includes('Bad Wolf Melancia') && option.includes('Lata 269ML')) return BadWolfMelanciaLata269Image;
  if (option.includes('Bad Wolf Melancia') && option.includes('Lata 473ML')) return BadWolfMelanciaLata473Image;
  if (option.includes('Bad Wolf Melancia') && option.includes('PET 270ML')) return BadWolfMelanciaPet270Image;
  if (option.includes('Bad Wolf Melancia') && option.includes('PET 2L')) return BadWolfMelanciaPet2Image;
  if (option.includes('Bad Wolf Tropical') && option.includes('Lata 269ML')) return BadWolfTropicalLata269Image;
  if (option.includes('Bad Wolf Tropical') && option.includes('Lata 473ML')) return BadWolfTropicalLata473Image;
  if (option.includes('Bad Wolf Tropical') && option.includes('PET 270ML')) return BadWolfTropicalPet270Image;
  if (option.includes('Bad Wolf Tropical') && option.includes('PET 2L')) return BadWolfTropicalPet2Image;
  if (option.includes('Bad Wolf') && option.includes('Lata 269ML')) return BadWolfLata269Image;
  if (option.includes('Bad Wolf') && option.includes('Lata 473ML')) return BadWolfLata473Image;
  if (option.includes('Bad Wolf') && option.includes('PET 270ML')) return BadWolfPet270Image;
  if (option.includes('Bad Wolf') && option.includes('PET 2L')) return BadWolfPet2Image;
  if (option.includes('Bad Wolf')) return fallbackImage;
  if (fallbackImage === cardGuarana) {
    if (option.includes('2L')) return option.includes('Zero') || option.includes('ZERO') ? PetZeroImage : pet2LImage;
    if (option.includes('1,5L')) return pet15LImage;
    if (option.includes('250ML')) return pet250mlImage;
    if (option.includes('600ML')) return pet600mlImage;
    if (option.includes('LATA')) return option.includes('Zero') || option.includes('ZERO') ? LataZeroImage : lata350mlImage;
  }
  if (option === 'Coroa Cola 1,5L') return cola15LImage;
  if (option.includes('2L')) return Cola2LImage;
  if (option.includes('1,5L')) return pet15LImage;
  if (option.includes('250ML')) return Cola250Image;
  if (option.includes('600ML')) return Cola600Image;
  if (option.includes('Coroa Cola') && option.includes('LATA')) return ColaLataZeroImage;
  if (option.includes('LATA')) return option.includes('Zero') || option.includes('ZERO') ? LataZeroImage : lata350mlImage;

  return fallbackImage;
}

function getModalMixConfig(product) {
  if (!product) {
    return null;
  }

  if (product.image === cardGuarana) {
    const traditionalOptions = guaranaTraditionalOptions;
    const zeroOptions = guaranaZeroOptions.map((option) => ({
      label: option,
      value: `ZERO ${option}`,
    }));

    return {
      brandImage: iconGuarana,
      zeroIcon: iconGuarana,
      fallbackImage: cardGuarana,
      ariaLabel: 'Opcoes do Guarana Coroa',
      traditionalOptions,
      zeroOptions,
      sections: [
        {
          title: 'Linha tradicional',
          description: 'Formatos para consumo individual, familia e abastecimento.',
          icon: iconGuarana,
          options: traditionalOptions.map((option) => ({ label: option, value: option })),
        },
        {
          title: 'Zero açúcar',
          description: 'Opções zero para clientes que buscam leveza no mix.',
          icon: iconGuarana,
          className: 'store-product-modal__option-section--zero',
          gridClassName: 'store-product-modal__pack-grid--zero',
          options: zeroOptions,
        },
      ],
    };
  }
// Card Coroa Cola Premium
  if (product.image === CardCoroaColaPremium) {
    const traditionalOptions = coroaColaTraditionalOptions;
    const zeroOptions = coroaColaZeroOptions.map((option) => ({
      label: option,
      value: option,
    }));

    return {
      brandImage: iconColaPremium,
      zeroIcon: iconColaPremium,
      fallbackImage: CardCoroaColaPremium,
      ariaLabel: 'Opcoes da Linha Coroa Cola Premium',
      traditionalOptions,
      zeroOptions,
      sections: [
        {
          title: 'Linha tradicional',
          description: 'Formatos para consumo individual, familia e abastecimento.',
          icon: iconColaPremium,
          options: traditionalOptions.map((option) => ({ label: option, value: option })),
        },
        {
          title: 'Zero açúcar',
          description: 'Opções zero para clientes que buscam leveza no mix.',
          icon: iconColaPremium,
          className: 'store-product-modal__option-section--zero',
          gridClassName: 'store-product-modal__pack-grid--zero',
          options: zeroOptions,
        },
      ],
    };
  }

  if (product.image === CardSabores) {
    const sections = coroaSaboresFlavorCategories.map((flavor) => ({
      title: flavor,
      description: 'Opções de embalagem para montar o mix da linha Coroa Sabores.',
      icon: CardSabores,
      options: coroaSaboresPackageOptions.map((option) => ({
        label: option,
        value: `Coroa Sabores ${flavor} - ${option}`,
      })),
    }));

    return {
      brandImage: CardSabores,
      fallbackImage: CardSabores,
      ariaLabel: 'Opcoes da Linha Coroa Sabores',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  if (product.image === CardFrish) {
    const sections = friishFlavorCategories.map((flavor) => ({
      title: flavor,
      description: 'Opção PET 2L para montar o mix da linha Frish.',
      icon: CardFrish,
      options: friishPackageOptions.map((option) => ({
        label: option,
        value: `Friish ${flavor} - ${option}`,
      })),
    }));

    return {
      brandImage: CardFrish,
      fallbackImage: CardFrish,
      ariaLabel: 'Opcoes da Linha Friish',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  if (product.image === CardIate) {
    const sections = iateFlavorCategories.map((flavor) => ({
      title: flavor,
      description: 'Opções PET 250ML e PET 2L para montar o mix da linha Iate.',
      icon: CardIate,
      options: iatePackageOptions.map((option) => ({
        label: option,
        value: `Iate ${flavor} - ${option}`,
      })),
    }));

    return {
      brandImage: CardIate,
      fallbackImage: CardIate,
      ariaLabel: 'Opcoes da Linha Iate',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  if (product.image === CardCampinho) {
    const sections = [
      {
        title: 'Natural',
        description: 'Opções de água natural para montar o mix da linha Campinho.',
        icon: CardCampinho,
        options: campinhoNaturalOptions.map((option) => ({
          label: option,
          value: `Campinho Natural - ${option}`,
        })),
      },
      {
        title: 'Gaseificada',
        description: 'Opções de água gaseificada para montar o mix da linha Campinho.',
        icon: CardCampinho,
        options: campinhoGaseificadaOptions.map((option) => ({
          label: option,
          value: `Campinho Gaseificada - ${option}`,
        })),
      },
    ];

    return {
      brandImage: CardCampinho,
      fallbackImage: CardCampinho,
      ariaLabel: 'Opcoes da Linha Campinho',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  if (product.image === CampinhoTonica) {
    const sections = [
      {
        title: 'Lemon',
        description: 'Opção PET 500ML para montar o mix da linha Lemon.',
        icon: CampinhoTonica,
        options: lemonTonicaLemonOptions.map((option) => ({
          label: option,
          value: `Lemon e Tônica Lemon - ${option}`,
        })),
      },
      {
        title: 'Tônica',
        description: 'Opções lata e PET para montar o mix da linha Tônica.',
        icon: CampinhoTonica,
        options: lemonTonicaTonicaOptions.map((option) => ({
          label: option,
          value: `Lemon e Tônica Tônica - ${option}`,
        })),
      },
    ];

    return {
      brandImage: CampinhoTonica,
      fallbackImage: CampinhoTonica,
      ariaLabel: 'Opcoes da Linha Lemon e Tonica',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  if (product.image === CardCoroaBeer) {
    const sections = [
      {
        title: 'Coroa Beer',
        description: 'Opção garrafa 600ML para montar o mix da linha Coroa Beer.',
        icon: CardCoroaBeer,
        options: coroaBeerOptions.map((option) => ({
          label: option,
          value: `Coroa Beer - ${option}`,
        })),
      },
    ];

    return {
      brandImage: CardCoroaBeer,
      fallbackImage: CardCoroaBeer,
      ariaLabel: 'Opcoes do Coroa Beer',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  if (product.image === cardBadWolf) {
    const sections = badWolfFlavorCategories.map((flavor) => ({
      title: flavor,
      description: 'Opções de embalagem para montar o mix da linha Bad Wolf.',
      icon: iconBadWolf,
      options: badWolfPackageOptions.map((option) => ({
        label: option,
        value: `Bad Wolf ${flavor} - ${option}`,
      })),
    }));

    return {
      brandImage: iconBadWolf,
      fallbackImage: cardBadWolf,
      ariaLabel: 'Opcoes da Linha Bad Wolf',
      traditionalOptions: [sections[0].options[0].value],
      zeroOptions: [],
      sections,
    };
  }

  return null;
}

export default function Ecommerce({ onLogout }) {
  const [isCatalogCategoryOpen, setIsCatalogCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [cartItems, setCartItems] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const [currentScreen, setCurrentScreen] = useState('catalogo');
  const [expandedProduct, setExpandedProduct] = useState('');
  const [selectedModalProduct, setSelectedModalProduct] = useState(null);
  const [selectedModalOptions, setSelectedModalOptions] = useState([]);
  const [modalOptionQuantities, setModalOptionQuantities] = useState({});
  const [highlightedModalOption, setHighlightedModalOption] = useState('');
  const [productOptions, setProductOptions] = useState({
    'Guaraná Coroa': { size: '250ml', type: 'Normal' },
  });

  const cartTotal = cartItems.reduce(
    (total, item) => total + parseCurrency(item.price) * item.quantity,
    0,
  );
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const filteredProducts = selectedCategory === 'Todas'
    ? ecommerceProducts
    : ecommerceProducts.filter((product) => product.category === selectedCategory);
  const modalMixConfig = getModalMixConfig(selectedModalProduct);
  const isMixModal = Boolean(modalMixConfig);
  const isCoroaColaPremiumModal = selectedModalProduct?.image === CardCoroaColaPremium;
  const isBadWolfModal = selectedModalProduct?.image === cardBadWolf;
  const isCoroaSaboresModal = selectedModalProduct?.image === CardSabores;
  const isFrishModal = selectedModalProduct?.image === CardFrish;
  const isIateModal = selectedModalProduct?.image === CardIate;
  const isCampinhoModal = selectedModalProduct?.image === CardCampinho;
  const isLemonTonicaModal = selectedModalProduct?.image === CampinhoTonica;
  const isCoroaBeerModal = selectedModalProduct?.image === CardCoroaBeer;
  const modalTotalQuantity = selectedModalOptions.reduce(
    (total, option) => total + (modalOptionQuantities[option] || 0),
    0,
  );
  const modalUnitPrice = selectedModalProduct ? parseCurrency(selectedModalProduct.price) : 0;
  const modalTotalValue = modalTotalQuantity * modalUnitPrice;
  

  useEffect(() => {
    if (!selectedModalProduct) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function closeModalOnEscape(event) {
      if (event.key === 'Escape') {
        setSelectedModalProduct(null);
      }
    }

    window.addEventListener('keydown', closeModalOnEscape);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [selectedModalProduct]);

  function getProductCartKey(product) {
    return product.cartKey || product.name;
  }

  function addToCart(product) {
    setCartItems((currentItems) => {
      const productCartKey = getProductCartKey(product);
      const productInCart = currentItems.find((item) => getProductCartKey(item) === productCartKey);

      if (productInCart) {
        return currentItems.map((item) =>
          getProductCartKey(item) === productCartKey
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    setOrderStatus('');
  }

  function addProductWithOptions(product) {
    const selectedOptions = productOptions[product.name] || {
      size: product.options.sizes[0],
      type: product.options.types[0],
    };

    addToCart({
      ...product,
      name: `${product.name} - ${selectedOptions.size} ${selectedOptions.type}`,
      cartKey: `${product.name}-${selectedOptions.size}-${selectedOptions.type}`,
      selectedSize: selectedOptions.size,
      selectedType: selectedOptions.type,
    });
  }

  function addModalProductToCart() {
    if (!selectedModalProduct) {
      return;
    }

    if (isMixModal) {
      if (!selectedModalOptions.length) {
        return;
      }

      selectedModalOptions.forEach((selectedOption) => {
        const optionQuantity = modalOptionQuantities[selectedOption] || 1;

        for (let count = 0; count < optionQuantity; count++) {
          addToCart({
            ...selectedModalProduct,
            name: `${selectedModalProduct.name} - ${selectedOption}`,
            cartKey: `${selectedModalProduct.name}-${selectedOption}`,
            selectedOption,
          });
        }
      });
    } else if (selectedModalProduct.options) {
      addProductWithOptions(selectedModalProduct);
    } else {
      addToCart(selectedModalProduct);
    }

    setSelectedModalProduct(null);
    requestAnimationFrame(() => {
      document.getElementById('carrinho')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  function openProductModal(product) {
    const productMixConfig = getModalMixConfig(product);

    if (productMixConfig) {
      setSelectedModalOptions([]);
      setModalOptionQuantities({});
    }

    setHighlightedModalOption('');
    setSelectedModalProduct(product);
  }

  function toggleModalOption(option) {
    setSelectedModalOptions((currentOptions) => {
      if (currentOptions.includes(option)) {
        setModalOptionQuantities((currentQuantities) => {
          const nextQuantities = { ...currentQuantities };
          delete nextQuantities[option];
          return nextQuantities;
        });

        return currentOptions.filter((currentOption) => currentOption !== option);
      }

      setModalOptionQuantities((currentQuantities) => ({
        ...currentQuantities,
        [option]: currentQuantities[option] || 1,
      }));

      return [...currentOptions, option];
    });
  }

  function updateModalOptionQuantity(option, change) {
    setModalOptionQuantities((currentQuantities) => {
      const currentQuantity = currentQuantities[option] || 0;
      const nextQuantity = Math.max(0, currentQuantity + change);
      const nextQuantities = { ...currentQuantities };

      if (nextQuantity === 0) {
        delete nextQuantities[option];
      } else {
        nextQuantities[option] = nextQuantity;
      }

      setSelectedModalOptions(Object.keys(nextQuantities));
      return nextQuantities;
    });
  }

  function toggleModalImageHighlight(option) {
    setHighlightedModalOption((currentOption) => (currentOption === option ? '' : option));
  }

  function clearModalOptions() {
    setSelectedModalOptions([]);
    setModalOptionQuantities({});
  }

  function updateProductOption(productName, optionName, value) {
    setProductOptions((currentOptions) => ({
      ...currentOptions,
      [productName]: {
        ...currentOptions[productName],
        [optionName]: value,
      },
    }));
  }

  function decreaseCartItem(productName) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
    setOrderStatus('');
  }

  function removeCartItem(productName) {
    setCartItems((currentItems) => currentItems.filter((item) => item.name !== productName));
    setOrderStatus('');
  }

  function confirmOrder() {
    if (!cartItems.length) {
      setOrderStatus('Adicione pelo menos um produto para confirmar o pedido.');
      return;
    }

    setOrderStatus(`Pedido confirmado com ${cartQuantity} item(ns), total de ${formatCurrency(cartTotal)}.`);
    setCartItems([]);
  }

  function goToCart() {
    setCurrentScreen('catalogo');
    requestAnimationFrame(() => {
      document.getElementById('carrinho')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  function goToCatalog() {
    setCurrentScreen('catalogo');
    requestAnimationFrame(() => {
      document.getElementById('catalogo')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  return (
    <main
      className="store-page"
      // style={{ '--products-bg': `url(${bgProdutos})` }}
    >
      <header className="store-topbar">
        <div className="store-brand">
          <img src={titleCrownIcon} alt="" />
          <div>
            <strong>Coroa Store</strong>
          </div>
        </div>

        <nav className="store-nav" aria-label="E-commerce">
          <button
            type="button"
            className={`store-nav__link ${currentScreen === 'catalogo' ? 'store-nav__link--active' : ''}`}
            onClick={goToCatalog}
          >
            Catalogo
          </button>
          <button
            type="button"
            className={`store-nav__link ${currentScreen === 'pedidos' ? 'store-nav__link--active' : ''}`}
            onClick={() => setCurrentScreen('pedidos')}
          >
            Pedidos
          </button>
          <a
            className="store-nav__link"
            href="#carrinho"
            onClick={() => setCurrentScreen('catalogo')}
          >
            Carrinho
          </a>
        </nav>

        <div className="store-session">
          <div className="store-session__user" aria-label="Usuario logado">
            <span>GC</span>
            <div>
              <strong>Cliente Coroa</strong>
              <small>Online agora</small>
            </div>
          </div>

          <button type="button" className="store-logout" onClick={onLogout}>
            Sair
          </button>
        </div>
      </header>

      <button
        type="button"
        className="store-notification"
        aria-label={`Carrinho com ${cartQuantity} item(ns)`}
        onClick={goToCart}
      >
        <StoreIcon type="cart" />
        <span>{cartQuantity}</span>
      </button>

      {currentScreen === 'pedidos' ? (
        <AcompanhamentoPedidos onBackToCatalog={() => setCurrentScreen('catalogo')} />
      ) : (
        <>
          <section id="catalogo" className="store-catalog" aria-labelledby="catalog-title">
            <div className="store-section-heading">
              <div className="store-section-title">
                <span>Catalogo</span>
                <h2 id="catalog-title">Produtos disponiveis</h2>
              </div>
              <div className="store-category store-category--catalog">
                <button
                  type="button"
                  className="store-view-all store-category__trigger"
                  aria-expanded={isCatalogCategoryOpen}
                  aria-haspopup="menu"
                  onClick={() => setIsCatalogCategoryOpen((current) => !current)}
                >
                  Categorias
                </button>

                {isCatalogCategoryOpen ? (
                  <div className="store-category__menu" role="menu">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        role="menuitem"
                        className={category === selectedCategory ? 'is-active' : ''}
                        onClick={() => {
                          setCurrentScreen('catalogo');
                          setSelectedCategory(category);
                          setIsCatalogCategoryOpen(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="store-product-grid">
              {filteredProducts.map((product) => (
                <article
                  key={product.name}
                  className={`store-product-card${product.image === cardGuarana ? ' store-product-card--guarana' : ''}${product.image === CardCoroaBeer ? ' store-product-card--coroa-beer' : ''}${expandedProduct === product.name ? ' store-product-card--expanded' : ''}`}
                  onClick={() => openProductModal(product)}
                >
                  {product.showImage ? (
                    <div className="store-product-card__image">
                      <span className="store-product-card__icon">
                        <StoreIcon type={product.icon} />
                      </span>
                      <img src={product.image} alt={product.name} />
                    </div>
                  ) : (
                    <div className="store-product-card__placeholder">
                      <span className="store-product-card__icon">
                        <StoreIcon type={product.icon} />
                      </span>
                      <strong>{product.category}</strong>
                      <small>Imagem do produto</small>
                    </div>
                  )}
                  <div className="store-product-card__body">
                    <div>
                      <small className="store-product-card__category">{product.category}</small>
                      <strong>{product.name}</strong>
                      <span>{product.description}</span>
                    </div>

                    {product.options && expandedProduct === product.name ? (
                      <div className="store-product-options" onClick={(event) => event.stopPropagation()}>
                        <div>
                          <strong>Tamanho</strong>
                          <div className="store-product-options__group">
                            {product.options.sizes.map((size) => (
                              <button
                                key={size}
                                type="button"
                                className={productOptions[product.name]?.size === size ? 'is-selected' : ''}
                                onClick={() => updateProductOption(product.name, 'size', size)}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <strong>Tipo</strong>
                          <div className="store-product-options__group">
                            {product.options.types.map((type) => (
                              <button
                                key={type}
                                type="button"
                                className={productOptions[product.name]?.type === type ? 'is-selected' : ''}
                                onClick={() => updateProductOption(product.name, 'type', type)}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="store-product-card__footer">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          openProductModal(product);
                        }}
                      >
                        Selecionar Opções
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {!filteredProducts.length ? (
              <div className="store-catalog__empty">
                <strong>Nenhum produto encontrado</strong>
                <span>Selecione outra categoria para continuar montando o pedido.</span>
              </div>
            ) : null}
          </section>

          <section id="carrinho" className="store-cart" aria-labelledby="cart-title">
            <div className="store-section-heading">
              <div className="store-section-title">
                <span>Carrinho</span>
                <h2 id="cart-title">Pedido em montagem</h2>
              </div>
              <strong className="store-cart__total">{formatCurrency(cartTotal)}</strong>
            </div>

            {cartItems.length ? (
              <div className="store-cart__content">
                <div className="store-cart__items">
                  {cartItems.map((item) => (
                    <article key={item.name} className="store-cart__item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.description}</span>
                        <small>{item.price} por unidade</small>
                      </div>
                      <div className="store-cart__actions" aria-label={`Quantidade de ${item.name}`}>
                        <button type="button" onClick={() => decreaseCartItem(item.name)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => addToCart(item)}>
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="store-cart__remove"
                        onClick={() => removeCartItem(item.name)}
                      >
                        Remover
                      </button>
                    </article>
                  ))}
                </div>

                <aside className="store-cart__checkout" aria-label="Fechamento do pedido">
                  <span>Resumo comercial</span>
                  <strong>{formatCurrency(cartTotal)}</strong>
                  <small>{cartQuantity} item(ns) selecionado(s)</small>
                  <button type="button" onClick={confirmOrder}>
                    Confirmar pedido
                  </button>
                </aside>
              </div>
            ) : (
              <div className="store-cart__empty">
                <StoreIcon type="cart" />
                <strong>Seu carrinho esta vazio</strong>
                <span>Adicione produtos do catalogo para montar e confirmar o pedido.</span>
              </div>
            )}

            {orderStatus ? <p className="store-cart__status">{orderStatus}</p> : null}
          </section>
        </>
      )}

      {selectedModalProduct ? (
        <div
          className="store-product-modal"
          role="presentation"
          onClick={() => setSelectedModalProduct(null)}
        >
          <section
            className={`store-product-modal__dialog${isMixModal ? ' store-product-modal__dialog--guarana' : ''}${isCoroaColaPremiumModal ? ' store-product-modal__dialog--cola-premium' : ''}${isBadWolfModal ? ' store-product-modal__dialog--bad-wolf' : ''}${isCoroaSaboresModal ? ' store-product-modal__dialog--coroa-sabores' : ''}${isFrishModal ? ' store-product-modal__dialog--frish' : ''}${isIateModal ? ' store-product-modal__dialog--iate' : ''}${isCampinhoModal ? ' store-product-modal__dialog--campinho' : ''}${isLemonTonicaModal ? ' store-product-modal__dialog--lemon-tonica' : ''}${isCoroaBeerModal ? ' store-product-modal__dialog--coroa-beer' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="store-product-modal__close"
              aria-label="Fechar modal"
              onClick={() => setSelectedModalProduct(null)}
            >
              x
            </button>
            {modalMixConfig ? (
              <>
                <div className="store-product-modal__hero">
                  <div>
                    {/* <span>{selectedModalProduct.category}</span> */}
                    {isCoroaColaPremiumModal ? (
                      <h3
                        id="product-modal-title"
                        className="store-product-modal__premium-title"
                      >
                        <span>Coroa Cola</span>
                        <span>Premium</span>
                      </h3>
                    ) : (
                      <h3 id="product-modal-title">{selectedModalProduct.name}</h3>
                    )}
                  </div>
                  <div className="store-product-modal__brand">
                    <img src={modalMixConfig.brandImage} alt="" />
                  </div>
                </div>

                <div className="store-product-modal__options" aria-label={modalMixConfig.ariaLabel}>
                  <div className="store-product-modal__selection-layout">
                    <div className="store-product-modal__selection-list">
                      {modalMixConfig.sections ? (
                        modalMixConfig.sections.map((section) => (
                          <section
                            key={section.title}
                            className="store-product-modal__option-section"
                          >
                            <div className="store-product-modal__section-heading">
                              <span className="store-product-modal__section-icon">
                                <img src={section.icon} alt="" />
                              </span>
                              <div>
                                <span>{section.title}</span>
                                <small>{section.description}</small>
                              </div>
                            </div>
                            <div className="store-product-modal__pack-grid">
                              {section.options.map(({ label, value }) => {
                                const optionQuantity = modalOptionQuantities[value] || 0;
                                const isSelected = optionQuantity > 0;

                                return (
                                  <article
                                    key={value}
                                    className={`store-product-modal__pack-card${isSelected ? ' is-selected' : ''}${highlightedModalOption === value ? ' is-image-highlighted' : ''}`}
                                  >
                                    <button
                                      type="button"
                                      className="store-product-modal__pack-select"
                                      aria-label={`${isSelected ? 'Remover' : 'Selecionar'} ${value}`}
                                      onClick={() => toggleModalOption(value)}
                                    />
                                    <img
                                      src={getPackageImage(value, modalMixConfig.fallbackImage)}
                                      alt={label}
                                      role="button"
                                      tabIndex={0}
                                      onClick={() => toggleModalImageHighlight(value)}
                                      onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') {
                                          event.preventDefault();
                                          toggleModalImageHighlight(value);
                                        }
                                      }}
                                    />
                                    <strong>{label}</strong>
                                    <div className="store-product-modal__quantity" aria-label={`Quantidade de ${value}`}>
                                      <button
                                        type="button"
                                        onClick={() => updateModalOptionQuantity(value, -1)}
                                      >
                                        -
                                      </button>
                                      <span>{optionQuantity}</span>
                                      <button
                                        type="button"
                                        onClick={() => updateModalOptionQuantity(value, 1)}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </article>
                                );
                              })}
                            </div>
                          </section>
                        ))
                      ) : (
                        <>
                      <section className="store-product-modal__option-section">
                    <div className="store-product-modal__section-heading">
                      <span className="store-product-modal__section-icon">
                        <img src={modalMixConfig.brandImage} alt="" />
                      </span>
                      <div>
                        <span>Linha tradicional</span>
                        <small>Formatos para consumo individual, familia e abastecimento.</small>
                      </div>
                    </div>
                    <div className="store-product-modal__pack-grid">
                      {modalMixConfig.traditionalOptions.map((option) => {
                        const optionQuantity = modalOptionQuantities[option] || 0;
                        const isSelected = optionQuantity > 0;

                        return (
                          <article
                            key={option}
                            className={`store-product-modal__pack-card${isSelected ? ' is-selected' : ''}${highlightedModalOption === option ? ' is-image-highlighted' : ''}`}
                          >
                            <button
                              type="button"
                              className="store-product-modal__pack-select"
                              aria-label={`${isSelected ? 'Remover' : 'Selecionar'} ${option}`}
                              onClick={() => toggleModalOption(option)}
                            />
                            <img
                              src={getPackageImage(option, modalMixConfig.fallbackImage)}
                              alt={option}
                              role="button"
                              tabIndex={0}
                              onClick={() => toggleModalImageHighlight(option)}
                              onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  toggleModalImageHighlight(option);
                                }
                              }}
                            />
                            <strong>{option}</strong>
                            <div className="store-product-modal__quantity" aria-label={`Quantidade de ${option}`}>
                              <button
                                type="button"
                                onClick={() => updateModalOptionQuantity(option, -1)}
                              >
                                -
                              </button>
                              <span>{optionQuantity}</span>
                              <button
                                type="button"
                                onClick={() => updateModalOptionQuantity(option, 1)}
                              >
                                +
                              </button>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                      </section>

                      <section className="store-product-modal__option-section store-product-modal__option-section--zero">
                    <div className="store-product-modal__section-heading">
                      <span className="store-product-modal__section-icon">
                        <img src={modalMixConfig.zeroIcon} alt="" />
                      </span>
                      <div>
                        <span>Zero açúcar</span>
                        <small>Opções zero para clientes que buscam leveza no mix.</small>
                      </div>
                    </div>
                    <div className="store-product-modal__pack-grid store-product-modal__pack-grid--zero">
                      {modalMixConfig.zeroOptions.map(({ label, value }) => {
                        const optionQuantity = modalOptionQuantities[value] || 0;
                        const isSelected = optionQuantity > 0;

                        return (
                          <article
                            key={value}
                            className={`store-product-modal__pack-card${isSelected ? ' is-selected' : ''}${highlightedModalOption === value ? ' is-image-highlighted' : ''}`}
                          >
                            <button
                              type="button"
                              className="store-product-modal__pack-select"
                              aria-label={`${isSelected ? 'Remover' : 'Selecionar'} ${value}`}
                              onClick={() => toggleModalOption(value)}
                            />
                            <img
                              src={getPackageImage(value, modalMixConfig.fallbackImage)}
                              alt={label}
                              role="button"
                              tabIndex={0}
                              onClick={() => toggleModalImageHighlight(value)}
                              onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  toggleModalImageHighlight(value);
                                }
                              }}
                            />
                            <strong>{label}</strong>
                            <div className="store-product-modal__quantity" aria-label={`Quantidade de ${value}`}>
                              <button
                                type="button"
                                onClick={() => updateModalOptionQuantity(value, -1)}
                              >
                                -
                              </button>
                              <span>{optionQuantity}</span>
                              <button
                                type="button"
                                onClick={() => updateModalOptionQuantity(value, 1)}
                              >
                                +
                              </button>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                      </section>
                        </>
                      )}
                    </div>

                    <aside className="store-product-modal__order-preview" aria-label="Detalhes do pedido">
                      <span>Detalhes do pedido</span>
                      <strong>{formatCurrency(modalTotalValue)}</strong>
                      <small>{modalTotalQuantity} unidade(s) selecionada(s)</small>

                      <div className="store-product-modal__order-lines">
                        {selectedModalOptions.length ? (
                          selectedModalOptions.map((option) => {
                            const optionQuantity = modalOptionQuantities[option] || 0;

                            return (
                              <div key={option}>
                                <span>{option}</span>
                                <strong>
                                  {optionQuantity} x {formatCurrency(modalUnitPrice)}
                                </strong>
                              </div>
                            );
                          })
                        ) : (
                          <p>Selecione uma embalagem para visualizar o valor do pedido.</p>
                        )}
                      </div>
                    </aside>
                  </div>
                </div>

                <div className="store-product-modal__actions">
                  <button
                    type="button"
                    className="store-product-modal__back"
                    onClick={() => setSelectedModalProduct(null)}
                  >
                    Continuar Comprando
                  </button>
                  <button
                    type="button"
                    onClick={addModalProductToCart}
                    disabled={!selectedModalOptions.length}
                  >
                    <StoreIcon type="cart" />
                    Adicionar ao carrinho
                  </button>
                </div>
              </>
            ) : (
              <>
                <span>{selectedModalProduct.category}</span>
                <h3 id="product-modal-title">{selectedModalProduct.name}</h3>
                <p>{selectedModalProduct.description}</p>
                <div className="store-product-modal__actions">
                  <button type="button" onClick={addModalProductToCart}>
                    Adicionar ao carrinho
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      ) : null}
    </main>
  );
}
