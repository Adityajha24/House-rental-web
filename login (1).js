Array.from(document.getElementsByTagName('input')).forEach((i, a) => {
            i.addEventListener('focus', () => {
                document.getElementsByClassName('login_field')[a].style.borderBottom = " 2px solid #be6b70";
            })
            i.addEventListener('focusout', () => {
                document.getElementsByClassName('login_field')[a].style.borderBottom = " 2px solid gray";

            })
        }