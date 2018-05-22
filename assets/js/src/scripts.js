(function($) {
    /**
     * Dropdown menu
     */
    $(function() {
        $('.js-navbar__toggle').on('click', function () {
            $('.js-navbar').toggleClass('is-opened');
            $('.js-navbar__toggle').attr('aria-expanded', $('.js-navbar').hasClass('is-opened'));
            return false;
        });

        $('.js-navbar a').each(function(i, link) {
            link = $(link);

            link.on('click', function(e) {
                if(
                    link.parent().hasClass('has-submenu') &&
                    $('.js-navbar__toggle').attr('aria-expanded') === 'true' &&
                    link.parent().attr('aria-expanded') !== 'true'
                ) {
                    e.preventDefault();
                    link.parent().attr('aria-expanded', 'true');
                }
            });
        });
    });

    /**
     * iOS :hover fix
     */
    document.addEventListener("touchend", function() {});


    /**
     * Share buttons pop-up
     */
    $(function() {
        // link selector and pop-up window size
        var Config = {
            Link: ".js-share",
            Width: 500,
            Height: 500
        };

        // add handler links
        var slink = document.querySelectorAll(Config.Link);
        for (var a = 0; a < slink.length; a++) {
            slink[a].onclick = PopupHandler;
        }

        // create popup
        function PopupHandler(e) {
            e = (e ? e : window.event);
            var t = (e.target ? e.target : e.srcElement);
            // popup position
            var px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
                py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
            // open popup
            var link_href = t.href ? t.href : t.parentNode.href;
            var popup = window.open(link_href, "social",
                "width=" + Config.Width + ",height=" + Config.Height +
                ",left=" + px + ",top=" + py +
                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
            if (popup) {
                popup.focus();
                if (e.preventDefault) e.preventDefault();
                e.returnValue = false;
            }

            return !!popup;
        }
    });
})(jQuery);
