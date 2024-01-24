
import { MantineProvider, AppShell } from '@mantine/core';
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell
        header={{ height: "4rem" }}
        footer={{ height: "2rem" }}
        padding="1rem"
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          <Main />
        </AppShell.Main>

        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>


    </MantineProvider>
  )
}

export default App
