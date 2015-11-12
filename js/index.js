/**
 * Created by YanYi on 11/12/2015.
 */

$(function() {

    myScroll2 = new IScroll('#wrapper', {
        scrollX: false, scrollY: true, mouseWheel: true, scrollbars: true, interactiveScrollbars: true, shrinkScrollbars: 'scale',
        fadeScrollbars: true
    });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

});

function autoResizeDiv()
{
    document.getElementById('scroll2').style.height = window.innerHeight +'px';
}
