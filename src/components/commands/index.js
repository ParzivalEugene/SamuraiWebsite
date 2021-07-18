import {HeroBackground} from "../hero-section/hero-elements";
import {
  CommandsContainer,
  CommandsSelectorMenu,
  CommandsCommandsSelectorItem,
  CommandsCard,
  CommandsCardH1,
  CommandsCardContainer,
  CommandsCardP,
  CommandsCardPermissions, CommandsCardsWrapper, CommandsContent
} from "./commands-elements";
import {items} from "./data";
import React, {useState} from "react";

const CommandsSection = () => {
  const [commandsList, setCommandsList] = useState(items);
  const filter = (category) => {
    if (category === "All") {
      setCommandsList(items);
      return;
    }
    const filteredData=items.filter(item => item.category === category);
    setCommandsList(filteredData)
  };
  return (
    <CommandsContainer>
      <HeroBackground/>
      <CommandsContent>
        <CommandsSelectorMenu>
          <CommandsCommandsSelectorItem onClick={() => filter("All")}>All</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Music")}>Music</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Levels")}>Levels</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Birthdays")}>Birthdays</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Games")}>Games</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Translator")}>Translator</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Glossary")}>Glossary</CommandsCommandsSelectorItem>
          <CommandsCommandsSelectorItem onClick={() => filter("Mini")}>Mini</CommandsCommandsSelectorItem>
        </CommandsSelectorMenu>
        <CommandsCardsWrapper>
          {
            commandsList.map((item) => {
              return (
                <CommandsCard key={item.id}>
                  <CommandsCardH1>{item.title}</CommandsCardH1>
                  <CommandsCardContainer>
                    <CommandsCardP>{item.description}</CommandsCardP>
                    <CommandsCardPermissions>{item.permissions}</CommandsCardPermissions>
                  </CommandsCardContainer>
                </CommandsCard>
              )
            })
          }
        </CommandsCardsWrapper>
      </CommandsContent>
    </CommandsContainer>
  );
};

export default CommandsSection;