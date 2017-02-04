<script type="text/javascript">
var domainroot="https://phaidra.cab.unipd.it/"

var searchaction=[
"http://www.google.com/search",
]
var queryfieldname=["q","p","q"]
function switchaction(cur, index){
cur.form.action=searchaction[index]
document.getElementById("hiddenquery").name=queryfieldname[index]
}
function jksitesearch(curobj){
for (i=0; i< document.jksearch.se.length; i++){ 
if (document.jksearch.se[i].checked==true)
switchaction(document.jksearch.se[i], i)
}
document.getElementById("hiddenquery").value="site:"+domainroot+" "+curobj.qfront.value
}
</script>