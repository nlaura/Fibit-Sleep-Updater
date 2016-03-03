javascript:(function(){
var leftBedMinutes = document.getElementsByName('leftBedMinutes')[1];
var v = leftBedMinutes.value;

if(v == 59){
	leftBedMinutes.value=parseInt(v)-1;
} else {
	leftBedMinutes.value=parseInt(v)+1;
}

var id = jQuery('.edit').attr('id').split('.')[1];
fitbit.app.sleep.updateSleepRecord(id)

})();