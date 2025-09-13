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
    }

    registerPage(component) {
        let path = component.path();

        if (!path.startsWith())
            path = '/' + path;

        this.pages[path] = component;
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
        document.title = component.title()
    }
}

class SearchPage extends Component {
    path() {
        return "search";
    }

    title() {
        return "搜索文件";
    }

    view() {
        return "<h1>Hello World</h1>";
    }
}

class NFPage extends Component {
    path() {
        return "404";
    }

    title() {
        return "404";
    }

    view() {
        return "<h1>404 Not Found</h1>";
    }
}

const router = new Router();

router.registerPage(new SearchPage());
router.registerPage(new NFPage());

window.onload = () => {
    router.onHashChange();
};