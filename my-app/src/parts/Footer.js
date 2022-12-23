import Button from 'elements/Button'
import React from 'react'
import IconText from './IconText'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-auto" style={{ width: 350 }}>
                            <IconText />
                            <p className="brand-tagline">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In vel facere suscipit tenetur voluptatem. Sunt voluptatem suscipit nihil,
                            </p>
                        </div>
                        <div className="col-auto mr-5">
                            <h6 className="mt-2">For Beginners</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button type="link" href="/register">New Account</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/properties">Start Booking a Room</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/use-payments">Use Payments</Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 mr-5">
                            <h6 className="mt-2">Explore Us</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button type="link" href="/careers">Our Careers</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/privacy">Privacy</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/terms">Terms & Conditions</Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h6 className="mt-2">Connect Us</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                                </li>
                                <li className="list-group-item">
                                    <Button isExternal type="link" href="tel:+6283102032847">+6283102032847</Button>
                                </li>
                                <li className="list-group-item">
                                    <span>Staycation, Kemang, Jakarta</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5 mb-4">
                        <div className="col text-center copyrights">
                            Copyright &copy; 2022 - All rights reserverd - Staycation
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
