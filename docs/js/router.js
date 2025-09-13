class Component {
    path() {
        throw new Error('abstract method');
    }

    title() {
        throw new Error('abstract method');
    }

    view() {
        throw new Error('abstract method');
    }
}

class Router {
    constructor() {
        this.pages = {};

        window.addEventListener('hashchange', () => {
            this.onHashChange();
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                router.navigate(e.target.getAttribute('href').substring(1));
            }
        });

        window.onload = () => {
            router.onHashChange();
        };
    }

    getPages() {
        return this.pages;
    }

    registerPage(component) {
        if (typeof component.path() == 'string') {
            let path = component.path();

            if (!path.startsWith('/'))
                path = '/' + path;

            this.pages[path] = component;
            return;
        }

        // array
        for (let i = 0; i < component.path().length; i++) {
            let path = component.path()[i];

            if (!path.startsWith('/'))
                path = '/' + path;

            this.pages[path] = component;
        }
    }

    onHashChange() {
        const hash = window.location.hash.substring(1) || '/';

        let component = this.pages[hash] || this.pages['/'];

        if (component == null)
            return;

        this.render(component);
    }

    render(component) {
        document.getElementById('router').innerHTML = component.view();

        if (component.title() == null || component.title() === '')
            return;

        document.title = component.title()
    }

    navigate(path) {
        window.location.hash = path;
    }
}