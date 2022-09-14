import React, { useState } from "react";
import { Platform } from "react-native";

import { Formik } from "formik";
import { Button, TextInput, Text } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

import styled from "styled-components/native";
import * as Yup from "yup";

import SubTitle from "../components/text/SubTitle";
import Title from "../components/text/Title";
import colors from "../components/colors";

const validationSchema = Yup.object().shape({
  medicine_name: Yup.string()
    .required("Medicine name is required.")
    .label("Medicine Name"),
  description: Yup.string()
    .required("Description is required.")
    .label("Description"),
});

const StyledTextInput = styled(TextInput)`
  margin-bottom: 10px;
`;

const DateButton = styled(Button)`
  margin: 10px 0 10px;
`;

const SubmitButton = styled(Button)`
  padding: 8px;
  margin: 10px 0 20px;
  background-color: ${colors.secondary};
`;

const Wrapper = styled.ScrollView`
  flex: 1;
  border-width: 2px;
  padding: 10px;
`;

const AddMedicine = () => {
  const [start_date, setStartDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  //   const [mode, setMode] = useState("time");
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const onStartDateChange = (event: Event, selectedDate: Date) => {
    console.log(event);
    console.log("selected date is: ", selectedDate);

    const currentDate = selectedDate || start_date;
    setShowStart(Platform.OS === "ios");
    setStartDate(currentDate);
  };

  const onEndDateChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || end_date;
    setShowEnd(Platform.OS === "ios");
    setEndDate(currentDate);
  };

  return (
    <Wrapper>
      <SubTitle>Add new medicine</SubTitle>
      <Formik
        initialValues={{
          medicine_name: "",
          description: "",
          start_date: "",
          end_date: "",
          pharmacist_advice: "",
        }}
        //   validationSchema={validationSchema}
        onSubmit={(values) =>
          console.log(
            values,
            "start_date: ",
            start_date,
            "end_date: ",
            end_date
          )
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <StyledTextInput
              placeholder="Medicine Name"
              onChangeText={handleChange("medicine_name")}
              onBlur={handleBlur("medicine_name")}
              value={values.medicine_name}
              mode="outlined"
              outlineColor="lightgray"
            />

            <StyledTextInput
              placeholder="Description of ailment"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              mode="outlined"
              multiline
              numberOfLines={3}
              outlineColor="lightgray"
            />
            <StyledTextInput
              placeholder="Pharmacist's advice"
              onChangeText={handleChange("advice")}
              onBlur={handleBlur("advice")}
              value={values.pharmacist_advice}
              mode="outlined"
              multiline
              numberOfLines={3}
              outlineColor="lightgray"
            />
            <SubTitle style={{ marginVertical: 10 }}>
              Start Date: {start_date.toDateString()}
            </SubTitle>
            <DateButton mode="text" onPress={() => setShowStart(!showStart)}>
              Select Start Date
            </DateButton>

            {showStart && (
              <DateTimePicker
                value={start_date}
                mode={"date"}
                is24Hour={false}
                locale="enGB"
                display="default"
                onChange={onStartDateChange}
              />
            )}
            <SubTitle style={{ marginVertical: 10 }}>
              End Date: {end_date.toDateString()}
            </SubTitle>
            <DateButton mode="text" onPress={() => setShowEnd(!showEnd)}>
              Select End Date
            </DateButton>
            {showEnd && (
              <DateTimePicker
                testID="dateTimePicker"
                value={end_date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onEndDateChange}
              />
            )}
            <SubmitButton mode="contained" onPress={handleSubmit}>
              Add Medicine
            </SubmitButton>
          </>
        )}
      </Formik>
    </Wrapper>
  );
};

export default AddMedicine;
