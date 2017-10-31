var my_name = "Endo"

function ServiceName(name) {
    if (name == "suzuri"){
        return name;
    }else {
        return "Sorry,we do't shell" + name + ".";
    }
}

// service Obj
var service = {
    ec_service : ["suzuri","colorme","tetote"],
    sh_servie : ["goope"],
    name : my_name,
    service_name : ServiceName("suzuri")
};

console.log(service.ec_service)
console.log(service.ec_service[0])
console.log(service.sh_servie)
console.log(service.name)
console.log(service.service_name)

