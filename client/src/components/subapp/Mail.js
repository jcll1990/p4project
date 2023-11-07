import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Mail({ user, mail, setMail }) {

  const [selMail, setSelMail] = useState({});
  const [fmail, setFmail] = useState (user.id)
  const [filterBySender, setFilterBySender] = useState(false); 

  const buttonText = filterBySender ? "Received e-mails" : "Sent e-mails";


  



  function handleMailClick(a) {
    setSelMail(a);

  }
  function sendMail(event) {
    event.preventDefault();

    const newMail = {
      id: "", 
      user_id_sender: user.id,
      user_id_receiver: parseInt(event.target.emailRecipient.value),
      sender_name : user.user_name,  
      date : new Date().toLocaleString(),
      message: event.target.newEmailText.value,
    };

    fetch("http://localhost:3000/mail", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMail),
    });


    setMail((prevMail) => [newMail, ...prevMail]);

    event.target.reset();
  }


  return (
    <div>
      <h1>Mail</h1>

      <div id="emailList">
            <button onClick={() => setFilterBySender(!filterBySender)}>
        {buttonText}
      </button>
      <h3>{!filterBySender ? "Received e-mails:" : "Sent e-mails:"}</h3>

        {mail
          .filter((m) =>
            filterBySender
              ? m.user_id_sender === user.id
              : m.user_id_receiver === user.id
          )
          .map((m) => (
            <ul key={m} onClick={() => handleMailClick(m)}>
              <li>{m.sender_name}</li>
              <li>{m.date}</li>
              <li>{m.message}</li>
            </ul>
          ))}
</div>



      <div id="emailBox">Mail box
      
            <li>{selMail.sender_name}</li>
            <li>{selMail.date}</li>
            <li>{selMail.message}</li>

      </div>




      <div id="newEmail">
        New email
        <form onSubmit={sendMail}>
          <input
            type="number"
            id="emailRecipient"
            placeholder="Mail recipient id"
          />
          <input
            type="text"
            id="newEmailText"
            placeholder="Write your message"
          />

          <button type="submit">Send message</button>
        </form>
      </div>






    </div>
  );
}

export default Mail;
