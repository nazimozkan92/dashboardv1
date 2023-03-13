import * as yup from "yup";

const editScheme = yup.object().shape({
  title: yup.string().required(),
  shortText: yup.string().required(),
  content: yup.string().required(),
});

export default editScheme;
