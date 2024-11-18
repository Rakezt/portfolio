import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lp5kdqr',
        'template_hu6g9zh',
        e.target,
        'KsurmgedSHDnC_c14'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={sendEmail}>
        <div className='formGroup'>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='from_name'
            id='name'
            placeholder='Name'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='email'
            name='from_email'
            id='email'
            placeholder='Email'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            required
          ></textarea>
        </div>
        <input className='hover btn' type='submit' value='Submit' />
      </form>
      <span className={styles.status}> {status && <p>{status}</p>}</span>
    </section>
  );
};

export default Contact;
