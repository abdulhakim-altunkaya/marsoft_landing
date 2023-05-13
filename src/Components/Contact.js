import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">


            <div className="widget widget_tweets">
                <h4 className="widget-title">Pricing Policy</h4>
                <div id="pricing-policy">
                <span>
                  Our pricing is competitive and based on the specific requirements of your project. Here are some realistic price ranges for software development services in 2023:
                </span>
                <ul>
                  <li>
                    Custom Web Development:
                    <ul>
                      <li>Basic informational website: $3,000 to $10,000</li>
                      <li>E-commerce website: $5,000 to $20,000</li>
                      <li>Web application development: $10,000 to $50,000 (or more, depending on complexity)</li>
                      <li>Custom API integration: $2,000 to $10,000</li>
                      <li>Content management system (CMS) development: $5,000 to $30,000</li>
                      <li>Progressive Web App (PWA) development: $10,000 to $40,000</li>
                      <li>Responsive web design: $3,000 to $12,000</li>
                      <li>Website maintenance and updates: $500 to $2,000 per month</li>
                      <li>Website performance optimization: $1,000 to $5,000</li>
                      <li>Website security enhancements: $1,000 to $5,000</li>
                    </ul>
                  </li>
                  <li>
                    Mobile Application Development:
                    <ul>
                      <li>Simple mobile app (single platform): $10,000 to $30,000</li>
                      <li>Complex mobile app (multiple platforms): $30,000 to $100,000 (or more, depending on complexity and platforms)</li>
                      <li>Mobile app backend development (APIs, databases): $5,000 to $20,000</li>
                      <li>App store deployment and management: $1,000 to $5,000</li>
                      <li>Mobile app UI/UX design: $3,000 to $15,000</li>
                      <li>Mobile app testing and quality assurance: $2,000 to $10,000</li>
                      <li>Mobile app maintenance and updates: $1,000 to $5,000 per month</li>
                      <li>Mobile app performance optimization: $2,000 to $10,000</li>
                    </ul>
                  </li>
                  <li>
                    Blockchain Development:
                    <ul>
                      <li>Smart contract development: $5,000 to $20,000</li>
                      <li>Decentralized application (DApp) development: $10,000 to $50,000 (or more, depending on complexity and integration requirements)</li>
                      <li>Blockchain consulting and implementation: $3,000 to $15,000</li>
                      <li>Token creation and ICO development: $10,000 to $50,000</li>
                      <li>Blockchain security audit: $5,000 to $20,000</li>
                      <li>Blockchain wallet development: $5,000 to $20,000</li>
                      <li>Blockchain integration with existing systems: $5,000 to $30,000</li>
                      <li>Blockchain supply chain solution: $10,000 to $50,000</li>
                    </ul>
                  </li>
                </ul>
                <span>
                  Please note that these price ranges are estimates and can vary based on the specific project requirements.
                </span> <br />
                <span>
                  In addition to our development services, we also offer comprehensive after-sale support. Our team is dedicated to providing reliable assistance and maintenance after the project is delivered.
                </span> <br />
                <span>
                  Contact us today to discuss your project requirements and get a customized pricing quote that aligns with your budget, goals, and ongoing support needs.
                </span>
              </div>
              </div>


            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip} <br />
                  E-mail: info@marsoftyazilim.com
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
