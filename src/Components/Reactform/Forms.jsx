import React from "react";
import "./Forms.css";
import { useForm, useFieldArray } from 'react-hook-form'

import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: [{ name: "" }]
    },
  });

  const onsubmit = (data) => {
    console.log(data);
    alert("You have been signed up succesfully")
  }
  return (
    <div className="form-container">
      <div className="wrapper">
        <div className="form-heading">
          <h2>List of all your Qualification</h2>
          <p>
            Lorem ipsum dolor, rem facilis voluptatibus ipsa officia vitae!
            Earum facere repellat!
          </p>
        </div>

        <form action="">
          <div className="education">
            <div className="edu-header">
              <h4>Education</h4>
              <i class="bi bi-plus-circle-dotted"></i>
            </div>
            <div className="edu-inputFields">
              <div className="edu-input">
                <label htmlFor="">Name of institution</label>
                <input type="text" id="institute"/>
              </div>
              <div className="edu-year">
                <label htmlFor="">Year</label>
                <input type="text" id="Year"/>
              </div>
            </div>
          </div>

          <div className="Experience">
            <div className="exp-header">
              <h4>Experience</h4>
            </div>
            <div className="company">
              <div className="com-l">
                <label htmlFor="Company">Company</label>
                <input type="text" />
              </div>
              <div className="com-l">
                <label htmlFor="">Role</label>
                <input type="text" />
              </div>
            </div>
            <div className="role">
              <label htmlFor="">Role Description</label>
              <textarea name="" id=""></textarea>
            </div>
            <div className="dates">
              <div className="from">
                <label htmlFor="">Month</label>
                <input type="text" />
              </div>
              <div className="start-year">
                <label htmlFor="">Year</label>
                <input type="text" />
              </div>
              <p>To</p>
              <div className="from">
                <label htmlFor="">Month</label>
                <input type="text" />
              </div>
              <div className="start-year">
                <label htmlFor="">Year</label>
                <input type="text" />
              </div>

            </div>
            <div className="last-input">
                   <input type="checkbox" name="currentlyWorking" id="" />
                   <label htmlFor="">I currently work here</label>
             </div>
            
                      
          </div>
          <button className="btn1">Save</button>
          <button className="btn2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
