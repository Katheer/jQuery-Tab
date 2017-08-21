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
    var mobileAccordianType = 'collapse-all'; // collapse-all, collapse-odd
    var mobileAccordianFIrstLoad = 'open-one'; // all-open , open-one, , all-close
    var mobileloadOpentabValue = 0; // Starting from 0 value

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
        
        targetTabs.hide();
        $(tabnavWrapper + '>' + tabnavElement).removeClass(tabnavhighlightClass);

        displayTab.fadeIn(tabfadingTimeline);
        $(this).addClass(tabnavhighlightClass);
    });

    /*************** All clear ***************/
    if(mobileAccordian == 'true' ) {
        var mobileTrigger = $(tabtargetWrapper '*[mobile-tab-trigger]');
        
        mobileTrigger.removeClass('active');
        $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target]').removeClass('mobile-tab-visible');

        if(mobileAccordianFIrstLoad =='open-one'){
            var mobileAccordianActiveNav = $(tabtargetWrapper '*[mobile-tab-trigger="tab-item-'+mobileloadOpentabValue+'"]'); 
            var mobileAccordianActiveTab = $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+mobileloadOpentabValue+']');
            mobileAccordianActiveNav.addClass('active');
            mobileAccordianActiveTab.addClass('mobile-tab-visible');
        }
        
        if(mobileAccordianFIrstLoad =='all-open') {
            mobileTrigger.addClass('active');
            $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target]').addClass('mobile-tab-visible');
        }


        mobileTrigger.click(function () {
        	var curentMobileTabTrigger= $(this).attr('mobile-tab-trigger');
            var targetMobileTabs =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target]');
        	var displayMobileTab =  $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target='+curentMobileTabTrigger+']');
            
            targetMobileTabs.slideUp();
            mobileTrigger.removeClass(tabnavhighlightClass);

            displayMobileTab.slideDown();
            $(this).addClass(tabnavhighlightClass);
        });
    }
});