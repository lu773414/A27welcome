const { createApp, ref, onMounted  } = Vue

createApp({
    setup() {
        const page = ref(1);
        const answer = ref('');
        const choose = ref(['','',' ']);

        const setPage = (newPage) => {
            page.value = newPage;
        }

        const chooseAnswer = (value) => {
            choose.value[page.value-1] = value;
            page.value = page.value +1;
            answer.value = `./${choose.value.join('')}.png`
        }

        onMounted(() => {
        })

        return {
            page,
            answer,
            choose,
            setPage,
            chooseAnswer
        }
    }
}).mount('#app')
