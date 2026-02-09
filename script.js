function selectPlan(plan) {

    document.querySelector('.cards').style.display = 'none';

    const loading = document.getElementById('loading');
    const success = document.getElementById('success');

    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        success.classList.remove('hidden');
        console.log("Piano selezionato:", plan);
    }, 2000);
}
