import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInput from "../Common/ImageInput";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleImage = (uri) => {
    setFieldValue(name, uri);
  };

  return (
    <>
      <ImageInput imageUri={imageUris} onChangeImage={handleImage} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
