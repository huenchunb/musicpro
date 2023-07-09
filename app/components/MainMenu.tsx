"use client";

import { selectUser } from "@/lib/redux/slices/sessionSlice/selector";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

export const MainMenu = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">MUSICPRO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Link href="/" className="mx-lg-1 btn btn-outline-dark rounded-0">
                Inicio
              </Link>
              <Link href="/shoppingcart" className="mx-lg-1 btn btn-outline-dark rounded-0">
                Carrito de compras
              </Link>
              <Link href="/login" className="mx-lg-1 btn btn-outline-dark rounded-0">
                Iniciar sesión
              </Link>
              <Link href="/register" className="mx-lg-1 btn btn-outline-dark rounded-0">
                Registrarse
              </Link>
            </Nav>
            {user && <Navbar.Text>{user.name}</Navbar.Text>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
