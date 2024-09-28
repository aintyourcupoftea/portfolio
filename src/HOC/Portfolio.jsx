import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const MotionCard = motion(Card);

export default function ArtisticPortfolio() {
    const [darkMode, setDarkMode] = useState(true);
    const [meme, setMeme] = useState(null);

    const skills = [
        'C++', 'Python', 'Dart', 'Flutter', 'HTML', 'CSS', 'React.js', 'Django', 'Flask',
        'Tensorflow', 'PyTorch', 'Scikit-Learn', 'SQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Git', 'GitHub'
    ];

    const projects = [
        {
            title: 'Bharat Leaf Lens',
            description: 'Flutter-based medicinal plant recognition app using Tflite and PyTorch.',
            link: 'https://github.com/yourusername/bharat-leaf-lens',
        },
        {
            title: 'PDF Signer API',
            description: 'API to sign PDFs with uploaded signature images.',
            link: 'https://github.com/yourusername/pdf-signer-api',
        },
        {
            title: 'Home Automation using ESP32',
            description: 'Smart home project with remote control of switches via web interface.',
            link: 'https://github.com/yourusername/esp32-home-automation',
        },
        {
            title: 'Student Database Management System',
            description: 'GUI-driven system using HTML, CSS, JavaScript, PHP, and MySQL.',
            link: 'https://github.com/yourusername/student-dbms',
        },
    ];

    useEffect(() => {
        fetchMeme();
    }, []);

    const fetchMeme = async () => {
        try {
            const response = await fetch('https://memefetchingredditapi.onrender.com');
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setMeme(imageUrl);
        } catch (error) {
            console.error('Error fetching meme:', error);
        }
    };

    return (
        <div className={`min-h-screen font-sans ${darkMode ? 'dark' : ''}`}>
            <div className="bg-gradient-to-br from-background to-secondary text-foreground transition-colors duration-300">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container max-w-4xl mx-auto flex h-14 items-center justify-between px-4">
                        <motion.span
                            className="font-bold text-2xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Amit Gavali
                        </motion.span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-9 px-0"
                        >
                            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </header>

                <main className="container max-w-4xl mx-auto py-12 px-4 space-y-24">
                    <motion.section
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Avatar className="h-40 w-40 mx-auto mb-6 border-4 border-primary">
                            <AvatarImage src="https://img.playbook.com/-PDu_bRrRfxAxJ7gxiYZ2Y8RvY5dUdgoKk1KWi8PUes/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VjYzkzMjEw/LTk0MTctNDQ4ZC04/NzA0LTAxNWFlOTU2/ZGE0MA" alt="Amit Gavali" />
                            <AvatarFallback>AG</AvatarFallback>
                        </Avatar>
                        <h1 className="text-5xl font-bold tracking-tight mb-2">Amit Gavali</h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            Programmer | Problem Solver | Avid Learner
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Button variant="outline" size="icon" asChild>
                                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href="https://www.linkedin.com/in/aintyourcupoftea" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href="mailto:amitbabangavali@gmail.com">
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">Email</span>
                                </a>
                            </Button>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <MotionCard>
                            <CardHeader>
                                <CardTitle>About Me</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Hey, it's Amit - a web enthusiast with a burning passion for coding and a heart set on becoming a full-stack master!
                                    I thrive on taking on complex challenges and daunting projects.
                                </p>
                                <p className="mb-4">
                                    With my sleeves rolled up and my brain buzzing with new ideas, I'm always ready to dive in and create something amazing.
                                    Let's connect and push the limits of what we can achieve with the magic of code!
                                </p>
                                <h3 className="text-lg font-semibold mb-2">Education</h3>
                                <p>
                                    Bachelor of Engineering in Computer Engineering<br />
                                    Progressive Education Society's Modern College of Engineering, Pune<br />
                                    CGPA: 8.47 | Batch of 2024
                                </p>
                            </CardContent>
                        </MotionCard>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <MotionCard>
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            <Badge variant="secondary">{skill}</Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </MotionCard>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Projects</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {projects.map((project, index) => (
                                <MotionCard
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            {project.title}
                                            <Button variant="ghost" size="icon" asChild>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4" />
                                                    <span className="sr-only">View project</span>
                                                </a>
                                            </Button>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                </MotionCard>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <MotionCard>
                            <CardHeader>
                                <CardTitle>Contact Me</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name">Name</label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email">Email</label>
                                        <Input id="email" placeholder="Your email" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message">Message</label>
                                        <Textarea id="message" placeholder="Your message" />
                                    </div>
                                    <Button type="submit">Send Message</Button>
                                </form>
                            </CardContent>
                        </MotionCard>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Meme of the Day</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {meme ? (
                                    <motion.div
                                        className="w-full h-[600px] flex items-center justify-center overflow-hidden rounded-lg"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img
                                            src={meme}
                                            alt="Random Meme"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                ) : (
                                    <div className="w-full h-[300px] bg-muted rounded-lg flex items-center justify-center">
                                        <Loader2 className="h-8 w-8 animate-spin" />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.section>
                </main>

                <footer className="border-t py-6 mt-12">
                    <div className="container max-w-4xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4">
                        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                            © 2024 Amit Gavali. All rights reserved.
                        </p>
                        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                            Built with React, Tailwind, Framer Motion, and ❤️
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}