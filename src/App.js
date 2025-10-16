import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    speciality: "",
  });

  const [message, setMessage] = useState("");
  const API_BASE = "https://student-project-dq7w.onrender.com";


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(`${API_BASE}/add-student`, form);
      setMessage(res.data.message);
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        speciality: "",
      });
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("❌ Server error");
      }
    }
  };



  return (
    <div style={styles.container}>
      <h2>🎓 Add New Student</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={form.firstname}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={form.lastname}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
          value={form.phonenumber}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="speciality"
          placeholder="Speciality"
          value={form.speciality}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Add Student
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      <hr style={{ width: "100%", margin: "30px 0" }} />

      
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    maxWidth: "500px",
    margin: "60px auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  
  message: {
    color: "#333",
    marginTop: "15px",
  },
};

export default App;
