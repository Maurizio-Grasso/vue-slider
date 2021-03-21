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
                src : 'scot-3.jpg' , 
                alt : 'Neist Point, Isola di Skye, Scozia'
            } ,

            {
                src : 'scot-4.jpg' , 
                alt : 'Callanish Standing Stones (Isola di Lewis and Harris)'
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
                src : 'sic-4.jpg' , 
                alt : 'Gangi (Sicilia)'
            } ,

            {
                src : 'sic-5.jpg' , 
                alt : 'Chiesa Madre di Modica'
            } ,

            {
                src : 'sic-6.jpg', 
                alt : 'Saline di Trapani (Sicilia)'
            } ,

            {
                src : 'tusc-1.jpg',
                alt : 'Ponte del Diavolo di Borgo a Mozzano'
            } ,

            {
                src : 'tusc-2.jpg',
                alt : 'Panoramica di San Gimignano (Siena)'
            } ,

            {
                src : 'tusc-3.jpg' ,
                alt : 'Centro storico di Pontremoli (Toscana)'
            } ,

            {
                src : 'tusc-4.jpg',
                alt : 'Panorama di Siena'
            } ,

            {
                src : 'tusc-5.jpg' ,
                alt : 'Duomo di Firenze visto da Piazzale Michelangelo'
            }

        ]
    } ,

    created : function() {
       setInterval( () => {this.setImage(this.imgCounter + 1)} , 3000);
    } ,

    methods : {
        setImage : function(index) {
            if(index < 0)   this.imgCounter = this.imgList.length - 1 ;
            else if (index >= this.imgList.length) this.imgCounter = 0 ;            
            else this.imgCounter = index ;
        }
    }
});

