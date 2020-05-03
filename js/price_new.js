var number_of_customer_list = [100, 200, 300, 500, 1000, 2000, 5000];

var taxShieldSoftwareCost = [
     [1000.00, 700.00, 490.00, 0, 0, 0 ],
     [2000.00, 1400.00, 980.00, 0, 0, 0 ],
     [3000.00, 2100.00, 1470.00, 0, 0, 0 ],
     [3500.00, 2450.00, 1715.00, 0, 0, 0 ],
     [3750.00, 2625.00, 1837.50, 0, 0, 0 ],
     [4000.00, 2800.00, 1960.00, 0, 0, 0 ],
     [4500.00, 3150.00, 2205.00, 0, 0, 0 ],
     [4750.00, 3325.00, 2327.50, 0, 0, 0 ],
     [5000.00, 3500.00, 2450.00, 0, 0, 0 ],
     [5500.00, 3850.00, 2695.00, 0, 0, 0 ],
     [6000.00, 4200.00, 2940.00, 0, 0, 0 ],
]

var fundedReferrals50Cost = [
    [ 9, 8.5, 8, 7.5, 7.5, 7, 6.5 ],
    [ 9.5, 9, 8.5, 8, 7.5, 7, 7 ],
    [ 9.7, 9.5, 9, 8.5, 8, 7.5, 7 ],
    [ 9.8, 9.5, 9, 8.5, 8, 7.5, 7 ],
    [ 9.9, 9.5, 9, 8.5, 8, 7.5, 7 ],
    [ 10, 9.7, 9.5, 9, 8, 7.5, 7.5 ],
    [ 10.2, 10, 9.7, 9.5, 9, 8, 7.5 ],
    [ 10.3, 10, 9.7, 9.5, 9, 8.5, 8 ],
    [ 10.4, 10.4, 10, 9.5, 9.3, 9, 8.5 ],
    [ 10.5, 10, 9.5, 9.5, 9.3, 9, 8.5 ],
    [ 10.6, 10.4, 10, 9.5, 9.3, 9, 8.5 ]
];

