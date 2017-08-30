$(document).ready(function() {
    var tabWrapper    = '.tab-container';
	var tabnavWrapper = '.tab-nav';
	var tabnavElement = 'div';
    var tabnavhighlightClass = 'active';

	var tabtargetWrapper = '.tab-content';
	var tabtargetElement = 'div';

    var tabactiveTimeline = 1000;
    var tabfadingTimeline = 1200;
	
	var mobileClickElement = 'h2';

    var mobileAccordian = 'true';

	$(tabtargetWrapper + '>' + tabtargetElement).each(function (index) {
        $(this).attr('tab-target', 'tab-item-' + index);
    });
	
    $(tabnavWrapper + '>' + tabnavElement).each(function (index) {
        $(this).attr('tab-trigger', 'tab-item-' + index);
        var eachlinkAttr = $(this).attr('tab-trigger');
        var eachlinkName = $(this).text();
        if(mobileAccordian == 'true' ) {
    		var eachTabElement =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+eachlinkAttr+']');	    		
    		if(mobileClickElement == '') {
    			var mobileAddingLink = '<div mobile-tab-trigger='+eachlinkAttr+'> <h2>'+ eachlinkName +'</h2> </div>';
    		}
    		else {
    			var mobileAddingLink = '<div mobile-tab-trigger='+eachlinkAttr+'> <'+ mobileClickElement +'>'+ eachlinkName +'</'+ mobileClickElement +'> </div>';
    		}
            eachTabElement.before(mobileAddingLink);
        }
    });

    $(tabnavWrapper + '>' + tabnavElement+':first-child').addClass(tabnavhighlightClass);

    function activeTabSection(){
        $(tabWrapper).addClass('tab-active');
    }

    setTimeout(activeTabSection, tabactiveTimeline);

    $(tabnavWrapper + '>' + tabnavElement).click(function () {
    	var curentTabTrigger= $(this).attr('tab-trigger');
        var targetTabs =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target]');
    	var displayTab =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+curentTabTrigger+']');
        if (!$(this).hasClass(tabnavhighlightClass)) {
			targetTabs.hide();
			$(tabnavWrapper + '>' + tabnavElement).removeClass(tabnavhighlightClass);

			displayTab.fadeIn(tabfadingTimeline);
			$(this).addClass(tabnavhighlightClass);
		}
    });


	var mobileTrigger = $(tabtargetWrapper + '*[mobile-tab-trigger]');
	
	
	mobileTrigger.click(function () {
		alert(curentMobileTabTrigger);
	}); 
});