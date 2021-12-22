import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";

const Ingredients = ({ onIngredientChange }) => {
  let [formValue, setFormValue] = useState("");

  const handleChange = (event, { value }) => {
    setFormValue(value);
    onIngredientChange(value);
  };

  return (
    <Form>
      <Form.Group grouped>
        <Form.Field
          control={Radio}
          label="Orange"
          name="ingredient"
          value="Orange"
          checked={formValue === "Orange"}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label="Gin"
          name="ingredient"
          value="Gin"
          checked={formValue === "Gin"}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          type="radio"
          label="Lemon"
          name="ingredient"
          value="Lemon"
          checked={formValue === "Lemon"}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          type="radio"
          label="Coke"
          name="ingredient"
          checked={formValue === "Coke"}
          onChange={handleChange}
          value="Coke"
        />
        <Form.Radio
          control={Radio}
          label="Vodka"
          name="ingredient"
          value="Vodka"
          checked={formValue === "Vodka"}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Ingredients;
