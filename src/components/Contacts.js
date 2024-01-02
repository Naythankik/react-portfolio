const Contacts = () => {
    return ( 
        <section className="contact">
          <div id="contact">
            <h1>Contact</h1>
            <h3>Connect with me</h3>
            <p>
              If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I'd love to hear from you.
            </p>

            <div className="medium">
              <div className="forms">
                <form action="./mail.php" method="post">
                  <div className="name">
                    <label htmlFor="fullName">Name</label>
                    <input type="text" name="name" id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="name">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />
                  </div>
                  <div className="name">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Enter your message" cols="200" rows="5" data-gramm="false" wt-ignore-input="true"></textarea>
                  </div>
                  <div className="actions">
                    <a href="mailto:nathabolarin@gmail.com">Send an email to me directly</a>
                    <button type="submit" name="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div className="socials">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <a href="mailto:nathabolarin@gmail.com" target="_blank">nathabolarin@gmail.com</a>
                </div>
                <div className="email">
                  <label htmlFor="address">Address</label>
                  <a href="#">
                    <p>Ikeja, Lagos</p>
                    <p>Nigeria.</p></a>
                </div>
                <div className="email" style={{ marginTop: 0 }}>
                  <label htmlFor="Social">Social</label>
                  <div className="links">
                    <a href="https://github.com/Naythankik" target="_blank"><img src="./images/gitHub32.svg" alt="" /></a>
                    <a href="#" target="_blank">
                      <img src="./images/twitter.svg" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/abolarin-nathaniel-34b428147" target="_blank"><img src="./images/linkedin.svg" alt=""/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default Contacts;