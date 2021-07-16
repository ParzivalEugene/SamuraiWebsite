import React from "react";
import {
  CommandsCard,
  CommandsCardContainer,
  CommandsCardH1,
  CommandsCardsWrapper,
  CommandsCardP,
  CommandsCardPermissions
} from "./commands-elements";
import {items} from "./data";

const Cards = ({commandsList}) => {
  if (commandsList === undefined) {
    commandsList = items
  }
  return (
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
  )
}

export default Cards;