import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'FastAPI', level: 82 },
        { name: 'Django', level: 78 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'Firebase', level: 80 },
        { name: 'Supabase', level: 75 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 78 },
        { name: 'Expo', level: 82 },
        { name: 'iOS Development', level: 70 },
        { name: 'Android Development', level: 72 },
        { name: 'PWA', level: 88 }
      ]
    },
    {
      title: 'DevOps',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 82 },
        { name: 'Nginx', level: 75 },
        { name: 'Linux', level: 88 }
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 78 },
        { name: 'Photoshop', level: 80 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'Prototyping', level: 85 },
        { name: 'Design Systems', level: 88 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
                Habilidades
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas
              desde el frontend hasta el backend
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Otras Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Git', 'GitHub', 'VS Code', 'Postman', 'Jira', 'Slack',
                'Trello', 'Notion', 'Webpack', 'Vite', 'ESLint', 'Prettier',
                'Jest', 'Cypress', 'Storybook', 'Stripe', 'PayPal', 'Socket.io'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.3 
                  }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-default text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '3+', label: 'Años de Experiencia' },
              { number: '50+', label: 'Proyectos Completados' },
              { number: '20+', label: 'Tecnologías Dominadas' },
              { number: '100%', label: 'Satisfacción del Cliente' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
