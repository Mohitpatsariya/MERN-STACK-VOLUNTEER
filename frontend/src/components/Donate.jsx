import React, { useState } from "react";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disablebtn, setDisableBtn] = useState();
  return (
    <>
      <section className="donate">
        <form>
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
          <div>
            <label>Show Your Loves for Poors</label>
            <input
              type="number"
              value={amount}
              placeholder="Enter donation amount(USD)"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn" type="submit" disabled={disablebtn}>
            Donate{amount ? `$${amount}`:`${0}`}
          </button>
        </form>
      </section>
    </>
  );
};

export default Donate;
