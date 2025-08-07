import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con React, Node.js y MongoDB. Incluye sistema de pagos, gestión de inventario y panel de administración.',
      image: 'https://placehold.co/600x400?text=Modern+ecommerce+platform+interface+with+shopping+cart+and+product+gallery',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en tiempo real, notificaciones y análisis de productividad.',
      image: 'https://placehold.co/600x400?text=Task+management+dashboard+with+kanban+boards+and+productivity+charts',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico interactivo con mapas, gráficos y predicciones. Integración con múltiples APIs meteorológicas.',
      image: 'https://placehold.co/600x400?text=Weather+dashboard+with+interactive+maps+and+forecast+charts',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con visualización de datos en tiempo real y generación de reportes automáticos.',
      image: 'https://placehold.co/600x400?text=Social+media+analytics+dashboard+with+graphs+and+engagement+metrics',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      description: 'Asistente de chat inteligente con procesamiento de lenguaje natural y integración con múltiples servicios de IA.',
      image: 'https://placehold.co/600x400?text=AI+chat+interface+with+modern+messaging+design+and+bot+responses',
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'WebSocket'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Crypto Portfolio Tracker',
      description: 'Rastreador de portafolio de criptomonedas con gráficos en tiempo real, alertas de precios y análisis de rendimiento.',
      image: 'https://placehold.co/600x400?text=Cryptocurrency+portfolio+dashboard+with+price+charts+and+trading+data',
      technologies: ['Next.js', 'TypeScript', 'CoinGecko API', 'Recharts'],
      github: '#',
      demo: '#',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mis{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades en desarrollo fullstack
              y mi pasión por crear soluciones innovadoras
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Proyectos Destacados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.description}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/600x400?text=Project+${project.id}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        aria-label="Ver demo"
                      >
                        <Eye size={20} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                        aria-label="Ver código"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        Código
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Otros Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.description}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x300?text=Project+${project.id}`;
                      }}
                    />
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        Ver Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              Ver Más Proyectos
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
