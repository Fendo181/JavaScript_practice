var nachiguro = function() {
    
      // category-navigation, category-menu
      function mobileCategoryNavigation() {
        $('.js-ncgr-category-navigation__link').on('click', function(e) {
          e.preventDefault();
          $('.js-ncgr-category-menu-' + $(this).parent().data('category')).fadeIn(100);
          $('body').attr('style', 'overflow: hidden;');
        });
    
        $('.js-ncgr-category-menu__close-button').on('click', function() {
          $(this).parent().fadeOut(100);
          $('body').attr('style', 'overflow: auto;');
        });
    
        $('.js-ncgr-header__icon--search').on('click', function() {
          $('.js-ncgr-category-navigation__search').toggle();
          $('.js-ncgr-category-navigation__search input[type="search"]').focus();
        });
      }
    
      function desktopCategoryNavigation() {
        $('.js-ncgr-category-navigation__list-item').on({
          'mouseenter': function() {
            $('.js-ncgr-category-menu-' + $(this).data('category')).show();
          },
          'mouseleave': function() {
            $('.js-ncgr-category-menu-' + $(this).data('category')).hide();
          }
        });
    
        $('.js-ncgr-category-navigation__link').on('click', function(e) {
          e.preventDefault();
        });
      }
    
      function categoryNavigationReset() {
        $('.js-ncgr-category-navigation__link').off('click');
        $('.js-ncgr-category-navigation__list-item').off('mouseenter mouseleave');
        $('.js-ncgr-category-menu__close-button').off('click');
        $('.js-ncgr-header__icon--search').off('click');
        if (window.innerWidth > 768) {
          desktopCategoryNavigation();
        } else {
          mobileCategoryNavigation();
        }
      }
    
      categoryNavigationReset();
      $(window).on('resize', categoryNavigationReset);
    
      // truncate
      $('.js-ncgr-truncate__readmore').on('click', function() {
        $(this).hide();
        $(this).prev('.js-ncgr-truncate__contents').removeClass('ncgr-truncate__contents--hidden');
      });
    }
    