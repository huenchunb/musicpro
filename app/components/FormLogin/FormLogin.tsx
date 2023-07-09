import { sessionSlice } from "@/lib/redux/slices/sessionSlice/userSlice";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const FormLogin = () => {
  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit } = form;

  const onSubmit = (data: any) => {
    dispatch(
      sessionSlice.actions.loadUser({
        name: "Juan Huenchun",
        email: "jhuenchunbarra@gmail.com",
        password: "null",
        address: {
          street: "Calle 123",
          city: "Santiago",
          state: "Región Metropolitana",
          postal_code: "7750000",
          country: "Chile",
        },
        created_at: "",
        update_at: "",
      })
    );
  };

  return (
    <Container className="mt-3 vh-100">
      <Row className="justify-content-lg-center">
        <Col lg={8}>
          <Card>
            <Card.Header as="h5">Iniciar sesión</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa un correo electrónico"
                    {...register("email", { required: true, maxLength: 50, minLength: 4 })}
                  />
                  <Form.Text className="text-muted">Ingresa un correo electrónico válido</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 50, minLength: 4 })}
                  />
                </Form.Group>
                <Container>
                  <Row>
                    <Button variant="flat" type="submit">
                      Iniciar sesión
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
