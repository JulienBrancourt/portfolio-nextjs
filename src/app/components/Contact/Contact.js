import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi du message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "23090463-3f01-4ec7-b645-2bbdc66b0b19");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Merci pour votre message !");
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div className="contact">
      <h2>Me contacter</h2>
      <p className='introContact'>Vous avez un projet ? N'hésitez pas à me contacter !</p>
      <form onSubmit={onSubmit} className='formulaire'>
        <input type="text" name="name" placeholder="Nom" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea name="message" placeholder="Votre message" required></textarea>
        <input type="submit" className='submit'/>
      </form>
      <span>{result}</span>
    </div>
  )
}

export default Contact