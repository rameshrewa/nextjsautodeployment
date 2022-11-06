import React from "react";
import Image from 'next/image'

import { Accordion } from "react-bootstrap";

import faqList from "../../public/assets/data/faq";

import aboutbg from "../../public/assets/images/about-bg.svg";

import faq from "../../public/assets/images/faq/faq.png";

import faqone from "../../public/assets/images/faq/faqmazagine.png";

export default function Details() {
 
  return (
    <div className="col-md-12">
      <section className="section">
      <div>
          <div className="abtimg">
            <Image src={aboutbg} alt="First slide" className="lazyload" />
            <p className="text">FAQs</p>
          </div>
        </div>
        <div className="faq-section inner-pages pb-0">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                {/* <div>
                  <div className="col-md-12">
                    <div>
                      <h3 className="align-center header-tag">
                        Hey there, how can we help?
                      </h3>
                      <div className="align-center">
                        <input type="text" className="faq-input" />
                        &nbsp;&nbsp;&nbsp;
                        <Button
                          type="submit"
                          value="Submit"
                          className="faq-btn"
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </div> */}
                <section className="section">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div>
                          <h3 className="header-tag header-padding">
                            Frequently asked questions
                          </h3>
                        </div>

                        <div className="col-md-8">
                          <Accordion>
                            {faqList.map((item) => {
                              return (
                                <Accordion.Item
                                  eventKey={item.id}
                                  key={item.id}
                                >
                                  <Accordion.Header className="accordion-header">
                                    {item.heading}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    {/* <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.body,
                                      }}
                                    /> */}
                                    <div>{item.body}</div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              );
                            })}
                          </Accordion>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <a
                              href="https://heartfulness.org/in/heartsapp/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Image src={faq} alt="faq" className="lazyload" />
                            </a>
                          </div>
                          <div style={{ width: "76%", marginLeft: "44px" }}>
                            <a
                              href="https://www.heartfulnessmagazine.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Image
                                src={faqone}
                                alt="Heartfulness maagzine"
                                className="lazyload"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
