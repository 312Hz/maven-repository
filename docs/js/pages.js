/** 自定义父 Component 方便统一修改管理 */
class MiniComponent extends Component{
    active() {
        let sources = document.querySelectorAll(".sidebar_nav_item");

        for (let i = 0; i < sources.length; i++) {
            let element = sources[i];

            if (Array.isArray(this.path())) {
                if (this.path().includes(element.id))
                    element.classList.add('active');
                else
                    element.classList.remove('active');

                continue;
            }

            if (this.path() !== element.id)
                element.classList.remove('active');
            else
                element.classList.add('active');
        }
    }
}

class IndexPage extends MiniComponent {
    path() {
        return ['/', "index"];
    }

    title() {
        return null;
    }

    view() {
        super.active();

        return "<h1>Index</h1>";
    }
}

class SearchPage extends MiniComponent {
    path() {
        return "search";
    }

    title() {
        return null;
    }

    view() {
        super.active();

        return "<h1>Search</h1>";
    }
}

class RepoPage extends MiniComponent {
    path() {
        return "repo";
    }

    title() {
        return null;
    }

    view() {
        super.active();

        return "<h1>Repo</h1>";
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