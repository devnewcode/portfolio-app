export default function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
