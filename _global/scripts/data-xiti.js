$j(document).ready(function(){
    $j('[data-xiti]').on('click', function(){
        var tag = $j(this).attr('data-xiti');
        tc_events_global(this,'standard',{'event_name':tag,'level2_id':'23','event_type':'N'});
    });
})