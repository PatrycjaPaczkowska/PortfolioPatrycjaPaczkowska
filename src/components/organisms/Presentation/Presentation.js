import React from 'react';
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Presentation = () => {
   const { t, i18n } = useTranslation();

   const Title = styled.h1`
      font-size: 13px;
      font-weight: 800;
      color: #61dafb;
   `;

   return ( 
      <Title>{t("title")}</Title>
    );
}
 
export default Presentation;