import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7244.129002970134!2d67.05995831675962!3d24.79324476152518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cebf07ac441%3A0x296e1856932be50f!2sD.H.A%20Phase%206%20Bukhari%20Commercial%20Area%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705072019493!5m2!1sen!2s"
      width="100%" height="450" style={{ border: 0 }}
      allowFullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="" method="POST" className="contact-inputs">
          <input type="text"
            placeholder="username"
            name="username"
            autoComplete="off"
            required
          />

          <input type="email"
            placeholder="email"
            name="email"
            autoComplete="off"
            required
          />
         <textarea 
         name="Enter you message"
         cols="30"
         rows="10"
         required
         autoComplete="off"
         placeholder="Enter you message"
         >

         </textarea>

        </form>

      </div>

    </div>
  </Wrapper>;
};

export default Contact;
