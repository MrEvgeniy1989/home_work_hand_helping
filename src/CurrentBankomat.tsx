import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (

        <Banknote color={props.money.banknotes === 'Dollars' ? 'darkseagreen' : 'palevioletred'}>
            {props.money.banknotes}
            <Value>{props.money.value}</Value>
        </Banknote>

        // props.money.banknotes === 'Dollars'
        //
        //     ? <BanknotGreen>
        //         {props.money.banknotes}
        //         <Value>{props.money.value}</Value>
        //     </BanknotGreen>
        //
        //     : <BanknotRed>
        //         {props.money.banknotes}
        //         <Value>{props.money.value}</Value>
        //     </BanknotRed>
    );
};

const Banknote = styled.div`
  background-color: ${props =>{
      if (props.color === 'palevioletred') {
          return 'palevioletred'
      } else {
          return 'darkseagreen'
      }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`

// const BanknotRed = styled.div`
//   background-color: palevioletred;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BanknotGreen = styled.div`
//   background-color: darkseagreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `

const Value = styled.div`
  //display: flex;
  justify-content: center;
`