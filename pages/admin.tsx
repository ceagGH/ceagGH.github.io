import { useState } from "react";
import { colors } from "@mui/material";
 import Layout from "../components/Layout";
 import { NextPage } from "next"
 import { alignProperty } from "@mui/material/styles/cssUtils";

const Admin: NextPage = () => {
  var [id, setId] = useState("");
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [year, setYear] = useState("");
  var [course, setCourse] = useState("");
  var [secCode, setSecCode] = useState("");
  //var [image, setImage] = useState<File>()
  var [file, setFile] = useState<File>();

  const addNewMember = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("No image!");
      return;
    }
    if (secCode !== "pass123"/*process.env.NEXT_PUBLIC_KEY*/) {
      alert("Invalid Security Code!" );
      return;
    }
    try {
      const data = new FormData();
      data.set("file", file);
      data.append("filename", name.replace(" ", ""));
      data.append(
        "info",
        JSON.stringify({
          ID: id,
          NAME: name,
          EMAIL: email,
          YEAR: year,
          COURSE: course,
        }).toString()
      );

      const res = await fetch("/api/route", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert("New member added!")
        setId("")
        setName("")
        setEmail("")
        setYear("")
        setCourse("")
        setFile(undefined)
        setSecCode("")
      }
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };
  /**@deprecated */
  const fetchData = async () => {
    const response = await fetch("/api/addJSON");
    const [data] = await response.json();
    alert(data.NAME);
  };
  /**@deprecated */
  const saveData = async () => {
    const response = await fetch("/api/addJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ID: id, NAME: name, EMAIL: email, YEAR: year, COURSE: course }),
    });
    const data = await response.json();
  };

  return (
    <Layout title="Admin">
      <h1 className="text-4xl font-bold py-4 text-center">Admin Page</h1>
      <div className="place-items-center">
        <form onSubmit={addNewMember}>
          <div>
            <label>ID:</label>
            <input
              type={"text"}
              value={id}
              onChange={(e) => setId(e.currentTarget.value)}
              required
            ></input>
          </div>
          <div>
            <label>Name:</label>
            <input
              type={"text"}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type={"text"}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            ></input>
          </div>

          <div>
            <label>Year:</label>
            <input
              type={"text"}
              value={year}
              onChange={(e) => setYear(e.currentTarget.value)}
              required
            ></input>
          </div>
          <div>
            <label>Course:</label>
            <input
              type={"text"}
              value={course}
              onChange={(e) => setCourse(e.currentTarget.value)}
              required
            ></input>
          </div>
          <div>
            <label>Image:</label>
            <input
              type={"file"}
              onChange={(e) => setFile(e.target.files?.[0])}
              accept=".jpg,.png"
              required
            ></input>
          </div>
          <div>
            <label>Security Code:</label>
            <input
              type={"text"}
              value={secCode}
              onChange={(e) => setSecCode(e.currentTarget.value)}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Admin;