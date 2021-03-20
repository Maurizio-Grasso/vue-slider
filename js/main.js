var app = new Vue ({
    el : '#app' ,
    
    data : {
        imgCounter  : 0 ,
        imgPath     : 'img/',
        imgList     : ['scot-1.jpg' , 'scot-2.jpg' , 'scot-3.jpg' , 'scot-4.jpg' , 'sic-1.jpg' , 'sic-2.jpg' , 'sic-3.jpg', 'sic-4.jpg' , 'sic-5.jpg' , 'sic-6.jpg' ,'tusc-1.jpg','tusc-2.jpg','tusc-3.jpg','tusc-4.jpg','tusc-5.jpg'] ,

    } ,

    created : function() {
        setInterval( () => { this.imgNext()}, 3000);
    } ,

    methods : {
        imgNext : function() {
            if (this.imgCounter == this.imgList.length - 1) this.imgCounter = 0;
            else this.imgCounter++;
        } ,

        imgPrev : function() {
            if (this.imgCounter == 0 ) this.imgCounter = this.imgList.length - 1;
            else this.imgCounter--;
        } ,

        setImage : function(index) {
            this.imgCounter = index ;
        }
    }
});

