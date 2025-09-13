class IndexPage extends Component {
    path() {
        return ['/', "index"];
    }

    title() {
        return null;
    }

    view() {
        modify_select(this.path());

        return "<h1>Index</h1>";
    }
}

class SearchPage extends Component {
    path() {
        return "search";
    }

    title() {
        return null;
    }

    view() {
        modify_select(this.path());

        return "<h1>Search</h1>";
    }
}

class RepoPage extends Component {
    path() {
        return "repo";
    }

    title() {
        return null;
    }

    view() {
        modify_select(this.path());

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

/**
 * 修改选中 page<br>
 * 图省事直接将所有非目标的所有 page 按钮都设置成非选中状态
 *
 * @param elementId page 按钮 id
 * */
function modify_select(elementId) {
    for (let key in router.getPages()) {
        let id = key;

        if (id.startsWith('/'))
            id = key.replace('/', '')

        const element = document.getElementById(id);

        if (element == null)
            continue;

        if (id === elementId) {
            element.classList.add('active')
            continue;
        }

        element.classList.remove('active');
    }
}

const router = new Router();

router.registerPage(new IndexPage());
router.registerPage(new SearchPage());
router.registerPage(new RepoPage());
router.registerPage(new NFPage());