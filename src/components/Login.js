import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  // const [data, setData] = useState([]);
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

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
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
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details");
        }
      }
    }
  };

  return (
    <div class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-left">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 ">Sign In</h2>
                  <Form>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                      <Form.Control
                        type="email"
                        name="email"
                        class="form-control form-control-lg"
                        onChange={getdata}
                        placeholder="Enter email"
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={getdata}
                        placeholder="Password"
                        class="form-control form-control-lg"
                      />
                    </div>
                    <div class="text-center py-5">
                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        onClick={addData}
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>

                  <div>
                    <p class="text-white-50 fw-bold">
                      <a href="/home">Don't have an account? Sign-Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
