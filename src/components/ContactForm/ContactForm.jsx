import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContact } from '../../redux/contacts/operations';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.wrap}>
          <label htmlFor={nameId}>Name</label>
          <Field type='text' name='name' id={nameId} />
          <ErrorMessage
            className={css.errorMessage}
            name='name'
            component='span'
          />
        </div>
        <div className={css.wrap}>
          <label htmlFor={phoneId}>Number</label>
          <Field type='text' name='number' id={phoneId} />
          <ErrorMessage
            className={css.errorMessage}
            name='number'
            component='span'
          />
        </div>
        <Button className={css.btnSubmit} variant="outlined" type='submit'>
            Submit
          </Button>
      </Form>
    </Formik>
  );
}
