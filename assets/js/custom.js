$(document).ready(function() {
    var tabWrapper    = '.tab-container';
	var tabnavWrapper = '.tab-nav';
	var tabnavElement = 'div';
    var tabnavhighlightClass = 'active';

	var tabtargetWrapper = '.tab-content';
	var tabtargetElement = 'div';

    var tabactiveTimeline = 1000;
    var tabfadingTimeline = 1200;

    $(tabnavWrapper + '>' + tabnavElement).each(function (index) {
        $(this).attr('tab-trigger', 'tab-item-' + index);
    });

    $(tabtargetWrapper + '>' + tabtargetElement).each(function (index) {
        $(this).attr('tab-target', 'tab-item-' + index);
    });

    $(tabnavWrapper + '>' + tabnavElement+':first-child').addClass(tabnavhighlightClass);

    function activeTabSection(){
        $(tabWrapper).addClass('tab-active');
    }

    setTimeout(activeTabSection, tabactiveTimeline);

    $(tabnavWrapper + '>' + tabnavElement).click(function () {
    	var curentTabTrigger= $(this).attr('tab-trigger');
        var targetTabs =  $(tabtargetWrapper + '>' + tabtargetElement);
    	var displayTab =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+curentTabTrigger+']');
        
        targetTabs.hide();
        $(tabnavWrapper + '>' + tabnavElement).removeClass(tabnavhighlightClass);

        displayTab.fadeIn(tabfadingTimeline);
        $(this).addClass(tabnavhighlightClass);
    });
});