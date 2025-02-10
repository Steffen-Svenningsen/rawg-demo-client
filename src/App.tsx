import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"

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
        <GridItem pl='2' area={'header'}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl='2' area={'aside'}>
            Aside
          </GridItem>
        </Show>
        <GridItem pl='2' area={'main'}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
