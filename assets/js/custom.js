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

	$(tabtargetWrapper + '>' + tabtargetElement).each(function (index) {
        $(this).attr('tab-target', 'tab-item-' + index);
    });
	
    $(tabnavWrapper + '>' + tabnavElement).each(function (index) {
        $(this).attr('tab-trigger', 'tab-item-' + index);
		var eachlinkAttr = $(this).attr('tab-trigger');
		var eachlinkName = $(this).text();
		var eachTabElement =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+eachlinkAttr+']');	
		
		if(mobileClickElement == '') {
			var mobileAddingLink = '<div mobile-tab-trigger='+eachlinkAttr+'> <h2>'+ eachlinkName +'</h2> </div>';
		}
		else {
			var mobileAddingLink = '<div mobile-tab-trigger='+eachlinkAttr+'> <'+ mobileClickElement +'>'+ eachlinkName +'</'+ mobileClickElement +'> </div>';
		}
		
		eachTabElement.before(mobileAddingLink);
    });

    /*
		$(tabtargetWrapper + '>' + tabtargetElement + 'div[mobile-tab-trigger]').each(function (index) {
			var mobilelinkAttr = $(this).attr('mobile-tab-trigger');	
			var mobileTabElement = tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+mobilelinkAttr+']';
			
			//$(this).insertBefore(mobileTabElement );
			$(this).addClass('x');
		}); 
	*/
	

    $(tabnavWrapper + '>' + tabnavElement+':first-child').addClass(tabnavhighlightClass);

    function activeTabSection(){
        $(tabWrapper).addClass('tab-active');
    }

    setTimeout(activeTabSection, tabactiveTimeline);

    var mobileTrigger = $('*[mobile-tab-trigger]');

    $(tabnavWrapper + '>' + tabnavElement).click(function () {
    	var curentTabTrigger= $(this).attr('tab-trigger');
        var targetTabs =  $(tabtargetWrapper + '>' + tabtargetElement);
    	var displayTab =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+curentTabTrigger+']');
        
        targetTabs.hide();
        $(tabnavWrapper + '>' + tabnavElement).removeClass(tabnavhighlightClass);

        displayTab.fadeIn(tabfadingTimeline);
        $(this).addClass(tabnavhighlightClass);
    });

    $mobileTrigger.click(function () {
    	var curentMobileTabTrigger= $(this).attr('mobile-tab-trigger');
        var targetMobileTabs =  $(tabtargetWrapper + '>' + tabtargetElement);
    	var displayMobileTab =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+curentMobileTabTrigger+']');
        
        targetMobileTabs.slideUp();
        $mobileTrigger.removeClass(tabnavhighlightClass);

        targetMobileTabs.slideDown();
        $(this).addClass(tabnavhighlightClass);
    });
});