var customerFundedReferralsCost = [
    [5, 4.85, 4.25, 4, 4, 3.5, 3],
    [5, 5, 4.85, 4, 4, 3.5, 3],
    [5, 5, 5, 4.85, 4, 3.5, 3],
    [5, 5, 5, 5, 4.5, 3.5, 3],
    [5, 5, 5, 5, 5, 3.5, 3],
    [5, 5, 5, 4, 4, 4, 3],
    [5, 5, 5, 5, 4.75, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
];

var textMessageCost = [
     [120.00 , 256.80 , 385.20 , 770.40 , 1155.60 , 2080.08 , 3744.14 ],
     [175.20 , 374.93 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [255.79 , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [373.46  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [545.25  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [796.06  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [1,162.25  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [1,696.88  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [2,477.45  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [3,617.07  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ],
     [5,280.92  , 547.39 , 562.39 , 1124.78 , 1687.18 , 2530.76 , 3796.15 ]
 ];

var hollidayAdvanceModuleCost = [
    [5, 4.85, 4.25, 4, 4, 3.5, 3],
    [5, 5, 4.85, 4, 4, 3.5, 3],
    [5, 5, 5, 4.85, 4, 3.5, 3],
    [5, 5, 5, 5, 4.5, 3.5, 3],
    [5, 5, 5, 5, 5, 3.5, 3],
    [5, 5, 5, 4, 4, 4, 3],
    [5, 5, 5, 5, 4.75, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
    [5, 5, 5, 5, 5, 4, 3.5],
];

var tollFreeNumbersCostYearly = 75;
var localNumbersCostYearly = 50;


var fundedReferrals50CostText = "Free";
var customerFundedReferralsCostText = "Free";
var textMessageCostText = "Free";
var hollidayAdvanceModuleCostText = "Free";
var coBrandingCostText = "Free";
var leadManagemntCostText = "Free";
var callTrackingText = "";

var number_of_store = 0;
var number_of_customer = 0;
var taxShieldSoftwarePrice = taxShieldSoftwareCost[number_of_store][number_of_customer];
var fundedReferrals50Price = 0;
var customerFundedReferralsPrice = 0;
var textMessageCostPrice = 0;
var hollidayAdvanceModulePrice = 0;
var coBrandingPrice = 0;
var positvePayIntegrationPrice = 1500;
var leadManagemntCostMonthlyPrice = 0;
var leadManagemntCostYearlyPrice = 0;
var tollFreeNumbersCostYearlyPrice = 0;
var localNumbersCostYearlyPrice = 0;
var tollFreeNumbersCostMonthlyPrice = 0;
var localNumbersCostMonthlyPrice = 0;
var outgoing_calls = 100;
var incoming_calls = 100;
var local_numbers = 1;
var toll_free_numbers = 1; 

var total_monthly_price = 0;
var total_yearly_price = 0;
var taxshieldSoftwareFlag = true;
var fundedReferrals50Flag = true;
var customerFundedReferralsFlag = true;
var textMessageFlag = true;
var hollidayAdvanceModuleFlag = true;
var coBrandingFlag = true;
var fundedAdvanceFlag = false;
var positvePayIntegrationFlag = false;
var callTrackingFlag = false;

function update_price_text() {
    if (fundedReferrals50Price){
        // jQuery(".fundedReferrals50CostText").html('$' + parseFloat(fundedReferrals50Price).toFixed(2));
        jQuery(".fundedReferrals50CostText").html('$'+ fundedReferrals50Cost[number_of_store][number_of_customer]);
    }
    else{
        jQuery(".fundedReferrals50CostText").html('$'+ fundedReferrals50Cost[number_of_store][number_of_customer]);
    }
    if (customerFundedReferralsPrice){
        jQuery(".customerFundedReferralsCostText").html('$'+ customerFundedReferralsCost[number_of_store][number_of_customer]);
        // jQuery(".customerFundedReferralsCostText").html('$' + parseFloat(customerFundedReferralsPrice).toFixed(2));
    }else{
        jQuery(".customerFundedReferralsCostText").html('$'+ customerFundedReferralsCost[number_of_store][number_of_customer]);
    }
    if (textMessageCostPrice){
        jQuery(".textMessageCostText").html('$'+ textMessageCost[number_of_store][number_of_customer]);
        // jQuery(".textMessageCostText").html('$' + parseFloat(textMessageCostPrice).toFixed(2));
    }else{
        jQuery(".textMessageCostText").html('$'+ textMessageCost[number_of_store][number_of_customer]);
    }
    if (hollidayAdvanceModulePrice){
        jQuery(".hollidayAdvanceModuleCostText").html('$'+ hollidayAdvanceModuleCost[number_of_store][number_of_customer]);
        // jQuery(".hollidayAdvanceModuleCostText").html('$' + parseFloat(hollidayAdvanceModulePrice).toFixed(2));
    }else{
        jQuery(".hollidayAdvanceModuleCostText").html('$'+ hollidayAdvanceModuleCost[number_of_store][number_of_customer]);
    }
    if (localNumbersCostYearlyPrice && tollFreeNumbersCostYearlyPrice){
        jQuery(".callTrackingText").html('$' + parseFloat((tollFreeNumbersCostYearlyPrice + localNumbersCostYearlyPrice)).toFixed(2));
    }else if (tollFreeNumbersCostYearlyPrice)
    {
        jQuery(".callTrackingText").html('$' + parseFloat(tollFreeNumbersCostYearlyPrice).toFixed(2));
    }
    else
    {
        jQuery(".callTrackingText").html(callTrackingText);
    }
    jQuery(".yearly_price").html('$' +parseFloat(total_yearly_price).toFixed(2));
    jQuery(".monthly_price").html('$' +parseFloat(total_monthly_price).toFixed(2));
}
function price_calculator() {
    if (fundedReferrals50Flag){
        fundedReferrals50Price = fundedReferrals50Cost[number_of_store][number_of_customer] * number_of_customer_list[number_of_customer] * 0.4;
    }else{
        fundedReferrals50Price = 0;
    }
    if(customerFundedReferralsFlag){
        customerFundedReferralsPrice = customerFundedReferralsCost[number_of_store][number_of_customer] * number_of_customer_list[number_of_customer] * 0.4;
    }else{
        customerFundedReferralsPrice = 0;
    }
    if(textMessageFlag){
        textMessageCostPrice = textMessageCost[number_of_store][number_of_customer];
    }else{
       textMessageCostPrice = 0; 
    }
    if(hollidayAdvanceModuleFlag){
        hollidayAdvanceModulePrice = hollidayAdvanceModuleCost[number_of_store][number_of_customer] * number_of_customer_list[number_of_customer] * 0.7;
    }else{
       hollidayAdvanceModulePrice = 0; 
    }
    if(callTrackingFlag)
    {
        tollFreeNumbersCostYearlyPrice = toll_free_numbers * tollFreeNumbersCostYearly; 
        localNumbersCostYearlyPrice = local_numbers * localNumbersCostYearly;
    }
    
    total_yearly_price = textMessageCostPrice;         
    total_monthly_price = textMessageCostPrice*1.3;         
    update_price_text();
}

jQuery('select.number_of_store').on('change', function(){
    number_of_store = jQuery("select.number_of_store option").filter(":selected").val();
    price_calculator();
});

// jQuery('.callTrackingCheckbox').on('change', function(){
//     jQuery('.callTrackingDiv').toggle();
//     // jQuery('.calltracking_fields').toggle();
// });


jQuery('.fundedAdvanceCheckbox').on('change', function(){
    jQuery('.fundedAdvanceDiv').toggle();
    if($(this).is(':checked')){
        jQuery(".hollidayAdvanceCheckbox").attr("disabled", true);
        fundedAdvanceFlag = true;
    } else {
        fundedAdvanceFlag = false;
        jQuery(".hollidayAdvanceCheckbox").removeAttr("disabled");
    }
    price_calculator();
});
jQuery('.textMessageCheckbox').on('change', function(){
    jQuery('.textMessageDiv').toggle();
    if($(this).is(':checked')){
        textMessageFlag = true;
    } else {
        textMessageFlag = false;
    }
    price_calculator();
});
jQuery('.customerFundedReferralsCheckbox').on('change', function(){
    jQuery('.customerFundedReferralsDiv').toggle();
    if($(this).is(':checked')){
        customerFundedReferralsFlag = true;
        jQuery(".fundedReferrals50Checkbox").attr("disabled", true);
    } else {
        customerFundedReferralsFlag = false;
        jQuery(".fundedReferrals50Checkbox").removeAttr("disabled");
    }
    price_calculator();
});

jQuery('.fundedReferrals50Checkbox').on('change', function(){
    jQuery('.fundedReferralDiv').toggle();
    if($(this).is(':checked')){
        fundedReferrals50Flag = true;
        jQuery(".customerFundedReferralsCheckbox").attr("disabled", true);
    } else {
        fundedReferrals50Flag = false;
        jQuery(".customerFundedReferralsCheckbox").removeAttr("disabled");
    }
    price_calculator();
});

jQuery('.hollidayAdvanceCheckbox').on('change', function(){
    jQuery('.hollidayAdvanceModuleDiv').toggle();
    if($(this).is(':checked')){
        hollidayAdvanceModuleFlag = true;
        jQuery(".fundedAdvanceCheckbox").attr("disabled", true);
    } else {
        hollidayAdvanceModuleFlag = false;
        jQuery(".fundedAdvanceCheckbox").removeAttr("disabled");

    }
    price_calculator();
});


jQuery('.callTrackingCheckbox').on('change', function(){
    jQuery('.callTrackingDiv').toggle();
    if($(this).is(':checked')){
        callTrackingFlag = true;
    } else {
        callTrackingFlag = false;

    }
    price_calculator();
});

jQuery('.outgoing_calls').on('change', function(){
    outgoing_calls = $(this).val();
    price_calculator();
});

jQuery('.incoming_calls').on('change', function(){
    incoming_calls = $(this).val();
    price_calculator();
});

jQuery('.local_numbers').on('change', function(){
    local_numbers = $(this).val();
    price_calculator();
});

jQuery('.toll_free_numbers').on('change', function(){
    toll_free_numbers = $(this).val();
    price_calculator();
});

function update_number_of_customer(number) {
    number_of_customer = number;
    price_calculator();
}


$(".subscription_form").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = 'https://app.gettaxshield.com/api/subscribe';

    $.ajax({
           type: "GET",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
            $('.subscription_notifications').show();
            $('.subscription_notifications_success').show();
           },
           error:function(data)
           {
            $('.subscription_notifications').show();
            $('.subscription_notifications_success').show();
            // $('.subscription_notifications_danger').show();
           }
         });


});


$(".contact-us-form").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = 'https://app.gettaxshield.com/api/lead_gen';

    $.ajax({
           type: "GET",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               window.location.replace('https://www.gettaxshield.com/');
           },
           error:function(data)
           {
               window.location.replace('https://www.gettaxshield.com/');
           }
         });


});

jQuery('document').ready(function(){
    $('.subscription_notifications').hide();
    $('.subscription_notifications_success').hide();
    $('.subscription_notifications_danger').hide();
    price_calculator();
});
