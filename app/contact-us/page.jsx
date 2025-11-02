import Image from 'next/image'
import '@/styles/pages/contact-us.css'
import { assets } from '@/Aseets/Assets'
import BlueBtn from '@/components/MadisButtons/BlueBtn'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-wrap">
              <Image
                src={assets.contactImg}
                alt="Contact us"
                className='contact-img'
              />
            </div>
          </div>

          <div className="col-lg-6 p-4 p-md-5">
            <h2 className="h3 mb-3">Get in touch</h2>
            <p className="text-muted mb-4">
              Have questions or want a quote? Drop us a message and we'll reply within 24 hours.
            </p>

            <form className="contact-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input name="name" className="form-control" placeholder="Your name" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input name="email" type="email" className="form-control" placeholder="you@example.com" />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Subject</label>
                  <input name="subject" className="form-control" placeholder="Subject (optional)" />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center">
                  <div>
                    <BlueBtn button_link="#" button_title="Send Message" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
