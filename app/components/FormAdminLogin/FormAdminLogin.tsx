import { selectUser } from "@/lib/redux/slices/sessionSlice/selector";
import { sessionSlice } from "@/lib/redux/slices/sessionSlice/userSlice";
import Link from "next/link";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const FormAdminLogin = () => {
  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit } = form;
  const user = useSelector(selectUser);

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
            <Card.Header as="h5">Entrar al sitio de administración</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu rut" {...register("rut")} />
                  <Form.Text className="text-muted">Ingresa tu rut</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    {...register("password", { required: true, maxLength: 50, minLength: 4 })}
                  />
                </Form.Group>

                {user && (
                  <Alert variant="success">
                    Haz inciado sesión correctamente. Quieres comprar?<Link href="/">Ir a la tienda</Link>
                  </Alert>
                )}

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
