import React, { Component } from 'react';
import Heading from '../../components/Headings/Heading'
import "./registration.css";
function Registration() {
    return ( 
        <div className='pt-16'>
        <Heading heading="REGISTRATION"></Heading>
      
        <div className="outerDiv">
    <section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Roll No.</label>
            <input type="number" placeholder="Enter roll number" required />
          </div>
          <div className="input-box">
            <label>Admission Year</label>
            <input type="number" placeholder="Enter admission year" required />
          </div>
          <div className="input-box">
            <label>Academic Session</label>
            <input type="text" placeholder="Enter academic session" required />
          </div>
        </div>

        <div className="column">
            
        </div>

        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>

        <div className="gender-box">
          <h3>Degree</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">B.tech</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">B.Arch</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">M.Tech</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">MURP</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">M.Arch</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Ph.D</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Dual Degree</label>
            </div>
          </div>
        </div>

        <div className="gender-box">
          <h3>Parent Department for B.Tech/B.Arch degree</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Architecture</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">CSE</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Chemistry</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Civil</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Electrical</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">ECE</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Mathematics</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Mechanical</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Physics</label>
            </div>
          </div>
        </div>

        <div className="gender-box">
          <h3>Parent Department for M.Tech/M.Arch/MURP degree</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Architecture</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">CSE</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Chemistry</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Civil</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Electrical</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">ECE</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Mathematics</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Mechanical</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Physics</label>
            </div>
          </div>
        </div>

        <div className="input-box">
            <label>Area of Specialization for M.Tech/M.Arch/MURP Degree</label>
            <input type="text" placeholder="Enter academic session" required />
        </div>

        <div className="gender-box">
          <h3>Parent Department for Ph.D/Dual Degree</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Architecture</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">CSE</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Chemistry</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Civil</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Electrical</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">ECE</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Mathematics</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Mechanical</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">Physics</label>
            </div>
          </div>
        </div>

        <div className="input-box">
            <label>Area of Specialization for Ph.D./Dual Degree</label>
            <input type="text" placeholder="Enter academic session" required />
        </div>

        <div className="gender-box">
          <h3>Pwd</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Yes</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">No</label>
            </div>
          </div>
        </div>

        

        <div className="input-box address">
          {/* <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required /> */}
          <div className="column">
            <div className="select-box">
              <select>
                <option hidden>Category</option>
                <option>OC</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
              </select>
            </div>
            {/* <input type="text" placeholder="Enter your city" required /> */}
          </div>
          <div className="column">
            {/* <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required /> */}
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
    </div>
    </div>
     );
}

export default Registration;