import { DOMComponent } from 'uturn'
import { show, hide } from '../../helpers'

class CategoryNav extends DOMComponent {
  constructor(el) {
    super(el)
    console.log("最初の中身");
    console.log(this);

    var categoryNavi = this.el.querySelectorAll(".js-ncgr-category-navigation__list-item")
    console.log(categoryNavi);
    
    for(var i=0; i<categoryNavi.length; i++) {

        categoryNavi[i].addEventListener("mouseover",function(){
            const categoryMenu = this.querySelector('.js-ncgr-category-menu-'+this.dataset.category);
            show(categoryMenu)
        });
        
        categoryNavi[i].addEventListener("mouseout",function(){
            const categoryMenu = this.querySelector('.js-ncgr-category-menu-'+this.dataset.category);
            hide(categoryMenu)
        });
    }
  }
}

export default CategoryNav
