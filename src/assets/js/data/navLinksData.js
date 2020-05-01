/**
 *  header-menu and sidebar menu data
 */

/* eslint-disable */
export default [
    {
       "menu_title": "Home",
       "type": "subMenu",
       "path": "#",
       "icon": "home",
       "child_routes": null  
      // [
      //     {
      //        "path": "/",
      //        "menu_title": "menu.HomeOne",
      //        "icon": "arrow_right_alt",
      //        "child_routes": null
      //     },
      //     {
      //        "path": "/home-two",
      //        "menu_title": "menu.HomeTwo",
      //        "icon": "arrow_right_alt",
      //        "child_routes": null
      //     },
      //     {
      //        "path": "/home-three",
      //        "menu_title": "menu.HomeThree",
      //        "icon": "arrow_right_alt",
      //        "child_routes": null
      //     }
      //  ]
    },
    {
       "menu_title": "shop",
       "type": "subMenu",
       "path": "#",
       "icon": "pages",
       "child_routes": [
          {
             "path": "/products",
             "menu_title": "product Detail",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/cart",
             "menu_title": "cart",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/check-out",
             "menu_title": "checkout",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/payment",
             "menu_title": "payment",
             "icon": "arrow_right_alt",
             "child_routes": null
          }
       ]
    },
    {
       "menu_title": "accessories",
       "type": "null",
       "path": "/shop",
       "icon": "party_mode",
       "child_routes": null
    },
    {
       "menu_title": "categories",
       "path": "#",
       "mega": true,
       "icon": "party_mode",
       "type": "mega",
       "child_routes": {
          'men': [
             {
                "path": "/shop",
                "menu_title": "t-shirts",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "jeans",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "shoes",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "wallet",
                "icon": "arrow_right_alt"
             }
          ],
          'women': [
             {
                "path": "/shop",
                "menu_title": "westernWear",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "ethnicWear",
                "icon": "arrow_right_alt"
             },
 
             {
                "path": "/shop",
                "menu_title": "sportsWear",
                "icon": "arrow_right_alt"
             }
          ],
          'gadgets': [
             {
                "path": "/shop",
                "menu_title": "headPhones",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "laptop",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "speaker",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "watch",
                "icon": "arrow_right_alt"
             },
          ],
          'accessories': [
             {
                "path": "/shop",
                "menu_title": "jewellery",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "belts",
                "icon": "arrow_right_alt"
             },
             {
                "path": "/shop",
                "menu_title": "handBag",
                "icon": "arrow_right_alt"
             }
          ]
       }
    },
    {
       "menu_title": "pages",
       "path": "#",
       "type": "subMenu",
       "icon": "pages",
       "child_routes": [
          {
             "path": "/about-us",
             "menu_title": "about Us",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/term-and-condition",
             "menu_title": "terms And Conditions",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/privacy-policy",
             "menu_title": "privacy Policy",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/faq",
             "menu_title": "faq",
             "icon": "arrow_right_alt",
             "child_routes": null
          }
          ,
          {
             "path": "/page-404",
             "menu_title": "404 Page",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/blogs/detail/1",
             "menu_title": "blog Detail",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "/account/profile",
             "menu_title": "user Profile",
             "icon": "arrow_right_alt",
             "child_routes": null
          },
          {
             "path": "#",
             "menu_title": "session",
             "icon": "arrow_right_alt",
             "child_routes": [
                {
                   "path": "/sign-in",
                   "menu_title": "sign In",
                   "icon": "arrow_right_alt"
                },
                {
                   "path": "/sign-up",
                   "menu_title": "register",
                   "icon": "arrow_right_alt"
                },
                {
                   "path": "/forget-password",
                   "menu_title": "forgotPassword",
                   "icon": "arrow_right_alt"
                },
                {
                   "path": "/thank-you",
                   "menu_title": "thank You",
                   "icon": "arrow_right_alt"
                }
             ]
          }
       ]
    },
    {
       "menu_title": "contact us",
      //  "path": "/contact-us",
       "path": "#",
       "icon": "perm_contact_calendar",
       "child_routes": null
    },
   //  {
   //     "menu_title": "menu.adminPanel",
   //     "path": "/admin-panel/admin",
   //     "icon": "perm_identity",
   //     "child_routes": null
   //  }
 ]
 