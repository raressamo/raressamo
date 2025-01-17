import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true
})

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen matrix-bg">
    <!-- Navigation -->
    <nav class="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-cyber-green font-mono font-bold text-xl glow-effect">RARES</div>
          <div class="space-x-8">
            <a href="#about" class="hover:text-cyber-green transition-colors">About</a>
            <a href="#education" class="hover:text-cyber-green transition-colors">Education</a>
            <a href="#certifications" class="hover:text-cyber-green transition-colors">Certifications</a>
            <a href="#experience" class="hover:text-cyber-green transition-colors">Experience</a>
            <a href="#skills" class="hover:text-cyber-green transition-colors">Skills</a>
            <a href="#contact" class="hover:text-cyber-green transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="min-h-screen flex items-center justify-center px-6">
      <div class="text-center" data-aos="fade-up">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 font-mono text-cyber-green glow-effect">
          Samoila Rares
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-300">
          Penetration Tester | Bug Bounty Hunter
        </p>
        <div class="terminal-effect inline-block p-8 rounded-lg">
          <p class="font-mono text-cyber-green">
            > <span class="typing-effect">Securing digital infrastructure </span>
          </p>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Professional Summary</h2>
        <div class="terminal-effect p-8 rounded-lg">
          <p class="mb-4">
            Passionate penetration tester, ethical hacker, and WordPress developer with a penchant for cycling and chess in my free time. Dedicated to safeguarding digital assets and pushing the boundaries of ethical hacking to protect against cyber threats. Skilled in WordPress development, leveraging its flexibility and security features to create robust and user-friendly websites. When not immersed in the digital realm, I find solace in the physical challenges of cycling and the strategic intricacies of chess, constantly striving for personal growth and excellence in all aspects of life.
          </p>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Education</h2>
        <div class="space-y-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Secondary School</h3>
            <p class="text-gray-300">Vasile Alecsandri National College</p>
            <p class="text-gray-400">2017 - 2021</p>
          </div>
            <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Middle School</h3>
            <p class="text-gray-300">Vasile Alecsandri National College</p>
            <p class="text-gray-400">2021 - 2025</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section id="certifications" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Junior Penetration Tester</h3>
            <p class="text-gray-300">TryHackMe</p>
            <p class="text-gray-400">Issued Nov 2022</p>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Web Fundamentals</h3>
            <p class="text-gray-300">TryHackMe</p>
            <p class="text-gray-400">Issued May 2022</p>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Pre Security</h3>
            <p class="text-gray-300">TryHackMe</p>
            <p class="text-gray-400">Issued Jun 2022</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience -->
    <section id="experience" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Professional Experience</h2>
        <div class="space-y-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Wordpress Developer</h3>
            <p class="text-gray-300">Brand Developer | Cluj-Napoca</p>
            <p class="text-gray-400">Jun 2023 - Jul 2023</p>
          </div>
          <!-- Add more experience entries -->
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Security Tools</h3>
            <ul class="space-y-2">
              <li>• Nmap & Network Analysis</li>
              <li>• Wireshark</li>
              <li>• Metasploit Framework</li>
              <li>• Burp Suite</li>
              <li>• Kali Linux</li>
            </ul>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Technical Skills</h3>
            <ul class="space-y-2">
              <li>• Network Security</li>
              <li>• Vulnerability Assessment</li>
              <li>• Incident Response</li>
              <li>• Risk Management</li>
              <li>• Security Architecture</li>
            </ul>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Programming</h3>
            <ul class="space-y-2">
              <li>• Python</li>
              <li>• Bash Scripting</li>
              <li>• PowerShell</li>
              <li>• SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Contact Information</h2>
        <div class="terminal-effect p-8 rounded-lg inline-block">
          <div class="space-y-4">
            <p>
              <span class="text-cyber-green">Email:</span> 
              <a href="mailto:raressamo247@gmail.com" class="text-gray-300 hover:text-cyber-green">
                raressamo247@gmail.com
              </a>
            </p>
            <p>
              <span class="text-cyber-green">Location:</span> 
              <span class="text-gray-300">Galati</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center text-gray-500">
      <p>© ${new Date().getFullYear()} | Samoila Rares - Cybersecurity Professional</p>
    </footer>
  </div>
`