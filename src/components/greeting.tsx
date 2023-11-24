import { Button } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

interface GreetingProps {
    name: string
    description: string
    colorMode?: "light" | "dark" | undefined
    buttonVariant?: "contained" | "text" | "outlined" | undefined
  }
  
  export const Greeting = ({ name, description, colorMode = "light", buttonVariant = "text" }: GreetingProps) => {
    const themeMode = createTheme({
      palette: {
        mode: colorMode,
      },
    })
  
    return (
      <ThemeProvider theme={themeMode}>
        <main>
          <h1>Hello, {name}</h1>
          <p>{description}</p>
          <Button variant={buttonVariant}>This is the button</Button>
        </main>
      </ThemeProvider>
    )
  }