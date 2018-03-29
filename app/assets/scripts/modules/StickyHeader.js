import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();

    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction === "down") {
                    that.siteHeader.addClass("site-header--dark");                    
                } else {
                    that.siteHeader.removeClass("site-header--dark");                    
                }
            }
        });
    }

    createPageSectionWaypoints() {
        that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function() {
                    var matchingHandlerLink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchingHandlerLink).addClass("is-current-link");
                }
            })
        })
    }
}

export default StickyHeader; 