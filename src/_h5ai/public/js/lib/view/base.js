const {dom} = require('../util');

const SEL_ROOT = 'body';
const TPL_TOPBAR =
        `<div id="topbar">
            <div id="toolbar"></div>
            <div id="flowbar"></div>
            <a id="backlink" href="https://www.patreon.com/Biast12" target="_blank" title="Join my Patreon - https://www.patreon.com/Biast12">
                <div>Join my</div>
                <div>Patreon</div>
            </a>
            <a id="backlink2" href="https://discord.gg/ERFffj9Qs7" title="Join my Discord support server for updates on maintenance about the archive or if you need help">
                <img src="/_h5ai/public/images/ui/DiscordLogo.png" id="topBarImage" alt="DiscordSupportServer">
            </a>
            <a id="backlink2" href="/sync" title="Download the full files with Resilio Sync and keep it automatically updated">
                <img src="/_h5ai/public/images/ui/ResilioLogo.png" id="topBarImage" alt="ResilioSync">
            </a>
            <a id="backlink2" href="." title="The Archives">
                <img src="/_h5ai/public/images/favicon/archive_logo.png" id="topBarImage" alt="TheArchives">
            </a>
        </div>`;
const TPL_MAINROW =
        `<div id="mainrow">
            <div id="content"></div>
        </div>`;

const init = () => {
    const $root = dom(SEL_ROOT)
        .attr('id', 'root')
        .clr()
        .app(TPL_TOPBAR)
        .app(TPL_MAINROW);

    return {
        $root,
        $topbar: $root.find('#topbar'),
        $toolbar: $root.find('#toolbar'),
        $flowbar: $root.find('#flowbar'),
        $mainrow: $root.find('#mainrow'),
        $content: $root.find('#content')
    };
};

module.exports = init();
