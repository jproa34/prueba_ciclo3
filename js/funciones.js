function consultarBicicletas() {
    $.ajax(
             {
                url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type         : 'GET',
                dataType     : 'json',
                success      :  function(json){

                                    $("#idDivConsulta").empty();
                                    $("#idDivConsulta").append('<TABLE BORDER>');
                                    $("#idDivConsulta").append("<caption>Bicicletas</caption>");
                                    $("#idDivConsulta").append('<tr><th scope="col"> ID </th><th scope="col"> BRAND </th><th scope="col"> MODEL </th><th scope="col"> CATEGORY_ID </th><th scope="col">NAME</th></tr>');
                                    for (i=0; i < json.items.length; i++){
                                        $("#idDivConsulta").append("<tr>");
                                        $("#idDivConsulta").append('<td scope="row">' + json.items[i].id + '</td>');
                                        $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                        $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                        $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                        $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                        $("#idDivConsulta").append("</tr>");
                                    }
                                    $("#idDivConsulta").append("</TABLE>");

                                    console.log(json)
                                },

                 error       :  function(xhr,status){
                                    console.log("no")
                                }


             }


          );
}

function insertarBicicletas() {

    var id = $("#id").val();
    var brand = $("#brand").val();
    var model = $("#model").val();
    var category = $("#category").val();
    var name = $("#name").val();

    bicicleta    = {id : id ,brand : brand,model : model,category_id : category,name: name};

    $.ajax (
        {

            url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'POST',
            data         :  bicicleta,

            success      :  function(response){
                               consultarBicicletas()
                               document.getElementById("id").value = "";
                               document.getElementById("brand").value = "";
                               document.getElementById("model").value = "";
                               document.getElementById("category").value = "";
                               document.getElementById("name").value = "";
                               console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );

}
function borrarBicicletas() {

    var id = $("#idBorrar").val();

    bicicleta    = {id : id};
    datosEnvio   = JSON.stringify(bicicleta);

    $.ajax (
        {

            url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                consultarBicicletas();
                                document.getElementById("idBorrar").value = "";
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );

}

function actualizarBicicletas() {
    var id = $("#idActualizar").val();
    var brand = $("#brandActualizar").val();
    var model = $("#modelActualizar").val();
    var category = $("#categoryActualizar").val();
    var name = $("#nameActualizar").val();

    bicicleta    = {id : id ,brand : brand,model : model,category_id : category,name: name};
    datosEnvio   = JSON.stringify(bicicleta);


    $.ajax (
                {

                    url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        consultarBicicletas();
                                        document.getElementById("idActualizar").value = "";
                                        document.getElementById("brandActualizar").value = "";
                                        document.getElementById("modelActualizar").value = "";
                                        document.getElementById("categoryActualizar").value = "";
                                        document.getElementById("nameActualizar").value = "";
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );



}

function consultarIdBicicletas() {

    var codigo = $("#idConsulta").val();

    $.ajax (
                {

                    url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        $("#idDivConsulta").empty();
                                        $("#idDivConsulta").append("<table>");
                                        $("#idDivConsulta").append("<caption>Bicicletas</caption>");
                                        $("#idDivConsulta").append("<tr><th>ID</th><th>BRAND</th><th>MODEL</th><th>CATEGORY_ID</th><th>NAME</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");
                                        document.getElementById("idConsulta").value = "";



                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
}
function consultarClientes() {
    $.ajax(
             {
                url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type         : 'GET',
                dataType     : 'json',
                success      :  function(json){

                                    $("#idDivConsultaC").empty();
                                    $("#idDivConsultaC").append('<TABLE BORDER>');
                                    $("#idDivConsultaC").append("<caption>Clientes</caption>");
                                    $("#idDivConsultaC").append('<tr><th scope="col"> ID </th><th scope="col"> NAME </th><th scope="col"> EMAIL </th><th scope="col">AGE</th></tr>');
                                    for (i=0; i < json.items.length; i++){
                                        $("#idDivConsultaC").append("<tr>");
                                        $("#idDivConsultaC").append('<td scope="row">' + json.items[i].id + '</td>');
                                        $("#idDivConsultaC").append("<td>" + json.items[i].name + "</td>");
                                        $("#idDivConsultaC").append("<td>" + json.items[i].email + "</td>");
                                        $("#idDivConsultaC").append("<td>" + json.items[i].age + "</td>");                                        $("#idDivConsulta").append("</tr>");
                                    }
                                    $("#idDivConsultaC").append("</TABLE>");

                                    console.log(json)
                                },

                 error       :  function(xhr,status){
                                    console.log("no")
                                }


             }


          );
}

function insertarClientes() {

    var id = $("#idCliente").val();
    var name = $("#nameCliente").val();
    var email = $("#correo").val();
    var age = $("#age").val();

    cliente    = {id : id ,name: name,email : email, age : age};

    $.ajax (
        {

            url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'POST',
            data         :  cliente,

            success      :  function(response){
                               consultarClientes();
                               document.getElementById("idCliente").value = "";
                               document.getElementById("nameCliente").value = "";
                               document.getElementById("correo").value = "";
                               document.getElementById("age").value = "";
                               console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );

}
function borrarClientes() {

    var id = $("#idClienteBorrar").val();

    cliente    = {id : id};
    datosEnvio   = JSON.stringify(cliente);

    $.ajax (
        {

            url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                consultarClientes();
                                document.getElementById("idClienteBorrar").value = "";
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );

}

function actualizarClientes() {
    var id = $("#idClienteActualizar").val();
    var name = $("#nameClienteActualizar").val();
    var email = $("#correoActualizar").val();
    var age = $("#ageActualizar").val();

    cliente    = {id : id ,name: name,email : email, age : age};
    datosEnvio   = JSON.stringify(cliente);


    $.ajax (
                {

                    url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        consultarClientes();
                                        document.getElementById("idClienteActualizar").value = "";
                                        document.getElementById("nameClienteActualizar").value = "";
                                        document.getElementById("correoActualizar").value = "";
                                        document.getElementById("ageActualizar").value = "";
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );



}

function consultarIdClientes() {

    var codigo = $("#idClienteConsulta").val();

    $.ajax (
                {

                    url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        $("#idDivConsultaC").empty();
                                        $("#idDivConsultaC").append("<table>");
                                        $("#idDivConsultaC").append("<caption>Bicicletas</caption>");
                                        $("#idDivConsultaC").append("<tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsultaC").append("<tr>");
                                            $("#idDivConsultaC").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsultaC").append("<td>" + json.items[i].name + "</td>");
                                            $("#idDivConsultaC").append("<td>" + json.items[i].email + "</td>");
                                            $("#idDivConsultaC").append("<td>" + json.items[i].age + "</td>");
                                            $("#idDivConsultaC").append("</tr>");
                                        }
                                        $("#idDivConsultaC").append("</table>");

                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
}
function consultarMensajes() {
    $.ajax(
             {
                url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                type         : 'GET',
                dataType     : 'json',
                success      :  function(json){

                                    $("#idDivConsultaM").empty();
                                    $("#idDivConsultaM").append('<TABLE BORDER>');
                                    $("#idDivConsultaM").append("<caption>Mensajes</caption>");
                                    $("#idDivConsultaM").append('<tr><th scope="col"> ID </th><th scope="col">MESSAGETEXT</th></tr>');
                                    for (i=0; i < json.items.length; i++){
                                        $("#idDivConsultaM").append("<tr>");
                                        $("#idDivConsultaM").append('<td scope="row">' + json.items[i].id + '</td>');
                                        $("#idDivConsultaM").append("<td>" + json.items[i].messagetext + "</td>");
                                    }
                                    $("#idDivConsultaM").append("</TABLE>");

                                    console.log(json)
                                },

                 error       :  function(xhr,status){
                                    console.log("no")
                                }


             }


          );
}

function insertarMensajes() {

    var id = $("#idMensaje").val();
    var messagetext= $("#mensaje").val();

    mensaje    = {id : id ,messagetext: messagetext};

    $.ajax (
        {

            url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'POST',
            data         :  mensaje,

            success      :  function(response){
                               consultarMensajes();
                               console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );

}
function borrarMensajes() {

    var id = $("#idMensajeBorrar").val();

    mensaje    = {id : id};
    datosEnvio   = JSON.stringify(mensaje);

    $.ajax (
        {

            url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                consultarMensajes();
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );

}

function actualizarMensajes() {
    var id = $("#idMensajeActualizar").val();
    var messagetext= $("#mensajeActualizar").val();

    mensaje    = {id : id ,messagetext: messagetext};
    datosEnvio   = JSON.stringify(mensaje);


    $.ajax (
                {

                    url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        consultarMensajes();
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );



}

function consultarIdMensajes() {

    var codigo = $("#idMensajeConsulta").val();

    $.ajax (
                {

                    url          : 'https://g7e4fbbaa28eb28-retobicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        $("#idDivConsultaM").empty();
                                        $("#idDivConsultaM").append("<table>");
                                        $("#idDivConsultaM").append("<caption>Mensajes</caption>");
                                        $("#idDivConsultaM").append("<tr><th>ID</th><th>MESSAGETEXT</th></th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsultaM").append("<tr>");
                                            $("#idDivConsultaM").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsultaM").append("<td>" + json.items[i].messagetext + "</td>");
                                            
                                            $("#idDivConsultaM").append("</tr>");
                                        }
                                        $("#idDivConsultaM").append("</table>");

                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
}