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
  // Duotoned from avatar.jpg to the lamp's single light. Replace both when the photo changes.
  portrait: '/portrait-lit.jpg',
  siteUrl: 'https://amit-gavali.web.app',
  // Contact form delivery via Web3Forms (https://web3forms.com). Get a free
  // access key by entering your email there; it is a public key, safe to commit.
  web3formsKey: '0324f2d6-5b5d-436a-810c-43e73a70b576',
}

export const hero = {
  headline: 'Amit Gavali',
  role: 'GCP Cloud DevOps Engineer',
  certified: 'Google Cloud Certified Professional Cloud DevOps Engineer',
  lede:
    "I build and operate Google Cloud infrastructure for Deutsche Börse Group's C7-SCS securities clearing platform, via Tata Consultancy Services: a regulated, high-availability system, from Terraform and Kubernetes through change-managed release into production.",
}

// What he keeps running, in the dark beside the light. The last row is the
// platform itself and is the one thing on the page marked live.
export const board = [
  { system: 'GKE, Compute Engine, Filestore', domain: 'Google Cloud' },
  { system: 'Terraform Enterprise, Ansible', domain: 'Infrastructure as code' },
  { system: 'Jenkins, GitHub Actions', domain: 'CI/CD' },
  { system: 'Kubernetes, Red Hat OpenShift', domain: 'Orchestration' },
  { system: 'PostgreSQL 17 with mutual TLS', domain: 'Data' },
  { system: 'Prometheus, Grafana, ELK Stack', domain: 'Observability' },
  { system: 'IAM, PKI, RHEL 9 hardening', domain: 'Security' },
  {
    system: 'C7-SCS securities clearing platform',
    domain: 'Deutsche Börse Group, via TCS',
    current: true,
  },
]

