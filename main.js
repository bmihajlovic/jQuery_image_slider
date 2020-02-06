var img = $('img');
var holder = $('#holder');
var info = $('#info');
var img1Info = 'lorem ipsum dolor sit amet, consectetur elit atque.';
    
img.on('click', function() {
    info.html('');
   var self = $(this);
    
   var copy = self.clone();
    
    copy.css({
        position : 'absolute',
        width : self.width(),
        height : self.height(),
        top : self.offset().top,
        left : self.offset().left
    });
    
    copy.animate({
        width : holder.width(),
        height : holder.height(),
        top : holder.offset().top,
        left : holder.offset().left
    }, 1000, function() {
        info.append(img1Info);
    })
    $('#wrapp').append(copy);
});