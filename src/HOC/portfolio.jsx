import React, { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Loader2, Sun, Moon, Download, CheckCircle, Code, Brain, Rocket, Users, ChevronRight, Database, Globe, Cpu, Server, Terminal, Smartphone } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as THREE from 'three';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AnimatedSectionHeader = ({ children }) => (
    <motion.h2
        className="font-primary text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.h2>
);

const ProjectCard = ({ project }) => (
    <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        className="h-full"
    >
        <Card className="h-full bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
                <CardTitle className="font-primary flex items-center justify-between text-xl">
                    {project.title}
                    <Button variant="ghost" size="icon" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">View project</span>
                        </a>
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">{tech}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    </motion.div>
);

const MemeSection = ({ meme, isLoading, error }) => (
    <Card className="bg-card hover:shadow-lg transition-shadow duration-300 h-full">
        <CardHeader>
            <CardTitle className="font-primary">Meme of the Day</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
            {isLoading ? (
                <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin" />
                </div>
            ) : error ? (
                <p className="text-red-500">Error loading meme: {error}</p>
            ) : meme ? (
                <img
                    src={meme}
                    alt="Random Meme"
                    className="w-full h-auto rounded-lg"
                />
            ) : (
                <p>No meme available</p>
            )}
        </CardContent>
    </Card>
);

