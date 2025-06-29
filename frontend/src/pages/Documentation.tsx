import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Book, Code, HelpCircle, Rocket, Settings, FileText, Zap, Users } from "lucide-react"
import { useState } from "react"

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("getting-started")

  const sidebarItems = [
    {
      title: "Getting Started",
      items: [
        { id: "getting-started", title: "Quick Start", icon: Rocket },
        { id: "installation", title: "Installation", icon: Settings },
        { id: "first-project", title: "First Project", icon: FileText },
      ]
    },
    {
      title: "Core Features", 
      items: [
        { id: "smart-analysis", title: "Smart Analysis", icon: Zap },
        { id: "document-upload", title: "Document Upload", icon: FileText },
        { id: "citations", title: "Citations", icon: Book },
      ]
    },
    {
      title: "API Reference",
      items: [
        { id: "authentication", title: "Authentication", icon: Settings },
        { id: "endpoints", title: "Endpoints", icon: Code },
        { id: "webhooks", title: "Webhooks", icon: Code },
      ]
    },
    {
      title: "Support",
      items: [
        { id: "faq", title: "FAQ", icon: HelpCircle },
        { id: "troubleshooting", title: "Troubleshooting", icon: Settings },
        { id: "community", title: "Community", icon: Users },
      ]
    }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "getting-started":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Quick Start</h1>
              <p className="text-muted-foreground mt-2">Get up and running with Momentum in minutes.</p>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">1. Create Your Account</h3>
                <p className="text-muted-foreground">Sign up for a free Momentum account to get started with AI-powered research.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">2. Upload Your First Document</h3>
                <p className="text-muted-foreground">Drag and drop your research papers, PDFs, or documents to begin analysis.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">3. Start Analyzing</h3>
                <p className="text-muted-foreground">Use our AI tools to extract insights, generate summaries, and organize your research.</p>
              </div>
            </div>
          </div>
        )
      
      case "installation":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
              <p className="text-muted-foreground mt-2">Set up Momentum on your system.</p>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Web Application</h3>
                <p className="text-muted-foreground mb-3">Access Momentum directly through your web browser - no installation required.</p>
                <div className="bg-muted p-3 rounded text-sm font-mono">
                  https://momentum.app
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">API Access</h3>
                <p className="text-muted-foreground mb-3">Install our API client for programmatic access.</p>
                <div className="bg-muted p-3 rounded text-sm font-mono">
                  npm install @momentum/api-client
                </div>
              </div>
            </div>
          </div>
        )
      
      case "smart-analysis":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Smart Analysis</h1>
              <p className="text-muted-foreground mt-2">Leverage AI to analyze and understand your research documents.</p>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Document Summarization</h3>
                <p className="text-muted-foreground">Generate concise summaries of research papers and documents automatically.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Key Insights Extraction</h3>
                <p className="text-muted-foreground">Identify important findings, methodologies, and conclusions from your documents.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Cross-Document Analysis</h3>
                <p className="text-muted-foreground">Find connections and patterns across multiple research documents.</p>
              </div>
            </div>
          </div>
        )
      
      case "authentication":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Authentication</h1>
              <p className="text-muted-foreground mt-2">Secure access to the Momentum API.</p>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">API Keys</h3>
                <p className="text-muted-foreground mb-3">Use API keys for server-to-server authentication.</p>
                <div className="bg-muted p-3 rounded text-sm font-mono">
                  Authorization: Bearer your-api-key
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">OAuth 2.0</h3>
                <p className="text-muted-foreground">For user-facing applications, use OAuth 2.0 for secure authentication.</p>
              </div>
            </div>
          </div>
        )
      
      case "faq":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h1>
              <p className="text-muted-foreground mt-2">Common questions and answers about Momentum.</p>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">How accurate is the AI analysis?</h3>
                <p className="text-muted-foreground">Our AI models are trained on extensive research datasets and achieve high accuracy rates. However, we always recommend human verification for critical insights.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">What file formats are supported?</h3>
                <p className="text-muted-foreground">Momentum supports PDF, DOCX, TXT, and many other common document formats.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Is my data secure?</h3>
                <p className="text-muted-foreground">Yes, we use enterprise-grade encryption and security measures to protect your research data.</p>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
              <p className="text-muted-foreground mt-2">Select a topic from the sidebar to get started.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="p-6">
            <h2 className="text-lg font-semibold">Documentation</h2>
          </SidebarHeader>
          
          <SidebarContent>
            {sidebarItems.map((section, index) => (
              <SidebarGroup key={index}>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          isActive={activeSection === item.id}
                          onClick={() => setActiveSection(item.id)}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="ml-auto">
              <p className="text-sm text-muted-foreground">
                Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">⌘</kbd> + <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">B</kbd> to toggle sidebar
              </p>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default Documentation 