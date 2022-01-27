import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import React, { useState } from "react";
import styles from "./AccumulateMileage.module.css";

const ID_4 = "id4";

function AccumulateMileage() {
  const [checked, setChecked] = useState(true);

  const onClickHandler = () => {
    setChecked((state) => !state);
  };

  return (
    <SectionWrapper>
      <SectionHeader children="상품 혜택 설정 적용"></SectionHeader>
      <SectionBody>
        <ContentBodyTitle children="마일리지 적립"></ContentBodyTitle>
        <SectionBodyContent>
          <OnOffButton id={ID_4} checked={checked} onClick={onClickHandler} />
        </SectionBodyContent>
      </SectionBody>
    </SectionWrapper>
  );
}

export default AccumulateMileage;
