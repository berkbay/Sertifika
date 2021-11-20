import { elements } from "./elements.js";

export const imageView = () =>{
    let html = "";

    html += `
        <img src="https://s.udemycdn.com/meta/default-meta-image-v2.png" class="card-img-top">
    `;

    elements.image.innerHTML = html;
}

imageView();

export const courseView = () =>{
    let html = "";

    html += `
        <h5 style="color: gray;">Bitirme Sertifikası</h5>
        <h1 style="font-size: 70px;">${localStorage.getItem('courseValue')}</h1>
        <h5 style="color: gray;">Eğitmen : ${localStorage.getItem('teacherValue')}</h5>
    `;

    elements.courseInformation.innerHTML = html;
}

courseView();

export const studentView = () =>{
    let html = "";

    html += `
        <h1>${localStorage.getItem('studentValue')}</h1>
        <p>Tarih: ${localStorage.getItem('dateValue')}</p>
        <p>Ders saati: ${localStorage.getItem('lessonsValue')}saat</p>
    `;

    elements.studentInformation.innerHTML = html;
}

studentView();