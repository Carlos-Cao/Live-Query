import React, { useState } from 'react';

function PostApi() {

    const first = document.getElementById("firstInput") as HTMLInputElement;
    const last = document.getElementById("lastInput") as HTMLInputElement;
    const titles = document.getElementById("titleInput") as HTMLInputElement;
    const quest = document.getElementById("questionInput") as HTMLInputElement;

    const fn = first.value;
    const ln = last.value;
    const ts = titles.value;
    const qs = quest.value;

    const jsons = ({
        firstName: fn,
        lastName: ln,
        title: ts,
        question: qs
    });

    const url = 'https://questionanswersapi.azurewebsites.net/api/Questions';
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