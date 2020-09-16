import React, { useEffect, useState } from 'react';


function Detail(input: any) {


    const url = `https://livequeryapi.azurewebsites.net/api/Questions/${input}`;
    fetch(url, {
        method: "DELETE",
    });
    window.location.reload();
    return (

        <div>

        </div>
    )

}

export default Detail;