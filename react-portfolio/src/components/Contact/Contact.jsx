import React from "react";
import './Contact.css'

function Contact() {
    return (
        <section>
        <h2>Contact me</h2>
          <h4>Please see my contact information below!</h4>
            <div className="mt-2">
              Email:{" "}
              <a href="mailto:sabrinanawaz23@gmail.com">sabrinanawaz23@gmail.com</a>
              <br />
              Github:{" "}
              <a href="https://github.com/Sabrina-Nawaz">
                https://github.com/Sabrina-Nawaz
              </a>
              <br />
            </div>
      </section>
    );
  }

export default Contact;