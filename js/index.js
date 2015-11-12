$(function() {
    console.log( "ready!" );
    $.getScript('iscroll.js');

    myScroll2 = new IScroll('#scroll2', {
    scrollX: false, scrollY: true, mouseWheel: true, scrollbars: true, interactiveScrollbars: true, shrinkScrollbars: 'scale',
    fadeScrollbars: true
    });
});
