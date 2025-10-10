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
            <p className="text-xl text-gray-500">MSc AI Student & Data Analyst</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:pradyutnair.work@gmail.com" className="text-red-500 hover:underline">pradyutnair.work@gmail.com</a>
              {/* <a href="tel:+491638842928" className="text-red-500 hover:underline">+49 163 8842928</a> */}
              <a href="https://github.com/pradyutnair" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/pradyut-nair" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">LinkedIn</a>
              <a href="https://www.pradyutnair.site/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Website</a>
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

  <div className="mt-4 space-y-2">
    
    <p className="text-sm text-gray-300">
      <a
        href="https://research.tue.nl/en/studentTheses/a-generalization-perspective-on-model-based-offline-reinforcement"
        className="underline text-red-500 hover:text-red-400"
      >
        Bachelor Thesis: A Generalization Perspective on Model-Based Offline Reinforcement Learning
      </a>
    </p>
  </div>
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
                <p className="text-gray-300 mb-3">Responsible for analytics and reporting for TomTom's Horizon and Data Analytics teams.</p>
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
                <li>Built a multi-agent RAG pipeline to review 40+ telemetry events across the organisation, cutting manual review time by ~12h per week and adopted by 3 business units.</li>
                <li>Standardised metric definitions and automated reporting pipelines across 5+ workflows, giving 50+ stakeholders a single source of truth for product performance.</li>
                <li>Designed and deployed 7+ dashboards to track traffic decoding success rates, map availability, and connection failures, enabling engineers, PMs, and senior leadership to identify issues significantly faster.</li>
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
                <p className="text-gray-300 mb-3">Solely responsible for data analytics and reporting within Tesla's Residential Energy Team in EMEA.</p>
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
                <li>Automated SQL pipelines, reducing manual reporting by 85% and generating insights for 20+ product and customer reports.</li>
                <li>Developed discrepancy reports, saving the sales team 8h weekly and improving order tracking accuracy by 35%.</li>
                <li>Built Python and PowerBI dashboards for installation issues and fleet metrics, enhancing performance tracking across 3 regions.</li>
                <li>Automated correction of 20,000+ customer records, achieving 100% customer onboarding accuracy for product launches.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <hr className="border-gray-500 mb-4" />
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                <p className="text-gray-300">Python, SQL, R, TypeScript</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <p className="text-gray-300">PyTorch, FastAPI, HuggingFace, Azure, Databricks, PowerBI, GitHub/GitLab</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <p className="text-gray-300">English (Native), German (Intermediate), Dutch (Beginner)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Extracurriculars</h3>
                <p className="text-gray-300">
                  External Affairs and Project Committee Lead in{' '}
                  <a 
                    href="https://www.linkedin.com/company/break-the-algo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline"
                  >
                    Break The Algo
                  </a>
                  {' '}student team
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <hr className="border-gray-500 mb-4" />
            <div className="space-y-6">
              {/* DEWan Project */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-xl font-semibold">DEWan: Training-Free Video Personalisation Model</h3>
                    <p className="text-gray-500 text-sm italic">Submitted to WACV 2026</p>
                  </div>
                  <span className="text-gray-500 text-sm sm:text-base">Apr 2025 – Sep 2025</span>
                </div>
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
                  <li>Implemented <a href="https://arxiv.org/abs/2210.11427" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">DiffEdit</a> style semantic masking into Alibaba's <a href="https://arxiv.org/abs/2503.20314" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Wan 2.1</a> model to enable video personalisation without training.</li>
                  <li>Ran evaluations on the <a href="https://github.com/PKU-YuanGroup/OpenS2V-Nexus/tree/main" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">OpenS2V-Nexus</a> benchmark to measure video quality, identity preservation, and motion smoothness.</li>
                  <li>Resulting model ranked <strong>2nd</strong> (Single-Domain) and <strong>4th</strong> (Human-Domain) on the <a href="https://huggingface.co/spaces/BestWishYsh/OpenS2V-Eval" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">OpenS2V Leaderboard</a>.</li>
                </ul>
              </div>

              {/* Sem-SPAI Project */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-xl font-semibold">
                      <a href="https://github.com/pradyutnair/spai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
                        Sem-SPAI: Spectral-Semantic Fusion for AI-Generated Image Detection
                      </a>
                    </h3>
                  </div>
                  <span className="text-gray-500 text-sm sm:text-base">Apr 2025 – Jun 2025</span>
                </div>
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
                  <li>Integrated semantic features using pre-trained vision models (CLIP, ConvNeXt) into <a href="https://arxiv.org/abs/2411.19417" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">SPAI</a>'s spectral-based detector for synthetic image detection.</li>
                  <li>Developed and tested late fusion and cross-attention strategies to align semantic and spectral representations.</li>
                  <li>Improved mean AUC by +4.4% (92.7% overall AUC), improving robustness to real-world image distortions.</li>
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
