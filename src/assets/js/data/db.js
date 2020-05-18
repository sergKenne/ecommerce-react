
const db = {

    "products": [
            {
                "id": 1,
                "title": "men belt",
                "img": "image/accessories_belt.jpg",
                "price": 10,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "accessories",
                "tabs": ["image/mb1.jpg", "image/mb2.jpg", "image/mb3.jpg", "image/mb4.jpg"]
            
            },
            {
                "id": 2,
                "title": "bag laptop",
                "img": "image/accessories_bag-laptop.jpg",
                "price": 50.7,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "accessories",
                "tabs": ["image/bl1.jpg", "image/bl2.jpg", "image/bl3.jpg", "image/bl4.jpg"]
            
            },
            {
                "id": 3,
                "title": "steel chain",
                "img": "image/accessories_chain.jpg",
                "price": 50,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "accessories",
                "tabs": ["image/sc1.jpg", "image/sc2.jpg", "image/sc3.jpg", "image/sc4.jpg", "image/sc5.jpg"]
            
            },
            {
                "id": 4,
                "title": "summer goggles",
                "img": "image/accessories_goggles.jpg",
                "price": 51,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "accessories",
                "tabs": ["image/sg1.jpg", "image/sg2.jpg", "image/sg3.jpg", "image/sg4.jpg", "image/sg5.jpg"]
            
            },
            {
                "id": 5,
                "title": "men prese",
                "img": "image/accessories_men-perse.jpg",
                "price": 51,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "accessories",
                "tabs": ["image/mp1.jpg", "image/mp2.jpg", "image/mp3.jpg", "image/mp4.jpg", "image/mp5.jpg"]
            
            },

    
            {
                "id": 6,
                "title": "digital swatch",
                "img": "image/gadgets_digital-watch.jpg",
                "price": 51,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "gadgets",
                "tabs": ["image/m1.jpg", "image/m2.jpg", "image/m3.jpg", "image/m4.jpg", "image/m5.jpg"]
            
            },
            {
                "id": 7,
                "title": "black smartphone",
                "img": "image/gadgets_black-smartphone.jpg",
                "price": 51,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "gadgets",
                "tabs": ["image/s1.jpg", "image/s2.jpg", "image/s3.jpg", "image/s4.jpg"]
            
            },
            {
                "id": 8,
                "title": "circular speaker",
                "img": "image/gadgets_circular-speaker.jpg",
                "price": 81.5,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "gadgets",
                "tabs": ["image/c1.jpg", "image/c2.jpg", "image/c3.jpg", "image/c4.jpg"]
            
            },
            {
                "id": 9,
                "title": "mecanic watch",
                "img": "image/gadgets_mecanic-watch.jpg",
                "price": 101,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "gadgets",
                "tabs": ["image/w1.jpg", "image/w2.jpg", "image/w3.jpg", "image/w4.jpg"]
            
            },
            {
                "id": 10,
                "title": "wired headphone",
                "img": "image/gadgets_wired-headphone.jpg",
                "price": 48,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "gadgets",
                "tabs": ["image/h1.jpg", "image/h2.jpg", "image/h3.jpg", "image/h4.jpg"]
            
            },


            // {
            //     "id": 11,
            //     "title": "black t-shirt",
            //     "img": "image/men_black-t-shirt.jpg",
            //     "price": 48,
            //     "quantity": 1,
            //     "isFreeShipping": true,
            //     "type": "men",
            //     "tabs": ["image/ts1.jpg", "image/ts2.jpg", "image/ts3.jpg", "image/ts4.jpg", "image/ts5.jpg"]
            
            // },
            {
                "id": 12,
                "title": "black t-shirt",
                "img": "image/men_black-t-shirt.jpg",
                "price": 28,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "men",
                "tabs": ["image/bj1.jpg", "image/bj2.jpg", "image/bj3.jpg", "image/bj4.jpg", "image/bj5.jpg"]
            
            },
            {
                "id": 13,
                "title": "men white air",
                "img": "image/men_white-air.jpg",
                "price": 48,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "men",
                "tabs": ["image/wa1.jpg"] 
            
            },
            {
                "id": 14,
                "title": "denim pullover",
                "img": "image/men_denim-pullover.jpg",
                "price": 28,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "men",
                "tabs": ["image/dp1.jpg", "image/dp2.jpg", "image/dp3.jpg", "image/dp4.jpg", "image/dp5.jpg"]
            
            },
            {
                "id": 15,
                "title": "vintage jean",
                "img": "image/men_vintage-jean.jpg",
                "price": 48,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "men",
                "tabs": ["image/vj1.jpg", "image/vj2.jpg", "image/vj3.jpg", "image/vj4.jpg", "image/vj5.jpg"]
            
            },
            {
                "id": 16,
                "title": "super jaket",
                "img": "image/men_super-jaket.jpg",
                "price": 28,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "men",
                "tabs": ["image/sj1.jpg", "image/sj2.jpg", "image/sj3.jpg", "image/sj4.jpg", "image/sj5.jpg"]
            
            },


            {
                "id": 17,
                "title": "black dress",
                "img": "image/women_black-dress.jpg",
                "price": 48,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "women",
                "tabs": ["image/bd1.jpg", "image/bd2.jpg", "image/bd3.jpg", "image/bd4.jpg", "image/bd5.jpg"]
            
            },
            {
                "id": 18,
                "title": "blue denim",
                "img": "image/women_blue-denim.jpg",
                "price": 28,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "women",
                "tabs": ["image/bde1.jpg", "image/bde2.jpg", "image/bde3.jpg", "image/bde4.jpg", "image/bde5.jpg"]
            
            },
            {
                "id": 19,
                "title": "white t-shirt",
                "img": "image/women_white-t-shirt.jpg",
                "price": 48,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "women",
                "tabs": ["image/wt1.jpg", "image/wt2.jpg", "image/wt3.jpg", "image/wt4.jpg", "image/wt5.jpg"]
            
            },
            {
                "id": 20,
                "title": "black dress",
                "img": "image/women_black-dress.jpg",
                "price": 48,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "women",
                "tabs": ["image/bd1.jpg", "image/bd2.jpg", "image/bd3.jpg", "image/bd4.jpg", "image/bd5.jpg"]
            
            },
            {
                "id": 21,
                "title": "red strip dress",
                "img": "image/women_red-strip-dress.jpg",
                "price": 28,
                "quantity": 1,
                "isFreeShipping": true,
                "type": "women",
                "tabs": ["image/rsd1.jpg", "image/rsd2.jpg", "image/rsd3.jpg", "image/rsd4.jpg", "image/rsd5.jpg"]
            
            },
           
        
        ],
    "electronic": [

            {
                "id": 22,
                //"type": "electronic",
                "brand": "Amazon",
                "title": "Fire TV Stick with Alexa Voice Remote - Black",
                "img": "image/amazon_1.webp",
                "tabs": ["image/wa1.jpg"] ,
                "price": 39.99,
                "quantity": 1,
                "category": "audio"
            },
            {
                "id": 23,
                //"type": "electronic",
                "brand": "Google",
                "title": "Chromecast - Black",
                "img": "image/google_1.webp",
                "tabs": ["image/wa1.jpg"] ,
                "price": 35,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 24,
                //"type": "electronic",
                "brand": "Dell",
                "title": 'Inspiron 15.6" Touch-Screen Laptop - Intel Core i5 - 6GB Memory - 1TB Hard Drive - Black',
                "img": "image/dell_1.webp",
                "tabs": ["image/wa1.jpg"] ,
                "price": 35,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 25,
                //"type": "electronic",
                "brand": "Amazon",
                "title": "Echo Dot",
                "img": "image/amazon_2.webp",
                "tabs": ["image/wa1.jpg"] ,
                "price": 49,
                "quantity": 1,
                "category": "appliances"
            },
            {
                "id": 26,
               // "type": "electronic",
                "brand": "Apple",
                "title": 'MacBook Air® (Latest Model) - 13.3" Display - Intel Core i5 - 8GB Memory - 128GB Flash Storage - Silver',
                "img": "image/apple_1.webp",
                "tabs": ["image/wa1.jpg"] ,
                "price": 999.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 27,
                //"type": "electronic",
                "brand": "Sharp",
                "title": 'MSharp - 50" Class (49.5" Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black',
                "img": "image/sharp_1.webp",
                "tabs": ["image/wa1.jpg"] ,
                "price": 299.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 28,
                "brand": "Google",
                //"type": "electronic",
                "title": "Google Home - White/Slate fabric",
                "img": "image/google_2.webp",
                "price": 135,
                "quantity": 1,
                "category": "audio"
            },
            {
                "id": 29,
                "brand": "Apple",
                //"type": "electronic",
                "title": "EarPods™ with Remote and Mic - White",
                "img": "image/apple_2.webp",
                "price": 29,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 30,
                //"type": "electronic",
                "brand": "Philips",
                "title": "hue A19 Smart LED Light Bulb - White Only",
                "img": "image/philips _1.webp",
                "price": 14,
                "quantity": 1,
                "category": "appliances"
            },
            {
                "id": 31,
                //"type": "electronic",
                "brand": "Insignia™",
                "title": 'Insignia™ - 55" Class - (54.6" Diag.) - LED - 1080p - HDTV - Black',
                "img": "image/insignia_1.webp",
                "price": 399.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 32,
                //"type": "electronic",
                "brand": "HP",
                "title": '15.6" Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black',
                "img": "image/hp_1.webp",
                "price": 259.99,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 33,
                //"type": "electronic",
                "brand": "Insignia™",
                "title": '32" Class - (54.6" Diag.) - LED - 1080p - HDTV - Black',
                "img": "image/insignia_1.webp",
                "price": 199.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 34,
                //"type": "electronic",
                "brand": "Lenovo",
                "title": '110-15ISK 15.6" Laptop - Intel Core i3 - 4GB Memory - 1TB Hard Drive - Black',
                "img": "image/lenovo_1.webp",
                "price": 259.99,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 35,
                //"type": "electronic",
                "brand": "Insignia™",
                "title": 'Portable Wireless Speaker - Black',
                "img": "image/insignia_2.webp",
                "price": 17.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 36,
                //"type": "electronic",
                "brand": "Insignia™",
                "title": '92 Bright Multipurpose Paper - White',
                "img": "image/insignia_3.webp",
                "price": 5.9,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 37,
                //"type": "electronic",
                "brand": "Apple",
                "title": 'MacBook Pro with Retina display - 13.3" Display - 8GB Memory - 128GB Flash Storage - Silver',
                "img": "image/apple_3.webp",
                "price": 1399.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 38,
                //"type": "electronic",
                "brand": "SanDisk",
                "title": 'Ultra Plus 32GB microSDHC Class 10 UHS-1 Memory Card - Gray/Red',
                "img": "image/sandisk_1.webp",
                "price": 12.9,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 39,
                //"type": "electronic",
                "brand": "Sharp",
                "title": 'MSharp - 40" Class (39.5" Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black',
                "img": "image/sharp_1.webp",
                "price": 299.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 40 ,
                //"type": "electronic",
                "brand": "Beats",
                "title": 'by Dr. Dre - Powerbeats2 Wireless Earbud Headphones - Black/Red',
                "img": "image/beats_1.webp",
                "price": 129.9,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 41,
                //"type": "electronic",
                "brand": "Amazon",
                "title": "Fire TV (2015 Model) - Black",
                "img": "image/amazon_3.webp",
                "price": 89.2,
                "quantity": 1,
                "category": "audio"
            },
            {
                "id": 42,
                //"type": "electronic",
                "brand": "Apple",
                "title": "$15 iTunes Gift Card - Blue/Purple",
                "img": "image/apple_4.webp",
                "price": 29,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 43,
                //"type": "electronic",
                "brand": "SanDisk",
                "title": 'Ultra Plus 32GB SDHC Class 10 UHS-1 Memory Card - Black/Gray/Red',
                "img": "image/sandisk_2.webp",
                "price": 12.9,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 44,
                //"type": "electronic",
                "brand": "Samsung",
                "title": '55" Class (54.6" Diag.) - LED - 2160p - Smart - 4K Ultra HD TV - Black',
                "img": "image/samsung_1.webp",
                "price": 799.9,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 45,
                //"type": "electronic",
                "brand": "HP",
                "title": '61 2-Pack Ink Cartridges - Black/Cyan/Magenta/Yellow',
                "img": "image/hp_2.webp",
                "price": 39.99,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 46,
                //"type": "electronic",
                "brand": "Lenovo",
                "title": '100S-14IBR 14" Laptop - Intel Celeron - 2GB Memory - 32GB eMMC Flash Memory - Blue',
                "img": "image/lenovo_2.webp",
                "price": 259.99, 
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 47,
                //"type": "electronic",
                "brand": "Apple",
                "title": "Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
                "img": "image/apple_5.webp",
                "price": 79,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 48,
                "type": "electronic",
                "brand": "Amazon",
                "title": 'Fire HD8 - 8" - Tablet - 16GB - Wi-Fi - Black',
                "img": "image/amazon_5.webp",
                "price": 28.2,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 49,
                //"type": "electronic",
                "brand": "Insignia™",
                "title": 'USB 2.0 SD/MMC Memory Card Reader - Black',
                "img": "image/insignia_4.webp",
                "price": 8.49,
                "quantity": 1,
                "category": "cell phone accessories"
            },
            {
                "id": 50,
                //"type": "electronic",
                "brand": "HP",
                "title": '62 2-Pack Ink Cartridges - Black/Tricolor',
                "img": "image/hp_3.webp",
                "price": 9.99,
                "quantity": 1,
                "category": "computers & tablets"
            },
            {
                "id": 51,
                //"type": "electronic",
                "brand": "LG",
                "title": "Tone Ultra Wireless Stereo Headset - Black",
                "img": "image/lg_1.webp",
                "price": 99.9,
                "quantity": 1,
                "category": "audio"
            },
            {
                "id": 52,
                "type": "electronic",
                "brand": "Apple",
                "title": "AirPods - White",
                "img": "image/apple_6.webp",
                "price": 79,
                "quantity": 1,
                "category": "audio"
            },
            {
                "id": 53,
                "type": "electronic",
                "brand": "Samsung",
                "title": 'Galaxy S7 32GB - Black Onyx (Verizon)',
                "img": "image/samsung_2.webp",
                "price": 499.9,
                "quantity": 1,
                "category": "cell phones"
            },
        ]    
}

export default db;