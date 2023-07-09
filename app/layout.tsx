import styles from "./styles/layout.module.css";
import { MainMenu } from "./components/MainMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "@/lib/providers";
import "./styles/globals.css";
import "./styles/custom.scss";
import { Footer } from "@/app/components/Footer";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <style type="text/css">
            {`
            .btn-flat {
            background-color: #BF895A;
            color: white;
            }

            .btn-flat:hover {
            border: 1px solid #BF895A;
            color: #BF895A;
            }

            .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            }
        `}
          </style>
          <section className={styles.container}>
            <header>
              <MainMenu />
            </header>

            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
