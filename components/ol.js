import React from 'react'
import styled from 'styled-components'

const Ol = styled.ol`
  margin: 0 0 20px 25px;
  -webkit-padding-start: 0px;
  color: #898989;
  counter-reset: roman;

  li {
    display: list-item;
    list-style-type: none;
  }

  li:before {
    counter-increment: roman;
    content: counter(roman, decimal) ".";
    padding-right: 5px;
  }
`
Ol.displayName = 'Ol'
export default Ol
