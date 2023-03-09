document.addEventListener("DOMContentLoaded", ()=>{
    daysWeek = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
    month = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    data = new Date
    document.write(daysWeek[data.getDay() ] + ", " + data.getDate() + " de " + month [data.getMonth() ] + " de " + data.getFullYear())
})
