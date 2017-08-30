$(document).ready(function() {
    var tabWrapper    = '.tab-container';
	var tabnavWrapper = '.tab-nav';
	var tabnavElement = 'div';
    var tabnavhighlightClass = 'active';

	var tabtargetWrapper = '.tab-content';
	var tabtargetElement = 'div';

    var tabactiveTimeline = 1000;
    var tabfadingTimeline = 1200;
	
	var mobileviewActive = 767;
	var mobileClickElement = 'h2';

    var mobileAccordian = 'true';
    var mobileAccordianType = 'collapse-all'; // collapse-all, collapse-odd
    var mobileAccordianFIrstLoad = 'all-open'; // all-open , open-one, , all-close
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
        if (!$(this).hasClass(tabnavhighlightClass)) {
			targetTabs.hide();
			$(tabnavWrapper + '>' + tabnavElement).removeClass(tabnavhighlightClass);

			displayTab.fadeIn(tabfadingTimeline);
			$(this).addClass(tabnavhighlightClass);
		}
    });


	var mobileTrigger = $(tabtargetWrapper + '> *[mobile-tab-trigger]');
	
	mobileTrigger.removeClass('active');
	$(tabtargetWrapper + '>' + tabtargetElement+'[tab-target]').removeClass('mobile-tab-visible');

	if(mobileAccordianFIrstLoad =='open-one'){
		var mobileAccordianActiveNav = $(tabtargetWrapper + '> *[mobile-tab-trigger="tab-item-'+mobileloadOpentabValue+'"]'); 
		var mobileAccordianActiveTab = $(tabtargetWrapper + '>' + tabtargetElement+'[tab-target="tab-item-'+mobileloadOpentabValue+'"]');
		mobileAccordianActiveNav.addClass('active');
		mobileAccordianActiveTab.addClass('mobile-tab-visible');
	}
	
	if(mobileAccordianFIrstLoad =='all-open'){
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
});

/* https://stackoverflow.com/questions/11047514/jquery-add-remove-class-when-window-width-changes*/

/*
jQuery.noConflict();
jQuery(document).ready(function(){
if (jQuery(window).width() < 760 ) {
	jQuery('#footer-cssmenu #footer-cssmenu-bar').removeClass("footer-menu");
	jQuery('#footer-cssmenu #footer-cssmenu-bar li').removeClass("spec-info");

	jQuery('#footer-cssmenu > ul > li:has(ul)').addClass("has-sub");

	jQuery('#footer-cssmenu > ul > li > a').click(function() {
		var checkElement = jQuery(this).next();

		jQuery('#footer-cssmenu li').removeClass('active');
		jQuery(this).closest('li').addClass('active');


		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			jQuery(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		}

		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			jQuery('#footer-cssmenu ul ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
		}

		if (checkElement.is('ul')) {
			return false;
		} else {
			return true;
		}
	});
}
});
*/