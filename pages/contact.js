import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[name, setName] = useState('');
  const[desc, setDesc] = useState('');

  const submitHnadler = (e)=>{
    e.preventDefault();
    console.log("Form submitted successfully");
    // name, email , desc, phone
    console.log({name, email, phone, desc});

    // now sending the data to the backends
    const data = {phone, name, email, desc};

    fetch('http://localhost:3000/api/postcontact',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // actully this is very lame method of showing submitted,But I am doing this only for the example purpose
      alert("Details saved Successfully");
      setDesc('');
      setName('')
      setEmail('');
      setPhone('');
    })
    .catch((error) => {
      console.error('Error:',error);
    });

    
  }
  const handleChange = (e)=> {
    // console.log(e.target.value);
    const {name, value} = e.target;
    if(name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phone') setPhone(value);
    else if (name === 'desc') setDesc(value);
  }
  return (
    <div className={styles.ab}>
      <form method="POST" className={styles.formbackendForm} onSubmit={submitHnadler}>
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Abdul Muid"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abdul@example.com"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Your phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            placeholder="+91 123456890"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="desc">Your message</label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            placeholder="Your message..."
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
