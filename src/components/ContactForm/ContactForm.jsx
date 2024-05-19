import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const ContactForm = () => {

  const [name, setName] = useState("Ashu")
  const [email, setEmail] = useState("Ashu@gmail.com")
  const [text, setText] = useState("I am a foodie")

  const onSubmitAction = (event)=> {
      event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
            <Button isOutline = {true} text="VIA EMAIL FORM" icon={<HiOutlineMail fontSize="24px"/>}/>
            <form onSubmit={onSubmitAction}>
        <div className={styles.form_control}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name'/>
        </div>
        <div className={styles.form_control}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email'/>
        </div>
        <div className={styles.form_control}>
          <label htmlFor='text'>Text</label>
          <textarea name='text'/>
        </div>
        <div>
        <Button text="SUBMIT" fontSize="24px"/>
        </div>

      </form>
      </div>
      
      <div className='contact_image'>
        <img src='images/Service 24_7-pana 1.svg' alt='contact-image'/>
      </div>

      <div>
        {
          name + " " + email +  " " + text
        }
      </div>

    </section>
  )
}

export default ContactForm