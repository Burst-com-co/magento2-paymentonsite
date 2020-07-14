define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'paymentonsite',
                component: 'Burst_Paymentonsite/js/view/payment/method-renderer/paymentonsite'
            }
        );
        return Component.extend({});
    }
);