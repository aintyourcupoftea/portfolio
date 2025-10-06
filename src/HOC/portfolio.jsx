import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence, useAnimation, useAnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Github, Linkedin, Mail, ExternalLink, Loader2, Sun, Moon, Download, 
  Code, Brain, Rocket, Users, ChevronRight, Database, Globe, Cpu, 
  Server, Terminal, Smartphone, ChevronUp, Coffee, Zap, Target,
  AlertTriangle, Award, Calendar, MapPin, Heart, Laugh, ArrowUpRight, Sparkles
} from 'lucide-react'
import { ToastContainer, toast, Slide, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
// Witty taglines that rotate
const taglines = [
  "Trying Not to Break Production (No Promises 😉)",
  "DevOps Engineer by Day, Bug Creator by Night",
  "Turning Coffee into Code Since 2015",
  "If it ain't broke, I didn't deploy yet",
  "Making computers cry tears of joy"
]

// Hero Section - Because first impressions matter (unlike my commit messages)
const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating code snippets background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-muted-foreground/10 font-mono text-xs"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              y: [null, -100],
              rotate: [null, Math.random() * 360 + 180]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
          >
            {['git push --force', 'sudo rm -rf /', 'npm install --save everything', 'while(true) { coffee(); }'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <Avatar id="hero-avatar" className="h-40 w-40 mx-auto border-4 border-primary shadow-2xl">
            <AvatarImage 
              src="https://img.playbook.com/cbh7qVVWT2_ge8VGrg36O9NXC5srNM_gXkdwRwrXHfE/s:1000:1001/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdkODEwZjRh/LTFkNjgtNDdiMy1h/YjlhLTFlMTRiNGU2/YWM0Yw" 
              alt="Amit Gavali - The Legend Himself" 
            />
            <AvatarFallback className="text-2xl font-bold">AG</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Amit Gavali
        </motion.h1>

        <motion.div 
          className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
              className="font-medium"
            >
              {taglines[currentTagline]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

    <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <SocialButton icon={<Github />} href="https://github.com/aintyourcupoftea" label="GitHub" />
          <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/aintyourcupoftea" label="LinkedIn" />
          <SocialButton icon={<Mail />} href="mailto:amitbabangavali@gmail.com" label="Email" />
          <Button variant="outline" size="lg" className="group" onClick={downloadResume}>
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Resume (Warning: May Cause Hiring)
                    </Button>
    </motion.div>

        <motion.div
          className="text-sm text-muted-foreground flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <MapPin className="h-4 w-4" />
          <span>Pune, India</span>
          <span className="mx-2">•</span>
          <Coffee className="h-4 w-4" />
          <span>Coffee Level: Critical</span>
        </motion.div>
                </div>
    </motion.section>
  )
}

// About Section - The origin story nobody asked for but everyone gets
const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
    <section ref={ref} className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          The Story So Far 📚
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Plot Twist Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Started as a curious kid who dismantled computers (sorry, dad's laptop). 
                Now I'm a DevOps Engineer at <strong>TCS for Deutsche Börse AG</strong> since 
                January 16, 2025, where I turn caffeine into infrastructure and occasionally 
                make servers happy.
              </p>
            </CardContent>
        </Card>

          <Card className="bg-gradient-to-br from-card via-card to-secondary/5 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Current Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Building robust pipelines, orchestrating containers, and making sure 
                environments stay up while I sleep. Also building a community at 
                <strong> Taksh</strong> to help fellow developers escape tutorial hell.
              </p>
                </CardContent>
            </Card>
        </div>

        {/* Fun Timeline */}
    <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">The Journey (AKA "How I Got Here") 🛤️</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            {[
              { year: "2010", title: "The Beginning of Chaos", desc: "Dismantled first computer. Parents were thrilled." },
              { year: "2015", title: "Hello, World!", desc: "Wrote my first program. Computer said hello back!" },
              { year: "2020", title: "College Adventures", desc: "Started Computer Engineering at Modern College, Pune" },
              { year: "2024", title: "Graduation Glory", desc: "Graduated with 8.47 CGPA (not bad for a serial procrastinator)" },
              { year: "2025", title: "Corporate Life", desc: "DevOps Engineer at TCS for Deutsche Börse AG" }
            ].map((item, index) => (
    <motion.div
                key={item.year}
                className="relative pl-12 pb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div>
                  <span className="text-primary font-bold text-sm">{item.year}</span>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
    </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Skills Section - Where I flex (responsibly)
const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState('DevOps')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategoriesWithColors = [
    {
      name: 'DevOps',
      icon: <Terminal className="h-4 w-4 align-middle" />,
      skills: ['Ansible', 'Terraform', 'Docker', 'Podman', 'OpenShift', 'Google Cloud', 'Jenkins'],
      gradient: 'from-blue-600 via-cyan-500 to-teal-400',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      accent: 'text-blue-600 dark:text-blue-400',
      description: "Infrastructure as Poetry • Automating the Future"
    },
    {
        name: 'Frontend',
      icon: <Globe className="h-4 w-4 align-middle" />,
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      gradient: 'from-purple-600 via-pink-500 to-rose-400',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      accent: 'text-purple-600 dark:text-purple-400',
      description: "Pixel Perfect • Where Design Meets Code"
    },
    {
        name: 'Backend',
        icon: <Server className="h-4 w-4 align-middle" />,
        skills: ['Node.js', 'Django', 'Flask'],
      gradient: 'from-orange-600 via-red-500 to-pink-400',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      accent: 'text-orange-600 dark:text-orange-400',
      description: "Digital Architecture • Building the Foundation"
    },
    {
        name: 'Databases',
        icon: <Database className="h-4 w-4 align-middle" />,
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
      gradient: 'from-green-600 via-emerald-500 to-teal-400',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
      accent: 'text-green-600 dark:text-green-400',
      description: "Data Symphony • Orchestrating Information"
    },
    {
        name: 'Mobile',
        icon: <Cpu className="h-4 w-4 align-middle" />,
        skills: ['Flutter'],
      gradient: 'from-indigo-600 via-blue-500 to-cyan-400',
      bgGradient: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20',
      accent: 'text-indigo-600 dark:text-indigo-400',
      description: "Touch & Go • Mobile Experiences"
    },
    {
        name: 'Languages',
        icon: <Code className="h-4 w-4 align-middle" />,
        skills: ['Python', 'JavaScript', 'C++', 'Dart'],
      gradient: 'from-violet-600 via-purple-500 to-fuchsia-400',
      bgGradient: 'from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20',
      accent: 'text-violet-600 dark:text-violet-400',
      description: "Linguistic Mastery • Speaking in Code"
    },
  ]

    return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-8 w-16 h-16 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-8 w-20 h-20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

            <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Elegant Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crafting digital solutions with precision and creativity
          </motion.p>
        </div>

        {/* Refined Category Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-muted/30 backdrop-blur-sm rounded-xl border border-border/30">
            {skillCategoriesWithColors.map((category, index) => (
                                                <motion.button
                key={category.name}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                                                    onClick={() => setActiveCategory(category.name)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 leading-none ${
                  activeCategory === category.name
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-md`
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="inline-flex items-center justify-center w-4 h-4">{category.icon}</span>
                {category.name}
                {activeCategory === category.name && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                                                </motion.button>
                                ))}
                            </div>
                        </div>

        {/* Clean Skills Display */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Card className={`overflow-hidden border-0 bg-gradient-to-br ${skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.bgGradient} backdrop-blur-sm`}>
              <CardContent className="p-6">
                {/* Minimalist Category Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-white/10 backdrop-blur-sm"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`text-xl ${skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.accent}`}>
                      {skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.icon}
                                </div>
                            </motion.div>
                  <h3 className={`text-xl font-semibold ${skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.accent} mb-2`}>
                    {activeCategory}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.description}
                  </p>
                </div>

                {/* Compact Skills Grid - centered, responsive */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2
                      }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group cursor-pointer w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                      <div className={`
                        relative p-3 sm:p-4 rounded-xl text-center transition-all duration-200
                        bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/20
                        hover:shadow-lg hover:shadow-primary/10
                        ${hoveredSkill === skill ? 'ring-1 ring-primary/30' : ''}
                      `}>
                        {/* Skill Name */}
                        <div className={`font-medium text-xs sm:text-sm ${skillCategoriesWithColors.find(cat => cat.name === activeCategory)?.accent}`}>
                          {skill}
                        </div>
                        
                        {/* Subtle Decorative Element */}
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                    </CardContent>
                </Card>
          </motion.div>
        </AnimatePresence>
            </motion.div>
        </section>
  )
}

// Projects Section - My digital offspring

const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const projects = [
    {
      title: "Bharat Leaf Lens",
      description: "AI-powered plant identification app built with Flutter and TensorFlow Lite. Helping users discover medicinal plants with cutting-edge computer vision.",
      link: "https://github.com/aintyourcupoftea/BharatLeafLens",
      technologies: ["Flutter", "TensorFlow Lite", "PyTorch", "Computer Vision"],
      emoji: "🌿",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      category: "Mobile AI"
    },
    {
      title: "ESP32 Smart Home",
      description: "IoT home automation system with remote control capabilities. Modern smart home solution for seamless device management.",
      link: "https://github.com/aintyourcupoftea/ESP32-Home-Automation",
      technologies: ["ESP32", "IoT", "Web Development", "Hardware"],
      emoji: "🏠",
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      category: "IoT"
    },
    {
      title: "Meme Fetcher API",
      description: "Python API that fetches programming memes from Reddit. Because good humor is essential for developer productivity.",
      link: "https://github.com/aintyourcupoftea/MemeFetchingRedditAPI",
      technologies: ["Python", "Reddit API", "REST API"],
      emoji: "😂",
      gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
      category: "API"
    },
    {
      title: "PDF Digital Signer",
      description: "Streamlined PDF signing solution for digital document workflows. Modern approach to paperless document processing.",
      link: "https://github.com/aintyourcupoftea/PDF-Signer",
      technologies: ["Python", "PDF Processing", "Digital Signatures"],
      emoji: "✍️",
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      category: "Utility"
    },
    {
      title: "Student DBMS",
      description: "Full-stack student database management system with comprehensive CRUD operations and intuitive interface.",
      link: "https://github.com/aintyourcupoftea/student-dbms",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      emoji: "🎓",
      gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      category: "Full-Stack"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
            Projects & Creations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of passionate projects built with modern technologies and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105`}></div>
              
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Card Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{project.emoji}</div>
                      <div>
                        <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mb-2">
                          {project.category}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </motion.a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    <div className="w-px h-4 bg-border"></div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 4 }}
                    >
                    </motion.a>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm">Want to see more?</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Experience Section - The professional stuff
const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

    return (
    <section ref={ref} className="py-16 px-4">
                <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Professional Adventures 🚀
        </h2>

        <div className="space-y-8">
          <Card className="bg-gradient-to-r from-card to-primary/10 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-primary">DevOps Engineer</CardTitle>
                  <CardDescription className="text-lg font-medium">
                    TCS for Deutsche Börse AG
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-2">Current</Badge>
                  <p className="text-sm text-muted-foreground">Jan 16, 2025 - Present</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Currently orchestrating the chaos at one of Europe's largest financial market infrastructures. 
                  Making sure traders can trade and systems don't trade their sanity for uptime.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      What I Do
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Keep environments running (most of the time)</li>
                      <li>Build CI/CD pipelines that actually work</li>
                      <li>Manage cloud infrastructure like a boss</li>
                      <li>Debug issues at 3 AM with a smile</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Award className="h-4 w-4 text-green-500" />
                      Impact
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Reduced deployment anxiety by 90%</li>
                      <li>Increased coffee consumption by 200%</li>
                      <li>Made servers happy (they send thank you logs)</li>
                      <li>Still learning German (Guten Tag, bugs!)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-card to-secondary/10 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Community Volunteer</CardTitle>
                  <CardDescription className="font-medium">Taksh</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Apr 2024 - Present</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Building a community for aspiring developers to escape tutorial hell and build actual projects. 
                Because watching 50 React tutorials won't make you a developer, but building 5 projects will.
              </p>
              <a 
                href="https://gameoftaksh.live" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline inline-flex items-center gap-1 mt-2"
              >
                gameoftaksh.live <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        </div>
                </motion.div>
    </section>
  )
}

// Education Section
const EducationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <section ref={ref} className="py-16 px-4">
                <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Academic Achievements 🎓
        </h2>

        <Card className="bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Award className="h-6 w-6" />
              Bachelor of Engineering in Computer Engineering
            </CardTitle>
            <CardDescription className="text-lg">
              Progressive Education Society's Modern College of Engineering, Pune
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8.47</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">Graduation Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Years of Caffeine</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground italic text-center">
                "Four years of turning pizza and energy drinks into a Computer Engineering degree. 
                Would do it again, but with better sleep schedule."
              </p>
            </div>
          </CardContent>
        </Card>
                </motion.div>
    </section>
  )
}

// Meme Section - Because we all need therapy
const MemeSection = ({ meme, isLoading, error, onRefresh }) => {
  return (
    <Card className="bg-gradient-to-br from-card to-secondary/10 hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Laugh className="h-5 w-5" />
            Daily Dose of Sanity
          </span>
          <Button variant="ghost" size="sm" onClick={onRefresh}>
            <Rocket className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>
          Fresh memes to keep your debugging sessions bearable
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-64 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        ) : error ? (
          <div className="h-64 flex items-center justify-center">
            <p className="text-red-500">Meme loading failed. Like my last deployment.</p>
          </div>
        ) : meme ? (
          <div className="text-center">
            <img src={meme} alt="Programming Meme" className="max-w-full h-auto rounded-lg mx-auto" />
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center">
            <p className="text-muted-foreground">No memes found. This is the real tragedy.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Contact Form - Slide into my DMs (professionally)
const ContactSection = ({ onSubmit, errors, register }) => {
  const [isSending, setIsSending] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    try {
      await onSubmit(e)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section ref={ref} className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Epic 🚀
          </h2>
          <p className="text-muted-foreground text-lg">
            Got an idea? Need help? Just want to chat about code? 
            Drop me a message and let's make magic happen!
          </p>
        </div>

        <Card className="bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your awesome name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@awesome.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your brilliant idea or just say hi!"
                  className="min-h-32"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSending}>
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending into the void...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

// Social Button Component
const SocialButton = ({ icon, href, label }) => (
  <Button variant="outline" size="lg" asChild className="group">
    <a href={href} target="_blank" rel="noopener noreferrer">
      {React.cloneElement(icon, { className: "mr-2 h-4 w-4 group-hover:animate-pulse" })}
      {label}
    </a>
  </Button>
)

// Download Resume Function
const downloadResume = () => {
  const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/amitgavali-5d369.appspot.com/o/AmitGavaliCV.pdf?alt=media&token=2fbc4322-c59f-4c82-b912-107d51091c63"
  window.open(resumeUrl, '_blank', 'noopener,noreferrer')
}

// Main Portfolio Component
export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [meme, setMeme] = useState(null)
  const [memeLoading, setMemeLoading] = useState(true)
  const [memeError, setMemeError] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const lightModeTimeoutRef = useRef(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onBlur'
  })

  // Theme management
    useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
        } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
        }
    setMounted(true)
  }, [])

    useEffect(() => {
        if (mounted) {
            if (darkMode) {
        document.documentElement.classList.add('dark')
            } else {
        document.documentElement.classList.remove('dark')
            }
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
      // Toast is handled during toggle for timing control
        }
  }, [darkMode, mounted])

  // Scroll management
    useEffect(() => {
        const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 1000)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch meme
    const fetchMeme = async () => {
    setMemeLoading(true)
    setMemeError(null)
    try {
      const response = await fetch('https://meme.aintyourcupoftea.dpdns.org/')
      if (!response.ok) throw new Error('Failed to fetch meme')
      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setMeme(imageUrl)
        } catch (error) {
      console.error('Error fetching meme:', error)
      setMemeError(error.message)
        } finally {
      setMemeLoading(false)
        }
  }

  useEffect(() => {
    fetchMeme()
  }, [])

  // Form submission
    const onSubmit = async (data) => {
        try {
            const response = await fetch(
        'https://script.google.com/macros/s/AKfycbz7iSFTg3qM9fHYrDfa_DrEx8KIl5sv2kL8eFyU4SPI9AB7pnyn4By25x4n3ubcleyFug/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      reset()
        } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to send message. Please try again or use email directly.')
    }
  }

  const toggleDarkMode = () => {
    // Clear any pending timers
    if (lightModeTimeoutRef.current) {
      clearTimeout(lightModeTimeoutRef.current)
      lightModeTimeoutRef.current = null
    }
    const goingToLight = darkMode === true
    if (goingToLight) {
      // First apply light mode, then show a toast with a unique id
      setDarkMode(false)
      toast.dismiss()
      const uniqueToastId = `light-mode-joke-${Date.now()}`
      showLightModeJokeMaybe(uniqueToastId)
    } else {
      // Switching to dark immediately; dismiss any existing toast
      toast.dismiss()
      setDarkMode(true)
    }
  }
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // Occasionally show a fun, hand-drawn style toast when enabling light mode
  const showLightModeJokeMaybe = (toastId) => {
    try {
      const jokes = [
        'Light mode? <br> Bold move, developer. 😎',
        'Look at you, using light mode. <br> That\'s so... bold (and painful).',
        'Light mode? Bold. <br> Most people can\'t pull that off.',
        'You live dangerously. Light mode users have stories (and squinty selfies)',
        'Embracing the light side, I see. <br> May the sun be with you! ☀️'
      ]
      
      const message = jokes[Math.floor(Math.random() * jokes.length)]
  
      const toastPosition = 'top-center'

      toast(
        <div className="relative group transition-all duration-500 ease-out">
          {/* Simple hand-drawn style bubble */}
          <div className="inline-flex items-center justify-center px-4 py-3 rounded-xl border-2 border-dashed border-gray-400 bg-white shadow-sm max-w-[320px]">
            <span className="text-gray-900 text-sm leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        </div>,
        {
          position: toastPosition,
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          closeButton: false,
          className: 'mysterious-note',
          style: { 
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: '4px',
            width: 'auto',
            marginTop: '28px',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          toastId,
          transition: Zoom
        }
      )
    } catch (_) {
      // noop
    }
  }
  
  if (!mounted) return null

    return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark' : ''}`}>
            <ToastContainer limit={3} position="top-center" transition={Zoom} />
      
                    {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center space-x-2 bg-background/80 backdrop-blur p-2 rounded-full shadow-lg">
          <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                            {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        </div>
                    </div>

                    {/* Scroll to Top Button */}
                    {showScrollToTop && (
                        <Button
                            onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg"
          size="icon"
                        >
                            <ChevronUp className="h-5 w-5" />
                        </Button>
                    )}

      <main className="transition-colors duration-300">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
                        <SkillsSection />
        <ProjectsSection />
        
        {/* Meme and Contact Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
            <MemeSection 
              meme={meme} 
              isLoading={memeLoading} 
              error={memeError} 
              onRefresh={fetchMeme}
            />
                            <div>
              <ContactSection 
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
              />
                            </div>
                            </div>
        </section>
                    </main>

      {/* Footer */}
      <footer className="border-t py-12">
                        <motion.div
          className="container mx-auto text-center px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
          <p className="text-lg font-semibold text-muted-foreground mb-4">
            Made with <Heart className="inline h-5 w-5 text-red-500 animate-pulse" /> and probably too much coffee
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Amit Gavali. All rights reserved. 
            <br />
            <span className="italic">No servers were harmed in the making of this portfolio.</span>
                            </p>
                        </motion.div>
                    </footer>
                </div>
    )
}
