import React from "react";
import Icon1 from "../../images/code.svg"
import Icon2 from "../../images/update.svg"
import Icon3 from "../../images/safe.svg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./services-elements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Advantages</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Open source</ServicesH2>
          <ServicesP>We are happy to share our best practices for the good of society.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Regular updates</ServicesH2>
          <ServicesP>Stable updates will delight you with new content and quality improvements.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Reliability</ServicesH2>
          <ServicesP>Our team will provide you with the best designs and stable connections.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services