function Contact(first,last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = []
};
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};
function Address(street,city,county){
  this.street = street;
  this.city = city;
  this.county = county;
}


$(function(){
  $("#new-contact").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("#new-first-name").val();
    var inputLastName = $("#new-last-name").val();
    var newContact = new Contact(inputFirstName,inputLastName);
    $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  }); 
});