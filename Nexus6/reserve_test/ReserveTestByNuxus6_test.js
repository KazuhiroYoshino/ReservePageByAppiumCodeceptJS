let reserveTestTable = new DataTable(['宿泊初日', '連泊数', '宿泊人数', '朝食', '昼からチェックインプラン', 'お得な観光プラン', '氏名', '合計料金', '向き']);
reserveTestTable.add(['Monday','3','8','on','off','on','武田晴信','200000','縦向き']);
reserveTestTable.add(['Tuesday','5','1','off','off','off','山本寛太','36750','縦向き']);
reserveTestTable.add(['Wednesday','1','2','on','on','off','真田昌虎','18000','縦向き']);
reserveTestTable.add(['Thursday','5','1','off','on','on','武田信子','40500','縦向き']);
reserveTestTable.add(['Friday','2','9','on','off','off','上杉景虎','159750','縦向き']);
reserveTestTable.add(['Saturday','9','2','on','off','off','柿崎家時','158000','縦向き']);
reserveTestTable.add(['Sunday','9','8','on','on','on','直江愛子','634000','縦向き']);

Feature('宿泊予約機能_By_Nexus6');

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
    I.click('body > div.navbar.navbar-fixed-top > div > div > a.btn.btn-navbar');
    I.click('Home');
});
