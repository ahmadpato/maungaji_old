 /*Online Calculate*/
function calculateAmount(val) {
    var tot_price_personnel     = val * 25000;
    var reverse                 = tot_price_personnel.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_personnel');
    divobj.value = 'Rp. ' + ribuan;
}

function calculateAmountFamily(val) {
    var tot_price_family        = val * 50000;
    var reverse                 = tot_price_family.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_family');
    divobj.value = 'Rp. ' + ribuan;
}

 function calculateAmountGroup(val) {
    var tot_price_group         = val * 75000;
    var reverse                 = tot_price_group.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_group');
    divobj.value = 'Rp. ' + ribuan;
}
 /*End Online Calculate*/

 /*Offline Calculate*/
 function calculateAmountOffline(val) {
    var tot_price_personnel_off = val * 100000;
    var reverse                 = tot_price_personnel_off.toString().split('').reverse().join(''),
     ribuan                     = reverse.match(/\d{1,3}/g);
     ribuan                     = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_personnel_offline');
    divobj.value = 'Rp. ' + ribuan;
}

function calculateAmountFamilyOffline(val) {
    var tot_price_family_offline        = val * 125000;
    var reverse                         = tot_price_family_offline.toString().split('').reverse().join(''),
     ribuan                             = reverse.match(/\d{1,3}/g);
     ribuan                             = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_family_offline');
    divobj.value = 'Rp. ' + ribuan;
}

 function calculateAmountGroupOffline(val) {
    var tot_price_group_offline         = val * 150000;
    var reverse                         = tot_price_group_offline.toString().split('').reverse().join(''),
     ribuan                             = reverse.match(/\d{1,3}/g);
     ribuan                             = ribuan.join('.').split('').reverse().join('');

    /*display the result*/
    var divobj = document.getElementById('tot_amount_group_offline');
    divobj.value = 'Rp. ' + ribuan;
}
 /*End Offline Calculate*/
