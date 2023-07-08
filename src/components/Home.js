import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div class="vh-100 gradient-custom">
      <div class="container py-4 h-50">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-left">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h3 class="fw-bold mb-2 ">Sign Up</h3>
                  <Form>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Name
                      </label>
                      <Form.Control
                        type="text"
                        name="name"
                        onChange={getdata}
                        placeholder="Enter Your Name"
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={getdata}
                        placeholder="Enter email"
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Date
                      </label>
                      <Form.Control
                        onChange={getdata}
                        name="date"
                        type="date"
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Password
                      </label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={getdata}
                        placeholder="Password"
                      />
                    </div>
                    <div class="text-center py-5">
                      <button
                        class="btn btn-outline-light btn-lg px-5 "
                        onClick={addData}
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </Form>
                  <p className="mt-3">
                    Already Have an Account{" "}
                    <span>
                      <NavLink to="/login">SignIn</NavLink>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
