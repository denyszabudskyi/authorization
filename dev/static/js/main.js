const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const insertCurrenciesData = (data) => {
    const wrapper = document.querySelector('.exchange-rates');

    data.forEach(function (item) {
        let div = document.createElement('div');
        div.className = 'exchange-rates__row';
        div.innerHTML = `
            <div class="exchange-rates__col">
                <div class="exchange-rates__name">${item.ccy}/${item.base_ccy}</div>
            </div>
            <div class="exchange-rates__col">
                <div class="exchange-rates__data exchange-rates__usd-rate">${item.buy}/${item.sale}</div>
            </div>
        `;
        wrapper.appendChild(div);
    });
}

const validateForm = (selector, rules) => {
    // eslint-disable-next-line no-undef,no-new
    const options = {
        rules: rules,
        colorWrong: '#E36463',
        messages: {
            email: 'Enter a valid email address',
            password: 'Enter password'
        },
        submitHandler: function (form, values) {
            insertUserData(values);
        }
    };

    const insertUserData = ({email, password}) => {
        const emailField = document.querySelector('.user-information__email');
        const passwordField = document.querySelector('.user-information__password');
        if (emailField && passwordField) {
            emailField.textContent = email;
            passwordField.textContent = password;
            console.log(`email : ${email}, password : ${password}`);
        }
    }

    new JustValidate(selector, options);

}

fetch(url)
    .then(response => response.json())
    .then(data => insertCurrenciesData(data))
    .catch((error) => console.log(`ERROR : ${error}`));

validateForm('.authorization-form__form', {
    email: {
        required: true,
        email: true
    },
    password: {
        required: true
    }
})
