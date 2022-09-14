import React from "react";
import { ScrollView } from "react-native";
import Styled from "styled-components/native";
import Title from "../components/text/Title";
import ScheduleForm from "../components/form/ScheduleForm";

const Wrapper = Styled.ScrollView`
    flex:1;
    padding:20px;
    background-color:'#FFFFFF'
`;

const Schedule = () => {
  return (
    <Wrapper>
      <Title>Reminder</Title>
      <ScheduleForm />
    </Wrapper>
  );
};

export default Schedule;
