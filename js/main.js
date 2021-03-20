var app = new Vue ({
    el : '#app' ,
    
    data : {
        imgCounter  : 0 ,
        imgPath     : 'img/',
        imgList     : [
            {
                src : 'scot-1.jpg' , 
                alt : 'Isola di Skye (Scozia)'
            } ,

            {
                src : 'scot-2.jpg' , 
                alt : 'Edimburgo al crepuscolo'
            } ,

            {
                src : 'sic-1.jpg' , 
                alt : 'Etna vista da Taormina'
            } ,

            {
                src : 'sic-2.jpg' , 
                alt : 'Aci Trezza (Sicilia) con i suoi faraglioni'
            } ,

            {
                src : 'sic-3.jpg', 
                alt : 'Isola Bella, Taormina (Sicilia)'
            } ,

            {
                src : 'tusc-3.jpg',
                alt : 'Pontremoli, Toscana'
            } ,

            {
                src : 'tusc-4.jpg',
                alt : 'Panorama di Siena (Toscana)'
            } ,

            {
                src : 'tusc-5.jpg' ,
                alt : 'Duomo di Firenze visto da Piazzale Michelangelo'
            }
        ]
    } ,

    created : function() {
        // setInterval( () => { this.imgNext()}, 3000);
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

