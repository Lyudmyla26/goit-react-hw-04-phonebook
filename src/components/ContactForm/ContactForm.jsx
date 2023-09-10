import { Formik, Field, ErrorMessage } from 'formik';
import propTypes from 'prop-types';
import * as Yup from 'yup';
import { Button, Table, Phone } from './ContactForm.style';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(8, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Required'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values });
        actions.resetForm();
      }}
    >
      <Phone>
        <Table>
          Name <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </Table>

        <Table>
          Contacts <Field name="number" placeholder="contacts" />
          <ErrorMessage name="number" />
        </Table>

        <Button type="submit">Add contact</Button>
      </Phone>
    </Formik>
  );
};

ContactForm.propTypes = { onAdd: propTypes.func.isRequired };
