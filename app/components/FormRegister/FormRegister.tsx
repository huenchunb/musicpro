import { User, useCreateUserMutation } from "@/lib/redux/apiSlice/apiSlice";
import { useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { setTimeout } from "timers";

export const FormRegister = () => {
  const form = useForm();

  const { register, handleSubmit } = form;
  const [emailRegistered, setEmailRegistered] = useState<string | undefined>(undefined);

  const [createUser] = useCreateUserMutation();

  const onSubmit = (data: any) => {
    console.log(data);
    debugger;

    const newUser: User = {
      name: data.name,
      email: data.email,
      password: data.password,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        postal_code: data.postal_code,
        country: data.country,
      },
    };

    createUser(newUser)
      .then((response: any) => {
        console.log(response);
        setEmailRegistered("Usuario registrado éxitosamente");
        setTimeout(() => {
          setEmailRegistered(undefined);
        }, 2000);
      })
      .catch((error: any) => {
        if (error.error.status === 400) {
          setEmailRegistered(error.error.data.message);
          setTimeout(() => {
            setEmailRegistered(undefined);
          }, 2000);
        }
      });
  };

  return (
    <Container className="my-3">
      <Row className="justify-content-lg-center">
        <Col lg={8}>
          <Card>
            <Card.Header as="h5">Registrar un nuevo usuario</Card.Header>
            <Card.Body>
              {emailRegistered && (
                <Alert
                  variant={`${emailRegistered === "Usuario registrado éxitosamente" ? "success" : "danger"} `}
                >
                  {emailRegistered}
                </Alert>
              )}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="small">Nombre</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    {...register("name", { required: "Nombre es requerido", maxLength: 50, minLength: 11 })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="small">Correo electrónico</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Ingresa un correo electrónico"
                    {...register("email", { required: true, maxLength: 64, minLength: 11 })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small">Contraseña</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Ingresa una contraseña"
                    {...register("password", { required: true, maxLength: 50, minLength: 4 })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small">Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Ingresa tu dirección"
                    {...register("street", { required: true, maxLength: 50, minLength: 4 })}
                  />
                  <Form.Text className="text-dark small">
                    Esta dirección será utilizada para el envió de tus pedidos.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small">Ciudad</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ingresa la ciudad de tu dirección"
                    {...register("city", { required: true, maxLength: 50, minLength: 4 })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small">Región</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ingresa la región de tu ciudad"
                    {...register("state", { required: true })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small">Código postal</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Código postal"
                    {...register("postal_code", { required: true })}
                  />
                  <Form.Text className="text-muted small">
                    Ingresa el código postal de tu dirección. Puedes consultarlo en el siguiente enlace.{" "}
                    <a href="https://tecnopro.cl/pages/listado-de-codigos-postales-chile" about="_blank">
                      Consultar código postal
                    </a>
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small">País</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Ingresa el país de la dirección"
                    {...register("country", { required: true })}
                  />
                </Form.Group>

                <Container>
                  <Row>
                    <Button variant="flat" type="submit">
                      Registrarse
                    </Button>
                  </Row>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
