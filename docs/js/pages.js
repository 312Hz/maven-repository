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

        return "<div class=\"view_header\">" +
            "<p class=\"view_title\">指南</p>" +
            "</div>" +
            "<div class=\"next_table\"></div>";
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

        return "<div class=\"view_header\">" +
            "<p class=\"view_title\">文件搜索</p>" +
            "</div>" +
            "<div class=\"next_table\"></div>";
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

        return '\t<style type="text/css">\n' +
            '\t\t.table_head_col {\n' +
            '\t\t\tfont-size: 12px;\n' +
            '\t\t}\n' +
            '\t</style>' +
            '<div class="view_header">\n' +
            '\t<p class="view_title">仓库文件</p>\n' +
            '</div>\n' +
            '<div class="next_table" style="margin-top: 30px">\n' +
            '\t<table style="width: 100%;">\n' +
            '\t\t<thead>\n' +
            '\t\t\t<tr>\n' +
            '\t\t\t\t<td class="table_head_col table_head_repo" style="width: 40%;">Repository</td>\n' +
            '\t\t\t\t<td class="table_head_col table_head_path" style="width: 50%;">Path</td>\n' +
            '\t\t\t\t<td class="table_head_col table_head_ops" style="width: 10%;">操作</td>\n' +
            '\t\t\t</tr>\n' +
            '\t\t</thead>\n' +
            '\t\t<tbody>\n' +
            '\t\t</tbody>\n' +
            '\t</table>\n' +
            '</div>';
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