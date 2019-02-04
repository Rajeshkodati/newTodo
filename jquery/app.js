$(document).ready(function(){
    var itemNumber = 0;
    const keyValue = 13;
    const inputValue = $('.item-input');
 $('.item-input').keypress(function(event){
     if(event.charCode === keyValue){
        
     if(!$('.item-input').val().trim()){
        alert('enter value');
   } 
   else{
      const addItems = '<li class = add-item>'+
     '<div class = view>'+
        '<input type =checkbox class=item-check>'+
        '<span class = item-text>'+inputValue.val()
        +'</span>'+
        '<button class = delete>Del</button>'
     '</div>'     
    '</li>'
    $('.list-items').append(addItems);
    $('.count').html(++itemNumber);
     inputValue.val(''); 
    $('footer').css({display:'block'});
    
    }
  }
  $('.delete').click(function(){
      $(this).parent().remove();
  });
  $('.view').dblclick(function(){
      $('.item-check,.item-text,.delete').hide();
      $('.view').append('<input type = text class = edit>');
      $('.edit').blur(function(){
        $('.item-text').html($(this).val());
        $(this).hide();
        $('.item-check,.item-text,.delete').show();
      });
  });
   $('.item-check').change(function(){
        console.log($(this.checked),'hello')
       $('.clear').css({display:'block'});
    
   });
 });

});