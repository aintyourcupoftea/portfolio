// Every piece of copy on the site lives here. Edit this file, not the components.

export const profile = {
  name: 'Amit Gavali',
  role: 'GCP Cloud DevOps Engineer',
  location: 'Pune, India',
  email: 'amitbabangavali@gmail.com',
  github: 'https://github.com/aintyourcupoftea',
  linkedin: 'https://www.linkedin.com/in/aintyourcupoftea',
  resumeUrl: '/Amit_Gavali_Resume.pdf',
  avatar: '/avatar.jpg',
  siteUrl: 'https://amit-gavali.web.app',
  // Contact form delivery via Web3Forms (https://web3forms.com). Get a free
  // access key by entering your email there; it is a public key, safe to commit.
  web3formsKey: '0324f2d6-5b5d-436a-810c-43e73a70b576',
}

export const hero = {
  eyebrow: 'Google Cloud Certified Professional Cloud DevOps Engineer',
  headline: 'Google Cloud infrastructure, built to stay up.',
  subtext:
    'Terraform, Kubernetes, CI/CD and observability for a regulated, high-availability securities clearing platform.',
}

export const metrics = [
  {
    value: '150+',
    label:
      'Compute Engine instances standardised through a post-provisioning framework, with no configuration drift across environments.',
  },
  {
    value: '3 TB',
    label:
      'GCP Filestore capacity reclaimed by a storage-governance service that enforces quotas and surfaces orphaned data.',
  },
  {
    value: '100%',
    label:
      'Accuracy verifying decrypted trade messages against PostgreSQL records inside a regulated financial system.',
  },
]

// Set `current: true` on the role you are in now. To hide the employer name
// while keeping the work, blank out `company` and `client`.
export const experience = [
  {
    current: true,
    period: 'May 2025 - Present',
    title: 'DevOps Engineer',
    company: 'Tata Consultancy Services',
    client: 'Client: Deutsche Börse Group, C7-SCS securities clearing platform',
    summary:
      'Building and operating GCP infrastructure for a regulated, high-availability clearing system, from Terraform Enterprise and Ansible through change-managed production release.',
    highlights: [
      'Post-provisioning framework that standardised 150+ Compute Engine instances and eliminated configuration drift across every SDLC environment.',
      'High-availability Jenkins and GitHub Actions pipelines covering build, test, release and controlled hotfix promotion into production.',
      'Containerised trade-processing workloads on Kubernetes and OpenShift, including PostgreSQL 17 with mutual TLS and namespace quota governance.',
      'Led the Vertical Pod Autoscaler right-sizing initiative across all environments, delivering recurring annual cloud cost savings.',
      'Observability with Prometheus, Grafana, the ELK Stack and Cloud Monitoring, cutting detection and root-cause time for pipeline failures and incidents.',
    ],
    note: 'Awarded a Certificate of Appreciation by Deutsche Börse Group.',
  },
  {
    period: 'Jan 2025 - May 2025',
    title: 'Back End Developer',
    company: 'Tata Consultancy Services',
    client: 'Client: National Securities Depository Limited',
    summary:
      'Completed the TCS Digital Initial Learning Program (Core Java, JDBC, Servlets, SQL, Git) and supported NSDL account onboarding and knowledge transfer.',
    highlights: [],
  },
]

// `size` is the column span on the 3-column desktop grid (1 or 2). `tone` picks the tile
// background: 'accent', 'tint' or undefined for the plain surface.
export const work = [
  {
    title: 'SpaceWarden',
    description:
      'Storage-governance service for GCP Filestore. Enforces quotas, surfaces orphaned data and reclaimed 3 TB of capacity.',
    tags: ['GCP Filestore', 'Python', 'Storage governance'],
    size: 2,
    tone: 'accent',
  },
  {
    title: 'VPA right-sizing',
    description:
      'vpa-report.sh flags over-provisioned workloads and normalises resource reporting across every environment.',
    tags: ['Kubernetes', 'Bash'],
    size: 1,
  },
  {
    title: 'Trade reconciliation',
    description:
      'Python utility that decrypts CIL trade messages and reconciles them against PostgreSQL records with 100% accuracy.',
    tags: ['Python', 'PostgreSQL'],
    size: 1,
  },
  {
    title: 'DevOps automation APIs',
    description:
      'Python services exposing Jira, OpenShift and Jenkins operations as REST APIs: change requests, incidents, CronJobs and CI triggers.',
    tags: ['REST', 'Jenkins', 'OpenShift'],
    size: 2,
    tone: 'tint',
  },
]

export const skills = [
  { group: 'Google Cloud', items: 'GKE, Compute Engine, Filestore, Cloud IAM, VPC Networking, Cloud Monitoring, Cloud Logging' },
  { group: 'Containers', items: 'Kubernetes, Red Hat OpenShift, Docker, Podman, Helm, Vertical Pod Autoscaler' },
  { group: 'Infrastructure as Code', items: 'Terraform, Terraform Enterprise, Ansible, configuration management' },
  { group: 'CI/CD', items: 'Jenkins, GitHub Actions, GitLab CI, Git, GitHub Enterprise, release management' },
  { group: 'Observability and SRE', items: 'Prometheus, Grafana, ELK Stack, alerting, incident management, root cause analysis' },
  { group: 'Security', items: 'IAM, mTLS, TLS/PKI certificate management, access control, Linux hardening' },
  { group: 'Languages and systems', items: 'Python, Bash, Go, SQL, Java, Linux (RHEL 9, Fedora), PostgreSQL, REST APIs' },
]

export const certification = {
  name: 'Google Cloud Certified Professional Cloud DevOps Engineer',
  issuer: 'Google Cloud',
  date: 'Sep 2026',
  link: 'https://www.credly.com/badges/8ed5b25a-8643-4ee0-9a83-5a896b2306cf/',
}

export const education = {
  degree: 'B.E. Computer Engineering',
  school: "PES's Modern College of Engineering, Pune",
  detail: 'Graduated 2024, CGPA 8.47',
}

export const meme = {
  heading: "Today's top post, straight from the front page.",
  caption: 'Fetched live by MemeFetchingRedditAPI, a small Python service I wrote.',
  imageUrl: 'https://memefetchingredditapi.onrender.com/',
  repo: 'https://github.com/aintyourcupoftea/MemeFetchingRedditAPI',
}

export const contact = {
  headline: 'Hiring for cloud infrastructure or SRE?',
  body: 'Send a note here, or reach me directly. Based in Pune, India, and open to remote and hybrid roles.',
}
