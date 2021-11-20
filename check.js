import { elements } from "./elements.js"

const error = (input,message) => {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling
    div.innerText = message
    div.className = 'invalid-feedback'
}

const success = async (input) => {
    input.className = 'form-control is-valid'
}

const checkDate = (input) => {
    if(input.value == ''){
        input.className = 'form-control is-invalid'
    }else{
        input.className = 'form-control is-valid'
    }
}

export const checkLength = (inputs) => {
    inputs.forEach((input) => {
        if (/^\s*$/.test(input.value)) {
            error(input, ` ${input.id} is required.`);
        } else {
            success(input);
        }
    });
}

const nextPage = () => {
    if(elements.courseName.className == 'form-control is-valid' && elements.teacherName.className == 'form-control is-valid' && elements.studentName.className == 'form-control is-valid' && elements.lessonsHours.className == 'form-control is-valid' && elements.completedDate.className == 'form-control is-valid'){
        var url = '/example.html';
        window.open(url, "", "width=800,height=600");
        var index = '/index.html'
        window.close(index,"")
    }
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    

    await checkLength([elements.courseName, elements.teacherName, elements.studentName, elements.lessonsHours]);

    localStorage.setItem('courseValue', elements.courseName.value)
    localStorage.setItem('teacherValue', elements.teacherName.value)
    localStorage.setItem('studentValue', elements.studentName.value)
    localStorage.setItem('lessonsValue', elements.lessonsHours.value)

    await checkDate(elements.completedDate);

    localStorage.setItem('dateValue', elements.completedDate.value)

    await nextPage();

});

// export const data = {
//     courseValue: elements.courseName.value,
//     teacherValue: elements.teacherName.value,
//     studentValue: elements.studentName.value,
//     lessonsValue: elements.lessonsHours.value,
//     dateValue: elements.completedDate.value
// }
// console.log(data);

