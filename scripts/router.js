class Router {
    constructor() {
        this.routes = {};
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.loadRoute());
        document.addEventListener('DOMContentLoaded', () => this.loadRoute());
        document.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });
    }

    addRoute(path, template) {
        this.routes[path] = template;
    }

    async loadRoute() {
        const path = window.location.hash.replace('#', '') || '/';
        const template = this.routes[path] || this.routes['/404'];
        
        const response = await fetch(`components/${template}.html`);
        const html = await response.text();
        
        document.getElementById('content').innerHTML = html;
        AOS.refresh(); // Refresh animations
        this.setActiveLink(path);
    }

    navigateTo(url) {
        window.history.pushState({}, '', url);
        this.loadRoute();
    }

    setActiveLink(path) {
        document.querySelectorAll('[data-link]').forEach(link => {
            const linkPath = new URL(link.href).hash.replace('#', '');
            link.classList.toggle('nav-link-active', path === linkPath);
        });
    }
}

// Initialize router
const router = new Router();
router.addRoute('/', 'home');
router.addRoute('/projects', 'projects');
router.addRoute('/expertise', 'expertise');
router.addRoute('/experience', 'experience');
router.addRoute('/testimonials', 'testimonials');
router.addRoute('/blog', 'blog');
router.addRoute('/contact', 'contact');
router.addRoute('/404', '404');