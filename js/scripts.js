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
};
Address.prototype.fullAddress = function(){
  return this.street + ", " + this.city + ", " + this.county;
};
function resetFields(){
  $("#new-first-name").val("")
  $("#new-last-name").val("")
  $("#new-street").val("")
  $("#new-city").val("")
  $("#new-county").val("")
};


$(function(){
  $("#add-address").click(function(){
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-group new-street form-control">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-group new-city form-control">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-county">County</label>' +
                                  '<input type="text" class="form-group new-county form-control">' +
                                '</div>' +
                              '</div>');
  });

  $("#new-contact").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("#new-first-name").val();
    var inputLastName = $("#new-last-name").val();
    var newContact = new Contact(inputFirstName,inputLastName);
    $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $(".new-address").each(function(){
      var inputStreet = $(this).find("input.new-street").val();
      var inputCity = $(this).find("input.new-city").val();
      var inputCounty = $(this).find("input.new-county").val();
      var newAddress = new Address(inputStreet,inputCity,inputCounty);
      newContact.addresses.push(newAddress);
    });
    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("#addresses").text("");
      newContact.addresses.forEach(function(address){
        $("#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
    resetFields();
  }); 
});