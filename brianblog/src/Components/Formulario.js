import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "./lib/firebase";

const Formulario = () => {
  const [postData, setPostData] = useState({});

  const changeHandler = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    setPostData({ ...postData, [property]: value });
  };

  useEffect(() => {
    const ObtenerDatos = async () => {
      const consulta = await getDocs(collection(db, "Posts"));
      consulta.forEach((documentos) => {
        console.log(documentos.data());
      });
    };
    ObtenerDatos();
  }, []);

  const SaveData = () => {
    const guardar = async () => {
      try {
        const postRef = await addDoc(collection(db, "Posts"), postData);
        console.log("La publicacion se guardo con el ID: " + postRef.id);
      } catch (error) {
        console.log(`Ha ocurrido el siguiente error: ${error}`);
      }
    };
    guardar();
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="post-title">Titulo</Label>
          <Input
            id="post-title"
            name="post-title"
            placeholder="Titulo para el Post"
            type="text"
            onChange={changeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Descripcion del Post</Label>
          <Input
            id="description"
            name="description"
            placeholder="Describe tu Post..."
            type="textarea"
            onChange={changeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Foto para el Post</Label>
          <Input
            id="image"
            name="image"
            placeholder="Inserta una Url para tu imagen"
            type="text"
            onChange={changeHandler}
          />
        </FormGroup>

        <Button className="btn btn-success" onClick={SaveData}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
