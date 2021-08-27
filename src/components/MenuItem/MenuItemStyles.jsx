import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 290px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  // folosesc overflow pentru ca tranitia sa nu depaseasca menu-item; transitia sa fie ascunsa in interiorul componentei reutilizabile
  overflow: hidden;
  // semnul Amperson ataseaza clasei primul copil, a î oriunde este un element din meniu, primul copil va contine acest stil
  &:hover {
    cursor: pointer;
    // orice elemente cu imagea de fundal a clasei menu-item ii adaug o transformare de tip scale
    & .background-image {
      transform: scale(1.1);
      // durata tranzisitiei este de 6 secunde iar prin cubic-bezier se determina viteza in care are loc aceasta transformare-permite o tranzitie mai lina a transformarii
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
  .link {
    text-decoration: none;
  }
  &.large {
    height: 380px;
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
    // height: 20rem;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  // proprietatea opacity de CSS indica transparenta div-ului de content
  opacity: 0.7;
  // position:absolute pentru ca, div-ul cu content sa fie plasat pe centrul componentei menu-item
  position: absolute;
`;

export const TitleContainer = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
