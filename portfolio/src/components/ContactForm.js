import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

function ContactForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Please enter an email.'),
            subject: Yup.string().max(50, 'Subject must be less than 50 characters.').required('Please enter a subject'),
            message: Yup.string().required('Please enter a message.')
        }),
        onSubmit: values => {
            axios.post('https://portfolio-thompson.herokuapp.com/message', values)
                .then(res => {
                    console.log(res);
                    alert('Thank You for you submission');
                    window.location.reload();
                })
                .catch(err => {
                    return err
                })
        }
    })

    return (
        <div id='contactForm' className='contact_container'>
            <h1><strong>Send a Message</strong></h1>
            <form onSubmit={formik.handleSubmit} className='contact_form'>
                <label htmlFor='email'>Email</label>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ): null}
                <input type='email'
                       name='email'
                       id='email'
                       onBlur={formik.handleBlur}
                       value={formik.values.email}
                       onChange={formik.handleChange}>
                </input>

                <label htmlFor='subject'>Subject</label>
                {formik.touched.subject && formik.errors.subject ? (
                    <div>{formik.errors.subject}</div>
                ): null}
                <input type='subject'
                       name='subject'
                       id='subject'
                       onBlur={formik.handleBlur}
                       value={formik.values.subject}
                       onChange={formik.handleChange}>
                </input>

                <label htmlFor='message'>Message</label>
                {formik.touched.message && formik.errors.message ? (
                    <div>{formik.errors.message}</div>
                ): null}
                <textarea name='message'
                          id='message'
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                          onChange={formik.handleChange}>
                </textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;