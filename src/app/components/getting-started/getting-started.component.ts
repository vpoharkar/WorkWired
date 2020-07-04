import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  constructor(private rote: Router) { }

  ngOnInit(): void {

    /**
     * Side menu functionality start
     */
    // Hide submenus
    $('#body-row .collapse').collapse('hide'); 
    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left'); 

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(function() {
        SidebarCollapse();
    });
    function getDeviceDimension() {
      return {
          width: $(window).width()
      };
    }
    function setSliderSss() {
      var dd = getDeviceDimension();
      if (dd.width < 992) {
        SidebarCollapse();
      }
    }
    $(window).on('load resize', function() {
      setSliderSss();
    })
    function SidebarCollapse () {
        $('.menu-collapsed').toggleClass('d-none');
        $('.sidebar-submenu').toggleClass('d-none');
        $('.submenu-icon').toggleClass('d-none');
        $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
        
        // Treating d-flex/d-none on separators with title
        var SeparatorTitle = $('.sidebar-separator-title');
        if ( SeparatorTitle.hasClass('d-flex') ) {
            SeparatorTitle.removeClass('d-flex');
        } else {
            SeparatorTitle.addClass('d-flex');
        }
        // Collapse/Expand icon
        $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    }
    /**
     * Side menu functionality end
     */
  }

}
