import styled from "styled-components";

export const CommandsContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  padding: 80px 0 0 0;
  //height: 100vh;
  height: auto;
  min-height: 80vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const CommandsContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommandsSelectorMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 16px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 20px;

  //@media screen and (max-width: 1100px) {
  //  grid-template-columns: repeat(3, minmax(0, 1fr));
  //};

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 50vh;
  };
`;

export const CommandsCommandsSelectorItem = styled.div`
  text-decoration: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #A16AE8;
  border-radius: 10px;
  font-size: 20px;
  height: auto;
  width: auto;
  padding: 10px;
  cursor: pointer;
  color: #000;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
  }
  
  &:active {
    color: #fff;
  }

  @media screen and (max-width: 1100px) {
    font-size: 10px;
  };

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CommandsCardsWrapper = styled.div`
  align-items: center;
  width: 100%;
  height: auto;
  display: grid;
  grid-row-gap: 20px;
  margin: 20px;
  transition: 0.2s ease-in-out;
`;

export const CommandsCard = styled.div`
  width: auto;
  background-color: #000;
  border-radius: 10px;
  padding: 10px;
`;

export const CommandsCardContainer = styled.div`
  background-color: rgba(161, 106, 232, 0.1);
  border-radius: 5px;
  padding: 10px;
`;

export const CommandsCardH1 = styled.h1`
  color: #fff;
  margin: 5px;
  font-size: 20px;
`;

export const CommandsCardP = styled.p`
  color: #fff;
  font-size: 16px;
  padding: 0 0 16px;
`;

export const CommandsCardPermissions = styled.p`
  color: #fff;
  font-size: 10px;
  background-color: #A16AE8;
  border-radius: 2px;
  width: max-content;
  padding: 5px;
`;