// What Amit is responsible for and how he works it. Competence, not
// superlatives: no numbers here, and no invented job titles.
export const disciplines = [
  {
    discipline: 'Infrastructure as code',
    brief:
      'Provisions GCP with Terraform Enterprise and Ansible, then keeps every SDLC environment identical through a post-provisioning framework so drift never reaches production.',
    tools: 'Terraform, TFE, Ansible, Compute Engine',
  },
  {
    discipline: 'Build and release',
    brief:
      'Designs and runs high-availability Jenkins and GitHub Actions pipelines: build, test, release and controlled hotfix promotion into a change-managed production environment.',
    tools: 'Jenkins, GitHub Actions, GitLab CI, release management',
  },
  {
    discipline: 'Containers and orchestration',
    brief:
      'Deploys and operates trade-processing workloads on Kubernetes and OpenShift with Helm, including PostgreSQL 17 behind mutual TLS and namespace quota governance.',
    tools: 'Kubernetes, OpenShift, Docker, Podman, Helm, VPA',
  },
  {
    discipline: 'Observability and incident response',
    brief:
      'Instruments pipelines and production with Prometheus, Grafana, the ELK Stack and Cloud Monitoring, and works incidents from alert to root cause.',
    tools: 'Prometheus, Grafana, ELK, Cloud Monitoring, Cloud Logging',
  },
  {
    discipline: 'Security and access',
    brief:
      'Owns IAM and certificate management across the estate: mTLS, TLS/PKI trust chains, Linux hardening, and scripted access provisioning that keeps compliance auditable.',
    tools: 'Cloud IAM, mTLS, PKI, RHEL 9, Fedora, Python',
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
      'Built a post-provisioning framework that standardised 150+ Compute Engine instances and eliminated configuration drift across every SDLC environment.',
      'Designed and operated high-availability Jenkins and GitHub Actions pipelines covering build, test, release and controlled hotfix promotion into production.',
      'Deployed containerised trade-processing workloads on Kubernetes and OpenShift, including PostgreSQL 17 with mutual TLS and namespace quota governance.',
      'Led the Vertical Pod Autoscaler right-sizing initiative across all environments; wrote vpa-report.sh to flag over-provisioned workloads.',
      'Reclaimed 3 TB of Filestore capacity with SpaceWarden, a storage-governance service that enforces quotas and surfaces orphaned data.',
      'Implemented observability with Prometheus, Grafana, the ELK Stack and Cloud Monitoring, cutting detection and root-cause time for pipeline and production incidents.',
      'Wrote a Python utility that decrypts CIL trade messages and reconciles them against PostgreSQL records for transaction verification.',
      'Hardened RHEL 9 and Fedora fleet configuration across the build and test estate, resolving TLS trust-chain, internal repository and dependency failures.',
      'Automated DevOps toil with Python services exposing Jira, OpenShift and Jenkins operations as REST APIs, and scripted associate roll-on with IAM provisioning and pull-request creation.',
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

// `link` is shown only when the code is public. Client work has no link.
// `context` is the right-hand readout on the record: who it was for.
// `linkLabel` names what the link actually is when it differs from the record.
export const work = [
  {
    title: 'SpaceWarden',
    context: 'Deutsche Börse · via TCS',
    description:
      'Storage-governance service for GCP Filestore that enforces quotas and surfaces orphaned data; reclaimed 3 TB of capacity on the clearing platform.',
    tags: ['GCP Filestore', 'Go', 'Python'],
    link: 'https://github.com/aintyourcupoftea/SpaceWarden',
    linkLabel: 'Standalone Go scanner on GitHub',
  },
  {
    title: 'VPA right-sizing',
    context: 'Deutsche Börse · via TCS',
    description:
      'Vertical Pod Autoscaler initiative across every C7-SCS environment; vpa-report.sh flags over-provisioned workloads and normalises resource reporting.',
    tags: ['Kubernetes', 'Bash'],
  },
  {
    title: 'Trade reconciliation',
    context: 'Deutsche Börse · via TCS',
    description:
      'Python utility that decrypts CIL trade messages and reconciles them against PostgreSQL records inside a regulated financial system.',
    tags: ['Python', 'PostgreSQL'],
  },
  {
    title: 'DevOps automation APIs',
    context: 'Deutsche Börse · via TCS',
    description:
      'Python services exposing Jira, OpenShift and Jenkins operations as REST APIs: change requests, incidents, CronJob provisioning and CI triggers.',
    tags: ['REST', 'Jenkins', 'OpenShift'],
  },
  {
    title: 'PDF Digital Signer API',
    context: 'Independent',
    description:
      'Python/Flask REST service that merges and digitally signs PDF documents for administrative document workflows.',
    tags: ['Python', 'Flask', 'REST'],
    link: 'https://github.com/aintyourcupoftea/pdf-signer-flask',
    linkLabel: 'Source on GitHub',
  },
  {
    title: 'Bharat Leaf Lens',
    context: 'Independent',
    description:
      'Cross-platform mobile app running TensorFlow Lite and PyTorch models on-device to identify medicinal plants in India; no user images are stored. Published in IJRPR Vol. 5 Issue 5, 2024.',
    tags: ['Flutter', 'TensorFlow Lite', 'PyTorch'],
    link: 'https://github.com/aintyourcupoftea/BharatLeafLens',
    linkLabel: 'Source on GitHub',
  },
]

export const skills = [
  { group: 'Google Cloud', items: 'GKE, Compute Engine, Filestore, Cloud IAM, VPC Networking, Cloud Monitoring, Cloud Logging' },
  { group: 'Containers', items: 'Kubernetes, Red Hat OpenShift, Docker, Podman, Helm, Vertical Pod Autoscaler' },
  { group: 'Infrastructure as code', items: 'Terraform, Terraform Enterprise, Ansible, configuration management' },
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
  heading: "Today's top post on r/ProgrammerHumor.",
  caption: 'Fetched live by MemeFetchingRedditAPI, a small Python service I wrote and keep running.',
  imageUrl: 'https://memefetchingredditapi.onrender.com/',
  repo: 'https://github.com/aintyourcupoftea/MemeFetchingRedditAPI',
}

export const contact = {
  headline: 'Hiring for cloud infrastructure or SRE?',
  body: 'Send a note here, or reach me directly. Based in Pune, India, and open to remote and hybrid roles.',
}
