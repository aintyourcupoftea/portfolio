import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Loader2, Sun, Moon, Download, CheckCircle, Code, Brain, Rocket, Users, ChevronRight, ChevronDown } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

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
    const [activeTab, setActiveTab] = useState('story');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const tabs = [
        { id: 'story', label: 'My Story', icon: <Brain className="w-5 h-5" /> },
        { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
        { id: 'philosophy', label: 'Philosophy', icon: <Rocket className="w-5 h-5" /> },
        { id: 'collaboration', label: 'Collaboration', icon: <Users className="w-5 h-5" /> },
    ];

    const tabContent = {
        story: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">From Curiosity to Code</h3>
                <p>
                    My journey began with a simple question: "How does this work?" That curiosity led me from dismantling old computers to writing code. Today, I'm a full-stack developer passionate about creating impactful digital solutions.
                </p>
                <p>
                    Every project is a new adventure to learn and innovate. I bring enthusiasm and excellence to everything I do, whether it's optimizing algorithms or crafting responsive UIs.
                </p>
            </div>
        ),
        skills: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Tech Arsenal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SkillCard title="Programming Languages" skills={['Python', 'C++', 'Dart']} />
                    <SkillCard title="SDKs" skills={['Flutter']} />
                    <SkillCard title="Web Development" skills={['HTML', 'CSS', 'React.js', 'Django', 'Flask']} />
                    <SkillCard title="Database Management" skills={['PostgreSQL']} />
                    <SkillCard title="Tools" skills={['Git', 'VS Code', 'Postman']} />
                    <SkillCard title="Cloud Services" skills={['Firebase', 'Render']} />
                </div>
            </div>
        ),
        philosophy: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Code with Purpose</h3>
                <p>
                    I believe technology should serve humanity. My development approach is guided by:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">User-Centric Design:</span> Creating intuitive, empowering interfaces.</li>
                    <li><span className="font-semibold">Scalable Architecture:</span> Building adaptable systems.</li>
                    <li><span className="font-semibold">Continuous Learning:</span> Embracing new technologies and methodologies.</li>
                </ul>
            </div>
        ),
        collaboration: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Better Together</h3>
                <p>
                    Great software is built by great teams. I thrive in collaborative environments where ideas and diverse perspectives are valued. My approach includes:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">Open Communication:</span> Clear idea sharing and active listening.</li>
                    <li><span className="font-semibold">Mentorship:</span> Learning from seniors and guiding juniors.</li>
                    <li><span className="font-semibold">Code Reviews:</span> Constructive feedback for quality improvement.</li>
                    <li><span className="font-semibold">Pair Programming:</span> Real-time collaboration on complex problems.</li>
                </ul>
            </div>
        ),
    };

    const MobileAccordion = ({ tab }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="border-b last:border-b-0">
                <button
                    className="flex items-center justify-between w-full py-4 px-2 text-left"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="flex items-center">
                        {tab.icon}
                        <span className="ml-2 font-semibold">{tab.label}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4">
                                {tabContent[tab.id]}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <section className="py-8">
            <AnimatedSectionHeader>About Me</AnimatedSectionHeader>
            <Card className="bg-card overflow-hidden">
                <CardContent className="p-0">
                    {isMobile ? (
                        <div className="divide-y">
                            {tabs.map((tab) => (
                                <MobileAccordion key={tab.id} tab={tab} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-primary/10 p-6">
                                <nav className="space-y-2">
                                    {tabs.map((tab) => (
                                        <Button
                                            key={tab.id}
                                            variant={activeTab === tab.id ? "default" : "ghost"}
                                            className="w-full justify-start text-left"
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            <span className="flex items-center">
                                                {tab.icon}
                                                <span className="ml-2">{tab.label}</span>
                                            </span>
                                            {activeTab === tab.id && <ChevronRight className="ml-auto" />}
                                        </Button>
                                    ))}
                                </nav>
                            </div>
                            <div className="md:w-2/3 p-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {tabContent[activeTab]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </section>
    );
};

const SkillCard = ({ title, skills }) => (
    <Card className="bg-primary/5">
        <CardHeader className="pb-2">
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="list-disc list-inside text-sm">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

export default function Portfolio() {
    const [mounted, setMounted] = useState(false);
    const [meme, setMeme] = useState(null);
    const [memeLoading, setMemeLoading] = useState(true);
    const [memeError, setMemeError] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
        mode: 'onBlur',
    });

    const skills = [
        'C++', 'Python', 'Dart', 'Flutter', 'HTML', 'CSS', 'React.js', 'Django', 'Flask',
        'Tensorflow', 'PyTorch', 'Scikit-Learn', 'SQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Git', 'GitHub'
    ];

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

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);

    useEffect(() => {
        fetchMeme();
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

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
        setDarkMode(!darkMode);
    };

    if (!mounted) return null;

    return (
        <>
            <ToastContainer />
            <div className={`min-h-screen font-mono ${darkMode ? 'dark' : ''}`}>
                <div className="transition-colors duration-300 bg-background text-foreground">
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

                        <AnimatedSectionHeader>Skills</AnimatedSectionHeader>
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6">
                                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                                        {skills.map((skill, index) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                            >
                                                <Badge variant="secondary" className="text-sm md:text-lg py-1 px-2 md:py-2 md:px-4">{skill}</Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.section>

                        <AnimatedSectionHeader>Projects</AnimatedSectionHeader>
                        <section>
                            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
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