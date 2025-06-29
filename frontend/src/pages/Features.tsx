const Features = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Features
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover all the powerful features that make Momentum the perfect research companion.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">AI Document Analysis</h3>
          <p className="text-muted-foreground">
            Advanced AI algorithms analyze research papers and extract key insights automatically.
          </p>
        </div>
        
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Smart Organization</h3>
          <p className="text-muted-foreground">
            Intelligent categorization and tagging system keeps your research organized.
          </p>
        </div>
        
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Citation Management</h3>
          <p className="text-muted-foreground">
            Automatic citation generation in multiple formats with perfect accuracy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features 