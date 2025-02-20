import Link from 'next/link'
import Image from 'next/image'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="text-gray-500 hover:underline block mb-8">
          &larr; Back to Portfolio
        </Link>

        <div className="space-y-12">
          {/* Header */}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">Pradyut Nair</h1>
            <p className="text-xl text-gray-500">Data Scientist & AI Engineer</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:pradyutnair.work@gmail.com" className="text-red-500 hover:underline">pradyutnair.work@gmail.com</a>
              <a href="https://github.com/pradyutnair" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/pradyut-nair" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">LinkedIn</a>
              {/* Refer to the projects page.tsx for Projects */}
              <a href="/" className="text-red-500 hover:underline">Projects</a>
            </div>
          </header>

          {/* Education */}
          <section>
  <h2 className="text-2xl font-bold mb-4">Education</h2>
  <hr className="border-gray-500 mb-4" />
  <div className="space-y-6">
    {/* MSc Entry */}
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
        <div>
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <div>
              <h3 className="text-xl font-semibold">MSc in Artificial Intelligence</h3>
              <p className="text-gray-500">University of Amsterdam</p>
            </div>
            <Image
              src="/cv/uva-logo.jpg"
              alt="University of Amsterdam Logo"
              width={50}
              height={50}
              className="hidden sm:block object-contain ml-4"
            />
          </div>
        </div>
        <span className="text-gray-500 text-sm sm:text-base">2024 September - Present</span>
      </div>
    </div>

    {/* BSc Entry */}
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
        <div>
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <div>
              <h3 className="text-xl font-semibold">BSc in Data Science</h3>
              <p className="text-gray-500">Eindhoven University of Technology</p>
            </div>
            <Image
              src="/cv/tue-logo.png"
              alt="TU Eindhoven Logo"
              width={80}
              height={80}
              className="hidden sm:block object-contain"
            />
          </div>
        </div>
        <span className="text-gray-500 text-sm sm:text-base">2020 September - 2024 March</span>
      </div>
    </div>
  </div>

  <p className="text-sm text-gray-300 mt-2">
    <a
      href="https://research.tue.nl/en/studentTheses/a-generalization-perspective-on-model-based-offline-reinforcement"
      className="underline"
    >
      Bachelor Thesis
    </a>
  </p>
</section>




          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <hr className="border-gray-500 mb-4" />
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                      <div>
                        <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                        <p className="text-red-500">TomTom</p>
                      </div>
                      <Image
                    src="/cv/tomtom-logo.png"
                    alt="TomTom Logo"
                    width={70}
                    height={70}
                    className="object-contain sm:mb-4"
                  />
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm sm:text-base">2024 August - Present</span>
                  
                </div>
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-1">
                <li>Responsible for metric standardisation, analytics, and reporting for TomTom’s Horizon team.</li>
                <li>Enhanced product health tracking by standardizing metrics across 5+ workflows.</li>
                <li>Strengthened existing metrics for improved reliability and developed new metrics to track Horizon
                Engine result availability and connection failure rates.</li>
                <li>Built 5 real-time dashboards for product, engineering, and senior managers, providing an overview of
                the Horizon team’s performance and key metrics.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                      <div>
                        <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                        <p className="text-red-500">Tesla</p>
                      </div>
                      <Image
                    src="/cv/tesla-logo.png"
                    alt="Tesla Logo"
                    width={35}
                    height={35}
                    className="object-contain sm:mb-4 sm:ml-4"
                  />
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm sm:text-base">2023 February - 2024 March</span>
                  
                </div>
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
                <li> Part of the Tesla Residential Energy team at Amsterdam, responsible for data analytics and reporting. </li>
                <li> Built automated SQL pipelines, cutting manual reporting by 85% and generating insights for 20+ product/customer reports. </li>
                <li> Created discrepancy reports, increasing sales team efficiency by 12 hours weekly and improving order tracking accuracy by 35%. </li>
                <li> Developed Python and PowerBI dashboards for installation issues and fleet metrics, enhancing product performance tracking across 3 regions. </li>
                <li> Created automated scripts to identify and correct 20,000+ customer records, ensuring near 100% accuracy in active user onboarding for product launches. </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <hr className="border-gray-500 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Programming</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Python</li>
                  <li>R</li>
                  <li>TypeScript</li>
                  <li>SQL</li>
                  {/* Add more */}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>React</li>
                  <li>Next.js</li>
                  {/* Add more */}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Tools</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Spark</li>
                  <li>Azure</li>
                  {/* Add more */}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>English (Fluent)</li>
                  <li>German (Conversational)</li>
                  <li>Dutch (Basic)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Courses */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Courses</h2>
            <hr className="border-gray-500 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">University of Amsterdam</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Natural Language Processing</li>
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                  <li>Machine Learning</li>
                  <li>Reinforcement Learning</li>
                  <li>Information Retrieval</li>
                  {/* Add more */}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Eindhoven University of Technology</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Advanced Mathematics </li>
                  <li>Business Analytics</li>
                  <li>Linear Algebra</li>
                  <li>Statistical Computing</li>
                  <li>Combinatorial Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Online Courses</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>TensorFlow Developer</li>
                  <li>Intermediate SQL</li>
                  <li>Financial Trading in Python</li>
                {/* Add more */}
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          {/* <section>
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">NexPass</h3>
                <p className="text-gray-300">AI-powered finance management app built with Next.js, OpenAI, and Appwrite</p>
                <a href="https://www.nexpass.pro" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">View Project &rarr;</a>
              </div> */}
              {/* Add more projects */}
            {/* </div>
          </div></section> */} 
        </div>
      </div>
    </div>
  )
}
