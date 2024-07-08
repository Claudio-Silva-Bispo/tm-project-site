

const callouts = [
    {
      name: 'Regular Cleaning',
      description: 'Customized to your familys needs, our regular cleaning service keeps your home consistently fresh and welcoming.',
      imageSrc: '/assets/Services/regular.png',
      imageAlt: 'Imagem de um serviço regular',
      href: '#',
    },
    {
      name: 'Deep Cleaning',
      description: 'Our comprehensive approach to deep cleaning goes beyond commonly touched surfaces and includes less frequently used areas and hard-to-reach spots.',
      imageSrc: '/assets/Services/Deep.png',
      imageAlt: 'Imagem dos serviços de limpesa profunda',
      href: '#',
    },
    {
      name: 'Move-In & Move-Out',
      description: 'Make your move easier with TM Cleaning. We provide thorough cleaning for homes, apartments, and condominiums during move-in and move-out transitions.',
      imageSrc: '/assets/Services/Mov.png',
      imageAlt: 'Imagem dos serviços de mudanças',
      href: '#',
    },
    {
      name: 'Commercial',
      description: 'Ideal for property owners and hosts. Put your cleaning needs on autopilot with TM Cleaning.',
      imageSrc: '/assets/Services/empresa.png',
      imageAlt: 'Imagem dos serviços comerciais',
      href: '#',
    },
    {
      name: 'Vacation Home',
      description: 'Recognizing cleaning as a top priority for travelers, we utilize a 4-step vacation rental cleaning checklist to ensure thorough cleaning, preparing your vacation rental for new guests.',
      imageSrc: '/assets/Services/vacation.png',
      href: '#',
    },
    {
      name: 'Event',
      description: 'Organizing an event is exhausting enough - let us take care of the cleaning. We ll ensure your space is spotless for your next party or event.',
      imageSrc: '/assets/Services/evento.png',
      href: '#',
    },
  ]
  
  export default function Services() {
    return (
      <div className="bg-gray-100 min-h-full" id="about-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 px-4">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Our Services</h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">Learn about some of the services we provide, and remember that we can customize each activity and the details according to your needs.</p>
  
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 mt-10">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 pb-2">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  