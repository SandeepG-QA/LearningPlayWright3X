let responseTime = 850;//ms
let sla=1000;//ms , sla- Service level Agreement
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(`Response: ${responseTime} ms - ${slaStatus}`);
// Template literal
//Instead of concatenating strings with +, 
// you can insert variables directly using ${}
//