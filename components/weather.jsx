const Weather = () => {
    // 日付を取得する
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const dateLable = document.getElementById("date-display");
       
        const date = new Date();
        const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
        const formattedDate = `${date.getFullYear()}年 ${date.getMonth() + 1}月 ${date.getDate()}日 ${weekdays[date.getDay()]}曜日`;
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div>
            <h3>{currentDate}</h3>
            <div id="ww_015ccc60f42be" v='1.3' loc='id' a='{"t":"responsive","lang":"ja","sl_lpl":1,"ids":["wl926"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>More forecasts: <a href="https://oneweather.org/ja/tokyo/10_days/" id="ww_015ccc60f42be_u" target="_blank">東京 10日間天気</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_015ccc60f42be"></script>
        </div>
    );
}