import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"header header"
                  "main main"`,
          lg: `"header header"
                "aside main"`
        }}

      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl='2' bg='pink.300' area={'aside'}>
            Aside
          </GridItem>
        </Show>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
