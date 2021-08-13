let reserveTestTable = new DataTable(['宿泊初日', '連泊数', '宿泊人数', '朝食', '昼からチェックインプラン', 'お得な観光プラン', '氏名', '合計料金', '向き']);
reserveTestTable.add(['Monday','2','2','on','on','on','武田晴信','36000','横向き']);
reserveTestTable.add(['Tuesday','3','1','on','on','on','山本寛太','26000','縦向き']);
reserveTestTable.add(['Wednesday','5','1','on','on','off','真田昌虎','44500','縦向き']);
reserveTestTable.add(['Thursday','9','9','off','on','off','武田信子','607500','横向き']);
reserveTestTable.add(['Friday','3','9','on','on','on','上杉景虎','265500','横向き']);
reserveTestTable.add(['Saturday','1','8','off','on','off','柿崎家時','78000','横向き']);
reserveTestTable.add(['Sunday','2','8','off','off','off','直江愛子','126000','縦向き']);

Feature('宿泊予約機能_By_Nexus9');

Data(reserveTestTable).Scenario('Reserve Tests', async({I , current}) => {
    I.ページを移動する('http://example.selenium.jp/reserveApp_Renewal/');
    if(current.向き == '縦向き'){
        I.setOrientation('PORTRAIT');
    }
    if(current.向き == '横向き'){
        I.setOrientation('LANDSCAPE');
    }

    I.fromDay(current.宿泊初日);
    I.click('#guestname');
    I.selectOption('reserve_t', current.連泊数);
    I.selectOption('hc', current.宿泊人数);
    if(current.朝食 == 'on'){
        I.checkOption('#breakfast_on');
    }else{
        I.checkOption('#breakfast_off');
    }
    if(current.昼からチェックインプラン == 'on'){
        I.checkOption('plan_a');
    }
    if(current.お得な観光プラン == 'on') {
        I.checkOption('plan_b');
    }
    I.fillField('gname', current.氏名);

    let term = await I.grabValueFrom('select[name="reserve_t"]');
    let headcount = await I.grabValueFrom('select[name="hc"]');

    I.click('利用規約に同意して次へ');
    I.see(current.合計料金);
    I.seeTerm(term);
    I.seeHeadCount(headcount);
    if(current.朝食 == 'on'){
        I.see('朝食: あり');
    }else{
        I.see('朝食: なし');
    }
    if(current.昼からチェックインプラン == 'on'){
        I.see('昼からチェックインプラン');
    }
    if(current.お得な観光プラン == 'on') {
        I.see('お得な観光プラン');
    }
    I.see(current.氏名);
    I.click('確定');
    I.see('ご来館、心よりお待ちしております。');
    if(current.向き == '縦向き'){
        I.click('body > div.navbar.navbar-fixed-top > div > div > a.btn.btn-navbar');
    }
    I.click('Home');

});
