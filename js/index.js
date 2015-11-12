$(function() {
    console.log( "ready!" );
            window.onresize = autoResizeDiv;
        autoResizeDiv();

    myScroll2 = new IScroll('#scroll2', {
    scrollX: false, scrollY: true, mouseWheel: true, scrollbars: true, interactiveScrollbars: true, shrinkScrollbars: 'scale',
    fadeScrollbars: true
    });
});

        function autoResizeDiv()
        {
            document.getElementById('main').style.height = window.innerHeight +'px';
        }

