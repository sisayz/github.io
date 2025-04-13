// Projects (Innovations)
const projects = [
    {
        title: "AutoML Framework",
        description: "Neural architecture search for edge devices",
        tech: ["Python", "TensorFlow Lite", "ONNX"],
        image: "assets/images/neural-arch.avif",
        link: "#"
    },
    {
        title: "Real-time Data Pipeline",
        description: "Kafka-based ETL system with ML monitoring",
        tech: ["Apache Kafka", "Spark", "Airflow"],
        image: "assets/images/data-pipeline.jpeg",
        link: "#"
    },
    {
        title: "AutoML Framework",
        description: "Neural architecture search for edge devices",
        tech: ["Python", "TensorFlow Lite", "ONNX"],
        image: "assets/images/neural-arch.avif",
        link: "#",
        demo: "https://codepen.io/your-demo"
    },
    {
        title: "Real-time Data Pipeline",
        description: "Kafka-based ETL system with ML monitoring",
        tech: ["Apache Kafka", "Spark", "Airflow"],
        image: "assets/images/data-pipeline.jpeg",
        link: "#"
    }
];

// Skills (Stack)
const skills = [
    { 
        name: "TensorFlow", 
        level: 98,
        icon: "assets/images/tensorflow-icon.svg"
    },
    {
        name: "MLOps",
        level: 95,
        icon: "assets/images/mlops-icon.png"
    }
];

// Experience (Journey)
const experience = [
    {
        company: "Lead AI Architect - Tech Corp (2022-Present)",
        role: "Designed cloud ML infrastructure for 10M+ users",
        logo: "assets/images/techcorp-logo.png"
    },
    {
        company: "ML Engineer - AI Startup (2019-2022)",
        role: "Built predictive maintenance system with 99.9% accuracy",
        logo: "assets/images/startup-logo.jpg"
    },
    {
        position: "Chief AI Architect",
        company: "DeepMind Technologies",
        duration: "2020-Present",
        achievements: [
            "Led team of 15 engineers in developing enterprise ML platform",
            "Reduced model deployment time from 2 weeks to 4 hours",
            "Architected fraud detection system saving $12M annually"
        ]
    },
    {
        company: "Tech Corp",
        position: "Lead AI Architect",
        duration: "2022-Present",
        logo: "assets/images/techcorp-logo.png",
        achievements: [
            "Designed cloud ML infrastructure for 10M+ users",
            "Reduced model deployment time by 85%",
            "Led team of 15 ML engineers"
        ]
    }
];

// Testimonials (Validation)
const testimonials = [
    {
        text: "Their architecture reduced our inference latency by 70%",
        author: "CTO, Fortune 500 Company",
        avatar: "assets/images/avatar1.jpeg"
    },
    {
        text: "Most scalable ML system we've ever implemented",
        author: "Director of AI, Healthcare Firm",
        avatar: "assets/images/avatar2.jpeg"
    }
];

// Blog (Insights)
const blogPosts = [
    {
        title: "Scaling Transformers to 1B+ Parameters",
        preview: "Lessons from deploying large language models...",
        image: "assets/images/llm-article.jpeg",
        date: "May 2024"
    },
    {
        title: "MLOps Best Practices",
        preview: "CI/CD pipelines for machine learning...",
        image: "assets/images/mlops-article.jpg",
        date: "April 2024"
    },
    {
        title: "Optimizing GPU Clusters for LLMs",
        content: "Detailed analysis of memory optimization techniques...",
        tags: ["LLM", "GPU", "Optimization"],
        readTime: "8 min"
    }
];

// Initialize AOS
AOS.init({
    duration: 1000,
    once: false
});

// Content Loaders
function loadContent() {
    loadProjects();
    loadSkills();
    loadExperience();
    loadTestimonials();
    loadBlogPosts();
}

// Project Loader
function loadProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        container.innerHTML += `
            <div class="project-card" data-aos="flip-up">
                <img src="${project.image}" class="project-image" alt="${project.title}">
                <div class="p-4">
                    <h3 class="text-xl font-bold text-cyan-400 mb-2">${project.title}</h3>
                    <p class="text-gray-300 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tech.map(t => `<span class="px-3 py-1 bg-gray-700 rounded-full text-sm">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
}

// Skill Loader
function loadSkills() {
    const container = document.getElementById('skills-container');
    skills.forEach(skill => {
        container.innerHTML += `
            <div class="skill-item bg-gray-800/50 p-4 rounded-lg text-center">
                <img src="${skill.icon}" class="skill-icon mx-auto" alt="${skill.name}">
                <h3 class="text-lg font-bold text-cyan-400 mt-2">${skill.name}</h3>
                <div class="radial-progress text-cyan-400 mt-4" style="--value:${skill.level}">
                    ${skill.level}%
                </div>
            </div>
        `;
    });
}

// Experience Loader
function loadExperience() {
    const container = document.getElementById('timeline-container');
    experience.forEach(exp => {
        container.innerHTML += `
            <div class="timeline-item bg-gray-800/50 p-6 rounded-xl border border-gray-700" data-aos="fade-up">
                <div class="flex items-center mb-4">
                    <img src="${exp.logo}" class="w-12 h-12 object-contain mr-4" alt="${exp.company}">
                    <h3 class="text-xl font-bold text-cyan-400">${exp.company}</h3>
                </div>
                <p class="text-gray-300">${exp.role}</p>
                ${exp.achievements ? `
                <ul class="mt-4 space-y-2">
                    ${exp.achievements.map(a => `<li class="text-gray-400 flex items-center">
                        <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>${a}
                    </li>`).join('')}
                </ul>` : ''}
            </div>
        `;
    });
}

// Testimonial Loader
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    testimonials.forEach(testimonial => {
        container.innerHTML += `
            <div class="testimonial-card bg-gray-800/50 p-6 rounded-xl border border-cyan-400/20">
                <div class="flex items-center mb-4">
                    <img src="${testimonial.avatar}" class="testimonial-avatar" alt="${testimonial.author}">
                    <h4 class="text-cyan-400 font-bold">${testimonial.author}</h4>
                </div>
                <p class="text-gray-300 italic">"${testimonial.text}"</p>
            </div>
        `;
    });
}

// Blog Loader
function loadBlogPosts() {
    const container = document.getElementById('blog-container');
    blogPosts.forEach(post => {
        container.innerHTML += `
            <a href="${post.link}" class="blog-card">
                <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 h-full">
                    <img src="${post.image}" class="w-full h-48 object-cover rounded-lg mb-4" alt="${post.title}">
                    <h3 class="text-xl font-bold text-cyan-400 mb-2">${post.title}</h3>
                    <p class="text-gray-400 text-sm mb-2">${post.date}</p>
                    <p class="text-gray-300">${post.preview}</p>
                </div>
            </a>
        `;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadContent);