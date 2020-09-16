import React, { useState } from 'react';

function PostApi() {

    const first = document.getElementById("firstInput") as HTMLInputElement;
    const last = document.getElementById("lastInput") as HTMLInputElement;
    const quest = document.getElementById("questionInput") as HTMLInputElement;
    const desc = document.getElementById("descriptionInput") as HTMLInputElement;

    const fn = first.value;
    const ln = last.value;
    const qt = quest.value;
    const dn = desc.value;

    const jsons = ({
        firstName: fn,
        lastName: ln,
        question: qt,
        description: dn
    });
    const url = 'https://livequeryapi.azurewebsites.net/api/Questions';
    fetch(url, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(jsons)
    });
    console.log(jsons);
    window.location.reload();
}

export default PostApi;