const ContactForm = ({ onSubmit, errors, register }) => {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        try {
            await onSubmit(e);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="font-primary">Contact Me</CardTitle>
                <CardDescription>Get in touch for opportunities or collaborations.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input
                            id="name"
                            placeholder="Your name"
                            autoComplete="name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input
                            id="email"
                            placeholder="Your email"
                            type="email"
                            autoComplete="email"
                            {...register("email", {
                                required: "Email is required",
                                validate: (value) => isValidEmail(value) || "Invalid email address"
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea
                            id="message"
                            placeholder="Your message"
                            {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={isSending}>
                        {isSending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function downloadResume() {
    const resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/amitgavali-5d369.appspot.com/o/Amit_Gavali_CV.pdf?alt=media&token=2fbc4322-c59f-4c82-b912-107d51091c63';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
}

const AboutMeSection = () => {
    return (
        <section className="py-8">
            <AnimatedSectionHeader>About Me</AnimatedSectionHeader>
            <Card className="bg-card overflow-hidden">
                <CardContent className="p-6">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
                            <Timeline>
                                <TimelineItem year="2010" title="First Computer">
                                    Dismantled my first computer out of curiosity.
                                </TimelineItem>
                                <TimelineItem year="2015" title="Hello, World!">
                                    Wrote my first "Hello, World!" program in C++.
                                </TimelineItem>
                                <TimelineItem year="2020" title="College Journey">
                                    Started Computer Engineering at Modern College, Pune.
                                </TimelineItem>
                                <TimelineItem year="2022" title="Internship">
                                    Completed first internship as a Flutter developer.
                                </TimelineItem>
                                <TimelineItem year="2024" title="Graduation">
                                    Graduating with a degree in Computer Engineering.
                                </TimelineItem>
                            </Timeline>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Signature Strengths</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <SkillCard
                                    icon={<Globe className="h-6 w-6" />}
                                    title="Web Development"
                                    description="Crafting responsive and dynamic web applications using modern frameworks and technologies."
                                />
                                <SkillCard
                                    icon={<Smartphone className="h-6 w-6" />}
                                    title="Mobile App Development"
                                    description="Building cross-platform mobile applications with Flutter, ensuring seamless user experiences."
                                />
                                <SkillCard
                                    icon={<Brain className="h-6 w-6" />}
                                    title="Machine Learning"
                                    description="Implementing ML models using transfer learning techniques for innovative solutions."
                                />
                                <SkillCard
                                    icon={<Users className="h-6 w-6" />}
                                    title="Team Collaboration"
                                    description="Effectively working in diverse teams to deliver high-quality projects on time."
                                />
                                <SkillCard
                                    icon={<Rocket className="h-6 w-6" />}
                                    title="Project Management"
                                    description="Coordinating and executing projects from conception to deployment across various domains."
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

const Timeline = ({ children }) => (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {children}
    </ol>
);

const TimelineItem = ({ year, title, children }) => (
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
            <ChevronRight className="w-3 h-3 text-white" />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-primary">{title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{year}</time>
        <p className="mb-4 text-base font-normal text-muted-foreground">{children}</p>
    </li>
);

const SkillCard = ({ icon, title, description }) => (
    <Card className="bg-muted hover:bg-muted/80 transition-colors duration-200">
        <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="mb-2 text-primary">{icon}</div>
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

const AnimatedProjectCard = ({ project }) => (
    <motion.div
        whileHover={{ scale: 1.05, rotateY: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <ProjectCard project={project} />
    </motion.div>
);

const AnimatedSkillBadge = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
    >
        <Badge variant="secondary" className="text-sm md:text-lg py-1 px-2 md:py-2 md:px-4">{skill}</Badge>
    </motion.div>
);

const skillCategories = [
    {
        name: 'Frontend',
        icon: <Globe className="w-full h-full" />,
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    },
    {
        name: 'Backend',
        icon: <Server className="h-6 w-6" />,
        skills: ['Node.js', 'Django', 'Flask'],
    },
    {
        name: 'Databases',
        icon: <Database className="h-6 w-6" />,
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
        name: 'Mobile',
        icon: <Cpu className="h-6 w-6" />,
        skills: ['Flutter'],
    },
    {
        name: 'DevOps',
        icon: <Terminal className="h-6 w-6" />,
        skills: ['AWS', 'Azure', 'Google Cloud'],
    },
    {
        name: 'Languages',
        icon: <Code className="h-6 w-6" />,
        skills: ['Python', 'JavaScript', 'C++', 'Dart'],
    },
];

const SkillsSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section ref={ref} className="py-16">
            <AnimatedSectionHeader>Technical Arsenal</AnimatedSectionHeader>
            <motion.div
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="bg-card overflow-hidden">
                    <CardContent className="p-6 text-center">
                        <div className="overflow-x-auto pb-4 mb-4">
                            <div className="flex justify-start md:justify-center gap-4 min-w-max px-4">
                                {skillCategories.map((category) => (
                                    <TooltipProvider key={category.name}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setActiveCategory(category.name)}
                                                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0 flex items-center justify-center ${activeCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                                        }`}
                                                >
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                                                        {category.icon}
                                                    </div>
                                                </motion.button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{category.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-4">{activeCategory}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {skillCategories.find((cat) => cat.name === activeCategory).skills.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

const SkillBadge = ({ skill }) => {
    const badgeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (badgeRef.current) {
            observer.observe(badgeRef.current);
        }

        return () => {
            if (badgeRef.current) {
                observer.unobserve(badgeRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: Math.random() * 0.3 }}
        >
            <Badge variant="secondary" className="text-sm py-1 px-2">
                {skill}
            </Badge>
        </motion.div>
    );
};

export default function Portfolio() {
    const [mounted, setMounted] = useState(false);
    const [meme, setMeme] = useState(null);
    const [memeLoading, setMemeLoading] = useState(true);
    const [memeError, setMemeError] = useState(null);
    const [darkMode, setDarkMode] = useState(false);  // Initialize to false
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
        mode: 'onBlur',
    });

    const projects = [
        {
            title: 'Bharat Leaf Lens',
            description: 'Flutter-based medicinal plant recognition app using Tflite and PyTorch.',
            link: 'https://github.com/aintyourcupoftea/BharatLeafLens',
            technologies: ['Flutter', 'TensorFlow Lite', 'PyTorch'],
        },
        {
            title: 'Home Automation using ESP32',
            description: 'Smart home project with remote control of switches via web interface.',
            link: 'https://github.com/aintyourcupoftea/ESP32-Home-Automation',
            technologies: ['ESP32', 'IoT', 'Web Development'],
        },
        {
            title: 'Meme Fetcher API',
            description: 'Fetch memes from r/ProgrammerHumor using Reddit API.',
            link: 'https://github.com/aintyourcupoftea/MemeFetchingRedditAPI',
            technologies: ['Python', 'API Development', 'Reddit API'],
        },
        {
            title: 'PDF Signer API',
            description: 'API to sign PDFs with uploaded signature images.',
            link: 'https://github.com/aintyourcupoftea/PDF-Signer',
            technologies: ['Python', 'API Development', 'PDF Processing'],
        },
        {
            title: 'Student Database Management System',
            description: 'GUI-driven system using HTML, CSS, JavaScript, PHP, and MySQL.',
            link: 'https://github.com/aintyourcupoftea/student-dbms',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        },
    ];

    const canvasRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        let animationFrameId;

        const initScene = () => {
            if (!canvasRef.current) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const geometry = new THREE.BufferGeometry();
            const particlesCount = 5000;
            const posArray = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 5;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const material = new THREE.PointsMaterial({
                size: 0.005,
                color: darkMode ? 0xffffff : 0x000000,
            });

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);

            camera.position.z = 2;

            sceneRef.current = { scene, camera, renderer, particles };
        };

        const animate = () => {
            if (!sceneRef.current) return;
            const { scene, camera, renderer, particles } = sceneRef.current;

            particles.rotation.x += 0.001;
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (!sceneRef.current) return;
            const { camera, renderer } = sceneRef.current;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        // Initialize scene after a short delay to ensure canvas is in the DOM
        const timeoutId = setTimeout(() => {
            initScene();
            animate();
            window.addEventListener('resize', handleResize);
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (sceneRef.current && sceneRef.current.renderer) {
                sceneRef.current.renderer.dispose();
            }
        };
    }, [darkMode]);

    useEffect(() => {
        if (sceneRef.current && sceneRef.current.particles) {
            sceneRef.current.particles.material.color.setHex(darkMode ? 0xffffff : 0x000000);
        }
    }, [darkMode]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDark);
            localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        }
    }, [darkMode, mounted]);

    useEffect(() => {
        fetchMeme();
    }, []);

    const fetchMeme = async () => {
        setMemeLoading(true);
        setMemeError(null);
        try {
            const response = await fetch('https://memefetchingredditapi.onrender.com');
            if (!response.ok) {
                throw new Error('Failed to fetch meme');
            }
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setMeme(imageUrl);
        } catch (error) {
            console.error('Error fetching meme:', error);
            setMemeError(error.message);
        } finally {
            setMemeLoading(false);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwr7q7tGJ-apcNbfqVyOxG__EfFGF6gcv8ftTZOk173FgB-uDxqja3S6NoFRki1RKn0/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            console.log('Form submitted successfully');
            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Failed to send message. Please try again.");
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    if (!mounted) return null;

    return (
        <>
            <ToastContainer />
            <div className={`min-h-screen font-mono ${darkMode ? 'dark' : ''}`}>
                <canvas
                    ref={canvasRef}
                    className="fixed top-0 left-0 w-full h-full pointer-events-none"
                    style={{ zIndex: -1 }}
                />
                <div className="relative z-10 transition-colors duration-300 bg-background/80 text-foreground">
                    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="container mx-auto flex h-14 items-center justify-between px-4">
                            <motion.span
                                className="font-primary font-bold text-xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Portfolio
                            </motion.span>
                            <div className="flex items-center space-x-2 font-primary">
                                <span className="text-sm font-medium">
                                    {darkMode ? 'Dark' : 'Light'} Mode
                                </span>
                                <Switch
                                    checked={darkMode}
                                    onCheckedChange={toggleDarkMode}
                                    className="data-[state=checked]:bg-primary"
                                />
                                {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                            </div>
                        </div>
                    </header>

                    <main className="container mx-auto py-8 px-4 space-y-12 md:space-y-16 max-w-4xl">
                        <section className="text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Avatar className="h-32 w-32 md:h-40 md:w-40 mx-auto mb-6 border-4 border-primary">
                                    <AvatarImage src="https://img.playbook.com/-PDu_bRrRfxAxJ7gxiYZ2Y8RvY5dUdgoKk1KWi8PUes/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VjYzkzMjEw/LTk0MTctNDQ4ZC04/NzA0LTAxNWFlOTU2/ZGE0MA" alt="Amit Gavali" />
                                    <AvatarFallback>AG</AvatarFallback>
                                </Avatar>
                            </motion.div>
                            <motion.h1
                                className="font-primary text-4xl md:text-5xl font-bold tracking-tight mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Amit Gavali
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-muted-foreground mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Programmer | Problem Solver | Avid Learner
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap justify-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <div className="flex flex-nowrap justify-center gap-2 sm:gap-4">
                                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none sm:size-lg" asChild>
                                        <a href="https://github.com/aintyourcupoftea" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                                            <span className="text-xs sm:text-sm">GitHub</span>
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none sm:size-lg" asChild>
                                        <a href="https://www.linkedin.com/in/aintyourcupoftea" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                                            <span className="text-xs sm:text-sm">LinkedIn</span>
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none sm:size-lg" asChild>
                                        <a href="mailto:amitbabangavali@gmail.com" className="flex items-center justify-center">
                                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                                            <span className="text-xs sm:text-sm">Email</span>
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none sm:size-lg" onClick={downloadResume}>
                                        <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                                        <span className="text-xs sm:text-sm">Resume</span>
                                    </Button>
                                </div>
                            </motion.div>
                        </section>

                        <AboutMeSection />

                        <AnimatedSectionHeader>Education</AnimatedSectionHeader>
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="font-primary text-xl font-semibold">Bachelor of Engineering in Computer Engineering</h3>
                                        <p className="text-base md:text-lg">
                                            Progressive Education Society's Modern College of Engineering, Pune<br />
                                            CGPA: 8.47 | Batch of 2024
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.section>

                        <AnimatedSectionHeader>Experience</AnimatedSectionHeader>
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="font-primary text-xl font-semibold">Community Volunteer</h3>
                                        <p className="text-base md:text-lg">
                                            Taksh<br />
                                            Apr 2024 - Present · {Math.floor((new Date() - new Date('2024-04-01')) / (1000 * 60 * 60 * 24 * 30))} mos<br />
                                            Building a Community for everyone who wants to create a career in Tech by building projects instead of being trapped in a Tutorial Hell!
                                        </p>
                                        <a href="https://gameoftaksh.live" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                            gameoftaksh.live
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.section>

                        <SkillsSection />

                        <AnimatedSectionHeader>Projects</AnimatedSectionHeader>
                        <section>
                            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                                {projects.map((project, index) => (
                                    <AnimatedProjectCard key={project.title} project={project} />
                                ))}
                            </div>
                        </section>
                        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                            <div>
                                <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <MemeSection meme={meme} isLoading={memeLoading} error={memeError} />
                                </motion.section>
                            </div>
                            <div>
                                <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <ContactForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
                                </motion.section>
                            </div>
                        </div>
                    </main>

                    <footer className="border-t py-8 md:py-10 mt-8">
                        <motion.div
                            className="container mx-auto flex flex-col items-center justify-center px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-center text-base md:text-lg font-semibold tracking-wide text-muted-foreground">
                                Made with ❤️ by <span className="text-primary font-bold">Amit Gavali</span>
                            </p>
                        </motion.div>
                    </footer>
                </div>
            </div>
        </>
    )
}