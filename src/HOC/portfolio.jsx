import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Loader2 } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AnimatedSectionHeader = ({ children }) => (
    <motion.h2
        className="text-3xl font-bold mb-8 text-center"
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
        <Card className="h-full bg-background-light hover:shadow-lg transition-all duration-300">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl text-foreground-light">
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
                <p className="text-base text-muted-foreground-light">{project.description}</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-foreground-light bg-muted-light">{tech}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    </motion.div>
);

const MemeSection = ({ meme, isLoading, error }) => (
    <Card className="bg-card-light hover:shadow-lg transition-shadow duration-300 h-full">
        <CardHeader>
            <CardTitle>Meme of the Day</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
            {isLoading ? (
                <div className="w-full h-40 bg-muted-light rounded-lg flex items-center justify-center">
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
        <Card className="bg-card-light hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle>Contact Me</CardTitle>
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

// Add this function outside of your component
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function Portfolio() {
    const [mounted, setMounted] = useState(false);
    const [meme, setMeme] = useState(null);
    const [memeLoading, setMemeLoading] = useState(true);
    const [memeError, setMemeError] = useState(null);
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
    }, []);

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

    if (!mounted) return null;

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen font-sans bg-background-light text-foreground-light">
                <div className="transition-colors duration-300">
                    <header className="sticky top-0 z-50 w-full border-b bg-background-light/95 backdrop-blur supports-[backdrop-filter]:bg-background-light/60">
                        <div className="container mx-auto flex h-14 items-center justify-between px-4">
                            <motion.span
                                className="font-bold text-xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Portfolio
                            </motion.span>
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
                                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Amit Gavali
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-muted-foreground-light mb-6"
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
                                </div>
                            </motion.div>
                        </section>

                        <AnimatedSectionHeader>About Me</AnimatedSectionHeader>
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-card-light hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Who I Am</h3>
                                        <p className="text-base md:text-lg">
                                            Hey there! I'm Amit, a passionate web enthusiast with an insatiable appetite for coding and a dream of becoming a full-stack maestro. I thrive on tackling complex challenges and bringing ambitious projects to life.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">What I Do</h3>
                                        <p className="text-base md:text-lg">
                                            With my sleeves rolled up and my mind buzzing with innovative ideas, I'm always ready to dive in and create something extraordinary. I believe in pushing the boundaries of what's possible with code, turning concepts into reality one line at a time.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">My Approach</h3>
                                        <p className="text-base md:text-lg">
                                            I approach each project with enthusiasm, creativity, and a commitment to excellence. Whether it's front-end finesse or back-end wizardry, I'm dedicated to crafting clean, efficient, and scalable solutions that make a real impact.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Let's Connect</h3>
                                        <p className="text-base md:text-lg">
                                            I'm always excited to collaborate, learn, and grow. If you're looking to bring your digital ideas to life or just want to geek out about the latest tech trends, let's connect! Together, we can push the limits of what we can achieve with the magic of code.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.section>

                        <AnimatedSectionHeader>Education</AnimatedSectionHeader>
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-card-light hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Engineering</h3>
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
                            <Card className="bg-card-light hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Community Volunteer</h3>
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
                            <Card className="bg-card-light hover:shadow-lg transition-shadow duration-300">
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
                            <p className="text-center text-base md:text-lg font-semibold tracking-wide text-muted-foreground-light">
                                Made with ❤️ by <span className="text-primary font-bold">Amit Gavali</span>
                            </p>
                        </motion.div>
                    </footer>
                </div>
            </div>
        </>
    )
}