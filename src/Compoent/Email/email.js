import React from 'react';
import "./email.scss";

function EmailInput() {
  return (
    <div className="Email">
      <p className="Email__name">Newlatters</p>
      <h3 className="Email__Title">Stories and interviews</h3>
      <p className="Email__Pararap">
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
      </p>
      <div>
        <input className="Email__Input" type="text" placeholder="Enter your email" />
        <button className="Email__Button">Subscribe</button>
      </div>
      <p className="Email__contract">
        We care about your data in our <a href="">privacy policy</a>
      </p>
    </div>
  );
}

export default EmailInput;