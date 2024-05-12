import React from "react";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import ROUTES, { SANDBOX_ROUTES_FATHER } from "../../routes/routesModel";
import Input from "../../forms/components/Input";

type Data = {
  first: string;
  last: string;
};

const FormTest = () => {
  const INITIAL_FORM = {
    first: "",
    last: "",
  };
  const SCHEMA = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };
  const handleSubmit = (data: Data) => {
    console.log(data);
    handleReset();
  };
  const { value, ...rest } = useForm(INITIAL_FORM, SCHEMA, handleSubmit);
  const { handleChange, handleReset, onSubmit, validateForm } = rest;
  const { data, errors } = value;
  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="form test"
        onSubmit={onSubmit}
        onReset={handleReset}
        onFormChange={validateForm}
        to={ROUTES.SANDBOX}
        // styles={{ border: "1px solid black" }}
      >
        <Input
          label="first name"
          data={data}
          onInputChange={handleChange}
          name="first"
          error={errors.first}
          // name="first"
          breakPoints={{ xs: 12, md: 6 }}
        />
        <Input
          label="last name"
          data={data}
          onInputChange={handleChange}
          name="last"
          error={errors.last}
          breakPoints={{ xs: 12, md: 6 }}
        />
      </Form>
    </Container>
  );
};

export default FormTest;
