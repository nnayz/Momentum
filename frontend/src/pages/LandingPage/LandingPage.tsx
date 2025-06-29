import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, ArrowRight, BookOpen, Brain, FileText } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Link } from "react-router-dom"
import { components } from "./components"

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="font-bold text-2xl hover:opacity-80 transition-opacity">
            Momentum
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Welcome to Momentum
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Transform your research workflow with AI-powered insights.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/docs" title="Introduction">
                      Quick start guide and basic concepts
                    </ListItem>
                    <ListItem to="/docs" title="Installation">
                      Step-by-step installation instructions
                    </ListItem>
                    <ListItem to="/docs" title="Tutorials">
                      Learn through hands-on examples
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        to={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link to="/docs">
                    Documentation
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 xl:py-40 overflow-hidden">
          {/* Complex Tech Pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main circuit-like paths - increased density */}
              <path
                d="M50 180 L250 180 L250 130 L450 130 L450 230 L650 230 L650 180 L850 180 L850 150 L1050 150"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/8 animate-pulse"
                fill="none"
              />
              <path
                d="M80 220 L280 220 L280 170 L480 170 L480 270 L680 270 L680 220 L880 220 L880 190 L1080 190"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-200"
                fill="none"
              />
              <path
                d="M120 380 L320 380 L320 330 L520 330 L520 430 L720 430 L720 380 L920 380 L920 350 L1120 350"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/8 animate-pulse delay-500"
                fill="none"
              />
              <path
                d="M70 420 L270 420 L270 370 L470 370 L470 470 L670 470 L670 420 L870 420 L870 390 L1070 390"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-700"
                fill="none"
              />
              <path
                d="M100 580 L300 580 L300 530 L500 530 L500 630 L700 630 L700 580 L900 580 L900 550 L1100 550"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/8 animate-pulse delay-1000"
                fill="none"
              />
              <path
                d="M40 620 L240 620 L240 570 L440 570 L440 670 L640 670 L640 620 L840 620 L840 590 L1040 590"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-1200"
                fill="none"
              />
              
              {/* Additional middle layer paths */}
              <path
                d="M150 300 L350 300 L350 250 L550 250 L550 350 L750 350 L750 300 L950 300 L950 270 L1150 270"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/7 animate-pulse delay-300"
                fill="none"
              />
              <path
                d="M90 340 L290 340 L290 290 L490 290 L490 390 L690 390 L690 340 L890 340 L890 310 L1090 310"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/5 animate-pulse delay-600"
                fill="none"
              />
              <path
                d="M60 500 L260 500 L260 450 L460 450 L460 550 L660 550 L660 500 L860 500 L860 470 L1060 470"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/7 animate-pulse delay-900"
                fill="none"
              />
              <path
                d="M110 540 L310 540 L310 490 L510 490 L510 590 L710 590 L710 540 L910 540 L910 510 L1110 510"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/5 animate-pulse delay-1100"
                fill="none"
              />
              
              {/* Upper additional layers */}
              <path
                d="M30 80 L230 80 L230 30 L430 30 L430 130 L630 130 L630 80 L830 80 L830 50 L1030 50"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/7 animate-pulse delay-100"
                fill="none"
              />
              <path
                d="M70 120 L270 120 L270 70 L470 70 L470 170 L670 170 L670 120 L870 120 L870 90 L1070 90"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/5 animate-pulse delay-400"
                fill="none"
              />
              
              {/* Circuit nodes - adjusted positions */}
              <circle cx="250" cy="180" r="3" className="fill-primary/12 animate-pulse" />
              <circle cx="450" cy="130" r="3" className="fill-primary/12 animate-pulse delay-200" />
              <circle cx="650" cy="230" r="3" className="fill-primary/12 animate-pulse delay-400" />
              <circle cx="320" cy="380" r="3" className="fill-primary/12 animate-pulse delay-600" />
              <circle cx="520" cy="330" r="3" className="fill-primary/12 animate-pulse delay-800" />
              <circle cx="720" cy="430" r="3" className="fill-primary/12 animate-pulse delay-1000" />
              <circle cx="500" cy="530" r="3" className="fill-primary/12 animate-pulse delay-1200" />
              <circle cx="350" cy="300" r="3" className="fill-primary/12 animate-pulse delay-300" />
              <circle cx="550" cy="250" r="3" className="fill-primary/12 animate-pulse delay-500" />
              <circle cx="750" cy="350" r="3" className="fill-primary/12 animate-pulse delay-700" />
              <circle cx="460" cy="450" r="3" className="fill-primary/12 animate-pulse delay-900" />
              <circle cx="660" cy="550" r="3" className="fill-primary/12 animate-pulse delay-1100" />
              
              {/* Tech component rectangles - more distributed */}
              <rect x="430" y="110" width="40" height="40" rx="4" className="fill-primary/4 stroke-primary/8 animate-pulse delay-400" strokeWidth="1" />
              <rect x="500" y="310" width="40" height="40" rx="4" className="fill-primary/4 stroke-primary/8 animate-pulse delay-900" strokeWidth="1" />
              <rect x="480" y="510" width="40" height="40" rx="4" className="fill-primary/4 stroke-primary/8 animate-pulse delay-1400" strokeWidth="1" />
              <rect x="330" y="280" width="40" height="40" rx="4" className="fill-primary/4 stroke-primary/8 animate-pulse delay-600" strokeWidth="1" />
              <rect x="640" y="210" width="40" height="40" rx="4" className="fill-primary/4 stroke-primary/8 animate-pulse delay-800" strokeWidth="1" />
              <rect x="440" y="430" width="40" height="40" rx="4" className="fill-primary/4 stroke-primary/8 animate-pulse delay-1100" strokeWidth="1" />
              
              {/* More diagonal connectors */}
              <path
                d="M650 180 L700 130 L750 130"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-600"
                fill="none"
              />
              <path
                d="M720 380 L770 330 L820 330"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-800"
                fill="none"
              />
              <path
                d="M300 580 L350 530 L400 530"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-1100"
                fill="none"
              />
              <path
                d="M480 170 L530 120 L580 120"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/6 animate-pulse delay-500"
                fill="none"
              />
              
              {/* Data flow indicators - more of them */}
              <path
                d="M850 180 L870 170 L870 190 Z"
                className="fill-primary/10 animate-pulse delay-700"
              />
              <path
                d="M920 380 L940 370 L940 390 Z"
                className="fill-primary/10 animate-pulse delay-1200"
              />
              <path
                d="M900 580 L920 570 L920 590 Z"
                className="fill-primary/10 animate-pulse delay-1700"
              />
              <path
                d="M750 350 L770 340 L770 360 Z"
                className="fill-primary/10 animate-pulse delay-900"
              />
              <path
                d="M1050 150 L1070 140 L1070 160 Z"
                className="fill-primary/10 animate-pulse delay-400"
              />
              <path
                d="M950 300 L970 290 L970 310 Z"
                className="fill-primary/10 animate-pulse delay-800"
              />
            </svg>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-start space-y-8 text-left max-w-4xl">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Meet <span className="text-primary">Momentum</span>
                  <br />
                  AI-Powered Research Made Simple
                </h1>
                <p className="max-w-[700px] text-muted-foreground text-lg sm:text-xl">
                  Accelerate your research with Momentum's intelligent document analysis. Understand complex papers instantly, 
                  organize findings seamlessly, and create well-cited documents with unprecedented speed.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Researching Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Watch Demo
                </Button>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16">
                <div className="flex flex-col items-start space-y-4 p-6 rounded-lg border bg-card text-card-foreground backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Smart Analysis</h3>
                  <p className="text-muted-foreground">
                    AI breaks down complex research papers into digestible insights, highlighting key findings and methodologies.
                  </p>
                </div>
                
                <div className="flex flex-col items-start space-y-4 p-6 rounded-lg border bg-card text-card-foreground backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Organize Everything</h3>
                  <p className="text-muted-foreground">
                    Keep your research organized with intelligent tagging, categorization, and cross-reference capabilities.
                  </p>
                </div>
                
                <div className="flex flex-col items-start space-y-4 p-6 rounded-lg border bg-card text-card-foreground backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Perfect Citations</h3>
                  <p className="text-muted-foreground">
                    Generate properly formatted citations and bibliographies automatically, ensuring academic integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage