// import React, { useState } from "react";
// import styles from "@/styles/Contact.module.css";

// const Contact = () => {
//   const[email, setEmail] = useState('');
//   const[phone, setPhone] = useState('');
//   const[name, setName] = useState('');
//   const[desc, setDesc] = useState('');

//   const submitHnadler = (e)=>{
//     e.preventDefault();
//     console.log("Form submitted successfully");
//     // name, email , desc, phone
//     console.log({name, email, phone, desc});

//     // now sending the data to the backends
//     const data = {phone, name, email, desc};

//     fetch('http://localhost:3000/api/postcontact',{
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       // actully this is very lame method of showing submitted,But I am doing this only for the example purpose
//       alert("Details saved Successfully");
//       setDesc('');
//       setName('')
//       setEmail('');
//       setPhone('');
//     })
//     .catch((error) => {
//       console.error('Error:',error);
//     });

    
//   }
//   const handleChange = (e)=> {
//     // console.log(e.target.value);
//     const {name, value} = e.target;
//     if(name === 'name') setName(value);
//     else if (name === 'email') setEmail(value);
//     else if (name === 'phone') setPhone(value);
//     else if (name === 'desc') setDesc(value);
//   }
//   return (
//     <div className={styles.ab}>
//       <form method="POST" className={styles.formbackendForm} onSubmit={submitHnadler}>
//         <div>
//           <label htmlFor="name">Your name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             placeholder="Abdul Muid"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Your email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             placeholder="abdul@example.com"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="phone">Your phone</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={phone}
//             placeholder="+91 123456890"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="desc">Your message</label>
//           <textarea
//             id="desc"
//             name="desc"
//             value={desc}
//             placeholder="Your message..."
//             required
//             onChange={handleChange}
//           ></textarea>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
    console.log({ name, email, phone, desc });

    const data = { phone, name, email, desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Details saved Successfully");
        setDesc('');
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phone') setPhone(value);
    else if (name === 'desc') setDesc(value);
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2>Contact Us</h2>
      <p>I 'll get back soon!) </p>
      <form method="POST" className={styles.formbackendForm} onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="youremail@gmail.com"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Your Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            placeholder="+91 1234567890"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="desc">Your Message</label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            placeholder="Your message..."
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={styles.sendButton}>Send</button>
      </form>

      <p className={styles.callUs}><FaPhone /> : 01234-05678 </p>
    </div>
  );
};

export default Contact;

