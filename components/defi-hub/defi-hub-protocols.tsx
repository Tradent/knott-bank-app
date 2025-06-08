export function DefiHubProtocols() {
  return (
    <section id="defi-protocols" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">Featured DeFi Protocols</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Explore our selection of vetted decentralized finance protocols
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {protocols.map((protocol) => (
            <div key={protocol.name} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${protocol.image}')` }}></div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-\
