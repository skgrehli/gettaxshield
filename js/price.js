jQuery('document').ready(function(){

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

    var coBrandingCost = 1000;
    var positvePayIntegrationCost = 1500;
    var leadManagemntCostMonthly = 49;
    var leadManagemntCostYearly = 499.8;
    var tollFreeNumbersCostYearly = 75;
    var localNumbersCostYearly = 50;


    var fundedReferrals50CostText = "Free";
    var customerFundedReferralsCostText = "Free";
    var textMessageCostText = "Free";
    var hollidayAdvanceModuleCostText = "Free";
    var coBrandingCostText = "Free";
    var positvePayIntegrationCostText = "";
    var leadManagemntCostText = "Free";
    var callTrackingText = "";

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
    var number_of_store = 0;
    var number_of_customer = 0;

    var total_monthly_price = 0;
    var total_yearly_price = 0;
    var taxshieldSoftwareFlag = true;
    var fundedReferrals50Flag = true;
    var customerFundedReferralsFlag = true;
    var textMessageFlag = true;
    var hollidayAdvanceModuleFlag = true;
    var coBrandingFlag = true;
    var leadManagemntFlag = true;
    var hollidayAdvancePriceFlag = true;
    var positvePayIntegrationFlag = false;
    var callTrackingFlag = false;

    function update_number_of_customer(number) {
        number_of_customer = number;
        price_calculator();
    }

    function update_price_text() {
        console.log('function called');
        if (fundedReferrals50Price){
            jQuery(".fundedReferrals50CostText").html('$' + fundedReferrals50Price);
        }
        else{
            jQuery(".fundedReferrals50CostText").html(fundedReferrals50CostText);
        }
        if (customerFundedReferralsPrice){
            jQuery(".customerFundedReferralsCostText").html('$' + customerFundedReferralsPrice);
        }
        else{
            jQuery(".customerFundedReferralsCostText").html(customerFundedReferralsCostText);
        }
        if (textMessageCostPrice){
            jQuery(".textMessageCostText").html('$' + textMessageCostPrice);
        }else
        {
            jQuery(".textMessageCostText").html(textMessageCostText);
        }if (hollidayAdvanceModulePrice){
            jQuery(".hollidayAdvanceModuleCostText").html('$' +hollidayAdvanceModulePrice);

        }else
        {
            jQuery(".hollidayAdvanceModuleCostText").html(hollidayAdvanceModuleCostText);
        }if (coBrandingPrice){
            jQuery(".coBrandingCostText").html('$'+coBrandingPrice);
        }else
        {
            jQuery(".coBrandingCostText").html(coBrandingCostText);
        }if (positvePayIntegrationPrice){
            jQuery(".positvePayIntegrationCostText").html('$'+positvePayIntegrationPrice);
        }else
        {
            jQuery(".positvePayIntegrationCostText").html(positvePayIntegrationCostText);
        }if (leadManagemntCostYearlyPrice){
            jQuery(".leadManagemntCostText").html('$'+leadManagemntCostYearlyPrice);
        }else
        {
            jQuery(".leadManagemntCostText").html(leadManagemntCostText);
        }if (localNumbersCostYearlyPrice || tollFreeNumbersCostYearlyPrice){
            jQuery(".callTrackingText").html('$' + tollFreeNumbersCostYearlyPrice);
        }
        else
        {
            jQuery(".callTrackingText").html(callTrackingText);
        }
        jQuery(".yearly_price").html(total_yearly_price);
        jQuery(".monthly_price").html(total_monthly_price);
    }
    function price_calculator() {
        if (taxshieldSoftwareFlag)
        {
            fundedReferrals50Price = 0;
            customerFundedReferralsPrice = 0;
            textMessageCostPrice = 0;
            hollidayAdvanceModulePrice = 0;
            coBrandingPrice = 0;
            leadManagemntCostMonthlyPrice = 0;
            leadManagemntCostYearlyPrice = 0;
        }
        else{
            if (fundedReferrals50Flag){
                fundedReferrals50Price = fundedReferrals50Cost[number_of_store][number_of_customer];
            }else{
                fundedReferrals50Price = 0;
            }
            if(customerFundedReferralsFlag){
                customerFundedReferralsPrice = customerFundedReferralsCost[number_of_store][number_of_customer];
            }else{
                customerFundedReferralsPrice = 0;
            }
            if(textMessageFlag){
                textMessageCostPrice = textMessageCost[number_of_store][number_of_customer];
            }else{
               textMessageCostPrice = 0; 
            }
            if(hollidayAdvancePriceFlag){
                hollidayAdvanceModulePrice = hollidayAdvanceModuleCost[number_of_store][number_of_customer];
            }else{
               hollidayAdvanceModulePrice = 0; 
            }
            if(coBrandingFlag){
                coBrandingPrice = coBrandingCost;
            }else{
               coBrandingPrice = 0 
            }
            if(positvePayIntegrationFlag){
                positvePayIntegrationPrice = positvePayIntegrationCost;
            }else{
               positvePayIntegrationPrice = 0 
            }
            if(leadManagemntFlag){
               leadManagemntCostMonthlyPrice = leadManagemntCostYearly;
            }else{
               leadManagemntCostMonthlyPrice = 0; 
            }
            // tollFreeNumbersCostYearlyPrice
            // localNumbersCostYearlyPrice
        }
        total_yearly_price = fundedReferrals50Price + customerFundedReferralsPrice + textMessageCostPrice + hollidayAdvanceModulePrice + coBrandingPrice + positvePayIntegrationPrice + leadManagemntCostMonthlyPrice + leadManagemntCostYearlyPrice + tollFreeNumbersCostYearlyPrice + localNumbersCostYearlyPrice;         
        total_monthly_price = leadManagemntCostMonthlyPrice + tollFreeNumbersCostMonthlyPrice + localNumbersCostMonthlyPrice;         
        update_price_text();
    }

    jQuery('select.number_of_store').on('change', function(){
        number_of_store = jQuery("select.number_of_store option").filter(":selected").val();
        price_calculator();
    });

    jQuery('.taxShieldSoftwareCheckbox').on('change', function(){
        if($(this).is(':checked')){
            taxshieldSoftwareFlag = true;
        } else {
            taxshieldSoftwareFlag = false;
        }
        price_calculator();
    });

    jQuery('.callTrackingCheckbox').on('change', function(){
        jQuery('.calltracking_fields').toggle();
    });

    jQuery('.bankPositvePayCheckbox').on('change', function(){
        if($(this).is(':checked')){
            positvePayIntegrationFlag = true;
        } else {
            positvePayIntegrationFlag = false;
        }
        price_calculator();
    });

    jQuery('.coBrandingCheckbox').on('change', function(){
        if($(this).is(':checked')){
            coBrandingFlag = true;
        } else {
            coBrandingFlag = false;
        }
        price_calculator();
    });

    jQuery('.leadManagementCheckbox').on('change', function(){
        if($(this).is(':checked')){
            leadManagemntFlag = true;
        } else {
            leadManagemntFlag = false;
        }
        price_calculator();
    });
    jQuery('.textMessageCheckbox').on('change', function(){
        if($(this).is(':checked')){
            textMessageFlag = true;
        } else {
            textMessageFlag = false;
        }
        price_calculator();
    });
    jQuery('.customerFundedReferralsCheckbox').on('change', function(){
        if($(this).is(':checked')){
            customerFundedReferralsFlag = true;
        } else {
            customerFundedReferralsFlag = false;
        }
        price_calculator();
    });

    jQuery('.fundedReferrals50Checkbox').on('change', function(){
        if($(this).is(':checked')){
            fundedReferrals50Flag = true;
        } else {
            fundedReferrals50Flag = false;

        }
        price_calculator();
    });

    jQuery('.hollidayAdvanceCheckbox').on('change', function(){
        if($(this).is(':checked')){
            hollidayAdvanceModuleFlag = true;
        } else {
            hollidayAdvanceModuleFlag = false;

        }
        price_calculator();
    });


    update_price_text();
});
